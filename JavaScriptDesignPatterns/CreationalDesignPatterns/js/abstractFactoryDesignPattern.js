//<<<<<<<<<<<<<<<<<< ABSTRACT FACTORY DESIGN PATTERM>>>>>>>>>>>>>>>>>>>>
// - allows to implement a factory that is more dynamic
// - enables to add more features to the factory wihtout modifying the factory again. The factory doesn't know what it is creating beyond the interface

//!!! Avoid over complication when this usage is not needed. You'd normally need a Factory and then might want to make it more mature by converting it into an Abstract Factory

(function(win, $) {
  function RedCircle() {}

  RedCircle.prototype.create = function() {
    this.item = $('<div class="circle"></div>');
    return this;
  };
  function BlueCircle() {}

  BlueCircle.prototype.create = function() {
    this.item = $('<div class="circle" style="background:blue"></div>');
    return this;
  };

  const CircleFactory = function() {
    this.types = {};
    this.create = function(type) {
      return new this.types[type]().create();
    };
    this.register = function(type, cls) {
      if (cls.prototype.create) {
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
      _cf.register("red", RedCircle);
      _cf.register("blue", BlueCircle);

      function _position(circle, left, top) {
        circle.css("left", left);
        circle.css("top", top);
      }
      function create(left, top, type) {
        const circle = _cf.create(type).item;
        _position(circle, left, top);
        return circle;
      }

      function add(circle) {
        _stage.append(circle);
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
      cg.add(circle);
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
