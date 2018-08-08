//<<<<<<<<<<<<<<<<<<<<SINGLETON PATERN>>>>>>>>>>>>>>>>>>>>>>>>>
// - delayed instantiation
// - Has a constant interface thus can be accessed from the entire app
// - just one instance can be created

(function(win, $) {
  const CircleGeneratorSingleton = (function() {
    let instance;
    function init() {
      let _aCircle = [];
      let _stage = $(".advert");

      function _position(circle, left, top) {
        circle.css("left", left);
        circle.css("top", top);
      }
      function create(left, top) {
        const circle = $('<div class="circle"></div>');
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
      const circle = cg.create(e.pageX - 25, e.pageY - 25);
      cg.add(circle);
    });
    $(document).keypress(function(e) {
      if (e.key === "a") {
        const cg = CircleGeneratorSingleton.getInstance();
        const circle = cg.create(
          Math.floor(Math.random() * 600),
          Math.floor(Math.random() * 600)
        );
        cg.add(circle);
      }
    });
  });
})(window, jQuery);
