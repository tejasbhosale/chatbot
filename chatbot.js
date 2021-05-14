class ChatBot {
  constructor(user) {
    this.state = {};
    this.state.user = user;
    this.state.messages = [];
    this.state.topWords = {};
  }

  handleUserMessage(message) {
    let splitWords = message.split(" ");
    this.state.messages.push(splitWords);
    return this.state;
  }

  generateTopTenMessage() {
    let topList = {};
    let messages = this.state.messages;
    let wordArray = messages[messages.length - 1];
    if (!wordArray) {
      return false;
    }

    for (let word of wordArray) {
      if (!topList[word]) {
        topList[word] = 1;
      } else {
        topList[word] += 1;
      }
    }

    let keys = Object.keys(topList);
    keys.sort(function (a, b) {
      return topList[b] - topList[a]
    })
    this.state.topWords = keys.slice(0, 10);
    return this.state.topWords;
  }
}

module.exports = ChatBot;