//<<<<<<<<<<<<<<<<<<<<STATE DESIGN PATTERN>>>>>>>>>>>>>>>>>>>>>>>>>
// Different state of an application demands different reactions. Handles the increased complexity casused by the increased ocndiitons
//We need to extract the state in order to reduce the complexity of our application

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

  Circle.prototype.next = function(shp) {
    if (shp) {
      this.nextShape = shp;
    }
    return this.nextShape;
  };

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
      getID: binder(shp, shp.getID),
      addEvent: binder(shp, shp.addEvent),
      removeEvent: binder(shp, shp.removeEvent),
      dispatchEvent: binder(shp, shp.dispatchEvent)
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

  function eventDispatcherDecorator(o) {
    const list = {};
    o.addEvent = function(type, listener) {
      if (!list[type]) {
        list[type] = [];
      }
      if (list[type].indexOf(listener) === -1) {
        list[type].push(listener);
      }
    };
    o.removeEvent = function(type, listener) {
      const a = list[type];
      if (a) {
        const index = a.indexOf(listener);
        if (index > -1) {
          a.splice(index, 1);
        }
      }
    };
    o.dispatchEvent = function(e) {
      const aList = list[e.type];
      if (aList) {
        if (!e.target) {
          e.target = this;
        }
        for (let index in aList) {
          aList[index](e);
        }
      }
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
        const index = _aShape.length - 1;
        eventDispatcherDecorator(shape);
        shape.move(left, top);
        shape.setID(_aShape.length);
        _aShape.push(shape);
        if (index !== -1) {
          _aShape[index].next(shape);
        }
        return shapeFacade(shape);
      }

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

  function RedState(obj) {
    let on = "red";
    let off = "rgba(255,0,0,.25)";
    let _nextState;

    this.nextState = function(ns) {
      _nextState = ns;
    };
    this.start = function() {
      obj.color(on);
      setTimeout(binder(_nextState, _nextState.start), 1000);
      setTimeout(function() {
        obj.color(off);
      }, 3000);
    };
  }
  function YellowState(obj) {
    let on = "yellow";
    let off = "rgba(255,255,0,.25)";
    let _nextState;

    this.nextState = function(ns) {
      _nextState = ns;
    };
    this.start = function() {
      obj.color(on);
      setTimeout(function() {
        obj.color(off);
        _nextState.start();
      }, 2000);
    };
  }
  function GreenState(obj) {
    let on = "green";
    let off = "rgba(0,255,0,.25)";
    let _nextState;

    this.nextState = function(ns) {
      _nextState = ns;
    };
    this.start = function() {
      obj.color(on);
      setTimeout(function() {
        obj.color(off);
        _nextState.start();
      }, 4000);
    };
  }
  $(win.document).ready(function() {
    const sg = ShapeGeneratorSingleton.getInstance();
    sg.register("circle", RedCircleBuilder);
    sg.setStage(new StageAdapter(".advert"));
    const red = sg.create(400, 250, "circle");
    sg.add(red);
    const yellow = sg.create(400, 325, "circle");
    yellow.color("rgba(255,255,0,.25)");
    sg.add(yellow);
    const green = sg.create(400, 400, "circle");
    green.color("rgba(0,255,0,.25)");
    sg.add(green);

    const rs = new RedState(red),
      ys = new YellowState(yellow),
      gs = new GreenState(green);

    rs.nextState(ys);
    ys.nextState(gs);
    gs.nextState(rs);
    rs.start();
  });
})(window, jQuery);
