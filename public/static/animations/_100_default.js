
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
(lib.Tyjween13 = function(mode,startPosition,loop,reversed) {
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
(lib.Tyjtween12 = function(mode,startPosition,loop,reversed) {
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
	this.shape.setTransform(233.198,174.8897,1,1.094);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009DFF").s().p("AcUNBQkAgPoAlMQn8lPrUjpQrFjpvKgyQiLgGlSgIQhcj6D5jOQFkAKGGAlQKcAxIuC0QM+EIHyFcQICFiEBAFQD1gCBLjWQDWCTg+DDQg/DEhvA3QhdAvi/AAQgpAAgtgDg");
	this.shape_1.setTransform(233.1407,226.4503,1,1.094);
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0163AF").s().p("AgqgfQBjAZgQAmQgoghgrgeg");
	this.shape_2.setTransform(438.3419,212.3316,1,1.094);
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#05104D").s().p("AOXH8IgDAAQoDlHqcjRIAAgCQoAiwpvhEQpvhCmzAMQinm+H2AIQCZAACnAKQPMAxLHDnQLVDnIyFiQABAAAAAAQAAABABAAQAAAAAAAAQAAABAAAAQHXEgCaAeQBrgPA4gbQAUgoAWhpIAAgDQAgimhSjAQgNglgEgbQgbghgRgpQADAKgGgCIgHgFIkZjWIgCgDQhyhYlHjDQhFgrhRguQBeAJElA/QEiBCCjAAQCkAEBSA1QBQA3BjB4QBhB5BRDHQBMDIgZEKQgXECiaB+QiaB+l8AUIgnABQlyAAnJlQg");
	this.shape_3.setTransform(244.7079,257.4863,1,1.094);
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AWpHUIhAglQBFgmCRBLgAjJiaIBng4QgxAggoAdQgHgBgHgEgArMjmQAAgDgFAAIh7gRQCug/gEBYgA4YkkQhileCYFeIgcABIgagBg");
	this.shape_4.setTransform(200.0161,114.0047,1,1.094);
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0163AF").s().p("EglLANsQADjGDQkhIEqjiQCChlFjjWQFXjRGYixQGOiuFlheQFahhCygkQCzgkFDgmQGgg4MggGQAqHQg+G9QoBAKmQAkQqnAyo2CyQtIEHn8FeQoMFjlcAAIgIAAQlQAAAAjIg");
	this.shape_5.setTransform(-233.1979,174.99,1,1.0942);
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009DFF").s().p("EgiEAMVQhwg2g/jFQg+jEDWiSQBLDWD1ACQEBgFICliQHylcM+kIQIui0KcgxQGGglFkgKQD6DOhdD6QlSAIiLAGQvJAyrGDpQrUDqn8FOQoAFMkAAPQgtADgpAAQi/AAhcgvg");
	this.shape_6.setTransform(-233.1123,226.6106,1,1.0943);
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0163AF").s().p("AArgfQguAfglAgQgPgmBigZg");
	this.shape_7.setTransform(-438.3299,212.4881,1,1.0943);
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#05104D").s().p("A74NLQl9gUiah+QiZh+gYkCQgYkKBMjIQBQjHBhh5QBjh4BRg3QBRg1ClgEQCjAAEihCQElg/BdgJQhRAuhFArQlGDDhyBYIgDADIkYDWQgFACgDADQgEACACgKQgRApgcAhQgEAbgNAlQhRDCAgCkIAAADQAWBpAUAoQA5AbBpAPQCcgeHVkgQAAAAABgBQAAAAAAAAQAAAAABgBQAAAAABAAQIzliLTjnQLIjnPMgxQCngKCZAAQH1gIimG+Qm0gMpvBCQpvBEn/CwIAAACQqcDQoDFIIgDAAQnJFQlyAAIgngBg");
	this.shape_8.setTransform(-244.6986,257.6016,1,1.0942);
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("A4+HUQCRhLBFAmIhAAlgABjjSQA9AiArAWQgJAEgGABQgogdgxgggANNj6Ih7ARQgFAAAAADIgqAFQgEhYCuA/gAXjkkQCYlehiFeIgaABIgcgBg");
	this.shape_9.setTransform(-200.0161,114.094,1,1.0942);
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
p.nominalBounds = new cjs.Rectangle(-494.9,-328.8,989.9,678.8);
(lib.Twyyjnjeen11 = function(mode,startPosition,loop,reversed) {
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
(lib.Twiieen15 = function(mode,startPosition,loop,reversed) {
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
(lib.Twiieen14 = function(mode,startPosition,loop,reversed) {
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
(lib.Twyjyjeen1 = function(mode,startPosition,loop,reversed) {
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
(lib.Sytyjtymbol18 = function(mode,startPosition,loop,reversed) {
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
}).prototype = getMCSymbolPrototype(lib.Sytyjtymbol18, new cjs.Rectangle(-49,-33.4,94.6,66.5), null);
(lib.Tweeiin16 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Twiieen14("synched",0);
	this.instance_1 = new lib.Twiieen15("synched",0);
	this.instance_1.setTransform(0,50.3);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
	this._renderFirstFrame();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-557.8,-404.5,1115.6999999999998,809.1);
(lib.Siyuiymbol25 = function(mode,startPosition,loop,reversed) {
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
	var mask_graphics_0 = new cjs.Graphics().p("AGpDOQhegJgsguQgtgugNgqQgMgqgEguQgDgogDgXQAUgfgNgiQCDgzB4gEQB4gDChAeQAJA8gBAyQgBAygEAkQgFAlghA5QgiA4haAdQgwAPg9AAQgZAAgcgDgApKDCQhagdghg4Qgig5gEglQgFgkgBgyQAAgyAIg8QChgfB4AEQB4AECDAzQgMAhAUAgQgFAXgDAoQgDAugNAqQgMAqgsAuQgtAuheAJQgcADgZAAQg9AAgwgPg");
	var mask_graphics_26 = new cjs.Graphics().p("AGpDOQhegJgsguQgtgugNgqQgMgqgEguQgDgogDgXQAUgfgNgiQCDgzB4gEQB4gDChAeQAJA8gBAyQgBAygEAkQgFAlghA5QgiA4haAdQgwAPg9AAQgZAAgcgDgApKDCQhagdghg4Qgig5gEglQgFgkgBgyQAAgyAIg8QChgfB4AEQB4AECDAzQgMAhAUAgQgFAXgDAoQgDAugNAqQgMAqgsAuQgtAuheAJQgcADgZAAQg9AAgwgPg");
	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-0.25,y:3.3006}).wait(26).to({graphics:mask_graphics_26,x:-0.25,y:3.3006}).wait(1).to({graphics:null,x:0,y:0}).wait(168));
	// Layer_3
	this.instance = new lib.Twyjyjeen1("synched",0);
	this.instance.setTransform(-42.5,-0.85);
	var maskedShapeInstanceList = [this.instance];
	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-8.8,regY:-6.5,x:-51.2,y:-7.35},0).wait(1).to({x:-50.95},0).wait(1).to({x:-50.5},0).wait(1).to({x:-49.85},0).wait(1).to({x:-48.9},0).wait(1).to({x:-47.6},0).wait(1).to({x:-45.85},0).wait(1).to({x:-43.6},0).wait(1).to({x:-40.55},0).wait(1).to({x:-36.4},0).wait(1).to({x:-30.55},0).wait(1).to({x:-21.75},0).wait(1).to({x:-7.7},0).wait(1).to({x:9.65},0).wait(1).to({x:22.05},0).wait(1).to({x:29.95},0).wait(1).to({x:35.45},0).wait(1).to({x:39.4},0).wait(1).to({x:42.4},0).wait(1).to({x:44.75},0).wait(1).to({x:46.55},0).wait(1).to({x:47.9},0).wait(1).to({x:49},0).wait(1).to({x:49.8},0).wait(1).to({x:50.35},0).wait(1).to({regX:0,regY:0,x:59.55,y:-0.85},0).to({_off:true},1).wait(168));
	// Layer_1
	this.instance_1 = new lib.Sytyjtymbol18();
	this.instance_1.setTransform(-44.1,0.15,1,1,0,0,180);
	this.instance_2 = new lib.Sytyjtymbol18();
	this.instance_2.setTransform(44.1,0.15);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},26).to({state:[]},1).wait(168));
	this._renderFirstFrame();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.7,-33.2,179.4,66.4);
(lib._100b = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tyjtween12("synched",0);
	this.instance.setTransform(643.2,336.85);
	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,regY:0.1,scaleY:0.8856,x:643.3,y:258.45},8,cjs.Ease.quadInOut).to({regX:0,regY:0,scaleY:1,x:643.2,y:336.85},18,cjs.Ease.quadInOut).wait(1));
	// Layer_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EA7GBP8QjOgKh2gQQh2gPjYgoQjZgoiSgNQiSgNhrgUQhrgTiEgGQiEgGkcgIIlWgJQg5gBkkgLQkkgKlbAUQr8AKtDB6Qn7CHlOhLQlOhKhDgaQhDgZh7hCQh8hChchNQhdhMglgkQgvgugZgxQgdg2AAg6QgUgYgKgYQgdhHAwhLQAvhJBUgYQAigJAigBQgJhPA0g5QA5g/BVhNQBWhNBlhMQBkhLCujWQCtjWPhgZIVSA2QLbB6BEgYQBEgYF+BaQF+BbHYBKQQaBiEphGQEohHE4B3QE3B4A9ABICIADQAqABAkAQQA4gYBIAJQBsAOAuBMQAiA2gGBLQgEA6gdBNQhxEukMECIipCiQgvArhNAhIjzBjQikBDiCAWQhXAOh8AAQg6AAhCgDg");
	var mask_graphics_1 = new cjs.Graphics().p("EA7GBP7QjOgLh2gPQh2gQjYgoQjZgoiSgNQiSgNhrgTQhrgTiEgGQiEgGkcgIIlWgJQg5gBkkgLQkkgLlbAVQr8AKtDB6Qn7CGlOhKQlOhLhDgZQhDgah7hCQh8hBhchNQhdhNglgkQgvgugZgwQgdg3AAg6QgUgYgKgXQgdhHAwhLQAvhJBUgYQAigJAigCQgJhPA0g5QA5g+BVhOQBWhNBlhLQBkhMCujWQCtjWPhgZIVSA3QLbB5BEgYQBEgYF+BbQF+BaHYBLQQaBiEphHQEohGE4B3QE3B3A9ABICIADQAqACAkAQQA4gZBIAKQBsAOAuBLQAiA3gGBLQgEA6gdBNQhxEukMECIipChQgvAshNAgIjzBjQikBDiCAWQhXAPh7AAQg7AAhCgDg");
	var mask_graphics_2 = new cjs.Graphics().p("EA7GBPTQjOgLh2gPQh2gQjYgoQjZgoiSgNQiSgNhrgTQhrgTiEgGQiEgGkcgIIlWgJQg5gBkkgLQkkgLlbAVQr8AKtDB6Qn7CGlOhKQlOhLhDgZQhDgah7hCQh8hBhchNQhdhNglgkQgvgugZgwQgdg3AAg6QgUgYgKgXQgdhHAwhLQAvhJBUgYQAigJAigCQgJhPA0g5QA5g+BVhOQBWhNBlhLQBkhMCujWQCtjWPhgZIVSA3QLbB5BEgYQBEgYF+BbQF+BaHYBLQQaBiEphHQEohGE4B3QE3B3A9ABICIADQAqACAkAQQA4gZBIAKQBsAOAuBLQAiA3gGBLQgEA6gdBNQhxEukMECIipChQgvAshNAgIjzBjQikBDiCAWQhXAPh8AAQg6AAhCgDg");
	var mask_graphics_3 = new cjs.Graphics().p("EA7GBOxQjOgLh2gPQh2gPjYgoQjZgoiSgNQiSgOhrgTQhrgTiEgGQiEgGkcgIIlWgJQg5gBkkgLQkkgLlbAVQr8AKtDB6Qn7CHlOhLQlOhKhDgaQhDgZh7hCQh8hChchNQhdhMglgkQgvgvgZgwQgdg2AAg6QgUgYgKgYQgdhHAwhLQAvhJBUgYQAigJAigBQgJhPA0g5QA5g/BVhNQBWhOBlhLQBkhLCujWQCtjWPhgZIVSA2QLbB6BEgYQBEgYF+BaQF+BbHYBKQQaBiEphGQEohHE4B3QE3B3A9ACICIADQAqABAkAQQA4gYBIAJQBsAOAuBMQAiA2gGBLQgEA6gdBNQhxEukMECIipCiQgvArhNAhIjzBjQikBDiCAWQhXAOh8AAQg6AAhCgDg");
	var mask_graphics_4 = new cjs.Graphics().p("EA7GBOPQjOgKh2gQQh2gPjYgoQjZgoiSgNQiSgNhrgTQhrgUiEgGQiEgGkcgIIlWgJQg5gBkkgKQkkgLlbAUQr8ALtDB5Qn7CHlOhKQlOhLhDgZQhDgah7hCQh8hChchMQhdhNglgkQgvgugZgxQgdg2AAg6QgUgYgKgYQgdhHAwhLQAvhJBUgYQAigJAigBQgJhPA0g5QA5g/BVhNQBWhNBlhMQBkhLCujWQCtjWPhgZIVSA3QLbB5BEgYQBEgYF+BbQF+BaHYBKQQaBjEphHQEohGE4B3QE3B3A9ABICIADQAqABAkAQQA4gYBIAJQBsAOAuBMQAiA2gGBLQgEA6gdBNQhxEukMECIipCiQgvArhNAhIjzBjQikBDiCAWQhXAPh8AAQg6AAhCgEg");
	var mask_graphics_5 = new cjs.Graphics().p("EA7GBNuQjOgLh2gPQh2gQjYgnQjZgoiSgNQiSgOhrgTQhrgTiEgGQiEgGkcgIIlWgJQg5gBkkgLQkkgLlbAVQr8AKtDB6Qn7CHlOhLQlOhKhDgaQhDgah7hBQh8hChchNQhdhNglgkQgvgugZgwQgdg3AAg6QgUgYgKgXQgdhHAwhLQAvhJBUgYQAigJAigCQgJhPA0g5QA5g+BVhNQBWhOBlhLQBkhMCujWQCtjWPhgYIVSA2QLbB5BEgXQBEgYF+BaQF+BbHYBKQQaBiEphGQEohHE4B3QE3B3A9ABICIADQAqACAkAQQA4gZBIAKQBsAOAuBLQAiA3gGBLQgEA6gdBNQhxEukMECIipChQgvAshNAgIjzBkQikBCiCAWQhXAPh8AAQg6AAhCgDg");
	var mask_graphics_6 = new cjs.Graphics().p("EA7GBNMQjOgKh2gQQh2gPjYgoQjZgoiSgNQiSgNhrgTQhrgUiEgGQiEgGkcgIIlWgJQg5gBkkgKQkkgLlbAUQr8AKtDB6Qn7CHlOhKQlOhLhDgZQhDgah7hCQh8hChchMQhdhNglgkQgvgugZgxQgdg2AAg6QgUgYgKgYQgdhHAwhLQAvhJBUgYQAigJAigBQgJhPA0g5QA5g/BVhNQBWhNBlhMQBkhLCujWQCtjWPhgZIVSA3QLbB5BEgYQBEgYF+BbQF+BaHYBKQQaBjEphHQEohHE4B4QE3B3A9ABICIADQAqABAkAQQA4gYBIAJQBsAOAuBMQAiA2gGBLQgEA6gdBNQhxEukMECIipCiQgvArhNAhIjzBjQikBDiCAWQhXAPh8AAQg6AAhCgEg");
	var mask_graphics_7 = new cjs.Graphics().p("EA7GBMrQjOgLh2gPQh2gQjYgoQjZgniSgOQiSgNhrgTQhrgTiEgGQiEgGkcgIIlWgJQg5gBkkgLQkkgLlbAVQr8AKtDB6Qn7CGlOhKQlOhKhDgaQhDgah7hCQh8hBhchNQhdhNglgkQgvgugZgwQgdg3AAg6QgUgYgKgXQgdhHAwhLQAvhJBUgYQAigJAigCQgJhPA0g5QA5g+BVhOQBWhNBlhLQBkhMCujWQCtjWPhgZIVSA3QLbB5BEgYQBEgYF+BbQF+BaHYBLQQaBiEphHQEohGE4B3QE3B3A9ABICIADQAqACAkAQQA4gZBIAKQBsAOAuBLQAiA3gGBLQgEA6gdBNQhxEukMECIipChQgvAshNAgIjzBjQikBDiCAWQhXAPh8AAQg6AAhCgDg");
	var mask_graphics_8 = new cjs.Graphics().p("EA7GBMJQjOgKh2gQQh2gPjYgoQjZgoiSgNQiSgNhrgUQhrgTiEgGQiEgGkcgIIlWgJQg5gBkkgLQkkgKlbAUQr8AKtDB6Qn7CHlOhLQlOhKhDgaQhDgZh7hCQh8hChchNQhdhMglgkQgvgugZgxQgdg2AAg6QgUgYgKgYQgdhHAwhLQAvhJBUgYQAigJAigBQgJhPA0g5QA5g/BVhNQBWhNBlhMQBkhLCujWQCtjWPhgZIVSA2QLbB6BEgYQBEgYF+BaQF+BbHYBKQQaBiEphGQEohHE4B3QE3B4A9ABICIADQAqABAkAQQA4gYBIAJQBsAOAuBMQAiA2gGBLQgEA6gdBNQhxEukMECIipCiQgvArhNAhIjzBjQikBDiCAWQhXAOh8AAQg6AAhCgDg");
	var mask_graphics_9 = new cjs.Graphics().p("EA7GBMKQjOgKh2gQQh2gPjYgoQjZgoiSgNQiSgNhrgTQhrgUiEgGQiEgGkcgIIlWgJQg5gBkkgKQkkgLlbAUQr8ALtDB5Qn7CHlOhKQlOhLhDgZQhDgah7hCQh8hChchMQhdhNglgkQgvgugZgxQgdg2AAg6QgUgYgKgYQgdhHAwhLQAvhJBUgYQAigJAigBQgJhPA0g5QA5g/BVhNQBWhNBlhMQBkhLCujWQCtjWPhgZIVSA3QLbB5BEgYQBEgYF+BbQF+BaHYBKQQaBjEphHQEohGE4B3QE3B3A9ABICIADQAqABAkAQQA4gYBIAJQBsAOAuBMQAiA2gGBLQgEA6gdBNQhxEukMECIipCiQgvArhNAhIjzBjQikBDiCAWQhXAPh8AAQg6AAhCgEg");
	var mask_graphics_10 = new cjs.Graphics().p("EA7GBMOQjOgKh2gQQh2gPjYgoQjZgoiSgNQiSgNhrgTQhrgUiEgGQiEgGkcgIIlWgJQg5gBkkgKQkkgLlbAUQr8ALtDB5Qn7CHlOhKQlOhLhDgZQhDgah7hCQh8hChchMQhdhNglgkQgvgugZgxQgdg2AAg6QgUgYgKgYQgdhHAwhLQAvhJBUgYQAigJAigBQgJhPA0g5QA5g/BVhNQBWhNBlhMQBkhLCujWQCtjWPhgZIVSA3QLbB5BEgYQBEgYF+BbQF+BaHYBKQQaBjEphHQEohHE4B4QE3B3A9ABICIADQAqABAkAQQA4gYBIAJQBsAOAuBMQAiA2gGBLQgEA6gdBNQhxEukMECIipCiQgvArhNAhIjzBjQikBDiCAWQhXAPh8AAQg6AAhCgEg");
	var mask_graphics_11 = new cjs.Graphics().p("EA7GBMVQjOgLh2gPQh2gQjYgnQjZgoiSgNQiSgOhrgTQhrgTiEgGQiEgGkcgIIlWgJQg5gBkkgLQkkgLlbAVQr8AKtDB6Qn7CHlOhLQlOhKhDgaQhDgah7hBQh8hChchNQhdhNglgkQgvgugZgwQgdg3AAg6QgUgYgKgXQgdhHAwhLQAvhJBUgYQAigJAigCQgJhPA0g5QA5g+BVhNQBWhOBlhLQBkhMCujWQCtjWPhgYIVSA2QLbB5BEgXQBEgYF+BaQF+BbHYBKQQaBiEphGQEohHE4B3QE3B3A9ABICIADQAqACAkAQQA4gZBIAKQBsAOAuBLQAiA3gGBLQgEA6gdBNQhxEukMECIipChQgvAshNAgIjzBkQikBDiCAVQhXAPh8AAQg6AAhCgDg");
	var mask_graphics_12 = new cjs.Graphics().p("EA7GBMeQjOgLh2gPQh2gPjYgoQjZgoiSgNQiSgOhrgTQhrgTiEgGQiEgGkcgIIlWgJQg5gBkkgLQkkgLlbAVQr8AKtDB6Qn7CHlOhLQlOhKhDgaQhDgZh7hCQh8hChchNQhdhMglglQgvgtgZgxQgdg2AAg7QgUgXgKgYQgdhHAwhLQAvhJBUgYQAigJAigBQgJhPA0g5QA5g/BVhNQBWhOBlhLQBkhLCujWQCtjWPhgZIVSA2QLbB6BEgYQBEgYF+BaQF+BbHYBKQQaBiEphGQEohHE4B3QE3B3A9ACICIACQAqACAkAQQA4gZBIAKQBsAOAuBMQAiA2gGBLQgEA6gdBNQhxEukMECIipCiQgvArhNAhIjzBjQikBDiCAVQhXAPh8AAQg6AAhCgDg");
	var mask_graphics_13 = new cjs.Graphics().p("EA7GBMqQjOgLh2gPQh2gQjYgnQjZgoiSgNQiSgOhrgTQhrgTiEgGQiEgGkcgIIlWgJQg5gBkkgLQkkgLlbAVQr8AKtDB6Qn7CGlOhKQlOhKhDgaQhDgah7hBQh8hChchNQhdhNglgkQgvgugZgwQgdg3AAg6QgUgYgKgXQgdhHAwhLQAvhJBUgYQAigJAigCQgJhPA0g5QA5g+BVhNQBWhOBlhLQBkhMCujWQCtjWPhgYIVSA2QLbB5BEgXQBEgYF+BaQF+BbHYBKQQaBiEphGQEohHE4B3QE3B3A9ABICIADQAqACAkAQQA4gZBIAKQBsAOAuBLQAiA3gGBLQgEA6gdBNQhxEukMECIipChQgvAshNAgIjzBkQikBCiCAWQhXAPh7AAQg7AAhCgDg");
	var mask_graphics_14 = new cjs.Graphics().p("EA7GBM4QjOgKh2gQQh2gPjYgoQjZgoiSgNQiSgNhrgUQhrgTiEgGQiEgGkcgIIlWgJQg5gBkkgLQkkgKlbAUQr8AKtDB6Qn7CHlOhLQlOhKhDgaQhDgZh7hCQh8hChchNQhdhMglgkQgvgugZgxQgdg2AAg6QgUgYgKgYQgdhHAwhLQAvhJBUgYQAigJAigBQgJhPA0g5QA5g/BVhNQBWhNBlhMQBkhLCujWQCtjWPhgZIVSA2QLbB6BEgYQBEgYF+BaQF+BbHYBKQQaBiEphGQEohHE4B3QE3B4A9ABICIADQAqABAkAQQA4gYBIAJQBsAOAuBMQAiA2gGBLQgEA6gdBNQhxEukMECIipCiQgvArhNAhIjzBjQikBDiCAWQhXAOh8AAQg6AAhCgDg");
	var mask_graphics_15 = new cjs.Graphics().p("EA7GBNJQjOgKh2gQQh2gPjYgoQjZgoiSgNQiSgNhrgUQhrgTiEgGQiEgGkcgIIlWgJQg5gBkkgLQkkgKlbAUQr8AKtDB6Qn7CHlOhLQlOhKhDgaQhDgZh7hCQh8hChchNQhdhMglgkQgvgugZgxQgdg2AAg6QgUgYgKgYQgdhHAwhLQAvhJBUgYQAigJAigBQgJhPA0g5QA5g/BVhNQBWhNBlhMQBkhLCujWQCtjWPhgZIVSA2QLbB6BEgYQBEgYF+BaQF+BbHYBKQQaBiEphGQEohHE4B3QE3B4A9ABICIADQAqABAkAQQA4gYBIAJQBsAOAuBMQAiA2gGBLQgEA6gdBNQhxEukMECIipCiQgvArhNAhIjzBjQikBDiCAWQhXAOh8AAQg6AAhCgDg");
	var mask_graphics_16 = new cjs.Graphics().p("EA7GBNdQjOgLh2gPQh2gQjYgoQjZgniSgOQiSgNhrgTQhrgTiEgGQiEgGkcgIIlWgJQg5gBkkgLQkkgLlbAVQr8AKtDB6Qn7CGlOhKQlOhKhDgaQhDgah7hCQh8hBhchNQhdhNglgkQgvgugZgwQgdg3AAg6QgUgYgKgXQgdhHAwhLQAvhJBUgYQAigJAigCQgJhPA0g5QA5g+BVhOQBWhNBlhLQBkhMCujWQCtjWPhgZIVSA3QLbB5BEgYQBEgXF+BaQF+BbHYBKQQaBiEphHQEohGE4B3QE3B3A9ABICIADQAqACAkAQQA4gZBIAKQBsAOAuBLQAiA3gGBLQgEA6gdBNQhxEukMECIipChQgvAshNAgIjzBjQikBDiCAWQhXAPh8AAQg6AAhCgDg");
	var mask_graphics_17 = new cjs.Graphics().p("EA7GBNzQjOgLh2gPQh2gPjYgoQjZgoiSgNQiSgOhrgTQhrgTiEgGQiEgGkcgIIlWgJQg5gBkkgLQkkgLlbAVQr8AKtDB6Qn7CHlOhLQlOhKhDgaQhDgZh7hCQh8hChchNQhdhNglgkQgvgugZgwQgdg3AAg6QgUgYgKgXQgdhHAwhLQAvhJBUgYQAigJAigCQgJhPA0g5QA5g+BVhNQBWhOBlhLQBkhMCujWQCtjVPhgZIVSA2QLbB5BEgXQBEgYF+BaQF+BbHYBKQQaBiEphGQEohHE4B3QE3B3A9ABICIADQAqACAkAQQA4gZBIAKQBsAOAuBLQAiA3gGBLQgEA6gdBNQhxEukMECIipChQgvAshNAgIjzBkQikBDiCAVQhXAPh8AAQg6AAhCgDg");
	var mask_graphics_18 = new cjs.Graphics().p("EA7GBOJQjOgKh2gQQh2gPjYgoQjZgoiSgNQiSgNhrgUQhrgTiEgGQiEgGkcgIIlWgJQg5gBkkgLQkkgKlbAUQr8AKtDB6Qn7CHlOhLQlOhKhDgaQhDgZh7hCQh8hChchNQhdhMglgkQgvgugZgxQgdg2AAg6QgUgYgKgYQgdhHAwhLQAvhJBUgYQAigJAigBQgJhPA0g5QA5g/BVhNQBWhNBlhMQBkhLCujWQCtjWPhgZIVSA2QLbB6BEgYQBEgYF+BaQF+BbHYBKQQaBiEphGQEohHE4B3QE3B4A9ABICIADQAqABAkAQQA4gYBIAJQBsAOAuBMQAiA2gGBLQgEA6gdBNQhxEukMECIipCiQgvArhNAhIjzBjQikBDiCAWQhXAPh7AAQg7AAhCgEg");
	var mask_graphics_19 = new cjs.Graphics().p("EA7GBOdQjOgLh2gPQh2gQjYgnQjZgoiSgNQiSgOhrgTQhrgTiEgGQiEgGkcgIIlWgJQg5gBkkgLQkkgLlbAVQr8AKtDB6Qn7CHlOhLQlOhKhDgaQhDgah7hBQh8hChchNQhdhNglgkQgvgugZgwQgdg3AAg6QgUgYgKgXQgdhHAwhLQAvhJBUgYQAigJAigCQgJhPA0g5QA5g+BVhNQBWhOBlhLQBkhMCujWQCtjWPhgYIVSA2QLbB5BEgXQBEgYF+BaQF+BbHYBKQQaBiEphGQEohHE4B3QE3B3A9ABICIADQAqACAkAQQA4gZBIAKQBsAOAuBLQAiA3gGBLQgEA6gdBNQhxEukMECIipChQgvAshNAgIjzBkQikBCiCAWQhXAPh7AAQg7AAhCgDg");
	var mask_graphics_20 = new cjs.Graphics().p("EA7GBOuQjOgLh2gPQh2gQjYgnQjZgoiSgNQiSgOhrgTQhrgTiEgGQiEgGkcgIIlWgJQg5gBkkgLQkkgLlbAVQr8AKtDB6Qn7CHlOhLQlOhKhDgaQhDgah7hBQh8hChchNQhdhNglgkQgvgugZgwQgdg3AAg6QgUgYgKgXQgdhHAwhLQAvhJBUgYQAigJAigCQgJhPA0g5QA5g+BVhNQBWhOBlhLQBkhMCujWQCtjWPhgYIVSA2QLbB5BEgXQBEgYF+BaQF+BbHYBKQQaBiEphGQEohHE4B3QE3B3A9ABICIADQAqACAkAQQA4gZBIAKQBsAOAuBLQAiA3gGBLQgEA6gdBNQhxEukMECIipChQgvAshNAgIjzBkQikBCiCAWQhXAPh8AAQg6AAhCgDg");
	var mask_graphics_21 = new cjs.Graphics().p("EA7GBO8QjOgKh2gQQh2gPjYgoQjZgoiSgNQiSgNhrgUQhrgTiEgGQiEgGkcgIIlWgJQg5gBkkgLQkkgKlbAUQr8AKtDB6Qn7CHlOhLQlOhKhDgaQhDgZh7hCQh8hChchNQhdhMglgkQgvgugZgxQgdg2AAg6QgUgYgKgYQgdhHAwhLQAvhJBUgYQAigJAigBQgJhPA0g5QA5g/BVhNQBWhNBlhMQBkhLCujWQCtjWPhgZIVSA2QLbB6BEgYQBEgYF+BaQF+BbHYBKQQaBiEphGQEohHE4B3QE3B4A9ABICIADQAqABAkAQQA4gYBIAJQBsAOAuBMQAiA2gGBLQgEA6gdBNQhxEukMECIipCiQgvArhNAhIjzBjQikBDiCAWQhXAOh8AAQg6AAhCgDg");
	var mask_graphics_22 = new cjs.Graphics().p("EA7GBPIQjOgLh2gPQh2gPjYgoQjZgoiSgNQiSgOhrgTQhrgTiEgGQiEgGkcgIIlWgJQg5gBkkgLQkkgLlbAVQr8AKtDB6Qn7CHlOhLQlOhKhDgaQhDgah7hBQh8hChchNQhdhNglgkQgvgugZgwQgdg3AAg6QgUgYgKgXQgdhHAwhLQAvhJBUgYQAigJAigCQgJhPA0g5QA5g+BVhNQBWhOBlhLQBkhMCujWQCtjVPhgZIVSA2QLbB5BEgXQBEgYF+BaQF+BbHYBKQQaBiEphGQEohHE4B3QE3B3A9ABICIADQAqACAkAQQA4gZBIAKQBsAOAuBLQAiA3gGBLQgEA6gdBNQhxEukMECIipChQgvAshNAgIjzBkQikBDiCAVQhXAPh8AAQg6AAhCgDg");
	var mask_graphics_23 = new cjs.Graphics().p("EA7GBPRQjOgKh2gQQh2gPjYgoQjZgoiSgNQiSgNhrgUQhrgTiEgGQiEgGkcgIIlWgJQg5gBkkgLQkkgKlbAUQr8AKtDB6Qn7CHlOhLQlOhKhDgaQhDgZh7hCQh8hChchNQhdhMglgkQgvgugZgxQgdg2AAg6QgUgYgKgYQgdhHAwhLQAvhJBUgYQAigJAigBQgJhPA0g5QA5g/BVhNQBWhNBlhMQBkhLCujWQCtjWPhgZIVSA2QLbB6BEgYQBEgYF+BaQF+BbHYBKQQaBiEphGQEohHE4B3QE3B4A9ABICIADQAqABAkAQQA4gYBIAJQBsAOAuBMQAiA2gGBLQgEA6gdBNQhxEukMECIipCiQgvArhNAhIjzBjQikBDiCAWQhXAOh8AAQg6AAhCgDg");
	var mask_graphics_24 = new cjs.Graphics().p("EA7GBPYQjOgLh2gPQh2gQjYgoQjZgniSgOQiSgNhrgTQhrgTiEgGQiEgGkcgIIlWgJQg5gBkkgLQkkgLlbAVQr8AKtDB6Qn7CGlOhKQlOhLhDgZQhDgah7hCQh8hBhchNQhdhNglgkQgvgugZgwQgdg3AAg6QgUgYgKgXQgdhHAwhLQAvhJBUgYQAigJAigCQgJhPA0g5QA5g+BVhOQBWhNBlhLQBkhMCujWQCtjWPhgZIVSA3QLbB5BEgYQBEgYF+BbQF+BaHYBLQQaBiEphHQEohGE4B3QE3B3A9ABICIADQAqACAkAQQA4gZBIAKQBsAOAuBLQAiA3gGBLQgEA6gdBNQhxEukMECIipChQgvAshNAgIjzBjQikBDiCAWQhXAPh7AAQg7AAhCgDg");
	var mask_graphics_25 = new cjs.Graphics().p("EA7GBPcQjOgLh2gPQh2gQjYgoQjZgoiSgNQiSgNhrgTQhrgTiEgGQiEgHkcgHIlWgJQg5gBkkgLQkkgLlbAVQr8AKtDB6Qn7CGlOhKQlOhLhDgZQhDgah7hCQh8hChchMQhdhNglgkQgvgugZgwQgdg3AAg6QgUgYgKgXQgdhHAwhLQAvhJBUgYQAigJAigCQgJhPA0g5QA5g+BVhOQBWhNBlhLQBkhMCujWQCtjWPhgZIVSA3QLbB5BEgYQBEgYF+BbQF+BaHYBLQQaBiEphHQEohGE4B3QE3B3A9ABICIADQAqACAkAQQA4gZBIAKQBsAOAuBLQAiA3gGBLQgEA6gdBNQhxEukMECIipChQgvAshNAgIjzBjQikBDiCAWQhXAPh8AAQg6AAhCgDg");
	var mask_graphics_26 = new cjs.Graphics().p("EA7GBPdQjOgLh2gPQh2gQjYgnQjZgoiSgNQiSgOhrgTQhrgTiEgGQiEgGkcgIIlWgJQg5gBkkgLQkkgLlbAVQr8AKtDB6Qn7CHlOhLQlOhKhDgaQhDgah7hBQh8hChchNQhdhNglgkQgvgugZgwQgdg3AAg6QgUgYgKgXQgdhHAwhLQAvhJBUgYQAigJAigCQgJhPA0g5QA5g+BVhNQBWhOBlhLQBkhMCujWQCtjWPhgYIVSA2QLbB5BEgXQBEgYF+BaQF+BbHYBKQQaBiEphGQEohHE4B3QE3B3A9ABICIADQAqACAkAQQA4gZBIAKQBsAOAuBLQAiA3gGBLQgEA6gdBNQhxEukMECIipChQgvAshNAgIjzBkQikBCiCAWQhXAPh7AAQg7AAhCgDg");
	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:536.2138,y:511.9412}).wait(1).to({graphics:mask_graphics_1,x:536.2138,y:511.7912}).wait(1).to({graphics:mask_graphics_2,x:536.2138,y:507.7912}).wait(1).to({graphics:mask_graphics_3,x:536.2138,y:504.4329}).wait(1).to({graphics:mask_graphics_4,x:536.2138,y:501.0745}).wait(1).to({graphics:mask_graphics_5,x:536.2138,y:497.7162}).wait(1).to({graphics:mask_graphics_6,x:536.2138,y:494.3579}).wait(1).to({graphics:mask_graphics_7,x:536.2138,y:490.9995}).wait(1).to({graphics:mask_graphics_8,x:536.2138,y:487.6412}).wait(1).to({graphics:mask_graphics_9,x:536.2138,y:487.7719}).wait(1).to({graphics:mask_graphics_10,x:536.2138,y:488.164}).wait(1).to({graphics:mask_graphics_11,x:536.2138,y:488.8176}).wait(1).to({graphics:mask_graphics_12,x:536.2138,y:489.7326}).wait(1).to({graphics:mask_graphics_13,x:536.2138,y:490.9089}).wait(1).to({graphics:mask_graphics_14,x:536.2138,y:492.3468}).wait(1).to({graphics:mask_graphics_15,x:536.2138,y:494.046}).wait(1).to({graphics:mask_graphics_16,x:536.2138,y:496.0066}).wait(1).to({graphics:mask_graphics_17,x:536.2138,y:498.2287}).wait(1).to({graphics:mask_graphics_18,x:536.2138,y:500.4508}).wait(1).to({graphics:mask_graphics_19,x:536.2138,y:502.4114}).wait(1).to({graphics:mask_graphics_20,x:536.2138,y:504.1106}).wait(1).to({graphics:mask_graphics_21,x:536.2138,y:505.5485}).wait(1).to({graphics:mask_graphics_22,x:536.2138,y:506.7248}).wait(1).to({graphics:mask_graphics_23,x:536.2138,y:507.6398}).wait(1).to({graphics:mask_graphics_24,x:536.2138,y:508.2934}).wait(1).to({graphics:mask_graphics_25,x:536.2138,y:508.6855}).wait(1).to({graphics:mask_graphics_26,x:536.2138,y:508.8162}).wait(1));
	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#05104D").s().p("EAneAGoIgKgBQy5j8yrgdIgGAAIhogCIgBAAIgBAAIgBAAIhnACIgGAAQysAdy5D8IgKABQwUBtn2swQgVgkAJgoQAKgoAjgWQAkgWAoAKQAoAKAVAjQG4LDOOhdQTKj+S9gdIAAAAQAagDAbAAIACAAIA4ABIABAAIABAAIABAAIA4gBIACAAQAdAAAcADQS7AdTID+QOOBdG3rDQAWgjAogKQAogKAkAWQAjAWAKAoQAJAogVAkQm7LQtgAAQh0AAh7gNg");
	this.shape.setTransform(646.65,999.836);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#05104D").s().p("Egw5AGLQmnhZkjkwQh4h7hgidQgVgjAIgmIAAgCQAJgoAigWQAjgWAoAIQAnAJAWAhQAfAxAkAsQD1FEF5B6QEiBfFzgjQQ+jZRFgrQCAgGB+gDIABAAQAZgCAbAAIACAAIA4ABIAAAAIACAAIABAAIA4gBIACAAQAdAAAcADQTBAcS4DxQCXAPCLgIQKbgnFpoMIAegsQAWghAogJQAngJAjAWQAjAWAJAoQAKAogWAkQgtBKgzBDQkUFwmkCBQlMBnmigsIgLgBQjWgtjWglQugijupgdIgGAAIhigDIgFAAIgHAAIgBAAIgCAAIhegCIgBAAIgBAAIAAAAIgMAAIgGAAIhWACIgGAAQudAWuVCZQkVAukUA4IgKACQh7AMh0AAQjFAAixglg");
	this.shape_1.setTransform(646.5,998.4809);
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#05104D").s().p("EgwXAGBQmvhTkakiQh6h6hdiXQgWgjAHglIAAgCQAGgoAggWQAggYAmAFQAmAGAXAcQAgApAlAmQD0EbGCB8QEaBdF1gZQQZi5RZgkQB+gEB9gCIABAAQAZgDAbAAIACAAIA2ABIABAAIACAAIABAAIA3gBIACAAQAdAAAcADQTUAcSHDMQCVAKCHgKQKkg6FhnQIAfgmQAXgcAngGQAmgGAhAXQAhAXAIAoQAJAngVAjQgrBKgyBEQkNFomsB0QlLBcmbgrIgKgBQjVgqjVglQt9iau7gdIgFAAIhigCIgFAAIgHAAIgBAAIgCAAIhcgCIgBAAIgCAAIAAAAIgMAAIgGAAIhUACIgGAAQusAWtxCSQkSAukRA0IgJACQh9AMh0AAQjBAAitgig");
	this.shape_2.setTransform(645.9241,994.3683);
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#05104D").s().p("EgvgAFxQm6hKkKkJQiAh5hYiOQgVgiADgkIAAgBQADgnAbgZQAbgYAkgBQAjAAAYATQAhAdApAaQDwDWGSCAQENBcF3gKQPciDR8gWID1gFIABAAQAZgCAaAAIACAAIA1ABIABAAIACAAIABAAIA2AAIACAAQAdAAAbACQT0AbQ2CNQCRAECCgOQKzhZFTlsIAhgcQAZgVAkgBQAlAAAdAYQAeAYAHAnQAHAmgTAkQgnBHgzBGQkAFbm4BeQlKBMmRgqIgJgBQjRgmjSgjQtEiNvagcIgFAAIhggCIgFAAIgHAAIgBAAIgCAAIhagBIgBAAIgCAAIgBAAIgLAAIgGAAIhTACIgGAAQvCAWs1CIQkOAskLAvIgJABQh/AMh3AAQi4AAiogdg");
	this.shape_3.setTransform(644.9755,987.4827);
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#05104D").s().p("EguSAFbQnKg8j1jmQiGh4hSiBQgVghgBgiIAAAAQgDgmAVgbQAVgbAhgJQAegHAaAHQAjALAuAKQDrB0GoCIQD7BYF6AMQOGg4SsgDIDvgCIABAAIAxgBIACAAIA0ABIACAAIABAAIA1AAIACAAIA3ACQUgAaPFA1QCMgFB5gUQLKiEE+jgIAkgPQAcgJAgAFQAiAHAZAZQAZAbAFAnQAFAkgRAkQghBFgzBIQjvFJnKA/QlHA0mBgoIgKgBImahBQr0h7wFgaIgEAAIhegCIgEAAIgHAAIgBAAIgCAAIgBAAQgsgBgrABIgBAAIgCAAIgBAAIgLAAIgGAAIhQACIgGAAQviAWrgB5QkKAskCAlIgKABQiBAMh6AAQitAAiggXg");
	this.shape_4.setTransform(643.6048,977.6599);
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#05104D").s().p("EgtDAFQQnZgvjgjEQiNh2hLh1QgVgfgGggQgIgkAPgeQAPgcAdgTQAZgNAdgGIBYgNQDmATG+COQDoBYF+AhQMxASTbAPIDoACIABAAIAvAAIABAAIA0ABIACAAIABAAIAzABIACAAQAbAAAbABQVNAYNTghQCHgPBygZQLfiwEqhVIAnAAQAeABAdAMQAfAOAUAbQAVAcADAnQADAigPAkQgbBDg0BKQjeE3nbAhQlEAblyglIgKgBQjFgbjMgfQqjhowwgYIgFAAIhbgCIgEAAIgHAAIgBAAIgCAAIgBAAQgrAAgqABIgBAAIgCAAIgBAAIgKAAIgGAAIhOABIgFAAQwDAXqLBrQkFAqj6AcIgJABQiJALiDAAQicAAiUgPg");
	this.shape_5.setTransform(642.0647,966.8862);
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#05104D").s().p("EAkBAFGIgJgBQjBgWjJgdQprhbxOgXIgFAAIhZgCIgEAAIgHAAIgBAAIgCAAIgBAAIhTABIgBAAIgCAAIgBAAIgKAAIgGAAIhNACIgFAAQwZAXpPBgQkBApj0AWIgJABQklAVkNgVQnlgljQisQiTh2hGhqQgUgfgKgdIAAgBQgMgjALgfQAKgeAbgZQAWgSAegPQAngSA2gTQDjgyHOCSQDaBWGAAxQL0BHT9AdIDjAEIABAAIAtABIACAAIAzABIACAAIABAAIAyABIACAAIA1ABQVuAWMBhfQCDgVBtgdQLujQEcAPQAWAEATAGQAgAJAaARQAdATARAcQASAeACAmQABAhgNAlQgXBBg1BKQjREsnoALQhDAChFAAQkFAAkdgdg");
	this.shape_6.setTransform(640.9086,957.5253);
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#05104D").s().p("EAuNAFvQlBgBlhgjIgJgBQi/gUjIgcQpIhTxggXIgFAAIhYgBIgEAAIgHAAIgBAAIgCAAIgBAAQgqAAgoABIgBAAIgCAAIgBAAIgKAAIgGAAIhMACIgFAAQwnAXorBaQj+AojxASIgJABQkhAUkLgRQnsgfjHidQiWh2hDhkQgUgegMgdQgOgjAIggQAIgfAZgcQAVgWAegUQAogaA4gZQDhhcHXCVQDTBVGBA6QLPBoUSAjIDgAGIABAAIAtABIACAAIAxABIACAAIABAAIAyABIACAAIA1ABQWAAWLRiEQCAgaBqgfQL3jiEUBLQAXAHATAJQAhAOAZATQAcAWAPAdQAQAfAAAmQABAggMAlQgUA/g1BMQjJEinqAAIgHAAg");
	this.shape_7.setTransform(640.1555,951.466);
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#05104D").s().p("EAuDAF0QnygHo8hQQo8hRxngWIgFAAIhigBIgBAAIgDAAIAAAAQgxAAgvABIgGAAQxnAWo0BbQo0BantgcQntgdjEiZQjFiYg1h6Qg1h7DhhpQDghqHaCVQJMDvfhA8QfgA9L7joQL6jpERBfQERBfjHEgQjDEbnhAAIgWAAg");
	this.shape_8.setTransform(639.9108,949.4062);
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#05104D").s().p("EAuFAFzQlAgElggjIgJgBQi+gTjIgcQo+hRxmgWIgFAAIhXgBIgEAAIgHAAIgBAAIgDAAIAAAAQgqAAgoABIgBAAIgCAAIgBAAIgKAAIgGAAIhLACIgFAAQwrAXohBYQj+ApjwAQIgJABQkfAUkMgQQntgdjFiaQiXh1hChjQgUgegMgdQgPgiAHghQAHgfAagdQATgXAfgVQAogcA5gbQDghnHaCVQDQBVGCA9QLFBwUXAmIDgAGIABAAIAsABIACAAIAyABIACAAIABAAIAxABIACAAIA1ABQWFAWLEiPQCAgaBpggQL5jnESBbQAXAIATAJQAiAQAXAUQAdAXAOAdQAQAfAAAlQAAAggMAlQgTA/g1BNQjEEcnjAAIgTAAg");
	this.shape_9.setTransform(639.961,949.8131);
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#05104D").s().p("EAuLAFwQlBgBlggkIgJgBQi/gTjIgcQpFhTxjgWIgEAAIhYgCIgEAAIgHAAIgBAAIgCAAIgBAAQgqAAgoACIgBAAIgCAAIgBAAIgKAAIgGAAIhMABIgFAAQwnAYopBZQj+AojxASIgJABQkgAUkMgRQnsgejGidQiWh1hDhkQgUgegMgdQgOgjAHghQAHgeAagdQAUgWAfgUQAngaA5gaQDhhfHYCVQDRBVGCA7QLNBqUTAkIDgAGIABAAIAsABIACAAIAyABIACAAIABAAIAyABIACAAIA0ABQWCAWLNiHQCBgaBpgfQL4jkETBPQAXAIAUAIQAhAPAYATQAcAXAPAdQAQAfAAAlQAAAggLAlQgUA/g1BNQjIEgnoAAIgKAAg");
	this.shape_10.setTransform(640.1192,951.0233);
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#05104D").s().p("EAjxAFKIgJgBQjAgVjIgcQpRhVxcgXIgEAAIhZgBIgEAAIgHAAIgBAAIgCAAIgBAAIhSABIgBAAIgCAAIgBAAIgKAAIgGAAIhMABIgFAAQwjAYo1BbQj/ApjxATIgJABQkiAUkNgSQnpggjJiiQiWh1hDhmQgUgfgMgdQgNgjAIggQAIgeAbgcQAUgUAfgTQAngYA4gXQDhhSHVCUQDUBWGBA4QLZBfUNAiIDgAFIABAAIAtABIACAAIAyABIACAAIABAAIAyABIACAAIA1ABQV7AWLdh7QCCgYBqgfQL1jdEWA8QAXAGATAIQAhANAYASQAdAWAQAcQAQAfABAlQAAAhgMAlQgVBAg1BLQjMEmntABIgiAAQkyAAlQghg");
	this.shape_11.setTransform(640.3618,953.0332);
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#05104D").s().p("EAj8AFHIgJgBQjBgWjJgdQphhYxTgXIgFAAIhZgCIgEAAIgHAAIgBAAIgCAAIgBAAIhTABIgBAAIgCAAIgBAAIgKAAIgFAAIhNACIgFAAQwdAXpFBeQkAApjzAVIgJABQklAVkMgUQnngjjNioQiUh2hFhoQgUgfgLgdIAAgBQgMgjAKggQAJgeAbgZQAVgUAegQQAngUA3gUQDjg+HQCSQDYBWGBA0QLpBQUDAfIDiAFIABAAIAtAAIACAAIAzAAIACAAIABAAIAyABIACAAIA1ABQVzAXLzhpQCCgXBsgdQLxjWEaAhQAWAFATAGQAhALAZARQAdAUARAdQARAeABAlQABAhgNAlQgWBBg0BLQjQEpnqAHIhkABQkVAAkugeg");
	this.shape_12.setTransform(640.6815,955.8535);
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#05104D").s().p("EgsUAFVQnignjUiwQiRh3hHhrQgVgfgJgeIAAgBQgLgjAMgfQAKgeAcgXQAXgSAdgNQAngQA2gQQDjglHLCRQDdBWF/AvQMAA9T2AaIDkAEIABAAIAuAAIACAAIAyABIABAAIACAAIABAAIAyABIACAAIA1ABQVoAWMQhTQCEgUBugcQLrjKEfgDQAWADATAEQAfAIAaAQQAeASASAcQASAeACAmQABAhgNAlQgXBBg1BKQjUEunlAPQlDANlpgkIgJgBQjCgXjKgeQp1hexJgXIgFAAIhZgBIgEAAIgHAAIgBAAIgCAAIgBAAQgqgBgqACIgBAAIgCAAIgBAAIgKAAIgFAAIhOABIgFAAQwVAXpaBiQkBAqj2AWIgJACQiRAKiMAAQiPAAiIgLg");
	this.shape_13.setTransform(641.1139,959.4221);
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#05104D").s().p("EgstAFRQndgrjai7QiQh2hJhxQgUgfgIgfQgJgkANgfQANgdAdgUQAYgQAdgJQAlgLA1gLQDlgHHECQQDiBWF/AoQMaAmToAUIDmADIABAAIAuAAIACAAIAzABIACAAIABAAIAzABIACAAIA1ABQVaAXM0g4QCFgRBwgbQLli8ElgvIAoADQAeAFAcANQAeARAUAbQATAdADAmQACAigOAkQgZBCg1BKQjZEzngAZQlDAVlvglIgJgCQjEgYjLgfQqNhjw8gYIgFAAIhagBIgEAAIgHAAIgBAAIgCAAIgBAAQgqgBgqABIgBAAIgCAAIgBAAIgKAAIgGAAIhOACIgFAAQwLAXp1BnQkDApj4AaIgJABQiNALiHAAQiWAAiOgNg");
	this.shape_14.setTransform(641.6369,963.5791);
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#05104D").s().p("EgtKAFPQnYgvjijIQiNh3hLh1QgVgggGgfIAAgBQgHgkAPgeQAPgcAegRQAagNAcgFIBYgJQDnAcG8CNQDpBYF9AgQM5AKTXAOIDpABIABAAIAvAAIACAAIAzABIACAAIABAAIA0AAIABAAIA2ACQVKAYNdgZQCHgNBzgZQLdisEthiIAmgCQAeAAAdALQAfAOAVAbQAWAcADAmQACAjgOAkQgcBDg0BKQjfE5naAkQlEAdl0gmIgKgBQjFgbjMgfQqshqwrgYIgFAAIhbgCIgEAAIgHAAIgBAAIgDAAIAAAAIhWAAIgBAAIgCAAIAAAAIgLAAIgGAAIhOACIgGAAQv/AXqUBsQkEAqj7AdIgKABQiJALiCAAQidAAiUgQg");
	this.shape_15.setTransform(642.2211,968.0808);
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#05104D").s().p("EgtsAFTQnRg2jrjWQiKh3hOh7QgVgggEghIAAAAQgFglASgcQASgcAfgOQAcgKAbABQAlADAwACQDpBGGyCKQDyBZF7AWQNegVTCAFIDsABIABAAQAYgBAYAAIACAAIAzABIACAAIABAAIA1AAIABAAIA3ACQU2AZOOAMQCJgKB2gWQLUiaE1idIAlgIQAdgEAeAIQAhALAXAaQAXAbAEAnQAEAjgQAkQgeBEg0BJQjmFBnTAwQlFAol6gmIgKgCQjIgdjNggQrOhywZgZIgFAAIhcgCIgEAAIgHAAIgBAAIgDAAIAAAAIhXAAIgBAAIgCAAIAAAAIgLAAIgGAAIhPACIgGAAQvxAXq4ByQkHArj+AgIgKACQiEALh+AAQilAAibgTg");
	this.shape_16.setTransform(642.8692,972.7982);
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#05104D").s().p("Egu3AFlQnDhCj/j4QiDh4hViIQgVghABgiIAAgBQAAgmAYgbQAYgZAigGQAggDAZANQAjATArASQDuCjGdCEQEDBaF5ACQOwhcSUgNIDygDIABAAQAZgBAZAAIACAAIA1ABIAAAAIACAAIABAAIA2AAIACAAQAcAAAbACQULAaP7BfQCPgBB9gRQK/huFIkkIAjgVQAagPAiACQAjADAbAZQAcAZAGAoQAGAlgSAkQgkBGgzBHQj4FRnBBPQlIA+mJgoIgJgBQjOgjjRgiQsaiEvwgbIgFAAIhegCIgFAAIgHAAIgBAAIgCAAIhZAAIgBAAIgCAAIgBAAIgLAAIgGAAIhSACIgFAAQvTAWsJCAIoSBWIgKABQiAAMh5AAQiyAAijgag");
	this.shape_17.setTransform(644.2727,982.401);
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#05104D").s().p("EgvZAFvQm7hJkJkFQiAh5hYiNQgVgiADgkIAAgBQACgmAbgZQAbgZAkgCQAhAAAZASQAiAbApAYQDvDMGUCBQEMBcF3gIQPUh8SAgUID1gEIABAAQAZgCAZAAIACAAIA2ABIAAAAIACAAIABAAIA2AAIACAAQAdAAAbACQT4AbQsCEQCQADCBgPQK2hdFQleIAigbQAZgTAjgBQAlAAAdAYQAdAZAHAnQAHAmgTAkQgmBHgzBGQj/FZm6BbQlJBJmPgpIgKgBQjQgljSgjQs8iMvfgbIgEAAIhggDIgFAAIgHAAIgBAAIgCAAQgugBgsABIgBAAIgCAAIgBAAIgLAAIgFAAIhTABIgGAAQvFAXstCGQkOAskKAuIgJABQh+AMh3AAQi4AAiogcg");
	this.shape_18.setTransform(644.8505,986.5382);
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#05104D").s().p("Egv1AF3Qm2hNkQkTQh9h5hbiSQgVgiAFgkIAAgCQAEgnAdgYQAdgYAlABQAjADAYAWQAhAiAnAeQDyDwGMB+QESBdF2gQQPziXRvgbID3gGIABAAQAZgCAaAAIACAAIA2ABIABAAIACAAIABAAIA3AAIABAAQAdAAAcACQToAcRUCkQCTAGCDgMQKuhNFYmSIAhggQAYgYAlgCQAlgDAfAYQAfAXAHAoQAIAmgUAkQgoBIgzBFQkFFgmzBmQlKBSmVgqIgKgBQjSgnjTgkQtaiSvPgcIgEAAIhhgDIgFAAIgHAAIgBAAIgCAAIhbgBIgBAAIgCAAIAAAAIgMAAIgGAAIhTACIgGAAQu6AWtLCMQkQAtkNAwIgKACQh9AMh1AAQi9AAiqgfg");
	this.shape_19.setTransform(645.3395,990.0884);
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#05104D").s().p("EgwNAF+QmxhRkXkdQh7h6hdiWQgVgiAGgmIAAgBQAGgoAfgXQAfgXAmAEQAlAEAXAaQAgAnAmAkQDzEOGFB8QEYBeF1gXQQNiuRhgiQB9gEB8gCIABAAQAZgCAbAAIACAAIA2ABIACAAIABAAIA4gBIABAAQAdAAAcADQTaAcR4C/QCVAJCFgKQKohAFem9QAQgSAPgSQAYgbAmgFQAmgFAgAXQAgAXAJAoQAIAngVAjQgqBJgzBFQkKFlmuBwQlKBZmagqIgKgCQjUgpjUgkQtziYvBgdIgFAAIhhgCIgFAAIgHAAIgBAAIgCAAIhcgCIgBAAIgCAAIAAAAIgMAAIgGAAIhUACIgGAAQuvAXtmCQQkSAtkPA0IgKABQh8AMh1AAQjAAAisghg");
	this.shape_20.setTransform(645.7706,993.0812);
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#05104D").s().p("EgwhAGEQmshVkdkmQh5h6hfiZQgVgjAHgmIAAgBQAHgoAhgWQAggXAnAGQAmAGAXAdQAgAsAkAnQD0EnGAB7QEcBeF0gcQQkjCRUgmQB+gEB9gDIABAAQAagCAaAAIACAAIA3ABIAAAAIACAAIABAAIA4gBIACAAQAdAAAcADQTOAcSVDWQCWALCIgJQKhg1FkngIAfgoQAXgeAmgHQAngGAhAWQAiAXAJAoQAIAngVAkQgrBJgzBEQkPFqmpB4QlLBgmegsIgKgBQjVgqjVglQuHidu3gdIgFAAIhhgDIgFAAIgHAAIgBAAIgCAAIhdgBIgBAAIgCAAIAAAAIgMAAIgGAAIhVACIgGAAQunAWt7CUQkTAtkSA2IgKABQh7ANh0AAQjDAAiugjg");
	this.shape_21.setTransform(646.1005,995.5041);
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#05104D").s().p("EgwvAGJQmqhYkhksQh4h7hgibQgVgjAIgmIAAgCQAIgoAigWQAigXAnAIQAnAIAWAgQAgAuAkArQD1E5F7B7QEgBeF0ggQQ0jQRKgqQB/gFB+gDIABAAQAagDAaAAIACAAIA3ABIABAAIACAAIABAAIA4gBIACAAQAdAAAcADQTGAdSrDnQCXANCJgIQKdgsFon8IAegrQAWggAogIQAngIAiAXQAiAWAKAoQAJAogWAjQgsBKgzBEQkSFtmmB+QlMBkmggrIgKgCQjWgrjXgmQuWiguugeIgFAAIhigCIgFAAIgHAAIgBAAIgCAAIhegCIgBAAIgBAAIgBAAIgLAAIgGAAIhWACIgGAAQuhAWuMCXQkTAukUA3IgKACQh7AMhzAAQjFAAivgkg");
	this.shape_22.setTransform(646.3474,997.3983);
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#05104D").s().p("Egw7AGMQmnhakkkxQh3h7hgidQgWgjAJgnIAAgBQAJgpAjgVQAigXAoAJQAoAJAVAiQAgAxAjAtQD2FGF4B7QEjBeFygjQRBjbREgtQB/gFB+gDIABAAQAagDAbAAIACAAIA3ABIABAAIACAAIABAAIA4gBIABAAQAeAAAcADQS/AdS8D0QCXAOCKgHQKbgmFqoQIAegsQAWgiAogJQAogJAjAWQAiAWAKAoQAJAogWAkQgtBKgzBDQkUFwmkCCQlMBomjgsIgKgBQjWgtjXgmQuiiiuogeIgFAAIhjgDIgFAAIgHAAIgBAAIgCAAIhegCIgBAAIgBAAIAAAAIgMAAIgGAAIhVACIgGAAQudAWuYCZQkUAukVA5IgKACQh6AMh0AAQjGAAixglg");
	this.shape_23.setTransform(646.5355,998.7671);
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#05104D").s().p("EAncAGnIgKgBQjXgtjXgmQupilukgeIgFAAIhjgCIgFAAIgHAAIgBAAIgCAAIhegCIgBAAIgBAAIgBAAIgLAAIgGAAIhWACIgGAAQuaAWufCaQkVAukVA6IgKABQlPAjkXg8QmmhbkmkzQh2h8hhieQgWgjAKgnIAAgCQAJgoAjgWQAjgWAoAKQAoAJAWAjQAfAyAjAvQD2FPF2B5QElBfFyglQRIjhRAguQB/gGB/gDIABAAQAZgDAbAAIACAAIA5ABIAAAAIABAAIABAAIA5gBIABAAQAeAAAcADQS8AdTFD7QCYAPCKgHQKZgiFsocQAPgWAPgXQAVgjApgJQAngKAkAWQAjAWAKAoQAJAogWAkQguBKgyBDQkWFymiCEQjrBLkXAAQh0AAh7gNg");
	this.shape_24.setTransform(646.6477,999.5771);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape}]},1).wait(1));
	// Layer_3
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#05104D").ss(20,1,1).p("AaNM2QAHABAHACIMfCRIG0AoQAOAAAOABQAZABAZABIFXgzQCDgpCAhJQD5iQDskLQD0kTCFkBQADgGADgFQA2hbA5inIARh2IAMh5IgPhBQgDgLgDgLQhDjIiphQQiphOkQBDQghAIgfAMQjZBkiCClQgBACgBACQgCADgDAEQgCADgCAEQkDE0pagTQ0WkQ0OgOQgUAAgSABIgBAAQgFAAgFAAQgOgBgOAAQ0OAO0WEQQpaASkDkzQiiitjBhuQgggLgigJQkRhDipBOQioBPhDDJQgDAIgDAJIgMAvIAPDvQAOAmAVAmIAAAAQA5BpALAWIBDBrQgCgBgCgBQAXAtAwBAIBhCaQBbB8CmC8QDCDdDLCCQE8C2FRgSQATgBAUgBIJbhAIJwh5QAGgBAFgBQAFgCAGgBIORiDQIPgpACAAQAOgCARgBQAIgBAJAAIBLgEQASAAAUgBICKAAQANABAMAAQBUADAvAFIgDgHQBrACCCAEQEPAIEwAsIJrB3QAKACALADg");
	this.shape_25.setTransform(645.0875,997.0396);
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1294E4").s().p("EAuKAPzIgcgBIm0goIsfiRIgOgDIgVgFIprh3QkwgskPgIIjtgGIADAHQgvgFhUgDIgZgBIiKAAIgmABIhLAEIgRABIgfADIoRApIuRCDIgLADIgLACIpwB5IpbBAIgnACQlRASk8i2QjLiCjCjdQimi8hbh8IhhiaQgwhAgXgtIAEACIhDhrQgLgWg5hpIAAAAQgVgmgOgmIgPjvIAMgvIAGgRQBDjJCohPQCphOERBDQAiAJAgALQDBBuCiCtQEDEzJagSQUWkQUOgOIAcABIAKAAIABAAIAmgBQUOAOUWEQQJaATEDk0IAEgHIAFgHIACgEQCCilDZhkQAfgMAhgIQEQhDCpBOQCpBQBDDIIAGAWIAPBBIgMB5IgRB2Qg5Cng2BbIgGALQiFEBj0ETQjsELj5CQQiABJiDApIlXAzIgygCg");
	this.shape_26.setTransform(645.0875,997.0396);
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#05104D").ss(20,1,1).p("EhH5gJfQAFgXAGgYQBEjZCkhRQClhTENA8QAiAIAgALQAhARAgATQCbBeCHCJQCjC1EhBBQC0AoDlgGQHthiHqg9QKihUKdgSQCFgECFgBQAOAAANABQALAAABAAQARgBAVAAQHtAFHwAnQLYA8LPCHQBNAOBNAPQJVAQEJksQACgDADgDQACgEACgDQABgCACgCQBChQBWhBQBYhBBsgwQAfgLAhgIQEPhACpBOQCGBABHCKQATAjAOAoQADAMAEALQAHAgAIAgQgFA8gFA9QgHA6gIA7QgYBIgYA7QgeBLgfA0QgCAGgDAGQiCECjxESQjpEMj5CQQg9Akg9AbQhEAfhGAWQiqAairAaQgZAAgZgBQgOgBgOAAQjagSjZgUQjFgijGglQjKgkjJglQgHgCgHgBQgKgDgLgCQk0g7k1g8Qi7gbivgPQhtgIhngEQiBgEhrgDQABAEABAEQgvgGhUgCQgMgBgMAAQhGAAhEAAQgUAAgSABQglABgmACQgJAAgHAAQgSACgOABQgFAAkwAXQhfAIh7AJQnIBBnIBDQgFABgFABQgGACgFABQiRAciRAdQimAhinAgQktAhktAgQgTABgUABQjrANjihTQhggkhfg1QjNh/jCjaQimi5hdh7QgxhNgxhNQgtg8gYgrQgBgCgCgDQACABACABQgig2ghg1QgMgXg4hnQgVgmgNgmQgJh3gIh3g");
	this.shape_27.setTransform(644.85,995.6772);
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1294E4").s().p("Eg1IAOvQhggkhfg1QjNh/jDjaQili5heh7IhiiaQgsg8gYgrIgDgFIAEACIhEhrIhDh+QgVgmgNgmIgSjuIAAgBIAMgvQBEjZCkhRQCkhTENA8QAiAIAhALQAgARAhATQCbBeCHCJQCjC1EgBBQC1AoDlgGQHshiHrg9QKhhUKegSQCFgECFgBIAbABIALAAIAmgBQHuAFHwAnQLYA8LOCHICbAdQJVAQEJksIAFgGIAEgHIACgEQBChQBXhBQBXhBBtgwQAfgLAggIQEPhACqBOQCGBABHCKQATAjANAoIAHAXIAQBAIgKB5IgQB1QgXBIgYA7QgfBLgeA0IgFAMQiCECjxESQjpEMj5CQQg9Akg+AbQhEAfhFAWIlVA0IgygBIgdgBQjZgSjZgUQjFgijGglImThJIgOgDIgVgFIpph3Qi8gbiugPQhtgIhogEIjrgHIACAIQgwgGhTgCIgYgBIiLAAIglABIhLADIgRAAIggADIk1AXIjZARQnIBBnIBDIgLACIgKADIkjA5IlMBBIpaBBIgnACQgfACgeAAQjMAAjEhIg");
	this.shape_28.setTransform(644.85,995.6772);
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#05104D").ss(20,1,1).p("EhHZgIlQAFgXAEgYQA6jYCWhZQCYheECAnQAhAEAfAIQAhANAgAPQCbBKCJB3QCpCdEeA9QC2AnDhgCQHqhSHogxQKig/KUgLQCEgBCEgBQAOAAAOAAQALABAAAAQATgBAUAAQHoAFHwAbQLkAxK4BuQBOAMBMANQJFAGEbkUQADgDADgDQACgEADgCQABgCACgCQBEhKBYg7QBag8BsgrQAfgJAggHQEJg4CtBQQCEA/BLCFQAUAiAPAnQAFALADALQAJAfAIAgQAAA7gDA8QgFA5gHA7QgUBHgWA8QgcBLgbA1QgDAFgCAGQh6EJjnEQQjhELj7CTQg8Ajg+AdQhDAfhFAWQioAfipAcQgZAAgYgBQgPAAgOAAQjYgLjYgSQjFggjFgkQjIgljIglQgHgCgHgCQgLgCgKgDQkyg7k0g7Qi5gdiugRQhrgJhogEQh/gGhrgDQAAAEABADQgwgGhSgCQgMgBgMAAQhFgBhEAAQgUAAgSAAQglACglABQgJAAgIABQgRABgPABQgSAAkfAVQhfAGh5AJQnGA9nEBHQgFABgGABQgFACgFABQiRAdiQAfQilAiilAhQkrAlkrAfQgTABgUABQjqANjhhMQhhgghfgyQjRh2jFjQQimivhjh9QgyhKgyhMQgtg7gZgqQgCgDgBgCQABAAABABQgig1ghg1QgOgag2hjQgUglgOglQgNh2gKh3g");
	this.shape_29.setTransform(644.1,991.6031);
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1294E4").s().p("Eg0PAO8QhhgghfgyQjRh2jFjQQimivhih9IhliWQgtg7gZgqIgDgFIADABIhEhqIhDh9QgVglgOglQgMh2gLh3IAJgvQA6jYCXhZQCYheEBAnQAhAEAfAIQAhANAgAPQCbBKCKB3QCoCdEeA9QC2AnDhgCQHqhSHogxQKig/KUgLIEJgCIAbAAIALABIAogBQHnAFHwAbQLkAxK5BuICZAZQJFAGEbkUIAFgGIAGgGIACgEQBFhKBYg7QBag8BrgrQAggJAggHQEKg4CsBQQCEA/BLCFQAUAiAPAnIAIAWIASA/IgEB3IgMB0QgUBHgWA8QgcBLgcA1IgEALQh6EJjoEQQjhELj6CTQg9Ajg9AdQhDAfhFAWQioAfipAcQgZAAgZgBIgcAAQjYgLjYgSQjFggjFgkImQhKIgOgEIgVgFIplh2Qi6gdiugRQhsgJhngEQh/gGhrgDIABAHQgxgGhRgCIgYgBIiJgBIglAAIhLADIgQABIghACQgSAAkfAVIjYAPQnFA9nFBHIgLACIgKADIkhA8QikAiimAhQkqAlksAfIgmACQgkACgjAAQjGAAi/hBg");
	this.shape_30.setTransform(644.1,991.6031);
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#05104D").ss(20,1,1).p("EhGlgHEQADgXADgXQAojWCAhlQCCh0DwAEQAeAAAfACQAfAHAgAIQCaAqCPBYQCzBzEaA5QC3AlDaADQHog3HigbQKigdKFABQCDABCEAAQAOAAANABQALAAABAAQASAAAVAAQHeAFHwAHQL7AgKRBFQBMAHBNAIQIrgJE5jtQADgCADgDQACgDADgCQACgCACgBQBKg/BagzQBcgzBsgjQAegHAhgFQEAgqCxBTQCCA+BSB9QAWAhARAkQAFAKAEALQALAeAKAeQAGA5ABA7QgBA4gDA7QgPBGgTA9QgYBKgYA3QgCAGgCAGQhrETjYELQjUEJj9CZQg8Akg8AdQhDAghDAXQilAminAfQgYABgYABQgOAAgOABQjVgBjXgPQjDgajEgmQjGgljGgmQgHgCgHgBQgKgDgKgCQkwg8kwg8Qi2geitgUQhrgLhngGQh7gGhsgEQgBACABADQgzgGhOgDQgLgBgNAAQhEgBhEgBQgUAAgQAAQglABglABQgJAAgIAAQgRABgOABQgngBkEARQhhAGh0AIQnDA2m/BOQgFABgFABQgFACgFABQiQAfiOAhQiiAlijAiQkoAqkoAeQgUABgTABQjoAPjhhAQhhgbhfgsQjZhojJi/Qinifhsh+Qg1hIg0hJQgsg4gcgsQgBgDgCgCQABAAABAAQgjgzghgzQgSgfgyhbQgUglgOglQgThzgOh1g");
	this.shape_31.setTransform(643.125,984.7673);
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1294E4").s().p("EgyzAPUQhhgbhfgsQjZhojJi/Qinifhsh+Qg1hIg0hJQgsg4gcgsIgDgFIACAAQgjgzghgzQgSgfgyhbQgUglgOglQgThzgOh1IAAgBIAGguQAojWCAhlQCCh0DwAEQAeAAAfACQAfAHAgAIQCaAqCPBYQCzBzEaA5QC3AlDaADQHog3HigbQKigdKFABIEHABIAbABIAMAAIAnAAIPOAMQL7AgKRBFICZAPQIrgJE5jtIAGgFIAFgFIAEgDQBKg/BagzQBcgzBsgjQAegHAhgFQEAgqCxBTQCCA+BSB9QAWAhARAkIAJAVIAVA8QAGA5ABA7QgBA4gDA7QgPBGgTA9QgYBKgYA3IgEAMQhrETjYELQjUEJj9CZQg8Akg8AdQhDAghDAXQilAminAfIgwACIgcABQjVgBjXgPQjDgajEgmImMhLIgOgDIgUgFIpgh4Qi2geitgUQhrgLhngGQh7gGhsgEIAAAFQgzgGhOgDIgYgBIiIgCIgkAAIhKACIgRAAIgfACQgngBkEARQhhAGh0AIQnDA2m/BOIgKACIgKADQiQAfiOAhQiiAlijAiQkoAqkoAeIgnACQgrADgqAAQi8AAi4g0g");
	this.shape_32.setTransform(643.125,984.7673);
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#05104D").ss(20,1,1).p("EhFigE7QAAgWABgXQAOjTBhh3QBliRDVgsQAcgIAdgFQAfgCAfgBQCZgFCVAuQDDA5ESAzQC6AhDRALQHjgRHbADQKiASJxATQCBAFCDABQAOAAANABQALAAABAAQASAAAUAAQHSAGHxgWQMaAJJbAKQBLABBLACQIHgeFki3QADgCAEgCQACgCAEgCQABgBADgBQBRgvBcgnQBignBqgWQAfgFAhgDQDzgWC3BXQB/A9BbByQAZAdAUAiQAFAJAGAKQAOAcAMAdQAOA2AHA5QAGA3AAA6QgIBEgOBAQgRBJgUA6QgBAFgCAGQhXEijDEFQjBEHkAChQg6Akg9AeQhAAghCAaQigAwijAiQgXADgYACQgOACgNABQjSAOjVgLQjAgTjDgmQjEgnjDgmQgHgCgGgBQgKgDgKgCQksg9krg9QizgfirgaQhpgMhlgIQh4gIhtgGQgBABgBACQg1gGhJgDQgLgBgMAAQhEgDhDgBQgTgBgRAAQglAAgjAAQgJAAgIAAQgQABgPAAQhEgBjfAMQhgAEhwAHQm+Atm4BYQgFABgFABQgFABgFACQiNAgiMAlQifApigAjQkjAykkAdQgTABgTABQjlAQjggvQhjgUhfgiQjjhUjPioQioiKh5h/Qg4hDg3hGQgrg0ggguQgCgCgBgCIAAAAQgkgyghgzQgYgmgshQQgTgjgPglQgbhvgTh0g");
	this.shape_33.setTransform(642.35,975.0717);
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1294E4").s().p("Egw3AP2QhjgUhfgiQjjhUjPioQioiKh5h/Qg4hDg2hGQgsg0gfguIgEgEIAAAAQgjgygigzQgYgmgshQQgTgjgPglQgbhvgTh0IAAgBIABgtQAOjTBih3QBkiRDWgsQAcgIAdgFQAegCAggBQCYgFCVAuQDDA5ESAzQC6AhDRALQHkgRHbADQKhASJxATQCBAFCDABIAbABIAMAAIAnAAQHRAGHxgWQMaAJJbAKICXADQIHgeFji3IAGgEIAGgEIAFgCQBRgvBdgnQBggnBrgWQAfgFAhgDQDzgWC3BXQB/A9BbByQAZAdAUAiIALATQAOAcAMAdQAOA2AHA5QAFA3AAA6QgHBEgOBAQgRBJgUA6IgDALQhXEijDEFQjAEHkBChQg6Akg9AeQhAAghCAaQihAwiiAiIgwAFIgbADQjRAOjVgLQjAgTjEgmImGhNIgNgDIgUgFIpXh6QizgfirgaQhogMhmgIQh4gIhsgGIgDADQg1gGhJgDIgXgBIiHgEIgkgBIhIAAIgQAAIggABQhEgBjfAMQhgAEhwAHQm+Atm4BYIgKACIgKADQiNAgiMAlQifApigAjQkjAykkAdIgmACQg5AEg5AAQirAAiogjg");
	this.shape_34.setTransform(642.35,975.0717);
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#05104D").ss(20,1,1).p("EhEegCwQgCgWgCgWQgLjRBCiIQBIiuC6hdQAagOAbgNQAdgMAggKQCXgyCbACQDTAAELAsQC8AfDIARQHfAVHTAiQKiBAJdAmQB/AICCADQAOAAAOABQAKAAABAAQATAAATAAQHGAGHwgzQM5gOImgvQBKgGBKgFQHjgzGNiAQAEgBAEgBQADgCAEgBQACgBADgBQBYggBfgaQBmgbBpgKQAggCAfAAQDngDC9BbQB8A8BlBmQAcAbAXAeQAGAJAGAJQARAaAPAbQAWAzANA5QAMA1ADA6QAABBgJBDQgMBHgOA+QgBAFgBAFQhCEwiuEAQiuEFkECoQg4Akg8AgQhAAhhAAbQicA7ieAmQgYAEgXAEQgNACgOACQjOAcjSgGQi+gMjCgnQjAgnjAgoQgHgBgGgCQgKgCgKgCQkog+kng9QiugiiqgfQhngNhlgKQhzgLhtgIQgCABgDABQg4gGhDgEQgLAAgMgBQhCgDhDgDQgSgBgRAAQgkgBgkAAQgJAAgIAAQgQAAgOAAQhhgDi5AIQhiAChqAGQm4AjmxBiQgFABgFABQgFACgFABQiKAiiKAoQicAuieAjQkeA7kgAbQgTACgTABQjhARjggeQhjgNhggZQjthAjViRQioh0iGiBQg8g9g5hEQgrgwgkguQgCgCgCgCQAAgBAAAAQglgwgigzQgdgsgmhHQgTgigPgkQgkhrgYhyg");
	this.shape_35.setTransform(641.4647,965.1662);
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1294E4").s().p("Egu7AQaQhjgNhggZQjthAjViRQioh0iGiBQg8g9g5hEQgrgwgkguIgEgEIAAgBQglgwgigzQgdgsgmhHQgTgigPgkQgkhrgYhyIAAgBIgEgsQgLjRBCiIQBIiuC6hdQAagOAbgNQAdgMAggKQCXgyCbACQDTAAELAsQC8AfDIARQHfAVHTAiQKiBAJdAmQB/AICCADIAcABIALAAIAmAAQHGAGHwgzQM5gOImgvICUgLQHjgzGNiAIAIgCIAHgDIAFgCQBYggBfgaQBmgbBpgKQAggCAfAAQDngDC9BbQB8A8BlBmQAcAbAXAeIAMASQARAaAPAbQAWAzANA5QAMA1ADA6QAABBgJBDQgMBHgOA+IgCAKQhCEwiuEAQiuEFkECoQg4Akg8AgQhAAhhAAbQicA7ieAmIgvAIIgbAEQjOAcjSgGQi+gMjCgnImAhPIgNgDIgUgEIpPh7QiugiiqgfQhngNhlgKQhzgLhtgIIgFACQg4gGhDgEIgXgBIiFgGIgjgBIhIgBIgRAAIgeAAQhhgDi5AIQhiAChqAGQm4AjmxBiIgKACIgKADQiKAiiKAoQicAuieAjQkeA7kgAbIgmADQhQAGhRAAQiQAAiQgTg");
	this.shape_36.setTransform(641.4647,965.1662);
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#05104D").ss(20,1,1).p("EhDqgBKQgEgWgDgWQgdjPAriUQAzjDCniAQAYgTAagSQAdgTAfgRQCWhSCggdQDegqEHAoQC9AdDBAXQHdAvHNA4QKiBiJPAyQB9ALCCAEQAOAAANABQALAAAAAAQATAAAUAAQG9AHHwhHQNPggH/hYQBJgLBKgJQHJhCGshZQADgBAEgBQAEgBAEgBQADAAACgBQBegVBhgSQBpgSBpgCQAfAAAgACQDdAMDCBeQB5A7BsBdQAeAaAZAcQAHAIAHAIQATAZAQAaQAcAxARA3QAQA0AHA6QAFBAgHBFQgHBGgKBAQgBAFgBAFQgzE6ieD8QihEEkGCsQg4Alg8AhQg+Ahg/AdQiZBCibAoQgXAGgXAFQgNACgNADQjMAnjRgEQi8gGjBgoQi+goi+goQgHgBgGgCQgKgCgJgCQklg+klg+QirgkiogiQhmgOhkgLQhwgNhugJQgDAAgDAAQg6gFg/gEQgLgBgMgBQhCgEhCgDQgRgBgSgBQgjgBgkgBQgIAAgJAAQgPgBgPAAQh2gDieAEQhiABhmAGQm1AcmsBpQgFABgEABQgFABgFACQiJAjiIArQiaAwibAlQkbBAkdAaQgTACgTABQjfASjfgSQhkgHhggUQj1gxjZiAQiohkiQiDQg+g6g7hBQgrgugmguQgCgDgCgCQgBAAAAgBQgmgvgigxQghgygig/QgTgigPgjQgqhpgchwg");
	this.shape_37.setTransform(640.4787,957.8875);
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1294E4").s().p("EgteAQ2QhkgHhggUQj1gxjZiAQiohkiQiDQg+g6g7hBQgrgugmguIgEgFIgBgBQgmgvgigxQghgygig/QgTgigPgjQgqhpgchwIAAgBIgHgsQgdjPAriUQAzjDCniAQAYgTAagSQAdgTAfgRQCWhSCggdQDegqEHAoQC9AdDBAXQHdAvHNA4QKiBiJPAyQB9ALCCAEIAbABIALAAIAnAAQG9AHHwhHQNPggH/hYICTgUQHJhCGshZIAHgCIAIgCIAFgBQBegVBhgSQBpgSBpgCQAfAAAgACQDdAMDCBeQB5A7BsBdQAeAaAZAcIAOAQQATAZAQAaQAcAxARA3QAQA0AHA6QAFBAgHBFQgHBGgKBAIgCAKQgzE6ieD8QihEEkGCsQg4Alg8AhQg+Ahg/AdQiZBCibAoIguALIgaAFQjMAnjRgEQi8gGjBgoIl8hQIgNgDIgTgEIpKh8IlThGQhmgOhkgLQhwgNhugJIgGAAQg6gFg/gEIgXgCIiEgHIgjgCIhHgCIgRAAIgegBQh2gDieAEQhiABhmAGQm1AcmsBpIgJACIgKADQiJAjiIArQiaAwibAlQkbBAkdAaIgmADQhvAJhwAAQhwAAhvgJg");
	this.shape_38.setTransform(640.4787,957.8875);
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#05104D").ss(20,1,1).p("EhDJgANQgFgWgEgWQgojNAeicQAmjPCciVQAXgWAZgVQAcgXAfgVQCWhmCjgvQDkhDEEAlQC+AcC9AaQHbBAHLBEQKhB3JGA5QB9ANCBAEQAOAAANABQALAAAAAAQATAAAUABQG4AGHwhTQNcgqHohxQBJgNBJgMQG5hMG+hBQAEgBAEAAQAEgBAEAAQADgBADAAQBggPBjgMQBrgOBoAEQAgABAfADQDYAUDEBgQB5A7BwBYQAfAYAaAbQAHAIAHAIQAVAYARAZQAgAwATA3QATAzAIA5QAIBAgEBGQgFBFgIBBQgBAFAAAFQgrFBiVD5QiZEDkHCwQg3Akg8AiQg+Aig+AdQiXBGiaAqQgWAHgXAFQgNADgNADQjKAtjQgCQi8gDi/goQi9goi9gpQgHgBgGgCQgKgCgJgCQkjg+kjg/QipgkiogkQhkgPhlgMQhugOhugJQgDgBgEAAQg7gGg9gEQgLgBgMgBQhBgEhCgEQgRgBgRgBQgjgBgkgBQgIAAgJgBQgPAAgPgBQiDgDiNACQhjAAhjAFQmzAZmpBsQgFABgEABQgFACgFABQiIAkiHAtQiZAyiaAlQkZBDkbAaQgTACgSABQjeATjfgLQhlgEhggQQj5gpjch2QiohaiViEQhAg4g8g/QgrgsgngwQgCgCgCgCQgBgBgBgBQgngtghgyQgkg0ggg7QgSghgQgjQgthngehwg");
	this.shape_39.setTransform(639.7238,953.4944);
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1294E4").s().p("EgslARHQhlgEhggQQj5gpjch2QiohaiViEQhAg4g8g/QgrgsgngwIgEgEIgCgCQgngtghgyQgkg0ggg7QgSghgQgjQgthngehwIAAgBIgJgsQgojNAeicQAmjPCciVQAXgWAZgVQAcgXAfgVQCWhmCjgvQDkhDEEAlIF7A2QHbBAHLBEQKhB3JGA5QB9ANCBAEIAbABIALAAIAnABQG4AGHwhTQNcgqHohxICSgZQG5hMG+hBIAIgBIAIgBIAGgBQBggPBjgMQBrgOBoAEQAgABAfADQDYAUDEBgQB5A7BwBYQAfAYAaAbIAOAQQAVAYARAZQAgAwATA3QATAzAIA5QAIBAgEBGQgFBFgIBBIgBAKQgrFBiVD5QiZEDkHCwQg3Akg8AiQg+Aig+AdQiXBGiaAqIgtAMIgaAGQjKAtjQgCQi8gDi/goIl6hRIgNgDIgTgEIpGh9IlRhIQhkgPhlgMQhugOhugJIgHgBIh4gKIgXgCIiDgIIgigCIhHgCIgRgBIgegBQiDgDiNACQhjAAhjAFQmzAZmpBsIgJACIgKADQiIAkiHAtQiZAyiaAlQkZBDkbAaIglADQiOAMiOAAQhQAAhRgEg");
	this.shape_40.setTransform(639.7238,953.4944);
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#05104D").ss(20,1,1).p("APZL5QKVCSKZCNQKfCPJnlXQKtl+AqtHQAPkpjViiQmgk8n4A1QqBBJpjB0QngB6thAtQqtB5pDg8QpDg7qih+Qp/hmqfheQm6g+loEGQmcEsCTI1QBKEaC3DWQHrI/LAAYQKtAYKZjcQKTjcKugFQI0gEIvBVg");
	this.shape_41.setTransform(639.3898,952.0062);
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#1294E4").s().p("EgsRARNQrAgYnro/Qi3jWhKkaQiTo1GcksQFokGG6A+QKfBeJ/BmQKiB+JDA7QJDA8Kth5QNhgtHgh6QJjh0KBhJQH4g1GgE8QDVCigPEpQgqNHqtF+QpnFXqfiPQqZiNqViSQovhVo0AEQquAFqTDcQpXDGppAAQhDAAhDgCg");
	this.shape_42.setTransform(639.3898,952.0062);
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#05104D").ss(20,1,1).p("EhC/AACQgGgVgFgVQgrjNAbieQAjjTCZibQAWgXAagVQAcgYAfgWQCVhsCjgzQDnhKEDAkQC+AcC8AbQHaBEHKBIQKiB8JDA7QB9ANCBAEQAOABANAAQALAAAAAAQATABAUAAQG2AHHwhXQNggsHih4QBIgOBJgNQG2hOHDg7QAEAAAEgBQAEAAAEgBQADAAADgBQBhgMBigLQBsgMBoAFQAgABAfAEQDXAWDEBgQB5A7BxBWQAfAYAbAbQAHAIAHAIQAVAXARAaQAhAvAVA2QATAzAIA6QAJA/gEBGQgDBFgIBCQAAAFgBAFQgpFCiSD5QiXECkICxQg3Alg7AhQg+Aig+AeQiWBHiZArQgXAGgWAGQgNADgNADQjLAvjPgCQi7gBjAgpQi8goi9gpQgGgBgHgCQgJgCgKgCQkjg+kig/QioglioglQhkgPhkgMQhvgNhtgKQgEgBgDAAQg8gGg9gEQgLgBgLgBQhCgFhBgDQgRgBgRgBQgjgCgkgBQgIAAgJgBQgPAAgPgBQiGgDiJABQhjABhiAFQmzAXmoBuQgFABgEABQgFABgFACQiIAjiGAtQiZAziaAlQkYBFkbAaQgSABgTACQjdASjggIQhkgEhggPQj6gmjdh0QiohYiXiDQhAg4g9g/QgqgsgogvQgCgCgCgCQgBgBgBgBQgngughgxQglg1gfg5QgSgigQgjQgvhmgdhxg");
	this.shape_43.setTransform(639.4813,952.3103);
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1294E4").s().p("EgsWARMQhkgEhggPQj6gmjdh0QiohYiXiDQhAg4g9g/QgqgsgogvIgEgEIgCgCQgngughgxQglg1gfg5QgSgigQgjQgvhmgdhxIAAgBIgLgqQgrjNAbieQAjjTCZibQAWgXAagVQAcgYAfgWQCVhsCjgzQDnhKEDAkIF6A3QHaBEHKBIQKiB8JDA7QB9ANCBAEIAbABIALAAIAnABQG2AHHwhXQNggsHih4ICRgbQG2hOHDg7IAIgBIAIgBIAGgBQBhgMBigLQBsgMBoAFQAgABAfAEQDXAWDEBgQB5A7BxBWQAfAYAbAbIAOAQQAVAXARAaQAhAvAVA2QATAzAIA6QAJA/gEBGQgDBFgIBCIgBAKQgpFCiSD5QiXECkICxQg3Alg7AhQg+Aig+AeQiWBHiZArIgtAMIgaAGQjLAvjPgCQi7gBjAgpIl5hRIgNgDIgTgEIpFh9IlQhKQhkgPhkgMQhvgNhtgKIgHgBIh5gKIgWgCIiDgIIgigCIhHgDIgRgBIgegBQiGgDiJABQhjABhiAFQmzAXmoBuIgJACIgKADQiIAjiGAtQiZAziaAlQkYBFkbAaIglADQiXANiZAAQhGAAhHgDg");
	this.shape_44.setTransform(639.4813,952.3103);
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#05104D").ss(20,1,1).p("EhDGgAJQgFgWgFgVQgpjOAeicQAljQCbiXQAXgWAZgVQAcgXAfgWQCWhnCjgwQDlhFEDAlQC/AbC9AbQHaBBHKBFQKiB4JFA6QB9ANCCAEQANAAAOABQAKAAABAAQATAAATABQG4AGHwhUQNdgqHmhzQBJgNBJgNQG4hMHAg/QAEgBAEgBQAEAAADgBQADAAADgBQBhgOBigMQBsgNBoAEQAfABAgAEQDYAUDEBgQB4A7BwBXQAgAZAaAbQAHAHAHAIQAVAYARAaQAgAvAUA3QATAzAIA5QAIBAgEBGQgEBFgIBBQgBAFAAAFQgrFCiUD5QiYECkICwQg3Alg8AhQg9Aig+AeQiXBGiaArQgXAGgWAFQgNADgNADQjLAujPgCQi8gCi/gpQi9goi9gpQgGgBgHgCQgJgCgKgCQkjg+kig/QipgkipglQhkgPhkgMQhugNhugKQgEAAgDgBQg8gFg8gFQgLgBgMgBQhBgEhCgDQgRgBgRgBQgjgCgkgBQgIAAgJgBQgPAAgPgBQiDgDiNACQhjAAhjAFQmzAYmpBtQgEABgFABQgFACgFABQiHAkiHAtQiZAyiaAlQkYBEkcAaQgSABgTACQjdASjggKQhkgEhggPQj6gpjch1QiohaiWiDQg/g4g9hAQgqgrgogwQgCgCgCgCQgBgBgBgBQgmgugigxQgkg0gfg7QgTghgPgjQguhngehwg");
	this.shape_45.setTransform(639.6495,953.1784);
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1294E4").s().p("EgshARIQhkgEhggPQj6gpjch1QiohaiWiDQg/g4g9hAQgqgrgogwIgEgEIgCgCQgmgugigxQgkg0gfg7QgTghgPgjQguhngehwIAAgBIgKgrQgpjOAeicQAljQCbiXQAXgWAZgVQAcgXAfgWQCWhnCjgwQDlhFEDAlIF8A2QHaBBHKBFQKiB4JFA6QB9ANCCAEIAbABIALAAIAmABQG4AGHwhUQNdgqHmhzICSgaQG4hMHAg/IAIgCIAHgBIAGgBQBhgOBigMQBsgNBoAEQAfABAgAEQDYAUDEBgQB4A7BwBXQAgAZAaAbIAOAPQAVAYARAaQAgAvAUA3QASAzAJA5QAIBAgEBGQgEBFgIBBIgBAKQgrFCiUD5QiYECkICwQg3Alg8AhQg9Aig+AeQiXBGiaArIgtALIgaAGQjLAujPgCQi8gCi/gpIl6hRIgNgDIgTgEIpFh9IlShJQhkgPhkgMQhugNhugKIgHgBIh4gKIgXgCIiDgHIgigCIhHgDIgRgBIgegBQiDgDiNACQhjAAhjAFQmzAYmpBtIgJACIgKADQiHAkiHAtQiZAyiaAlQkYBEkcAaIglADQiQAMiQAAQhPAAhOgEg");
	this.shape_46.setTransform(639.6495,953.1784);
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#05104D").ss(20,1,1).p("EhDRgAdQgFgWgFgWQgljNAiiaQApjNCfiPQAYgVAZgUQAcgWAfgUQCWhhCigqQDjg9EEAmQC+AcC/AZQHbA8HLBBQKiBxJIA4QB9AMCBAEQAOAAAOABQAKAAABAAQATAAATABQG5AGHwhQQNZgnHuhrQBJgMBJgMQG+hJG5hHQAEgBAEAAQAEgBAEgBQADAAACgBQBggQBigOQBrgOBoACQAfABAgADQDaARDDBgQB5A6BvBaQAeAZAaAbQAHAIAHAIQAUAYARAaQAfAvATA3QASA0AIA5QAHBAgFBGQgFBFgJBBQAAAFgBAFQgtE/iXD6QibEDkHCvQg4Alg7AhQg+Aig/AdQiXBEiaArQgXAGgXAFQgNADgNACQjLAsjQgCQi7gEjAgpQi9gni+gpQgGgBgHgCQgJgCgKgCQkjg+kjg/QiqgkiogkQhlgOhkgMQhvgNhugKQgDAAgDAAQg8gGg9gEQgLgBgMgBQhBgEhCgEQgRgBgRAAQgjgCgkgBQgJAAgIAAQgPgBgPAAQiAgEiRADQhjABhkAFQm0AZmpBsQgFABgFABQgFABgFACQiIAjiHAsQiZAyiaAlQkaBDkcAaQgSABgTACQjdASjggMQhkgGhggQQj4grjch5QiohdiUiDQg/g5g8hAQgqgsgogvQgCgCgCgCQgBgBAAgBQgngughgxQgjg0ghg8QgSghgQgkQgthngchwg");
	this.shape_47.setTransform(639.9171,954.6399);
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1294E4").s().p("Egs0ARDQhkgGhggQQj4grjch5QiohdiUiDQg/g5g8hAQgqgsgogvIgEgEIgBgCQgngughgxQgjg0ghg8QgSghgQgkQgthngchwIAAgBIgKgsQgljNAiiaQApjNCfiPQAYgVAZgUQAcgWAfgUQCWhhCigqQDjg9EEAmQC+AcC/AZQHbA8HLBBQKiBxJIA4QB9AMCBAEIAcABIALAAIAmABQG5AGHwhQQNZgnHuhrICSgYIN3iQIAIgBIAIgCIAFgBQBggQBigOQBrgOBoACQAfABAgADQDaARDDBgQB5A6BvBaQAeAZAaAbIAOAQQAUAYARAaQAfAvATA3QASA0AIA5QAHBAgFBGQgFBFgJBBIgBAKQgtE/iXD6QibEDkHCvQg4Alg7AhQg+Aig/AdQiXBEiaArIguALIgaAFQjLAsjQgCQi7gEjAgpIl7hQIgNgDIgTgEIpGh9IlShIQhlgOhkgMQhvgNhugKIgGAAIh5gKIgXgCIiDgIIgigBIhHgDIgRAAIgegBQiAgEiRADQhjABhkAFQm0AZmpBsIgKACIgKADQiIAjiHAsQiZAyiaAlQkaBDkcAaIglADQiEALiFAAQhaAAhagFg");
	this.shape_48.setTransform(639.9171,954.6399);
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#05104D").ss(20,1,1).p("EhDggA5QgFgWgEgWQggjOAoiXQAvjGCkiGQAYgUAagTQAcgUAfgSQCXhYCgghQDggxEGAnQC9AcDAAYQHcA0HNA7QKiBoJMA0QB9ALCCAEQAOABANAAQALAAAAAAQATABAUAAQG7AGHwhKQNTgjH5hfQBJgLBJgKQHFhFGxhSQAEgBAEgBQADgBAEAAQADgBADgBQBegTBhgQQBqgRBpAAQAfAAAgADQDcANDCBfQB5A7BtBcQAfAZAZAcQAHAIAHAIQATAYARAaQAdAxASA3QAQA0AHA5QAGBAgGBGQgGBFgKBAQAAAFgBAFQgxE9icD7QieEDkHCuQg4Akg7AhQg+Aig/AdQiYBDicApQgWAGgXAFQgNACgNADQjMApjQgEQi8gFjBgoQi9goi+goQgHgBgGgCQgKgCgJgCQklg+kkg/QiqgjipgjQhlgOhkgMQhwgNhugJQgDAAgDAAQg6gFg/gFQgLgBgMgBQhBgEhCgDQgSgBgRgBQgjgBgkAAQgIgBgJAAQgPgBgPAAQh5gDiaADQhiABhlAGQm1AbmrBqQgFABgEABQgFABgFACQiJAjiHArQiaAxibAlQkaBBkdAaQgTACgSABQjfASjfgPQhlgHhfgTQj2gvjbh9QiohhiRiDQg+g5g8hBQgqgtgngvQgCgCgCgCQgBgBgBgBQgmgughgyQgigygig+QgSgigQgjQgrhogbhwg");
	this.shape_49.setTransform(640.2714,956.6586);
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1294E4").s().p("EgtOAQ7QhlgHhfgTQj2gvjbh9QiohhiRiDQg+g5g8hBQgqgtgngvIgEgEIgCgCQgmgughgyQgigygig+QgSgigQgjQgrhogbhwIAAgBIgJgsQggjOAoiXQAvjGCkiGQAYgUAagTQAcgUAfgSQCXhYCgghQDggxEGAnQC9AcDAAYQHcA0HNA7QKiBoJMA0QB9ALCCAEIAbABIALAAIAnABQG7AGHwhKQNTgjH5hfQBJgLBJgKQHFhFGxhSIAIgCIAHgBIAGgCQBegTBhgQQBqgRBpAAQAfAAAgADQDcANDCBfQB5A7BtBcQAfAZAZAcIAOAQQATAYARAaQAdAxASA3QAQA0AHA5QAGBAgGBGQgGBFgKBAIgBAKQgxE9icD7QieEDkHCuQg4Akg7AhQg+Aig/AdQiYBDicApIgtALIgaAFQjMApjQgEQi8gFjBgoIl7hQIgNgDIgTgEIpJh9IlThGQhlgOhkgMQhwgNhugJIgGAAIh5gKIgXgCIiDgHIgjgCIhHgBIgRgBIgegBQh5gDiaADQhiABhlAGQm1AbmrBqIgJACIgKADQiJAjiHArQiaAxibAlQkaBBkdAaIglADQh4AKh4AAQhnAAhngHg");
	this.shape_50.setTransform(640.2714,956.6586);
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#05104D").ss(20,1,1).p("EhDzgBdQgEgXgEgWQgZjPAviRQA3jACrh5QAYgSAbgRQAcgSAggPQCWhNCfgWQDcgjEHApQC9AdDDAWQHdArHPAzQKhBcJRAwQB+AKCCADQAOABANAAQALAAAAAAQATABAUAAQG/AGHwhDQNLgcIGhRQBJgJBKgJQHOg/GmhgQAEgBAEgBQADgBAEgBQADgBADgBQBcgXBhgTQBogUBpgDQAfgBAgACQDgAJDABdQB6A8BrBeQAdAaAZAdQAHAIAGAIQATAZAQAbQAbAxAQA3QAPA1AGA5QAEBBgHBEQgHBGgMBAQAAAFgBAFQg3E5igD8QikEEkGCsQg4Akg7AhQg/Ahg/AdQiZBAidAoQgWAGgXAEQgNACgOADQjMAljRgEQi9gHjAgoQi/goi/goQgGgBgHgCQgJgCgKgCQklg+klg+QisgjipgiQhlgOhlgLQhxgMhtgJQgDABgDAAQg6gGhAgEQgLgBgLgBQhDgEhCgDQgRAAgRgBQgkgBgkgBQgIAAgIAAQgQgBgPAAQhygDijAFQhiABhmAGQm2AemtBnQgFABgFABQgFABgFACQiJAjiIAqQibAwibAkQkcA/kdAbQgTACgTABQjfASjggUQhkgJhfgVQj0g0jYiDQiphniNiCQg+g7g7hBQgqgugmgvQgCgCgCgCQgBgBAAgBQgmgvghgxQghgxgjhAQgSgigQgkQgphpgahxg");
	this.shape_51.setTransform(640.6774,959.2701);
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1294E4").s().p("EgtwAQxQhkgJhfgVQj0g0jYiDQiphniNiCQg+g7g7hBQgqgugmgvIgEgEIgBgCQgmgvghgxQghgxgjhAQgSgigQgkQgphpgahxIAAAAIgIgtQgZjPAviRQA3jACrh5QAYgSAbgRQAcgSAggPQCWhNCfgWQDcgjEHApQC9AdDDAWQHdArHPAzQKhBcJRAwQB+AKCCADIAbABIALAAIAnABQG/AGHwhDQNLgcIGhRICTgSQHOg/GmhgIAIgCIAHgCIAGgCQBcgXBhgTQBogUBpgDQAfgBAgACQDgAJDABdQB6A8BrBeQAdAaAZAdIANAQQATAZAQAbQAbAxAQA3QAPA1AGA5QAEBBgHBEQgHBGgMBAIgBAKQg3E5igD8QikEEkGCsQg4Akg7AhQg/Ahg/AdQiZBAidAoIgtAKIgbAFQjMAljRgEQi9gHjAgoIl+hQIgNgDIgTgEIpKh8IlVhFQhlgOhlgLQhxgMhtgJIgGABQg6gGhAgEIgWgCIiFgHIgigBIhIgCIgQAAIgfgBQhygDijAFQhiABhmAGQm2AemtBnIgKACIgKADQiJAjiIAqQibAwibAkQkcA/kdAbIgmADQhpAIhqAAQh2AAh2gKg");
	this.shape_52.setTransform(640.6774,959.2701);
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#05104D").ss(20,1,1).p("EhEKgCJQgDgXgDgWQgSjQA6iMQA/i2C0hrQAZgQAagOQAegPAfgNQCXg+CdgJQDXgQEJAqQC9AeDFAUQHeAfHRAqQKiBNJYAqQB+AJCCAEQAOAAANAAQALABAAAAQATAAAUAAQHDAGHwg6QNBgVIXg/QBJgHBKgHQHag5GZhxQADgBAEgBQAEgBADgCQADAAADgBQBagcBggXQBngYBpgHQAfgBAgABQDjACC/BdQB7A7BoBjQAcAaAYAeQAGAIAHAJQASAaAPAbQAYAyAPA4QANA0AFA6QABBBgIBEQgKBGgMA/QgBAFgBAFQg9E0inD/QiqEEkECpQg5Alg8AgQg/Ahg/AcQibA9idAnQgYAFgXAEQgNACgNADQjOAgjRgFQi+gKjBgnQi/gojAgnQgGgCgHgBQgKgDgJgCQkng9kmg+QitgjiqggQhmgNhkgLQhzgLhtgIQgDAAgCAAQg5gFhBgEQgMgBgLgBQhDgDhCgDQgSgBgRAAQgkgBgkgBQgIAAgIAAQgQAAgPAAQhpgDiuAGQhiAChpAGQm3AhmvBkQgFABgFABQgFABgFACQiKAiiIAqQicAuicAkQkdA9kfAbQgTABgTACQjgARjggZQhkgLhfgYQjxg6jWiKQiohuiKiCQg9g8g6hCQgqgwglguQgCgCgCgCQAAgBgBgBQglgvgigyQgeguglhEQgTgjgPgjQgmhqgZhyg");
	this.shape_53.setTransform(641.1223,962.424);
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1294E4").s().p("EguYAQlQhkgLhfgYQjxg6jWiKQiohuiKiCQg9g8g6hCQgqgwglguIgEgEIgBgCQglgvgigyQgeguglhEQgTgjgPgjQgmhqgZhyIAAAAIgGgtQgSjQA6iMQA/i2C0hrQAZgQAagOQAegPAfgNQCXg+CdgJQDXgQEJAqQC9AeDFAUQHeAfHRAqQKiBNJYAqQB+AJCCAEIAbAAIALABIAnAAQHDAGHwg6QNBgVIXg/ICTgOQHag5GZhxIAHgCIAHgDIAGgBQBagcBggXQBngYBpgHQAfgBAgABQDjACC/BdQB7A7BoBjQAcAaAYAeIANARQASAaAPAbQAYAyAPA4QANA0AFA6QABBBgIBEQgKBGgMA/IgCAKQg9E0inD/QiqEEkECpQg5Alg8AgQg/Ahg/AcQibA9idAnIgvAJIgaAFQjOAgjRgFQi+gKjBgnIl/hPIgNgDIgTgFIpNh7QitgjiqggQhmgNhkgLQhzgLhtgIIgFAAQg5gFhBgEIgXgCIiFgGIgjgBIhIgCIgQAAIgfAAQhpgDiuAGQhiAChpAGQm3AhmvBkIgKACIgKADQiKAiiIAqQicAuicAkQkdA9kfAbIgmADQhbAHhaAAQiGAAiFgPg");
	this.shape_54.setTransform(641.1223,962.424);
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#05104D").ss(20,1,1).p("EhElgC9QgCgXgBgWQgJjRBFiGQBLirC9hZQAagNAbgMQAdgLAggKQCXgtCbAGQDRAFEMAtQC8AfDIASQHgAQHUAfQKiA8JfAkQB/AICCACQAOABANAAQALAAABAAQASABAUAAQHHAGHwgwQM2gMIrgqQBKgFBKgEQHngxGJiFQAEgCADgBQAEgCADgBQADgBACgBQBYghBfgcQBlgcBqgLQAfgDAgAAQDogEC8BaQB9A8BkBnQAbAcAXAeQAGAJAGAJQARAaAOAcQAVAzANA4QALA2ADA6QgBBBgKBDQgMBHgOA9QgCAGgBAFQhEEvivEAQiwEFkECnQg5Alg8AfQg/AhhAAbQidA6ifAlQgXAFgXADQgOACgNACQjPAbjSgHQi/gMjBgnQjBgnjAgoQgHgBgGgCQgKgCgKgCQkog9kog+QiugiiqgeQhngNhlgKQh0gKhtgIQgCABgCABQg4gGhEgEQgLgBgMAAQhDgDhCgDQgSgBgSAAQgjgBgkAAQgJAAgIAAQgQAAgPAAQhegCi8AHQhiADhqAGQm5AkmyBhQgFABgFABQgFACgFABQiLAiiJAoQidAtieAjQkeA6khAcQgTABgSABQjiARjggfQhjgOhggaQjshCjViTQioh2iEiBQg8g+g5hDQgrgxgjguQgCgDgCgCQAAAAAAgBQglgwgigyQgcgsgnhHQgTgjgPgkQgjhrgYhyg");
	this.shape_55.setTransform(641.5781,966.1373);
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1294E4").s().p("EgvHAQXQhjgOhggaQjshCjViTQioh2iEiBQg8g+g5hDQgrgxgjguIgEgFIAAgBQglgwgigyQgcgsgnhHQgTgjgPgkQgjhrgYhyIAAgBIgDgtQgJjRBFiGQBLirC9hZQAagNAbgMQAdgLAggKQCXgtCbAGQDRAFEMAtQC8AfDIASQHgAQHUAfQKiA8JfAkQB/AICCACIAbABIAMAAIAmABQHHAGHwgwQM2gMIrgqQBKgFBKgEQHngxGJiFIAHgDIAHgDIAFgCQBYghBfgcQBlgcBqgLQAfgDAgAAQDogEC8BaQB9A8BkBnQAbAcAXAeIAMASQARAaAOAcQAVAzANA4QALA2ADA6QgBBBgKBDQgMBHgOA9IgDALQhEEvivEAQiwEFkECnQg5Alg8AfQg/AhhAAbQidA6ifAlIguAIIgbAEQjPAbjSgHQi/gMjBgnImBhPIgNgDIgUgEIpQh7QiugiiqgeQhngNhlgKQh0gKhtgIIgEACQg4gGhEgEIgXgBIiFgGIgkgBIhHgBIgRAAIgfAAQhegCi8AHQhiADhqAGQm5AkmyBhIgKACIgKADQiLAiiJAoQidAtieAjQkeA6khAcIglACQhPAGhPAAQiSAAiSgUg");
	this.shape_56.setTransform(641.5781,966.1373);
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#05104D").ss(20,1,1).p("EhFCgD4QgBgXAAgWQACjSBSh/QBXifDIhEQAbgKAcgJQAegHAggGQCYgaCXAZQDLAdEPAwQC7AgDMAOQHiABHXASQKiAoJnAcQCAAHCDACQAOAAANABQALAAAAAAQATAAAUAAQHMAGHwgkQMpgCJCgRQBKgDBLgBQH2goF3idQAEgBADgCQADgCAEgBQACgBADgBQBUgoBeghQBjghBqgRQAfgDAggCQDugMC5BZQB+A8BgBsQAaAcAWAgQAGAKAFAJQAQAbANAcQASA0AKA5QAIA2ACA7QgEBCgMBCQgOBHgRA8QgCAGgBAFQhNEpi4EDQi4EGkCCjQg6Alg8AfQhAAghBAbQieA1ihAkQgXAEgYACQgNACgOACQjQAUjUgIQi/gQjCgnQjCgmjBgnQgHgCgHgBQgKgCgKgDQkpg9kqg9QiwghirgcQhngMhmgJQh2gKhsgHQgCABgCACQg2gGhGgEQgMAAgLgBQhEgDhDgCQgSgBgRAAQgkAAgkAAQgJAAgIAAQgQAAgOAAQhTgCjMAKQhhAEhtAGQm7Aom1BdQgFABgFABQgFABgFACQiMAhiKAmQieArifAkQkhA2kiAcQgTACgTABQjjAQjggnQhjgQhfgfQjohKjSicQioiAh/iAQg6hAg4hFQgrgygiguQgCgCgCgCQAAgBABAAQglgxghgzQgbgpgphLQgTgkgPgjQgfhtgWhzg");
	this.shape_57.setTransform(641.975,970.3329);
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1294E4").s().p("Egv8AQHQhjgQhfgfQjohKjSicQioiAh/iAQg6hAg4hFQgrgygiguIgEgEIABgBQglgxghgzQgbgpgphLQgTgkgPgjQgfhtgWhzIAAgBIgBgtQACjSBSh/QBXifDIhEQAbgKAcgJQAegHAggGQCYgaCXAZQDLAdEPAwQC7AgDMAOQHiABHXASQKiAoJnAcQCAAHCDACIAbABIALAAIAnAAQHMAGHwgkQMpgCJCgRICVgEQH2goF3idIAHgDIAHgDIAFgCQBUgoBeghQBjghBqgRQAfgDAggCQDugMC5BZQB+A8BgBsQAaAcAWAgIALATQAQAbANAcQASA0AKA5QAIA2ACA7QgEBCgMBCQgOBHgRA8IgDALQhNEpi4EDQi4EGkCCjQg6Alg8AfQhAAghBAbQieA1ihAkIgvAGIgbAEQjQAUjUgIQi/gQjCgnImDhNIgOgDIgUgFIpTh6QiwghirgcQhngMhmgJQh2gKhsgHIgEADQg2gGhGgEIgXgBIiHgFIgjgBIhIAAIgRAAIgeAAQhTgCjMAKQhhAEhtAGQm7Aom1BdIgKACIgKADQiMAhiKAmQieArifAkQkhA2kiAcIgmADQhCAEhDAAQigAAiegbg");
	this.shape_58.setTransform(641.975,970.3329);
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#05104D").ss(20,1,1).p("EhGBgF8QABgXACgXQAajVBwhuQBziDDigVQAdgEAegCQAfACAgAEQCZARCSBCQC8BVEVA2QC4AjDWAHQHmgjHegLQKhgFJ8ALQCBACCEABQAOAAANABQALAAABAAQASAAAUAAQHYAGHxgJQMLAUJ1AnQBLAEBMAEQIZgTFPjRQADgCADgDQADgCADgCQABgCACgBQBOg3BbgsQBfgtBrgcQAfgGAhgEQD5ggC0BWQCBA9BXB3QAXAfATAjQAFAKAFAKQAMAdALAdQAKA4AEA6QADA4gCA6QgLBFgQA/QgVBJgVA5QgCAFgCAGQhgEajNEJQjKEIj/CdQg7Ajg9AeQhBAghDAZQiiArilAhQgYACgYABQgNABgOABQjUAHjVgNQjCgWjEgmQjEgmjFgmQgGgCgHgCQgKgCgKgCQkug9kug8Qi0gfisgXQhqgLhmgHQh5gIhtgFQAAACgBACQg0gGhLgDQgLgBgNAAQhDgChEgBQgTAAgSAAQgkAAgkABQgJAAgIAAQgRAAgOABQg2gBjxAPQhhAEhxAIQnAAxm8BTQgFACgFABQgFABgFABQiOAgiNAjQihAnihAiQkmAvkmAdQgTABgTACQjmAPjhg3QhigYhfgmQjehejNizQiniUhyh/Qg3hFg1hIQgsg2gegsQgCgDgBgCQAAAAABAAQgkgzghgzQgVgigvhWQgTgjgPglQgXhxgQh1g");
	this.shape_59.setTransform(642.665,979.75);
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#1294E4").s().p("EgxyAPlQhigXhfgmQjehfjNizQiniUhyh+Qg3hFg1hIQgsg2gegtIgDgEIABAAQgkgzghg0QgVghgvhWQgTgkgPgkQgXhygQh1IADguQAajUBwhvQBziCDigWQAdgEAegBIA/AFQCZASCSBCQC8BVEVA2QC4AjDWAHQHmgkHegKQKhgGJ8ALQCBADCEABIAbABIAMAAIAmAAQHYAFHxgIQMLAUJ1AnICXAIQIZgUFPjQIAGgFIAGgFIADgCQBOg3BbgtQBfgsBrgcQAfgGAhgEQD5ggC0BWQCBA9BXB3QAXAfATAjIAKAUQAMAcALAeQAKA4AEA6QADA3gCA6QgLBFgQBAQgVBIgVA5IgEAMQhgEajNEIQjKEJj/CcQg7Akg9AeQhBAghDAZQiiArilAgIgwAEIgbACQjUAGjVgNQjCgWjEgmImJhLIgNgEIgUgFIpch4Qi0ggisgWQhqgMhmgGQh5gIhtgGIgBAFQg0gGhLgDIgYgBIiHgEIglAAIhIABIgRAAIgfACQg2gBjxAOQhhAFhxAIQnAAxm8BTIgKACIgKADQiOAfiNAjQihAoihAiQkmAukmAeIgmADQgxADgxAAQi0AAixgsg");
	this.shape_60.setTransform(642.665,979.75);
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#05104D").ss(20,1,1).p("EhGegG2QACgXADgYQAljVB9hnQCAh3DsAAQAfgBAeABQAgAGAgAIQCZAkCPBVQC2BtEYA5QC3AkDaADQHngzHigXQKhgZKEADQCDABCEABQAOAAANAAQALABAAAAQATgBAUAAQHdAGHxADQL+AeKMA/QBLAHBNAHQIogKE9joQADgDADgCQACgDADgDQACgBACgBQBKg+BagxQBegyBrgiQAfgHAggFQD/goCxBUQCCA+BTB8QAWAgASAkQAFAKAFALQAKAdAKAfQAHA4ACA7QAAA4gEA7QgOBGgSA9QgXBKgYA4QgCAFgCAGQhpEUjWELQjSEJj9CaQg8Ajg8AeQhDAfhDAYQilAnimAfQgYACgYAAQgOABgOAAQjVABjXgPQjCgZjEgmQjGgljGgmQgHgCgHgBQgKgDgKgCQkvg8kwg8Qi2geitgVQhqgLhngGQh7gHhsgEQAAADAAACQgzgGhNgDQgMAAgMgBQhEgBhFgBQgTAAgRAAQgkABglAAQgJABgIAAQgRABgOABQgqgCkBASQhgAFh0AIQnCA1m/BPQgFABgFABQgFACgFABQiPAfiOAhQiiAmijAiQknArkoAeQgTABgUABQjnAOjhg+QhigahfgrQjZhmjKi9Qinidhth+Qg1hHg0hJQgtg4gcgsQgCgCgBgDQABAAABABQgjg0gigzQgSgfgxhbQgUgkgPglQgThzgOh1g");
	this.shape_61.setTransform(643.05,983.8338);
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#1294E4").s().p("EgymAPXQhjgahfgrQjZhmjKi9Qimidhth+Qg2hHg0hJQgtg4gcgsIgDgFIACABQgjg0gigzQgSgfgxhbQgUgkgOglQgUhzgOh1IAFgvQAljVB+hnQB/h3DsAAQAfgBAeABIBAAOQCZAkCPBVQC2BtEYA5QC4AkDZADQHngzHigXQKhgZKEADIEHACIAbAAIALABQATgBAVAAQHcAGHxADQL+AeKMA/ICYAOQIogKE9joIAGgFIAFgGIAEgCQBLg+BZgxQBegyBrgiQAfgHAggFQD/goCxBUQCDA+BSB8QAXAgARAkIAJAVIAWA8QAGA4ACA7QAAA4gEA7QgOBGgSA9QgXBKgYA4IgEALQhpEUjWELQjSEJj+CaQg7Ajg8AeQhDAfhDAYQilAnimAfIgwACIgcABQjVABjXgPQjCgZjEgmImLhLIgPgDIgUgFIpeh4Qi3geitgVQhpgLhogGQh7gHhsgEIAAAFQgzgGhNgDIgYgBIiJgCIgkAAIhJABIgRABIgfACQgqgCkBASQhgAFh0AIQnCA1m/BPIgKACIgKADQiPAfiOAhQiiAmijAiQknArkoAeIgnACQgqADgqAAQi8AAi3gzg");
	this.shape_62.setTransform(643.05,983.8338);
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#05104D").ss(20,1,1).p("EhG4gHpQAEgXADgXQAvjXCIhgQCLhsD2ARQAgACAfAEQAfAJAhALQCaA2CMBkQCwCCEbA7QC2AmDdAAQHphAHlgjQKhgrKLgDQCEAACEAAQAOAAANABQALAAABAAQASgBAUAAQHiAGHwAOQLzAnKgBUQBMAJBNAJQI1gCEtj8QADgDADgDQACgDADgCQACgCABgBQBIhEBZg2QBcg2BsgmQAegIAhgGQEEgvCvBSQCDA/BPCAQAVAhARAlQAEALAEAKQAKAeAKAfQADA6AAA7QgDA5gEA7QgRBGgUA9QgZBKgaA3QgDAFgCAGQhwEPjeENQjZEKj8CXQg8Akg9AcQhCAghEAXQinAjinAeQgYABgZAAQgOAAgOAAQjWgFjYgQQjDgcjFglQjHgljGgmQgHgCgHgBQgKgCgLgDQkxg8kxg8Qi3gditgTQhrgKhogFQh8gGhsgEQAAADAAADQgxgGhQgDQgLgBgNAAQhEgBhFgBQgSAAgSABQglABglABQgJAAgIAAQgRABgOABQgfgBkPATQhgAGh2AJQnDA4nCBMQgFABgFABQgFACgFABQiQAeiPAgQijAkikAhQkpAokqAfQgTABgTABQjpAOjhhEQhhgdhfguQjWhtjIjGQimilhoh+Qg0hIg0hLQgsg5gbgsQgCgCgBgDQABABABAAQgigzgig0QgQgdgzheQgVglgOglQgQh0gNh2g");
	this.shape_63.setTransform(643.425,987.3626);
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#1294E4").s().p("EgzVAPLQhhgdhfguQjWhtjIjGQimilhoh+Qg0hIg0hLQgsg5gbgsIgDgFIACABIhEhnIhDh7QgVglgOglQgQh0gNh2IAAgBIAHguQAvjXCIhgQCLhsD2ARQAgACAfAEQAfAJAhALQCaA2CMBkQCwCCEbA7QC2AmDdAAQHphAHlgjQKhgrKLgDIEIAAIAbABIAMAAIAmgBQHiAGHwAOQLzAnKgBUICZASQI1gCEtj8IAGgGIAFgFIADgDQBIhEBZg2QBcg2BsgmQAegIAhgGQEEgvCvBSQCDA/BPCAQAVAhARAlIAIAVIAUA9QADA6AAA7QgDA5gEA7QgRBGgUA9QgZBKgaA3IgFALQhwEPjeENQjZEKj8CXQg8Akg9AcQhCAghEAXQinAjinAeIgxABIgcAAQjWgFjYgQQjDgcjFglImNhLIgOgDIgVgFIpih4Qi3gditgTQhrgKhogFIjogKIAAAGQgxgGhQgDIgYgBIiJgCIgkABIhKACIgRAAIgfACQgfgBkPATIjWAPQnDA4nCBMIgKACIgKADQiQAeiPAgQijAkikAhQkpAokqAfIgmACQgoADgnAAQjAAAi7g5g");
	this.shape_64.setTransform(643.425,987.3626);
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#05104D").ss(20,1,1).p("EhHOgITQAEgXAFgXQA2jYCShbQCUhjD+AhQAhADAfAHQAgAMAgAOQCbBECKBxQCrCVEeA9QC1AmDggCQHqhMHngtQKhg5KSgIQCEgBCEgBQAOAAAOABQALAAAAAAQATgBAUAAQHlAGHxAWQLpAvKwBmQBNALBNALQJAAEEgkNQADgDADgDQACgDADgDQABgBACgCQBGhIBYg6QBag6BsgpQAfgJAggHQEIg1CtBRQCEA+BNCEQAUAiAPAmQAEALAEALQAKAfAIAfQABA7gCA8QgEA5gGA7QgUBHgVA8QgbBKgbA2QgDAFgCAGQh3ELjlEPQjeEKj7CVQg8Ajg+AdQhDAfhEAWQioAhioAcQgZAAgZAAQgOAAgOAAQjXgKjYgRQjFgejFglQjHgljIglQgHgCgHgCQgKgCgLgDQkyg7kyg8Qi5gciugSQhrgJhogFQh+gGhrgDQAAADABADQgxgFhRgDQgMgBgMAAQhFAAhEgBQgTAAgSABQglABglABQgJAAgIAAQgSACgOABQgWgBkaAVQhgAGh4AJQnFA7nDBJQgFABgFABQgGACgFABQiQAdiQAfQikAjilAhQkqAmkrAfQgTABgUABQjpANjihJQhhgghfgwQjSh0jGjMQimithlh8QgzhLgyhLQgtg6gZgsQgCgCgBgDQABABABAAQgigzgig1QgOgbg1hhQgVglgNgmQgOh1gLh2g");
	this.shape_65.setTransform(643.83,990.3157);
	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#1294E4").s().p("Egz9APBQhhgghfgwQjSh0jGjMQimithlh8IhliWQgtg6gZgsIgDgFIACABIhEhoIhDh8QgVglgNgmQgOh1gLh2IAAgBIAJguQA2jYCShbQCUhjD+AhQAhADAfAHQAgAMAgAOQCbBECKBxQCrCVEeA9QC1AmDggCQHqhMHngtQKhg5KSgIIEIgCIAcABIALAAIAngBQHlAGHxAWQLpAvKwBmICaAWQJAAEEgkNIAGgGIAFgGIADgDQBGhIBYg6QBag6BsgpQAfgJAggHQEIg1CtBRQCEA+BNCEQAUAiAPAmIAIAWIASA+QABA7gCA8QgEA5gGA7QgUBHgVA8QgbBKgbA2IgFALQh3ELjlEPQjeEKj7CVQg8Ajg+AdQhDAfhEAWQioAhioAcIgyAAIgcAAQjXgKjYgRQjFgejFglImPhKIgOgEIgVgFIpkh3Qi5gciugSQhrgJhogFQh+gGhrgDIABAGQgxgFhRgDIgYgBIiJgBQgTAAgSABIhKACIgRAAIggADQgWgBkaAVIjYAPQnFA7nDBJIgKACIgLADQiQAdiQAfQikAjilAhQkqAmkrAfIgnACQgkACgkAAQjEAAi/g+g");
	this.shape_66.setTransform(643.83,990.3157);
	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#05104D").ss(20,1,1).p("EhHigI1QAFgXAFgYQA9jYCahXQCbhbEGAtQAgAFAgAJQAhAOAgAQQCbBQCJB8QCnCjEfA/QC1AnDigDQHrhXHpg0QKhhFKXgNQCEgCCFgBQAOAAANABQALAAABAAQASgBAUAAQHpAGHxAeQLhA0K+B1QBNAMBNAOQJKAJEVkbQADgDACgDQADgEACgDQACgBABgCQBEhMBYg9QBYg9BtgsQAegKAhgIQELg6CsBQQCFA/BKCHQATAiAPAnQAEALADAMQAJAfAIAgQgCA7gDA8QgGA6gHA7QgVBHgWA7QgdBLgdA1QgDAGgCAGQh8EHjqEQQjjELj7CTQg8Ajg9AcQhEAfhEAWQipAeiqAbQgZAAgYgBQgOAAgPAAQjYgNjZgSQjFghjFgkQjJgljIglQgHgCgHgCQgKgCgLgDQkzg7kzg7Qi6gciugQQhsgKhogEQh/gFhrgDQAAAEABADQgwgGhSgCQgMgBgMAAQhGAAhEgBQgTAAgSABQgmABglABQgJABgHAAQgSACgOABQgPAAkjAVQhgAHh5AJQnHA+nFBGQgFABgFABQgGACgFABQiRAdiQAeQilAiilAgQksAkksAgQgTABgUABQjqANjihOQhgghhfgzQjQh5jEjSQiniyhhh9QgyhLgxhMQgtg7gZgrQgBgCgCgDQABABACAAQgig1ghg1QgOgYg2hlQgVglgNglQgMh3gKh3g");
	this.shape_67.setTransform(644.275,992.749);
	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#1294E4").s().p("Eg0fAO5QhgghhfgzQjQh5jEjSQiniyhhh9IhjiXQgtg7gZgrIgDgFIADABIhDhqIhEh9QgVglgNglQgMh3gKh3IAKgvQA9jYCahXQCbhbEGAtQAgAFAgAJIBBAeQCbBQCJB8QCnCjEfA/QC1AnDigDQHrhXHpg0QKhhFKXgNIEJgDIAbABIAMAAIAmgBQHpAGHxAeQLhA0K+B1ICaAaQJKAJEVkbIAFgGIAFgHIADgDQBEhMBYg9QBYg9BtgsQAegKAhgIQELg6CsBQQCFA/BKCHQATAiAPAnIAHAXIARA/QgCA7gDA8IgNB1QgVBHgWA7QgdBLgdA1IgFAMQh8EHjqEQQjjELj7CTQg8Ajg9AcQhEAfhEAWQipAeiqAbIgxgBIgdAAQjYgNjZgSQjFghjFgkImRhKIgOgEIgVgFIpmh2Qi6gciugQQhsgKhogEIjqgIIABAHQgwgGhSgCIgYgBIiKgBIglABIhLACIgQABIggADQgPAAkjAVIjZAQQnHA+nFBGIgKACIgLADQiRAdiQAeIlKBCQksAkksAgIgnACQghABgiAAQjHAAjChCg");
	this.shape_68.setTransform(644.275,992.749);
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#05104D").ss(20,1,1).p("EhHxgJQQAFgXAGgYQBBjZChhTQChhWEKA3QAhAHAgAKQAhAQAhASQCbBZCICEQCjCvEhBAQC1AoDjgFQHtheHqg6QKhhOKbgRQCEgDCFgBQAOAAANABQAMAAAAAAQASgBAUAAQHsAFHwAkQLcA5LICAQBOAOBNAPQJRANENklQADgEACgDQACgEADgDQABgCACgBQBChPBXhAQBYg/BsgvQAfgKAhgIQENg+CrBPQCFA/BICJQATAjAOAoQAEALAEALQAIAgAHAgQgDA8gFA8QgHA6gHA7QgXBIgXA7QgeBLgeA0QgDAGgCAGQiAEEjvESQjmELj6CRQg9Ajg9AcQhEAfhFAWQiqAbiqAbQgZAAgZgBQgOgBgOAAQjZgQjZgTQjGgijFgkQjKgljIglQgHgCgIgBQgKgDgKgCQk0g7k1g8Qi6gbivgQQhsgIhogEQiAgFhrgCQAAADACAEQgwgGhTgCQgMgBgMAAQhGAAhEAAQgUgBgSABQglACgmABQgJABgHAAQgSABgOACQgIAAksAWQhfAHh7AKQnHA/nHBEQgFACgFABQgFABgFABQiSAdiRAeQimAhilAgQktAiktAgQgTABgTABQjrAMjihRQhhgihfg1QjNh9jDjXQini2heh8QgyhMgxhNQgtg8gYgqQgBgDgCgCQACAAABABQghg1gig2QgMgXg3hmQgVgmgOglQgJh3gJh4g");
	this.shape_69.setTransform(644.65,994.6204);
	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#1294E4").s().p("Eg05AOyQhhgiheg1QjPh9jDjXQili2hfh8IhjiZQgtg8gXgqIgEgFIAEABIhEhrIhDh9QgVgmgNglIgTjvIALgvQBBjZChhTQChhWEKA3QAiAHAgAKQAgAQAhASQCbBZCHCEQClCvEgBAQC1AoDjgFQHtheHpg6QKihOKbgRQCEgDCFgBIAcABIALAAIAmgBQHsAFHwAkQLbA5LJCAICbAdQJQANENklIAGgHIAFgHIADgDQBChPBXhAQBYg/BsgvQAfgKAhgIQENg+CrBPQCFA/BICJQATAjAOAoIAIAWIAPBAIgIB4IgPB1QgWBIgYA7QgeBLgdA0IgFAMQiAEEjvESQjnELj5CRQg9Ajg+AcQhDAfhFAWIlVA2IgxgBIgcgBQjagQjZgTQjFgijGgkImRhKIgPgDIgUgFIpph3Qi6gbivgQQhsgIhogEIjrgHIACAHQgwgGhTgCIgYgBIiKAAQgUgBgSABIhKADIgRABIggADIk0AWIjaARQnHA/nGBEIgLADIgLACIkiA7IlMBBQksAiksAgIgoACQgfABgfAAQjLAAjDhGg");
	this.shape_70.setTransform(644.65,994.6204);
	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#05104D").ss(20,1,1).p("EhH8gJjQAGgXAFgYQBGjZCkhRQCmhSEOA+QAhAIAhALQAhARAgAUQCbBfCHCKQCiC3EhBBQC0AoDmgGQHshjHsg+QKhhVKegTQCEgECFgBQAOAAAOABQALAAAAAAQASgBAUAAQHuAFHwAoQLXA8LQCJQBOAOBNAQQJWAQEHktQADgDACgEQACgEADgDQABgCACgBQBBhRBXhCQBXhBBtgwQAfgLAggIQEPhBCqBOQCGBABHCLQASAjAOAoQADALAEAMQAIAfAHAhQgFA8gFA9QgIA6gIA7QgXBIgZA7QgeBLgfA0QgDAFgDAGQiCECjxETQjqEMj6CQQg8Ajg+AcQhEAehFAWQirAairAaQgYAAgZgCQgOAAgPgBQjZgSjagTQjFgkjGgkQjKgkjJglQgHgCgHgBQgLgDgKgCQk1g7k1g8Qi7gbiugOQhtgJhogEQiBgEhrgCQABAEABADQgvgFhUgDQgMAAgMAAQhGgBhEAAQgUAAgSABQglACgmABQgJABgHAAQgSACgOABQgFAAkwAXQhfAIh8AJQnIBBnHBDQgFABgGABQgFACgFABQiSAciRAdQimAhinAgQktAhktAgQgUABgTABQjsAMjhhTQhhgkheg2QjNh/jCjbQimi5hdh8QgxhNgwhNQgtg8gYgrQgBgCgCgDQACABACABQgig2gig1QgLgXg4hnQgVgmgOgmQgIh3gIh4g");
	this.shape_71.setTransform(644.9,995.9716);
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#1294E4").s().p("Eg1MAOuQhhgkheg2QjNh/jCjbQimi5hdh8IhhiaQgtg8gYgrIgCgFIADACIhDhrQgLgXg5hnQgVgmgOgmIgQjvIAMgvQBFjZClhRQClhSEOA+QAhAIAhALQAhARAhAUQCaBfCICKQChC3EhBBQC0AoDmgGQHshjHsg+QKhhVKegTQCEgECGgBIAbABIAMAAIAlgBQHuAFHwAoQLXA8LRCJICaAeQJWAQEIktIAEgHIAFgHIADgDQBBhRBXhCQBXhBBtgwQAfgLAggIQEQhBCpBOQCGBABHCLQASAjAOAoIAHAXIAPBAIgKB5IgQB1QgYBIgXA7QggBLgeA0IgGALQiCECjxETQjqEMj6CQQg8Ajg9AcQhEAehGAWIlWA0IgxgCIgcgBQjagSjagTImLhIImThJIgOgDIgVgFIpqh3Qi7gbiugOQhtgJhogEIjsgGIACAHQgugFhUgDIgZAAIiJgBIgnABIhLADIgQABIggADQgFAAkwAXIjbARQnIBBnHBDIgKACIgLADIkjA5IlNBBIpaBBIgnACQgfABgeAAQjMAAjEhIg");
	this.shape_72.setTransform(644.9,995.9716);
	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#05104D").ss(20,1,1).p("EhIDgJuQAGgYAGgYQBIjZCnhQQCohOEQBBQAiAJAgALQAhATAhAUQCbBjCHCOQCgC8EiBBQC0AoDmgGQHthmHshBQKhhZKggVQCFgDCFgCQAOAAANABQALAAABAAQARgBAVAAQHuAFHxAqQLUA/LVCNQBNAPBOAQQJZATEDkyQADgEACgDQACgEADgDQABgCABgCQBBhSBXhDQBWhCBtgxQAfgLAhgJQEQhCCpBOQCHA/BGCMQASAjANApQAEALADAMQAHAgAIAgQgGA9gGA9QgIA6gIA7QgZBJgYA6QgfBLggA0QgDAFgCAGQiEEBjzETQjrEMj6CQQg8Ajg+AbQhEAfhGAVQiqAZisAaQgZAAgZgCQgOAAgOgBQjagTjZgUQjHgkjGgkQjKgljJgkQgHgCgHgCQgLgCgKgDQk1g7k1g7Qi8gbivgOQhtgIhogEQiAgEhsgCQABAEACADQgvgFhUgDQgMAAgNAAQhFAAhFAAQgUAAgSABQglABgmACQgJAAgHABQgSABgOACQgCAAk0AYQhfAHh8AJQnIBCnJBCQgFABgFABQgGACgFABQiSAdiRAcQimAginAgQkuAgktAgQgUABgTABQjsANjhhVQhhgkhfg3QjLiBjCjcQimi8hbh7QgxhOgxhNQgtg8gXgrQgBgCgCgDQACABACABQgig2ghg2QgLgWg5hoQgVgmgNgmQgIh4gIh3g");
	this.shape_73.setTransform(645.05,996.7698);
	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#1294E4").s().p("EAuLAPzIgcgBImzgnImMhIImUhJIgOgEIgVgFIpqh2Qi7gbivgOQhtgIhpgEQiAgEhsgCIADAHQgvgFhUgDIgZAAIiJAAIgnABIhLADIgQABIggADIk2AYIjbAQIuRCEIgKACIgLADIkjA5IlMBAIpcBAIgnACQjsANjhhVQhhgkheg3QjMiBjBjcQini8hbh7IhiibQgtg8gWgrIgEgFIAEACIhDhsQgLgWg4hoQgWgmgNgmIgQjvIANgwQBHjZCnhQQCohOEQBBQAjAJAfALQAiATAgAUQCcBjCGCOQCgC8EiBBQC0AoDngGQHshmHshBQKhhZKggVQCFgDCFgCIAbABIAMAAIAmgBQHuAFHxAqQLUA/LVCNICbAfQJZATEEkyIAEgHIAFgHIADgEQBBhSBWhDQBXhCBsgxQAfgLAhgJQEQhCCqBOQCFA/BGCMQASAjAOApIAHAXIAOBAIgLB6IgQB1QgZBJgYA6QgfBLgfA0IgGALQiEEBj0ETQjrEMj4CQQg+Ajg9AbQhEAfhFAVIlXAzIgygCg");
	this.shape_74.setTransform(645.05,996.7698);
	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#05104D").ss(20,1).p("AaMM2QAIABAGACIMgCRIGzAoQAPAAAOABQAZABAZABIFWgzQCEgpCAhJQD5iQDskLQD0kTCFkBQADgGACgFQA3hbA5inIARh2IALh5IgOhBQgDgLgEgLQhCjIiphQQiphOkRBDQggAIgfAMQjZBkiCClQgBACgBACQgCADgDAEQgCADgDAEQkCE0pagTQ0XkQ0NgOQgUAAgSABIgBAAQgFAAgGAAQgNgBgOAAQ0PAO0WEQQpZASkDkzQiiitjBhuQgggLgjgJQkRhDioBOQipBPhDDJQgCAIgDAJIgMAvIAPDvQAOAmAUAmIABAAQA5BpAKAWIBDBrQgBgBgCgBQAXAtAwBAIBhCaQBbB8CmC8QDCDdDLCCQE8C2FQgSQAUgBATgBIJchAIJwh5QAGgBAFgBQAFgCAFgBIORiDQIQgpABAAQAPgCARgBQAIgBAJAAIBLgEQASAAAUgBICKAAQANABALAAQBVACAvAGIgDgHQBrACCBAEQEQAIEwAsIJqB3QALACAKADg");
	this.shape_75.setTransform(645.1001,997.0455);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25}]}).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_60},{t:this.shape_59}]},1).to({state:[{t:this.shape_62},{t:this.shape_61}]},1).to({state:[{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_74},{t:this.shape_73}]},1).to({state:[{t:this.shape_26},{t:this.shape_75}]},1).wait(1));
	// smile
	this.instance_1 = new lib.Twyyjnjeen11("synched",0);
	this.instance_1.setTransform(644.9,1019.3);
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.8364,scaleY:0.7582,y:999.05},8,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,y:1019.3},18,cjs.Ease.quadInOut).wait(1));
	// Layer_2
	this.instance_2 = new lib.Siyuiymbol25("synched",0);
	this.instance_2.setTransform(647.7,718.7,5.0012,5.0012,0,0,0,0.2,0.3);
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:646.2,startPosition:8},8,cjs.Ease.quadInOut).to({y:718.7,startPosition:26},18,cjs.Ease.quadInOut).wait(1));
	// glasses
	this.instance_3 = new lib.Tyjween13("synched",0);
	this.instance_3.setTransform(644.1,683.2);
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.9086,y:619.45},8,cjs.Ease.quadInOut).to({scaleX:1,y:683.2},18,cjs.Ease.quadInOut).wait(1));
	// face
	this.instance_4 = new lib.Tweeiin16("synched",0);
	this.instance_4.setTransform(642.2,855.85);
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.9527,scaleY:1.1008,y:803},8,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,y:855.85},18,cjs.Ease.quadInOut).wait(1));
	this._renderFirstFrame();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(84.4,-32.8,1115.6999999999998,1293.2);
// stage content:
(lib._100_default = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// _100
	this.instance = new lib._100b("synched",0);
	this.instance.setTransform(117.9,211.5,0.1825,0.1825,0,0,0,646.1,635);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52));
	this._renderFirstFrame();
}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(130.4,264.6,88.6,61);
// library properties:
lib.properties = {
	id: '43463C0128C503FB1D56E58BF8C0161B',
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
an.compositions['43463C0128C503FB1D56E58BF8C0161B'] = {
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
