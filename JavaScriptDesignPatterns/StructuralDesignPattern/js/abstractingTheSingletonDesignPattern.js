//<<<<<<<<<<<<<<<<<<<<ABSTRACTING SINGLETON PATTERN>>>>>>>>>>>>>>>>>>>>>>>>>
(function(win, $) {
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
        _stage.append(circle.get());
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
    cg.setStage($(".advert"));
    $(".advert").click(function(e) {
      const circle = cg.create(e.pageX - 25, e.pageY - 25, "red");
      cg.add(circle.get());
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
