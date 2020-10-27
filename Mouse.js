function Mouse(){
	this.alive = true;
}
Mouse.prototype.dead = function() {
	this.alive = false;
};
module.exports = Mouse;