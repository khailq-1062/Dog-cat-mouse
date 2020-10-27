function Dog(){
	this.stomatch = [];
}

Dog.prototype.eat = function(cat) {
	this.stomatch.push(cat);
};
Module.export = Dog;
alert('a')