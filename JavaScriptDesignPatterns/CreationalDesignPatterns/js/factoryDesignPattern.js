//<<<<<<<<<<<<<<<<<<FACTORY DESIGN PATTERM>>>>>>>>>>>>>>>>>>>>
// - enalbes us to have more control of customizing items
// - removes the need for the implementing object to know how to implement
// - make it easy to update and add more version or updates of the object
(function(win, $) {
  const RedCircle = function() {
    this.item = $('<div class="circle"></div>');
  };
  const BlueCircle = function() {
    this.item = $('<div class="circle" style="background:blue"></div>');
  };
  const CircleFactory = function() {
    this.create = function(color) {
      if (color === "blue") {
        return new BlueCircle();
      } else {
        return new RedCircle();
      }
    };
  };
  const CircleGeneratorSingleton = (function() {
    let instance;
    function init() {
      let _aCircle = [];
      let _stage = $(".advert");
      let _cf = new CircleFactory();

      function _position(circle, left, top) {
        circle.css("left", left);
        circle.css("top", top);
      }
      function create(left, top, color) {
        const circle = _cf.create(color).item;
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
