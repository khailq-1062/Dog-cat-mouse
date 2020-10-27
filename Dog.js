function Dog(){
	this.stomatch = [];
}

Dog.prototype.eat = function(cat) {
	this.stomatch.push(cat);
};
Dog.prototype.sayHi = function() {
	log('hi')
};
Module.export = Dog;