function theBeatlesPlay(musicians, instruments) {
  var temp = []
  for(var i = 0; i < musicians.length; i++) {
    var string = musicians[i] + " plays " + instruments[i]
    temp.push(string)
  }
  return temp
}

function johnLennonFacts(facts) {
  var i = 0
  while(!facts.end) {
    facts[i] += "!!!"
    i++
  }
  return facts
}
