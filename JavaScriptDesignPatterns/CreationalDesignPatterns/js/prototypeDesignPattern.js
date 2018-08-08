//<<<<<<<<<<<<<<<<<<PROTOTYPE DESIGN PATTERM>>>>>>>>>>>>>>>>>>>>
// It's very memory efficient - we are only referencing to a function and using them, instead of using inheritance(which duplicates those functions)
// It's built in the language itslef and is easy to implement

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
    // !!!! Adding a rectangle by taking advantage of the Prototype design pattern
    const rect = new Rect();
    rect.color("yellow");
    rect.move(40, 40);
    this.item.get().append(rect.get());
  };
  BlueCircleBuilder.prototype.get = function() {
    return this.item;
  };

  const CircleFactory = function() {
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
  const CircleGeneratorSingleton = (function() {
    let instance;
    function init() {
      let _aCircle = [];
      let _stage = $(".advert");
      let _cf = new CircleFactory();
      _cf.register("red", RedCircleBuilder);
      _cf.register("blue", BlueCircleBuilder);

      function create(left, top, color) {
        const circle = _cf.create(color);
        circle.move(left, top);
        return circle;
      }

      function add(circle) {
        _stage.append(circle.get());
        _aCircle.push(circle);
      }
      function index() {
        return _aCircle.length;
      }
      return {
        index,
        create,
        add
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
    $(".advert").click(function(e) {
      const cg = CircleGeneratorSingleton.getInstance();
      const circle = cg.create(e.pageX - 25, e.pageY - 25, "red");
      cg.add(circle.get());
    });
    $(document).keypress(function(e) {
      if (e.key === "a") {
        const cg = CircleGeneratorSingleton.getInstance();
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
