const chatModule = (function() {
  let leadself = "Me: ",
    leadcomputer = "PC: ",
    aSaid = ["This is a Cyber Chat"],
    msgYes = "Yes, that's a great idea.",
    msgNo = "No, that must be a mistake.",
    aSassyStuff = [
      "Like mold on books, grow myths on history.",
      "She moved like a poem and smiled like a sphinx.",
      "As long as we don’t die, this is gonna be one hell of a story.",
      "She laughed, and the desert sang.",
      "You’ve got about as much charm as a dead slug."
    ];

  function _echo(msg) {
    aSaid.push("<div>" + msg + "</div>");
    let aSaidLength = aSaid.length;
    let start = Math.max(aSaidLength - 6, 0);
    let out = "";
    for (let i = start; i < aSaidLength; i++) {
      out += aSaid[i];
    }
    $(".advert").html(out);
    $("#talk span").text(msg);
  }
  return {
    talk: function(msg) {
      _echo(leadself + msg);
    },
    replyYesNo: function() {
      const msg = Math.random() > 0.5 ? msgYes : msgNo;
      _echo(leadcomputer + msg);
    },

    saySassyStuff: function() {
      const msg = aSassyStuff[Math.floor(Math.random() * aSassyStuff.length)];
      _echo(leadcomputer + msg);
    }
  };
})();

$(document).ready(function() {
  chatModule.talk("this is great");
  chatModule.replyYesNo();
  chatModule.saySassyStuff();
});
