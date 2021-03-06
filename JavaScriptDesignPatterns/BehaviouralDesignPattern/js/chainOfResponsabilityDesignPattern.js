//<<<<<<<<<<<<<<<<<<<<CHAIN RESPONSABILITY DESIGN PATTERN>>>>>>>>>>>>>>>>>>>>>>>>>
// links objects to each other like a chain
// there is no central control, each link decides if it continues to the next chain or not
// This pattern is often found in animation, where is a lot anitmation happening, and are realted to other objects

(function(win, $) {
  function clone(source, outcome) {
    for (let attr in source.prototype) {
      outcome.prototype[attr] = source.prototype[attr];
    }
  }

  function Circle() {
    this.item = $('<div class="circle"></div>');
  }
  Circle.prototype.color = function(clr) {
    this.item.css("background", clr);
  };
  Circle.prototype.move = function(left, top) {
    this.item.css("left", left);
    this.item.css("top", top);
  };

  Circle.prototype.get = function() {
    return this.item;
  };
  //!!! Chain responsability design pattern
  Circle.prototype.next = function(shp) {
    if (shp) {
      this.nextShape = shp;
    }
    return this.nextShape;
  };
  //!!! Chain responsability design pattern
  Circle.prototype.chainDo = function(action, args, count) {
    this[action].apply(this, args);
    if (count && this.nextShape) {
      setTimeout(
        binder(
          this,
          function() {
            this.nextShape.chainDo(action, args, --count);
          },
          20
        )
      );
    }
  };
  Circle.prototype.getID = function() {
    return this.id;
  };

  Circle.prototype.setID = function(id) {
    this.id = id;
  };

  function Rect() {
    this.item = $('<div class="rect"></div>');
  }
  function binder(scope, func) {
    return function() {
      return func.apply(scope, arguments);
    };
  }
  function shapeFacade(shp) {
    return {
      color: binder(shp, shp.color),
      move: binder(shp, shp.move),
      getID: binder(shp, shp.getID)
    };
  }
  function selfDestructDecorator(obj) {
    obj.item.click(function() {
      obj.kill();
    });
    obj.kill = function() {
      obj.item.remove();
    };
  }
  clone(Circle, Rect);
  function RedCircleBuilder() {
    this.item = new Circle();
    this.init();
  }
  function RedCircleBuilder() {
    this.item = new Circle();
    this.init();
  }
  RedCircleBuilder.prototype.init = function() {
    //Nothing
  };

  RedCircleBuilder.prototype.get = function() {
    return this.item;
  };
  function BlueCircleBuilder() {
    this.item = new Circle();
    this.init();
  }
  BlueCircleBuilder.prototype.init = function() {
    this.item.color("blue");
  };
  BlueCircleBuilder.prototype.get = function() {
    const rect = new Rect();
    rect.color("yellow");
    rect.move(40, 40);
    selfDestructDecorator(rect);
    this.item.get().append(rect.get());
    return this.item;
  };

  const ShapeFactory = function() {
    this.types = {};
    this.create = function(type) {
      return new this.types[type]().get();
    };
    this.register = function(type, cls) {
      if (cls.prototype.init && cls.prototype.get) {
        this.types[type] = cls;
      }
    };
  };
  function StageAdapter(id) {
    this.index = 0;
    this.context = $(id);
  }
  StageAdapter.prototype.SIG = "stageItem_";
  StageAdapter.prototype.add = function(item) {
    ++this.index;
    item.addClass(this.SIG + this.index);
    this.context.append(item);
  };
  StageAdapter.prototype.remove = function(index) {
    this.context.remove("." + this.SIG + index);
  };

  function CompositeController(a) {
    this.a = a;
  }
  CompositeController.prototype.action = function(act) {
    let args = Array.prototype.slice.call(arguments);
    args.shift();
    for (let item in this.a) {
      this.a[item][act].apply(this.a[item], args);
    }
  };

  function flyWeightFader(item) {
    if (item.hasClass("circle")) {
      item.fadeTo(0.5, item.css("opacity") * 0.5);
    }
  }
  const ShapeGeneratorSingleton = (function() {
    let instance;
    function init() {
      let _aShape = [];
      let _stage;
      let _sf = new ShapeFactory();
      let _cc = new CompositeController(_aShape);

      function _position(shape, left, top) {
        shape.move(left, top);
      }
      function registerShape(name, cls) {
        _sf.register(name, cls);
      }

      function setStage(stg) {
        _stage = stg;
      }
      function create(left, top, color) {
        const shape = _sf.create(color);
        //!!! CHAIN OF RESPONSABILITY DESIGN PATTERN
        const index = _aShape.length - 1;
        shape.move(left, top);
        shape.setID(_aShape.length);
        _aShape.push(shape);
        //!!! CHAIN OF RESPONSABILITY DESIGN PATTERN
        if (index !== -1) {
          _aShape[index].next(shape);
        }
        return shapeFacade(shape);
      }
      //!!! CHAIN OF RESPONSABILITY DESIGN PATTERN
      function chainTint(count) {
        let index = Math.max(0, _aShape.length - count);
        let color =
          "#" +
          Math.floor(Math.random() * 255).toString(16) +
          Math.floor(Math.random() * 255).toString(16) +
          Math.floor(Math.random() * 255).toString(16);

        _aShape[index].chainDo("color", [color], count);
      }
      function tint(clr) {
        _cc.action("color", clr);
      }

      function move(left, top) {
        _cc.action("move", left, top);
      }
      function add(shape) {
        _stage.add(_aShape[shape.getID()].get());
      }
      function index() {
        return _aShape.length;
      }
      return {
        index,
        create,
        add,
        register: registerShape,
        setStage,
        tint,
        move,
        chainTint
      };
    }
    return {
      getInstance: function() {
        if (!instance) {
          instance = init();
        }
        return instance;
      }
    };
  })();

  $(win.document).ready(function() {
    const sg = ShapeGeneratorSingleton.getInstance();
    sg.register("red", RedCircleBuilder);
    sg.register("blue", BlueCircleBuilder);
    sg.setStage(new StageAdapter(".advert"));
    $(".advert").click(function(e) {
      const circle = sg.create(e.pageX - 25, e.pageY - 25, "red");
      sg.add(circle);
      sg.chainTint(5);
      flyWeightFader($(e.target));
    });
    $(document).keydown(function(e) {
      if (e.key === "a") {
        const circle = sg.create(
          Math.floor(Math.random() * 600),
          Math.floor(Math.random() * 600),
          "blue"
        );
        sg.add(circle);
      } else if (e.key === "t") {
        sg.tint("black");
      } else if (e.key === "ArrowRight") {
        sg.move("+=5px", "+=0px");
      } else if (e.key === "ArrowLeft") {
        sg.move("-=5px", "+=0px");
      }
    });
  });
})(window, jQuery);
