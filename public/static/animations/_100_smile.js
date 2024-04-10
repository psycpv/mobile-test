
(function (cjs, an) {
var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:
function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}
function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}
(lib.Tween24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ar8KOQhlABhhgCQmggItHh+Qsgh5hgnxQgIhWgVj+QgGhKgZhaIgBAAIAAAAIgCgBIgEgVQAFADAHABQAdAEA+AcQAOAGAPAbIgCAAIAGAHQAyBgA8E2QBTGiLsByQLsBxGOAIQBeACBiAAIAGAAQGxAQGAgBQIGgBGvgiQGWggMNjWQMNjXAjk9QAik+ARgQQAFgFgEgBQBagkAZgHQAQApgpD6QgoD4gKAuQiuE9qaCmQstDKmlAhQm4AioRACIgsAAQlwAAmbgQg");
	this.shape.setTransform(5.4395,7.5529);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6A1B39").s().p("EgysAFRQg9hxgkhlQgkhmi7nJQhaiMglguQBFALCiBCQCiBCCsAxIAAABIAEAVIAAAAIADABIAAAAQAZBZAGBKQAVD9AIBXIACALQAHBzAIC/IAKCjQAAAcgHAVQiPixg+hvgEAwtAIDQAXh/ANkCQALgwApkAQAqkDgQgrIHNiUQiOCsimG5QinG4hjBsQgBgKAAgMg");
	this.shape_1.setTransform(0.025,-12);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
	this._renderFirstFrame();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-369.2,-74.5,738.5,149.1);
(lib.Tween23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#05104D").ss(20,1,1).p("EhFngH/QAYDyB6FnQBHDSBvDWEBAKAIBQB9jtBPjbQB4lQAajq");
	this.shape.setTransform(0.05,-64.025);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#05104D").ss(20,1).p("EBFsgSzQgDgjgHgdQiwsGr9EiQkYBqkSB6QqRElrbA8QqfA5qiAOQgWAAgXABQhEABhEABIgTABQgGgBgFABQgIAAgGAAQgDAAgDAAQhQgChPgBQgagBgbAAQqhgOqfg5Qrbg8qSklQkRh6kZhqQr8kiixMGQgHAegDAjQACAYADAbEhAegB9QDDFRE+FhQHxIpLFE1QLGE1MIA+QExAVFdAIQB6AEB5AAQAIAAAHAAQAJAAALAAQAIAAAIAAQAHAAAHAAQByAABygEQFdgIExgVQMIg+LPksQLQksHopPQEkljC8k8EhFrgUmQgBAKAAAMQgBAQAAAQQAAAZACAcQAAAEAAAFEBFogSCQABgOACgOEBFsgSzIAAAAQAAgFABgDQABgdAAgaQAAgQAAgPQgBgLgBgL");
	this.shape_1.setTransform(-0.0083,0.0328);
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1294E4").s().p("AAbcnIgRAAIgTAAIgPAAQh5AAh7gEQldgIkwgVQsJg+rFk1QrFk1nyopQk9lhjElRQhujXhHjSQh6lngYjyQgDgbgCgYQADgjAHgeQCxsGL8EiQEYBqERB6QKTElLbA8QKeA5KiAOIA1ABICfADIAFAAIAOAAQAGgBAGABIASgBICJgCIAtgBQKhgOKgg5QLbg8KRklQERh6EZhqQL9kiCwMGQAHAdADAjIAAAAIgCAVIgCAcQgaDqh4FRQhPDbh9DuQi8E8kkFjQnoJPrQEsQrPEssJA+QkwAVldAIQhyAEhzAAIgNAAg");
	this.shape_2.setTransform(0,0.0328);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	this._renderFirstFrame();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-477,-193.1,933.2,386.29999999999995);
(lib.Tween22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#05104D").ss(20,1,1).p("EhFngH/QAYDyB6FnQBHDSBvDWEBAKAIBQB9jtBPjbQB4lQAajq");
	this.shape.setTransform(0.05,-64.025);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#05104D").ss(20,1).p("EBFsgSzQgDgjgHgdQiwsGr9EiQkYBqkSB6QqRElrbA8QqfA5qiAOQgWAAgXABQhEABhEABIgTABQgGgBgFABQgIAAgGAAQgDAAgDAAQhQgChPgBQgagBgbAAQqhgOqfg5Qrbg8qSklQkRh6kZhqQr8kiixMGQgHAegDAjEhAegB9QDDFRE+FhQHxIpLFE1QLGE1MIA+QExAVFdAIQB6AEB5AAQAIAAAHAAQAJAAALAAQAIAAAIAAQAHAAAHAAQByAABygEQFdgIExgVQMIg+LPksQLQksHopPQEkljC8k8EhFrgUmQgBAKAAAMQgBAQAAAQQAAAZACAcQAAAEAAAFQACAYADAbEBFsgSzQAAgFABgDQABgdAAgaQAAgQAAgPQgBgLgBgLEBFsgSzIAAAAEBFogSCQABgOACgO");
	this.shape_1.setTransform(-0.0083,0.0328);
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1294E4").s().p("AAbcnIgRAAIgTAAIgPAAQh5AAh7gEQldgIkwgVQsJg+rFk1QrFk1nyopQk9lhjElRQhujXhHjSQh6lngYjyQgDgbgCgYQADgjAHgeQCxsGL8EiQEYBqERB6QKTElLbA8QKeA5KiAOIA1ABICfADIAFAAIAOAAQAGgBAGABIASgBICJgCIAtgBQKhgOKgg5QLbg8KRklQERh6EZhqQL9kiCwMGQAHAdADAjIAAAAIgCAVIgCAcQgaDqh4FRQhPDbh9DuQi8E8kkFjQnoJPrQEsQrPEssJA+QkwAVldAIQhyAEhzAAIgNAAg");
	this.shape_2.setTransform(0,0.0328);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	this._renderFirstFrame();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-477,-193.1,933.2,386.29999999999995);
(lib.Tween21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#05104D").ss(20,1,1).p("EA9hgRJQlSFphEDpQhMEAiTE6QhaC+jPC3QjPC2lPCOQlQCNk/BNQk/BMjAAKQjBAKnkAiQm/AghJgLQkcALm/ggQnkgikzgqQkzgrjNhBQjNhBlAiDQk/iDjYivQjZivh9j5Qh9j5hLkAQhEjplSlpEg9ggRvQAyASAyATQAXAIAYAJQQwGGKICYQMLC4V0AFQShgFMLi4QKIiYQwmGQAYgJAXgIQAygTAygS");
	this.shape.setTransform(0.025,3.7063);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABqRaQkcALm/ggQnkgikzgqQkzgrjNhBQjNhBlAiDQk/iDjYivQjZivh9j4Qh9j6hLkAQg0ixjPj6Igvg4IAvARQQwGGKICZQMLC3V0AFQShgFMLi3QKIiZQwmGIAvgRIgvA4QjPD6g0CxQhMEAiTE6QhaC+jPC3QjPC2lPCOQlQCNk/BNQk/BMjAAKQjBAKnkAiQlPAYh9AAQgqAAgSgDgABqkBQ10gFsLi3QqIiZwwmGIgvgRQgvg2g1g5QSXGyK0CjQMLC3V0AFQShgFMLi3QK0ijSXmyQg1A5gvA2IgvARQwwGGqICZQsLC3yhAFIAAAAgEA79gPtIAAAAgEg78gPtIAAAAg");
	this.shape_1.setTransform(0.025,-5.6187);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
	this._renderFirstFrame();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-403.7,-119.9,807.5,247.2);
(lib.Tween20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#05104D").ss(20,1,1).p("EA9hgRJQlSFphEDpQhMEAiTE6QhaC+jPC3QjPC2lPCOQlQCNk/BNQk/BMjAAKQjBAKnkAiQm/AghJgLQkcALm/ggQnkgikzgqQkzgrjNhBQjNhBlAiDQk/iDjYivQjZivh9j5Qh9j5hLkAQhEjplSlpEg9ggRvQAyASAyATQAXAIAYAJQQwGGKICYQMLC4V0AFQShgFMLi4QKIiYQwmGQAYgJAXgIQAygTAygS");
	this.shape.setTransform(0.025,3.7063);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABqRaQkcALm/ggQnkgikzgqQkzgrjNhBQjNhBlAiDQk/iDjYivQjZivh9j4Qh9j6hLkAQg0ixjPj6Igvg4IAvARQQwGGKICZQMLC3V0AFQShgFMLi3QKIiZQwmGIAvgRIgvA4QjPD6g0CxQhMEAiTE6QhaC+jPC3QjPC2lPCOQlQCNk/BNQk/BMjAAKQjBAKnkAiQlQAYh8AAQgqAAgSgDgABqkBQ10gFsLi3QqIiZwwmGIgvgRQgvg2g1g5QSXGyK0CjQMLC3V0AFQShgFMLi3QK0ijSXmyQg1A5gvA2IgvARQwwGGqICZQsLC3yhAFIAAAAgEA79gPtIAAAAgEg78gPtIAAAAg");
	this.shape_1.setTransform(0.025,-5.6187);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
	this._renderFirstFrame();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-403.7,-119.9,807.5,247.2);
(lib.Tween15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#873E7F").s().p("EgApAtPQqBgCpLhUQpIhJn5idQwJk/v4rZQAsAHBAAPQjSisi7i/QA2ADjvkCQiDiPhljpIhHg8QjkncAAoVQAA1xYVvcQIoHLp5E5Qp4E3j5GpQj4GrgiE1QgkE1B7GXQB6GaNcgDQNcgCBBKGQBDKJHDCnQHNCzOICLQONCMY8iYQY9iYBLtkQBLtgOmBgQOqBfByrxQAjkagfjbQggjYjWm4QjWm1pzk+Qpzk8IjnOQYYPgAAVwQAAIVjoHcIhDA5QhmDtiGCOQjqECA1gDQi+DCjSCpQBGgPApgEQv4LWwJE/Qn5CdpIBJQpLBUqBACg");
	this.shape.setTransform(4.025,50.975);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E89FED").s().p("EgQpAvrQuJiMnNizQnDinhDqIQhBqGtbACQtcADh6mbQh8mYAkk1QAjk0D3mrQD5mpJ4k3QJ5k4oonLQ4VPbAAVwQAAIWDkHcIBHA9QBlDoCDCQQDvECg1gDQC6C/DTCsQhBgQgrgGQw/tyAAyJQAB1/Y9vmUAY+gPlAjPAAAUAjUAAAAY+APlIAlAXQojHOJ0E7QJyE/DXG0QDVG5AgDXQAfDagiEaQhzLyuqheQumhghLNgQhLNj49CYQtABQqFAAQpQAAmzhDgEBOrAbEQCFiPBmjsIBDg6QivFtk1FHIgBAAQgyAADpj/g");
	this.shape_1.setTransform(-11.6,-28.687);
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8A518C").s().p("AAAABQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBABAAIAAACg");
	this.shape_2.setTransform(302.8,155.55);
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8A518C").s().p("AAAABQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBABAAIAAACg");
	this.shape_3.setTransform(302.8,155.55);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	this._renderFirstFrame();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-545.3,-340.4,1090.6999999999998,680.9);
(lib.Tween14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#05104D").ss(25,1,1).p("EBVOAICQAAIXjnHbQivFrk3FJQrWLmwxG1Q0OIN5tAAQ0SAAv7k7QwHk+v5rZQw+tzAAyJQAA2AY9vkQBXg2CegtQBZgZC2guQCZgsBRg4QBohHAZhwQBtnfD9lAQDwkvGCizQFkilH+hHQHCg+J7ADQLEADJRCGQIsB9GUDlQGEDbDLEfQDJEbgHE1QgCBvBeBGQBJA3CbAqQBaAYC/AsQCjAqBTA0IAnAXQYXPfAAVug");
	this.shape.setTransform(0,0.0181);
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	this._renderFirstFrame();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-557.8,-404.5,1115.6999999999998,809.1);
(lib.Tween13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#873E7F").s().p("EgD9AicQnXhHi0hHQi0hHhghGQhghGiWiUQibiUhmiCQhmiFh0jsIgihGQgTgpgMgiQgphBgTgaQgbgngTgRQgjgUgfgIQgdgIgjABMAAAguLQF/gXDVALQFeATVhGRQVjGOjjJsQhcD7jkDcQGkBzM+NkQhMK2kxEdQoMHnqZBgQi8AbjGAAQjyAAkCgng");
	this.shape.setTransform(-220.5,0.0318,1,1,0,0,180);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#873E7F").s().p("EgD9AicQnXhHi0hHQi0hHhghGQhghGiWiUQibiUhmiCQhmiFh0jsIgihGQgTgpgMgiQgphBgTgaQgbgngTgRQgjgUgfgIQgdgIgjABMAAAguLQF/gXDVALQFeATVhGRQVjGOjjJsQhcD7jkDcQGkBzM+NkQhMK2kxEdQoMHnqZBgQi8AbjGAAQjyAAkCgng");
	this.shape_1.setTransform(219.15,0.0318);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
	this._renderFirstFrame();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-440.8,-224.2,880.3,448.5);
(lib.Tween12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0163AF").s().p("Af0Q0QlcAAoMljQn7letIkHQo3iyqngyQmQgloBgJQg+m9AqnQQMgAGGgA4QFDAmCzAkQCvAjFeBiQFkBeGOCuQGXCxFYDRQFkDXCBBkIEqDiQDQEgADDHQABDIlRAAIgIAAg");
	this.shape.setTransform(233.198,175.0055,1,1.0943);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009DFF").s().p("AcUNBQkAgPoAlMQn8lPrUjpQrFjpvKgyQiLgGlSgIQhcj6D5jOQFkAKGGAlQKcAxIuC0QM+EIHyFcQICFiEBAFQD1gCBLjWQDWCTg+DDQg/DEhvA3QhdAvi/AAQgpAAgtgDg");
	this.shape_1.setTransform(233.1407,226.5768,1,1.0943);
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0163AF").s().p("AgqgfQBjAZgQAmQgoghgrgeg");
	this.shape_2.setTransform(438.3419,212.4552,1,1.0943);
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#05104D").s().p("AOXH8IgDAAQoDlHqcjRIAAgCQoAiwpvhEQpvhCmzAMQinm+H2AIQCZAACnAKQPMAxLHDnQLVDnIyFiQABAAAAAAQAAABABAAQAAAAAAAAQAAABAAAAQHXEgCaAeQBrgPA4gbQAUgoAWhpIAAgDQAgimhSjAQgNglgEgbQgbghgRgpQADAKgGgCIgHgFIkZjWIgCgDQhyhYlHjDQhFgrhRguQBeAJElA/QEiBCCjAAQCkAEBSA1QBQA3BjB4QBhB5BRDHQBMDIgZEKQgXECiaB+QiaB+l8AUIgnABQlyAAnJlQg");
	this.shape_3.setTransform(244.7079,257.6193,1,1.0943);
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AWpHUIhAglQBFgmCRBLgAjJiaIBng4QgxAggoAdQgHgBgHgEgArMjmQAAgDgFAAIh7gRQCug/gEBYgA4YkkQhileCYFeIgcABIgagBg");
	this.shape_4.setTransform(200.0161,114.1077,1,1.0943);
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0163AF").s().p("EglLANsQADjGDQkhIEqjiQCChlFjjWQFXjRGYixQGOiuFlheQFahhCygkQCzgkFDgmQGgg4MggGQAqHQg+G9QoBAKmQAkQqnAyo2CyQtIEHn8FeQoMFjlcAAIgIAAQlQAAAAjIg");
	this.shape_5.setTransform(-233.1979,175.0595,1,1.0944);
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009DFF").s().p("EgiEAMVQhwg2g/jFQg+jEDWiSQBLDWD1ACQEBgFICliQHylcM+kIQIui0KcgxQGGglFkgKQD6DOhdD6QlSAIiLAGQvJAyrGDpQrUDqn8FOQoAFMkAAPQgtADgpAAQi/AAhcgvg");
	this.shape_6.setTransform(-233.1123,226.6696,1,1.0944);
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0163AF").s().p("AArgfQguAfglAgQgPgmBigZg");
	this.shape_7.setTransform(-438.3299,212.5458,1,1.0944);
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#05104D").s().p("A74NLQl9gUiah+QiZh+gYkCQgYkKBMjIQBQjHBhh5QBjh4BRg3QBRg1ClgEQCjAAEihCQElg/BdgJQhRAuhFArQlGDDhyBYIgDADIkYDWQgFACgDADQgEACACgKQgRApgcAhQgEAbgNAlQhRDCAgCkIAAADQAWBpAUAoQA5AbBpAPQCcgeHVkgQAAAAABgBQAAAAAAAAQAAAAABgBQAAAAABAAQIzliLTjnQLIjnPMgxQCngKCZAAQH1gIimG+Qm0gMpvBCQpvBEn/CwIAAACQqcDQoDFIIgDAAQnJFQlyAAIgngBg");
	this.shape_8.setTransform(-244.6986,257.6814,1,1.0944);
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("A4+HUQCRhLBFAmIhAAlgABjjSQA9AiArAWQgJAEgGABQgogdgxgggANNj6Ih7ARQgFAAAAADIgqAFQgEhYCuA/gAXjkkQCYlehiFeIgaABIgcgBg");
	this.shape_9.setTransform(-200.0161,114.1558,1,1.0944);
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0163AF").s().p("AlLBuIgOhqQFMAACrg1QCJgvgBhIQAPANAYA4QAWA5gPB6QkLA2hiAPQhmATjMABQgFgdAFgeg");
	this.shape_10.setTransform(29.263,-263.425);
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#05104D").s().p("AgICWQgOgCgQgGQhggZg2g9QgqgsgCgrQAAgQAFgOQAPg7BOgZQBLgWBcAZIAFAAQBfAaA5A5QAlAqAFApQACATgEASQgSA7hMAWQgnAOgtAAQgdAAgfgGg");
	this.shape_11.setTransform(198.8558,-187.9454);
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#009DFF").s().p("EAZWAiLQibhKighAQi5hGixg3QjFhDjPg9QjAgzjTg1QixgliqgnQi4gehxgRIgNgCIipgPQhNgGhdgEQiqgJi7gGQi5gHj4AAQhUAAhgACMAAAgvSQAJgagJiTQgBgOAGgNIgZoCIBRAAQF5AKCKB9QAaAYAVAhQAsCSinBfQBJADBoAHIAFAAICiAZQB8AVCMAZQDSAxDEAvQCJAoB3AsQB+AkB8AwIDxBnQBhAvCBBCIDgB+IClB2IBeBUQAhAqBaBMQBaBMB6EFQB2EEC9UMQCfRUjoAAQgnAAgyggg");
	this.shape_12.setTransform(179.2863,-77.5911);
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0163AF").s().p("AjMUUQFbDbi50PQi90Mh2kEQh6kFhahNQhahLghgqQFzE9D5E7QFRGsB4GvQDOLvAoEaQAiEWAKClQAXGJi+DPg");
	this.shape_13.setTransform(361.9944,11.15);
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#05104D").s().p("EAaQAp0ImjlFQiBhDh3g6QibhIiNg4IgCgDQidg7i3g7QgFAAgFgCQi7g/jBg6Qi8gxjLg0QixgkicgmIkPgpIi7gSQhPgFg9AAIgRAAQi/gMi6AAIgCAAQkwgEiYgDIh7gFIAApPICKAFQDdAFDhACIACAAQDNAADMANQBUABBYAGICbAPQASAAAaACIEvAvIARAFQCiAlC1AlQAFACAEAAQCmAqDyBAIAHADQDOA8DSBGQC4A6C8BIIAFAAQClBECnBOQCJBCCaBRIAqAbICFBqQADg0gDg9QgKiZggkOIAAAFQgokRjFrSQjHqhsUqgIhYhPIiDheQhgg1hsg+IjQhqQh0gwh9g3Qhiglh1gjQgMgCgMgFQhzgqh1gjIl9hYQgDAAgCgDIgHAAQiuggjOggQhKgEg9glQgZgOgWgVQgigegWgkQgig3gGhEQgFgnAAgmIAAgTIgCgKIAAgDQgdgDgegHIhIgHIhdgCIglAAQgYADgXgDQgpgDgcAAIgMp7QDcgECmAdQCmAeBYApQBWAqBbBWQAzAtAeA4QAeA7AKAlIACACQAKAqAFANQB4AUBjATIGoBiQADADAGAAQCKApCFAvQCLApB9AwQADACAGABQCAA4BxAvQAEAEAIADQCPBHBYAtIAKAFQBnA7B5BCIDDCKIBzBlIgFgFQO2MsDeM7QDVMNApEhIAAAFQAkEoAKClIAAACQAeIckREVQhQBWhzAIIgdABQhhAAhOg/g");
	this.shape_14.setTransform(227.6483,-54.8884);
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0163AF").s().p("AAaCVQhfgPkPg2QgOh6AWg5QAZg4AOgNQgCBHCKAwQCrA1FMAAIgPBqQAGAegGAdQjLgBhmgTg");
	this.shape_15.setTransform(-31.1261,-263.425);
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#05104D").s().p("AiHCOQhMgVgSg8QgFgQADgVQAFgpAlgqQA4g4BggbIAFAAQBcgZBLAWQBOAZAPA7QAFAQAAAOQgDAsgpArQg2A9hgAZQgPAFgPADQgeAGgeAAQgsAAgogOg");
	this.shape_16.setTransform(-200.7167,-187.9454);
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#009DFF").s().p("A73RXQC90MB2kEQB5kFBbhMQBbhMAggqIBehUICkh2IDgh+QCJhFBagsIDxhnQB8gwB+gkQB0gsCMgoQDEgvDSgxQCAgXCIgXICigZIAFAAQBogHBJgDQinhfAsiSQAVghAagYQCJh9F5gKIBSAAIgZICQAGAOgBANQgICTAIAaMAAAAvSQhfgChVAAQj4AAi5AHQi7AGiqAJQhdAEhNAGIiqAPIgMACQhtAQi9AfQivAoirAkQjHAyjMA2QjTA+jBBCQizA3i3BGQigBAibBKQgyAggnAAQjpAACgxUg");
	this.shape_17.setTransform(-181.1476,-77.5911);
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0163AF").s().p("AqqSgQAJicAjkfQAmkSDQr3QB4muFRmtQD6k9Fyk7QggAqhbBLQhaBNh5EFQh3EEi9UMQi5UPFcjbIrRHkQi9jOAWmKg");
	this.shape_18.setTransform(-363.8894,11.15);
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#05104D").s().p("EgdbAqyQhzgJhPhVQkSkWAeobIAAgCQALilAkkoIAAgFQAokhDVsNQDes7O2ssIgFAFIB0hlIDCiKQCHhKBZgzQAGgCAEgDQBlg0CChAQAIgDAFgEQBzgwB9g3QAGgBAEgCQB/gxCIgoQCIgwCHgoQAHAAADgDIGnhiIDbgnQAGgNAJgqQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBAAAAQALgoAdg4QAgg4AxgtQBdhXBUgpQBXgpCngeQCmgdDcAEIgMJ7QgbAAgqADQgXADgYgDIglAAIhdACIhIAHQgdAHgeADIAAADQAAAEgCAGQABAKgBAJQAAAfgFAuQgGBEghA3QgVAjgkAfQgWAVgZAOQg9AmhKADQjLAgiwAgIgIAAQgCADgDAAIl9BYQh1AkhyApQgMAFgNACQh2AkhgAkQh9A3h0AwIjRBqQhmA7hmA4IiCBeIhUBKQgCADgDACQsUKgjHKhQjHLaglEJIAAgFQggEOgKCZQgDA9ADA0ICFhqIAqgbQCZhRCJhCQChhLCrhHIAFAAQC7hHC5g7QDNhEDTg+IAHgDQDvg/CpgrQAFAAAFgCQC2glCgglQAHgBAKgEIEvgvQAagCASAAICbgPQBZgGBUgBQDLgNDNAAIADAAQDhgCDcgFICKgFIAAJPIh7AFQiZADkuAEIgDAAQi5AAjAAMQgHABgKgBQg8AAhQAFIi7ASIkPApQicAmiwAkQjXA3ixAuQjHA8i1A9QgFACgFAAQiwA5ikA9QAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQiPA5iYBHQhlAxiUBMImjFFQhOA/hhAAIgdgBg");
	this.shape_19.setTransform(-229.5027,-54.8884);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	this._renderFirstFrame();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-494.9,-328.8,989.9,678.9000000000001);
(lib.Tween11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#05104D").ss(20,1,1).p("Egk+gE3QhjiyBDjJQBDjJCphPQCphPEQBFQERBECVDqQEDEzJZgTQUVkQUPgNQAaAAAYABEAl6AKHQiYgSoeAQQogASqgCeQqhCfpbAfQpbAgoWpeQlGlwh/lREAifAAkQgYgCgaAAQ0LAO0ZEQQvSBmnYr7");
	this.shape.setTransform(-219.5812,-22.2378);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1294E4").s().p("A9pG1QlGlxh/lQIApBDQAtBNhmi7QhiiyBCjJQBDjJCphPQCohOERBDQERBFCVDqQEDEzJZgSQUVkQUPgOQAaAAAYACIAALFIDbJjQiYgSoeARQofARqgCfQqkCfpZAeQgeACgeAAQo5AAn8pAg");
	this.shape_1.setTransform(-219.5651,-22.2677);
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#873E7F").s().p("Aw2MkQpPiBmKouQmMosBPmaQAQAUADAdQAHA3DyBZQhrAfHGICQHEIDH4AWQH5AVKTibQKtiiIogRQIxgRBRAPQAsAIAZAlQAaAlgIAsQgHArglAZQglAZCFAhQCDAhrNAkQrMAjsNDpQnzCWmnAAQjrAAjTgug");
	this.shape_2.setTransform(-223.9964,38.5464);
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#05104D").ss(20,1,1).p("EAk/gE3QBiiyhCjJQhDjJiphPQiphOkQBEQkQBEiWDqQkDEzpagTQ0VkQ0OgNQgaAAgYABEgl5AKHQCYgSIeAQQIfASKhCeQKiCfJZAfQJbAgIXpeQFGlwB/lREgieAAkQAYgCAaAAQUKAOUZEQQPSBnHZr8");
	this.shape_3.setTransform(219.5571,-22.2253);
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1294E4").s().p("AL5PzQpZgeqkifQqfifoggRQoegRiXASIDapjIAArFQAYgCAbAAQUNAOUWEQQJaATECk0QCWjqEQhFQERhDCpBOQCpBQBCDIQBCDKhiCxQhcCrAjg9IAqhDQiAFRlGFwQn7JAo5AAQgfAAgegCg");
	this.shape_4.setTransform(219.549,-22.2653);
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#873E7F").s().p("AkiK8QsMjprMgjQrOgkCDghQCGghglgZQglgZgIgrQgHgtAagkQAZglArgIQBRgPIxARQIpARKtCiQKTCbH5gVQH4gWHEoDQHGoChrgfQDyhZAHg3QADgdAQgUQBOGamLIsQmKIupPCBQjTAujrAAQmnAAn0iWg");
	this.shape_5.setTransform(223.9516,38.5464);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	this._renderFirstFrame();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-472.1,-133.5,944.2,257.1);
(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0163AF").s().p("AioJ1IQgx9ICxAiIwqRyQgGg1ihAegAwoHyIQix9ICvAiIwpRyQgGg1iiAeg");
	this.shape.setTransform(-49.55,-11.725);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3D98DE").s().p("AhEIxQLbsdDgjpIBCAAQADAOAJAMQmVG6hSBWInZH5QgUALgPAAQgdAAgJgogAvEGuQLdsdDfjpIBCAAQACAOAJAMQmUG6hRBXInZH4QgVALgQAAQgdAAgJgog");
	this.shape_1.setTransform(-67.525,-19.4882);
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0163AF").s().p("AioJ1IQgx9ICxAiIwqRyQgGg1ihAegAwoHyIQix9ICvAiIwpRyQgGg1iiAeg");
	this.shape_2.setTransform(40,1.325);
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3D98DE").s().p("AhEIxQLbsdDgjpIBCAAQADAOAJAMQmVG6hSBWInZH5QgUALgPAAQgdAAgJgogAvEGuQLdsdDfjpIBCAAQACAOAJAMQmUG6hRBXInZH4QgVALgQAAQgdAAgJgog");
	this.shape_3.setTransform(22.025,-6.4382);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	this._renderFirstFrame();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164,-79.6,310.5,146.2);
(lib.Symbol18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#05104D").s().p("AhKEVQgygTg8g0Qg/g4gOhnQgKhVgCgLQgCgIgOgHQgQgIgBghQgBgFACgbQADgagXgWQgXgWgngBQgjgBgMABQgMgkAMgkIATAAQAkAAAUADQAVADATAHQAUAHAbATQAaAUACAAQASAAAigTQAqgVArgKQArgKBSgJQBUgJBMAFQAwADBEAMIABAAQAhAHAnAKQA9AQAGAEQAHAGAAAeQAAAYgDAHQgEAIgnAVIgMAHIABBJQAAAogDAiIgEAuQgHBdhNBHQhWBPh/AAQhhAAg5gUgAEnh/IgBgBIAAABIABAAIAAAAg");
	this.shape.setTransform(-2.016,-0.1622);
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(7,0,0,3).p("AmYj8QALgBAkABQAmABAXAWQAXAWgCAbQgCAaAAAFQACAhAPAIQAPAHABAIQADALAKBVQANBnA/A4QA8A0AzATQA3AUBjAAQB/AABWhPQBMhHAHhdQADgaABgTQADgjAAgo");
	this.shape_1.setTransform(-4.575,4.206);
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(7,0,1).p("AFxgUQhEgMgwgDQhMgFhTAJQhUAJgqAKQgrAKgqAVQgiASgSAAQgCAAgagTQgagSgUgHQgUgHgUgDQgUgDglAAQgIAAgLAA");
	this.shape_2.setTransform(-9.5493,-26.1372);
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(7,1,1).p("AAQBrIgBhJQAGgEAHgDQAmgVAEgIQAEgGAAgYQAAgegIgGQgGgEg8gQQgngLghgGIgBAA");
	this.shape_3.setTransform(34.75,-17.55);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-49,-33.4,94.6,66.5), null);
(lib.Tween16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.instance = new lib.Tween14("synched",0);
	this.instance_1 = new lib.Tween15("synched",0);
	this.instance_1.setTransform(0,50.3);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
	this._renderFirstFrame();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-557.8,-404.5,1115.6999999999998,809.1);
(lib.Symbol25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_7 = new cjs.Graphics().p("AGpDOQhegJgsguQgtgugNgqQgMgqgEguQgDgogDgXQAUgfgNgiQCDgzB4gEQB4gDChAeQAJA8gBAyQgBAygEAkQgFAlghA5QgiA4haAdQgwAPg9AAQgZAAgcgDgApKDCQhagdghg4Qgig5gEglQgFgkgBgyQAAgyAIg8QChgfB4AEQB4AECDAzQgMAhAUAgQgFAXgDAoQgDAugNAqQgMAqgsAuQgtAuheAJQgcADgZAAQg9AAgwgPg");
	var mask_graphics_84 = new cjs.Graphics().p("AGpDOQhegJgsguQgtgugNgqQgMgqgEguQgDgogDgXQAUgfgNgiQCDgzB4gEQB4gDChAeQAJA8gBAyQgBAygEAkQgFAlghA5QgiA4haAdQgwAPg9AAQgZAAgcgDgApKDCQhagdghg4Qgig5gEglQgFgkgBgyQAAgyAIg8QChgfB4AEQB4AECDAzQgMAhAUAgQgFAXgDAoQgDAugNAqQgMAqgsAuQgtAuheAJQgcADgZAAQg9AAgwgPg");
	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(7).to({graphics:mask_graphics_7,x:-0.25,y:3.3006}).wait(77).to({graphics:mask_graphics_84,x:-0.25,y:3.3006}).wait(1).to({graphics:null,x:0,y:0}).wait(110));
	// Layer_3
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(-39.3,-0.85);
	this.instance._off = true;
	var maskedShapeInstanceList = [this.instance];
	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).wait(1).to({regX:-8.8,regY:-6.5,x:-45.75,y:-7.35},0).wait(1).to({x:-42.65},0).wait(1).to({x:-38.45},0).wait(1).to({x:-32.45},0).wait(1).to({x:-23.5},0).wait(1).to({x:-9.1},0).wait(1).to({x:8.55},0).wait(1).to({x:21.2},0).wait(1).to({x:29.25},0).wait(1).to({x:34.85},0).wait(1).to({x:38.9},0).wait(1).to({x:41.95},0).wait(1).to({x:44.35},0).wait(1).to({x:46.15},0).wait(1).to({x:47.6},0).wait(1).to({x:48.65},0).wait(1).to({x:49.45},0).wait(1).to({x:50.05},0).wait(1).to({x:50.45},0).wait(1).to({x:50.65},0).wait(1).to({regX:0,regY:0,x:59.55,y:-0.85},0).to({startPosition:0},56).to({_off:true},1).wait(110));
	// Layer_1
	this.instance_1 = new lib.Symbol18();
	this.instance_1.setTransform(-44.1,0.15,1,1,0,0,180);
	this.instance_2 = new lib.Symbol18();
	this.instance_2.setTransform(44.1,0.15);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},7).to({state:[{t:this.instance_2},{t:this.instance_1}]},77).to({state:[]},1).wait(110));
	this._renderFirstFrame();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.7,-33.2,179.4,66.4);
(lib._100grin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// hat
	this.instance = new lib.Tween12("synched",0);
	this.instance.setTransform(643.2,336.85);
	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,regY:0.1,scaleY:0.8856,x:643.3,y:244.5},6,cjs.Ease.quadOut).wait(1).to({regX:0,regY:10.6,x:643.15,y:257.7},0).wait(1).to({y:264.85},0).wait(1).to({y:275.4},0).wait(1).to({regX:0.1,regY:0.1,x:643.25,y:280.35},0).wait(1).to({regX:0,regY:10.6,x:643.15,y:289.65},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0.1,regY:0.1,x:643.25,y:280.35},0).to({_off:true},1).wait(5).to({_off:false},0).to({startPosition:0},1).to({regX:0,regY:0,scaleY:1,x:643.2,y:336.85},6,cjs.Ease.quadOut).to({startPosition:0},19).to({_off:true},1).wait(37));
	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#05104D").ss(20,1).p("EhFOgBKQAFAKAHALIABACQABABAAABQAVAjAiAsIBhCaQBbB8CmC8QDCDdDLCCQE8C2FQgSQAUgBATgBIJchAIJwh5QAGgBAFgBQAFgCAFgBIORiDQIQgpABAAQAPgCARgBQAIgBAJAAIBLgEQASAAAUgBICKAAQANABALAAQBVACAvAGIgDgHQBrACCBAEQEQAIEwAsIJqB3QALACAKADQAIABAGACIMgCRIGzAoQAPAAAOABQAZABAZABIFWgzQCEgpCAhJQD5iQDskLQD0kTCFkBQADgGACgFQA3hbA5inIARh2IALh5IgOhBQgDgLgEgLQhCjIiphQQiphOkRBDQggAIgfAMQjZBkiCClQgBACgBACQgCADgDAEQgCADgDAEQkCE0pagTQ0XkQ0NgOQgUAAgSABIgBAAQgFAAgGAAQgNgBgOAAQ0PAO0WEQQpZASkDkzQiiitjBhuQgggLgjgJQkRhDioBOQipBPhDDJQgCAIgDAJIgMAvIAPDvQANAlCbEUgEhFNgBNQgBgBgCgBQABACABAD");
	this.shape.setTransform(645.1001,997.0455);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6A1B39").s().p("Eg4gACzQhshOgJgLQgJgMiLhyQiLhzCLAmQCLAlAhAPQAhAOAxAIQAxAJAeANQgzBPAfBmQARA2gQAAQgNAAgkgngEg4kADCIADACIAAACIgDgEgEA4RABrQAUhohGhPQAngLAtgQQAugQAigQQAigPCFg0QCGg1h+CCQh9CAgIANQgIAMhiBZQghAtgNAAQgOAAAKg3g");
	this.shape_1.setTransform(646.1011,972.6141);
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6A1B39").s().p("Eg4gAERQhghUghgmIivjMQiNimCdAzQCeAyAjAWQAjAVAxANQAxANAeAUQgzB7AkCOQAUBSgUAAQgPAAgmgtgEA4SACjQAUihhHh5QAngTAugYQAugYAigYQAigXCahDQCbhCiFDCQiEDCgUATQgUAShZB9QgmBAgRAAQgTAAALhVg");
	this.shape_2.setTransform(646.0598,951.5557);
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("ArsKDQhmAAhigBQmlgIr7hrQrMhklJmJIgTgXIAUAZIAAACIgYgeIgLgOQg4hSgdikIgJg4QgfjfADh9IA3AtIAEADIBTBFIB7BLIAGAEIgFAOQgLAbBTFGQBTFGMPCGQMPCGD5AFQD5AFBjAAIAGAAQG2APGEgBQIMgBGzgfQGbgdMVjSQMVjRA4kDQA4kEATg3ICth/IgZFBIgGAnIgFAkIgBAEIgBAEQgVBohfCEQjEENqiCaQs1C7mqAeQm9AgoXABIgxAAQlxAAmegOg");
	this.shape_3.setTransform(641.1931,971.7781);
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6A1B39").s().p("EAzhgAKIABgEIAAgFIAGgkIAFgnIAZlBQEvj2BqgMQB3gOgmEcQgtDxg5B8QjOG4hpBxQhpBwghAwQDUmni8kGgEg1TAIDQhphxjOm4Qg4h8gtjxQgmkcB2AOQBrAMEuD2QgCB9AfDgIAJA4Qi9EGDUGnQgggwhqhwgEgxpAEXIAAgBIAKANIgKgMg");
	this.shape_4.setTransform(641.201,947.6299);
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AsHKFQhmABhigCQmlgItQh+Qs2h6hWn9QgIhMgVkAQgGhGgYhUIgDgBIgEgVQAFADAIABQAdAEA+AbQAPAHAPAbIgCgBIAGAIQAyBfA+E1QBTGgL0BxQL0ByGTAIQBfABBjAAIAGAAQG2AQGEgBQIMgBGzghQGbggMWjWQMVjWAjk8QAfkUAAgcICThAQAHAcgpD4QgoD3gLAvQivE7qiClQs1DKmqAhQm9AioXABIhBABQlrAAmUgQg");
	this.shape_5.setTransform(643.883,972.3063);
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6A1B39").s().p("EgwXAJNQANglgGArIgHgGgEgzWAFdQg+iBgkhWQgmhXjCnXIhpiiQBKAkCbAoIFABSIAEAVIACABQAZBUAFBGQAVD/AJBMQAIBsgjB6QgPCBAtCQQh+hxg5h4gEAxrABtQAKguApj2QApj5gIgbIHLiHQiUCpiTGPQiTGOh5ChQApiogVkAg");
	this.shape_6.setTransform(639.3,952.25);
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AsFKIQhlAAhhgBQmggItHh/Qsth7hVn+QgIhMgVkCQgGhGgYhVIgDgBIgDgUQAHAJAVAMQAVAMB/A0QgnBABPE3QBxG3LsByQLsByGOAIQBeACBigBIAGABQGxAQGAgBQIGgCGvghQGWggMNjXQMNjXAjk8QAajyAQhDICTg9QgGAbgpD6QgoD4gKAvQiuE8qaCmQstDKmlAiQm4AioRABIgsAAQlwAAmbgPg");
	this.shape_7.setTransform(644.525,964.1779);
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6A1B39").s().p("EgvSAJaIgDgtIAHAxIgEgEgEgykAFEQhOh8gmhcQgnhcinmrIh+i7QBcgRCaA/QCZA+CkAvIADAUIADABQAYBVAGBHQAUEBAJBLQhTBjBVGUQhziHhDhugEAxZABhQAKgvAoj3QApj5AGgcIGriDQiGCPiJGiQiIGhiLCMQA6i/gkjhg");
	this.shape_8.setTransform(637.75,945.35);
	this.instance_1 = new lib.Tween24("synched",0);
	this.instance_1.setTransform(638.2,949.1);
	this.instance_1._off = true;
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},5).to({state:[]},1).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({y:966.35},4).to({startPosition:0},5).to({_off:true},1).wait(5).to({_off:false},0).to({scaleX:1.0176,y:968.55},1).to({_off:true},1).wait(62));
	// teeth
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#05104D").s().p("EAneAGoIgKgBQy5j8yrgdIgGAAIhogCIgBAAIgBAAIgBAAIhnACIgGAAQysAdy5D8IgKABQwUBtn2swQgVgkAJgoQAKgoAjgWQAkgWAoAKQAoAKAVAjQG4LDOOhdQTKj+S9gdIAAAAQAagDAbAAIACAAIA4ABIABAAIABAAIABAAIA4gBIACAAQAdAAAcADQS7AdTID+QOOBdG3rDQAWgjAogKQAogKAkAWQAjAWAKAoQAJAogVAkQm7LQtgAAQh0AAh7gNg");
	this.shape_9.setTransform(646.65,999.836);
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#05104D").ss(20,1,1).p("ACogNQgDAAgDAAQh/AAh5gBQhegBhagBQgDAAgCAAIl6gCQs4gWoXg2Qoyg4nuhrQnvhshugkQhugkjGgvQjEgkCSC+ID0DoQAjAuCrBlQCqBmDQBZQDRBaDbA7QDbA7DwAVQDvAVDQAbQCZAWDRAPQBKAFBSAFQE2ASHpAPQHEANEfgFQBKAFHDgNQHqgPDDgFQB1gDClgMQBrgICAgNQFCghFUg9QFTg8DRhNQDRhOB4hPQB4hQBShJQBShKA/hLQA/hMBxhtQEClpkwB4QkwB3nHCbQnHCZogA2QpjA9tcASIjyAAQiFACiLAAQgJAAgKAAg");
	this.shape_10.setTransform(645.4351,998.4375);
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AC7JdQkfAFnEgNQnpgPk2gSIicgKQjRgPiZgWQjQgbjvgVQjwgVjbg7Qjbg7jRhaQjQhZiqhmQirhlgjguIj0joQiSi+DEAkQDGAvBuAkQBuAkHvBsQHuBrIyA4QIXA2M4AWIF6ACIAFAAIC4ACID4ABIAGAAIATAAQCLAACFgCIDyAAQNcgSJjg9QIgg2HHiZQHHibEwh3QEwh4kCFpQhxBtg/BMQg/BLhSBKQhSBJh4BQQh4BPjRBOQjRBNlTA8QlUA9lCAhQiAANhrAIQilAMh1ADQjDAFnqAPQlPAJh/AAQgsAAgTgBg");
	this.shape_11.setTransform(645.4351,998.4375);
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#05104D").ss(20,1,1).p("ACogRQgDAAgDAAQh/AAh5gBQhegChagBQgDAAgCAAIl6gCQs4gdoXhGQoyhJnuiMQnviNhugvQhugujGg9QjEgvCSD4ID0EtQAjA8CqCEQCqCGDgCBQDgCBDsA9QDsA+DPAeQDQAeDQAiQCZAcDRAUQBKAHBSAGQE2AXHpAUQHEAQEfgFQBKAFHDgQQHqgUDDgGQB1gDClgRQBrgKCAgRQFCgrFUhQQFThODRhkQDRhlB4hnQB4hoBShfQBShgA/hiQA/hjBxiNQECnXkwCcQkwCbnHDJQnHDIogBHQpjBPtcAXIjyAAQiFADiLAAQgJAAgKAAg");
	this.shape_12.setTransform(645.4351,987.2422);
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AC7MUQkfAFnEgQQnpgUk2gXIicgNQjRgUiZgcQjQgijQgeQjPgejsg+Qjsg9jgiBQjgiBiqiGQiqiEgjg8Ij0ktQiSj4DEAvQDGA9BuAuQBuAvHvCNQHuCMIyBJQIXBGM4AdIF6ACIAFAAIC4ADQB5ABB/AAIAGAAIATAAQCLAACFgDIDyAAQNcgXJjhPQIghHHHjIQHHjJEwibQEwickCHXQhxCNg/BjQg/BihSBgQhSBfh4BoQh4BnjRBlQjRBklTBOQlUBQlCArQiAARhrAKQilARh1ADQjDAGnqAUQlSAMh+AAQgqAAgTgBg");
	this.shape_13.setTransform(645.4351,987.2422);
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#05104D").ss(20,1,1).p("ABER5IiWAAQgRAAgRAAQg8AAg3gCQhKAJnDgcQnqggjDgJQh1gHilgbQhrgQiAgdQlChHlUiDQlTiBjRilQjRinh4iqQh4irhSieQhSifg/iiQg/iigMj3QgMj3CagJQCagJGYFbQHHFJIgB1QJjCDNcAmIDyAAQCFAGCLAAQAJAAAKAAQADAAADAAQAtAAAtAAAgXi6QAMAAALgBQAVAAAVgBQAGAAAFAAABii5QgXAAgWAAQgbgBgaAAQgLAAgMAAIgIAAQgKAAgLAAQgagBgbgBQgGAAgFAAAAAi7QgUAAgVgBQgGAAgFAAABiR5QAKAAAIAAQA9AAA3gCQBJAJHEgcQHpggDDgJQB2gHCkgbQBsgQCAgdQFChHFTiDQFTiBDSilQDRinB4iqQB4irBSieQBSifA/iiQA/iiAMj3QAMj3iagJQiagJmYFbQnHFJogB1QpkCDtbAmIjyAAQiGAGiKAAQgJAAgKAAQgDAAgDAAQguAAgtAAAA1i6QAagBAbgBQAFAAAFAAABER5IAPAAQAIAAAHAAQgPAAgPAAg");
	this.shape_14.setTransform(640.95,985.4374);
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABiR5IgeAAIiWAAIgiAAQg8AAg3gCQhKAJnDgcQnqggjDgJQh1gHikgbQhsgQiAgdQlChHlUiDQlTiBjRilQjRinh4iqQh4irhSieQhSifg/iiQg/iigMj3QgMj3CagJQCagJGYFbQHHFJIgB1QJkCDNbAmIDyAAQCGAGCKAAIATAAIAGAAIBaAAIAAgDIALAAIA1ACIAAgCIALAAIApABIgXABIgIAAIgVAAIAVAAIAIAAIAXgBIAqgBIALAAIAAACIA1gCIAKAAIAAADIBbAAIAGAAIATAAQCLAACFgGIDyAAQNbgmJkiDQIgh1HHlJQGYlbCaAJQCaAJgMD3QgMD3g/CiQg/CihSCfQhSCeh4CrQh4CqjRCnQjSCllTCBQlTCDlCBHQiAAdhrAQQilAbh2AHQjCAJnqAgQnEAchJgJQg3ACg9AAIgSAAgAAAi6IA1ABIAtAAIgtAAIg1gBIgXAAIAXAAgABTR5IgPAAIAeAAIgPAAg");
	this.shape_15.setTransform(640.95,985.4374);
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#05104D").ss(20,1,1).p("EA+NgRJQlWFphFDpQhMEAiWE6QhaC+jRC3QjSC2lTCOQlTCNlCBNQlDBMjDAKQjDAKnpAiQnEAghJgLQkgALnEggQnpgik2gqQk3grjPhBQjQhBlCiDQlDiDjbivQjbivh+j5Qh+j5hNkAQhEjplWlpEg+LgRvQAyASAzATQAYAIAXAJQQ8GGKPCYQMUC4WEAFQStgFMUi4QKPiYQ8mGQAYgJAXgIQAygTA0gS");
	this.shape_16.setTransform(638.4,987.5563);
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ABsRaQkgALnDggQnqgik2gqQk3grjPhBQjQhBlDiDQlDiDjaivQjbivh+j4Qh+j6hNkAQg0ixjSj6Igvg4IAvARQQ8GGKPCZQMUC3WEAFQStgFMTi3QKQiZQ8mGIAwgRIgwA4QjSD6g1CxQhLEAiWE6QhaC+jSC3QjRC2lTCOQlUCNlBBNQlDBMjDAKQjDAKnqAiQlSAYh+AAQgqAAgSgDgABskBQ2EgFsUi3QqPiZw8mGIgvgRQgvg2g2g5QSjGyK8CjQMUC3WEAFQStgFMTi3QK8ijSkmyQg2A5guA2IgwARQw8GGqQCZQsTC3ytAFIAAAAgEA8ogPtIAAAAgEg8mgPtIAAAAg");
	this.shape_17.setTransform(638.4,978.2313);
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#05104D").ss(20,1,1).p("EA9hgRJQlSFphEDpQhMEAiTE6QhaC+jPC3QjPC2lPCOQlQCNk/BNQk/BMjAAKQjBAKnkAiQm/AghJgLQkcALm/ggQnkgikzgqQkzgrjNhBQjNhBlAiDQk/iDjYivQjZivh9j5Qh9j5hLkAQhEjplSlpEg9ggRvQAyASAyATQAXAIAYAJQQwGGKICYQMLC4V0AFQShgFMLi4QKIiYQwmGQAYgJAXgIQAygTAygS");
	this.shape_18.setTransform(638.475,979.0063);
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("ABqRaQkcALm/ggQnkgikzgqQkzgrjNhBQjNhBlAiDQk/iDjYivQjZivh9j4Qh9j6hLkAQg0ixjPj6Igvg4IAvARQQwGGKICZQMLC3V0AFQShgFMLi3QKIiZQwmGIAvgRIgvA4QjPD6g0CxQhMEAiTE6QhaC+jPC3QjPC2lPCOQlQCNk/BNQk/BMjAAKQjBAKnkAiQlPAYh9AAQgqAAgSgDgABqkBQ10gFsLi3QqIiZwwmGIgvgRQgvg2g1g5QSXGyK0CjQMLC3V0AFQShgFMLi3QK0ijSXmyQg1A5gvA2IgvARQwwGGqICZQsLC3yhAFIAAAAgEA79gPtIAAAAgEg78gPtIAAAAg");
	this.shape_19.setTransform(638.475,969.6813);
	this.instance_2 = new lib.Tween20("synched",0);
	this.instance_2.setTransform(638.45,968.45);
	this.instance_2._off = true;
	this.instance_3 = new lib.Tween21("synched",0);
	this.instance_3.setTransform(638.45,982.65);
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#05104D").ss(20,1,1).p("EAgtgIHQK8ijSkmyQlWFphFDpQhMEAiWE6QhaC+jRC3QjSC2lTCOQlTCNlCBNQlDBMjDAKQjDAKnpAiQnEAghJgLQkgALnEggQnpgik2gqQk3grjPhBQjQhBlCiDQlDiDjbivQjbivh+j4Qh+j6hNkAQhEjplWlpQSjGyK8CjQMUC3WEAFQStgFMUi3g");
	this.shape_20.setTransform(638.4,972.9313);
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ABsRaQkgALnDggQnqgik2gqQk3grjPhBQjQhBlDiDQlDiDjaivQjbivh+j4Qh+j6hNkAQhFjplVlpQSjGyK8CjQMUC3WEAFQStgFMTi3QK8ijSkmyQlVFphGDpQhLEAiWE6QhaC+jSC3QjRC2lTCOQlUCNlBBNQlDBMjDAKQjDAKnqAiQlSAYh+AAQgqAAgSgDg");
	this.shape_21.setTransform(638.4,972.9313);
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#05104D").ss(20,1,1).p("EAgtgFsQK8hzSkkxQlWD+hFCkQhMC0iWDcQhaCFjRCBQjSCAlTBkQlTBjlCA2QlDA1jDAIQjDAHnpAYQnEAWhJgIQkgAInEgWQnpgYk2geQk3gejPguQjQgtlChcQlDhcjbh7Qjbh8h+iuQh+ivhNi0QhEiklWj+QSjExK8BzQMUCBWEADQStgDMUiBg");
	this.shape_22.setTransform(638.4,991.0453);
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ABsMPQkgAInDgWQnqgYk2geQk3gejPguQjQgtlDhcQlDhcjah7Qjbh8h+iuQh+ivhNi0QhFiklVj+QSjExK8BzQMUCBWEADQStgDMTiBQK8hzSkkxQlVD+hGCkQhLC0iWDcQhaCFjSCBQjRCAlTBkQlUBjlBA2QlDA1jDAIQjDAHnqAYQlQAQh/AAQgrAAgSgCg");
	this.shape_23.setTransform(638.4,991.0453);
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#05104D").ss(20,1,1).p("EAgtgD5QK8hOSkjRQlWCuhFBwQhMB7iWCWQhaBcjRBYQjSBXlTBEQlTBElCAlQlDAljDAFQjDAFnpAQQnEAPhJgFQkgAFnEgPQnpgQk2gVQk3gUjPggQjQgflCg/QlDg/jbhUQjbhUh+h3Qh+h4hNh7QhEhwlWiuQSjDRK8BOQMUBYWEADQStgDMUhYg");
	this.shape_24.setTransform(638.4,1000.0988);
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("ABsIYQkgAFnDgPQnqgQk2gVQk3gUjPggQjQgflDg/QlDg/jahUQjbhUh+h3Qh+h4hNh7QhFhwlViuQSjDRK8BOQMUBYWEADQStgDMThYQK8hOSkjRQlVCuhGBwQhLB7iWCWQhaBcjSBYQjRBXlTBEQlUBElBAlQlDAljDAFQjDAFnqAQQlKALiAAAQgvAAgTgBg");
	this.shape_25.setTransform(638.4,1000.0988);
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#05104D").ss(20,1,1).p("EA3WgAjQnkDVoUgdQn5gcn3geQoGgbn6gMQn5gNm3AIQm4AHpMgBQpMgBm/BWQoNBBjlhhQjlhigUgKQFyGYIPgbQIPgaH9goQH8goHZgLQHAgKG/AYQHOAYHOAkQHxAnHyAqQIHAtHUjeQDJhfCIitIAGgHIAGgHIDmkoQAHgCAIgBQA0gLAfAqQgPA/gxA3QhuB7ifAigEg28gACQj0iMhzjMQgEiXBGCQQAxBmBPBWQBQBXBVBMgEA3QgAcIAHgHIAFgH");
	this.shape_26.setTransform(650.8142,990.0178);
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#444C7A").s().p("EAikAGhQnygqnxgnQnOgknOgYQm/gYnAAKQnZALn8AoQn9AooPAaQoPAblymYQAUAKDlBiQDlBhINhBQG/hWJMABQJMABG4gHQG3gIH5ANQH6AMIGAbQH3AeH5AcQIUAdHkjVIgGAHQiICtjJBfQmEC5moAAQhXAAhYgIgEg8jgFaQgEiXBGCQQAxBmBPBWQBQBXBVBMQj0iMhzjMgEA3WgAjIABAAIgHAHgEA3XgAjgEA3WgAjIAGgHIDmkoIAPgDQA0gLAfAqQgPA/gxA3QhuB7ifAiIAFgHIgFAHg");
	this.shape_27.setTransform(650.8142,990.0178);
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#05104D").s().p("EAneAGoIgKgBQy5j8ysgdIgFAAIhogCIgBAAIgBAAIgBAAIhnACIgGAAQysAdy5D8IgKABQwUBun2sxQgWgkAKgoQAKgoAjgWQAjgWApAKQAoAKAVAjQG4LDONhdQTLj+S8gdIABAAQAagDAbAAIACAAIA4ABIABAAIABAAIABAAIA4gBIACAAQAdAAAcADQS7AdTID+QONBdG4rDQAWgjAogKQAogKAkAWQAjAWAKAoQAJAogWAkQm6LQtgAAQh0AAh7gNg");
	this.shape_28.setTransform(646.662,999.8401);
	this.shape_28._off = true;
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},5).to({state:[]},1).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_9}]},1).to({state:[]},1).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.shape_9).to({_off:true},1).wait(25).to({_off:false},0).wait(2).to({_off:true},1).wait(18).to({_off:false},0).to({_off:true},1).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({_off:true,y:982.65},4).wait(75));
	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(29).to({_off:false},0).wait(17).to({_off:true},1).wait(38));
	// Layer_3
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1294E4").s().p("EAuKAPzIgcgBIm0goIsfiRIgOgDIgVgFIprh3QkwgskPgIIjtgGIADAHQgvgFhUgDIgZgBIiKAAIgmABIhLAEIgRABIgfADIoRApIuRCDIgLADIgLACIpwB5IpbBAIgnACQlRASk8i2QjLiCjCjdQimi8hbh8IhhiaQgwhAgXgtIAEACIhDhrQgLgWg5hpIAAAAQgVgmgOgmIgPjvIAMgvIAGgRQBDjJCohPQCphOERBDQAiAJAgALQDBBuCiCtQEDEzJagSQUWkQUOgOIAcABIAKAAIABAAIAmgBQUOAOUWEQQJaATEDk0IAEgHIAFgHIACgEQCCilDZhkQAfgMAhgIQEQhDCpBOQCpBQBDDIIAGAWIAPBBIgMB5IgRB2Qg5Cng2BbIgGALQiFEBj0ETQjsELj5CQQiABJiDApIlXAzIgygCg");
	this.shape_29.setTransform(645.0875,997.0396);
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#05104D").ss(20,1,1).p("EhHsgNXQAGgYAGgZQACgIADgJQBAjTCRhkQCmh7EOAsQAkAFAjAJQB4AuB7BMQBTA0BOA7QCVB2DBBPQDyBkEyAcQdLB9KQgKQKPgLPrgTQKWgMDAgtQDAgtEVhDQC1g5DThFQEQhXCrhaQADgBAEgCQACgCADgCQACgBACAAQCphPC1AnQAZAGAaAIQBSAZBEAwQBcArA0BcQBcB0AIDSQABAMAAAMQAAAggBAhQgDAOgEAPQgKAwgLAxQgPA6gRA7Qg7CahDBwQgDAFgCAGQiSEJjwEfQgeAlgfAjQjIDljcCZQh8BWiCA9QikA6ipA0QgYAFgZAEQgOADgOACQhlAOhmANQh0AOh1ALQmXATmdgMQgHgBgHAAQgLgBgLAAQjLgIjMgQQh1gJh4gKQjJgNjJgGQhjgDhigCQgNAAgOAAQgHAAgGAAQgIAAgIAAQgLgBgKAAQgHAAgHAAQhPgBhKgCQgBACgBACQgjgCgugCQgZgBgcgBQgMAAgNgBQhIgBhHgBQgUAAgTAAQgmAAgnAAQgJAAgJABQgRAAgQABQg4gDjbAJQh0ABiMgBQnZAMivgEQivgFgFAAQgFAAh9AFQh9AFiegKQidgLiJgFQj1gPjEg9QjEg9h3gmQh3gliVhOQiVhNhqhYQjdi/iGjZQiGjZhXiZQgagugYgwQgSgjgRgjQgnhCgVg1QAAgBABAAQgcg7gag5QgOgrgnhaQgBAAAAgBQgPgogKgnQgLiEAEhxg");
	this.shape_30.setTransform(641.3847,994.3201);
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1294E4").s().p("AZLUnIgOgBIgWgBQjLgIjMgQIjtgTQjJgNjJgGIjFgFIgbAAIgNAAIgQAAIgVgBIgOAAIiZgDIgCAEIhRgEIg1gCIgZgBIiPgCIgnAAIhNAAIgSABIghABQg4gDjbAJIkAAAQnZAMivgEIi0gFIiCAFQh9AFiegKQidgLiJgFQj1gPjEg9Ik7hjQh3gliVhOQiVhNhqhYQjdi/iGjZQiGjZhXiZQgagugYgwIgjhGQgnhCgVg1IABgBIg2h0QgOgrgnhaIgBgBQgPgogKgnQgLiEAEhxIAMgxIAFgRQBAjTCRhkQCmh7EOAsQAkAFAjAJQB4AuB7BMQBTA0BOA7QCVB2DBBPQDyBkEyAcQdLB9KQgKQKPgLPrgTQKWgMDAgtIHVhwIGIh+QEQhXCrhaIAHgDIAFgEIAEgBQCphPC1AnQAZAGAaAIQBSAZBEAwQBcArA0BcQBcB0AIDSIABAYIgBBBIgHAdIgVBhQgPA6gRA7Qg7CahDBwIgFALQiSEJjwEfIg9BIQjIDljcCZQh8BWiCA9QikA6ipA0IgxAJIgcAFQhlAOhmANQh0AOh1ALQj2AMj3AAQijAAikgFg");
	this.shape_31.setTransform(641.3847,994.3201);
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#05104D").ss(20,1).p("AAXtLQgGAAgGAAQgIAAgHAAQgDAAgDAAQhugBhtgCQq7gLq5gsQr3gtqqjiQkchekjhSQsZjfi3JTQg6C+DMGOQDLGNIFGqQIFGqLgDuQLgDuMmAwQE8AQFqAHQB/ACB+AAQAIAAAHAAQAKAAALAAQAIAAAJAAQAHAAAHAAQB2AAB3gCQFqgHE8gQQMmgwLrjnQLqjmH7nIQH6nHDMl4QDLl3g6i+Qi3pTsZDfQkjBSkcBeQqqDir3AtQq5Asq7ALQheABheACg");
	this.shape_32.setTransform(642.4262,999.3971);
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1294E4").s().p("AAcWCIgRAAIgVAAIgPAAQh+AAh/gCQlqgHk8gQQsmgwrgjuQrgjuoFmqQoFmqjLmNQjMmOA6i+QC3pTMZDfQEjBSEcBeQKqDiL3AtQK5AsK7ALIDbADIAGAAIAPAAIAMAAIATAAIC8gDQK7gLK5gsQL3gtKqjiQEcheEjhSQMZjfC3JTQA6C+jLF3QjMF4n6HHQn7HIrqDmQrrDnsmAwQk8AQlqAHQh3ACh2AAIgOAAg");
	this.shape_33.setTransform(642.4262,999.3971);
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#05104D").ss(20,1).p("AAXwXQgGAAgGAAQgIAAgHAAQgDAAgDAAQhugBhtgCQq7gOq5g3Qr3g4qqkYQkch1kjhmQsZkUi3LjQg6DrDMHuQDLHtIFIRQIFIRLgEnQLgEnMmA8QE8AUFqAJQB/ADB+AAQAIAAAHAAQAKAAALAAQAIAAAJAAQAHAAAHAAQB2gBB3gCQFqgJE8gUQMmg8LrkeQLqkeH7o2QH6o1DMnSQDLnSg6jrQi3rjsZEUQkjBmkcB1QqqEYr3A4Qq5A3q7AOQheABheACg");
	this.shape_34.setTransform(642.4262,999.3975);
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1294E4").s().p("AAcbXIgRAAIgVAAIgPAAQh+AAh/gDQlqgJk8gUQsmg8rgknQrgknoFoRQoFoRjLntQjMnuA6jrQC3rjMZEUQEjBmEcB1QKqEYL3A4QK5A3K7AOIDbADIAGAAIAPAAIAMAAIATAAIC8gDQK7gOK5g3QL3g4KqkYQEch1EjhmQMZkUC3LjQA6DrjLHSQjMHSn6I1Qn7I2rqEeQrrEesmA8Qk8AUlqAJQh3ACh2ABIgOAAg");
	this.shape_35.setTransform(642.4262,999.3975);
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#05104D").ss(20,1,1).p("EhGXgH/QAYDyB7FnQBIDSBwDWEBA3AIBQB+jtBQjbQB6lQAZjq");
	this.shape_36.setTransform(642.475,937.425);
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#05104D").ss(20,1).p("EBGdgSzQgDgjgHgdQizsGsEEiQkcBqkUB6QqZElrjA8QqnA5qpAOQgWAAgXABQhFABhFABIgTABQgGgBgFABQgIAAgHAAQgDAAgCAAQhRgChQgBQgagBgbAAQqpgOqng5Qrjg8qZklQkUh6kbhqQsFkiizMGQgHAegDAjQACAYADAbEhBMgB9QDFFRFCFhQH3IpLNE1QLNE1MRA+QE0AVFhAIQB7AEB7AAQAHAAAIAAQAJAAALAAQAIAAAIAAQAHAAAHAAQBzAAB0gEQFggIE1gVQMRg+LXksQLXksHtpPQEoljC+k8EhGcgUmQgBAKAAAMQgBAQAAAQQAAAZACAcQAAAEAAAFEBGZgSCQABgOACgOEBGdgSzQAAgFABgDQABgdAAgaQAAgQAAgPQgBgLgBgLEBGdgSzIAAAA");
	this.shape_37.setTransform(642.4417,1001.4828);
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1294E4").s().p("AAbcnIgQAAIgUAAIgQAAQh6AAh7gEQligIk0gVQsRg+rNk1QrNk1n2opQlClhjFlRQhwjXhHjSQh8lngYjyQgDgbgCgYQADgjAHgeQCzsGMFEiQEbBqEUB6QKZElLjA8QKnA5KpAOIA1ABIChADIAFAAIAPAAQAFgBAGABIASgBICLgCIAtgBQKpgOKng5QLjg8KZklQEUh6EchqQMEkiCzMGQAHAdADAjIAAAAIgBAVIgEAcQgZDqh6FRQhQDbh+DuQi+E8koFjQntJPrYEsQrWEssSA+Qk0AVlhAIQhzAEh0AAIgNAAg");
	this.shape_38.setTransform(642.45,1001.4828);
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#05104D").ss(20,1,1).p("EhFngH/QAYDyB6FnQBHDSBvDWEBAKAIBQB9jtBPjbQB4lQAajq");
	this.shape_39.setTransform(642.5,928.875);
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#05104D").ss(20,1).p("EBFsgSzQgDgjgHgdQiwsGr9EiQkYBqkSB6QqRElrbA8QqfA5qiAOQgWAAgXABQhEABhEABIgTABQgGgBgFABQgIAAgGAAQgDAAgDAAQhQgChPgBQgagBgbAAQqhgOqfg5Qrbg8qSklQkRh6kZhqQr8kiixMGQgHAegDAjQACAYADAbEhAegB9QDDFRE+FhQHxIpLFE1QLGE1MIA+QExAVFdAIQB6AEB5AAQAIAAAHAAQAJAAALAAQAIAAAIAAQAHAAAHAAQByAABygEQFdgIExgVQMIg+LPksQLQksHopPQEkljC8k8EhFrgUmQgBAKAAAMQgBAQAAAQQAAAZACAcQAAAEAAAFEBFogSCQABgOACgOEBFsgSzIAAAAQAAgFABgDQABgdAAgaQAAgQAAgPQgBgLgBgL");
	this.shape_40.setTransform(642.4417,992.9328);
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1294E4").s().p("AAbcnIgRAAIgTAAIgPAAQh5AAh7gEQldgIkwgVQsJg+rFk1QrFk1nyopQk9lhjElRQhujXhHjSQh6lngYjyQgDgbgCgYQADgjAHgeQCxsGL8EiQEYBqERB6QKTElLbA8QKeA5KiAOIA1ABICfADIAFAAIAOAAQAGgBAGABIASgBICJgCIAtgBQKhgOKgg5QLbg8KRklQERh6EZhqQL9kiCwMGQAHAdADAjIAAAAIgCAVIgCAcQgaDqh4FRQhPDbh9DuQi8E8kkFjQnoJPrQEsQrPEssJA+QkwAVldAIQhyAEhzAAIgNAAg");
	this.shape_41.setTransform(642.45,992.9328);
	this.instance_4 = new lib.Tween22("synched",0);
	this.instance_4.setTransform(642.45,986.05);
	this.instance_4._off = true;
	this.instance_5 = new lib.Tween23("synched",0);
	this.instance_5.setTransform(642.45,1000.25);
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#05104D").ss(20,1,1).p("EhGHgTUQAGgXAGgXQA/jdBrh2QCditEEAJQAkABAmAFQCAAQCVA3QBeAjBcAlQC7BKC4BQQEGByETBNQGiB1G9AhQKkA4KoAMQBqACBrACQAMAAAIAAQAGgBAFABQAJgBAJAAQBcgBBcgCQApgBApgBQAPAAAPgBQAFAAAGAAQAWAAAVgBQJTgQJSgxQLhg4KXkbQA1gXA1gWQDghdDlhUQEahoDKAhQAEABAEABQADABAEABQDjAuB8DcQAQAcAOAfQAqBbAcByQAZBlgUCQQgVCbhKDMQgEALgEALQgMAegLAeQgHAPgGAQQgSAsgUAtQgYA1gcA2Qg/B7hQCAQgDAFgDAEQigD8jkEWQgfAkgfAmQi4DZjZCxQhyBch8BTQiUBhihBSQgXAMgYAMQgNAGgNAHQhhAthkAoQhyAthyAoQmVCMmlBFQgHABgIACQgLACgLABQjOAgjUAQQh3AIh9AGQjHAJjXAFQhlADhmABQgOAAgOAAQgHAAgGAAQgJAAgIAAQgKAAgJAAQgIAAgHAAQhOAAhNgCQgEAAgEAAQgqAAgpgCQgbgBgagBQgNAAgNgBQhJgChIgCQgTgBgTgBQgogCgngBQgJgBgKAAQgRgBgRgBQiHgFiCgJQh/gJh/gQQnkg+nKicQgFgCgFgCQgFgBgGgCQiOgxiLg6QiqhIifhUQkYiVjzjAQgPgNgQgMQiziRieiqQhQhWhJhVQi3jXiFjQQh0i2hPixQgVgvgSgvQgOgjgMgiQgYg/gUg8QAAgBAAgBQgVg9gPg4QgShFgMg+QgIgogFglQgQiHAVhfg");
	this.shape_42.setTransform(642.2858,990.3777);
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1294E4").s().p("AAvb7IgNAAIgRAAIgTAAIgPAAQhOAAhNgCIgIAAIhTgCIg1gCIgagBIiRgEIgmgCIhPgDIgTgBIgigCQiHgFiCgJQh/gJh/gQQnkg+nKicIgKgEIgLgDQiOgxiLg6QiqhIifhUQkYiVjzjAIgfgZQiziRieiqQhQhWhJhVQi3jXiFjQQh0i2hPixQgVgvgSgvIgahFQgYg/gUg8IAAgCQgVg9gPg4QgShFgMg+QgIgogFglQgQiHAVhfIAMguQA/jdBrh2QCditEEAJQAkABAmAFQCAAQCVA3QBeAjBcAlQC7BKC4BQQEGByETBNQGiB1G9AhQKkA4KoAMIDVAEIAUAAIALAAIASgBIC4gDIBSgCIAegBIALAAIArgBQJTgQJSgxQLhg4KXkbQA1gXA1gWQDghdDlhUQEahoDKAhIAIACIAHACQDjAuB8DcQAQAcAOAfQAqBbAcByQAZBlgUCQQgVCbhKDMIgIAWIgXA8IgNAfIgmBZQgYA1gcA2Qg/B7hQCAIgGAJQigD8jkEWIg+BKQi4DZjZCxQhyBch8BTQiUBhihBSIgvAYIgaANQhhAthkAoQhyAthyAoQmVCMmlBFIgPADIgWADQjOAgjUAQQh3AIh9AGQjHAJjXAFQhlADhmABIgcAAg");
	this.shape_43.setTransform(642.2858,990.3777);
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#05104D").ss(20,1,1).p("EhGqgNNQAAgZABgYQAFhqAYhDQAIgWAJgVQAkhUAwhAQA7hUBOgwQBehFB+gRQAigFAkgBQA9ACBDANQAiAHAjAKQBwAiB6A+QAKAGAKAFQBVAuBaAqQCxBQDBBDQCXA1CkAjQBxAUByAPQGiA5G1AHQKdANKgADQBpABBpAAQANAAAIAAQATAAAJAAQABAAABAAQAFAAAGAAQAAAAABAAQAUAAAVgBQA/AAA/gBQApAAApgBQAPAAAPAAQAFAAAFAAQAWAAAWAAQJMgGJLgNQJggLI8hrQBugaBpgiQA1gSA1gRQDshNDShiQBGghA/geQAEgCADgCQAEgBADgCQADgBACgBQCYhCCLgLQAEAAADABQAEAAAEAAQA3AAA0AIQAfAHAfALQB1AlBUBaQAWAUATAXQAoAsAgA4QATAfAQAiQAuBbACCHQABAegBAhQgBALgBAMQgCAggEAiQgMA7gQA/QgLAogNArQgDALgDAKQgCAHgCAGQgJAYgJAXQgGAQgGAPQgSAsgTAsQgYA0gaAxQgBACgBACQgCADgCAEQg9B2hOB5QgDAEgDAFQhiCXh+CfQhSBnhZBlQggAjggAjQhoBuhuBdQhkBUhqBGQgPAIgOAKQhsA+hyA3QgrAVgsAUQgXAKgXAJQgNAFgNAFQhPAbhRAaQgYAIgZAHQgNAEgOAEQhZAahbAXQgKACgJADQhyAZhzAVQkSAykYAcQgHABgHAAQgKABgLAAQh0ALh1AIQgGAAgIAAQgKABgMAAQi3AKi7ABQgUAAgUABQh4AAh6ABQiaABieABQgwAAgxABQhJABhIgBQgCACgDABQgWAAgZAAQgOgBgOAAQgHAAgHAAQgIgBgIAAQgKAAgLAAQgCAAgDAAQgFAAgFAAQgHAAgIAAQhEAAhFgBQgCAAgCAAQgCAAgCAAQgRAAgRAAQgYAAgZgBQgOAAgNAAQgJAAgJAAQgEAAgDAAQgNAAgNAAIAAAAQgzgBhhABQgTAAgTAAQgnAAgoAAQgJAAgJgBQgRAAgRAAQhhAAhngCQgiAAghAAQh+gBh9gGQk2gOkvgqQgFgBgFgBQgGgBgFAAQiZgUiXgaQgEgBgFgBQgFgBgGgBQiNgaiNgfQgJgDgKgCQiigqiagyQiCgqh8gwQgSgIgRgHQiEg3h9hJQgRgKgQgKQiWhdiMh4QgigfgigfQhShQhMhUQhLhShFhWQhlh+hOh0QgigygegvQgxhRgrhRQgagugVgqQgIgQgGgPQAAgBAAgBQgOgcgNgdQgOgegNgdQgBgEgCgEQgVg0gchEQAAgBAAgBQgBgBAAgBQgQgngMgnQgEgTgEgSQgOhDgJg+QgGgngFgmg");
	this.shape_44.setTransform(642.42,987.9);
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1294E4").s().p("ABzXLIgcgBIgOAAIgQAAIgVgBIgFAAIgKAAIgPAAIiJgBIgEAAIgEAAIgiAAIgxgBIgbAAIgSAAIgHAAIgaAAIAAAAQgzgChhACIgmAAIhPAAIgSgBIgiAAIjIgCIhDAAQh+gBh9gGQk2gOkvgrIgKgBIgLgBQiZgTiXgbIgJgCIgLgCQiNgaiNgfIgTgFQiigqiagyQiCgqh8gwIgjgPQiEg3h9hKIghgTQiWhdiMh4QgigegighQhShOhMhVQhLhShFhWQhlh+hOh0QgigxgegwQgxhRgrhQQgagvgVgqIgOgfIAAgCIgbg5Igbg7IgDgIIgxh4IAAgCIgBgBQgQgogMgnIgIglQgOhCgJg/IgLhNIAAAAIABgxQAFhqAYhDIARgqQAkhVAwhAQA7hTBOgxQBehFB+gRQAigFAkgBQA9ACBDANQAiAIAjAJQBwAiB6A/IAUAKQBVAvBaAqQCxBPDBBDQCXA1CkAkQBxATByAQQGiA5G1AGQKdANKgADIDSACIAVAAIAcgBIACAAIALABIABAAIApgBIB+gCIBSgBIAeAAIAKAAIAsAAQJMgGJLgNQJggLI8hrQBugaBpgiIBqgjQDshNDShiICFg/IAHgDIAHgEIAFgCQCYhCCLgKIAHAAIAIAAQA3AAA0AJQAfAGAfALQB1AmBUBaQAWAUATAWQAoAsAgA5QATAeAQAjQAuBaACCIQABAegBAgIgCAXIgGBDQgMA6gQA/IgYBTIgGAWIgEAMIgSAwIgMAeIglBYQgYA0gaAxIgCAEIgEAHQg9B2hOB6IgGAIQhiCXh+CfQhSBnhZBlIhABGQhoBuhuBdQhkBThqBGIgdATQhsA9hyA4IhXApIguATIgaAJQhPAchRAaIgxAPIgbAJQhZAZhbAXIgTAFQhyAYhzAWQkSAzkYAbIgOABIgVACQh0AKh1AIIgOABIgWABQi3AKi7AAIgoABIjyABIk4ACIhhABIiRABIgFACIgvAAg");
	this.shape_45.setTransform(642.42,987.9);
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#05104D").ss(20,1,1).p("EhHHgLXQACgYADgYQAOhnAfhBQAKgUAKgUQAshNA9g3QBEhEBZggQBkgsCBABQAjgBAiAEQA8ANA/AWQAgAMAgAOQBrAxBuBKQAJAGAJAHQBOA4BZAuQCnBVDKA2QCWArCpAUQBxAFByACQGiAHGugPQKYgWKYgEQBpgBBoAAQAMAAAKAAQASAAAJAAQAAAAABAAQAFAAAGAAQAAAAABAAQATAAAVgBQA/AAA/AAQAoAAApAAQAPAAAOAAQAFAAAFAAQAXABAVAAQJHADJGARQJWASJAgZQBwgQBogYQA2gNA0gOQD1hADDhtQBDgmA5gnQADgCADgDQADgCADgDQACgBACgBQCDhVCMgmQADgBADAAQAEgBADgBQA1gKA0gDQAfAAAfAEQB+ALBeA8QAaANAYAQQAyAgApAtQAYAaAWAeQA/BSAUCAQAGAdACAgQABALABAMQABAgAAAiQgKA7gMA+QgJApgLAqQgCALgDALQgCAGgBAGQgJAYgIAYQgGAPgGAPQgSAtgSAqQgZA1gZAuQgBACgBACQgCADgCAEQg8B1hQB4QgCAEgDAEQhjCUiACcQhUBmhaBfQghAhggAhQhtBqhyBUQhoBNhuA7QgPAIgOAHQhyAuh2ArQgsAQguAPQgXAGgYAFQgOADgNADQhRAPhSAOQgZADgZAEQgOACgOACQhaAOhcAMQgJABgKABQhzAIhzAGQkSAOkWAAQgHAAgHAAQgKgBgLAAQhzgBh0gDQgGAAgHgBQgLAAgLgBQi2gFi4gMQgUgBgTgBQh3gGh4gDQibgFiagBQgwAAgvAAQhLAAhGgBQgBACgBACQgWgBgZgBQgNAAgPAAQgGgBgHAAQgIAAgJAAQgKgBgLAAQgDAAgCAAQgFAAgFAAQgIAAgHAAQhEAAhEgBQgCAAgCAAQgCAAgCAAQgSAAgQABQgYAAgZAAQgNAAgOAAQgJAAgIAAQgEABgDAAQgNAAgNAAIAAAAQghAAh2AFQgSABgUAAQglABgqABQgIAAgKAAQgQABgRAAQhfAChrACQghACgiACQh8AFh8ADQkzAGkvgLQgFAAgFAAQgGAAgFAAQiYgCiWgGQgFgBgFAAQgFAAgFAAQiOgHiMgKQgKgBgLgBQiigUiegaQiFgWiAgZQgTgFgSgEQiJghiDg5QgSgIgRgIQichKiThuQgjgcgjgfQhUhJhPhSQhMhPhHhWQhoh+hOhtQgkgxgegtQgxhQgthPQgcgtgVgoQgJgQgGgOQAAgBABAAQgPgcgOgbQgPgegOgcQgCgEgCgEQgSgrgjhLQAAgBgBgBQAAgBgBgBQgRgngNgmQgDgTgDgTQgKhBgIg+QgFgngDglg");
	this.shape_46.setTransform(643.1,987.2722);
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1294E4").s().p("AaHTrIgVgBQhzgBh0gDIgOgBIgVgBQi2gFi4gMIgngCQh3gGh4gDQibgFiagBIhgAAIiQgBIgCAEIgvgCIgcAAIgOgBIgQAAIgVgBIgGAAIgKAAIgOAAIiJgBIgDAAIgEAAIgiABIgxAAIgbAAIgRAAIgHABIgaAAIAAAAQghAAh2AFIgmABIhPACIgSAAIgiABIjJAEIhDAEQh8AFh8ADQk0AGkugLIgKAAIgLAAQiYgCiXgGIgJgBIgLAAQiNgHiMgKIgVgCQijgUidgaQiFgWiAgZIglgJQiJghiDg5IgjgQQichKiThuQgkgcgigfQhUhJhQhSQhLhPhHhWQhoh+hOhtQglgxgdgtQgxhQgthPQgcgtgVgoIgQgeIACgBIgdg3Igdg6IgEgIIg1h2IgBgCIgBgCQgSgngMgmIgGgmQgLhBgHg+IgJhMIAAgBIAGgwQAOhnAfhBIAUgoQAshNA9g3QBEhEBZggQBkgsCBABQAjgBAiAEQA8ANA/AWQAfAMAhAOQBrAxBuBKIASANQBOA4BZAuQCnBVDKA2QCWArCoAUQBxAFByACQGjAHGugPQKXgWKZgEIDRgBIAWAAIAbAAIABAAIAKAAIABAAIApgBIB+AAIBRAAIAdAAIAKAAIAsABQJHADJGARQJWASJAgZQBwgQBogYIBqgbQD1hADDhtQBCgmA5gnIAHgFIAGgFIAEgCQCDhVCLgmIAHgBIAHgCQA0gKA1gDQAfAAAfAEQB9ALBfA8QAaANAXAQQAyAgApAtQAZAaAVAeQBABSAUCAQAGAdACAgIACAXIABBCQgKA7gNA+IgTBTIgFAWIgEAMIgRAwIgMAeQgRAtgTAqQgYA1gaAuIgBAEIgEAHQg8B1hQB4IgFAIQhjCUiACcQhUBmhbBfIhABCQhtBqhyBUQhpBNhtA7IgeAPQhxAuh2ArIhaAfIgwALIgbAGIijAdIgxAHIgcAEQhaAOhcAMIgTACQhzAIhzAGQkTAOkVAAIgOAAg");
	this.shape_47.setTransform(643.1,987.2722);
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#05104D").ss(20,1,1).p("EhHigKdQAEgYAEgYQAWhkAkg/QALgTAMgTQAyhIBGgwQBLg3BjgTQBpgaCDAPQAjADAhAIQA7AVA7AdQAfAQAeARQBnA9BlBTQAIAHAIAHQBJBABXAxQChBZDQAtQCVAiCtAKQBxgIBygJQGigfGogfQKUgyKTgKQBogCBoAAQAMAAAKAAQASgBAIABQABAAAAAAQAFAAAGAAQAAAAABAAQATgBAVAAQA+AAA+ABQApAAAoABQAPAAAOAAQAFAAAFAAQAXABAVAAQJCAKJDAoQJPApJCAnQBxgHBogSQA3gJAzgMQD9g1C3h2QA/gpA1gvQADgDADgCQACgEADgCQABgCACgBQBzhlCMg7QADgBADgBQADgBADgBQAzgSA1gNQAegEAggCQCEgJBmAjQAeAIAbALQA6AXAvAkQAeAWAZAbQBNBLAiB7QAJAcAGAgQACALACAMQADAgADAhQgIA8gJA9QgIAqgIAqQgCAKgDALQgBAGgBAHQgJAYgIAXQgGAPgGAPQgRAugSAoQgZA2gZAsQgBACgBACQgCADgBAEQg8BzhQB3QgDAEgDAEQhjCSiBCZQhXBmhbBaQghAgghAfQhwBmh0BOQhtBHhvAzQgQAHgPAGQh2Aih4AgQguAMgvAMQgYADgYACQgOABgOACQhSAFhUAEQgZABgZABQgPABgOAAQhbAEhcAEQgKgBgJAAQhzgEh0gGQkSgOkVgWQgHgBgHgBQgKgBgLgCQhygJhzgMQgGAAgHgBQgLgBgKgBQi1gSi2gWQgTgCgTgBQh4gLh1gHQicgJiXgDQgwAAgugBQhLgBhFgBQAAADAAADQgVgCgagBQgNgBgOAAQgHAAgHAAQgIgBgIAAQgLgBgLAAQgDAAgCAAQgFAAgFAAQgIAAgHAAQhDAAhEgBQgCAAgCAAQgCAAgCAAQgSAAgQABQgYABgYAAQgOAAgOABQgJAAgHAAQgEAAgDABQgOAAgMABIAAAAQgTAAiHAIQgSABgTABQglACgqACQgIAAgKAAQgQABgRABQhdAEhuAFQgiAEghACQh7ALh8AJQkwAXkuANQgFAAgGABQgFAAgFABQiYALiWAJQgFABgEAAQgGAAgFABQiNAIiNAGQgLABgKAAQikgEihgHQiGgGiEgIQgTgCgTgCQiNgOiHguQgTgGgRgGQihg8iZhnQgkgagkgdQhVhFhShRQhMhMhIhVQhsh+hOhoQglgwgdgrQgxhQgvhNQgegugWgmQgIgPgHgOQABAAABAAQgPgbgQgbQgPgdgQgbQgBgEgCgEQgRgkgohQQAAgBgBgBQgBgBAAgCQgTgmgNgmQgDgTgCgTQgHhAgGg/QgEglgDglg");
	this.shape_48.setTransform(643.975,990.1756);
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1294E4").s().p("EAmlARpIjngKQkSgOkVgWIgOgCIgVgDQhygJhzgMIgNgBIgVgCQi1gSi2gWIgmgDQh4gLh1gHQicgJiXgDIhegBIiQgCIAAAGIgvgDIgbgBIgOAAIgQgBIgWgBIgFAAIgKAAIgPAAIiHgBIgEAAIgEAAIgiABIgwABIgcABIgQAAIgHABIgaABIAAAAQgTAAiHAIIglACIhPAEIgSAAIghACIjLAJIhDAGQh7ALh8AJQkwAXkuANIgLABIgKABQiYALiWAJIgJABIgLABIkaAOIgVABQikgEihgHQiGgGiEgIIgmgEQiNgOiHguIgkgMQihg8iZhnQgkgagkgdQhVhFhShRQhMhMhIhVQhsh+hOhoQglgwgdgrQgxhQgvhNQgegugWgmIgPgdIACAAIgfg2Igfg4IgDgIQgRgkgohQIgBgCIgBgDQgTgmgNgmIgFgmIgNh/IgHhKIAAgCIAIgwQAWhkAkg/QALgTAMgTQAyhIBGgwQBLg3BjgTQBpgaCDAPQAjADAhAIQA7AVA7AdQAfAQAeARQBnA9BlBTIAQAOQBJBABXAxQChBZDQAtQCVAiCtAKIDjgRINKg+QKUgyKTgKIDQgCIAWAAIAaAAIABAAIALAAIABAAIAogBIB8ABIBRABIAdAAIAKAAIAsABQJCAKJDAoISRBQQBxgHBogSQA3gJAzgMQD9g1C3h2QA/gpA1gvIAGgFIAFgGIADgDQBzhlCMg7IAGgCIAGgCQAzgSA1gNQAegEAggCQCEgJBmAjQAeAIAbALQA6AXAvAkQAeAWAZAbQBNBLAiB7QAJAcAGAgIAEAXIAGBBIgRB5IgQBUIgFAVIgCANIgRAvIgMAeQgRAugSAoQgZA2gZAsIgCAEIgDAHQg8BzhQB3IgGAIQhjCSiBCZQhXBmhbBaIhCA/QhwBmh0BOQhtBHhvAzIgfANQh2Aih4AgIhdAYIgwAFIgcADIimAJIgyACIgdABIi3AIIgTgBg");
	this.shape_49.setTransform(643.975,990.1756);
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#05104D").ss(20,1,1).p("EhH1gKBQAFgYAFgYQAbhiAog+QAMgTANgRQA3hFBMgqQBQgvBqgKQBsgNCFAZQAiAHAhAKQA6AbA5AiQAeASAdAUQBkBFBeBaQAIAIAHAIQBFBEBWA0QCcBcDVAmQCVAcCvABQBxgQBygQQGig6GlgsQKQhFKPgPQBogCBngBQAMAAAKAAQASAAAJAAQABAAAAAAQAFAAAFABQAAAAABAAQASgBAVAAQA/AAA9ABQApABAoABQAOAAAPAAQAFAAAFAAQAWABAWAAQI/APJAA5QJJA5JEBUQBzgBBogMQA2gHA0gJQECguCvh9QA8grAyg0QACgDADgEQACgDADgDQABgCABgBQBohwCLhKQADgBAEgCQADgBACgCQAygXA1gUQAegIAggFQCJgXBrASQAgAEAeAHQBAAQA0AeQAhATAcAYQBXBHAsB3QALAcAIAfQACALADAMQAGAgAFAgQgGA9gIA9QgHApgGAqQgCALgCALQgBAGgCAGQgIAZgJAXQgFAPgFAOQgSAugSAoQgYA3gZAqQgBABgBACQgCAEgBAEQg8ByhRB3QgCADgDAEQhjCRiDCXQhYBlhbBXQgiAfgiAeQhyBkh2BJQhvBDhxAsQgQAHgQAFQh5AZh6AZQgwAJguAJQgZABgZAAQgOABgNAAQhUgChUgDQgagBgZgBQgPAAgOgBQhdgChcgDQgKgBgJgBQh0gOhzgOQkTgikTgmQgHgBgHgBQgLgCgKgCQhygRhygRQgHgBgGgBQgKgCgLgBQizgbi1gdQgTgCgTgCQh4gOhzgJQicgNiVgEQgxgBgtAAQhMgChDgBQABADAAADQgUgCgbgBQgMgBgPAAQgGgBgIAAQgHAAgJgBQgKAAgLgBQgEAAgDAAQgEAAgFAAQgIAAgHAAQhDAAhEAAQgCAAgCAAQgCAAgBAAQgSAAgRABQgYAAgYABQgNABgOAAQgJAAgHABQgEAAgDABQgNAAgNABQgJAAiSAKQgSACgTABQglACgqADQgJABgJAAQgQABgQACQhcAFhxAHQgiAFghADQh7APh6AOQkvAikuAeQgFABgFAAQgGACgFAAQiXAWiWAUQgFAAgEABQgGABgFAAQiNATiNASQgLACgKABQilAIijAHQiIAFiGAFQgUgBgTAAQiPgCiLglQgTgFgSgFQikgxiehhQglgagkgbQhWhChThRQhMhJhKhVQhuh+hNhkQgmgwgegqQgxhOgvhPQghgsgVgkQgJgPgHgOQACAAABABQgQgbgQgbQgQgcgRgbQgBgDgCgFQgPgfgshUQgBgBAAgBQgBgBgBgBQgUgmgNgmQgCgTgBgTQgGhAgFg+QgDgmgCglg");
	this.shape_50.setTransform(644.6,993.6276);
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1294E4").s().p("EArCAQdIg0gCIgcgBIi5gFIgTgCIjmgcQkUgikTgmIgOgCIgVgEIjkgiIgNgCIgVgDIlog4IgmgEQh3gOh0gJQidgNiUgEIhegBIiPgDIABAGIgugDIgcgBIgOgBIgQgBIgWgBIgGAAIgJAAIgPAAIiGAAIgFAAIgDAAIgiABIgwABIgbABIgRABIgHABIgaABIibAKIglADIhPAFIgSABIghADIjMAMIhDAIIj1AdQkvAiktAeIgLABIgLACIktAqIgJABIgKABIkbAlIgVADIlHAPIkPAKIgngBQiPgCiLglIglgKQijgxifhhQglgagkgbQhVhChUhRQhMhJhKhVQhth+hOhkQgmgwgegqIhgidQgggsgVgkIgQgdIACABIgfg2Ighg3IgDgIIg8hzIAAgCIgCgCQgVgmgNgmIgDgmIgLh+IgFhLIAAgBIAKgwQAbhiAog+QAMgTANgRQA3hFBMgqQBRgvBpgKQBsgNCFAZQAiAHAiAKQA6AbA4AiQAeASAdAUQBkBFBeBaIAPAQQBFBEBWA0QCcBcDVAmQCVAcCvABIDjggQGig6GlgsQKQhFKQgPIDPgDIAVAAIAbAAIABAAIAKABIABAAIAngBIB9ABIBQACIAdAAIAKAAIAsABQI/APJAA5QJJA5JEBUQBzgBBngMQA3gHAzgJQECguCvh9QA9grAxg0IAGgHIAFgGIADgDQBnhwCLhKIAHgDIAFgDQAygXA1gUQAegIAhgFQCHgXBsASQAgAEAeAHQBAAQA0AeQAgATAdAYQBXBHAsB3QALAcAIAfIAFAXIALBAIgOB6IgNBTIgFAWIgBAMIgSAwIgKAdQgSAugSAoQgYA3gZAqIgCADIgDAIQg8ByhRB3IgFAHQhjCRiDCXQhYBlhcBXIhCA9QhzBkh2BJQhvBDhxAsIggAMIj0AyIhdASIgyABIgcABIingFg");
	this.shape_51.setTransform(644.6,993.6276);
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#05104D").ss(20,1,1).p("EhIBgJ2QAGgXAGgYQAehhAqg9QANgTAOgRQA5hCBQgnQBUgqBugEQBtgFCHAfQAiAIAhAMQA5AfA3AlQAdAUAcAVQBjBKBaBdQAHAIAIAJQBCBHBWA1QCZBeDXAjQCVAYCxgEQBxgVBxgUQGjhLGig0QKOhQKOgRQBngDBngBQALAAALAAQARAAAJAAQABAAAAAAQAFAAAGABQAAAAAAAAQATgBAUAAQA+AAA+ABQAoABAoABQAPABAOAAQAFAAAFAAQAWABAWAAQI9ASI/BCQJGBDJFBwQBzADBngKQA3gFA0gIQEFgqCqiAQA7gtAvg3QADgDACgEQACgEADgDQABgCABgBQBhh2CLhTQADgCADgBQADgCADgCQAxgbA1gXQAegKAhgIQCLggBvAIQAhABAfAGQBDALA3AbQAjARAfAXQBcBEAyB0QAMAcAKAfQADALAEAMQAGAgAHAgQgGA9gGA9QgHApgGAqQgCALgBAKQgBAHgBAGQgJAZgIAXQgFAPgGAOQgRAugSAnQgYA3gZApQgBACgBACQgCAEgBAEQg7BxhSB2QgCAEgDAEQhjCQiECVQhZBmhbBUQgiAfgiAdQh0Bih3BGQhxBChyAoQgQAGgQAFQh7AUh8AUQgvAHgvAIQgZAAgZgBQgOgBgPAAQhUgGhUgHQgagCgagCQgPgBgOgCQhdgGhcgHQgKgCgJgBQh0gThzgTQkTgukTgvQgHgCgHgCQgKgCgLgCQhxgUhygVQgHgBgGgCQgLgCgKgBQizghizggQgTgDgTgDQh4gPhzgLQicgOiTgFQgxgBgtgBQhLgChEgCQABAEACAEQgVgDgagBQgNgBgPgBQgGAAgHAAQgIgBgJAAQgKgBgLAAQgDAAgDAAQgEAAgFAAQgIgBgHAAQhEAAhDAAQgCAAgCAAQgCAAgCAAQgSAAgQABQgYABgYABQgNABgOAAQgJABgHAAQgEAAgDABQgNABgMABQgDAAiaALQgRACgUABQgkADgqAEQgJAAgJAAQgQACgRABQhbAHhzAIQghAFghAEQh6ARh6ARQkuApktAoQgFABgGABQgFACgFABQiYAbiWAaQgFABgEABQgFABgFABQiOAZiNAaQgLABgKACQilAPikAPQiJAMiIAMQgUABgTABQiRAFiNgfQgTgEgTgFQilgrihheQglgYglgcQhWg/hVhQQhMhJhKhVQhvh9hOhiQgmgwgegqQgwhNgxhOQghgsgVgkQgJgPgHgNQABAAACABQgQgagRgbQgRgcgQgbQgCgDgCgEQgOgcguhWQgBgBAAgBQgBgCgBgBQgVgmgOgmQgBgTgBgTQgEg/gEg/QgDglgDglg");
	this.shape_52.setTransform(644.975,996.1658);
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1294E4").s().p("EAuJAP/IgdgBIiogNIg0gEIgdgDIi5gNIgTgDIjngmIomhdIgOgEIgVgEIjjgpIgNgDIgVgDIlmhBIgmgGQh4gPhzgLQicgOiTgFIhegCIiPgEIADAIIgvgEIgcgCIgNAAIgRgBIgVgBIgGAAIgJAAIgPgBIiHAAIgEAAIgEAAIgiABIgwACIgbABIgQABIgHABIgZACIidALIglADIhOAHIgSAAIghADIjOAPIhCAJIj0AiIpbBRIgLACIgKADIkuA1IgJACIgKACIkbAzIgVADIlJAeIkRAYIgnACQiRAFiNgfIgmgJQilgrihheQglgYglgcQhWg/hVhQQhMhJhKhVQhvh9hOhiQgmgwgegqIhhibQghgsgVgkIgQgcIADABIghg1Ighg3IgEgHIg8hyIgBgCIgCgDQgVgmgOgmIgCgmIgIh+IgGhKIAAgCIAMgvQAehhAqg9QANgTAOgRQA5hCBQgnQBUgqBugEQBtgFCHAfQAiAIAhAMQA5AfA3AlQAdAUAcAVQBjBKBaBdIAPARQBCBHBWA1QCZBeDXAjQCVAYCxgEIDigpQGjhLGig0QKOhQKOgRIDOgEIAWAAIAaAAIABAAIALABIAAAAIAngBIB8ABIBQACIAdABIAKAAIAsABQI9ASI/BCQJGBDJFBwQBzADBngKQA3gFA0gIQEFgqCqiAQA7gtAvg3IAFgHIAFgHIACgDQBhh2CLhTIAGgDIAGgEQAxgbA1gXQAegKAhgIQCLggBvAIQAhABAfAGQBDALA3AbQAjARAfAXQBcBEAyB0QAMAcAKAfIAHAXIANBAIgMB6IgNBTIgDAVIgCANIgRAwIgLAdQgRAugSAnQgYA3gZApIgCAEIgDAIQg7BxhSB2IgFAIQhjCQiECVQhZBmhbBUQgiAfgiAdQh0Bih3BGQhxBChyAoIggALIj3AoIheAPIgygBg");
	this.shape_53.setTransform(644.975,996.1658);
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#05104D").ss(20,1).p("AaMM2QAIABAGACIMgCRIGzAoQAPAAAOABQAZABAZABIFWgzQCEgpCAhJQD5iQDskLQD0kTCFkBQADgGACgFQA3hbA5inIARh2IALh5IgOhBQgDgLgEgLQhCjIiphQQiphOkRBDQggAIgfAMQjZBkiCClQgBACgBACQgCADgDAEQgCADgDAEQkCE0pagTQ0XkQ0NgOQgUAAgSABIgBAAQgFAAgGAAQgNgBgOAAQ0PAO0WEQQpZASkDkzQiiitjBhuQgggLgjgJQkRhDioBOQipBPhDDJQgCAIgDAJIgMAvIAPDvQAOAmAUAmIABAAQA5BpAKAWIBDBrQgBgBgCgBQAXAtAwBAIBhCaQBbB8CmC8QDCDdDLCCQE8C2FQgSQAUgBATgBIJchAIJwh5QAGgBAFgBQAFgCAFgBIORiDQIQgpABAAQAPgCARgBQAIgBAJAAIBLgEQASAAAUgBICKAAQANABALAAQBVACAvAGIgDgHQBrACCBAEQEQAIEwAsIJqB3QALACAKADg");
	this.shape_54.setTransform(645.1001,997.0455);
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#05104D").ss(20,1).p("EhIFgJyIAMgwQBIjZCphPQCohOERBDQAiAIAhAMQDBBtCiCuQEDEzJZgTQUWkQUPgNQAOAAANAAIAMABQARgBAVAAQUNANUXEQQJaATECkzQADgEACgDQACgEADgDQABgCABgCQCCimDZhkQAegLAhgIQERhDCpBOQCpBPBCDIQAEAMADALIAOBBIgLB5IgRB2Qg5Cmg3BbQgDAGgCAGQiFEAj0ETQjsEMj5CQQiABJiEApIlWAzQgZgBgZgBQgOgBgPAAImzgoIsgiRQgHgCgHgCQgKgCgLgDIpqh2QkwgskQgJQiBgEhrgCIADAIQgvgGhVgCQgMgBgMAAIiKAAQgUAAgSABIhLADQgJABgIAAQgSACgOABQgBAAoQApIuRCEQgFABgFABQgGACgFABIpwB5IpcBAQgTABgUABQlRASk7i2QjMiCjBjdQimi8hbh8IhhibQgwg/gXgtQABABACABIhDhsQgKgVg5hpQgVgmgOgmg");
	this.shape_55.setTransform(645.1119,997.0594);
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1294E4").s().p("EAuKAPzIgdgBImzgoIsgiRIgNgEIgWgFIpqh2QkwgskPgJIjtgGIADAIQgvgGhVgCIgYgBIiKAAIgmABIhLADIgRABIgfADIoSApIuQCEIgLACIgLADIpwB5IpbBAIgnACQlRASk8i2QjMiCjBjdQimi8hbh8IhhibQgwg/gXgtIADACIhChsQgLgVg5hpQgVgmgOgmIgOjvIALgwQBIjZCphPQCphOERBDQAhAIAhAMQDBBtCiCuQEDEzJZgTQUXkQUOgNIAcAAIALABIAmgBQUOANUWEQQJaATECkzIAGgHIAEgHIADgEQCBimDZhkQAfgLAggIQERhDCpBOQCpBPBCDIIAHAXIAPBBIgMB5IgRB2Qg5Cmg3BbIgFAMQiFEAj0ETQjsEMj4CQQiBBJiEApIlWAzIgygCg");
	this.shape_56.setTransform(645.1,997.0521);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29}]}).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_5}]},5).to({state:[]},1).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_29},{t:this.shape_54}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_29},{t:this.shape_54}]},1).to({state:[]},1).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).to({_off:true,y:1000.25},4).wait(75));
	// smile
	this.instance_6 = new lib.Tween11("synched",0);
	this.instance_6.setTransform(644.9,1019.3);
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:0.8364,scaleY:0.7582,y:985.1},6,cjs.Ease.quadOut).wait(1).to({regY:-5,y:985.2},0).wait(1).to({y:992.35},0).wait(1).to({y:1002.95},0).wait(1).to({regX:0.1,regY:0.1,x:645,y:1021.05},0).wait(1).to({regX:0,regY:-5,x:644.9,y:1017.15},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0.1,regY:0.1,x:645,y:1021.05},0).to({_off:true},1).wait(5).to({_off:false},0).to({startPosition:0},1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:644.9,y:1019.3},6,cjs.Ease.quadOut).to({startPosition:0},19).to({_off:true},1).wait(37));
	// Layer_2
	this.instance_7 = new lib.Symbol25("synched",7);
	this.instance_7.setTransform(647.7,718.7,5.0012,5.0012,0,0,0,0.2,0.3);
	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:643.05,y:632.25,startPosition:13},6,cjs.Ease.quadOut).wait(1).to({regX:0,regY:0,x:642.0391,y:634.6837,startPosition:14},0).wait(1).to({scaleX:5.0011,scaleY:5.0011,x:642.0192,y:641.8476,startPosition:15},0).wait(1).to({x:641.9897,y:652.4603,startPosition:16},0).wait(1).to({regX:0.2,regY:0.3,x:642.95,y:668.25,startPosition:17},0).wait(1).to({regX:0,regY:0,x:641.95,y:666.75,startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({regX:0.2,regY:0.3,x:642.95,y:668.25,startPosition:22},0).to({_off:true},1).wait(5).to({_off:false,startPosition:28},0).to({startPosition:17},1).to({scaleX:5.0012,scaleY:5.0012,x:647.7,y:718.7,startPosition:28},6,cjs.Ease.quadOut).to({startPosition:47},19).to({_off:true},1).wait(37));
	// glasses
	this.instance_8 = new lib.Tween13("synched",0);
	this.instance_8.setTransform(644.1,683.2);
	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:0.9086,x:643.25,y:605.5},6,cjs.Ease.quadOut).wait(1).to({regX:-0.7,x:642.6,y:609.4},0).wait(1).to({x:642.7,y:616.55},0).wait(1).to({x:642.8,y:627.15},0).wait(1).to({regX:0,x:643.55,y:641.4},0).wait(1).to({regX:-0.7,x:642.9},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,x:643.55},0).to({_off:true},1).wait(5).to({_off:false},0).to({startPosition:0},1).to({scaleX:1,x:644.1,y:683.2},6,cjs.Ease.quadOut).to({startPosition:0},19).to({_off:true},1).wait(37));
	// face
	this.instance_9 = new lib.Tween16("synched",0);
	this.instance_9.setTransform(642.2,855.85);
	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:0.4,regY:0.1,scaleX:0.9221,scaleY:1.3023,x:642.55,y:789.25},5,cjs.Ease.quadOut).to({regX:0.1,scaleX:0.9822,scaleY:1.1007,x:642.25,y:825.05},5,cjs.Ease.quadOut).wait(1).to({regX:0,regY:0,x:642.15,y:824.95},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0.1,regY:0.1,x:642.25,y:825.05},0).to({_off:true},1).wait(5).to({_off:false},0).to({startPosition:0},1).wait(1).to({regX:0,regY:0,scaleX:0.9836,scaleY:1.0927,x:642.1421,y:827.4002},0).wait(1).to({scaleX:0.9856,scaleY:1.0813,x:642.1307,y:830.9045},0).wait(1).to({scaleX:0.9883,scaleY:1.0661,x:642.1157,y:835.5463},0).wait(1).to({scaleX:0.9916,scaleY:1.0472,x:642.0969,y:841.3431},0).wait(1).to({scaleX:0.9956,scaleY:1.0248,x:642.0747,y:848.1881},0).wait(1).to({scaleX:1,scaleY:1,x:642.2,y:855.85},0).to({startPosition:0},19).to({_off:true},1).wait(37));
	this._renderFirstFrame();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(84.4,-46.8,1115.6999999999998,1360.6);
// stage content:
(lib._100_smile = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// _100grin
	this.instance = new lib._100grin("synched",0);
	this.instance.setTransform(110.85,228.85,0.1825,0.1826,0,0,0,608.1,729.9);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({mode:"single",startPosition:15},0).wait(33).to({mode:"synched",startPosition:21},0).wait(27));
	this._renderFirstFrame();
}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(130.3,262,88.6,73.39999999999998);
// library properties:
lib.properties = {
	id: '467698867DF2C950DE011B7BEFCEC4D5',
	width: 230,
	height: 350,
	fps: 24,
	color: "#0066CC",
	opacity: 0.00,
	manifest: [],
	preloads: []
};
// bootstrap callback support:
(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();
p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }
p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }
an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}
an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};
an.compositions = an.compositions || {};
an.compositions['467698867DF2C950DE011B7BEFCEC4D5'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};
an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}
an.getComposition = function(id) {
	return an.compositions[id];
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}
})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
