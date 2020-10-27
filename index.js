var Cat = require('./cat');
var Mouse = require('./Mouse');
var mickey = new Mouse();
var Tom = new Cat();
Tom.eat(mickey);
mickey.dead();
console.log(Tom)