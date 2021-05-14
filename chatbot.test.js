const ChatBot = require('./chatbot');

test('Chatbot object instance', () => {
  let chatbot = new ChatBot('John');
  expect(chatbot.state.user).toEqual('John');
});

test('handleUserMessage fn splits the line and update state', () => {
  let chatbot = new ChatBot('Bob');
  chatbot.handleUserMessage("I am testing");
  expect(chatbot.state.messages).toEqual([["I", "am", "testing"]]);
});

test('handleUserMessage splits the words with right count', () => {
  let chatbot = new ChatBot('Tom');
  chatbot.handleUserMessage("I am testing this line");
  expect(chatbot.state.messages[0].length).toEqual(5);
});

test('generateTopTenMessage fn called', () => {
  let chatbot = new ChatBot('Harry');
  chatbot.handleUserMessage("I am I am again repeating same words and again same words because I am testing same testing for same reason for nothing same more and more because later we will figure out some words");
  chatbot.generateTopTenMessage();
  expect(chatbot.state.topWords).toEqual(["same", "I", "am", "words", "again", "and", "because", "testing", "for", "more"]);
});

test('generateTopTenMessage fn called with fewer words', () => {
  let chatbot = new ChatBot('Ron');
  chatbot.handleUserMessage("saint called");
  chatbot.generateTopTenMessage();
  expect(chatbot.state.topWords).toEqual(["saint", "called"]);
});
