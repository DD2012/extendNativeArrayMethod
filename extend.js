Array.prototype.findIndexhh = function(fn){
	for(var i=0;i<this.length;i++){
		var x = fn.call(this,this[i],i,this)
		if(x){
			return i;
		}
	}
}
var arr = [2,3,4];
var i = arr.findIndexhh(function(v,i,list){
	return v == 3;
});
console.log(i)	