(function(win, doc, $) {
  const chatModule = (function() {
    let _leadself = "Me: ",
      _leadcomputer = "PC: ",
      _aSaid = ["This is a Cyber Chat"],
      _msgYes = "Yes, that's a great idea.",
      _msgNo = "No, that must be a mistake.",
      _aSassyStuff = [
        "Like mold on books, grow myths on history.",
        "She moved like a poem and smiled like a sphinx.",
        "As long as we don’t die, this is gonna be one hell of a story.",
        "She laughed, and the desert sang.",
        "You’ve got about as much charm as a dead slug."
      ];

    function _echo(msg) {
      _aSaid.push("<div>" + msg + "</div>");
      let aSaidLength = _aSaid.length;
      let start = Math.max(aSaidLength - 6, 0);
      let out = "";
      for (let i = start; i < aSaidLength; i++) {
        out += _aSaid[i];
      }
      $(".advert").html(out);
      $("#talk span").text(msg);
    }
    function talk(msg) {
      _echo(_leadself + msg);
    }
    function replyYesNo() {
      const msg = Math.random() > 0.5 ? _msgYes : _msgNo;
      _echo(_leadcomputer + msg);
    }

    function saySassyStuff() {
      const msg = _aSassyStuff[Math.floor(Math.random() * _aSassyStuff.length)];
      _echo(_leadcomputer + msg);
    }
    return {
      talk,
      replyYesNo,
      saySassyStuff
    };
  })();

  $(doc).ready(function() {
    chatModule.talk("this is great");
    chatModule.replyYesNo();
    chatModule.saySassyStuff();
  });
  if (!win.chatModule) win.chatModule = chatModule;
})(window, document, jQuery);
