function Mouse(){
	this.alive = true;
}
Mouse.prototype.dead = function() {
	this.alive = false;
};
Module.exports = Mouse;