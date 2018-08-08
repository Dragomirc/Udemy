const leadself = "Me: ",
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

function talk(msg) {
  echo(leadself + msg);
}
function replyYesNo() {
  const msg = Math.random() > 0.5 ? msgYes : msgNo;
  echo(leadcomputer + msg);
}

function saySassyStuff() {
  const msg = aSassyStuff[Math.floor(Math.random() * aSassyStuff.length)];
  echo(leadcomputer + msg);
}
function echo(msg) {
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
