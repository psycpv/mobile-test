
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
(lib.tyttyTween2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#009DFF").s().p("AgWCiQhwgBhlgLQiOgPhggiQgdgKgYgNQgogVgUgXIACgFQAPgkAfgeQALgJAQgMQANgUAQgMQAogiA0gLQAZgFAdACQAxgQAlgGQAzgEBVAGID5ATQCAALA9gEIBDgDQAmgBAcAGQA+AOAkAyQAoA0gKA+IAAACQghAbg+AYQigA4kkAFg");
	this.shape.setTransform(132.2081,-210.792);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#05104D").ss(4,1,1).p("AAFAJIgJgQ");
	this.shape_1.setTransform(-190.45,226.2);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
	this._renderFirstFrame();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-192.9,-227,383.8,456.1);
(lib.tththrb = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#05104D").ss(16).p("EApagGJQjIkIlCheQhpgfhsgWQkshBk1AXQlCAclBAVQk/AXk+AGQiEACiEgIQlAgUlAgbQlEgelEAEQlMAEkyCCQktB/jeDvQhuB2g/CVQgRApgMAqQhID0BDDuQAIAfARAZQB7DEDbA7QBCATBGgDQEngJEgg+QEuhDEzAdQCfASCdAbQEnAwEpAPQE9ASE/gSQEpgPEngxQB+gTB/gRQFCgoE+BMQDLAyDOArQDPAqC7hbQBigvBEhYQCzjqhHkkQgPg8gSg7QhFjfibi1g");
	this.shape.setTransform(-0.7839,23.8395);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99D8FF").s().p("EAjIADdQkCjVlOgcQhtgJhsATQkrA2kqA7QkzA/k6ANQk1AMk1ggQkhggkbhIQk3hLk9gjQlXgmkhCyQhyBIhMhvQgNgTAKgUQAvhcBogmQD3h5EUgCQEygCEsBGQEwBHE1A0QE8A1E/gEQFDgFE6g4IEyhBIHyhTIDdAPIFvBvQB+A8BtBYQATAQAPAVQA9BWhkAzQgbAOgZAAQgiAAgfgag");
	this.shape_1.setTransform(5.8114,41.9248);
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#05104D").s().p("AnMC4Qk2g0kwhHQkrhFkyACQkUACj3B4QAEgYAPgRQCoi6DzhSQCrg4CzAZQFCAnE/AmQE6AjE7AFQEmAFEogVQEjgZEhgkQC/gYDAgRQE8gZEFC2QAjAZAnAVQB0A4AjB0IluhvIjegPInyBTIkxBBQk7A4lDAFIgyAAQklAAkjgxg");
	this.shape_2.setTransform(-1.025,17.9448);
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1294E4").s().p("EAi/ANIQjOgrjLgyQk+hMlCAoQh/ARh+ATQknAxkpAPQk/ASk9gSQkpgPkngwQidgbifgSQkzgdkuBDQkgA+knAJQhGADhCgTQjbg7h7jEQgRgZgIgfQhDjuBIj0QAMgqARgpQA/iVBuh2QDejvEth/QEyiCFMgEQFEgEFEAeQFAAbFAAUQCEAICEgCQE+gGE/gXQFBgVFCgcQE1gXEsBBQBsAWBpAfQFCBeDIEIQCbC1BFDfQASA7APA8QBHEkizDqQhEBYhiAvQh/A+iJAAQhAAAhCgNgAa6CgQFOAdECDVQA2AtA/ghQBkgzg9hWQgPgVgTgQQhthZh+g8Qgkhzh0g5QgmgVgkgZQkEi2k9AZQjAARi+AYQkhAkkkAZQknAVkngFQk6gFk6gjQlAgmlBgnQi0gZiqA4Qj0BSinC6QgQARgEAYQhoAmgvBdQgKAUANATQBMBvByhIQEhizFXAmQE9AjE3BMQEbBIEhAgQE1AgE1gMQE6gNEzg/QEqg7Erg3QBKgNBJAAQAjAAAjADg");
	this.shape_3.setTransform(-0.7839,23.8395);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	this._renderFirstFrame();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-301.5,-69.4,618.1,186.60000000000002);
(lib.thyrtjhm = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#843D7E").s().p("AXkN/Qg6gugfgYQgkgcnxjUQngjNiFgwQgrgPkUgcQkqgfghgGQhuAUiwgEIicgIQhegHkFArQkBApARADQg3AShAAbQh/A3grA2QgKgkACg1QAEh2AbiOQAeg6AOhOIAEgLQBhj4B/jHQBAhlBOhNQCaiaDag8IANgEQBjguB8gPQBXgJBdABQEGAFEYAoQBKALCCADQB6ADBSAOQACAAADgDQAEgEACABQBfA5B4BgQBzBcBOBOQA4A6A/AyQBZBGBYA/IAwAjQA4AqAzAtIAJAKQATAeA8ARIBmAbQBhCTA8EmQAEAUgKApQgMArADAWQACAVAUBKQARA/gBAmQgBA9gmBHQgkBCgkAUQgQAIgSAAQgcAAgfgUg");
	this.shape.setTransform(216.4799,-276.826,1,1,-5.9742);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAFAFB").s().p("AClEGQhcgnhKg0IgOgMQhIhIg6hYQguhHAch+QBZgqBrgKIAKAAQAXAGALgRQgVEqBuDIQAGAOADAIQgFADgDAAIgCAAg");
	this.shape_1.setTransform(116.1029,-104.3233,1,1,-5.9742);
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7F7F9").s().p("AgyBmQhaggAYh1QBBhrCKBAQAGACAFAHQAfAmgJA/QgJBBg0AOQgSAQgeAAQgaAAgjgNg");
	this.shape_2.setTransform(235.2903,-143.7503,1,1,-5.9742);
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCFCFC").s().p("AkqFAQgDgDABgFQAHgGADgFQADgEAAgFIACgLQC3iIB3jfQAig9APhYQAYgbAAg5IACgMQAKANASAJQAMAGAPAMQAaAVAfAPQBGAhAXBBQAOAngbAwQhBBxhbBNQirCTj4AxQgFgBgCgDg");
	this.shape_3.setTransform(317.8377,-91.1542,1,1,-5.9742);
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FBFBFB").s().p("AC9FMIgjgQQjghliHi8QhEhdgPiVQA8g3BLgkIBhgtQAQgGgHAWQgJAoASAOQAMCcAxBsQBkDaCmCVQgLADgNAAQgiAAgqgVg");
	this.shape_4.setTransform(-307.7,-91.3425);
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A1A1A2").s().p("AqUHLQgEgBgHABQgpABgLgVQDBgZCRhXQAFgCAFAAQAKAQAqgMQABAAACgGQD4gxCriTQBbhNBBhxQAbgwgOgnQgXhBhGghQgfgPgagVQgPgMgMgGQgSgJgKgNIAFggQAFg9AAgmIAAgKQAkAFAmAQICxBPIAbANQDYBqCICoQArA3gtBGQgMAvgoANQgSAGgRgBQiAgQhlADQguAegjAsQgRAXgWAWQgUAUgWASQhXBHhmAvQhIAhhVAUQimAnjGAAQhTAAhagHg");
	this.shape_5.setTransform(320.7154,-91.3553,1,1,-5.9742);
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A1A1A2").s().p("AJjIKQkjgijrhRQjwhUiDi8QgvhGg6hCQhVgShvAGQgVABgUgIQhWgjAHiEQCSiuEAhFQAIgBAFgEQBdgtB7gTQAmgGAcgTQASApgEBEQgEA8AAA8QgRgOAJgpQAGgWgQAHIhgAtQhLAkg9A2QAPCWBEBcQCIC8DfBlIAkARQA4AcArgKQAFAAAEADQCTB7DhAwQgZAPgoAAQgPAAgRgDg");
	this.shape_6.setTransform(-311.5478,-89.8977);
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A1A1A2").s().p("ArXHsQEMg3CkidICziqQA7APA2gqQAHgGAIgEQCehJBXiQQASgcAFgiQAGgoALgYQhNhciYgRIgKAAQAAgtAGgpQAGglBAAJQAiAFAcAJQBaAaBrAZQC/AtB/BxQAKALAFAUQAMBChRAXQiCgVgtBAIhbB/QiHC6jaBpQg0AZg8ATQj5BNkHA1Qg2ALgpAAQgZAAgVgEg");
	this.shape_7.setTransform(-115.6476,-85.8376);
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FCFDFD").s().p("Ag1DVIgKgBQiugsAKjjQAshyB4glQAEgCAGABIBsAAQCWAdAUCcQAJBEgQAyQg2BShjAlIgKACg");
	this.shape_8.setTransform(-227.6408,-89.5);
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F9F9FA").s().p("AJPGcIAAgLQBMhYAlh4QAoh/AViPIALAAQCXARBNBbQgLAYgFAoQgGAigRAcQhYCRieBJQgIAEgHAGQgoAfgrAAQgPAAgPgEgAuvBtQgNgDgNgGQgsgZANhMQAwhDBbApQAoAQgKA/QgLA9hCAAQgQAAgTgEgAndlTIAAgLQAZg0A/gJQC2gdgnC7QgCAIgGAIQgUAcgnAMQgVADgSAAQiHAAAKiRg");
	this.shape_9.setTransform(-186.3571,-116.0223);
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FCFCFD").s().p("AhcDJQhVgmglhLQghhFAjh6QA8hkB7gOQAFgBAGABIBrAQQB5A3ATB8QAFAbgHAiQgTBag2ArQgzAohOAGg");
	this.shape_10.setTransform(229.9251,-86.499,1,1,-5.9742);
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F4F5F7").s().p("AgvBIIgNgHQgngjANhFQAgg4BTAUQBTASgdBhQgBAGgFAGQgYAdgtAAQgYAAgfgJg");
	this.shape_11.setTransform(180.6474,-111.7059,1,1,-5.9742);
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#06114E").s().p("Aj5W9QgrgDgrgIQkRgzj6hDQh7gih0gzQg4gZgxgbQjQh1hyjQQkfgNhmjKQgNgZgGgiQgRhhAsgsIgCgWQgFgfgXgQQhVg3grhhQgKgWgQgcQgJg9ABhKQAAhBAUhdQAZhoAKg1QAdhXAWhWIABgFIAuhvQAbhBAWgpQAkhCAfgrQAog5AsgnQAXgUA6goQDlhYDJh9QC7h2DGhxQDqg3EQgcQDjgXEdgHIgmAKQAYAUA0gJQBxgRCJAHIBNAFQExAVDtBYQDpBWC7CFQBBAwA3A0QCmCaBtDTQBuDVA9D+QBHEjhIESQhED/jDB+IgLAAQhhAahjARQgzBbhCBLQiWCsjUBwQjRBukPAyQibAciBATQi/AdjGAAQhoAAhpgHgAQeEXQgHApAAAtQgVCRgoB+QglB5hMBYIAAALIi0CqQikCckLA3QA1ALBYgRQEGg1D5hOQA8gTA1gZQDbhpCGi6IBch/QAthACBAUQBRgWgMhCQgEgUgLgMQh+hxi/gsQhrgZhbgbQgcgIgigGQgMgCgKAAQgqAAgFAegA1RK/QA6BDAwBGQCCC8DyBUQDrBREiAiQA/AIAjgUQjhgwiUh7QgDgDgFAAQiniWhkjbQgxhsgMibQAAg8AFg8QAEhEgTgpQgdATglAGQh8AThdAtQgFAEgIABQj/BFiTCuQgGCEBWAjQAUAIAVgBIAygCQBQAABBAOgAi3HwQgGAAgFACQh3AlgtBxQgJDkCtAsIALABQApATBCgNQACAAAAgGQAFAAAEgCQBigkA2hSQARgygJhFQgViciUgeQAAgGgBAAQg8gFgwAAgArOG5QgNBOAsAZQANAGANADQBjASANhMQAKhAgogQQgigPgdAAQguAAgeApgAFQh2QAqAEAgAFQAwAHAWABQAaABAVAEICpAXQCKATEMA5QDAAqCwA0IANAEQAwAVAyAPQAAAFABAAQDIAtBdCRQAchmAAh+QAAiFgahzQgri7hFivQhajligiiQh4h4ijhNQhug0h6gjQj+hMk2gOQgwgDg9gBIqBgHQhUgBg7AWQhBAYgvAbQhqA6hmBCQjBCAjiBeQg1AWgqAbQiTBcitBBQgkA2ghAqIgNARQh/DEg/EBQgNA5gVBJQgGCrCLARQA5AHAvgTQB+gzBrhHQB2gvB7ggIAygOQA6gSCBgcQB/gdA8gGICCgOQBFgJCqgIQC3gNDUAAQCnAAC7AIgAhrAfQg/AKgZAzIAAAMQgLCkCvgWQAmgMAUgdQAGgIACgIQAiiiiDAAQgVAAgYAEg");
	this.shape_12.setTransform(-214.5674,-160.3581);
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#843D7E").s().p("AadOTQhBgvgjgYQgpgdowjdQoajViYg0QgwgQk2ghQlNgkglgIQh8ASjEgGIivgLQhqgIkjAlQkfAmAUACQg+AShGAaQiOA0guA2QgNgoACgyQACh4AciMQAgg6APhMIAFgMQBljzCNjKQBFhiBWhOQCqiXDzg4QAHgBAGgDQBxgtCIgMQBhgIBoADQEkAJE8AuQBSAMCSAFQCIAFBdAQQABAAAEgDQAEgEACACQBsA6CIBjQCCBdBYBRQBDA9BFAwQBfBGBqBDIA2AkQA+ArA7AuIAKALQAWAeBDASIBzAdQBtCTBLEqQAFAUgMAoQgMArADAXQADAVAYBLQAUA/AAAnQAAA8gqBHQgnBBgnAUQgSAHgTAAQggAAgkgVg");
	this.shape_13.setTransform(223.2494,-202.3057,1,1,-5.9742);
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#843D7E").s().p("AY1JpQgBAAAAgFQAihegOhbQgQhhgqhLIgKgSQhxjSjEiAQgXgQgbgMQhqg1h/gzQhzgtiVgQQkhgflNAQIgKABQilABiWAXIkRAsQkWArkABEQiIAlhzAlIgSAHQjNByhGD7QghDwDEALIALAAQhrBHh+AyQgvATg4gHQiLgRAGiqQAVhLAMg4QA/kCB/jDIANgRQAigpAjg3QCthACThdQAqgaA1gWQDiheDCiAQBlhCBrg6QAugbBCgYQA6gWBUAAIKCAIQA9ABAwACQE2AOD9BMQB6AkBvA0QCiBNB4B3QChCiBaDmQBECtAsC8QAaBzAACFQAAB/gdBmQhdiSjIgtg");
	this.shape_14.setTransform(-215.3124,-207.9256);
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EA9DEE").s().p("ASGHtQhNgshagiQiGg0iLgnQiMgoiegdIABgHQg7gPg7gJIhAgJIAAgGQg+gQhCgKIgCAMIlXg0IgCANIgLgCQhqgQhagBIhhgOIgBAMQj6AGkbATQkOASj5A8QgGAAAAgEQgXhJAYhuQBxkMC0ijQCGh5C0g+QBygmCAgWQB6gUCSAEQA6AJAzABIABgGQFDAvErA+QCVAgB/AuQD9BcEMBoQCCA0BtBBIBWA1QDRCIAaEkQAbEWjXARg");
	this.shape_15.setTransform(224.4545,-190.2133,1,1,-5.9742);
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EA9DEE").s().p("AXXHjQgGgDgHgCQi6g9i3gsQkFhBiRgWIjYghQgYgBgtgHQgTgDg4gHQmigVlKAbQiqAIhGAKQg9AJhEAIQg7AGiBAgQiCAgg5AVIgxARQh8Akh2A1IgLAAQjEgMAhkOQBFkbDOiCIASgIQCGgwB1gkQD9hMEZgxQB5gXCYgbQCVgZCmgBIAKgBQFNgTEhAjQCXATBxAzQBzAzB2BBQAaAOAYASQDECSBxDsIAKAUQArBWAPBsQAOBngiBqQgygQgvgYg");
	this.shape_16.setTransform(-215.7189,-193.6449);
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#843D7E").s().p("AAPSrQkxgekJhEQkWhGi5hmQmnkShEj8QhDj8i1jLQj2hlkaA+QBolJgQmkQgQmkGfA8MA+FAQ0IAiAzIAeBBQASAmAJAfQAbBYgJCGQgEBCgcA9QgfBEhCBIQjWDskNCOQjTBwlNBdQjgA/kqAQQhkAFhoAAQi9AAjGgSg");
	this.shape_17.setTransform(209.7875,-107.0516);
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#05104D").ss(25,1,1).p("EBVOAICQAAIXjnHbQiwFrk2FJQrWLmwyG1Q0OIN5sAAQ0TAAv6k7QwIk+v5rZQw+tzAAyJQAA2AY+vkQBWg2CegtQBagZC2guQCZgsBQg4QBohHAahwQBsnfD+lAQDwkvGBizQFlilH+hHQHBg+J7ADQLFADJQCGQIsB9GVDlQGEDbDLEfQDJEbgHE1QgCBvBdBGQBKA3CbAqQBaAYC+AsQCkAqBTA0IAmAXQYYPfAAVug");
	this.shape_18.setTransform(4.4,0.0181);
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#843D7E").ss(20,1).p("ABHiKQhQCFg9CQ");
	this.shape_19.setTransform(-444.575,30.875);
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#843D7E").ss(20,1).p("AizkVQCHBYBqDWQAXAwAuBpQAhBPAQAV");
	this.shape_20.setTransform(434.125,27.6);
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#843D7E").p("EhQBgKHQAjk0D4msQD6moJ7k4QJ7k4oqnLQ4bPbAAVxQAAIWDlHbIAHBUQA1B5A+BoQBBBuBABGQBDBJBnBhQAaAYAEAIQAGAIgNgBQBLBMCOBsQDRCeATAPQhHgRglgFQP9LZQME/QH/CdJHBIQJIBTKJADIBTAAQKKgDJHhTQJHhIH/idQQOk/P7rWQgpADhGAQQDSioDAjDQg2ACDskBQCGiPBnjsIBDg6QDpncAAoVQAA1v4fvgQolHOJ2E7QJ1E+DXG1QDYG8AfDVQAfDZgiEbQglFgkwCEQhvAwiCAKQhrAIhKgRQiZgkhPAAQhhAAhxAvQhdBNg2CBQgPAkhEDfQg3CxhHB9QhkCzisCfQi7Cdh6BXQi/CJjHBjQn8D6rGBDQ5CCYuRiLQuNiMnOizQilg4hbgiQilg9hsg+Qk0iwgdkXQgRjTgLhfQgUiggshcQg2hzhtg4Qh6g/jOABQtfADh7mbQh8mWAkk2g");
	this.shape_21.setTransform(2.025,94.5159);
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#873E7F").s().p("EgApAtPQqJgDpIhTQpHhIn/ieQwMk+v9raQAlAFBHARQgTgPjRieQiOhrhLhMQANAAgGgIQgEgHgagZQhnhhhDhJQhAhFhBhuQg+hog1h5IgHhUQjlnbAAoWQAA1xYbvcQIqHLp7E4Qp7E4j6GpQj4GrgjE1QgkE1B8GWQB7GbNfgDQDOAAB6A+QBtA5A2ByQAsBcAUChQALBeARDTQAdEXE0CwQBsA+ClA9QBbAiClA5QHOCyONCMQORCMZCiYQLGhEH8j6QDHhiC/iJQB6hYC7idQCsieBkizQBHh+A3ixQBEjfAPgkQA2iBBdhMQBxgvBhAAQBPgBCZAkQBKASBrgJQCCgKBvgwQEwiEAllgQAikagfjaQgfjVjYm7QjXm1p1k+Qp2k8IlnOQYfPgAAVwQAAIUjpHdIhDA5QhnDsiGCPQjsEBA2gCQjADDjSCoQBGgPApgEQv7LWwOE/Qn/CepHBIQpHBTqKADg");
	this.shape_22.setTransform(2.025,94.575);
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#843D7E").p("EhJOgJLQj4GsgjEzQgkE2B8GXQB7GbNfgDQDMgBBcA/QBOA2AOB1QAIBBgQC7QgPC/AMBzQAcERGcC2QCEA6DTBBQEABOAhAMQHOCzONCMQORCLZCiYQEMgZIVgxQG+gwETg9QFbhOC3h5QDSiJARjOQCSgYDngOQChgKA6gbQBRgmA0h2QAwhuBDkbQDdAWCNhqQB4hbBGjBQA0iSAij1QAhkUATh+QAOhygbh5QgliCgKhIQgfjUjYm8QjXm1p1k+Qp2k7IlnOIglgXUgZFgPlgjdAAAUgjZAAAgZFAPlQ5EPmAAV/QAASKRDNxQAlAFBHARQjTisi8i/QA2ADjwkCQiEiQhljoIhHg9QjlnbAAoXQAA1wYbvbQIqHLp7E4Qp7E4j6GogEBSoAVJQhnDsiGCPQjsEBA2gCQE3lICvlsg");
	this.shape_23.setTransform(-13.1841,14.913);
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E89FED").s().p("EgQuAvrQuNiMnOizQghgMkAhOQjThBiEg6Qmci2gckRQgMhzAPi/QAQi7gIhBQgOh1hOg2Qhcg/jMABQtfADh7mbQh8mXAkk2QAjkzD4msQD6moJ7k4QJ7k4oqnLQ4bPbAAVwQAAIXDlHbIBHA9QBlDoCECQQDwECg2gDQC8C/DTCsQhHgRglgFQxDtxAAyKQAA1/ZEvmUAZFgPlAjZAAAUAjdAAAAZFAPlIAlAXQolHOJ2E7QJ1E+DXG1QDYG8AfDUQAKBIAlCCQAbB5gOByQgTB+ghEUQgiD1g0CSQhGDBh4BbQiNBqjdgWQhDEbgwBuQg0B2hRAmQg6AbihAKQjnAOiSAYQgRDOjSCJQi3B5lbBOQkTA9m+AwIshBKQtEBQqHAAQpTAAm1hDgEBPAAbEQCGiPBnjsIBDg6QivFsk3FIIgBAAQgzAADqj/g");
	this.shape_24.setTransform(-13.675,14.913);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	this._renderFirstFrame();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-553.4,-404.5,1115.6999999999998,809.1);
(lib.thhj = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#05104D").ss(30).p("AFFEVQgpoXrWCb");
	this.shape.setTransform(-31.2103,-342.8188);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#05104D").ss(28).p("AzSi7QCQAXAggLQTDgoO8Gd");
	this.shape_1.setTransform(107.1317,-297.4598);
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0163AF").s().p("AEoU7IARAGIlOheQApldgWmAQACofhZjiQhZjihHiKQhHiKh5jMQhbkBhRiJQBcA9BFA5QCSB6CABuIAAAAQB4BpC1D1IgBAAQBJBiAgAuIAAAAQA3BOAnBCQCIDnA1EKQA1ELgmEIIAAACIgRBtQgMBNAKB7QAJB0BQDTIgBgBQAMAfAIAKIkUAJIgqgNg");
	this.shape_2.setTransform(333.7375,-99.8625);
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#05104D").s().p("ALkalInaiyIgRgFIAqAMIEUgIQgIgLgMgeIABAAQhQjTgJh0QgKh7AMhNIARhtIAAgCQAmkIg1kLQg1kLiIjmQgnhCg3hNIAAAAQgggvhJhiIABAAQi1j1h4hpIAAAAQiAhuiSh5QhFg5hcg+Qhfg/h4hDIAAAAQhSgukjiEIA1h2IA2h3QEzCLBXAxIgBAAQEFCTCaCBQCUB7CBBvIABAAQCHB1DMETIABABQBLBlAhAwIAAAAQA9BXAsBKQCeENA+E2QA+E4gtE0IAAAAIAAABIgRBuIAAAAQgHA2AHBVQAKBbA/CmIAAAAIAFANIAaBFQAHAAAIAbIAAAAIADAKIAEAMQAGAOgCAFQBbAPBGATQBGASCqBBIhKA/QmIgCgrgQg");
	this.shape_3.setTransform(338.4375,-117.6875);
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0163AF").ss(20,1).p("AjUlHQBPAlA/BBQA+BAAiBRQAFANBcC7QBJCXARA5");
	this.shape_4.setTransform(182,-197.425);
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0163AF").ss(20,1).p("AFfAOQggCKhvAoQhUAfiKgZQiJgYhRhiQhRhigli6");
	this.shape_5.setTransform(267.8,-81.217);
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0163AF").ss(20,1).p("AAXhhQgqBdgDBm");
	this.shape_6.setTransform(-328.625,-92.175);
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0163AF").ss(20,1).p("AgxmnQASGtBRGi");
	this.shape_7.setTransform(-307.125,101.1);
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#05104D").s().p("AGyNuQgwgLgSgnQhtjpg/lEQhLmqjJixQjKiyhqiAQhriAhEhPQgagfBIgFIC4AZQA3AKBFBvQA3BZDgDCQDhDDBlHxQA8ECBmDbQATAqgJApQgKAsgoAXQgZAPgdAAQgOAAgQgEg");
	this.shape_8.setTransform(224.8874,-196.9917);
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#063F84").s().p("Ak4ksIgUmAIKZQuIgTErg");
	this.shape_9.setTransform(277.3,73.9);
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0163AF").s().p("AAiIGQinhKhzgdQglgJk7g9QgDgPhVh/IjCkfQkmm2hBifQgHgPgMgTQEHAiETA+QGtBgF8COQGICSCQBJIFPClQECDzApDEQAnDGlUA+QhHAOhSAAQk2AAnLjGg");
	this.shape_10.setTransform(370.6961,77.956);
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0163AF").s().p("AzxlcQMRiRGlgXQE6gYDAACQC8ADFgAdID/AZQAAAZAHCEIAHCnIAIGFQADC6gEAHQhVgLhRgKQpPhGqjBQQmNAmn8BXQiQmpgvnOg");
	this.shape_11.setTransform(120.3516,54.5205);
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#009DFF").s().p("AloESQiVg9h3gTIh+gRQhbgMhegTQAHgkAMkHQAhhFAbhLQAZhFAHgqQB/AkBSA4QAhAXBDAxQBCAtBPAkQI6D6D+grQDwgvAhjhQDvBpgYDJQgaDOhjBKQhlBNj9AkQggAEgmAAQkAAAntjJgAs8mYQgtgNgzgLQANgDAZgSQAsgeAFAMQARAOgIAxIAAAAgAuomyIAMACIgFABQgFAAgCgDgAucmwIAAAAg");
	this.shape_12.setTransform(402.7097,127.8036);
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#009DFF").s().p("AwZiqQFgg5GGglQKWhOJIBIQBQAJB1ARQAKAZAIBCQAJBCAKAZIgUEIIhigJQrkhgvBCFQirAaktAyQiJjkDOj4g");
	this.shape_13.setTransform(129.314,103.3345);
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#05104D").p("A2nrxQKfTOgBACQD9ArCKAmQCCAkDeBYIACAAQIcEBF1hcQFzhaB+iZQCAiYgakCQgakKhxi3Qh0izh2hmQh3hihagoQhbgkiiAbQihAekogKQkngHhhAKQBRAbBTAfQFiCBCDBDIE/CfQAGACACACQAFAAgEgIQAZAlAhAbQAIAZAUAjQB1CugBCoIABADQgCBrgMArQgyAlhmAjQieAAoDjCQgBgDgCABQhmgojSiyQg+gylek4QkLjuibhzQjbiih8gWQgBAMgRAWQgYAcgBADQgNBUgbgWQgFgDgEgGQgEgGgFgIIgHgPQAIAOAIAPg");
	this.shape_14.setTransform(374.7315,117.0818);
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#05104D").s().p("AgrKrIgCABQjdhYiDglQiJgmj9grQAAgBqezPQAEAGAEAEQAbAVANhTIAZggQASgVABgNQB7AWDcCjQCaBzELDuQFfE3A9AzQDTCxBlAoQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAABQIEDCCeAAQBmgjAygkQAMgrABhsIAAgCQABiph1iuQgUgjgJgZQghgagYgmQADAJgEgBIgJgDIk+igQiEhClhiBQhTgghRgbQBhgKEnAIQEoAKChgeQCigcBaAlQBaAoB4BiQB2BlB0C0QBwC2AbEKQAZECh/CZQh/CZlzBaQhhAYhuAAQkzAAmPi+gA26sAIgHgPIAQAdIgJgOg");
	this.shape_15.setTransform(375.7625,117.1262);
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#05104D").p("AOAhTQkggcmQA/QhTANknA0Qj8AtivAZQieAUieAeQntBXD3GXQGlhdJ0g1QEFgVFnAOQExAMEXAhICUjpIgClJQALgRhEitQhIi0ADgQQABgFguhpQgthpgCALQAAAAg0EZQg3EigFgHQgHgJgHgJQg6hNAcAcQAQAQAeAjQgIgBgIgBg");
	this.shape_16.setTransform(139.756,103.7223);
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#05104D").s().p("AuRCKQCegeCegVQCvgYD8guQEng0BTgNQGQg/EgAcQg6hNAcAcQAQAQAeAjIgQgCIAOATQAFAGA3kiIA0kZQACgLAtBpQAuBqgBAFQgDAQBICzQBECugLARIACFIIiUDpQkXggkxgNQlngOkFAVQp0A2mlBcQj3mWHthXg");
	this.shape_17.setTransform(139.7556,103.6899);
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#05104D").p("AA6AZQgngYg2gWQBmAFgJApg");
	this.shape_18.setTransform(452.8483,75.7902);
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0163AF").s().p("AgugXQBlAGgIApQgogYg1gXg");
	this.shape_19.setTransform(453.9825,75.9);
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#05104D").p("AjSheQgIAAgIgDQAugkAtgnQgyAxgZAdgArvhMIh8AGQCfheANBWIgqADQgBgCgFABgA39AMIg1ALQhRiiANgDQAOgDBrCdgAZ8CvIiTAdIhGgZQA9gyCcAug");
	this.shape_20.setTransform(202.951,30.7613);
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AWhCkQA9gzCcAvIiTAcgA54idQAOgDBrCeIg1AJQhRiiANgCgArBhdIgqADQgBgCgFAAIh8AHQCfhfANBXgAjkhwQAugkAtgnQgyAxgZAcQgIAAgIgCg");
	this.shape_21.setTransform(203.1536,32.325);
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0163AF").s().p("EgipAUyQgjjDCXlDID6kWQBrh7E2kWQEqkOFuj6QFpj3FLieQE1ibC0hLQCohEE3hjQGMiEMTidQCBHAAXHAQn2BqmDBwQqSCwoKEaQsIGhmwG2QnAG/lWBBQhWAShCAAQjEAAgbiVg");
	this.shape_22.setTransform(-207.3717,166.3064);
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#009DFF").s().p("A/ESzQh3gghki2Qhii0C3i5QBxDEDygrQD6g1G3m9QGqm1L8meQICkaKHitQGDhxFQhKQEcCcgrEGQkfA+i0AqQuvDnqMFrQqZFsm2GpQm5Gnj5A/QifAmhrAAQg8AAgsgMg");
	this.shape_23.setTransform(-203.4556,213.0899);
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#05104D").p("AgpAtQAfgoAmgmQhcAqAXAkg");
	this.shape_24.setTransform(-406.1742,240.1336);
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0163AF").s().p("AAlgmQgmAmgfAoQgXglBcgpg");
	this.shape_25.setTransform(-407.0942,240.7);
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#05104D").p("A9vlfQihAjhGBDQhFBGhKCHQhJCIgpDTQgmDUBLEBQBID5CuBfQCuBfF6g1QF8g1GYm3IACAAQG7miJqlLIAAgCQHYkOJVi3QJYi2GthGQBQnVnrBlQiiAgiXAmQuxDnqPFpQqeFtnkHEQgCAAAAADQmWFyiUA7QhrAFg8gPQgcgkgphjIAAgCQg/idAsjOQAFgkgBgeQAUgiAKgvQAAAKAEgDIDxkMIACgDQBihvEaj6QA5g0BKg/QhZAZkVB2QkOB2ijAgg");
	this.shape_26.setTransform(-212.8489,245.3887);
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#05104D").s().p("Egg8ARcQiuhfhIj5QhLkBAmjUQApjTBJiIQBKiHBFhGQBGhDChgjQCjggEOh2QEVh2BZgZQhKA/g5A0QkaD6hiBvIgCADIjxEMQgEADAAgKQgKAvgUAiQABAegFAkQgsDOA/CdIAAACQApBjAcAkQA8APBrgFQCUg7GWlyQAAgBABgBQAAAAAAAAQAAgBABAAQAAAAAAAAQHknEKeltQKPlpOxjnQCXgmCiggQHrhlhQHVQmtBGpYC2QpVC3nYEOIAAACQpqFLm7GiIgCAAQmYG3l8A1QiGAThtAAQjFAAhwg9g");
	this.shape_27.setTransform(-212.8489,245.3887);
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#05104D").p("AWNo6QAZgEAcgGQAQi2gOADQgNACgqC7gAKVlsIB2gpQi2gcAUBVIAogNQgBgCAFgBgA3OL4ICUgcIA4gxQhMgYiABlgACYi2QAJgDAFgEQg4gSg4gTQA7AZAnATg");
	this.shape_28.setTransform(-189.5,107.65,1,1,0,0,0,-0.1,0);
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("A0AKrIg4AxIiUAcQCAhlBMAYgAA4jiIBwAlQgFAEgJADQgngTg7gZgAMNmVIh2ApQgFABABACIgoANQgUhVC2AcgAXGr3QAOgDgQC2Ig1AKQAqi7ANgCg");
	this.shape_29.setTransform(-189.6358,107.6733);
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0163AF").s().p("Ak1CmIgihlQFIg/CchUQB+hJgPhEQARAJAjAzQAgA1AIB5Qj3BkhjAlQhlAnjDAlQgKgagBggg");
	this.shape_30.setTransform(-37.95,-308.075);
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#05104D").p("ABwh/QgugQg2gEIgFABQhggHhEAkQhJAngDA8QgCAOADAPQALArAxAkQBAAyBkAGQANACAQAAQBRAAA8giQA6geAOgug");
	this.shape_31.setTransform(142.1314,-266.132);
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#05104D").s().p("AgICSQhkgGhAgyQgxgkgLgrQgDgPACgOQADg8BJgnQBEgkBgAHIAFgBQA2AEAuAQIB6ClQgOAug6AeQg8AihRAAQgQAAgNgCg");
	this.shape_32.setTransform(142.1056,-266.132);
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#009DFF").s().p("EAgcAc/QiogsinghQjBgii6gVQg4gIh1gyIhpgwQgmAMg4ALQhvAYhZgBIkJgPQjGgEidgGQiMADigAHIgNAAIipARQhXALhSAMQirAXi2AdQjBAdjqAuQhbARhVATMgI6gudQAEgagkiPQgDgNADgPIh5n0IBQgQQF0g8CeBhQAgAUAZAbQBHCHiTB9QA4gJB4gPIAFgBICkgGQCdgEBvAAQC4AHDpALQCHAMCEAWQCGALCAAYIGmBmQJhPDkDoMQkDoNJUFqQKRJlECSmQDzRdieAAQgLAAgMgEg");
	this.shape_33.setTransform(136.6143,-155.2528);
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0163AF").s().p("AlDB+Qglh0ALg9QAMg7ANgQQAMBHCQAUQC0AUFEg+IAGBqQALAcAAAeQjGAlhqABQhBACh5AAIi6gBg");
	this.shape_34.setTransform(-97.3161,-295.435);
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#05104D").p("ADfhJQgDgOgIgPQgZg2hSgKQhOgIhVAqIgFABQhZAsgtBDQgdAvADAqQACAUAIAPQAcA3BPAIQBGAJBJgdQAMgFAPgIQBZgqArhHQAhgygGgsg");
	this.shape_35.setTransform(-250.1431,-191.1508);
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#05104D").s().p("AhqCnQhPgIgcg3QgIgPgCgUQgDgqAdgvQAthDBZgsIAFgBQBVgqBOAIQBSAKAZA2QAIAPADAOQAGAsghAyQgrBHhZAqQgPAIgMAFQg4AWg2AAQgQAAgRgCg");
	this.shape_36.setTransform(-250.1431,-191.1508);
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#009DFF").s().p("A8HWfQg50XBDkXQBGkXBLhcQBLhcAXgvIBNhkICLiTQBshZBZhNIDJiZIDZiTQByhHB1g7QB2hGB2g8QC9hWC/hVQBpgpCRg2ICbg3IAEgBQBTgVBagWQi2g+APiXQAPglAVgcQBviVFwhRIBQgPIBJH+QAHALADAPQASCQAOAZMAI5AudQhOAMhiATQj7AwiuApQioAlizAsIilAqIikAuIgMAFQiCAtiaA5Qi3BQiOA8QifBJjaBpQi+Bhi3BoQitBdieBjQiVBfiHBjQg1AyguAAQjVAAgyw0g");
	this.shape_37.setTransform(-184.5225,-87.5638);
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0163AF").s().p("AmpUbQgUiagUkhQgOkZA+sMQAlm+D7nkQC4llExl9QgXAvhMBcQhKBchGEXQhEEYA6UXQA9UbEskZIpoJkQjhiog0mHg");
	this.shape_38.setTransform(-375.1798,33.575);
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#05104D").p("A0MzXIhfB5IAEgGQsMPRg+NUQg/MjAPEpIABAEQAUEqAVCjIAAADQBIIYFBDdQBeBEBzgNQBygLBLhYIFemOQB6hgBihKQB0hUCWhhQACgBAAgCQCghhCYhTQAFgBAEgDQC7hpCkhVQCEg/DphuQCkhECVhDIEChcQAIgCAIgEICkguQBKgTA/gMIARgEQDCgxCugiIACAAQDagsDkgxIB4gcIhvpEIiHAfQipAkkLA3IgCAAQjJAnjGAyQhWAShSAWIiWArQgYAGgTAFIkgBnIgQAIQimBJicBAQgEAEgGAAQinBPjVBmIgHAEQjKBoi2BmQisBeioBoIgFABQicBmiPBnQiFBkh9BkIgkAiIhuCBQgNgxgJg+QgSiPgUkZIABAFQgNkPA6ruQBFq7KHsoIAEgGIBEhYIBvh0QBbhMBYhMIC5iQQBvhIBrhLQBng9BdgxQALgEAMgIQBmg9Bug5IFnifQACgBACgCIAHgCQCthEC7hCQBJgSA1gwQAWgTARgYQAbgjAQgpQAXg8gHhEQgDgrgHghIgEgTQABgEAAgHIAAgCQAXgIAhgNIBEgUQA4gMAkgIIAkgHQAYgCAWgHIBDgQIhrpyQjXAligA8QidA9hPA5QhKA4hMBnQgoA1gUA9QgSA9gDApQAAACgCABQgBAqgDAOIjcBVQiVBBjsBqQgDADgHABQiDBFh1BFQiABChyBHQgDACgGACQhrBLhvBIQgDAFgHAFIjOCdQgDAEgFACQhyBihTBEg");
	this.shape_39.setTransform(-223.9295,-59.1021);
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#05104D").s().p("EgctAvVQlBjdhIoYIgBgCQgVijgTkqIgBgFQgPkoA+sjQA+tVMNvRIgEAGIBfh5IClisQBShDByhiQAGgDADgEIDNidQAIgFADgEQBuhJBrhKQAHgCADgDQByhGCAhCQB1hGCDhEQAGgBADgDIGCisIDbhVQADgNACgrQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQADgpASg9QAVg+Aog0QBLhnBLg5QBPg5Cdg8QCfg9DXgkIBsJyIhDAPQgXAIgXABIglAHIhbAUIhFAVQghANgXAHIABADIgBAKIAEATQAGAhADArQAHBEgWA9QgQApgbAiQgSAYgWATQg1AxhIASQi7BCitBEIgIABIgEADIlmCfQhuA6hnA9QgLAHgMAFQhdAwhnA+QhrBLhuBIIi6CPQhYBMhbBMIhuB1IhEBYIgEAGQqIMohFK7Qg5LuAMEPIgBgFQAUEYATCQQAIA+ANAxIBviBIAkgjQB8hkCFhjQCPhnCchmIAFgBQCohoCtheQC1hmDLhpIAHgDQDUhnCohOQAFgBAEgEQCdhAClhIIAQgIIEhhnQASgGAZgFICVgsQBTgWBVgRQDHgzDIgmIADgBQELg2CpglICGgfIBvJFIh3AcQjkAwjaAtIgDAAQiuAhjBAyIgRADQg/AMhKATIikAvQgIAEgJABIkCBcQiVBEijBDIluCtQikBVi7BpQgDADgGACQiYBTifBhQAAAAAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQiWBih0BUQhiBJh7BhIleGOQhKBYhzAKQgTACgSAAQhdAAhOg5g");
	this.shape_40.setTransform(-223.9702,-59.0639);
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#05104D").ss(18).p("AJIBsQkJiOkwgsQkvgtknA+");
	this.shape_41.setTransform(243.475,-213.3489);
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#843D7E").s().p("ApHhCQEng+EvAtQEwAsEJCOg");
	this.shape_42.setTransform(243.475,-212.8091);
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#843D7E").s().p("AIcH/QljgamuhpQnsh4g8hyQiDj1AqikQApieDCg7QDCg7E9AzQFIA1GcCkQCBAzBUCIQBQCAAECOQAECWhUBYQhUBYiYAAIgpgBg");
	this.shape_43.setTransform(254.3228,-139.7451);
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E89FED").s().p("AIcH/QljgamuhpQnsh4g8hyQiDj1AqikQApieDCg7QDCg7E9AzQFIA1GcCkQCBAzBUCIQBQCAAECOQAECWhUBYQhUBYiYAAIgpgBg");
	this.shape_44.setTransform(254.3228,-161.9951);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	this._renderFirstFrame();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-454.3,-371.6,978.5,735.7);
(lib.Tyween1 = function(mode,startPosition,loop,reversed) {
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
(lib.Syymbol18 = function(mode,startPosition,loop,reversed) {
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
}).prototype = getMCSymbolPrototype(lib.Syymbol18, new cjs.Rectangle(-49,-33.4,94.6,66.5), null);
(lib._34trtgg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#009DFF").s().p("AgWCiQhwgBhlgLQiOgPhggiQgdgKgYgNQgogVgUgXIACgFQAPgkAfgeQALgJAQgMQANgUAQgMQAogiA0gLQAZgFAdACQAxgQAlgGQAzgEBVAGID5ATQCAALA9gEIBDgDQAmgBAcAGQA+AOAkAyQAoA0gKA+IAAACQghAbg+AYQigA4kkAFg");
	this.shape.setTransform(132.2081,-210.792);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#05104D").ss(4,1,1).p("AAFAJIgJgQ");
	this.shape_1.setTransform(-190.45,226.2);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
	this._renderFirstFrame();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-192.9,-227,383.8,456.1);
(lib._6t54 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AEVBgQgtg/gHhdIgDgbIAzgFQCcgPCDgcQAigHAsgLIAEA4QAHBeglBFQglBGg6AFIgKABIh+AMIgKAAQg0gBgqg5gAl8CaIh/gMIgKgBQg5gFglhGQglhFAHheIADggQDPAmDRALIgBAUQgHBdguA/QgqA5g0ABIgKAAg");
	this.shape.setTransform(0.1,-35.9755,1,0.9468);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5B5B5").s().p("ADuCSQhAg+gHhcIgCgdIBdgGIACAbQAHBdAuA/QApA5A0ABIgTACIgRAAQhKAAg6g2gAk7DIIgTgCQAzgBAqg5QAug/AHhdIABgUQAvACAvABIgCAZQgGBchBA+Qg6A2hKAAIgRAAgAIpC5QA6gFAkhGQAmhGgIhdIgDg4IBggYIAEBJQAHBdg3BHQg3BIhWAHIgqADgAoCC3QhUgHg4hIQg3hHAGhdIADgrQAxAKAwAJIgCAfQgIBdAlBGQAlBGA6AFIAKABgAO6g0QgogpgKg5QC8guCDgDQA+gCB2AKQgBBHgtA1QgwA5hGADIikAGIgGAAQhCAAgxgzgAw2gBIikgGQhGgDgwg5QgggngKgxQAygGAxgEQChgNBwARQAsAGA7APIASAFQgNAvgiAkQgxAzhCAAIgHAAg");
	this.shape_1.setTransform(-3.4499,-40.1643,1,0.9468);
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#99D8FF").s().p("EAgwAD7QiPibjFhJQjJhJjOAgQhbAOiFAmIjdBBQjfA6j4AeQnCA1nbhKQidgZkshUQkvhUiYgZQjEggioAfQjFAlh+B2QglAjgugEQgpgEgfggQgggfgDgoQgCgsAkgiQCuikECgxQDegqEKAuQCRAaFIBbQEuBTCuAYQHfBAHWhQQBugTB/ggQBigZCHgoQCGgnBdgSQB+gYBrADQDVAHDFBaQDFBaCQCcQAiAlgFAuQgDApggAgQggAfgnADIgGAAQgpAAgggjg");
	this.shape_2.setTransform(5.58,52.3996,1,0.9467);
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#05104D").s().p("AjvKSQkjgWikgiQhBgNi0g9QjBhChxgcQmUhikSCDQhYA7gnA3QgUAcgCAQQAMkaBnlBQBTkDBFhgQCPjJCyhUQCmhPCqAkQF1BNEFAgQEQAiDygDQDmgCEaglQDggdGVhIQCtgfCkBNQCxBTCODHQBMBnBSDoQBrEwALEYQgEgGgWgSQgqgkhag7QkSiDmUBiQhwAcjCBCQizA9hBANQi1AmitARQiIANiyADQhxgEiRgLg");
	this.shape_3.setTransform(-1.2753,-10.029,1,0.9468);
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#05104D").ss(16).p("EApQgBkQhLjDglhaQhHirg+h1Qk1pIoLh/Qi0gsjWAKQhIADhZALQhbALgjAEQknAdhfAIQkKAZjSANQjQgNkLgZQhggJkmgcQhNgKgwgFQhagLhHgDQjWgKi0AsQoLB/k1JIQg/B2hGCqQgpBjhHC6QhBCoggCbQgqDEAOCdQAOCuAfB5QAaBmA1B8QB0EJCsAwQCLAnDKhlQEEiBDLgvQEHg8DtA5QHSBuIPAIIAAAAIBOAAIAAAAQIPgIHShuQDtg5EHA8QDLAvEECBQCjBRC6hbQCfhPBZiWQCQjygTmtQgIiigeifQgZiIgfhRg");
	this.shape_4.setTransform(0.1201,0.1261,1,0.9086);
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1294E4").s().p("EgkPAWCQisgwh0kJQg1h8gahmQgfh5gOiuQgOidAqjEQAgibBBioQBHi6AphjQBGiqA/h2QE1pIILh/QC0gsDWAKQBHADBaALIB9APIGGAlQELAZDQANQDSgNEKgZIGGglIB+gPQBZgLBIgDQDWgKC0AsQILB/E1JIQA+B1BHCrQAlBaBLDDQAfBRAZCIQAeCfAICiQATGtiQDyQhZCWifBPQi6BbijhRQkEiBjLgvQkHg8jtA5QnSBuoPAIIAAAAIhOAAIAAAAQoPgInShuQjtg5kHA8QjLAvkECBQiTBJhwAAQgsAAgmgLg");
	this.shape_5.setTransform(0.1201,0.1261,1,0.9086);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	this._renderFirstFrame();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283.3,-150.6,576.6,287.79999999999995);
(lib.Syymbol25 = function(mode,startPosition,loop,reversed) {
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
	var mask_graphics_5 = new cjs.Graphics().p("AGpDOQhegJgsguQgtgugNgqQgMgqgEguQgDgogDgXQAUgfgNgiQCDgzB4gEQB4gDChAeQAJA8gBAyQgBAygEAkQgFAlghA5QgiA4haAdQgwAPg9AAQgZAAgcgDgApKDCQhagdghg4Qgig5gEglQgFgkgBgyQAAgyAIg8QChgfB4AEQB4AECDAzQgMAhAUAgQgFAXgDAoQgDAugNAqQgMAqgsAuQgtAuheAJQgcADgZAAQg9AAgwgPg");
	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_graphics_5,x:-0.25,y:3.3006}).wait(1).to({graphics:null,x:0,y:0}).wait(189));
	// Layer_3
	this.instance = new lib.Tyween1("synched",0);
	this.instance.setTransform(-41.65,-0.85);
	this.instance._off = true;
	var maskedShapeInstanceList = [this.instance];
	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({_off:true},1).wait(189));
	// Layer_1
	this.instance_1 = new lib.Syymbol18();
	this.instance_1.setTransform(-44.1,0.15,1,1,0,0,180);
	this.instance_2 = new lib.Syymbol18();
	this.instance_2.setTransform(44.1,0.15);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},5).to({state:[]},1).wait(189));
	this._renderFirstFrame();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.7,-33.2,179.4,66.4);
(lib.Twthytheen4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGlgrInTBgIgBAAIAAAAIlxBIICHswIj2AkIhTl+IBYgTIBBEsIEdgqIiGMqIDyguIgBAAIIzh1IBvNQIACAAIguFog");
	this.shape.setTransform(-230.5625,18.2875);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AixNlImYrtILihmIhMieIgdAFICHsxIj1AkIhTl9IBYgTIBAErIEdgqIiGMrIDyguIgBAAII0h2IBvNQIACABIguFnIiQxMInUBiIgBAAIAAAAIj5AwIB4D5IrcBkIGHLNIq1FZIABADIlKA9g");
	this.shape_1.setTransform(237.9375,-28.375);
	this.instance = new lib.Syymbol25("synched",5);
	this.instance.setTransform(-12.65,-5.75,5.0013,5.0013,-4.9488,0,0,0.2,0.3);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));
	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(9).p("Ao2wWIBKFUIEKgnIiHMtIEyg7IIDhqIBpMkIACgP");
	this.shape_2.setTransform(-212.8165,1.288);
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#873E7F").s().p("EgR8AgDQlAhAkUiEQkdiIjRjCQnOmugCphQgnkGCFgLQBmgJEZCcQBTAtC7BsQCyBlCBBBQF8C/EmA1QCzAJGWAtQEwAiCMgKQDIgOB6hlQCIhvBUj6QgkhbmHiWQh+gxkIhdQk2hsiCgvQocjHkQiiQlvjbgGjUQiblIKUjVQIPirOCjGQOEjGK5hyQK6hyFMAxQlZH8kgEKQkgEKgbDXIgDAAQALP6iBE1Qi1GxlUHFQlUHGqTC3QktBUlJAJIhQACQkcAAkVg5g");
	this.shape_3.setTransform(-195.5084,-18.0445);
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#873E7F").s().p("AB7XOQkogDljizQlki0ibiEQiaiDh8ibQh8iahBh0QhBh0g1hJQgyhGgwhcQgjhCgwhoQijlrhwlXQgcgCgjAFIhKAMQgtAHgcABQhCADg7gaQg+gbglgzQgngzgEhDQgFhEAjg1QAlg5BNgeQA6gXBagMQAmgGAkgDQgDhfArg/QAuhEBYgQQBZgQBDAvQA2AnAjBNQAUAvAaBjIAVBPQBjBYBOCYQAlBJAzCBQA7CWAYA2QDAGhGxFmQEODfEWB6QE9CLExgFQDCgDDvhBQDxhCDhhpQBngwBHguQBag5A9hDQA/hFAzhiQAnhLAohvQCHl3AWlrIgDgFQiohFg/h0QgmhFAIhQQAEgpAQggIABgDQAQgfAcgYQAogiA6gKQA1gKA5ANQAwALA2AbQAnAUg9AsQgzAmgdAkIgKAOQgGAJAFAJQAmASCOCZQCOCaBhCeQBhCdAbEHQAcEFhrECQhrEBjADTQi/DTj2CEQi/Bnj9BEQi6AykcAtQieAahoAKQh5ALjlAAIhZAAg");
	this.shape_4.setTransform(185.738,17.2321);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));
	this._renderFirstFrame();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-470,-228.8,911.7,421.5);
(lib.egg34rtghyr = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_20
	this.instance = new lib._34trtgg("synched",0);
	this.instance.setTransform(-110.55,-329.05);
	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-344.7},4,cjs.Ease.get(1)).to({startPosition:0},12).to({_off:true},1).wait(3).to({_off:false},0).to({startPosition:0},1).to({y:-329.05},11,cjs.Ease.get(1)).to({startPosition:0},15).to({_off:true},1).wait(37));
	// missing_tootth
	this.instance_1 = new lib.tththrb("synched",0);
	this.instance_1.setTransform(20.45,300.9);
	this.instance_2 = new lib._6t54("synched",0);
	this.instance_2.setTransform(27.2,338.35,0.9273,0.7267,0,0,0,0.2,0.4);
	this.instance_2._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,regX:0.2,regY:0.4,scaleX:0.9273,scaleY:0.7267,x:27.2,y:338.35},1,cjs.Ease.get(1)).wait(21).to({_off:false,regX:0,regY:0,scaleX:1,scaleY:1,x:20.45,y:279.45},1).to({y:300.9},9,cjs.Ease.get(1)).wait(1).to({regX:-0.8,regY:23.8,x:19.65,y:324.7},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:20.45,y:300.9},0).to({_off:true},1).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:false},1,cjs.Ease.get(1)).wait(1).to({regX:0.1,regY:0.1,scaleX:0.8847,scaleY:0.9253,x:27.1,y:322.1},0).wait(1).to({scaleX:0.8592,scaleY:1.0444,y:312.45},0).wait(1).to({regX:0.2,regY:0.2,scaleX:0.8507,scaleY:1.0841,x:27.15,y:309.5},0).to({startPosition:0},12).to({_off:true},1).wait(3).to({_off:false},0).to({startPosition:0},1).to({regY:0.4,scaleX:0.9273,scaleY:0.7267,x:27.2,y:302.6},1).to({_off:true,regX:0,regY:0,scaleX:1,scaleY:1,x:20.45,y:279.45},1).wait(62));
	// crooked_hat
	this.instance_3 = new lib.thhj("synched",0);
	this.instance_3.setTransform(28.5,-324.35,1,1,6.4746);
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:0.1,regY:-0.1,scaleY:0.9535,rotation:9.6351,x:25.2,y:-385.75},4).to({regX:0,regY:0,rotation:2.7039,x:7.5,y:-385.65},4,cjs.Ease.get(-0.99)).to({scaleY:1,rotation:6.4746,x:28.5,y:-341.95},6,cjs.Ease.get(1)).to({startPosition:0},2).to({_off:true},1).wait(3).to({_off:false},0).to({startPosition:0},1).to({y:-324.35},11,cjs.Ease.get(1)).to({startPosition:0},15).to({_off:true},1).wait(37));
	// Layer_20
	this.instance_4 = new lib.tyttyTween2("synched",0);
	this.instance_4.setTransform(-110.55,-329.05);
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:-353.75},4,cjs.Ease.get(1)).to({startPosition:0},12).to({_off:true},1).wait(3).to({_off:false},0).to({startPosition:0},1).to({y:-329.05},11,cjs.Ease.get(1)).to({startPosition:0},15).to({_off:true},1).wait(37));
	// glasses_25
	this.instance_5 = new lib.Twthytheen4("synched",0);
	this.instance_5.setTransform(30.1,21.05,1,1,9.4376,0,0,0.1,0.1);
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:0,regY:0,rotation:6.7254,x:36.35,y:-16.25},4,cjs.Ease.get(1)).to({startPosition:0},12).to({_off:true},1).wait(3).to({_off:false},0).to({startPosition:0},1).to({regX:0.1,regY:0.1,rotation:9.4376,x:30.1,y:21.05},11,cjs.Ease.get(1)).to({startPosition:0},15).to({_off:true},1).wait(37));
	// eyes1
	this.instance_6 = new lib.thyrtjhm("synched",0);
	this.instance_6.setTransform(12.3,134.8);
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:0.2,regY:0.1,scaleX:0.9496,scaleY:1.2325,x:12.5,y:94.55},4,cjs.Ease.get(1)).to({startPosition:0},12).to({_off:true},1).wait(3).to({_off:false},0).to({startPosition:0},1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:12.3,y:134.8},11,cjs.Ease.get(1)).to({startPosition:0},15).to({_off:true},1).wait(37));
	this._renderFirstFrame();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-541.1,-745.1,1115.7,1336.5);
// stage content:
(lib._50_frown = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// _50_frown
	this.instance = new lib.egg34rtghyr("synched",0);
	this.instance.setTransform(121.85,227.7,0.182,0.182,0,0,0,39.9,-1.7);
	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:213.3,startPosition:1},1).to({y:234.9,startPosition:2},1).to({regX:40,regY:-1.6,scaleX:0.1688,scaleY:0.1883,y:200.5,startPosition:3},1).to({regX:39.9,regY:-1.7,scaleX:0.182,scaleY:0.182,y:210.9,startPosition:6},3,cjs.Ease.get(1)).to({mode:"single",startPosition:16},10).to({mode:"synched",startPosition:20},31).to({y:227.7,startPosition:34},14,cjs.Ease.get(1)).wait(14));
	this._renderFirstFrame();
}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(130.8,236.8,88.39999999999998,103.69999999999999);
// library properties:
lib.properties = {
	id: '66EF194A2F202A6D3894F4299C9ECB65',
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
an.compositions['66EF194A2F202A6D3894F4299C9ECB65'] = {
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
