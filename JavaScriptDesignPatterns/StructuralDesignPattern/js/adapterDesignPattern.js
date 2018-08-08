//<<<<<<<<<<<<<<<<<<<<ADAPTER DESIGN PATTERN>>>>>>>>>>>>>>>>>>>>>>>>>
// Is used to change the interface of an object
// The adapter comes into play when you have to object and they don't know how to communicate with each other

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
  function Rect() {
    this.item = $('<div class="rect"></div>');
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
  const ShapeGeneratorSingleton = (function() {
    let instance;
    function init() {
      let _aShape = [];
      let _stage;
      let _sf = new ShapeFactory();

      function registerShape(name, cls) {
        _sf.register(name, cls);
      }

      function setStage(stg) {
        _stage = stg;
      }
      function create(left, top, color) {
        const shape = _sf.create(color);
        shape.move(left, top);
        return shape;
      }

      function add(circle) {
        _stage.add(circle.get());
        _aShape.push(circle);
      }
      function index() {
        return _aShape.length;
      }
      return {
        index,
        create,
        add,
        register: registerShape,
        setStage
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
    const cg = ShapeGeneratorSingleton.getInstance();
    cg.register("red", RedCircleBuilder);
    cg.register("blue", BlueCircleBuilder);
    cg.setStage(new StageAdapter(".advert"));
    $(".advert").click(function(e) {
      const circle = cg.create(e.pageX - 25, e.pageY - 25, "red");
      cg.add(circle);
    });
    $(document).keypress(function(e) {
      if (e.key === "a") {
        const circle = cg.create(
          Math.floor(Math.random() * 600),
          Math.floor(Math.random() * 600),
          "blue"
        );
        cg.add(circle);
      }
    });
  });
})(window, jQuery);
