function Cat(){
	this.stomatch = [];
}
Cat.prototype.eat = function(mouse) {
	this.stomatch.push(mouse);
};
Module.exports = Cat;