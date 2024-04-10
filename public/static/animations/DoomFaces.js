;(function (cjs, an) {
  var p // shortcut to reference prototypes
  var lib = {}
  var ss = {}
  var img = {}
  lib.ssMetadata = []
  ;(lib.AnMovieClip = function () {
    this.actionFrames = []
    this.ignorePause = false
    this.gotoAndPlay = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel)
    }
    this.play = function () {
      cjs.MovieClip.prototype.play.call(this)
    }
    this.gotoAndStop = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel)
    }
    this.stop = function () {
      cjs.MovieClip.prototype.stop.call(this)
    }
  }).prototype = p = new cjs.MovieClip()
  // symbols:
  // helper functions:
  function mc_symbol_clone() {
    var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed))
    clone.gotoAndStop(this.currentFrame)
    clone.paused = this.paused
    clone.framerate = this.framerate
    return clone
  }
  function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
    var prototype = cjs.extend(symbol, cjs.MovieClip)
    prototype.clone = mc_symbol_clone
    prototype.nominalBounds = nominalBounds
    prototype.frameBounds = frameBounds
    return prototype
  }
  ;(lib.Symbol31 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(0, 0, 0, 0)
  ;(lib.Symbol18 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#05104D')
      .s()
      .p(
        'AhKEVQgygTg8g0Qg/g4gOhnQgKhVgCgLQgCgIgOgHQgQgIgBghQgBgFACgbQADgagXgWQgXgWgngBQgjgBgMABQgMgkAMgkIATAAQAkAAAUADQAVADATAHQAUAHAbATQAaAUACAAQASAAAigTQAqgVArgKQArgKBSgJQBUgJBMAFQAwADBEAMIABAAQAhAHAnAKQA9AQAGAEQAHAGAAAeQAAAYgDAHQgEAIgnAVIgMAHIABBJQAAAogDAiIgEAuQgHBdhNBHQhWBPh/AAQhhAAg5gUgAEnh/IgBgBIAAABIABAAIAAAAg'
      )
    this.shape.setTransform(-2.016, -0.1622)
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))
    // Layer_2
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f()
      .s('#FFFFFF')
      .ss(7, 0, 0, 3)
      .p(
        'AmYj8QALgBAkABQAmABAXAWQAXAWgCAbQgCAaAAAFQACAhAPAIQAPAHABAIQADALAKBVQANBnA/A4QA8A0AzATQA3AUBjAAQB/AABWhPQBMhHAHhdQADgaABgTQADgjAAgo'
      )
    this.shape_1.setTransform(-4.575, 4.206)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f()
      .s('#FFFFFF')
      .ss(7, 0, 1)
      .p('AFxgUQhEgMgwgDQhMgFhTAJQhUAJgqAKQgrAKgqAVQgiASgSAAQgCAAgagTQgagSgUgHQgUgHgUgDQgUgDglAAQgIAAgLAA')
    this.shape_2.setTransform(-9.5493, -26.1372)
    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f()
      .s('#FFFFFF')
      .ss(7, 1, 1)
      .p('AAQBrIgBhJQAGgEAHgDQAmgVAEgIQAEgGAAgYQAAgegIgGQgGgEg8gQQgngLghgGIgBAA')
    this.shape_3.setTransform(34.75, -17.55)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }] })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-49, -33.4, 94.6, 66.5), null)
  ;(lib.Symbol14 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // Layer_4
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f()
      .s('#05104D')
      .ss(3, 1, 1)
      .p(
        'AMKAAQAABUggBKQgaA5gsA0QhoB0iZBFQi4BSjrAAQi4AAiSgxQiTgyiRhyQibiLAAi2QAAjcDkidQDkicFBAAQFCAADkCcQADACADACQDeCbAADag'
      )
    this.shape.setTransform(-123.525, -11.975)
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))
    // Layer_2
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#873E7F')
      .s()
      .p(
        'AADHGIgFAAIgHAAIgVgBIAAgBIiSgLQhTgMhJgYQiTgyiShzQAHABAKADQgfgbgbgfQAIABgigoQgSgXgPglIgKgJQghhLAAhSQAAjbDfibQBOBIhSAjQhRAkgdAmQgcAngTBUQgTBTA6BXQA7BWBCA4QBCA4A9AmQA+AmBwAfQBvAfArAEQAqAEA1gCIBegEQAogDBqgeQBqgfA+gmQA9gmBCgrQBCgrA7g/QA6g+gLh5QgNh8gjgjQgkgkhRglQhSgkBOhIQDfCbAADbQAABSghBLIgKAJQgPAlgSAXQgiAoAIgBQgbAfgfAbQAKgDAGgBQiRBziTAyQhJAYhTAMIiSALIAAABIgVABIgHAAg'
      )
    this.shape_1.setTransform(-123.5453, -3.9847, 1.0215, 1.0215)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#E89FED')
      .s()
      .p(
        'Ah9HyQgbAMhpgnQhpgng/gnQg/gohDg6QhEg6g8haQg7hagFhbQgEhMAQgwIgDgBQA6hxCBhZQDbiXFJAAQFIAADpCjIAGAEQhQBLBbAYQBcAYAhBkQAhBjAIAoQAHAoABAjQgCB6hEAqQhEArhEBdQhEBdlUAZQg0ADguAAQhdAAhFgPg'
      )
    this.shape_2.setTransform(-123.14, -15.8611)
    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics.f('#E89FED').s().p('AgHAOQASgVAPglIAKgJQgaA4grAzIAAAAQgIAAAigog')
    this.shape_3.setTransform(-52.5003, 9.2753)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }] })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-202.8, -67.2, 158.60000000000002, 110.2), null)
  ;(lib.Tween12 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#05104D')
      .s()
      .p(
        'ARoBaIgRgFQg3gOgfglQgXgbgCgZQAAgJADgJQAJgjAsgOQArgOA0APIAEAAQA3AQAfAiQAWAZACAYQACAMgDAKQgKAjgsANQgWAIgaAAQgQAAgSgDgAy6BVQgrgNgKgjQgDgKACgMQACgYAWgZQAfgiA3gQIAEAAQA0gPArAOQAsAOAJAjQADAJAAAJQgCAZgXAbQgfAlg3AOIgRAFQgSADgQAAQgaAAgXgIg'
      )
    this.shape.setTransform(0, -0.0074)
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-126.6, -9.3, 253.2, 18.6)
  ;(lib.Tween11 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f()
      .s('#05104D')
      .ss(14, 1, 1)
      .p('AFTA+QgSg5hagfQhSgeh7gEQgNgBgNAAQgHAAgHAAAlSA+QASg5BagfQBSgeB7gE')
    this.shape.setTransform(0, -9.525)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#0163AF')
      .s()
      .p(
        'AASBgIgGgBIAAABIgdAAIgBAAQhaAAgugFQg3gGhYgcQhYgdgUg8QgVg+AcAAQAcgBBoAUQgNAkA1ASQA0ASBSABIBoABIBRgBQBSgBA0gSQA1gSgNglQBogTAcAAQAcABgVA9QgUA9hYAcQhYAdg3AGQguAFhaAAg'
      )
    this.shape_1.setTransform(-0.0284, 6.1361)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#009DFF')
      .s()
      .p(
        'AAIBVIgEAAIgDAAIgLAAIgBAAQhAgBg1gGQhOgIg0gRQgQgGgMgGQgWgLgLgMIABgDQAIgSARgPIAPgLQAHgLAJgGQAVgSAdgFQAPgDAOABQAcgJATgCQAbgDAvAEICIAKQBIAFAfgCIAkgBQAVgBAPADQAiAIAUAZQAWAbgGAgIAAABQgSAPgiAMQhXAdifADIgNAAg'
      )
    this.shape_2.setTransform(-0.42, -1.7521)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-41.5, -22.7, 83, 38.4)
  ;(lib.Tween10 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics.f().s('#05104D').ss(4, 1, 1).p('AADAFQgDgFgCgE')
    this.shape.setTransform(-176.975, 109.5)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#0163AF')
      .s()
      .p(
        'AbsN9QETlvh+paIiPqzQgEgbgFgPQCbCsCLD+QCyFGABEFQAAEDiRCcQiQCbgpAkQgqAhhnA7IAFgJgA93MqQgpgkiQibQiRicAAkDQABkFCylGQCLj+CbisQgFAPgEAbIiQKzQh9JaETFvIAFAJQhng7gqghgAbWs+Qg0gugSgZQAmAjAkAoIgEgEgA6PuFQgSAZg0AuIgEAEQAkgoAmgjg'
      )
    this.shape_1.setTransform(0, 19.75)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#009DFF')
      .s()
      .p(
        'AAAS/QqAAbt1ikQj7gNAFAaQkTlvB9pbICQqyQAEgbAFgOQAFgkgFAiQAIgKAHgGIAEgEQA0guASgZQFEkUHqiQQDuhFIEgUQANgDA+gDQAXgBANADQAOgDAXABQA+ADANADQIEAUDuBFQHqCQFEEUQASAZA0AuIAEAEQAHAGAHAKQgEgiAFAkQAFAOAEAbICPKyQB+JbkTFvQAFgaj7ANQr6CNpGAAQhdAAhZgEgASLkGQAXAAAVgGIABgBIABAAIAAAAIABgBQAsgNAKgjQACgHAAgHIgBgIQgCgZgWgZQgfgig3gQIgEAAIgBAAIgEgCQgYgFgWgBIgBAAIAAAAQgVABgUAFIgCABQgsAOgJAjQAJgjAsgOIACgBQAUgFAVgBIAAAAIABAAQAWABAYAFIAEACIABAAIAEAAQA3AQAfAiQAWAZACAZIABAIQAAAHgCAHQgKAjgsANIgBABIAAAAIgBAAIgBABQgVAGgXAAIgBAAIAAAAQgOAAgPgCIgBAAIgEgBIgRgFQg3gOgfglQgXgbgCgaQAAgJADgJQgDAJAAAJQACAaAXAbQAfAlA3AOIARAFIAEABIABAAQAPACAOAAIAAAAIABAAgAyJkGQAOAAAPgCIABAAIAEgBIARgFQA3gOAfglQAXgbACgaQAAgJgDgJQADAJAAAJQgCAagXAbQgfAlg3AOIgRAFIgEABIgBAAQgPACgOAAIAAAAIgBAAQgXAAgVgGIgBgBIgBAAIAAAAIgCgBQgrgNgKgjQgCgHAAgHIABgIQACgZAWgZQAfgiA3gQIAEAAIABAAIAEgCQAYgFAWgBIABAAIAAAAQAVABAUAFIACABQAsAOAJAjQgJgjgsgOIgCgBQgUgFgVgBIAAAAIgBAAQgWABgYAFIgEACIgBAAIgEAAQg3AQgfAiQgWAZgCAZIgBAIQAAAHACAHQAKAjArANIACABIAAAAIABAAIABABQAVAGAXAAIABAAIAAAAg'
      )
    this.shape_2.setTransform(0, -0.0979)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-224.1, -122, 448.29999999999995, 243.8)
  ;(lib.Symbol6 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#000000')
      .s()
      .p(
        'AMKGOQhHgHhNgPQhOgQhCgXQhDgYiGg+QiHg+iOgDQiKgDjgBhQjhBgjPATQh8ALiBAAQnBAAj9hRQlShsAAj9QAAh2BChVQBShqCdAAQBqAABEAxQApAeAQAqQBIgIBegIQMDhBB4gHQArgCCIguQCDgtA3AAIA5AKQA6AJAGAAQAEAAAVgGQAagHANgCIAZgCIAhgCQA1AAAkAMQATAGAqAWQAoAVAlAKQA4AQBSAGQA7AEAvALQMSguEMgBQEjgBBVCCQAdAuAQA3QAMAqAAAcQAAD3k5BwQj+BbnRAAQjIAAhGgIg'
      )
    this.shape.setTransform(-5.825, 0.025)
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))
    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-213.8, -40.5, 416, 81.1), null)
  ;(lib.Symbol5 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f()
      .s('#FFFFFF')
      .ss(10, 1, 1)
      .p(
        'AhmjYQgYgDjiAEQj8AEAXkCQAShEAlg4QACgDAFgBQEThND0AbQBZAJCOgKQCOgKB3AvQB4AugnDXQgIArkhFKQgFACgCACQhcBdg4BzQBEgCBBgHQDEgTBwBrQABAFACAFQA2CqhjB3QgcAMgdADQjJAbi6gDQjfgEjbAHQijAGgvimQgYg3DKj8QC0jgBfiRgAhjjXQAAAAgDgB'
      )
    this.shape.setTransform(58.5256, 65.5445)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#F54188')
      .s()
      .p(
        'ApAHvQgYg3DKj8QC0jgBfiRQhFBwADgDQA+g9AchSIgDgBQgYgDjiAEQj8AEAXkCQAShEAlg4QACgDAFgBQEThND0AbQBZAJCOgKQCOgKB3AvQB4AugnDXQgIArkhFKQgFACgCACQhcBdg4BzQBEgCBBgHQDEgTBwBrIADAKQA2CqhjB3QgcAMgdADQjJAbi6gDQjfgEjbAHIgLAAQiaAAgtigg'
      )
    this.shape_1.setTransform(58.5256, 65.5445)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-4.9, -5, 126.9, 141.1), null)
  ;(lib.Symbol4 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#3F0437')
      .s()
      .p(
        'A9QJ/QlsjTAAntQAAjlBHimQBZjPCoAAQAeAAAaAHQCKhEGdgTQL6gkCvAAIDqAAIA9ATQA/ASAGAAQAFAAAWgLQAcgNAOgFIAbgEIAjgEQA5AAAnAYQAUALEkgkQEjglFGBXQFFBYE3ALQAzggBBAAQCwAABbD/QAgBYARBsQANBRAAA2QAAHjlRDZQkRCxn0AAQjXAAhMgOQhMgOhTgfQhUgfhHgtQhHgtiRh5QiQh6iagFQiUgFjxC7QjxC8jgAlQiEAViLAAQnkAAkPidg'
      )
    this.shape.setTransform(0.025, -0.561)
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))
    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-223.6, -80.1, 447.29999999999995, 159.2), null)
  ;(lib.Symbol2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics.f().s('#0163AF').ss(11, 1, 1).p('AwhrKQbrDPFYTG')
    this.shape.setTransform(13.925, -21.475)
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))
    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-97.4, -98.4, 222.7, 153.9), null)
  ;(lib.Symbol1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f()
      .s('#05104D')
      .ss(21, 1, 1)
      .p('A4ANsQG3gzDUAjQDTAiCnAZQCnAZKjDBQDZA+E3gqQE4grBphiQBphiAshIQAthJAUgnQAUgoAQg7QAPg8gPhwQgJhJgTitQi3uPhXnf')
    this.shape.setTransform(0.0439, -7.5253)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#009DFF')
      .s()
      .p(
        'AFPG6QqjjCingZQingZjTgiQjUgim3AyIAAlxQBegFBmgCIAAgDIAAACIAHAAIAJABQB7ADByAGIBgAGIACAAIgBAAQCXAKCGAQQHYAsEUBfQEWBfA8ARQA9AQDhANID9AHQBggRA5gMQBSgRBhgmQBignBYhjQAJgLAoiDQAZhRgKikQATCtAJBJQAPBwgPA8QgQA7gUAmQgUAogtBIQgsBIhpBjQhpBik4AqQh/ARhvAAQiiAAiAgkg'
      )
    this.shape_1.setTransform(0.0439, 62.0247)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#0163AF')
      .s()
      .p(
        'AKvPiQjhgNg9gRQg8gRkWhfQkUhgnYgsQiGgQiXgKIABABIgCgBIhggFQhygHh7gDIgJAAIgHAAIAAgCIAAACQhmADheAFIgIr7QF1AHKCgrQKAgrGUh7IAAgGQBKgaBDgcQGSijCunrQBXHfC3OPQAKClgZBRQgoCCgJALQhYBkhiAnQhhAmhSARQg5AMhgASIj9gHg'
      )
    this.shape_2.setTransform(-1.9673, -24.8375)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-164.2, -135.4, 328.5, 255.8), null)
  ;(lib.Symbol25 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // Layer_3
    this.shape = new cjs.Shape()
    this.shape.graphics.f('#0163AF').s().p('ADoB4IE1lQQB+AABDAdIl+GUQhQgngog6gArdBkIEik3QBogNBZA4IlzF6QhEgggshOg')
    this.shape.setTransform(-0.85, 1.9496)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#3D98DE')
      .s()
      .p('AFfAgQBihxACgKQBXgiBAAEQgcAMgiAnQhtB9hFBGQgHgbgEhCgApZAhQBeh4AcgQQAcgQBOgFQgFAJhRBWQhSBVgyA5QgJgggBgwg')
    this.shape_1.setTransform(-16.675, -6.175)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    )
    // Layer_1
    this.instance = new lib.Symbol18()
    this.instance.setTransform(-44.1, 0.15, 1, 1, 0, 0, 180)
    this.instance_1 = new lib.Symbol18()
    this.instance_1.setTransform(44.1, 0.15)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }, { t: this.instance }] })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(-89.7, -33.2, 179.4, 66.4), null)
  ;(lib.Tween9 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // Layer_1
    this.instance = new lib.Symbol2()
    this.instance.setTransform(-32.6, -66.95, 0.8617, 0.9016, 0, 1.0308, 180, -92.2, -93.4)
    this.instance_1 = new lib.Symbol2()
    this.instance_1.setTransform(40.55, -60, 0.8564, 0.9016, 0, 1.0308, 0, -86.9, -85.7)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }, { t: this.instance }] })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-222.4, -71.5, 444.8, 138.8)
  ;(lib.Tween8 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // Layer_1
    this.instance = new lib.Symbol1()
    this.instance.setTransform(-121.95, 10.3, 0.7984, 0.8142, 0, 0, 180, -0.7, 0.8)
    this.instance_1 = new lib.Symbol1()
    this.instance_1.setTransform(123.2, 10.3, 0.7984, 0.8142, 0, 0, 0, 1.1, 0.8)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }, { t: this.instance }] })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-253.7, -100.6, 507.2, 208.3)
  ;(lib.Tween7 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // Layer_1
    this.instance = new lib.Symbol25()
    this.instance.setTransform(0.95, -9.65, 2.8407, 2.0842, 0, 0, 0, 0.5, 1)
    this.instance_1 = new lib.Symbol31('synched', 0)
    this.instance_1.setTransform(-123, -24.3, 0.6256, 0.4588, 0, 0, 180, -1.1, 2.2)
    this.instance_2 = new lib.Symbol31('synched', 0)
    this.instance_2.setTransform(122.5, -24.3, 0.6256, 0.4588, 0, 0, 0, 3.1, 2.2)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance }] })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-255.2, -81, 509.6, 138.5)
  ;(lib.Tween5 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // Layer_1
    this.instance = new lib.Symbol14()
    this.instance.setTransform(1.6, 46.65, 3.7766, 3.496, 0, 0, 0, -122.2, -12.7)
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-303, -143.9, 599.2, 385.1)
  ;(lib.Tween2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // Layer_5
    this.instance = new lib.Tween12('synched', 0)
    this.instance.setTransform(0, -165.25)
    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(1)
        .to({ y: -162.2579 }, 0)
        .wait(1)
        .to({ y: -159.405 }, 0)
        .wait(1)
        .to({ y: -156.6912 }, 0)
        .wait(1)
        .to({ y: -154.1167 }, 0)
        .wait(1)
        .to({ y: -151.6812 }, 0)
        .wait(1)
        .to({ y: -149.385 }, 0)
        .wait(1)
        .to({ y: -147.2279 }, 0)
        .wait(1)
        .to({ y: -145.21 }, 0)
        .wait(1)
        .to({ y: -143.3312 }, 0)
        .wait(1)
        .to({ y: -141.5917 }, 0)
        .wait(1)
        .to({ y: -139.9912 }, 0)
        .wait(1)
        .to({ y: -138.53 }, 0)
        .wait(1)
        .to({ y: -137.2079 }, 0)
        .wait(1)
        .to({ y: -136.025 }, 0)
        .wait(1)
        .to({ y: -134.9812 }, 0)
        .wait(1)
        .to({ y: -134.0767 }, 0)
        .wait(1)
        .to({ y: -133.3112 }, 0)
        .wait(1)
        .to({ y: -132.685 }, 0)
        .wait(1)
        .to({ y: -132.1979 }, 0)
        .wait(1)
        .to({ y: -131.85 }, 0)
        .to({ _off: true }, 1)
        .wait(1)
        .to({ _off: false, y: -131.55 }, 0)
        .to({ y: -165.25 }, 29, cjs.Ease.get(1))
        .wait(1)
    )
    // Layer_4
    this.instance_1 = new lib.Tween11('synched', 0)
    this.instance_1.setTransform(0, -207.75)
    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(1)
        .to({ regY: -3.5, y: -208.7 }, 0)
        .wait(1)
        .to({ y: -206.35 }, 0)
        .wait(1)
        .to({ y: -204.05 }, 0)
        .wait(1)
        .to({ y: -201.9 }, 0)
        .wait(1)
        .to({ y: -199.85 }, 0)
        .wait(1)
        .to({ y: -197.95 }, 0)
        .wait(1)
        .to({ y: -196.1 }, 0)
        .wait(1)
        .to({ y: -194.45 }, 0)
        .wait(1)
        .to({ y: -192.85 }, 0)
        .wait(1)
        .to({ y: -191.4 }, 0)
        .wait(1)
        .to({ y: -190.05 }, 0)
        .wait(1)
        .to({ y: -188.85 }, 0)
        .wait(1)
        .to({ y: -187.7 }, 0)
        .wait(1)
        .to({ y: -186.75 }, 0)
        .wait(1)
        .to({ y: -185.85 }, 0)
        .wait(1)
        .to({ y: -185.1 }, 0)
        .wait(1)
        .to({ y: -184.45 }, 0)
        .wait(1)
        .to({ y: -183.95 }, 0)
        .wait(1)
        .to({ y: -183.5 }, 0)
        .wait(1)
        .to({ regY: 0, y: -179.75 }, 0)
        .to({ _off: true }, 1)
        .wait(1)
        .to({ _off: false, y: -179.5 }, 0)
        .to({ y: -207.75 }, 29, cjs.Ease.get(1))
        .wait(1)
    )
    // Layer_3
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f()
      .s('#05104D')
      .ss(15, 1, 1)
      .p(
        'Abbo4QglgogmgjQlEkUnqiQQjuhFoEgVQgNgDg+gCQgXgCgOADQgNgDgXACQg+ACgNADQoEAVjuBFQnqCQlEEUQgSAZg0AtQgCACgDADAbtR/QgDAEgDAFQBng7AqgiQAqgjCPicQCRibAAkEQAAkFizlFQiLj+iaisA7mSIQhng7gqgiQgqgjiPicQiRibAAkEQAAkFCzlFQCLj+Cais'
      )
    this.shape.setTransform(0, -100.525)
    this.timeline.addTween(
      cjs.Tween.get(this.shape).wait(20).to({ _off: true }, 1).wait(1).to({ _off: false }, 0).wait(30)
    )
    // Layer_2
    this.instance_2 = new lib.Tween9('synched', 0)
    this.instance_2.setTransform(1.25, -170.8, 0.8791, 0.6785)
    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(1)
        .to({ regY: -2.1, scaleX: 0.8898, scaleY: 0.707, y: -167.2 }, 0)
        .wait(1)
        .to({ scaleX: 0.9, scaleY: 0.7343, y: -162.45 }, 0)
        .wait(1)
        .to({ scaleX: 0.9098, scaleY: 0.7602, y: -157.9 }, 0)
        .wait(1)
        .to({ scaleX: 0.919, scaleY: 0.7847, y: -153.6 }, 0)
        .wait(1)
        .to({ scaleX: 0.9278, scaleY: 0.808, y: -149.55 }, 0)
        .wait(1)
        .to({ scaleX: 0.936, scaleY: 0.8299, y: -145.75 }, 0)
        .wait(1)
        .to({ scaleX: 0.9438, scaleY: 0.8505, y: -142.15 }, 0)
        .wait(1)
        .to({ scaleX: 0.951, scaleY: 0.8698, y: -138.8 }, 0)
        .wait(1)
        .to({ scaleX: 0.9577, scaleY: 0.8877, y: -135.6 }, 0)
        .wait(1)
        .to({ scaleX: 0.964, scaleY: 0.9043, y: -132.7 }, 0)
        .wait(1)
        .to({ scaleX: 0.9697, scaleY: 0.9196, y: -130.05 }, 0)
        .wait(1)
        .to({ scaleX: 0.975, scaleY: 0.9336, y: -127.6 }, 0)
        .wait(1)
        .to({ scaleX: 0.9797, scaleY: 0.9462, y: -125.4 }, 0)
        .wait(1)
        .to({ scaleX: 0.984, scaleY: 0.9575, y: -123.4 }, 0)
        .wait(1)
        .to({ scaleX: 0.9877, scaleY: 0.9674, y: -121.7 }, 0)
        .wait(1)
        .to({ scaleX: 0.991, scaleY: 0.9761, y: -120.2 }, 0)
        .wait(1)
        .to({ scaleX: 0.9937, scaleY: 0.9834, y: -118.9 }, 0)
        .wait(1)
        .to({ scaleX: 0.996, scaleY: 0.9894, y: -117.9 }, 0)
        .wait(1)
        .to({ scaleX: 0.9977, scaleY: 0.994, y: -117.05 }, 0)
        .wait(1)
        .to({ regY: -0.1, scaleX: 0.999, scaleY: 0.9973, x: 1.3, y: -114.45 }, 0)
        .to({ _off: true }, 1)
        .wait(1)
        .to({ _off: false, regY: 0, scaleX: 1, scaleY: 1, x: 1.25, y: -113.95 }, 0)
        .to({ scaleX: 0.8791, scaleY: 0.6785, y: -170.8 }, 29, cjs.Ease.get(1))
        .wait(1)
    )
    // Layer_1
    this.instance_3 = new lib.Tween10('synched', 0)
    this.instance_3.setTransform(0.5, -91.8)
    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .to({ _off: true }, 1)
        .wait(1)
        .to({ _off: false }, 0)
        .to({ startPosition: 0 }, 29, cjs.Ease.get(1))
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-231.6, -230.5, 463.29999999999995, 260.5)
  ;(lib.rfgerg = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // Layer_9_copy
    this.instance = new lib.Symbol5()
    this.instance.setTransform(675, 143.8, 0.4794, 0.4794, -4.6167, 0, 0, 52.9, 56.9)
    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(1)
        .to({ regX: 58.5, regY: 65.5, scaleX: 0.4751, scaleY: 0.4751, rotation: -5.1343, x: 675.4, y: 144 }, 0)
        .wait(1)
        .to({ scaleX: 0.4704, scaleY: 0.4704, rotation: -5.6808, x: 671.3, y: 138.2 }, 0)
        .wait(1)
        .to({ scaleX: 0.4655, scaleY: 0.4655, rotation: -6.2582, x: 667.25, y: 132.9 }, 0)
        .wait(1)
        .to({ scaleX: 0.4603, scaleY: 0.4603, rotation: -6.8658, x: 662.5, y: 127.3 }, 0)
        .wait(1)
        .to({ scaleX: 0.4549, scaleY: 0.4549, rotation: -7.5042, x: 658.8, y: 123.35 }, 0)
        .wait(1)
        .to({ scaleX: 0.4492, scaleY: 0.4492, rotation: -8.1727, x: 652.8, y: 117.55 }, 0)
        .wait(1)
        .to({ scaleX: 0.4432, scaleY: 0.4432, rotation: -8.8713, x: 647, y: 112.15 }, 0)
        .wait(1)
        .to({ scaleX: 0.437, scaleY: 0.437, rotation: -9.6008, x: 640.95, y: 106.6 }, 0)
        .wait(1)
        .to({ scaleX: 0.4306, scaleY: 0.4306, rotation: -10.3604, x: 634.75, y: 100.9 }, 0)
        .wait(1)
        .to({ scaleX: 0.4238, scaleY: 0.4238, rotation: -11.151, x: 628.2, y: 95.05 }, 0)
        .wait(1)
        .to({ scaleX: 0.4168, scaleY: 0.4168, rotation: -11.9716, x: 621.3, y: 89.05 }, 0)
        .wait(1)
        .to({ scaleX: 0.4096, scaleY: 0.4096, rotation: -12.8223, x: 613.65, y: 82.55 }, 0)
        .wait(1)
        .to({ scaleX: 0.4021, scaleY: 0.4021, rotation: -13.703, x: 606.05, y: 77.5 }, 0)
        .wait(1)
        .to({ scaleX: 0.3943, scaleY: 0.3943, rotation: -14.6147, x: 596.85, y: 73 }, 0)
        .wait(1)
        .to({ scaleX: 0.3863, scaleY: 0.3863, rotation: -15.5565, x: 587.1, y: 69.25 }, 0)
        .wait(1)
        .to({ scaleX: 0.378, scaleY: 0.378, rotation: -16.5292, x: 576.85, y: 65.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.3695, scaleY: 0.3695, rotation: -17.532, x: 566.1, y: 63 }, 0)
        .wait(1)
        .to({ scaleX: 0.3607, scaleY: 0.3607, rotation: -18.5648, x: 554.9, y: 60.4 }, 0)
        .wait(1)
        .to({ scaleX: 0.3516, scaleY: 0.3516, rotation: -19.6286, x: 543.35, y: 58.05 }, 0)
        .wait(1)
        .to({ scaleX: 0.3423, scaleY: 0.3423, rotation: -20.7225, x: 531.3, y: 55.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.3327, scaleY: 0.3327, rotation: -21.8472, x: 518.8, y: 54.3 }, 0)
        .wait(1)
        .to({ scaleX: 0.3229, scaleY: 0.3229, rotation: -23.0021, x: 506.25, y: 53.25 }, 0)
        .to({ _off: true }, 1)
        .wait(29)
    )
    // Layer_9_copy
    this.instance_1 = new lib.Symbol5()
    this.instance_1.setTransform(682, 806.4, 0.3401, 0.3401, 0, 0, 0, 58.8, 64.7)
    this.instance_1._off = true
    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(6)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ regX: 58.5, regY: 65.5, scaleX: 0.431, scaleY: 0.431, rotation: -3.5256, x: 674.45, y: 774.35 }, 0)
        .wait(1)
        .to({ scaleX: 0.5205, scaleY: 0.5205, rotation: -6.9975, x: 656.65, y: 745.85 }, 0)
        .wait(1)
        .to({ scaleX: 0.6087, scaleY: 0.6087, rotation: -10.4179, x: 635.8, y: 720.4 }, 0)
        .wait(1)
        .to({ scaleX: 0.6954, scaleY: 0.6954, rotation: -13.7823, x: 616.55, y: 693.8 }, 0)
        .wait(1)
        .to({ scaleX: 0.7808, scaleY: 0.7808, rotation: -17.0928, x: 599.25, y: 666.75 }, 0)
        .wait(1)
        .to({ scaleX: 0.8647, scaleY: 0.8647, rotation: -20.3472, x: 584, y: 639.05 }, 0)
        .wait(1)
        .to({ scaleX: 0.9472, scaleY: 0.9472, rotation: -23.5502, x: 571.4, y: 610.65 }, 0)
        .wait(1)
        .to({ scaleX: 1.0284, scaleY: 1.0284, rotation: -26.6995, x: 565.8, y: 580.6 }, 0)
        .wait(1)
        .to({ scaleX: 1.1082, scaleY: 1.1082, rotation: -29.7926, x: 570, y: 551.05 }, 0)
        .wait(1)
        .to({ scaleX: 1.1829, scaleY: 1.1829, rotation: -32.5776, x: 582.85, y: 524.7 }, 0)
        .wait(1)
        .to({ scaleX: 1.1549, scaleY: 1.1549, rotation: -28.1131, x: 603, y: 504.4 }, 0)
        .wait(1)
        .to({ scaleX: 1.1273, scaleY: 1.1273, rotation: -23.7291, x: 620.2, y: 482.95 }, 0)
        .wait(1)
        .to({ scaleX: 1.1003, scaleY: 1.1003, rotation: -19.4219, x: 634.8, y: 456.8 }, 0)
        .wait(1)
        .to({ scaleX: 1.0738, scaleY: 1.0738, rotation: -15.1987, x: 640.35, y: 431.35 }, 0)
        .wait(1)
        .to({ scaleX: 1.0477, scaleY: 1.0477, rotation: -11.0594, x: 637.15, y: 407.15 }, 0)
        .wait(1)
        .to({ scaleX: 1.0222, scaleY: 1.0222, rotation: -6.9969, x: 615.25, y: 391.05 }, 0)
        .wait(1)
        .to({ scaleX: 0.9972, scaleY: 0.9972, rotation: -3.0149, x: 586.7, y: 379.35 }, 0)
        .wait(1)
        .to({ scaleX: 0.9727, scaleY: 0.9727, rotation: 0.8867, x: 567.2, y: 377.45 }, 0)
        .wait(1)
        .to({ scaleX: 0.9487, scaleY: 0.9487, rotation: 4.7043, x: 541.15, y: 374.3 }, 0)
        .wait(1)
        .to({ scaleX: 0.9252, scaleY: 0.9252, rotation: 8.4416, x: 516.6, y: 369.35 }, 0)
        .wait(1)
        .to({ scaleX: 0.9022, scaleY: 0.9022, rotation: 12.0985, x: 497.2, y: 359.8 }, 0)
        .wait(1)
        .to({ scaleX: 0.8797, scaleY: 0.8797, rotation: 12.6659, x: 477.4, y: 342.75 }, 0)
        .wait(1)
        .to({ scaleX: 0.8578, scaleY: 0.8578, rotation: 12.6051, x: 471.2, y: 323.2 }, 0)
        .wait(1)
        .to({ scaleX: 0.8363, scaleY: 0.8363, rotation: 12.5459, x: 476.95, y: 303.65 }, 0)
        .wait(1)
        .to({ scaleX: 0.8154, scaleY: 0.8154, rotation: 12.4879, x: 492, y: 286.85 }, 0)
        .wait(1)
        .to({ scaleX: 0.7949, scaleY: 0.7949, rotation: 12.4314, x: 509.25, y: 274.1 }, 0)
        .wait(1)
        .to({ scaleX: 0.775, scaleY: 0.775, rotation: 12.3763, x: 526.95, y: 264.35 }, 0)
        .wait(1)
        .to({ scaleX: 0.7555, scaleY: 0.7555, rotation: 12.3226, x: 545.2, y: 254.85 }, 0)
        .wait(1)
        .to({ scaleX: 0.7366, scaleY: 0.7366, rotation: 12.2703, x: 562.95, y: 245.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.7182, scaleY: 0.7182, rotation: 12.2194, x: 580.5, y: 237.85 }, 0)
        .wait(1)
        .to({ scaleX: 0.7003, scaleY: 0.7003, rotation: 12.1699, x: 597.35, y: 231 }, 0)
        .wait(1)
        .to({ scaleX: 0.6829, scaleY: 0.6829, rotation: 12.1218, x: 613.65, y: 225.55 }, 0)
        .wait(1)
        .to({ scaleX: 0.666, scaleY: 0.666, rotation: 12.0751, x: 630.7, y: 219.2 }, 0)
        .wait(1)
        .to({ scaleX: 0.6497, scaleY: 0.6497, rotation: 12.0299, x: 647.3, y: 212.2 }, 0)
        .wait(1)
        .to({ scaleX: 0.6338, scaleY: 0.6338, rotation: 11.986, x: 660.8, y: 205.2 }, 0)
        .wait(1)
        .to({ scaleX: 0.6184, scaleY: 0.6184, rotation: 11.9434, x: 675.8, y: 193.2 }, 0)
        .wait(1)
        .to({ scaleX: 0.6035, scaleY: 0.6035, rotation: 10.7697, x: 680.3, y: 188.7 }, 0)
        .wait(1)
        .to({ scaleX: 0.5892, scaleY: 0.5892, rotation: 8.969, x: 683.75, y: 184.45 }, 0)
        .wait(1)
        .to({ scaleX: 0.5753, scaleY: 0.5753, rotation: 7.2289, x: 686.4, y: 179.85 }, 0)
        .wait(1)
        .to({ scaleX: 0.562, scaleY: 0.562, rotation: 5.555, x: 687.95, y: 175.05 }, 0)
        .wait(1)
        .to({ scaleX: 0.5492, scaleY: 0.5492, rotation: 3.9446, x: 688.45, y: 170.15 }, 0)
        .wait(1)
        .to({ scaleX: 0.5369, scaleY: 0.5369, rotation: 2.3975, x: 688, y: 165.5 }, 0)
        .wait(1)
        .to({ scaleX: 0.525, scaleY: 0.525, rotation: 0.9167, x: 686.7, y: 161.1 }, 0)
        .wait(1)
        .to({ scaleX: 0.5138, scaleY: 0.5138, rotation: -0.5035, x: 685.05, y: 157.15 }, 0)
        .wait(1)
        .to({ scaleX: 0.5029, scaleY: 0.5029, rotation: -1.8602, x: 683.05, y: 153.45 }, 0)
        .wait(1)
    )
    // Layer_9
    this.instance_2 = new lib.Symbol5()
    this.instance_2.setTransform(683.35, 805.2, 0.3401, 0.3401, 0, 0, 0, 58.8, 65)
    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(1)
        .to({ regX: 58.5, regY: 65.5, scaleX: 0.4381, scaleY: 0.4381, rotation: -3.7994, x: 689.45, y: 769.6 }, 0)
        .wait(1)
        .to({ scaleX: 0.5348, scaleY: 0.5348, rotation: -7.5509, x: 679.25, y: 734.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.6302, scaleY: 0.6302, rotation: -11.2495, x: 666.55, y: 701.55 }, 0)
        .wait(1)
        .to({ scaleX: 0.7241, scaleY: 0.7241, rotation: -14.8953, x: 656, y: 667.35 }, 0)
        .wait(1)
        .to({ scaleX: 0.8169, scaleY: 0.8169, rotation: -18.4932, x: 647.65, y: 633.25 }, 0)
        .wait(1)
        .to({ scaleX: 0.9082, scaleY: 0.9082, rotation: -22.0358, x: 642.25, y: 599.05 }, 0)
        .wait(1)
        .to({ scaleX: 0.9983, scaleY: 0.9983, rotation: -25.5305, x: 642.55, y: 565.1 }, 0)
        .wait(1)
        .to({ scaleX: 1.087, scaleY: 1.087, rotation: -28.9723, x: 654.1, y: 533.65 }, 0)
        .wait(1)
        .to({ scaleX: 1.1744, scaleY: 1.1744, rotation: -32.3638, x: 675.45, y: 508.65 }, 0)
        .wait(1)
        .to({ scaleX: 1.1562, scaleY: 1.1562, rotation: -28.2623, x: 702.95, y: 493.3 }, 0)
        .wait(1)
        .to({ scaleX: 1.1255, scaleY: 1.1255, rotation: -23.3159, x: 729.4, y: 475.6 }, 0)
        .wait(1)
        .to({ scaleX: 1.0954, scaleY: 1.0954, rotation: -18.4491, x: 751.8, y: 452.8 }, 0)
        .wait(1)
        .to({ scaleX: 1.0657, scaleY: 1.0657, rotation: -13.6581, x: 765.6, y: 424.65 }, 0)
        .wait(1)
        .to({ scaleX: 1.0364, scaleY: 1.0364, rotation: -8.9428, x: 757.8, y: 398.4 }, 0)
        .wait(1)
        .to({ scaleX: 1.0077, scaleY: 1.0077, rotation: -4.307, x: 736.4, y: 376.7 }, 0)
        .wait(1)
        .to({ scaleX: 0.9794, scaleY: 0.9794, rotation: 0.253, x: 711.75, y: 363 }, 0)
        .wait(1)
        .to({ scaleX: 0.9516, scaleY: 0.9516, rotation: 4.7373, x: 683.65, y: 350.25 }, 0)
        .wait(1)
        .to({ scaleX: 0.9243, scaleY: 0.9243, rotation: 9.142, x: 658.85, y: 335.9 }, 0)
        .wait(1)
        .to({ scaleX: 0.8975, scaleY: 0.8975, rotation: 12.7042, x: 639.65, y: 313.9 }, 0)
        .wait(1)
        .to({ scaleX: 0.8711, scaleY: 0.8711, rotation: 12.6304, x: 632.3, y: 290.15 }, 0)
        .wait(1)
        .to({ scaleX: 0.8452, scaleY: 0.8452, rotation: 12.5579, x: 639.5, y: 267.8 }, 0)
        .wait(1)
        .to({ scaleX: 0.8198, scaleY: 0.8198, rotation: 12.4867, x: 665.85, y: 251.55 }, 0)
        .wait(1)
        .to({ scaleX: 0.7949, scaleY: 0.7949, rotation: 12.4169, x: 687.95, y: 244.75 }, 0)
        .wait(1)
        .to({ scaleX: 0.7705, scaleY: 0.7705, rotation: 12.3485, x: 714.8, y: 239.65 }, 0)
        .wait(1)
        .to({ scaleX: 0.7465, scaleY: 0.7465, rotation: 12.2814, x: 739.95, y: 235.6 }, 0)
        .wait(1)
        .to({ scaleX: 0.723, scaleY: 0.723, rotation: 12.2156, x: 764.85, y: 232.4 }, 0)
        .wait(1)
        .to({ scaleX: 0.7, scaleY: 0.7, rotation: 12.1511, x: 788.5, y: 231 }, 0)
        .wait(1)
        .to({ scaleX: 0.6775, scaleY: 0.6775, rotation: 12.088, x: 811.5, y: 230.4 }, 0)
        .wait(1)
        .to({ scaleX: 0.6555, scaleY: 0.6555, rotation: 12.0262, x: 836.05, y: 228.3 }, 0)
        .wait(1)
        .to({ scaleX: 0.6339, scaleY: 0.6339, rotation: 11.9659, x: 858.5, y: 222.8 }, 0)
        .wait(1)
        .to({ scaleX: 0.6128, scaleY: 0.6128, rotation: 11.0427, x: 874.55, y: 215.3 }, 0)
        .wait(1)
        .to({ scaleX: 0.5922, scaleY: 0.5922, rotation: 8.6215, x: 884.7, y: 207.1 }, 0)
        .wait(1)
        .to({ scaleX: 0.5721, scaleY: 0.5721, rotation: 6.2582, x: 889.75, y: 195.5 }, 0)
        .wait(1)
        .to({ scaleX: 0.5524, scaleY: 0.5524, rotation: 3.9501, x: 888.4, y: 183.05 }, 0)
        .wait(1)
        .to({ scaleX: 0.5332, scaleY: 0.5332, rotation: 1.6999, x: 883.4, y: 171.85 }, 0)
        .wait(1)
        .to({ scaleX: 0.5146, scaleY: 0.5146, rotation: -0.4952, x: 876.7, y: 161.8 }, 0)
        .wait(1)
        .to({ scaleX: 0.4963, scaleY: 0.4963, rotation: -2.6351, x: 869.1, y: 152.55 }, 0)
        .wait(1)
        .to({ scaleX: 0.4786, scaleY: 0.4786, rotation: -4.7171, x: 861.2, y: 144 }, 0)
        .wait(1)
        .to({ scaleX: 0.4614, scaleY: 0.4614, rotation: -6.744, x: 853.25, y: 136.3 }, 0)
        .wait(1)
        .to({ scaleX: 0.4446, scaleY: 0.4446, rotation: -8.7157, x: 845.2, y: 128.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.4283, scaleY: 0.4283, rotation: -10.6295, x: 837.15, y: 121.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.4124, scaleY: 0.4124, rotation: -12.4881, x: 829.3, y: 115.4 }, 0)
        .wait(1)
        .to({ scaleX: 0.3971, scaleY: 0.3971, rotation: -14.2889, x: 821.55, y: 109.2 }, 0)
        .wait(1)
        .to({ scaleX: 0.3822, scaleY: 0.3822, rotation: -16.0345, x: 813.9, y: 103.25 }, 0)
        .wait(1)
        .to({ scaleX: 0.3679, scaleY: 0.3679, rotation: -17.7221, x: 806.55, y: 97.7 }, 0)
        .wait(1)
        .to({ scaleX: 0.3539, scaleY: 0.3539, rotation: -19.3574, x: 799.3, y: 92.3 }, 0)
        .wait(1)
        .to({ scaleX: 0.3405, scaleY: 0.3405, rotation: -20.932, x: 792.15, y: 87.2 }, 0)
        .wait(1)
        .to({ scaleX: 0.3276, scaleY: 0.3276, rotation: -22.4542, x: 785.4, y: 82.35 }, 0)
        .wait(1)
        .to({ scaleX: 0.3151, scaleY: 0.3151, rotation: -23.9185, x: 778.7, y: 77.65 }, 0)
        .wait(1)
        .to({ scaleX: 0.3031, scaleY: 0.3031, rotation: -25.3249, x: 772.4, y: 73.25 }, 0)
        .wait(1)
        .to({ scaleX: 0.2916, scaleY: 0.2916, rotation: -26.6789, x: 766.2, y: 69 }, 0)
        .wait(1)
    )
    // Layer_6
    this.shape = new cjs.Shape()
    this.shape.graphics.f('rgba(127,76,0,0.549)').s().p('AhAgEIB3AAIAKAAIgBAEQhAAFhAAAIAAgJg')
    this.shape.setTransform(1110.3, 586.5)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics.f('rgba(126,76,0,0.541)').s().p('AhFgFQBFAABFAFIABAEIgKAAQgWACgUAAQgxAAgmgLg')
    this.shape_1.setTransform(1064.8, 586.625)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics.f('#873E7F').s().p('EAkCgAFIAFAFIABAEIAAACIgGgLgEgkIAAEIACgEIAFgFIgHALIAAgCg')
    this.shape_2.setTransform(557.15, 722.5125)
    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics.f('rgba(118,71,0,0.51)').s().p('Ag2gFQA2AAA3AFIAAAEIgKAAQgSACgQAAQgmAAgbgLg')
    this.shape_3.setTransform(1115.3, -338.375)
    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('rgba(121,73,0,0.522)')
      .s()
      .p(
        'EAn6AmSIAAiCIAKAAIAAAKQAHBNgRA1IAAgKgEAn/AfZQgGhAABhBQARAwgHBIIAAAKIgFgBgEgoFgmbIBkAAIAKAAIgBAFQg2AFg3AAIAAgKg'
      )
    this.shape_4.setTransform(1311.425, -93)
    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics.f('rgba(114,46,73,0.541)').s().p('AAAAyQgEgyAAgxIAJAAIAABZIAAAKIgFAAg')
    this.shape_5.setTransform(1419.3125, -337)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(52)
    )
    // Layer_8
    this.instance_3 = new lib.Tween8('synched', 0)
    this.instance_3.setTransform(638.8, 555.95, 0.9305, 0.6113, 0, 0, 0, 0.1, 0.1)
    this.instance_4 = new lib.Tween8('synched', 0)
    this.instance_4.setTransform(638.8, 555.95, 0.9305, 0.6113, 0, 0, 0, 0.1, 0.1)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_3 }] })
        .to({ state: [{ t: this.instance_3 }] }, 22)
        .to({ state: [{ t: this.instance_4 }, { t: this.instance_3 }] }, 29)
        .wait(1)
    )
    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .to({ regX: 0, regY: 0, scaleX: 1.0607, scaleY: 0.9403, x: 634, y: 629.1 }, 22, cjs.Ease.get(1))
        .to({ regX: 0.1, regY: 0.1, scaleX: 0.9305, scaleY: 0.6113, x: 638.8, y: 555.95 }, 29, cjs.Ease.get(1))
        .wait(1)
    )
    // Layer_10
    this.instance_5 = new lib.Symbol6()
    this.instance_5.setTransform(644.3, 617.3)
    this.instance_5.alpha = 0.5703
    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .to({ x: 647.9, y: 707.3 }, 22, cjs.Ease.get(1))
        .to({ scaleY: 0.852, x: 642.8, y: 615.8 }, 29, cjs.Ease.get(1))
        .wait(1)
    )
    // Layer_2
    this.instance_6 = new lib.Tween2('synched', 51)
    this.instance_6.setTransform(639.3, 529.25, 0.9305, 0.9765, 0, 0, 0, 0.1, 0.1)
    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .to({ scaleX: 1.0607, scaleY: 1.2251, x: 634.7, y: 590.1, startPosition: 22 }, 22, cjs.Ease.get(1))
        .to({ scaleX: 0.9305, scaleY: 0.9765, x: 639.3, y: 529.25, startPosition: 51 }, 29, cjs.Ease.quadOut)
        .wait(1)
    )
    // Layer_7
    this.instance_7 = new lib.Tween7('synched', 0)
    this.instance_7.setTransform(640.45, 700.35, 0.9305, 1.0501)
    this.timeline.addTween(
      cjs.Tween.get(this.instance_7)
        .to({ regX: 0.1, scaleX: 1.0607, scaleY: 0.9403, x: 636.05, y: 743.35 }, 22, cjs.Ease.get(1))
        .to({ regX: 0, scaleX: 0.9305, scaleY: 1.0501, x: 640.45, y: 700.35 }, 29, cjs.Ease.get(1))
        .wait(1)
    )
    // Layer_3
    this.instance_8 = new lib.Symbol4()
    this.instance_8.setTransform(639.45, 682.9, 0.9448, 1.0501, 0, 0, 0, 0.1, 0.1)
    this.instance_8.alpha = 0.5703
    this.timeline.addTween(
      cjs.Tween.get(this.instance_8)
        .to({ scaleX: 1.0298, scaleY: 0.9403, x: 634.9, y: 751.85 }, 22, cjs.Ease.quadOut)
        .to({ regX: 0, regY: 0, scaleX: 0.9448, scaleY: 1.0501, x: 639.35, y: 682.8 }, 29, cjs.Ease.get(1))
        .wait(1)
    )
    // Layer_5
    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f()
      .s('#09255B')
      .ss(11, 1, 1)
      .p(
        'APUpOQD3AhDAB+IAAAAQDjCPgRCrQAAABAAAAQACAggHAhIAAAAQgcB+ipCFQj+DIkUBZQhUAahUARQlNBBmAAAQgLAAgKAAQgNAAgNAAQlygBlBg/Qh5gXhygrQjyhajeivQjWinALidIAAgBQgRirDiiPQDgiSErgYQCOgLCeASQEjAgEQgIQAcgBAFAAIABAAQATAAALABQAFAAAIAAIAAAAQEKAGEcgfQDPgXCzAag'
      )
    this.shape_6.setTransform(639.1746, 812.0228)
    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f('#05104D')
      .s()
      .p(
        'AALFJIgUAAIgUAAQlUAAkpg5QgpgIgpgLQkBhGjqi2QhWhCgPg0QANgqBHgrQDoiRFJAWIBIAHQFAAlEogKIAAAAIArABIAAAAQEcAGEvgjQBJgJBGAAIABAAQEbgEDPCBIAAAAQBHArAMAqQgFAWgUAZIgBAAQgZAhgwAmQkCDIkaBAIAAAAIghAHQktA6leAAIgGAAg'
      )
    this.shape_7.setTransform(639.15, 811.9706)
    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f('#019CFD')
      .s()
      .p(
        'AAMJdIgVAAIgaAAQlygBlBg/Qh5gXhygrQjyhajeivQjWinALidIAAgBQgRirDiiPQDgiSErgYQCOgLCeASQEjAgEQgIIAhgBIABAAQATAAALABIANAAIAAAAQEKAGEcgfQDPgXCzAaQD3AhDAB+IAAAAQDjCPgRCrIAAABQACAggHAhIAAAAQgcB+ipCFQj+DIkUBZQhUAahUARQlLBBl8AAIgGAAgAzojLQhHAsgNApQAPA0BWBDQDqC2EBBGQApAKApAIQEoA5FVABIAUAAIAUAAQFhAAEwg6IAggHIABAAQEahAECjIQAwgmAZgiIABAAQATgZAGgWQgMgphHgsIgBAAQjOiAkbADIgBAAQhGABhJAJQkvAjkcgGIAAAAIgrgBIAAAAQkoAJlAglIhIgGQgsgDgqAAQkSAAjJB9g'
      )
    this.shape_8.setTransform(639.1746, 812.0228)
    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f()
      .s('#071953')
      .ss(11, 1, 1)
      .p(
        'A0cgMQAAgBAAAAQADg4AagtQA2hhBvhBQBUgwBWgXQBogZBdgzQAdgcAggXQBYhIB1ggQAogMApgIQBKgQBJgJQB/gSB8ANQADABABAAQAUABAKADQAQACALAEQAFACAGACQAlAKAjAOQACABABABQBRAgBLApQABAAABAAQAAABABAAQAUAMAWAAQAbgGAbgJQACgBACAAQABAAAAgBQAugPAvgNQBegaBdgJQBPgIBGAVQAuAOAsAbQABAAAAABQCFBMA+CDQAJARAIARQAKAdAUARQABABAAAAQAUAOASAMQABABABABQBWA+ANBnQAAAAAAABQAEARABASQAAAKAAAKQAAAAAAABQABBkhABmQAAABAAAAQgBABgBABQgPAbgUAXQgiArguAeQgBAAAAABQAAAAgBABQAAAAgBAAQh6BQiDALQAAAAgBABQgBAAgBAAQgvAEgxAEQgDABgDAAQgTABgSAEQghAIgfASQAAAAgBAAQAAABgBAAQgjAUghATQgFADgEACQgCABgBABQivBsjQAFQgBAAAAAAQhkAEhhgcQAAAAgBgBQgBAAgBAAQgBgBgBAAQgHgCgHgDQgLgDgKgDQhEgXhBgeQgBAAAAgBQhhgshfgtQgeARghANQgBABgBAAQhBAbhEAMQhIANhMgHQgEgBgDAAQgagDgZgFQiXgdiMhhQgBgBgCgBQgygjgvgoQgBAAAAgBQgLgIgKgJQidiLAZisg'
      )
    this.shape_9.setTransform(637.9538, 818.5802)
    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f('#05104D')
      .s()
      .p(
        'ACLGIIgsgOIgogOIgXgKIgQgHIgBgBIgPgGIjHhaIgMgGIgBgBIgPgGIgXgKQhagihdAOIgHABQgsADgjASQgQAHgPAJIAAAAIAAAAIgBABIgTAJQgRAIgSAGQg2ATg+gHIgCAAIgEgBIgDAAIinhJIgLgHIgJgGIg7guIgIgGIgPgOQg5g3ABg+IgBgCIgBgCIABgEIAEgJQAYglApgbQAMgJANgHQAvgZAwgMQCvgnCqhJIARgHQAZgMAWgOIAPgKQBQhDBvgcQAxgMAygHIABgBIAFAAIABAAIAAgBQA8gJA7AGIABAAQAUADAPAIIAEABIAJAFIAAAAQAUAIANAIQAgAQAdASIABAAIABAAIAAABQCGBXCngfIADAAIAGgBQA3gLA2gUIADgBIAEgBQA5gUA7gLIAAAAQAqgIApgDQALAAAKAGQBFAkAiA+QAmBGA7A9IBPBNIAHASIAAAAIAEAOIAAAAQAEAKAAAKQAAALgFAQIgFAQQgTAxgeAuIgCACIgDAEQgrAagsAGIgBAAIhgAMIgCAAQgbABgbAEIgDABIiJAiIgUAHIgJADIgDABIgPAHIgfAOIghAQIgBABIAAAAIhTAsIgLAGIgNAHIi4A0IgBAAIgHAAQghAAgfgJg'
      )
    this.shape_10.setTransform(636.55, 818.5972)
    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f('#0A98EF')
      .s()
      .p(
        'AAHJiIgBgBIgCAAIgCgBIgOgFIgVgGQhEgXhBgeIgBgBIjAhZQgeARghANIgCABQhBAbhEAMQhIANhMgHIgHgBQgagDgZgFQiXgdiMhhIgDgCQgygjgvgoIgBgBIgVgRQidiLAZisIAAgBIAAgBQADg4AagtQA2hhBvhBQBUgwBWgXQBogZBdgzQAdgcAggXQBYhIB1ggQAogMApgIQBKgQBJgJQB/gSB8ANIAEABQAUABAKADQAQACALAEIALAEQAlAKAjAOIADACQBRAgBLApIACAAIABABQAUAMAWAAQAbgGAbgJIAEgBIABgBQAugPAvgNQBegaBdgJQBPgIBGAVQAuAOAsAbIABABQCFBMA+CDIARAiQAKAdAUARIABABIAmAaIACACQBWA+ANBnIAAABQAEARABASIAAAUIAAABQABBkhABmIAAABIgCACQgPAbgUAXQgiArguAeIgBABIgBABIgBAAQh6BQiDALIgBABIgCAAIhgAIIgGABQgTABgSAEQghAIgfASIgBAAIgBABIhEAnIgJAFIgDACQivBsjQAFIgBAAIgWABQhYAAhXgZgAkIDjIAXAKIAOAGIABABIANAGIDHBaIAOAGIACABIAPAHIAYAKIAoAOIArAOQAjAKAlgBIAAAAIC5g0IAMgHIAMgGIBSgsIABAAIACgBIAfgQIAggOIAPgHIADgBIAJgDIAUgHICIgiIAEgBQAbgDAbgCIACAAIBfgMIACAAQAsgGArgaIADgEIACgCQAeguASgxIAGgQQAFgQAAgLQgBgKgDgKIAAAAIgEgOIAAAAIgHgSIhPhNQg7g9gnhGQghg+hFgkQgKgGgLAAQgpADgqAIIgBAAQg6ALg6AUIgDABIgDABQg2AUg3ALIgGABIgDAAQinAfiGhXIAAgBIgBAAIgBAAQgegSgfgQQgOgIgTgIIgBAAIgIgFIgDgBQgRgIgTgDIgBAAQg7gGg8AJIgBABIAAAAIgFAAIgBABQgyAHgxAMQhvAchQBDIgPAKQgWAOgZAMIgRAHQiqBJiwAnQgvAMgvAZQgNAHgMAJQgpAbgYAlIgEAJIgBAEIABACIAAACQAAA+A5A3IAOAOIABAAIAIAGIA7AuIAJAGIALAHICnBJIADAAIADABIADAAQA9AHA3gTQASgGAQgIIAUgJIABgBIAAAAIAAAAQAPgJAQgHQAjgSAsgDIABAAIAGgBQAbgEAaAAQBCAABAAYg'
      )
    this.shape_11.setTransform(637.9538, 818.5802)
    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f()
      .s('#05124F')
      .ss(11, 1, 1)
      .p(
        'AxfA7QAAgBAAAAQAIg0AagmQA8hfBggzQBPgpBQgMQBjgOBMhGQAOgoATgiQA3htBdg+QAhgWAlgQQBBgeBDgRQBzghBxAYQADABACAAQAPADANAEQANAEALAGQAGADAFACQAfAPAdAYQABABABACQBBAzA3BFQAAAAABABQAAAAAAABQAQATAUACQAYgIAYgNQABgBACgBQABAAAAAAQApgWAqgRQBTgiBWgPQBJgPA/AcQApARAkAjQABABABABQBpBgALCYQACAUABASQgBAiASAPQAAABABAAQAUALASAJQABABABAAQBVApAbBjQAAAAAAABQAFAPADAQQACAKABAKIAAAAQAPBjghBkQAAAAAAABQAAABAAABQgJAcgOAXQgaAugrAbQgBAAAAABQAAAAgBAAQAAABgBAAQhzBJh/gTQAAAAgBAAQgBAAgBgBQgsgGgvgFQgDAAgDAAQgRgDgRADQgeAGgbAWQAAABgBAAQAAAAgBABQgcAYgbAaQgDADgDADQgBABgBABQiSCUi7ABQgBAAAAAAQhdAChUguQAAAAgBAAQgBgBAAAAQgCgBgBAAQgGgEgGgEQgJgFgJgFQg5glg1guQgBAAAAgBQhNhDhOhAQgUAegaAaQAAAAgBABQg0Ayg6AdQg/AfhIAFQgDAAgDAAQgYABgYgCQiPgKiBheQgCAAgBgBQgughgqgnQgBAAAAgBQgJgIgJgIQh7h6Ahi2g'
      )
    this.shape_12.setTransform(637.5007, 821.5489)
    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f('#05104D')
      .s()
      .p(
        'ABxG5IhEgtIgXgSIgMgLIgCgBIgLgKQhWhNhYhHIgBgBQhhhRhsArIgBAAIgCAAIgBAAIgCABIgBAAIgCABIgBAAQgbAJgUAUIgIAKIgEAEQgLANgJARIAAABIgBABIgMAUQgLARgOAOIgCABIgBABQgsAqg5AGIAAAAQhfAAhVhAIgCgCIgzgoIgRgPIgKgJIgCgDQgrgyALhHIAAgBIAAgBIABgDIAEgJQAYglAhgYQALgIAMgHQAsgWAugHQCtgWCIh6IAMgNQATgUANgZQAFgJADgKQArh0BggwQAsgWAugLIABgBIAEgBIAAAAIABAAQA4gQA3ALIACAAQARAFAOAMIADACIAJAHQAOANANAOQAYAYAXAcIAAABIAAAAIABABQBqCNCdgoIACgBIAGgBQAzgPAwgbIADgCIADgBQAzgbA2gRQAmgMAngHQAKAAAJAIQA1A0ABBTQABBfAqBAQAfAtAsAbIATAMIABABIAOAJIAAAAIAXAQQAIAJABASIACARQACA1gQA0IgBADIgCAFQgpAYgsgGIgCgBIhdgLIgCAAIi+AXIgNAGIgGADIgRAKIgOAJIgqAeIgBABQgoAiglAlQhOBOhgAEQgiAAgfgQg'
      )
    this.shape_13.setTransform(637.0733, 821.5759)
    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f('#1095E7')
      .s()
      .p(
        'AAAJuIgBAAIgBgBIgDgBIgMgIIgSgKQg5glg1guIgBgBQhNhDhOhAQgUAegaAaIgBABQg0Ayg6AdQg/AfhIAFIgGAAQgYABgYgCQiPgKiBheIgDgBQgughgqgnIgBgBIgSgQQh7h6Ahi2IAAgBIAAgBQAIg0AagmQA8hfBggzQBPgpBQgMQBjgOBMhGQAOgoATgiQA3htBdg+QAhgWAlgQQBBgeBDgRQBzghBxAYIAFABQAPADANAEQANAEALAGIALAFQAfAPAdAYIACADQBBAzA3BFIABABIAAABQAQATAUACQAYgIAYgNIADgCIABAAQApgWAqgRQBTgiBWgPQBJgPA/AcQApARAkAjIACACQBpBgALCYIADAmQgBAiASAPIABABIAmAUIACABQBVApAbBjIAAABQAFAPADAQIADAUIAAAAQAPBjghBkIAAABIAAACQgJAcgOAXQgaAugrAbIgBABIgBAAIgBABQhzBJh/gTIgBAAIgCgBIhbgLIgGAAQgRgDgRADQgeAGgbAWIgBABIgBABQgcAYgbAaIgGAGIgCACQiSCUi7ABIgBAAIgIAAQhYAAhRgsgAi2DQIABAAQBYBIBWBMIALAKIABACIANALIAWARIBEAtQAfAQAjAAQBggEBNhOQAmglAnghIACgBIApgfIAPgIIARgKIAGgDIAMgGIC/gYIABABIBeALIABAAQAsAGApgYIACgFIACgCQAPg0gCg1IgBgSQgCgSgHgJIgXgPIgBAAIgOgKIgBgBIgSgMQgsgbgfgtQgqhAgChfQgBhSg1g1QgJgIgKABQgmAGgnAMQg1ARg0AcIgCABIgDACQgxAagyAPIgGACIgDAAQicAohriMIAAgBIAAgBIgBAAQgXgcgXgZQgNgOgPgMIgIgHIgDgCQgOgNgSgFIgBAAQg4gLg3AQIgBABIgBAAIgDABIgCAAQgtAMgtAVQhfAxgrB0QgEAJgFAJQgMAagUAUIgMAMQiHB7iuAVQgtAHgsAWQgNAHgLAIQghAYgYAlIgEAJIgBAEIABAAIAAACQgLBGAqAzIADADIAIAJIABAAIARAOIAzApIACACQBWA/BeABIABAAQA4gHAsgpIACgCIABgBQAOgNAMgRIAMgVIAAgBIAAAAQAKgSALgNIAAAAIADgEIAJgJQAUgUAagJIACgBIACAAIABgBIACAAIABAAIABgBIABAAQAmgPAkAAQBEAABAA2g'
      )
    this.shape_14.setTransform(637.5007, 821.5489)
    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f()
      .s('#05104D')
      .ss(11, 1, 1)
      .p(
        'AN4h+IABAAQATAKATAIQABAAAAABIABAAQBgAnAdB8IAAAAQAZBtgYBrQAAABAAAAQAAABAAABQgUBUhAApQgBAAAAABQAAAAgBAAIAAAAIgBABQhxBGh9gdQAAAAgBAAQgBAAgBgBIABABQgtgKgtgIQgDgBgDAAQgwgKgpAmQAAAAAAAAQgBABAAAAQgeAdgaAgQgBABgBABQiJChizgBIgBAAQhaABhRgzIABABQgBgBAAAAQgCgBAAAAQgBgBgBgBQhGgvg9hBIgBgBQhGhMhIhGQgSAjgWAeQgBAAgBABIAAABIAAAAQhiB4iGASIgBAAQgDAAgDAAQimAOiShtQgCgBgBgBQgsgggpgnQgBAAAAAAIAAAAQiEh3AnjGQAAgBAAAAQAAgBAAAAQAAgCABgBQAJgwAagjQA+hfBbguQBMgnBPgJQABAAABAAIABAAQBfgKBFhNIAAAAQA1jlCmhZQABgBABAAQA8giBBgUIAAAAQBvgmBuAcQAAAAABAAQAAAAABAAQBDARA2A1QAAAAAAABQABAAABACQA7A6AwBOQAAAAABABQAAAAAAABIABAAQAOAWASACQAYgJAWgOQACgBACgBIAAAAQB0hGB/gbQB0gbBZBhQABABAAABQBsBzgUC6QgEAjARAP'
      )
    this.shape_15.setTransform(637.4781, 822.5249)
    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f('#05104D')
      .s()
      .p(
        'ABlHJQgzgjgtgwIgBAAQhUhdhYhVIgBAAQhdhbhpAzQg4ARgaBIIAAAAIgBABIAAABQgMAigTAaQgrA0g5ALQheAFhUg/IAAgBQgjgaghgeIgBAAIAAAAIAAAAQgyg0ARhSIAAgBIAAgDIAAgBQABgEADgDIAAgBIAAAAIACgCQAfgwAtgZIABAAQAqgWAtgGQCsgOB8iLIAAgBQAhgjALg0IAAgBQAfiDBag4IACAAQApgYAsgNIABAAIABgBIAAAAIADgBIABAAIAAAAQA3gTA2ANIABAAQARAGAOAOIADACQApAqAiA3IAAAAIAAABIABABQBhCeCZgrIADgBIAFgBQAzgRAwgeIADgCQBUgyBcgUQAJAAAJAJQAvA5gJBaIAAABQgUC9CNA7IABABIABAAQAXAMAYAKQAKAIAEATQAOA/gNA/IgBADIAAAAIgBAFQgpAXgsgKIgBAAQgugKgvgJIgCAAQiWgnh8B2IgBABQglAkgiApQhJBWhdAEQgiAAgegTgAioDEIAAAAIAAABgAioDEIAAAAg'
      )
    this.shape_16.setTransform(637.526, 822.548)
    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f('#1294E4')
      .s()
      .p(
        'AgEJyIABABIgBgBIgCgBIgCgCQhGgvg9hBIgBgBQhGhMhIhGQgSAjgWAeIgCABIAAABIAAAAQhiB4iGASIgBAAIgGAAQimAOiShtIgDgCQgsgggpgnIgBAAIAAAAQiEh3AnjGIAAgBIAAgBIABgDQAJgwAagjQA+hfBbguQBMgnBPgJIACAAIABAAQBfgKBFhNIAAAAQA1jlCmhZIACgBQA8giBBgUIAAAAQBvgmBuAcIABAAIABAAQBDARA2A1IAAABIACACQA7A6AwBOIABABIAAABIABAAQAOAWASACQAYgJAWgOIAEgCIAAAAQB0hGB/gbQB0gbBZBhIABACQBsBzgUC6QgEAjARAPIAAABIABAAIABAAQATAKATAIIABABIABAAQBgAnAdB8IAAAAQAZBtgYBrIAAABIAAACQgUBUhAApIgBABIgBAAIAAAAIgBABQhxBGh9gdIgBAAIgCgBIABABQgtgKgtgIIgGgBQgwgKgpAmIAAAAIgBABQgeAdgaAgIgCACQiJChizgBIgBAAIgFAAQhYAAhOgygAAFF2IAAAAQAuAwAzAjQAeATAhAAQBdgEBJhWQAigpAlgkIACgBQB8h2CWAnIABAAQAvAJAuAKIACAAQAsAKAogXIACgFIAAAAIABgDQANg/gPg/QgEgTgKgIQgXgKgYgMIAAAAIgBgBQiOg7AUi9IAAgBQAKhagwg5QgIgJgKAAQhcAUhUAyIgCACQgwAegzARIgGABIgCABQiZArhiieIAAgBIAAgBIgBAAQgig3gpgqIgDgCQgNgOgRgGIgCAAQg2gNg2ATIgBAAIAAAAIgDABIgBAAIAAABIgBAAQgsANgpAYIgCAAQhbA4geCDIAAABQgMA0ggAjIAAABQh8CLitAOQgsAGgqAWIgCAAQgtAZgfAwIgBACIgBAAIAAABQgCADgBAEIAAABIgBADIAAABQgQBSAxA0IABAAIAAAAIAAAAQAhAeAjAaIABABQBTA/BegFQA5gLArg0QAUgaAMgiIAAgBIAAgBIAAAAQAahIA4gRQBqgzBdBbIABAAIgBAAIABABIAAgBQBYBVBUBdg'
      )
    this.shape_17.setTransform(637.4781, 822.5249)
    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f()
      .s('#05104D')
      .ss(11, 1, 1)
      .p(
        'AwiAZQAAgBABAAQAAgwAQglQAlheBYg3QAXgNAAAAQAxgZAygQQAKgDALgDQABAAABgBQBYgWBMgxIABAAQAigrAogeQACgBACgBIAAgBQBZhCBpgBQAAAAABAAQAFgBAEAAQABABABgBQAAABABAAQAfAAAcAFQATgKATgIQBJgjBIgQQAAAAAAABQABAAAAgBQABAAABAAQAYgFAYgCQABgBAAAAQABAAAAAAQAxgEAvALQABAAABABQAAAAABAAQAJACAJADIAAABQABAAABABQA8ATA6ApQAEADAEACQAAABABAAQAAAAABABQAQANASABQAYgDAWgGQACgBACAAIAAAAQBzgdBxATQAAAAABAAQAAAAAAABQAiAEAgALQABABABAAQA2AUA1AVQADABACABQAAABABAAQAGADAHADQABABABAAQAgAQAcASIAAAAQBPAwAkBeQACAGADAFQAAABABABQAHAPANAKIAAABQAAAAABAAIAAAAQASALAQALQABAAAAABIABAAQAdATAUAdQABABAAABQAhA0AHBGQAAAAAAABQACAagCAbQAAABAAABQAAAAAAABQgFBLglA8QAAAAAAAAQgBABAAAAQgMAVgRAPQgBABgBABQgOAPgRANQgBABgBABQgEADgBAEQgBABAAABQgHAPgJANQAAAAAAABIgBAAIAAABQAAAAAAABQg/BbhvASQgBAAAAAAQgBAAgBABIAAAAQgEAAgEABQAAAAgBAAQgBAAgBAAQgiAFgiABQgDAAgDABQgtABgqAVQAAABgBAAQAAAAgBAAQgRAJgSAHQgPAIgOAHQgCAAgBAAQhcAvhjAEQgBAAAAgBQgcABgdABQgaABgXAKQgIADgIADQgBAAAAAAQg8AWg9gCIgBAAQgBAAgBAAQgOgBgNgCIAAABQgBgBAAAAQgBAAgBAAQgBAAgBAAQgogHgqgQQgBAAgBAAQgbgLgagNQgBAAAAgBQhBghhCgpIAAABQgBgBgBgBQgNgIgNgIQgYAQgbALQgBAAgBABIAAAAIAAAAQgLAFgLAEQhkAlhggeIAAAAQgCgBgDAAQgugQgogdQhTgihagkQgBAAgBAAQAAAAgBAAQgHgEgIgEQgBAAgBAAQgvgVgsgcQAAAAgBgBIAAABQgPgKgPgLQhRg9gdheQAAAAAAgBQgNglAAgrIAAgBQAAgBAAgBg'
      )
    this.shape_18.setTransform(637.5194, 824.9416)
    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f('#05104D')
      .s()
      .p(
        'ACEFeIgigCIgcgEIgcgGIAAAAIgYgGIgDgCIgMgDIgEgCIgPgFIAAgBIgBAAQg2gYg3giIgBgBIgCgBIgPgKIgBAAQgXgPgYgMIgLgFIgLgFIgBAAIgBAAQg8gZg0gCQgZgFgQADIgCAAQgMACgMAIIgBAAIAAAAQgJAFgMAFIgRAGQgrAQg1gDQhVgMhVgnIAAAAIgFgCIgIgDIgCgBQgegOgcgRIgBgBIAAABIAAgBIgHgEIgTgPQghgggHgxIAAgDIAAgDIACgKQAKgcAZgUQARgNASgKIACgBQASgKAUgIQAUgIAVgFQBSgSBOgWIBsgaIABAAIABgBIABAAIARgDIADgBIAIgCIACAAIABAAIAJgCIAIgEIAEgCIAMgJIABAAIABgBIAAAAIAMgJIAOgLIAagTIBdg6IAGgEIAAAAIACAAIAfgSIACAAQAWgMAWgLIABAAIABgBIADgBIABAAQAwgXAvgFIABgBQAPAAAMAEIADABIAJABIAOADIACACIABAAIAFACIACAAQAYAIAYALIABAAIAAABIAAAAIAcALIACACIAAAAQAfAOAiAMIADABIACAAIBwAaQAUADATABIACAAIABAAIAEAAIABAAIAaABQAfACAfgEIACAAIATgCIACAAIAhgBIBmgGIAFAAIAEAAQAKAAAIAGQAsAdAZAiIAAABQAGAIAFAIIABABQAMAWARASIABABIAAABQAZAeAlAfIAcA3IACACIACAFIABADIACAGIAAAAIADAKIAEAKIgCASIgBADIgfBpIgBACIAAABIgCAEQgcAdgYANIgBAAIgMAGIgBAAIgBABQgRAKgZAHIgBAAIgbAFIgGABIgTACIgIgBIAAAAQhngHhbAgIgEACIgCAAQgnAMgnASIgCACIgBAAIgFACQgYAMgYAJIhPAbIggAHQgYAFgWAAIgLgBg'
      )
    this.shape_19.setTransform(635.275, 824.4633)
    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f('#1294E4')
      .s()
      .p(
        'ABKIvIgBAAIgCAAIgbgDIAAABIgBgBIgCAAIgCAAQgogHgqgQIgCAAQgbgLgagNIgBgBQhBghhCgpIAAABIgCgCIgagQQgYAQgbALIgCABIAAAAIAAAAIgWAJQhkAlhggeIAAAAIgFgBQgugQgogdIithGIgCAAIgBAAIgPgIIgCAAQgvgVgsgcIgBgBIAAABIgegVQhRg9gdheIAAgBQgNglAAgrIAAgBIAAgCIAAgDIABgBQAAgwAQglQAlheBYg3IAXgNQAxgZAygQIAVgGIACgBQBYgWBMgxIABAAQAigrAogeIAEgCIAAgBQBZhCBpgBIABAAIAJgBIACAAIABABQAfAAAcAFQATgKATgIQBJgjBIgQIAAABIABgBIACAAQAYgFAYgCIABgBIABAAQAxgEAvALIACABIABAAIASAFIAAABIACABQA8ATA6ApIAIAFIABABIABABQAQANASABQAYgDAWgGIAEgBIAAAAQBzgdBxATIABAAIAAABQAiAEAgALIACABQA2AUA1AVIAFACIABABIANAGIACABQAgAQAcASIAAAAQBPAwAkBeIAFALIABACQAHAPANAKIAAABIABAAIAAAAIAiAWIABABIABAAQAdATAUAdIABACQAhA0AHBGIAAABQACAagCAbIAAACIAAABQgFBLglA8IAAAAIgBABQgMAVgRAPIgCACQgOAPgRANIgCACQgEADgBAEIgBACQgHAPgJANIAAABIgBAAIAAABIAAABQg/BbhvASIgBAAIgCABIAAAAIgIABIgBAAIgCAAQgiAFgiABIgGABQgtABgqAVIgBABIgBAAIgjAQIgdAPIgDAAQhcAvhjAEIgBgBIg5ACQgaABgXAKIgQAGIgBAAQg4AUg5AAIgIAAgAleC1QAzACA9AZIABAAIAMAEIALAGQAXALAYAQIABAAIAOAJIACACIABAAQA4AiA2AYIAAABIAAAAIAPAGIAFABIAMAEIADABIAXAHIABAAIAbAGIAcAEIAiACQAbABAegFIAggIIBQgbQAYgJAYgLIAEgCIABgBIACgBQAngSAogNIABAAIAEgCQBbgfBnAHIABAAIAIAAIASgBIAHgBIAagFIACgBQAZgHAQgKIACAAIAAAAIANgGIAAgBQAYgNAdgcIABgFIAAAAIABgCIAghqIAAgCIADgTIgDgJIgBAAIgEgKIAAAAIgCgHIAAgCIgDgGIgBgBIgdg3QgkgggZgeIgBAAIAAgBQgRgSgNgXIAAAAQgFgJgHgIIABgBQgZgigsgdQgJgFgJgBIgFAAIgEABIhmAFIghACIgCAAIgTABIgDAAQgeAEgfgBIgbgBIgEgBIgBAAIgDAAIgmgDIhxgaIgCgBIgCgBQgjgMgfgNIAAgBIgCgBIgbgLIgBgBIAAAAIAAAAQgYgMgYgIIgCAAIgGgCIgBAAIgCgBIgNgDIgJgCIgCgBQgOgEgOABIgCAAQgvAGgwAXIgBAAIgCABIgBABIgBAAQgXAKgWAMIgBABIggARIgBABIAAAAIgHADIhcA6IgbAUIgNAKIgMAJIgBABIgBAAIAAABIgMAIIgEACIgJAEIgJACIgCAAIgIACIgEABIgRAEIgBAAIgBAAIAAAAIhtAaQhNAXhSARQgVAFgVAIQgTAIgTALIgCAAQgRALgRANQgZATgKAdIgCAKIAAADIgBACQAHAxAiAgIATAPIAGAFIABAAIAAAAIAAAAQAdASAdAOIACAAIAIADIAFACIABAAIAAABQBVAnBVALQA1AEArgQIAQgHQAMgEAJgGIABAAIAAAAQAMgIANgBIABAAIAOgCQAMAAAQAEg'
      )
    this.shape_20.setTransform(637.5194, 824.9416)
    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics
      .f()
      .s('#05104D')
      .ss(11, 1, 1)
      .p(
        'AwhgVQAAgBAAgBQgHguAIgmQAThdBWg+QAWgOAAgBQAsgaAvgUQAKgFAKgEQABAAABgBQBTggBQgbIABAAQAwgXA0gKQADgBACAAQAAgBAAABQBugUBiAtQAAAAABABQAFABAEACQAAABABAAQAAABABAAQAcAOAXAUQARgLASgKQBCgoBBgiQAAAAgBABQABAAAAgBQAAAAABAAQAWgMAWgJQABAAAAgBQABAAAAAAQAugSAugJQABgBABABQAAAAABgBQAJgBAKgCQAAABABAAQAAAAABAAQBBgHBDAQQAEACAFABQAAAAABAAQAAAAABAAQARAGATACQAXAAAXAAQABAAACAAQB0ACBlA4QABAAAAAAQABAAAAAAQAcAPAeAQQABABABAAQAyAcA4ADQACAAACAAQABAAAAAAQAHABAHAAQABABABAAQAjADAiAEIABAAQBhAJBLA/QAFAEAFAEQAAAAABABQAMALANAKQABAAAAABQARALAOAMQABABAAABQAaAWAOAfQABACAAABQAZA5gCBBQAAABAAAAQgCAagFAaQAAAAAAABIAAAAQgQBKg0AuIgBAAQgBABAAAAQgRAPgVALQgBABAAAAQgSAKgTAKQgCABAAAAQgEACAAAFQAAACAAABQgBAQgEAPQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgYBrhlA2QgBABAAAAQgBABgBAAIAAABQgDABgEACQAAAAgBAAQgBABgBAAQgeAOggAIQgCABgDABQgqAJgsAKQAAAAgBAAQAAAAgBAAQgTADgTACQgRABgQABQgBAAgCAAQhkAIhhgYQgBAAgBgBQgagHgcgDQgagBgUAQQAAAAAAAAQgHAFgHAFQAAABgBAAQgzAlg4AWQgBABgBAAQgNAFgNADIAAAAQgBAAAAAAQgBAAgBABQgBAAgBAAQgoAKgsAAQgBAAgBAAQgdgBgcgFQgBAAAAAAQhHgMhHgbIAAAAQgBAAgBgBIAAAAQgNgFgOgGQgeACgegCQgBgBgBAAIAAAAQgMAAgMgCQhrgKhMhBQgCgBgCgCQgkgggbgrQhLgthegTQAAAAgBAAQgBAAgBAAQgHgCgHgCQgBAAgBAAQgxgMgugUQgBAAAAAAQgRgIgQgIQhYgtgxhQQAAAAgBgBQgWghgGgoIAAAAQAAgBAAgBg'
      )
    this.shape_21.setTransform(637.4941, 827.009)
    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics
      .f('#05104D')
      .s()
      .p(
        'AgPE4IAAgBIgcgCIhTgVIgEgCIgDgBIgBAAIgCgBIgPgGIAAAAIgBAAIgJgEIgKgEIg0gVIgBgBQg8gYgogdQgTgQgNgQIgBgBQgJgNgOgIIgBAAIAAgBIgBAAIAAAAQgJgGgOgGIgSgGIhdgaQhPgYhVgVIAAAAIgBAAIgOgDIgCAAQgWgFgWgIIgNgFIgEgCIgBAAIgJgEIgUgKQgpgWgVgpIAAAAIAAgDIAAgKQADgeAbgUQARgMARgKIADgBQARgKASgJQATgJAUgHQBMgYBOgHQA8gCAwASIAAAAIABABIABAAIAIAFIAIAEIACACIAGAEIADADIABACIACABIAbASIAKADIABAAIABABQALACAOAAIAKAAIAAAAQAigBAigJIA2gUIASgJIABAAIALgGIAIgEIALgHIABAAIABgBIAUgNIAUgMIABgBIABgBIADgBQAqgaAqgTIACgBIAZgJIADAAIAXgKIADAAQAdgKAegGIAAAAIABAAIAfgGIACAAIgBABQAhgEAlAGIAFABIBtAZIAjAMIACAAIABAAIAEACIAJAEIACABIAOAGQAbANAcAKIACABIASAHIACABQBCAYBHAGQAJABAJADQAxAQArAIIgBABIAVAEIABAAQAaAHAbAEIABABIAAAAQAoAHApAYQALAeAAAdIAAACQAAAEgCACIgHAEIgGAFIgNAJIgLAJIgHAHIgIAIIgBAAQgYAYgRAfIgIAQIgIASIAAACIgBACIgBADQgTAggIAeIgBACIAAAAIgEAOIgBACQgEAWgSARIgBABIgBABIgCACQgIAGgLAGQgPAIgQgCIi+gWIgDAAIgBAAIgBAAIgDgBIgDAAQgngFgnABIAAAAIgCAAIgCAAIgDAAIgdADIhTAQIgnAMIgKAEQgbAKgZALQgRAIgOAJIgaAOIgaALIgBABIAAgBIgZAJIgCAAQgRAFgQAAIAAAAg'
      )
    this.shape_22.setTransform(636.15, 827.1569)
    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .f('#1294E4')
      .s()
      .p(
        'AgHH/IgCAAQgdgBgcgFIgBAAQhHgMhHgbIAAAAIgCgBIAAAAIgbgLQgeACgegCIgCgBIAAAAIgYgCQhrgKhMhBIgEgDQgkgggbgrQhLgthegTIgBAAIgCAAIgOgEIgCAAQgxgMgugUIgBAAIghgQQhYgtgxhQIgBgBQgWghgGgoIAAAAIAAgCIAAgCIAAgCQgHguAIgmQAThdBWg+IAWgPQAsgaAvgUIAUgJIACgBQBTggBQgbIABAAQAwgXA0gKIAFgBIAAAAQBugUBiAtIABABIAJADIABABIABABQAcAOAXAUIAjgVQBCgoBBgiIgBABIABgBIABAAQAWgMAWgJIABgBIABAAQAugSAugJIACAAIABgBIATgDIABABIABAAQBBgHBDAQIAJADIABAAIABAAQARAGATACIAuAAIADAAQB0ACBlA4IABAAIABAAIA6AfIACABQAyAcA4ADIAEAAIABAAIAOABIACABIBFAHIABAAQBhAJBLA/IAKAIIABABQAMALANAKIABABQARALAOAMIABACQAaAWAOAfIABADQAZA5gCBBIAAABQgCAagFAaIAAABIAAAAQgQBKg0AuIgBAAIgBABQgRAPgVALIgBABIglAUIgCABQgEACAAAFIAAADQgBAQgEAPIAAABIAAAAIAAABIAAABQgYBrhlA2IgBABIgCABIAAABIgHADIgBAAIgCABQgeAOggAIIgFACIhWATIgBAAIgBAAQgTADgTACIghACIgDAAQhkAIhhgYIgCgBQgagHgcgDQgagBgUAQIAAAAIgOAKIgBABQgzAlg4AWIgCABIgaAIIAAAAIgBAAIgCABIgCAAQgnAKgpAAIgEAAgAmKCOIAAAAIABABQANAIAKANIABABQAMAQAUAQQAoAdA7AYIABAAIA1AWIAJAEIAJADIABAAIABABIAPAFIABABIABAAIADACIAEABIBUAVIAbADIAAABQASAAAQgFIACAAQAMgEAMgFIACAAIAagMIAZgNQAPgKARgHQAZgMAbgKIAKgDIAngMIBSgQIAdgDIAEAAIACAAIABgBIABAAQAngBAmAFIADABIADAAIACABIABAAIADAAIC9AVQARACAOgHQALgGAJgHIACgCIABAAIABgBQASgRAEgWIABgCIAEgOIAAgBIAAgBQAJgeATggIABgDIABgDIABgCIAHgRIAIgRQAQgfAZgXIABgBIAHgIIAJgHIALgJIgBAAIAMgJIABAAIAGgEIAHgEQACgCAAgFIAAgBQAAgdgLgfQgpgXgogIIAAAAIgBAAQgbgEgagHIgBAAIgWgFIABAAQgrgIgwgRQgJgDgJgBQhIgGhBgYIgCgBIgSgGIgCgBQgcgKgcgNIgNgGIgDgCIgIgDIgFgCIAAAAIgCgBIgjgMIhugZIgEgBQglgFghADIABAAIgDAAIgeAGIgBAAIAAgBQgeAGgeAKIgCABIgXAJIgDAAIgZAKIgCABQgqATgrAaIgCABIgBABIgBAAIgVANIgUAMIgBABIgBAAIgLAHIgHAEIgLAHIgBAAIAAAAIgSAJIg2ATQgjAKghAAIgBAAIgJABQgOAAgMgDIgBAAIAAgBIgLgDIgbgSIgBgBIgBgCIgEgCIgFgEIgCgCIgIgFIgIgEIgBgBIgBAAIAAgBQgwgSg9ACQhOAIhMAYQgTAGgTAKQgSAIgSALIgCABQgRAKgRAMQgbATgDAeIAAAKIAAADIAAABIAAAAQAVApApAWIAUAKIAJAEIABAAIAEACIANAEQAVAIAXAFIACABIAOACIABABIAAAAQBVAVBPAYIBcAaIASAGQAOAFAKAGIAAAAIABABg'
      )
    this.shape_23.setTransform(637.4941, 827.009)
    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics
      .f()
      .s('#05104D')
      .ss(11, 1, 1)
      .p(
        'APBk1QBHAiAVBEQABACAAABQAbBXgcBXQAAABAAAAIAAABQggBghkAgQgBAAgBAAQgUAGgUAIIgBAAQgBABAAAAQgEACABAFQAAABAAACQAVCVh2BdIAAABQgBAAgBABQhTBBhrgQQh+gThygyIgBAAIgBgBIABAAQgbgMgbgHQgagCgRAUIgBAAQgxA5g8AsIgBAAQgBABgBABQg0AkhAANIgBAAQgBAAgBABQhnAShqgaIABAAQgCAAgBgBIABABQg/gOg6gYQiohCg5inQhGg2hggGQAAAAgBAAQgBAAgBAAQhNgHhIgbQhegig/hGQAAgBAAAAQgdgegKgnIAAAAQgBgBAAgBQgsiiCShjIAAAAIABgBIAAABQApgbAsgYQCOhNChAJQADAAACAAQABAAAAABQCDANBfBUQABABAAABQABAAABABQAaAYATAeQBOg3BMg6IgCABIABgBQAAAAABgBQA/gwBGgiQAAgBABAAQABAAAAAAQBOgjBVAAQCvABCFByQABAAAAAAQABAAAAABQAZAVAbAUQABABACABQAvAgA5gKQADAAACgBIAAAAQAugGAugHIAAAAQABAAAAAAQB2gUBrAxQABAAABABg'
      )
    this.shape_24.setTransform(637.3741, 828.0928)
    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics
      .f('#1294E4')
      .s()
      .p(
        'AjCHsIABAAIgDgBIABABQg/gOg6gYQiohCg5inQhGg2hggGIgBAAIgCAAQhNgHhIgbQhegig/hGIAAgBQgdgegKgnIAAAAIgBgCQgsiiCShjIAAAAIABgBIAAABQApgbAsgYQCOhNChAJIAFAAIABABQCDANBfBUIABACIACABQAaAYATAeQBOg3BMg6IgCABIABgBIABgBQA/gwBGgiIABgBIABAAQBOgjBVAAQCvABCFByIABAAIABABQAZAVAbAUIADACQAvAgA5gKIAFgBIAAAAIBcgNIAAAAIABAAQB2gUBrAxIACABQBHAiAVBEIABADQAbBXgcBXIAAABIAAABQggBghkAgIgCAAQgUAGgUAIIgBAAIgBABQgEACABAFIAAADQAVCVh2BdIAAABIgCABQhTBBhrgQQh+gThygyIgBAAIgBgBIABAAQgbgMgbgHQgagCgRAUIgBAAQgxA5g8AsIgBAAIgCACQg0AkhAANIgBAAIgCABQgpAHgrAAQg+AAg/gPgAsAjIQgkATghAWIAAAAIgBABQgiAXAKAnQAeAjAuARQAuAQAxAFIACAAQCmAMB4BhQAkAdAOAqIABACQAcBZBXAjIABAAIAAABQArARAuAKIABAAIAAABIABAAQA/APA+gLIgBABQATgFAQgLIACgBQAogeAignIABAAQBehuCRAaIAFABIABAAQAwAMAuAUIABABQBZAmBhAPQAQADANgKIAAgBQAlgegHgwIAAgDQgViYCZg0IAAAAQAYgJAXgHQAEgCACgFIAAgBQAKgggHgfQgugSgxAIIgBAAIgBABQgxAHgyAGIABAAQiMAYh1hQIgCgCQgkgagigcIAAAAIgBgBQhLhAhigBQgmAAgjAPIABAAIgCABIAAAAQgzAZgsAjIgDABQhUBChYA9IgBAAQhVA7hfggQg5gOgcg3IgCgDIAAAAQgKgUgPgPIAAAAIgBgBIgBgBQgugng+gHIgQAAQhaAAhRAsg'
      )
    this.shape_25.setTransform(637.3741, 828.0928)
    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics
      .f('#05104D')
      .s()
      .p(
        'AiRE4IgBAAIAAgBIgCAAQgtgKgrgRIgBgBIgBAAQhWgjgdhZIgBgCQgNgqglgdQh4hhilgMIgCAAQgxgFgugQQgugRgfgjQgKgnAjgXIAAgBIAAAAQAigWAjgTQBYgwBjAEQA+AHAvAnIAAABIABABIABAAQAPAPAKAUIAAAAIABADQAcA3A5AOQBfAgBVg7IACAAQBXg9BVhCIACgBQAsgjAzgZIABAAIACgBIgBAAQAigPAmAAQBiABBMBAIAAABIABAAQAhAcAlAaIACACQB0BQCNgYIgBAAQAygGAxgHIABgBIABAAQAxgIAtASQAHAfgJAgIgBABQgBAFgEACQgYAHgYAJIABAAQiZA0AUCYIAAADQAHAwgkAeIAAABQgNAKgRgDQhhgPhZgmIAAgBQgugUgwgMIgBAAIgFgBQiRgahfBuIAAAAQgiAngpAeIgCABQgPALgUAFIABgBQgaAFgZAAQglAAgkgJg'
      )
    this.shape_26.setTransform(637.4361, 828.0775)
    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics
      .f()
      .s('#05104D')
      .ss(11, 1, 1)
      .p(
        'AwfhbQgBgBAAgBQgEhBAogvQAqg0BLghQAfgMAdgJQAPgFAOgEQAfgJAfgHQBIgPBDgOQAigIAggEQANgCANgCQB9gIBpAzQABABABAAQASAKARAMQAAAAAAABQAIAFAIAGQA8gYA6gVQAAAAABAAQAVgIAUgGQAAABAAAAQABAAABAAQA/gTA4ACQABAAABAAQAAAAABAAQAVgEAdgDQA5gJAzgCQAJAAAJgBQAggHAigCQABAAABAAQBsgDBpAxIABAAQAAAAABAAIAAAAQABABAAAAQAbANAcANQABAAACABQAwAVA3gEQACAAADAAIAAAAQAtgBArAAIABAAQAAAAABAAQATgBATABIAAAAQAwADAtAMQABAAAAAAIABAAQApAMAkATQABAAABABQBFAmALBCQABACAAABQAFAegEAfQgDAogVAlIAAABQgEAIgGAIQAAABgBAAQgjA9hIAdQgBAAgBABQgRAGgRAFQgBAAgBAAQgTAFgUAGQgBABgBAAQgEABgBADQAAABAAABQgHAVgLATQgBABAAACQgrBChRA5QgDAEgDADQgCABAAAAQhGBDhoAFQglAAgngCQgBAAgBAAQg8gEg8gMQgBAAAAAAQgSgEgRgEQgBAAAAgBQgagHgbgDQgYgCgTANQAAAAAAAAQgcASgeAPQgBAAgBAAQAAABgBAAQAAAAAAABQgdANgcAKQAAAAgBAAQgBAAgBABQgTAGgUADQgjAGglgBQgBAAgBAAQgbgBgagFIgBAAIAAAAQgjgFgngBQghAAgfgCQgBAAAAAAQgBAAgBAAQgCAAgDgBQgBAAgBAAIAAAAQg8gDg5gMQg6gLgxgVQhRghgyhGQgBgBgBgBQgGgJgGgKQhNg0g/geQgBAAAAAAQgBAAgBgBQgJgFgJgGQgSgDgRgEQgBAAgBAAQgBAAgBAAQgogJgkgPQgwgUghghQgegdgTghIAAgBQgRgggBgkg'
      )
    this.shape_27.setTransform(641.9914, 832.1235)
    this.shape_28 = new cjs.Shape()
    this.shape_28.graphics
      .f('#05104D')
      .s()
      .p(
        'AgvDkIgPgCQgwgGg0gNIgBAAIAAgBIgBAAIhWgVIAAAAIgBAAQgXgGgVgIIgCAAIgBgBQgqgRgdgaIgBAAIAAAAIgKgLIgBgBQgXgYglgQQgvgUg0gOQgcgHgbgKIgBAAQgLgFgIgFQgegbgugRIgCAAIgUgIIAAAAIgBAAIhAgYQgZgKgYgMIgCgBIgZgQIgCgCQAFgaAigOIAVgIIAxgRIAugMQBDgNBEgBQA7ABAvASIADABIAGADQAMAGAKAIIACABQAPAMAUAGQAWAJAeACQBMAJBMgZIAXgJIACAAIA8gXQASgFAPgCQAegEAngKIABAAQAqgNA2gMIAAAAIACAAQAcgGAgAAIAKAAQBiADBIAkIAAAAIABAAIAPAHQAcANAbAHIACABQAQAEARAAIAXACQA+AIBIgDQAaAAAagDQAwgDAugCIACAAIABAAQAogCAmAMIABAAIACABIAJADQANAXADAXIAAACIgBAEIgBABIguAQIAAAAIgHABQg5ATgnAaIgCACQgzAigOA6IgBACQgJAhglAXIAAABQgNAIgPAAIg0ABQguAAgjACQgQABgRgBIAAAAQgogFgvgCIgBAAIgFAAIgDAAIgBAAQg1gCgyAKIgBAAIgBAAQhFAPg7AnIAAAAIgHAEQgWAMgVAIIgBABIgbAJIgCAAQgPADgPAAIgEAAg'
      )
    this.shape_28.setTransform(641.5, 833.0772)
    this.shape_29 = new cjs.Shape()
    this.shape_29.graphics
      .f('#1294E4')
      .s()
      .p(
        'Ag6GXIgCAAQgbgBgagFIgBAAIAAAAQgjgFgngBQghAAgfgCIgBAAIgCAAIgFgBIgCAAIAAAAQg8gDg5gMQg6gLgxgVQhRghgyhGIgCgCIgMgTQhNg0g/geIgBAAIgCgBIgSgLIgjgHIgCAAIgCAAQgogJgkgPQgwgUghghQgegdgTghIAAgBQgRgggBgkIAAgDIgBgCQgEhBAogvQAqg0BLghQAfgMAdgJIAdgJQAfgJAfgHICLgdQAigIAggEIAagEQB9gIBpAzIACABQASAKARAMIAAABIAQALQA8gYA6gVIABAAIApgOIAAABIACAAQA/gTA4ACIACAAIABAAQAVgEAdgDQA5gJAzgCIASgBQAggHAigCIACAAQBsgDBpAxIABAAIABAAIAAAAIABABIA3AaIADABQAwAVA3gEIAFAAIAAAAIBYgBIABAAIABAAQATgBATABIAAAAQAwADAtAMIABAAIABAAQApAMAkATIACABQBFAmALBCIABADQAFAegEAfQgDAogVAlIAAABIgKAQIgBABQgjA9hIAdIgCABQgRAGgRAFIgCAAIgnALIgCABQgEABgBADIAAACQgHAVgLATIgBADQgrBChRA5IgGAHIgCABQhGBDhoAFQglAAgngCIgCAAQg8gEg8gMIgBAAIgjgIIgBgBQgagHgbgDQgYgCgTANIAAAAQgcASgeAPIgCAAIgBABIAAABQgdANgcAKIgBAAIgCABQgTAGgUADQgeAFggAAIgKAAgArCiqIgtAMIgyAQIgVAIQghAPgFAaIABABIAaARIACABQAXAMAZAJIBAAYIABAAIAAABIAUAHIACABQAvAQAdAcQAIAFAMAEIAAAAQAbAKAdAIQAzANAvAVQAlAQAXAXIABABIALALIAAABIAAAAQAdAaAqARIABAAIADABQAUAHAXAGIABAAIABABIBVAVIACAAIAAAAIABAAQAzANAxAHIAPACQARAAAQgEIACAAIAcgJIABAAQAUgJAWgLIAHgFIAAAAQA7gnBGgPIABAAIABAAQAxgKA1ADIABgBIADAAIAFABIABAAQAwACAnAEIABABQARABAPgBQAjgCAvgBIAzgBQAPAAAOgIIAAAAQAkgYAKghIAAgCQAPg6AygiIACgBQAngbA6gSIAHgCIgBAAIAugPIACgBIABgFIgBgBQgDgYgNgWIgJgDIgCgBIAAAAQgngNgoACIgBAAIgBABQgvABgwAEQgaACgZABQhJADg+gIIgXgCQgQgBgRgEIgCgBQgagHgdgNIgPgGIgBAAIAAgBQhIgjhigDIgKgBQggAAgbAHIgCAAIgBAAQg1ALgpAOIgDAAQgmAJgfAEQgOACgTAGIg8AWIgCABIgXAIQhMAahMgKQgdgBgXgJQgTgGgQgMIgCgCQgKgIgMgGIgGgCIgDgCQgvgSg6gBQhFABhDAOg'
      )
    this.shape_29.setTransform(641.9914, 832.1235)
    this.shape_30 = new cjs.Shape()
    this.shape_30.graphics
      .f()
      .s('#05104D')
      .ss(11, 1, 1)
      .p(
        'Awdh6QABgBAAgBQAJg4A7giQA4gkBLgPQAfgGAegCQAPgCAPgBQAfgDAfgCQBKgDA/gTQAfgKAdgKQANgEAMgDQBygdBxAUQACABABAAQASAEATAGQAAAAAAAAQAKADAJADQA/gLA7gBQABAAAAAAQAWAAAUACQAAABABAAQABAAABAAQA/AIAtAkQAAAAABAAQABABAAAAQASADAgAAQA7gBAtgFQAJgBAIgBQAbgPAhgLQABAAABAAQBigcBzAUIABAAQAAAAABAAQAAAAABAAIAAAAQAdAGAdAGQABAAABABQAyALA0ACQADABACAAQABAAAAAAQArADAqAGQAAAAABAAQAAAAABAAQARACARADQAAABABAAQAtAIArAOIAAAAIABABQApAOAgATQABABABAAQBCAqADBAQAAABAAACQABAcgLAeQgIAkgeAeIAAAAQgGAHgHAGQgBABgBAAQgtAuhJAWQgBABgBAAQgRAFgQAEQgBAAgBAAQgTAEgTAFQgCAAAAAAQgEABgDABQAAABgBAAQgSAMgUAKQgBABgBABQhKAhhOAtQgCADgDAEQgBABgBABQg5BEhlAXQgjAHgnAEQgBAAgBAAQg7AFg7gBIgBAAQAAAAgBAAQgQAAgRgCQAAAAgBAAQgZgCgagBQgXAAgVAGQgfAIggAFQgBAAAAABIgBAAQgfAEgdAAIAAABQgBgBgBAAQgUAAgUgCIAAgBQgjgEgigKQgBAAgBAAQgZgIgYgKIAAgBQgfgLgoABQggADgfADQAAAAgBAAQAAABgBAAQgCAAgCAAQgBAAgBAAQg5AGg6gBQg5AAg1gHQhYgMg+g0QAAAAgBgBQgIgHgIgHQhSgzgjgyIAAgBQgBgBAAAAQgFgJgEgKQgRgDgRgDQgBgBAAAAQgBAAgBAAQgpgIgggPQgvgWgZglQgZghgIgjIAAgBQgIghAJgjg'
      )
    this.shape_30.setTransform(645.9161, 835.1626)
    this.shape_31 = new cjs.Shape()
    this.shape_31.graphics
      .f('#05104D')
      .s()
      .p(
        'AgnCsIgDgBQgPgCgQgFIgOgGQgrgSgxgNIgBAAIAAAAIgCAAQgogKgrgGIgBAAIgtgFIgCAAIgBAAQgsgFgkgGIgBAAIgOgDIgBAAQgfgHglgEQgxgFgzgEQgdgCgagKIgBAAQgLgGgGgFQgHgqgmgbIgBAAQgIgHgKgFIAAgBIgBAAQgXgQgjgNIgwgSIgCgBIgbgLIgBgBQASgOAigGIAVgDIAygGIAtgDQBDgDBAgFQA3gEAwgBIADAAIAGAAIAZAAIADABQASAAAUgDIAygGQBGgHBOgMIAXgEIACAAQAfgEAegBQATABANAJQAWASAlAKIADAAQAnAHA3ABIABAAIADAAQAaAAAeABIAKABQBjAFBEAKIAAAAIABAAIAPABQAeAFAZgFIACAAQAQgDAOgIQAJgFANgDQA4gKBIgEIAwgCIABAAQAugBAtAEIACAAIABAAQAlADAkAMIABAAIABAAIAJADQAUAPAPAQIABACIACADIgCABQgUAIgYAGIAAAAIgGACQg2APgtAOIgDAAQg7ASglAhIgCABQgZAUgkASQgNAGgOADIgxAKQgtAMgZATQgNAIgPAGIgBAAQghAKgxAGIgBAAIgDAAIgFABIAAAAIAAAAQgyAFgxAIIgBAAIAAAAQhEANg+APIgIACQgYADgTAAIgBAAIgegDg'
      )
    this.shape_31.setTransform(645.5, 836.025)
    this.shape_32 = new cjs.Shape()
    this.shape_32.graphics
      .f('#1294E4')
      .s()
      .p(
        'AgRFbQgUAAgUgCIAAgBQgjgEgigKIgCAAQgZgIgYgKIAAgBQgfgLgoABIg/AGIgBAAIgBABIgEAAIgCAAQg5AGg6gBQg5AAg1gHQhYgMg+g0IgBgBIgQgOQhSgzgjgyIAAgBIgBgBQgFgJgEgKIgigGIgBgBIgCAAQgpgIgggPQgvgWgZglQgZghgIgjIAAgBQgIghAJgjIgBgBIABgCQAJg4A7giQA4gkBLgPQAfgGAegCIAegDIA+gFQBKgDA/gTIA8gUIAZgHQBygdBxAUIADABIAlAKIAAAAIATAGQA/gLA7gBIABAAQAWAAAUACIABABIACAAQA/AIAtAkIABAAIABABQASADAgAAQA7gBAtgFIARgCQAbgPAhgLIACAAQBigcBzAUIABAAIABAAIABAAIAAAAIA6AMIACABQAyALA0ACIAFABIABAAQArADAqAGIABAAIABAAIAiAFIABABQAtAIArAOIAAAAIABABQApAOAgATIACABQBCAqADBAIAAADQABAcgLAeQgIAkgeAeIAAAAIgNANIgCABQgtAuhJAWIgCABIghAJIgCAAIgmAJIgCAAIgHACIgBABQgSAMgUAKIgCACQhKAhhOAtIgFAHIgCACQg5BEhlAXQgjAHgnAEIgCAAQg7AFg7gBIgBAAIgBAAIghgCIgBAAIgzgDQgXAAgVAGQgfAIggAFIgBABIgBAAQgfAEgdAAIAAABIgCgBgAk9BzIACAAIAtAFIABAAQArAFAoAKIACAAIAAABIABAAQAxAMArASIAOAGQAQAFAPADIADAAIAdAEIABgBQAUABAYgEIAIgBQA9gQBEgMIABAAIABAAQAxgJAxgEIABAAIAAgBIAEAAIAEgBIABAAQAwgGAigKIABAAQAPgFANgIQAYgUAugLIAwgLQAOgDAOgGQAkgRAZgUIABgBQAmghA7gSIACgBQAugOA1gOIAHgCIAAAAQAYgHAUgIIACgBIgCgDIgBgBQgPgQgUgPIgJgDIgBgBIgBAAQgkgMglgDIgBAAIgCAAQgtgDguABIgBAAIgxABQhHAEg5ALQgMADgJAEQgOAIgQAEIgCAAQgZAEgfgFIgOgBIgBAAIgBAAQhEgJhigFIgKgBQgegCgbABIgDgBIAAAAQg4AAgmgHIgDgBQglgJgXgTQgMgJgTgBQgeABgfAFIgCAAIgYAEQhNAMhGAHIgzAGQgTACgTAAIgCAAIgZAAIgGAAIgEAAQgvABg3ADQhBAFhCADIguAEIgxAFIgWADQghAGgSAPIABAAIAbALIACABIAwASQAiANAYAQIABABIAAAAQAKAGAIAGIABABQAmAbAHApQAGAGALAFIABAAQAZAKAeADQAzADAxAGQAlAEAfAGIABABIAOADIABAAQAkAGAsAFIAAAAIABAAg'
      )
    this.shape_32.setTransform(645.9161, 835.1626)
    this.shape_33 = new cjs.Shape()
    this.shape_33.graphics
      .f()
      .s('#05104D')
      .ss(11, 1, 1)
      .p(
        'AQWgNQgNAggoAZIABgBQg8AphXATQgBABgBAAQhEAPhHAEQgCAAgBAAQhmAEhMAiQg6BlikAoIgCAAQg5AOg7AIIgBAAQAAAAgBAAQhiAPhfgKQgBAAgBAAIgBgBIABAAQg6gHgwgUIAAAAQg+gbgygjIAAAAIAAAAQgcgRgpADQgfAFgeAIQAAAAgBAAQAAABgBAAQhuAdh5ALQheAIhIgjQgBgBAAAAQh+g9ALhgQgRgEgQgCQgBgBgBAAQgBAAgBAAQhogVgdhCIAAAAQgmhHAlhHQAAgBABAAQAVgxBMgXIABAAQAAAAABAAQBhgbBrALIABAAQAtAFAvADQABAAADAAIAAAAQBHAIA7gXIgBAAQAAgBABAAQAdgMAbgOQB+hCCkgBIABAAQBNAABGATQABAAABABQBjAdAsBWQAOAMAmADQBKAGArgLQAXgWAggSQAAgBABAAQBZgxB7gIQACgBABAAIABAAQCXgECGAsIAAAAQArAOApAQIAAAAIABABQC0BJhFCBg'
      )
    this.shape_33.setTransform(649.1059, 837.0791)
    this.shape_34 = new cjs.Shape()
    this.shape_34.graphics
      .f('#1294E4')
      .s()
      .p(
        'AgKFJIgCAAIgBgBIABAAQg6gHgwgUIAAAAQg+gbgygjIAAAAIAAAAQgcgRgpADQgfAFgeAIIgBAAIgBABQhuAdh5ALQheAIhIgjIgBgBQh+g9ALhgIghgGIgCgBIgCAAQhogVgdhCIAAAAQgmhHAlhHIABgBQAVgxBMgXIABAAIABAAQBhgbBrALIABAAIBcAIIAEAAIAAAAQBHAIA7gXIgBAAIABgBQAdgMAbgOQB+hCCkgBIABAAQBNAABGATIACABQBjAdAsBWQAOAMAmADQBKAGArgLQAXgWAggSIABgBQBZgxB7gIIADgBIABAAQCXgECGAsIAAAAQArAOApAQIAAAAIABABQC0BJhFCBQgNAggoAZIABgBQg8AphXATIgCABQhEAPhHAEIgDAAQhmAEhMAiQg6BlikAoIgCAAQg5AOg7AIIgBAAIgBAAQg6AJg5AAQgoAAgmgEgAhuBwQAiAYAqATIABAAQAVAIAYAEQBFAHBHgLIABAAIAAAAIABAAQAxgHAtgLIABAAIAAAAQBRgUAdgtQAQgjAtgVQBzg5CfgGIACAAQA0gDAxgLIAAAAQAdgHAXgKQgggNgigKIgBgBIgBAAQhigghuAEQhHAFgzAbIgBAAQgMAHgHAJIAAAAQgeAog4AEQhHAUh1gJQiqgPglhiQgJgSgUgHIgBAAQgqgMgtABIgBAAQhtgBhTAsQgjARglAQIAAAAQhrAtiBgNIhggIIAAAAQgsgFgoAFIAcAGIACABQBIAQAdAhIABAAIAAABQAwAqgPBBQADAGAMAHIABAAQAYAKAegDQBmgJBdgYIgBAAIACAAIAAAAQArgMAtgHIABAAIADAAQAYgDAXAAQBjAABFAzg'
      )
    this.shape_34.setTransform(649.1059, 837.0791)
    this.shape_35 = new cjs.Shape()
    this.shape_35.graphics
      .f('#05104D')
      .s()
      .p(
        'AAMCnQgYgEgVgIIgBAAQgqgTgigYQhVg/iCAPIgDAAIgBAAQgtAHgrAMIAAAAIgCAAIABAAQhdAYhmAJQgeADgYgKIgBAAQgMgHgDgGQAPhBgwgqIAAgBIgBAAQgdghhIgQIgCgBIgcgGQAogFAsAFIAAAAIBgAIQCBANBrgtIAAAAQAlgQAjgRQBTgsBtABIABAAQAtgBAqAMIABAAQAUAHAJASQAlBiCqAPQB1AJBHgUQA4gEAegoIAAAAQAHgJAMgHIABAAQAzgbBHgFQBugEBiAgIABAAIABABQAiAKAgANQgXAKgdAHIAAAAQgxALg0ADIgCAAQifAGhzA5QgtAVgQAjQgdAthRAUIAAAAIgBAAQgtALgxAHIgBAAIAAAAIgBAAQgrAGgpAAQgcAAgcgCg'
      )
    this.shape_35.setTransform(649.125, 837.089)
    this.shape_36 = new cjs.Shape()
    this.shape_36.graphics
      .f()
      .s('#05104D')
      .ss(11, 1, 1)
      .p(
        'As/hWQAAgBAAAAQANgtAwgcQBAgqBOgPQAigHAjgGQA3gIAwgZQAagOAVgMQBqg8CFgLQA/gFA9AJQA8AKAsAfQAQAMANAOQAPAHAdACQA7AFAogEQAVgLAbgIQBQgXBgAJQA8AIA1AQQA9ASA2AcQAhARAeASQB+BKgmBuQgFAVgNARQgGAIgHAHQgkAtg6AeQgBABAAAAQguAZg0ASQgBAAgBABQhIAUg/AkQgMARgOAPQg8A6hlAeQgBAAAAAAQgvAPgxAJIgBAAQAAAAAAAAQhRAQhSgDQgBAAgBAAQAAAAAAgBQgvgCgrgMIgBAAQg0gQgtgXQgZgLghABQgaABgYAEIgBAAQAAAAgBAAQheAKhggHQhGgFg5gfIAAAAQgEgCgDgCQgBgBgBAAQhgg2gHhNQgMgGgMgFQgBAAAAAAQgBgBAAAAQhJgfgWg7IAAAAQgag6AUg7g'
      )
    this.shape_36.setTransform(643.5055, 840.435)
    this.shape_37 = new cjs.Shape()
    this.shape_37.graphics
      .f('#05104D')
      .s()
      .p(
        'AAOCtQgRgBgQgFIAAAAIgBgBQgfgLgagOQhDgnhcACIgCAAIgBAAQggACgfAEIAAAAQgiADgiAAIgCAAQgiABgigCQgUgCgRgJIgBAAQgHgFgDgFQADgtgegiIgBAAQgUgagrgSIgBAAIgRgIIAAgBQAYgKAbgDIA9gIQBTgHBPgnIA0gcQA+giBPgDQAigCAfAGQAPADAJALQAPAXAbAPQAtAXBHAHQBTAJA3gGQAnABAYgTIAPgIIALgDQAigHAoADQBMALA+AiQAXAMATAOQgKAGgMAFIgJAEQgdAPghAJIgBAAQhkAWhVAxIgLAHQgZAOgLAVQgaAgg4APIgBAAQghAJgkAGIAAAAIgBAAIAAAAQglAHgkAAIgggCg'
      )
    this.shape_37.setTransform(643.6, 840.3615)
    this.shape_38 = new cjs.Shape()
    this.shape_38.graphics
      .f('#1294E4')
      .s()
      .p(
        'AAYFrIgCAAIAAgBQgvgCgrgMIgBAAQg0gQgtgXQgZgLghABQgaABgYAEIgBAAIgBAAQheAKhggHQhGgFg5gfIAAAAIgHgEIgCgBQhgg2gHhNIgYgLIgBAAIgBgBQhJgfgWg7IAAAAQgag6AUg7IABgCIAAgBQANgtAwgcQBAgqBOgPIBFgNQA3gIAwgZIAvgaQBqg8CFgLQA/gFA9AJQA8AKAsAfQAQAMANAOQAPAHAdACQA7AFAogEQAVgLAbgIQBQgXBgAJQA8AIA1AQQA9ASA2AcQAhARAeASQB+BKgmBuQgFAVgNARIgNAPQgkAtg6AeIgBABQguAZg0ASIgCABQhIAUg/AkQgMARgOAPQg8A6hlAeIgBAAQgvAPgxAJIgBAAIAAAAQhEANhFAAIgaAAgAhMCMQAaAPAfAKIABABIAAAAQAQAFARACQA0AEA0gJIABAAIAAAAIABAAQAjgGAigJIAAAAQA5gPAZghQAMgUAZgPIALgGQBVgyBkgWIABAAQAggJAegOIAJgFQAMgEAKgHQgUgNgWgMQg+gjhMgKQgpgDghAGIgLAEIgQAHQgXAUgngBQg3AFhTgIQhIgIgsgWQgbgQgPgXQgJgKgPgEQgfgGgiACQhPAEg+AhIg1AcQhOAnhUAHIg8AJQgbADgYAJIAAABIARAIIABABQArARAUAaIABABQAeAhgDAuQACAFAIAFIABAAQAQAJAVABQAiACAiAAIACAAQAiAAAhgEIABAAQAfgEAggBIABAAIACAAIALgBQBVAAA/Alg'
      )
    this.shape_38.setTransform(643.5055, 840.435)
    this.shape_39 = new cjs.Shape()
    this.shape_39.graphics
      .f()
      .s('#05104D')
      .ss(11, 1, 1)
      .p(
        'AqPgnQAAgBAAgBQAGgpAZggQAkg2A2glQAXgQAagPQAngUAngaQAWgOASgLQBYg4BtgTQAzgJA0AAQAzACArANQAQAFAPAHQAPADAVACQAvAEAlADQAUgDAXgBQBIABBKAWQAxAQApAWQAwAaAoAfQAYATAVAVQBRBJgNBfQgBASgGARQgCAIgDAHQgRAxgiAmQgBABAAABQgcAhgkAdQAAAAgBABQgwAig0AmQgMANgNAMQg3AyhOAcQgBAAAAAAQgnAPgpAKIAAAAQhDARhHACQAAAAgBAAIAAAAQgpABgmgFQgtgHgpgMQgWgHgagBQgVgBgVgBQAAAAgBAAQhRgFhMgWQg4gPgvggIAAAAQgDgCgDgCQAAgBgBAAQhHgwgXg+QgIgHgIgHQgBAAAAgBIAAAAQgwgngQg2QgRgxAIgyg'
      )
    this.shape_39.setTransform(638.9451, 843.0507)
    this.shape_40 = new cjs.Shape()
    this.shape_40.graphics
      .f('#05104D')
      .s()
      .p(
        'AARC0QgNgBgLgCIgBAAQgWgFgUgHQg1gTg8gIIgBAAIgrgFIAAAAQgXgEgXgGIgCAAIgsgOQgMgEgLgJQgEgDgDgEQgFgegRgaIAAAAQgNgWgTgSIgBAAIgHgJIAAgDQAKgNAOgJQAOgLARgLQAugYA3giQAUgNASgKQAsgZA3gHQAXgEAXACQALABAHAEQAPAJAUAHQAkAKAvAGIBhAOQAaAFASgDIAMABIAGgBQAYAFAYAJQAxAWAfAkQAMANAJAOIgJAKIgEAFQgNAQgRAOIgBAAIhwBPIgIAGQgRALgLANQgWAWgmALIAAAAQgXAHgZAFIAAAAQghAHghAAIgJAAg'
      )
    this.shape_40.setTransform(639.075, 842.9834)
    this.shape_41 = new cjs.Shape()
    this.shape_41.graphics
      .f('#1294E4')
      .s()
      .p(
        'AgcGDQgtgHgpgMQgWgHgagBIgqgCIgBAAQhRgFhMgWQg4gPgvggIAAAAIgGgEIgBgBQhHgwgXg+IgQgOIgBgBIAAAAQgwgngQg2QgRgxAIgyIABgBIAAgCQAGgpAZggQAkg2A2glQAXgQAagPQAngUAngaIAogZQBYg4BtgTQAzgJA0AAQAzACArANQAQAFAPAHQAPADAVACIBUAHQAUgDAXgBQBIABBKAWQAxAQApAWQAwAaAoAfQAYATAVAVQBRBJgNBfQgBASgGARIgFAPQgRAxgiAmIgBACQgcAhgkAdIgBABIhkBIQgMANgNAMQg3AyhOAcIgBAAQgnAPgpAKIAAAAQhDARhHACIgBAAIAAAAIgHABQglAAgjgFgAhhixQg2AHgsAZQgSAKgUANQg3AiguAYQgRALgPALQgNAJgLANIAAADIAIAJIAAAAQAUASAMAWIABAAQARAaAFAeQACAEAFADQAKAJANAEIAsAOIABAAQAXAGAXAEIABAAIAqAFIABAAQA9AIA1ATQATAHAXAFIABAAQAKACANABQAmABAlgIIABAAQAYgFAYgHIAAAAQAlgLAXgWQALgNAQgLIAJgGIBwhPIAAAAQARgOANgQIAEgFIAKgKQgJgOgMgNQgggkgwgWQgZgJgXgFIgHABIgLgBQgTADgZgFIhhgOQgvgGglgKQgUgHgOgJQgIgEgKgBIgOAAQgRAAgQACg'
      )
    this.shape_41.setTransform(638.9451, 843.0507)
    this.shape_42 = new cjs.Shape()
    this.shape_42.graphics
      .f()
      .s('#05104D')
      .ss(11, 1, 1)
      .p('AFxEqIAAgBQCZh7AAiuQAAitiZh8QiYh6jZAAQjXAAiZB6QiZB8AACtQAACuCZB7IAAABQCZB7DXAAQDXAACah7g')
    this.shape_42.setTransform(635.625, 844.8)
    this.shape_43 = new cjs.Shape()
    this.shape_43.graphics
      .f('#1294E4')
      .s()
      .p(
        'AlwEpIAAAAQiZh7AAiuQAAiuCZh7QCZh7DXAAQDZAACYB7QCZB7AACuQAACuiZB7IAAAAQiaB7jXABQjXgBiZh7gAijiEQhFA4AABMQAABNBEA4IABAAQBDA2BgAAQBgAABEg2QBEg4AAhNQAAhMhEg4QhEg3hgAAQhgAAhDA3g'
      )
    this.shape_43.setTransform(635.625, 844.8)
    this.shape_44 = new cjs.Shape()
    this.shape_44.graphics
      .f('#05104D')
      .s()
      .p('AiiCFIgBAAQhFg4AAhNQAAhMBGg4QBDg3BfAAQBgAABFA3QBDA4AABMQAABNhDA4QhFA2hgAAQhfAAhDg2g')
    this.shape_44.setTransform(635.55, 844.8)
    this.shape_45 = new cjs.Shape()
    this.shape_45.graphics
      .f()
      .s('#05104D')
      .ss(11, 1, 1)
      .p('AoBAAQAAitCXh6QCWh6DUAAQDWAACWB6QCWB6AACtQAACtiWB6QiYB7jUAAQjUAAiWh7QiXh6AAitg')
    this.shape_45.setTransform(635.625, 846.25)
    this.shape_46 = new cjs.Shape()
    this.shape_46.graphics
      .f('#040E45')
      .s()
      .p('AigCEQhEg3AAhNQAAhMBEg2QBDg3BdAAQBfAABDA3QBDA2AABMQAABNhDA3QhDA2hfAAQhdAAhDg2g')
    this.shape_46.setTransform(635.55, 846.25)
    this.shape_47 = new cjs.Shape()
    this.shape_47.graphics
      .f('#1294E4')
      .s()
      .p(
        'AlqEnQiXh6AAitQAAisCXh7QCWh6DUAAQDWAACWB6QCWB7AACsQAACtiWB6QiYB7jUAAQjUAAiWh7gAihiCQhEA2AABMQAABNBEA3QBDA2BeAAQBeAABEg2QBCg3AAhNQAAhMhCg2QhEg3heAAQheAAhDA3g'
      )
    this.shape_47.setTransform(635.625, 846.25)
    this.shape_48 = new cjs.Shape()
    this.shape_48.graphics
      .f()
      .s('#05104D')
      .ss(11, 1, 1)
      .p('An6AAQAAisCVh5QCUh6DRAAQDSAACUB6QCVB5AACsQAACsiVB5QiVB6jRAAQjRAAiUh5QiVh6AAisg')
    this.shape_48.setTransform(635.625, 847.7)
    this.shape_49 = new cjs.Shape()
    this.shape_49.graphics
      .f('#040D3E')
      .s()
      .p('AieCDQhDg2AAhNQAAhLBDg3QBCg2BcAAQBdAABDA2QBCA3AABLQAABNhCA2QhDA2hdAAQhcAAhCg2g')
    this.shape_49.setTransform(635.55, 847.675)
    this.shape_50 = new cjs.Shape()
    this.shape_50.graphics
      .f('#1294E4')
      .s()
      .p(
        'AllEmQiVh6AAisQAAisCVh5QCUh6DRAAQDSAACUB6QCVB5AACsQAACsiVB5QiVB7jRAAQjRAAiUh6gAifiCQhDA2AABMQAABNBDA2QBCA2BdAAQBdAABCg2QBCg2AAhNQAAhMhCg2QhCg3hdABQhdgBhCA3g'
      )
    this.shape_50.setTransform(635.625, 847.7)
    this.shape_51 = new cjs.Shape()
    this.shape_51.graphics
      .f()
      .s('#05104D')
      .ss(11, 1, 1)
      .p('AnyAAQAAirCSh5QCTh4DNAAQDQAACSB4QCRB5AACrQAACqiRB5QiUB6jOAAQjNAAiTh5QiSh6AAiqg')
    this.shape_51.setTransform(635.6, 849.15)
    this.shape_52 = new cjs.Shape()
    this.shape_52.graphics
      .f('#030B36')
      .s()
      .p('AibCCQhDg2AAhMQAAhLBDg2QBAg2BbAAQBcAABCA2QBAA2ABBLQgBBMhAA2QhCA2hcAAQhbAAhAg2g')
    this.shape_52.setTransform(635.55, 849.125)
    this.shape_53 = new cjs.Shape()
    this.shape_53.graphics
      .f('#1294E4')
      .s()
      .p(
        'AlfEkQiTh5AAirQAAirCTh5QCRh4DPAAQDOAACTB4QCRB5AACrQAACriRB5QiUB5jNAAQjPAAiRh5gAiciBQhCA1AABMQAABMBCA2QBBA2BbAAQBcAABBg2QBBg2AAhMQAAhMhBg1QhBg3hcABQhbgBhBA3g'
      )
    this.shape_53.setTransform(635.6, 849.15)
    this.shape_54 = new cjs.Shape()
    this.shape_54.graphics
      .f()
      .s('#05104D')
      .ss(11, 1, 1)
      .p('AnqAAQAAipCQh4QCPh4DLAAQDMAACQB4QCPB4AACpQAACqiPB4QiRB5jLAAQjLAAiPh5QiQh4AAiqg')
    this.shape_54.setTransform(635.6, 850.6)
    this.shape_55 = new cjs.Shape()
    this.shape_55.graphics
      .f('#030A2E')
      .s()
      .p('AiZCBQhBg1AAhMQAAhLBBg1QA/g2BaAAQBbAABAA2QBAA1AABLQAABMhAA1QhAA2hbAAQhaAAg/g2g')
    this.shape_55.setTransform(635.55, 850.55)
    this.shape_56 = new cjs.Shape()
    this.shape_56.graphics
      .f('#1294E4')
      .s()
      .p(
        'AlaEiQiRh4AAiqQAAiqCRh4QCPh4DMAAQDLAACQB4QCQB4gBCqQABCqiQB4QiRB5jKgBQjMAAiPh4gAiZiBQhCA2AABLQAABLBCA2QA/A1BaABQBagBBBg1QBAg2AAhLQAAhLhAg2QhBg2haAAQhaAAg/A2g'
      )
    this.shape_56.setTransform(635.6, 850.6)
    this.shape_57 = new cjs.Shape()
    this.shape_57.graphics
      .f()
      .s('#05104D')
      .ss(11, 1, 1)
      .p('AnjAAQAAioCOh4QCNh3DIAAQDJAACNB3QCOB4AACoQAACpiOB3QiOB4jIAAQjHAAiOh3QiOh4AAipg')
    this.shape_57.setTransform(635.625, 852.05)
    this.shape_58 = new cjs.Shape()
    this.shape_58.graphics
      .f('#030827')
      .s()
      .p('AiXCBQhAg2AAhLQAAhKBAg1QA/g2BYAAQBZAABAA2QA/A1AABKQAABLg/A2QhAA1hZAAQhYAAg/g1g')
    this.shape_58.setTransform(635.575, 852.025)
    this.shape_59 = new cjs.Shape()
    this.shape_59.graphics
      .f('#1294E4')
      .s()
      .p(
        'AlVEhQiOh4AAipQAAioCOh4QCNh3DIAAQDJAACNB3QCOB4AACoQAACpiOB3QiOB4jIAAQjHAAiOh3gAiXiAQhAA2AABKQAABLBAA1QA+A2BZAAQBZAAA/g2QA/g1AAhLQAAhKg/g2Qg/g1hZAAQhZAAg+A1g'
      )
    this.shape_59.setTransform(635.625, 852.05)
    this.shape_60 = new cjs.Shape()
    this.shape_60.graphics
      .f()
      .s('#05104D')
      .ss(11, 1, 1)
      .p('AnbAAQAAinCLh3QCLh3DFAAQDGAACLB3QCLB3AACnQAACoiLB2QiNB3jEAAQjEAAiMh2QiLh3AAiog')
    this.shape_60.setTransform(635.625, 853.45)
    this.shape_61 = new cjs.Shape()
    this.shape_61.graphics
      .f('#02061F')
      .s()
      .p('AiUCAQg/g1AAhLQAAhKA/g1QA9g1BXAAQBYAAA/A1QA9A1ABBKQgBBLg9A1Qg/A1hYAAQhXAAg9g1g')
    this.shape_61.setTransform(635.55, 853.475)
    this.shape_62 = new cjs.Shape()
    this.shape_62.graphics
      .f('#1294E4')
      .s()
      .p(
        'AlQEfQiLh3AAioQAAinCLh3QCLh3DFAAQDGAACLB3QCLB3AACnQAACoiLB2QiNB3jEAAQjEAAiMh2gAiVh/Qg/A1AABKQAABLA/A1QA+A1BXAAQBXAAA/g1QA+g1AAhLQAAhKg+g1Qg/g1hXAAQhXAAg+A1g'
      )
    this.shape_62.setTransform(635.625, 853.45)
    this.shape_63 = new cjs.Shape()
    this.shape_63.graphics
      .f()
      .s('#05104D')
      .ss(11, 1, 1)
      .p('AnUAAQAAimCKh2QCIh2DCAAQDCAACJB2QCKB2AACmQAACniKB1QiKB3jBAAQjBAAiJh2QiKh2AAing')
    this.shape_63.setTransform(635.625, 854.9)
    this.shape_64 = new cjs.Shape()
    this.shape_64.graphics
      .f('#020517')
      .s()
      .p('AiSB/Qg+g1AAhKQAAhJA+g1QA9g1BVAAQBXAAA9A1QA9A1AABJQAABKg9A1Qg9A0hXAAQhVAAg9g0g')
    this.shape_64.setTransform(635.55, 854.9)
    this.shape_65 = new cjs.Shape()
    this.shape_65.graphics
      .f('#1294E4')
      .s()
      .p(
        'AlKEdQiKh2AAinQAAimCKh2QCIh2DCAAQDCAACJB2QCKB2AACmQAACniKB1QiKB3jBAAQjBAAiJh2gAiTh+Qg+A1AABJQAABKA+A1QA9A0BWAAQBWAAA9g0QA9g1AAhKQAAhJg9g1Qg9g1hWAAQhWAAg9A1g'
      )
    this.shape_65.setTransform(635.625, 854.9)
    this.shape_66 = new cjs.Shape()
    this.shape_66.graphics
      .f()
      .s('#05104D')
      .ss(11, 1, 1)
      .p('AnMAAQAAilCHh1QCHh1C+AAQC/AACHB1QCHB1AAClQAACmiHB1QiIB2i+AAQi+AAiHh2QiHh1AAimg')
    this.shape_66.setTransform(635.6, 856.35)
    this.shape_67 = new cjs.Shape()
    this.shape_67.graphics
      .f('#01030F')
      .s()
      .p('AiQB+Qg8g0gBhKQABhJA8g0QA8g0BUAAQBVAAA8A0QA9A0gBBJQABBKg9A0Qg8A0hVAAQhUAAg8g0g')
    this.shape_67.setTransform(635.55, 856.35)
    this.shape_68 = new cjs.Shape()
    this.shape_68.graphics
      .f('#1294E4')
      .s()
      .p(
        'AlEEbQiIh1AAimQAAilCIh1QCGh2C+AAQC/AACHB2QCHB1AAClQAACliHB2QiIB2i+gBQi+AAiGh1gAiQh9Qg9A0AABJQAABKA9A0QA7A0BVAAQBVAAA8g0QA8g0AAhKQAAhJg8g0Qg8g0hVAAQhVAAg7A0g'
      )
    this.shape_68.setTransform(635.6, 856.35)
    this.shape_69 = new cjs.Shape()
    this.shape_69.graphics
      .f()
      .s('#05104D')
      .ss(11, 1, 1)
      .p('AnFAAQAAikCFh0QCFh1C7AAQC8AACFB1QCFB0AACkQAACliFB0QiGB1i7AAQi7AAiFh0QiFh1AAilg')
    this.shape_69.setTransform(635.6, 857.8)
    this.shape_70 = new cjs.Shape()
    this.shape_70.graphics
      .f('#010208')
      .s()
      .p('AiOB+Qg7g0AAhKQAAhIA7g0QA7g0BTAAQBTAAA8A0QA8A0AABIQAABKg8A0Qg8AzhTAAQhTAAg7gzg')
    this.shape_70.setTransform(635.55, 857.775)
    this.shape_71 = new cjs.Shape()
    this.shape_71.graphics
      .f('#1294E4')
      .s()
      .p(
        'AlAEaQiFh2AAikQAAikCFh1QCFh0C7AAQC8AACFB0QCFB1gBCkQABCliFB0QiGB1i7AAQi7AAiFh0gAiOh8Qg8A0AABIQAABKA8A0QA7AzBTAAQBTAAA8gzQA7g0AAhKQAAhIg7g0Qg8g0hTAAQhTAAg7A0g'
      )
    this.shape_71.setTransform(635.6, 857.8)
    this.shape_72 = new cjs.Shape()
    this.shape_72.graphics
      .f()
      .s('#05104D')
      .ss(11, 1, 1)
      .p('AE7EYIAAgBQCDhzAAikQAAijiDh0QiChzi5AAQi4AAiCBzQiDB0AACjQAACkCDBzIAAABQCCBzC4AAQC4AACDhzg')
    this.shape_72.setTransform(635.6, 859.25)
    this.shape_73 = new cjs.Shape()
    this.shape_73.graphics
      .f('#000000')
      .s()
      .p('AiLB9IAAAAQg7g0AAhJQAAhIA7gzQA6g0BRAAQBSAAA7A0QA6AzAABIQAABJg6A0Qg7AzhSAAQhRAAg6gzg')
    this.shape_73.setTransform(635.55, 859.225)
    this.shape_74 = new cjs.Shape()
    this.shape_74.graphics
      .f('#1294E4')
      .s()
      .p(
        'Ak6EYIAAgBQiDhzAAikQAAijCDh0QCChzC4AAQC5AACDBzQCCB0AACjQAACkiCBzIgBABQiDBzi4ABQi3gBiDhzgAiMh7Qg6AzAABIQgBBJA7A0IAAAAQA6AzBSAAQBRAAA7gzQA6g0ABhJQgBhIg6gzQg7g1hRAAQhSAAg6A1g'
      )
    this.shape_74.setTransform(635.6, 859.25)
    this.shape_75 = new cjs.Shape()
    this.shape_75.graphics
      .f()
      .s('#05124E')
      .ss(10.9, 1, 1)
      .p(
        'ApigdQgEg3AZgwQAehMBPg9QAjgWArgXQAmgUAqgSQAugWAygMQBegWBmgEQAHAAAFAAQAHgBAFAAQAHAAACAAQBhABBbAQQBDANA7AbQAtAVAvAXQA+AlA0AlQA3AzAVBBQAPAtgDA1QgBALgCALQgPBDgeAzQghA5g+A5QgfAegkAbQAAAAAAAAQgwAjgyAZQgbAOgcAKQhyAriHgBQgEAAgDAAQgFAAgEAAQiCgChugqQgvgTgxgdQgYgPgbgTIAAgBQg7gsg0g2QhXhdgIh7g'
      )
    this.shape_75.setTransform(635.8792, 854.8003)
    this.shape_76 = new cjs.Shape()
    this.shape_76.graphics
      .f('#000208')
      .s()
      .p(
        'AiECtQgzgQgtgkIgMgJQgighgkgeQgdgYgLgaQgJgQADgSQAGg4BLgcIA/geQAkgKASgIQBEgTBKgEIALABIAOgBQBAAAA8AKIA5APIAuARQAjAQAgARQAeAPAOAWQALAKAAAPQAAARgJAQQgFAMgIALQgYAogmApQgcAdgfAUIgMAIIgkARQhFAdhTADIgKAAIgNAAQhFAAg3gRg'
      )
    this.shape_76.setTransform(635.5875, 854.8)
    this.shape_77 = new cjs.Shape()
    this.shape_77.graphics
      .f('#1095E6')
      .s()
      .p(
        'AgBGdIgHAAIgJAAQiCgChugqQgvgTgxgdQgYgPgbgTIAAgBQg7gsg0g2QhXhdgIh7IAAgBQgEg3AZgwQAehMBPg9QAjgVArgYQAmgUAqgSQAugWAygMQBegWBmgEIAMAAIAMgBIAJAAQBhABBbAQQBDANA7AbIBcAtQA+AkA0AlQA3AzAVBBQAPAtgDA1IgDAWQgPBDgeAzQghA5g+A5QgfAegkAbIAAAAQgwAjgyAZQgbAOgcALQhxAqiGAAIgCgBgAihinQgSAIgkAKIg/AeQhLAcgGA4QgDASAJAQQALAaAdAXQAkAeAiAiIAMAIQAtAlAzAQQA3ARBFAAIANAAIAKAAQBTgDBFgdIAkgSIAMgHQAfgUAcgdQAmgqAYgnQAIgLAFgMQAJgQAAgRQAAgPgLgKQgOgWgegPQgggSgjgQIgugRIg5gOQg8gKhAAAIgOABIgLgBQhKAEhEATg'
      )
    this.shape_77.setTransform(635.8792, 854.8003)
    this.shape_78 = new cjs.Shape()
    this.shape_78.graphics
      .f()
      .s('#061450')
      .ss(10.8, 1, 1)
      .p(
        'Ar7g4QgIhCAmg2QAshPBrg8QAtgNA2gSQAvgPAzgSQA4gUA+gJQBygRB4gEQAJAAAFAAQAIgBAGABQAIAAACAAQBzABBtALQBSAJBIAbQA0AVA+ASQBKAeBIAaQBNA0AdBHQAWAzgHBAQgBANgDAOQgbBPgqA0QgsA5hTBCQgnAggsAdQAAABgBAAQg6Alg9AcQghAPgiALQiIAtigAAQgFgBgEAAQgGAAgFAAQibgCiDgsQg3gTg+giQgdgQghgVQAAAAAAAAQhGgvhIg7Qh2hlgQiOg'
      )
    this.shape_78.setTransform(636.1392, 850.6875)
    this.shape_79 = new cjs.Shape()
    this.shape_79.graphics
      .f('#01030F')
      .s()
      .p(
        'AAADLIgRABQhegBhHgUQhEgTg+gvIgQgMQgrgqg6ghQgugagTgdQgQgUAGgWQAMhAB6gTIBZgXQA3gGASgHQBfgMBhgFIAOAAIATAAQBUABBRAFIBPALIBAAOIBhAbQAuALAVAWQATAMgBATQgCAWgRAUQgJANgPAOQgrAqg3AzQgqAmgpAXIgQAIQglANgMAGQheAhhvACIgNgBg'
      )
    this.shape_79.setTransform(635.6726, 850.675)
    this.shape_80 = new cjs.Shape()
    this.shape_80.graphics
      .f('#0F96E9')
      .s()
      .p(
        'AgLGuIgLAAQibgCiDgsQg3gTg+giIg+glIAAAAQhGgvhIg7Qh2hlgQiOIAAgBQgIhCAmg2QAshPBrg8QAtgNA2gSIBighQA4gUA+gJQBygRB4gEIAOAAIAOAAIAKAAQBzABBtALQBSAJBIAbQA0AVA+ASQBKAeBIAaQBNA0AdBHQAWAzgHBAIgEAbQgbBPgqA0QgsA5hTBCQgnAggsAdIgBABQg6Alg9AcQghAPgiALQiIAtigAAIgJgBgAAJDMQBvgCBeghQAMgGAkgNIAQgIQApgXArgmQA3gzAqgqQAPgOAKgNQAQgUACgWQABgTgSgMQgWgWgugLIhhgbIg/gOIhPgLQhSgFhTgBIgTAAIgOAAQhiAFheAMQgSAHg3AGIhaAXQh5ATgNBAQgGAWARAUQASAdAuAaQA6AhAsAqIAPAMQA/AvBDATQBIAUBeABIASgBIAMABg'
      )
    this.shape_80.setTransform(636.1392, 850.6875)
    this.shape_81 = new cjs.Shape()
    this.shape_81.graphics
      .f()
      .s('#061651')
      .ss(10.7, 1, 1)
      .p(
        'AuKhRQgLhNAzg7QA4hSCFg8QA3gEA/gNQA4gLA8gRQBBgTBIgGQCFgLCJgFQAKAAAGAAQAJAAAHAAQAJAAADAAQCCACB/AHQBfAGBTAbQA8AUBKAOQBXAXBbAQQBhA0AkBNQAcA6gKBJQgCAPgDAQQgmBbg1A1Qg3A5hmBJQguAjg0AfQAAABgBAAQhEAohHAfQgmAQgoALQidAvi4gBQgFAAgFAAQgHAAgGAAQiygCiXgvQg+gThKglQghgRgngXQgBAAAAgBQhPgwhbhBQiUhsgWigg'
      )
    this.shape_81.setTransform(636.3741, 846.8253)
    this.shape_82 = new cjs.Shape()
    this.shape_82.graphics
      .f('#010416')
      .s()
      .p(
        'AgDDYIgWAAQh1gBhXgWQhTgWhPg5IgTgOQg0g0hOgkQg+gbgZggQgXgYAIgbQAThHCkgJQBAgJAygIQBJgCATgHQB2gGB3gFIAQAAIAZAAIDLACIBjAJQAjAFAtAFQA5ALBDAKQA+AIAdAWQAZANgCAXQgEAagYAYQgOAPgVAPQg8AthGA9Qg4AtgyAZIgUAJQgwAQgNAFQh0AkiJABIgPAAg'
      )
    this.shape_82.setTransform(635.7677, 846.825)
    this.shape_83 = new cjs.Shape()
    this.shape_83.graphics
      .f('#0D96EB')
      .s()
      .p(
        'AgEG+IgKAAIgNAAQiygCiXgvQg+gThKglQghgRgngXIgBgBQhPgwhbhBQiUhsgWigIgBAAQgLhNAzg7QA4hSCFg8QA3gEA/gNQA4gLA8gRQBBgTBIgGQCFgLCJgFIAQAAIAQAAIAMAAQCCACB/AHQBfAGBTAbQA8AUBKAOQBXAXBbAQQBhA0AkBNQAcA6gKBJIgFAfQgmBbg1A1Qg3A5hmBJQguAjg0AfIgBABQhEAohHAfQgmAQgoALQicAui1AAIgEAAgAkDjMQgTAHhJACQgyAIhAAJQikAJgTBHQgIAbAXAYQAZAgA+AbQBOAkA0A0IATAOQBPA5BTAWQBXAWB1ABIAWAAIAPAAQCJgBB0gkQANgFAwgQIAUgJQAygZA4gtQBGg9A8gtQAVgPAOgPQAYgYAEgaQACgXgZgNQgdgWg+gIQhDgKg5gLQgtgFgjgFIhjgJIjLgCIgYAAIgRAAQh3AFh2AGg'
      )
    this.shape_83.setTransform(636.3741, 846.8253)
    this.shape_84 = new cjs.Shape()
    this.shape_84.graphics
      .f()
      .s('#061852')
      .ss(10.7, 1, 1)
      .p(
        'AwOhpQgPhVA/hBQBEhVCdg7QBAAEBHgIQBAgIBGgQQBJgSBRgDQCXgGCXgFQANgBAFAAQALAAAIAAQAJAAAEAAQCQADCQADQBrADBeAaQBCAUBXAKQBhASBtAGQBzA0ArBTQAjA/gNBTQgDARgEARQgxBmg+A1QhBA6h3BQQg2Alg7AiQAAAAgBAAQhNArhRAhQgrARgsAMQixAwjOAAQgGAAgFAAQgHAAgHAAQjHgDirgwQhEgUhWgpQgkgSgugYQAAAAAAgBQhZgyhrhFQivhzgeiwg'
      )
    this.shape_84.setTransform(636.6087, 843.2628)
    this.shape_85 = new cjs.Shape()
    this.shape_85.graphics
      .f('#02061C')
      .s()
      .p(
        'AgHDkIgaAAQiJgChmgZQhhgXhdhDIgXgRQg8g7hhgmQhNgegggjQgdgbALgfQAYhODMgBQBOgFA7gFQBZAAAUgFQCNgBCKgFIATAAIAdAAQB2ABB4gCIB2AFQApAFA2ADQBEAJBSAGQBMAGAjAWQAgANgDAcQgFAdgfAbQgSARgaAQQhNAxhVBFQhDA0g7AbIgYAKQg7ASgNAFQiJAmihABIgSAAg'
      )
    this.shape_85.setTransform(635.8368, 843.25)
    this.shape_86 = new cjs.Shape()
    this.shape_86.graphics
      .f('#0C97ED')
      .s()
      .p(
        'AgGHNIgLAAIgOAAQjHgDirgwQhEgUhWgpIhSgqIAAgBQhZgyhrhFQivhzgeiwIAAgBQgPhVA/hBQBEhVCdg7QBAAEBHgIQBAgIBGgQQBJgSBRgDIEugLIASgBIATAAIANAAIEgAGQBrADBeAaQBCAUBXAKQBhASBtAGQBzA0ArBTQAjA/gNBTIgHAiQgxBmg+A1QhBA6h3BQQg2Alg7AiIgBAAQhNArhRAhQgrARgsAMQivAwjLAAIgFAAgAoljNQjMABgYBOQgLAfAdAbQAgAjBNAeQBhAlA8A8IAXARQBdBDBhAXQBmAZCJACIAaAAIASAAQChgBCJgmQANgGA7gRIAYgKQA7gbBDg0QBVhFBNgxQAagQASgRQAfgbAFgdQADgcgggOQgjgWhMgFQhSgHhEgIQg2gDgpgFIh2gFQh4ACh2gBIgcAAIgUgBQiKAFiNACQgUAFhZgBQg7AGhOAFg'
      )
    this.shape_86.setTransform(636.6087, 843.2628)
    this.shape_87 = new cjs.Shape()
    this.shape_87.graphics
      .f()
      .s('#071953')
      .ss(10.6, 1, 1)
      .p(
        'AyIh/QgShdBLhGQBNhXC1g7QBHAMBQgFQBHgDBNgQQBRgRBagBQCngCCmgFQAOAAAGAAQAMAAAHAAQALAAAEAAQCdADCgAAQB3gBBnAbQBJAUBhAFQBsANB8gDQCFA1AxBYQAoBEgPBcQgDASgGATQg6BvhIA3QhJA6iIBWQg8AohBAjQgBAAAAAAQhWAuhaAiQgvASgxANQjDAyjigBQgGAAgHAAQgHAAgIAAQjbgCi7gzQhKgUhhgrQgngTg0gaQAAAAgBgBQhgg0h8hJQjIh5gjjAg'
      )
    this.shape_87.setTransform(636.8163, 839.976)
    this.shape_88 = new cjs.Shape()
    this.shape_88.graphics
      .f('#020721')
      .s()
      .p(
        'AgLDwIgdAAQidgChzgbQhvgahqhLIgagTQhEhDhxgoQhbgggmgmQgjgeAOgjQAchUDxAHQBcgCBDgDQBoAEAUgEQChADCcgGIAXABIAgAAQCGABCJgFICHADQAuAEA/ABQBOAGBgAEQBYACAqAWQAmAPgEAfQgGAigmAdQgVATggARQhbA0hjBMQhPA8hCAdIgcAKQhFATgNAFQicAoi4ABIgUAAg'
      )
    this.shape_88.setTransform(635.9314, 839.825)
    this.shape_89 = new cjs.Shape()
    this.shape_89.graphics
      .f('#0B97EF')
      .s()
      .p(
        'AgHHaIgNAAIgPAAQjbgCi7gzQhKgUhhgrIhbgtIgBgBQhgg0h8hJQjIh5gjjAIgBgBQgShdBLhGQBNhXC1g7QBHAMBQgFQBHgDBNgQQBRgRBagBQCngCCmgFIAUAAIATAAIAPAAQCdADCgAAQB3gBBnAbQBJAUBhAFQBsANB8gDQCFA1AxBYQAoBEgPBcQgDASgGATQg6BvhIA3QhJA6iIBWQg8AohBAjIgBAAQhWAuhaAiQgvASgxANQi/AxjeAAIgIAAgAt/iYQgOAjAjAeQAmAlBbAgQBxAoBEBDIAaATQBqBMBvAaQBzAaCdADIAdAAIAUAAQC4gBCcgoQANgFBFgTIAcgLQBCgdBPg7QBjhMBbg1QAggRAVgSQAmgeAGghQAEgggmgOQgqgXhYgCQhggDhOgGQg/gCgugEIiHgDQiJAFiGAAIgfgBIgYAAQicAFihgDQgUAFhogEQhDADhcABIgkAAQjPAAgaBOg'
      )
    this.shape_89.setTransform(636.8163, 839.976)
    this.shape_90 = new cjs.Shape()
    this.shape_90.graphics
      .f()
      .s('#071B54')
      .ss(10.5, 1, 1)
      .p(
        'Az4iTQgVhlBVhKQBXhZDJg7QBOATBYgBQBOAABVgPQBYgRBiACQC2ADCygGQAQAAAGAAQANAAAIAAQALAAAEAAQCqAECugEQCBgDBxAaQBOAUBsABQB0AICMgLQCVA1A2BdQAuBJgTBkQgDATgGAVQhDB5hQA3QhSA6iXBcQhCAqhHAkQgBABAAAAQheAwhhAkQg0ATg1ANQjUA0j0gBQgHAAgHAAQgJAAgIAAQjtgDjLg0QhPgUhrgvQgqgTg5gcQAAAAgBAAQhog2iKhNQjfh/gpjNg'
      )
    this.shape_90.setTransform(637.0084, 836.9357)
    this.shape_91 = new cjs.Shape()
    this.shape_91.graphics
      .f('#030827')
      .s()
      .p(
        'AgPD8IggAAQivgDh/gdQh7gbh3hUIgdgVQhKhKiCgqQhngigrgoQgoghAPgmQAhhaETAOQBoABBKgBQB2AHAUgDQC1AHCtgGIAZABIAkAAQCUABCZgIQAuAABpABQAzADBHAAQBWAEBtAAQBkAAAwAWQArAQgFAjQgHAkgsAhQgYAUglASQhpA3hvBTQhZBChJAeIgfAMQhOAUgOAFQiuAqjMABIgXAAg'
      )
    this.shape_91.setTransform(636.0049, 836.6062)
    this.shape_92 = new cjs.Shape()
    this.shape_92.graphics
      .f('#0998F1')
      .s()
      .p(
        'AgIHnIgOAAIgRAAQjtgDjLg0QhPgUhrgvIhjgvIgBAAQhog2iKhNQjfh/gpjNIgBgCQgVhlBVhKQBXhZDJg7QBOATBYgBQBOAABVgPQBYgRBiACQC2ADCygGIAWAAIAVAAIAPAAQCqAECugEQCBgDBxAaQBOAUBsABQB0AICMgLQCVA1A2BdQAuBJgTBkQgDATgGAVQhDB5hQA3QhSA6iXBcQhCAqhHAkIgBABQheAwhhAkQg0ATg1ANQjQAzjwAAIgIAAgAvtiwQgPAmAoAhQArAoBnAiQCCAqBKBKIAdAVQB3BUB7AbQB/AdCvADIAgAAIAYAAQDLgBCugqQAOgFBOgUIAfgMQBJgeBZhCQBvhTBpg3QAlgSAYgUQAsghAHgkQAFgjgrgQQgwgWhkAAQhtAAhWgEQhHAAgzgDQhpgBguAAQiZAIiUgBIgjAAIgagBQitAGi1gHQgUADh2gHQhKABhogBQglgCggAAQjSAAgdBOg'
      )
    this.shape_92.setTransform(637.0084, 836.9357)
    this.shape_93 = new cjs.Shape()
    this.shape_93.graphics
      .f()
      .s('#071C55')
      .ss(10.5, 1, 1)
      .p(
        'A1eijQgYhsBehPQBghbDcg7QBVAaBeACQBVADBbgOQBfgQBpAEQDEAGC+gFQARgBAGAAQAOAAAJABQAMAAAEAAQC1AEC7gIQCLgFB5AbQBTATB2gCQB9AECZgTQCjA1A8BhQAyBOgVBrQgEAVgGAWQhLCBhZA3QhZA7ikBhQhIAshMAmQgBABgBAAQhlAyhoAmQg4AUg5ANQjiA1kGgBQgIAAgHAAQgJAAgJAAQj9gDjag1QhVgVhzgxQgtgUg9gdQgBAAAAgBQhwg3iYhRQj0iEgujZg'
      )
    this.shape_93.setTransform(637.188, 833.9509)
    this.shape_94 = new cjs.Shape()
    this.shape_94.graphics
      .f('#03092B')
      .s()
      .p(
        'AgSEMIgjgBQi/gDiLgeQiFgeiDhbIgggWQhQhRiQgsQh0gjgvgqQgtgkARgpQAlhgEyAVQBzAEBRABQCDAKAVgDQDFALC9gGIAbABIAnAAQCiACCngLQAygCBzAAQA4ACBOgBQBeACB5gCQBwgDA0AXQAwAQgFAmQgIAogxAjQgcAVgqATQh1A6h6BZQhjBIhQAgQgRAHgRAFQhWAWgOAFQi/AsjeAAIgZAAg'
      )
    this.shape_94.setTransform(636.0583, 833.1689)
    this.shape_95 = new cjs.Shape()
    this.shape_95.graphics
      .f('#0899F2')
      .s()
      .p(
        'AgJH0IgPAAIgSAAQj9gDjag1QhVgVhzgxIhqgxIgBgBQhwg3iYhRQj0iEgujZIAAgCQgYhsBehPQBghbDcg7QBVAaBeACQBVADBbgOQBfgQBpAEQDEAGC+gFIAXgBQAOAAAJABIAQAAQC1AEC7gIQCLgFB5AbQBTATB2gCQB9AECZgTQCjA1A8BhQAyBOgVBrQgEAVgGAWQhLCBhZA3QhZA7ikBhQhIAshMAmIgCABQhlAyhoAmQg4AUg5ANQjeA1kBAAIgJgBgAxRjEQgRApAtAkQAvAqB0AjQCQAsBQBRIAgAWQCDBbCFAeQCLAeC/ADIAjABIAaAAQDdAAC/gsQAOgFBWgWQARgFARgHQBQggBjhIQB6hZB1g6QAqgTAcgVQAxgjAIgoQAFgmgwgQQg0gXhwADQh5AChegCQhOABg4gCQhzAAgyACQinALiigCIgmAAIgcgBQi9AGjFgLQgVADiDgKQhRgBhzgEQg2gEguAAQjUAAgfBPg'
      )
    this.shape_95.setTransform(637.188, 833.9509)
    this.shape_96 = new cjs.Shape()
    this.shape_96.graphics
      .f()
      .s('#071D56')
      .ss(10.4, 1, 1)
      .p(
        'A28irQgahyBmhSQBoheDug6QBbAfBlAGQBaAFBhgNQBlgPBwAFQDQAKDJgFQASgBAGAAQAPAAAJABQANAAAFAAQC/AEDHgKQCTgICBAbQBYATB+gFQCFgBClgZQCxA2BABlQA3BRgXByQgEAWgHAXQhTCJhfA4QhhA7iwBmQhNAthSAoQAAAAgBABQhrAzhwAoQg7AVg9ANQjwA3kVgBQgIgBgIAAQgJAAgKAAQkMgCjog3QhZgVh7g0QgwgUhBgfQgBAAgBAAQh1g5ikhUQkIiIgyjmg'
      )
    this.shape_96.setTransform(637.3407, 830.5009)
    this.shape_97 = new cjs.Shape()
    this.shape_97.graphics
      .f('#030A30')
      .s()
      .p(
        'AgVEaIglAAQjPgDiVggQiPgfiNhiIgjgZQhWhWidguQh+gkg0gsQgxgmATgtQAphkFOAaQB9AHBXADQCPAMAVgCQDVAPDLgHIAdABIAqABQCuABC1gNQA1gDB9AAQA8ABBUgCQBmAACEgFQB5gFA5AXQA1ARgGApQgJAqg2AlQgfAWgtAVQiBA8iFBgQhrBMhWAhQgTAIgSAFIhsAcQjNAujwAAIgbgBg'
      )
    this.shape_97.setTransform(636.1201, 829.9985)
    this.shape_98 = new cjs.Shape()
    this.shape_98.graphics
      .f('#0799F4')
      .s()
      .p(
        'AgKIIIgQgBIgTAAQkMgCjog3QhZgVh7g0QgwgUhBgfIgCAAQh1g5ikhUQkIiIgyjmIgBgCQgahyBmhSQBoheDug6QBbAfBlAGQBaAFBhgNQBlgPBwAFQDQAKDJgFIAYgBQAPAAAJABIASAAQC/AEDHgKQCTgICBAbQBYATB+gFQCFgBClgZQCxA2BABlQA3BRgXByQgEAWgHAXQhTCJhfA4QhhA7iwBmQhNAthSAoIgBABQhrAzhwAoQg7AVg9ANQjsA2kPAAIgKAAgAgFEVQDvAADNgtIBsgdQASgFATgHQBWgiBrhMQCFhfCBg8QAtgVAfgWQA2glAJgqQAGgqg1gRQg5gWh5AFQiEAEhmAAQhUACg8gBQh9ABg1ADQi1ANiugBIgqgBIgdgBQjLAHjVgPQgVACiPgMQhXgDh9gHQlOgbgpBlQgTAsAxAnQA0ArB+AlQCdAuBWBWIAjAYQCNBiCPAfQCVAgDPAEIAlAAIAcAAg'
      )
    this.shape_98.setTransform(637.3407, 830.5009)
    this.shape_99 = new cjs.Shape()
    this.shape_99.graphics
      .f()
      .s('#081E56')
      .ss(10.4, 1, 1)
      .p(
        'A4RiyQgdh4BvhVQBuhfD+g7QBhAlBqAJQBfAHBngNQBrgOB2AHQDcANDSgFQATgBAGAAQARAAAJABQANAAAFAAQDJAEDSgMQCbgKCHAaQBdATCGgIQCLgDCxggQC9A2BFBoQA6BVgZB4QgFAXgHAZQhZCPhmA5QhnA7i8BrQhSAvhVAoQgBABgBAAQhxA2h1ApQg/AVhAAOQj9A4kjgBQgIgBgJAAQgKAAgKAAQkagCjzg4QhdgWiDg1QgygWhGgfQAAAAgBgBQh8g6ivhWQkZiNg3jxg'
      )
    this.shape_99.setTransform(637.4966, 827.3759)
    this.shape_100 = new cjs.Shape()
    this.shape_100.graphics
      .f('#030B34')
      .s()
      .p(
        'AAGEoIgegBIgnAAQjcgDifgiQiZghiWhoIglgaQhbhbipgwQiIglg4guQg1goAVgvQAshpFoAfQCGAKBdAFQCZAOAVgCQDkASDXgHIAgABIAtABQC4ACDBgQQA4gDCGgCQBAABBbgEQBsgBCNgHQCDgHA9AXQA5ARgHAsQgJAtg7AnQghAXgxAWQiLA+iOBlQhzBRhcAjIgnANIh0AdQjYAvj8AAIgFAAg'
      )
    this.shape_100.setTransform(636.1673, 827.1118)
    this.shape_101 = new cjs.Shape()
    this.shape_101.graphics
      .f('#0799F5')
      .s()
      .p(
        'AgLIaIgRgBIgUAAQkagCjzg4QhdgWiDg1Ih4g1IgBgBQh8g6ivhWQkZiNg3jxIAAgCQgdh4BvhVQBuhfD+g7QBhAlBqAJQBfAHBngNQBrgOB2AHQDcANDSgFIAZgBQARAAAJABIASAAQDJAEDSgMQCbgKCHAaQBdATCGgIQCLgDCxggQC9A2BFBoQA6BVgZB4QgFAXgHAZQhZCPhmA5IkjCmQhSAvhVAoIgCABQhxA2h1ApQg/AVhAAOQj5A3kdAAIgKAAgAgGElQD9ABDbgwIB0gdIAngNQBcgjBzhRQCOhlCLg+QAxgVAhgXQA7gnAJgtQAHgsg5gSQg9gWiDAGQiNAHhsACQhbADhAAAQiGABg4AEQjBAPi4gBIgtgBIgggBQjXAHjkgSQgVABiZgOQhdgFiGgJQlogggsBpQgVAvA1ApQA4AtCIAmQCpAvBbBcIAlAaQCWBoCZAhQCfAhDcAEIAnAAIAfAAg'
      )
    this.shape_101.setTransform(637.4966, 827.3759)
    this.shape_102 = new cjs.Shape()
    this.shape_102.graphics
      .f()
      .s('#081F57')
      .ss(10.3, 1, 1)
      .p(
        'A5fi4Qgeh+B1hYQB2hhEMg6QBlApBwAMQBkAKBsgNQBvgOB7AJQDnAQDbgGQAVgBAGABQARAAAJABQAOAAAFAAQDSAEDbgPQCigLCNAaQBhATCNgLQCSgHC7gkQDIA1BJBsQA9BYgaB9QgFAZgIAZQhfCWhsA5QhtA8jFBuQhXAwhZAqQgBABgBAAQh3A3h6AqQhCAWhDAOQkIA6kwgCQgJAAgJAAQgKAAgKAAQkngDj+g5QhhgViJg4Qg1gWhJggQgBgBAAAAQiBg7i5hZQkpiRg7j6g'
      )
    this.shape_102.setTransform(637.6302, 824.5519)
    this.shape_103 = new cjs.Shape()
    this.shape_103.graphics
      .f('#040C37')
      .s()
      .p(
        'AAFE0IgfAAIgqAAQjogEingjQihgiifhuIgngbQhghgi0gxQiQgng8gvQg5grAWgxQAvhtGAAkQCPAMBiAGQCiAQAWAAQDxAUDigHIAhABIAwABQDCACDMgSQA6gECPgCQBDAABggFQBygDCXgIQCLgJBBAWQA9ASgIAvQgKAvg/ApQgkAYg0AWQiUBAiXBqQh6BVhgAkQgWAIgUAGIh6AeQjlAwkKAAIgFAAg'
      )
    this.shape_103.setTransform(636.223, 824.4924)
    this.shape_104 = new cjs.Shape()
    this.shape_104.graphics
      .f('#069AF6')
      .s()
      .p(
        'AgMIpIgSAAIgUAAQkngDj+g5QhhgViJg4Qg1gWhJggIgBgBQiBg7i5hZQkpiRg7j6IgBgCQgeh+B1hYQB2hhEMg6QBlApBwAMQBkAKBsgNQBvgOB7AJQDnAQDbgGIAbAAIAaABIATAAQDSAEDbgPQCigLCNAaQBhATCNgLQCSgHC7gkQDIA1BJBsQA9BYgaB9QgFAZgIAZQhfCWhsA5IkyCqQhXAwhZAqIgCABQh3A3h6AqQhCAWhDAOQkBA5kpAAIgOgBgAgIEzQEMABDngxIB6geQAUgGAWgIQBggkB6hVQCXhqCUhAQA0gWAkgYQA/gpAKgvQAIgvg9gSQhBgWiLAJQiXAIhyADQhgAFhDAAQiPACg6AEQjMASjCgCIgwgBIghgBQjiAHjxgUQgWAAiigQQhigGiPgMQmAgkgvBtQgWAxA5ArQA8AvCQAnQC0AxBgBgIAnAbQCfBuChAiQCnAjDoAEIAqAAIAgAAg'
      )
    this.shape_104.setTransform(637.6302, 824.5519)
    this.shape_105 = new cjs.Shape()
    this.shape_105.graphics
      .f()
      .s('#082058')
      .ss(10.3, 1, 1)
      .p(
        'A6ki+QggiCB7hbQB7hiEZg6QBqAtB1AOQBoAMBwgMQB0gOCAALQDwASDkgFQAVgCAGABQARAAAKABQAPAAAFAAQDZAFDkgSQCpgMCTAaQBkASCTgMQCYgKDEgqQDSA2BMBuQBBBbgcCDQgFAZgJAaQhkCchxA5QhyA8jPByQhaAxheAsQAAAAgBAAQh8A5iAArQhEAXhFAOQkSA6k9gBQgIgBgJAAQgLAAgLAAQkygCkIg6QhkgWiPg6Qg3gWhMghQgBgBAAAAQiGg8jChcQk4iUg+kDg'
      )
    this.shape_105.setTransform(637.7567, 822.0019)
    this.shape_106 = new cjs.Shape()
    this.shape_106.graphics
      .f('#040C3B')
      .s()
      .p(
        'AAEE/IgggBIgsAAQjzgEivgkQipgkimhyIgpgdQhkhji+g0QiYgog/gwQg8gsAXg0QAyhwGUApQCXANBmAIQCsARAWAAQD8AYDtgHIAjABIAyABQDLABDVgTQA9gFCWgDQBGgBBlgFQB3gFCfgKQCTgKBEAWQBAATgIAxQgLAxhCArQgmAYg3AXQidBCifBuQiABZhlAlQgWAJgVAFIiAAfQjuAykTAAIgLAAg'
      )
    this.shape_106.setTransform(636.2638, 822.1534)
    this.shape_107 = new cjs.Shape()
    this.shape_107.graphics
      .f('#059AF7')
      .s()
      .p(
        'AgOI4IgRgBIgWAAQkygCkIg6QhkgWiPg6IiDg3IgBgBQiGg8jChcQk4iUg+kDIAAgCQggiCB7hbQB7hiEZg6QBqAtB1AOQBoAMBwgMQB0gOCAALQDwASDkgFIAbgBIAbABIAUAAQDZAFDkgSQCpgMCTAaQBkASCTgMQCYgKDEgqQDSA2BMBuQBBBbgcCDQgFAZgJAaQhkCchxA5QhyA8jPByQhaAxheAsIgBAAQh8A5iAArQhEAXhFAOQkLA5k1AAIgPAAgA2PjqQgXAzA8AtQA/AwCYAoQC+AyBkBlIApAcQCmBzCpAjQCvAkDzAFIAsAAIAhAAQEYABDzgyICAgfQAVgGAWgIQBlglCAhZQCfhvCdhBQA3gXAmgZQBCgrALgxQAIgwhAgTQhEgXiTALQifAKh3AFQhlAFhGAAQiWAEg9AEQjVAUjLgCIgygBIgjgBQjtAHj8gXQgWAAisgSQhmgHiXgOQhrgKhTAAQjjAAglBSg'
      )
    this.shape_107.setTransform(637.7567, 822.0019)
    this.shape_108 = new cjs.Shape()
    this.shape_108.graphics
      .f()
      .s('#082158')
      .ss(10.2, 1, 1)
      .p(
        'A7ijDQgiiGCCheQCAhjElg6QBuAxB4AQQBsAOB1gMQB3gNCFAMQD4AVDrgGQAWgBAGAAQASAAAJABQAQAAAGAAQDfAFDsgTQCvgOCYAaQBnASCZgOQCdgNDMguQDbA2BPBxQBEBdgdCHQgGAagJAcQhpCgh2A6Qh2A8jYB1QhdAzhhAsQAAAAgBABQiAA5iEAtQhHAXhIAOQkbA7lHgBQgJgBgJAAQgLAAgLAAQk8gCkRg7QhogWiUg7Qg4gXhPgiQgBgBgBAAQiKg9jKheQlEiXhBkKg'
      )
    this.shape_108.setTransform(637.8415, 819.7019)
    this.shape_109 = new cjs.Shape()
    this.shape_109.graphics
      .f('#040D3D')
      .s()
      .p(
        'AADFJIghAAIgugBQj9gEi1glQiwglith3IgrgeQhnhnjHg1QifgohDgyQg/guAZg1QA0h0GoAtIEIAYQCyATAWAAQEIAaD2gHIAkABIA0ABQDTACDegVQA/gGCcgEQBKgBBpgGQB8gFCmgMQCZgMBIAXQBDATgIAyQgMAzhGAsQgnAag7AYQikBDilByQiGBdhpAlQgYAJgVAGIiGAgQj3AykeAAIgMAAg'
      )
    this.shape_109.setTransform(636.3174, 820.0221)
    this.shape_110 = new cjs.Shape()
    this.shape_110.graphics
      .f('#049AF8')
      .s()
      .p(
        'AgOJFIgSgBIgWAAQk8gCkRg7QhogWiUg7IiHg5IgCgBQiKg9jKheQlEiXhBkKIgBgDQgiiGCCheQCAhjElg6QBuAxB4AQQBsAOB1gMQB3gNCFAMQD4AVDrgGIAcgBIAbABIAWAAQDfAFDsgTQCvgOCYAaQBnASCZgOQCdgNDMguQDbA2BPBxQBEBdgdCHQgGAagJAcQhpCgh2A6Qh2A8jYB1QhdAzhhAsIgBABQiAA5iEAtQhHAXhIAOQkUA6k/AAIgPAAgA3LjxQgZA1A/AuQBDAyCfAoQDHA0BnBoIArAeQCtB3CwAlQC1AlD9AEIAuABIAiAAQEkABD8gzICGggQAVgGAYgJQBpglCGhdQClhyCkhDQA7gYAngaQBGgsAMgzQAIgyhDgTQhIgXiZAMQimAMh8AFQhpAGhKABQicAEg/AGQjeAVjTgCIg0gBIgkgBQj2AHkIgaQgWAAiygTIkIgYQh3gNhZAAQjmAAgmBUg'
      )
    this.shape_110.setTransform(637.8415, 819.7019)
    this.shape_111 = new cjs.Shape()
    this.shape_111.graphics
      .f()
      .s('#082159')
      .ss(10.2, 1, 1)
      .p(
        'A8ajHQgjiKCGhgQCGhlEug5QByA0B8ASQBvAQB5gMQB7gMCJAMQD/AYDxgHQAXgBAGABQATAAAJABQAQAAAGAAQDmAFDzgVQCzgPCdAaQBqASCegRQCigPDTgyQDiA2BTB0QBGBggfCKQgFAbgKAcQhtClh6A7Qh7A8jfB3QhgA0hjAtQgBABgBAAQiEA7iIAtQhJAYhKAOQkjA8lQgCQgJAAgKAAQgLAAgMAAQlEgCkZg8QhqgXiZg8Qg6gXhSgjQgBAAAAgBQiOg9jShgQlPibhEkQg'
      )
    this.shape_111.setTransform(637.9504, 817.6782)
    this.shape_112 = new cjs.Shape()
    this.shape_112.graphics
      .f('#040D40')
      .s()
      .p(
        'AADFSIgjAAIgvgBQkGgEi8gmQi1gmi0h7IgrgfQhshrjOg1QimgqhFgzQhBgvAag3QA2h3G4AxIESAaQC5AVAXABQEQAcD/gIIAlABIA1ACQDbABDlgWQBBgGCjgFQBMgBBtgHQCAgHCtgNQCegNBLAXQBGATgJA0QgNA1hIAuQgpAag9AYQirBEirB2QiLBghtAnQgYAIgXAGIiKAhQj9AzklAAIgRAAg'
      )
    this.shape_112.setTransform(636.3519, 818.1478)
    this.shape_113 = new cjs.Shape()
    this.shape_113.graphics
      .f('#049BF9')
      .s()
      .p(
        'AgPJQIgTAAIgXAAQlEgCkZg8QhqgXiZg8IiMg6IgBgBQiOg9jShgQlPibhEkQIgBgDQgjiKCGhgQCGhlEug5QByA0B8ASQBvAQB5gMQB7gMCJAMQEAAYDwgHIAdAAIAcABIAWAAQDmAFDzgVQCzgPCdAaQBqASCegRQCigPDTgyQDiA2BTB0QBGBggfCKQgFAbgKAcQhtClh6A7Qh7A8jfB3QhgA0hjAtIgCABQiEA7iIAtQhJAYhKAOQkaA6lEAAIgVAAgA4Bj4QgaA4BBAvQBFAzCmApQDOA1BsBsIArAeQC0B7C1AmQC8AmEGAFIAvAAIAkAAQEtACEFg1ICKggQAXgGAYgJQBtgnCLhfQCrh2CrhFQA9gYApgaQBIgtANg1QAJg0hGgUQhLgXieANQitAOiAAHQhtAGhMACQijAEhBAGQjlAXjbgCIg1gBIglgBQj/AHkQgcQgXAAi5gVIkSgbQiAgOhfAAQjoAAgnBUg'
      )
    this.shape_113.setTransform(637.9504, 817.6782)
    this.shape_114 = new cjs.Shape()
    this.shape_114.graphics
      .f()
      .s('#082259')
      .ss(10.2, 1, 1)
      .p(
        'A9KjLQgliOCLhiQCJhlE4g6QB1A4B/ATQBzARB7gLQB/gMCMAOQEGAZD2gHQAXgBAHABQATAAAJABQARAAAGAAQDrAFD5gWQC5gQCgAZQBtASCigSQCmgRDag2QDpA2BVB2QBIBiggCOQgGAcgJAdQhxCoh+A7Qh/A8jlB6QhjA1hmAuQgBAAgBABQiHA8iLAtQhLAYhMAPQkqA9lYgCQgKAAgJAAQgMAAgMAAQlMgDkhg8QhsgXidg9Qg7gYhUgjQgBgBgBAAQiRg+jYhiQlZidhGkXg'
      )
    this.shape_114.setTransform(638.0248, 815.9018)
    this.shape_115 = new cjs.Shape()
    this.shape_115.graphics
      .f('#040E42')
      .s()
      .p(
        'AADFZIglAAIgwgBQkNgEjBgnQi7gni5h+IgtggQhuhujWg2QirgrhHgzQhEgxAbg5QA4h5HHA0IEaAdQDAAWAWABQEZAeEGgIIAmABIA3ABQDhACDsgYQBDgGCngFQBPgCBwgHQCEgICygPQCkgOBOAXQBIAUgJA1QgOA3hLAuQgqAbg/AZQixBFixB5QiPBihwAoQgZAJgXAGIiOAhQkIA0kxAAIgLAAg'
      )
    this.shape_115.setTransform(636.3784, 816.5072)
    this.shape_116 = new cjs.Shape()
    this.shape_116.graphics
      .f('#039BFA')
      .s()
      .p(
        'AgPJaIgTAAIgYAAQlMgDkhg8QhsgXidg9Qg7gYhUgjIgCgBQiRg+jYhiQlZidhGkXIgBgCQgliOCLhiQCJhlE4g6QB1A4B/ATQBzARB7gLQB/gMCMAOQEGAZD2gHIAeAAIAcABIAXAAQDrAFD5gWQC5gQCgAZQBtASCigSQCmgRDag2QDpA2BVB2QBIBiggCOQgGAcgJAdQhxCoh+A7Qh/A8jlB6QhjA1hmAuIgCABQiHA8iLAtQhLAYhMAPQkjA8lQAAIgPgBgA4xj+QgaA5BEAxQBHAzCrArQDVA2BuBuIAtAgQC5B+C7AnQDBAnEOAEIAwABIAlAAQE3ABEMg1ICOghQAYgGAZgJQBvgoCQhiQCxh5CxhFQA+gZArgbQBLguANg3QAJg1hIgUQhNgXikAOQiyAPiEAIQhxAHhOACQinAFhDAGQjtAYjggCIg3gBIgngBQkFAIkZgeQgXgBi/gWIkbgdQiHgPhlAAQjrAAgoBUg'
      )
    this.shape_116.setTransform(638.0248, 815.9018)
    this.shape_117 = new cjs.Shape()
    this.shape_117.graphics
      .f()
      .s('#092359')
      .ss(10.1, 1, 1)
      .p(
        'A91jOQgmiRCPhkQCNhmFAg6QB3A7CCAVQB1ASB+gLQCCgMCPAPQEMAaD7gGQAYgBAGAAQAUAAAJACQASAAAGAAQDvAFD/gXQC8gSCkAaQBvASCmgUQCpgSDgg6QDvA3BXB3QBKBkggCRQgGAcgKAeQh1CsiBA7QiBA8jrB9QhmA1hoAuQgBABgBAAQiKA9iPAvQhMAYhNAPQkxA9lfgCQgJAAgLAAQgMAAgLAAQlUgDkmg9QhvgWigg/Qg9gYhVgkQgBAAgBgBQiUg/jehjQliifhIkcg'
      )
    this.shape_117.setTransform(638.1063, 814.3031)
    this.shape_118 = new cjs.Shape()
    this.shape_118.graphics
      .f('#040E44')
      .s()
      .p(
        'AACFgIglAAIgyAAQkUgFjGgoQi/gni+iCIguggQhxhxjbg3QiwgrhJg1QhGgxAcg6QA6h8HTA2IEiAgQDFAWAWACQEhAfELgHIAoABIA4ABQDmACDzgZQBEgHCsgFQBQgCB0gIQCHgJC3gQQCpgPBPAXQBKAUgJA3QgOA4hNAvQgsAchAAZQi3BGi1B8QiUBlhyAoQgaAJgYAGIiRAiQkMA0k2AAIgRAAg'
      )
    this.shape_118.setTransform(636.4139, 815.0306)
    this.shape_119 = new cjs.Shape()
    this.shape_119.graphics
      .f('#039BFA')
      .s()
      .p(
        'AgQJjIgUAAIgXAAQlUgDkmg9QhvgWigg/Qg9gYhVgkIgCgBQiUg/jehjQliifhIkcIgBgCQgmiRCPhkQCNhmFAg6QB3A7CCAVQB1ASB+gLQCCgMCPAPQEMAaD7gGIAegBQAUAAAJACIAYAAQDvAFD/gXQC8gSCkAaQBvASCmgUQCpgSDgg6QDvA3BXB3QBKBkggCRQgGAcgKAeQh1CsiBA7QiBA8jrB9QhmA1hoAuIgCABQiKA9iPAvQhMAYhNAPQknA8lTAAIgWgBgAgOFnQE+ACEUg2ICRgiQAYgGAagJQBygoCUhlQC1h8C3hGQBAgZAsgcQBNgvAOg4QAJg3hKgUQhPgXipAPQi3AQiHAJQh0AIhQACQisAFhEAHQjzAZjmgCIg4gBIgogBQkLAHkhgfQgWgCjFgWIkiggQnTg2g6B8QgcA6BGAxQBJA1CwArQDbA3BxBxIAuAgQC+CCC/AnQDGAoEUAFIAyAAIAmAAg'
      )
    this.shape_119.setTransform(638.1063, 814.3031)
    this.shape_120 = new cjs.Shape()
    this.shape_120.graphics
      .f()
      .s('#09235A')
      .ss(10.1, 1, 1)
      .p(
        'A+ajSQgmiTCShlQCQhnFGg5QB6A8CFAWQB3AUCBgLQCDgLCSAPQERAcD/gGQAZgCAGABQAUAAAJABQASAAAGAAQD0AGEDgZQDAgSCmAaQBxASCqgWQCsgUDlg7QD0A2BZB5QBMBlghCUQgHAdgKAeQh3CviEA7QiEA8jwB/QhnA2hrAvQAAAAgBABQiNA9iRAvQhOAZhPAPQk2A+llgCQgKgBgKAAQgMAAgMAAQlagCkrg+QhxgWijhAQg+gYhXglQgBAAgBgBQiXg/jihkQlqihhKkhg'
      )
    this.shape_120.setTransform(638.1701, 812.9531)
    this.shape_121 = new cjs.Shape()
    this.shape_121.graphics
      .f('#050F46')
      .s()
      .p(
        'AACFmIgmAAIgygBQkbgFjJgoQjEgojCiEIgvghQhzhzjgg4Qi1gshLg1QhHgyAcg8QA8h9HeA4IEoAhQDKAYAXACQEmAhESgIIAoABIA6ABQDqACD4gaQBFgHCwgGQBSgCB2gJQCLgJC7gQQCsgRBRAXQBNAVgKA4QgOA5hPAwQgtAchCAZQi7BIi6B+QiXBnh0AoQgbAKgYAGIiVAiQkSA1k8AAIgRAAg'
      )
    this.shape_121.setTransform(636.4267, 813.775)
    this.shape_122 = new cjs.Shape()
    this.shape_122.graphics
      .f('#039BFB')
      .s()
      .p(
        'AgQJrIgUgBIgYAAQlagCkrg+QhxgWijhAQg+gYhXglIgCgBQiXg/jihkQlqihhKkhIgBgDQgmiTCShlQCQhnFGg5QB6A8CFAWQB3AUCBgLQCDgLCSAPQERAcD/gGIAfgBQAUAAAJABIAYAAQD0AGEDgZQDAgSCmAaQBxASCqgWQCsgUDlg7QD0A2BZB5QBMBlghCUQgHAdgKAeQh3CviEA7QiEA8jwB/QhnA2hrAvIgBABQiNA9iRAvQhOAZhPAPQksA8laAAIgVAAgA5+kHQgdA8BIAyQBLA1C0AsQDhA4BzBzIAvAhQDCCEDDAoQDKAoEaAFIAyABIAnAAQFFACEag3ICVgiQAYgGAagKQB1goCXhnQC5h+C7hIQBCgZAtgcQBPgwAOg5QAKg4hMgVQhRgXitARQi7AQiKAJQh3AJhRACQiwAGhFAHQj4AajrgCIg6gBIgogBQkRAIknghQgXgCjJgYIkoghQiVgRhsAAQjwAAgpBWg'
      )
    this.shape_122.setTransform(638.1701, 812.9531)
    this.shape_123 = new cjs.Shape()
    this.shape_123.graphics
      .f()
      .s('#09245A')
      .ss(10.1, 1, 1)
      .p(
        'A+6jUQgniVCVhnQCThnFMg6QB8A/CHAXQB5AVCDgLQCFgLCUAQQEVAdEEgGQAYgCAHABQAUAAAKABQASAAAGAAQD3AGEHgaQDDgTCpAaQBzASCsgWQCvgWDpg+QD5A2BaB7QBNBnghCWQgHAdgKAeQh6CyiHA7QiGA9j0CAQhpA2hsAwQgBAAgBABQiPA+iTAvQhPAZhQAPQk7A/lqgCQgKgBgLAAQgMAAgMAAQlfgCkwg+QhygXimhBQg/gYhZglQgBAAgBgBQiYg/jnhmQlwiihMklg'
      )
    this.shape_123.setTransform(638.2272, 811.7781)
    this.shape_124 = new cjs.Shape()
    this.shape_124.graphics
      .f('#050F48')
      .s()
      .p(
        'AACFrIgnAAIgzAAQkfgGjOgpQjGgojGiHIgwghQh1h1jlg4Qi4gthMg1QhJg0Adg8QA9h/HoA6IEtAjIDlAbQEsAiEWgJIApACIA6ABQDvACD8gbQBHgHCzgGQBTgDB5gJQCMgKC/gRQCwgRBTAXQBOAUgKA6QgPA5hQAyQguAchEAZQi/BJi9CAQiZBoh3ApQgbAKgZAGIiXAjQkVA1k+AAIgXAAg'
      )
    this.shape_124.setTransform(636.4449, 812.681)
    this.shape_125 = new cjs.Shape()
    this.shape_125.graphics
      .f('#029BFB')
      .s()
      .p(
        'AgQJyIgVgBIgYAAQlfgCkwg+QhygXimhBQg/gYhZglIgCgBQiYg/jnhmQlwiihMklIgBgDQgniVCVhnQCThnFMg6QB8A/CHAXQB5AVCDgLQCFgLCUAQQEVAdEEgGIAfgBQAUAAAKABIAYAAQD3AGEHgaQDDgTCpAaQBzASCsgWQCvgWDpg+QD5A2BaB7QBNBnghCWQgHAdgKAeQh6CyiHA7QiGA9j0CAQhpA2hsAwIgCABQiPA+iTAvQhPAZhQAPQkxA9lfAAIgVAAgAgPF0QFKACEfg3ICXgjQAZgGAbgKQB3gpCZhoQC9iAC/hJQBEgZAugcQBQgyAPg5QAKg6hOgUQhTgXiwARQi/ARiMAKQh5AJhTADQizAGhHAHQj8AbjvgCIg6gBIgpgCQkWAJksgiIjlgbIktgjQnog6g9B/QgdA8BJA0QBMA1C4AtQDlA4B1B1IAwAhQDGCHDGAoQDOApEfAGIAzAAIAoAAg'
      )
    this.shape_125.setTransform(638.2272, 811.7781)
    this.shape_126 = new cjs.Shape()
    this.shape_126.graphics
      .f()
      .s('#09245A')
      .ss(10.1, 1, 1)
      .p(
        'A/VjWQgniYCXhnQCVhoFRg5QB+BACJAYQB6AVCFgKQCHgLCWAQQEZAeEGgGQAZgBAGAAQAVAAAKABQASAAAGAAQD6AHELgbQDFgUCrAaQB0ASCwgXQCxgXDshAQD8A2BcB8QBPBogjCYQgGAdgLAfQh8C0iIA8QiJA8j3CBQhrA4htAvQgBABgBAAQiRA/iVAwQhQAZhRAPQk/A/lvgCQgKAAgKAAQgNAAgMAAQljgDk0g/QhzgWiphBQg/gZhaglQgBgBgBAAQibhAjqhnQl2ikhNkog'
      )
    this.shape_126.setTransform(638.2671, 810.8268)
    this.shape_127 = new cjs.Shape()
    this.shape_127.graphics
      .f('#050F49')
      .s()
      .p(
        'AABFwIgngBIg0AAQkkgGjQgpQjKgpjIiIIgxgiQh2h3jpg5Qi7gthNg2QhLg0Aeg9QA9iBHxA9IEyAkIDoAbQEwAjEagIIAqABIA7ACQDyACEBgcQBHgIC2gGQBVgDB6gJQCPgLDCgSQCzgRBUAXQBPAVgLA6QgOA6hSAyQgvAchFAaQjCBJjACCQicBqh4AqQgbAJgaAHIiaAiQkbA3lGAAIgSAAg'
      )
    this.shape_127.setTransform(636.4682, 811.7836)
    this.shape_128 = new cjs.Shape()
    this.shape_128.graphics
      .f('#029CFC')
      .s()
      .p(
        'AgRJ3IgUAAIgZAAQljgDk0g/QhzgWiphBQg/gZhaglIgCgBQibhAjqhnQl2ikhNkoIgBgCQgniYCXhnQCVhoFRg5QB+BACJAYQB6AVCFgKQCHgLCWAQQEZAeEGgGIAfgBQAVAAAKABIAYAAQD6AHELgbQDFgUCrAaQB0ASCwgXQCxgXDshAQD8A2BcB8QBPBogjCYQgGAdgLAfQh8C0iIA8QiJA8j3CBQhrA4htAvIgCABQiRA/iVAwQhQAZhRAPQk3A9lmAAIgRAAgA63kOQgeA+BLA0QBNA2C7AtQDpA5B2B2IAxAiQDICJDKApQDQApEkAFIA0ABIAoAAQFQACEig4ICagjQAagGAbgKQB4gpCchqQDAiCDChJQBFgaAvgdQBSgxAOg7QALg6hPgVQhUgXizASQjCASiPAKQh6AKhVACQi2AHhHAHQkBAcjygCIg7gBIgqgCQkaAJkwgjIjogcIkygkQifgThyAAQjzAAgqBXg'
      )
    this.shape_128.setTransform(638.2671, 810.8268)
    this.shape_129 = new cjs.Shape()
    this.shape_129.graphics
      .f()
      .s('#09245A')
      .ss(10.1, 1, 1)
      .p(
        'A/rjYQgpiZCahpQCXhoFWg5QB/BBCKAZQB8AWCGgKQCIgLCYARQEbAfEKgHQAZgBAGAAQAVAAAKACQASAAAGAAQD9AGEOgbQDHgUCtAZQB1ASCxgYQCzgXDvhCQEAA2BdB9QBQBpgjCZQgHAegLAfQh9C2iLA8QiKA8j6CCQhsA4hvAwQgBABgBAAQiSA/iXAxQhQAZhSAPQlCA/lzgBQgKgBgLAAQgNAAgMAAQlngCk3g/Qh0gXirhCQg/gZhcglQgBgBgBAAQichBjthnQl6ilhOkrg'
      )
    this.shape_129.setTransform(638.3122, 810.0017)
    this.shape_130 = new cjs.Shape()
    this.shape_130.graphics
      .f('#050F4A')
      .s()
      .p(
        'AABFzIgoAAIg0gBQkngFjTgqQjMgpjLiKIgxgjQh4h4jsg5Qi+gthOg3QhMg1Aeg9QA/iCH3A+IE2AlIDrAcQE0AkEdgJIAqACIA9ABQD1ACEDgcQBIgIC5gHQBVgDB8gJQCRgLDEgTQC1gSBWAXQBQAVgLA7QgPA7hTAzQgvAchGAbQjFBJjCCEQifBqh5AqQgcAKgZAGIicAkQkfA2lLAAIgRAAg'
      )
    this.shape_130.setTransform(636.4844, 811.0368)
    this.shape_131 = new cjs.Shape()
    this.shape_131.graphics
      .f('#029CFC')
      .s()
      .p(
        'AgRJ8IgVgBIgZAAQlngCk3g/Qh0gXirhCQg/gZhcglIgCgBQichBjthnQl6ilhOkrIgBgCQgpiZCahpQCXhoFWg5QB/BBCKAZQB8AWCGgKQCIgLCYARQEbAfEKgHIAfgBQAVAAAKACIAYAAQD9AGEOgbQDHgUCtAZQB1ASCxgYQCzgXDvhCQEAA2BdB9QBQBpgjCZQgHAegLAfQh9C2iLA8QiKA8j6CCQhsA4hvAwIgCABQiSA/iXAxQhQAZhSAPQk7A+lpAAIgRAAgA7NkQQgeA9BLA1QBPA3C9AtQDsA5B4B4IAxAjQDLCKDNApQDSAqEnAFIA1ABIAoAAQFUACEmg4ICcgkQAagGAbgKQB6gqCehqQDDiEDEhJQBGgbAwgcQBTgzAPg7QAKg7hQgVQhVgXi1ASQjFATiRALQh7AJhWADQi4AHhIAIQkEAcj1gCIg8gBIgqgCQkdAJk1gkIjqgcIk3glQiigUh0AAQj1AAgqBYg'
      )
    this.shape_131.setTransform(638.3122, 810.0017)
    this.shape_132 = new cjs.Shape()
    this.shape_132.graphics
      .f()
      .s('#09245B')
      .ss(10.1, 1, 1)
      .p(
        'A/9jaQgpiaCbhpQCYhpFag5QCABDCLAZQB9AXCHgKQCKgLCZARQEeAgELgHQAagBAGABQAVgBAKACQATAAAGAAQD/AGEPgcQDJgUCvAZQB2ASCzgYQC0gZDyhDQECA3BeB9QBRBqgkCbQgHAdgKAgQh/C3iMA8QiMA8j8CEQhtA4hwAwQgBABgBAAQiUBAiYAwQhRAahSAPQlFBAl2gCQgKgBgLAAQgNAAgNAAQlpgCk6hAQh1gWishDQhAgYhcgmQgBgBgBAAQiehBjvhoQl+imhPktg'
      )
    this.shape_132.setTransform(638.3394, 809.3281)
    this.shape_133 = new cjs.Shape()
    this.shape_133.graphics
      .f('#05104B')
      .s()
      .p(
        'AABF2IgogBIg1AAQkqgGjVgqQjOgpjNiMIgygiQh5h5jug6QjAguhPg3QhNg1Aeg+QBAiDH9A/IE5AmIDtAdQE3AkEhgIIAqABIA9ACQD3ACEGgdQBJgIC6gHQBWgDB9gKQCTgLDGgTQC4gTBWAXQBRAVgLA8QgPA7hUAzQgwAdhHAbQjHBKjECEQigBsh7AqQgcAKgaAHIidAjQkfA3lLAAIgXAAg'
      )
    this.shape_133.setTransform(636.4877, 810.4028)
    this.shape_134 = new cjs.Shape()
    this.shape_134.graphics
      .f('#029CFC')
      .s()
      .p(
        'AgRKAIgVgBIgaAAQlpgCk6hAQh1gWishDQhAgYhcgmIgCgBQiehBjvhoQl+imhPktIgBgDQgpiaCbhpQCYhpFag5QCABDCLAZQB9AXCHgKQCKgLCZARQEeAgELgHIAgAAQAVgBAKACIAZAAQD/AGEPgcQDJgUCvAZQB2ASCzgYQC0gZDyhDQECA3BeB9QBRBqgkCbQgHAdgKAgQh/C3iMA8QiMA8j8CEQhtA4hwAwIgCABQiUBAiYAwQhRAahSAPQk7A+lrAAIgVAAgA7fkSQgeA+BMA1QBQA3C/AuQDvA6B5B5IAxAiQDNCMDPApQDUAqEqAGIA1AAIApABQFXACEqg5ICdgjQAagHAcgKQB6gqCghsQDFiEDHhKQBGgbAwgdQBVgzAPg7QAKg8hRgVQhWgXi3ATQjHATiSALQh9AKhWADQi7AHhIAIQkGAdj4gCIg9gCIgqgBQkgAIk3gkIjtgdIk6gmQilgUh3AAQj1AAgrBYg'
      )
    this.shape_134.setTransform(638.3394, 809.3281)
    this.shape_135 = new cjs.Shape()
    this.shape_135.graphics
      .f()
      .s('#09255B')
      .ss(10, 1, 1)
      .p(
        'EggMgDbQgpibCchpQCahqFcg5QCBBECMAaQB+AXCIgKQCLgLCaASQEgAgENgHQAZgBAHAAQAVAAAKACQATAAAGAAQEAAGESgcQDKgVCwAaQB3ARC0gZQC2gZDzhEQEFA3BeB+QBRBqgjCcQgHAegLAfQiAC5iNA8QiNA8j/CFQhtA4hwAwQgBABgBAAQiVBAiZAxQhSAahTAPQlHBAl4gCQgLgBgLAAQgMAAgNAAQlsgCk8hAQh2gXithCQhBgZhdgmQAAgBgBAAQifhBjxhoQmBinhQkvg'
      )
    this.shape_135.setTransform(638.3653, 808.7781)
    this.shape_136 = new cjs.Shape()
    this.shape_136.graphics
      .f('#05104B')
      .s()
      .p(
        'AABF4IgoAAIg2gBQksgFjXgrQjPgqjPiMIgygjQh6h6jxg6QjBguhQg3QhNg2Aeg+QBBiEIBBAIE8AmIDvAeQE5AlEjgIIAqABIA+ACQD5ACEIgeQBJgIC8gHQBXgDB+gKQCTgLDJgUQC5gTBWAXQBSAVgLA8QgPA8hVAzQgwAehHAaQjJBKjGCGQiiBth7AqQgcAKgaAHIifAjQkkA3lRAAIgRAAg'
      )
    this.shape_136.setTransform(636.4925, 809.9044)
    this.shape_137 = new cjs.Shape()
    this.shape_137.graphics
      .f('#019CFC')
      .s()
      .p(
        'AgRKDIgWgBIgZAAQlsgCk8hAQh2gXithCQhBgZhdgmIgBgBQifhBjxhoQmBinhQkvIgBgDQgpibCchpQCahqFcg5QCBBECMAaQB+AXCIgKQCLgLCaASQEgAgENgHIAggBQAVAAAKACIAZAAQEAAGESgcQDKgVCwAaQB3ARC0gZQC2gZDzhEQEFA3BeB+QBRBqgjCcQgHAegLAfQiAC5iNA8QiNA8j/CFQhtA4hwAwIgCABQiVBAiZAxQhSAahTAPQk9A+lsAAIgWAAgA7ukUQgeA/BNA2QBQA3DBAtQDxA7B6B6IAyAiQDPCNDPAqQDXAqEsAGIA2AAIApABQFaABErg4ICfgkQAagGAcgKQB7grCihsQDGiGDJhKQBHgbAwgdQBVgzAPg8QALg8hSgVQhWgXi5ASQjJAUiTALQh+AKhXAEQi8AHhJAIQkIAdj5gCIg+gBIgqgCQkjAJk5gmIjvgdIk8gmQiogVh4AAQj2AAgsBYg'
      )
    this.shape_137.setTransform(638.3653, 808.7781)
    this.shape_138 = new cjs.Shape()
    this.shape_138.graphics
      .f()
      .s('#09255B')
      .ss(10, 1, 1)
      .p(
        'EggXgDcQgqicCehqQCahpFeg5QCCBECNAaQB/AYCJgKQCLgLCbASQEiAhEOgHQAagBAGAAQAVAAAKACQATAAAGAAQECAGETgdQDLgVCxAaQB3ARC2gZQC2gZD1hFQEGA2BgB/QBRBqgkCdQgHAegLAgQiBC5iNA8QiOA9kACFQhuA4hxAxQgBAAgBABQiWBAiaAxQhSAahUAPQlIBAl6gCQgLgBgLAAQgNAAgMAAQlugCk9hAQh3gXiuhDQhBgYhegnQgBAAAAgBQighBjyhoQmEiohQkwg'
      )
    this.shape_138.setTransform(638.3938, 808.3531)
    this.shape_139 = new cjs.Shape()
    this.shape_139.graphics
      .f('#05104C')
      .s()
      .p(
        'AAAF6IgoAAIg2gBQkugFjYgrQjRgqjQiNIgygjQh7h7jyg6QjCguhRg3QhOg2AfhAQBBiDIEBAIE+AnIDxAeQE7AlEkgIIArACIA+ABQD6ACEKgdQBKgJC9gHQBXgDB/gKQCUgMDKgUQC6gTBYAXQBSAVgLA9QgPA8hWAzQgxAehHAaQjKBLjICGQiiBuh9AqQgcAKgaAHIigAjQkiA3lQAAIgYAAg'
      )
    this.shape_139.setTransform(636.5039, 809.4921)
    this.shape_140 = new cjs.Shape()
    this.shape_140.graphics
      .f('#019CFD')
      .s()
      .p(
        'AgRKFIgWgBIgZAAQlugCk9hAQh3gXiuhDQhBgYhegnIgBgBQighBjyhoQmEiohQkwIgBgDQgqicCehqQCahpFeg5QCCBECNAaQB/AYCJgKQCLgLCbASQEiAhEOgHIAggBQAVAAAKACIAZAAQECAGETgdQDLgVCxAaQB3ARC2gZQC2gZD1hFQEGA2BgB/QBRBqgkCdQgHAegLAgQiBC5iNA8QiOA9kACFQhuA4hxAxIgCABQiWBAiaAxQhSAahUAPQk+A+luAAIgWAAgA75kWQgeBABNA2QBRA3DDAuQDyA6B6B7IAzAjQDQCNDRAqQDXArEuAFIA2ABIAqAAQFcACEtg5ICfgjQAbgHAcgKQB8gqCjhuQDHiGDKhLQBIgaAxgeQBVgzAQg8QAKg9hSgVQhXgXi6ATQjKAUiUAMQh/AKhYADQi9AHhJAJQkKAdj7gCIg9gBIgrgCQkkAIk8glIjxgeIk9gnQiqgVh5AAQj3AAgsBYg'
      )
    this.shape_140.setTransform(638.3938, 808.3531)
    this.shape_141 = new cjs.Shape()
    this.shape_141.graphics
      .f()
      .s('#09255B')
      .ss(10, 1, 1)
      .p(
        'EggggDdQgqicCfhrQCbhpFgg5QCCBFCOAaQB/AYCJgKQCNgLCbASQEjAhEPgGQAagCAGABQAVAAAKABQATAAAHAAQECAHEUgdQDMgVCyAZQB4ASC2gaQC3gaD2hFQEHA2BgB/QBSBrgkCdQgHAfgLAgQiCC5iOA9QiOA8kCCFQhuA5hyAxQgBAAgBABQiWBAibAxQhSAahUAQQlKBAl7gCQgLgBgLAAQgNAAgNAAQlvgCk+hAQh3gXivhDQhBgZhegmQgBgBgBAAQighCj0hpQmFiohRkxg'
      )
    this.shape_141.setTransform(638.3972, 808.053)
    this.shape_142 = new cjs.Shape()
    this.shape_142.graphics
      .f('#05104C')
      .s()
      .p(
        'AAAF7IgoAAIg2gBQkwgFjZgrQjRgqjRiOIgzgjQh7h7jzg7QjEguhRg4QhOg2Afg/QBBiEIHBBIE/AnIDyAeQE9AmElgJIArACIA+ABQD8ACELgdQBKgJC+gHQBYgDB/gLQCVgLDLgUQC7gUBYAXQBSAWgLA8QgPA9hWA0QgxAdhIAbQjLBKjJCHQijBuh9ArQgcAKgaAGIihAkQkkA4lRAAIgYgBg'
      )
    this.shape_142.setTransform(636.509, 809.2061)
    this.shape_143 = new cjs.Shape()
    this.shape_143.graphics
      .f('#019CFD')
      .s()
      .p(
        'AgRKHIgWgBIgaAAQlvgCk+hAQh3gXivhDIifg/IgCgBQighCj0hpQmFiohRkxIgBgDQgqicCfhrQCbhpFgg5QCCBFCOAaQB/AYCJgKQCNgLCbASQEjAhEPgGIAggBQAVAAAKABIAaAAQECAHEUgdQDMgVCyAZQB4ASC2gaQC3gaD2hFQEHA2BgB/QBSBrgkCdQgHAfgLAgQiCC5iOA9QiOA8kCCFQhuA5hyAxIgCABQiWBAibAxQhSAahUAQQlAA+lvAAIgWAAgA8BkXQgeBABNA2QBSA4DDAtQDzA7B8B7IAyAkQDRCNDSArQDYAqEwAGIA2AAIAqABQFdACEvg5ICggkQAagHAdgKQB9gqCjhuQDIiHDLhLQBIgbAxgdQBXg0APg8QALg9hTgVQhYgXi7ATQjKAUiVAMQiAAKhYAEQi+AHhKAIQkKAej8gCIg+gCIgrgBQkmAIk9gmIjxgeIlAgnQirgVh6AAQj3AAgsBYg'
      )
    this.shape_143.setTransform(638.3972, 808.053)
    this.shape_144 = new cjs.Shape()
    this.shape_144.graphics
      .f()
      .s('#09255B')
      .ss(10, 1, 1)
      .p(
        'EggmgDdQgqidCfhrQCbhpFhg5QCDBFCOAbQCAAYCKgKQCMgLCcASQEjAhEQgGQAagCAHABQAVAAAKABQATAAAGAAQEEAHEUgdQDNgWCyAaQB4ARC3gZQC4gaD2hGQEJA2BgB/QBSBrgkCeQgHAfgLAgQiDC6iOA8QiPA9kCCFQhvA5hyAxQgBABgBAAQiXBAibAyQhSAahUAPQlLBAl9gCQgKAAgLAAQgNAAgNAAQlwgDlAhAQh3gXivhDQhCgZhegmQgBgBgBAAQighCj1hpQmGiohRkyg'
      )
    this.shape_144.setTransform(638.4103, 807.828)
    this.shape_145 = new cjs.Shape()
    this.shape_145.graphics
      .f('#05104D')
      .s()
      .p(
        'AAAF9IgpgBIg2AAQkwgGjagrQjSgqjSiOIgygkQh8h7j0g7QjEguhSg4QhOg2AfhAQBBiEIJBBIFAAoIDzAeQE+AmEmgIIAsABIA+ACQD8ACEMgeQBKgIC/gIQBYgDCAgLQCVgMDMgUQC7gTBYAXQBTAVgKA9QgQA9hWA0QgyAdhIAbQjMBLjJCHQikBuh9ArQgcAKgbAHIihAjQklA4lSAAIgYAAg'
      )
    this.shape_145.setTransform(636.5303, 808.995)
    this.shape_146 = new cjs.Shape()
    this.shape_146.graphics
      .f('#019CFD')
      .s()
      .p(
        'AgSKIIgVAAIgaAAQlwgDlAhAQh3gXivhDQhCgZhegmIgCgBQighCj1hpQmGiohRkyIgBgDQgqidCfhrQCbhpFhg5QCDBFCOAbQCAAYCKgKQCMgLCcASQEjAhEQgGIAhgBQAVAAAKABIAZAAQEEAHEUgdQDNgWCyAaQB4ARC3gZQC4gaD2hGQEJA2BgB/QBSBrgkCeQgHAfgLAgQiDC6iOA8QiPA9kCCFQhvA5hyAxIgCABQiXBAibAyQhSAahUAPQlBA+lxAAIgWAAgA8HkXQgfBABOA2QBSA4DEAuQD0A6B8B8IAyAjQDSCPDSAqQDaArEwAFIA2ABIAqAAQFfACEvg5IChgkQAbgGAcgKQB9grCkhuQDJiIDMhLQBIgaAygeQBWg0AQg8QAKg9hTgWQhYgXi7AUQjMAUiVAMQiAAKhYAEQi/AHhKAIQkMAej8gCIg+gBIgsgCQkmAJk+gmIjzgfIlAgnQisgWh7AAQj3AAgsBZg'
      )
    this.shape_146.setTransform(638.4103, 807.828)
    this.shape_147 = new cjs.Shape()
    this.shape_147.graphics
      .f()
      .s('#09255B')
      .ss(10, 1, 1)
      .p(
        'EggqgDdQgqieCfhqQCchqFig5QCDBFCOAbQCAAYCKgKQCNgKCcASQEkAhEQgGQAagCAHABQAVAAAKABQATAAAHAAQEDAHEWgdQDNgWCyAaQB4ARC3gaQC4gaD4hGQEJA2BgCAQBSBrgkCeQgHAfgLAfQiDC7iPA9QiPA8kDCGQhvA5hyAxQgBAAgBABQiXBAibAyQhTAahUAPQlLBAl+gCQgKgBgLAAQgNAAgNAAQlxgClAhAQh3gXiwhDQhCgZhegnQgBAAgBgBQihhBj1hqQmHiohRkyg'
      )
    this.shape_147.setTransform(638.421, 807.653)
    this.shape_148 = new cjs.Shape()
    this.shape_148.graphics
      .f('#05104D')
      .s()
      .p(
        'AAAF9IgpAAIg2gBQkxgFjagrQjTgrjSiOIgzgkQh8h8j0g7QjFgthSg4QhOg3AfhAQBBiEIKBBIFCAoIDzAeQE+AnEngJIAsACIA+ABQD9ACEMgeQBLgIC/gIQBYgDCAgKQCWgMDMgVQC8gTBYAXQBTAVgKA9QgQA9hXA0QgxAdhIAbQjNBLjJCIQikBuh+ArQgdAKgaAHIihAkQkmA3lTAAIgYAAg'
      )
    this.shape_148.setTransform(636.5201, 808.87)
    this.shape_149 = new cjs.Shape()
    this.shape_149.graphics
      .f('#019CFD')
      .s()
      .p(
        'AgSKJIgVgBIgaAAQlxgClAhAQh3gXiwhDQhCgZhegnIgCgBQihhBj1hqQmHiohRkyIgBgDQgqieCfhqQCchqFig5QCDBFCOAbQCAAYCKgKQCNgKCcASQEkAhEQgGIAhgBQAVAAAKABIAaAAQEDAHEWgdQDNgWCyAaQB4ARC3gaQC4gaD4hGQEJA2BgCAQBSBrgkCeQgHAfgLAfQiDC7iPA9QiPA8kDCGQhvA5hyAxIgCABQiXBAibAyQhTAahUAPQlBA+lyAAIgWAAgA8LkYQgfBABOA3QBSA4DFAtQD0A7B8B8IAzAkQDSCODTArQDaArExAFIA2ABIAqAAQFfACExg5IChgkQAagHAdgKQB+grCkhuQDJiIDNhLQBIgbAxgdQBXg0AQg9QAKg9hTgVQhYgXi8ATQjMAViWAMQiAAKhYADQi/AIhLAIQkMAej9gCIg+gBIgsgCQknAJk+gnIjzgeIlCgoQisgVh7AAQj4AAgsBYg'
      )
    this.shape_149.setTransform(638.421, 807.653)
    this.shape_150 = new cjs.Shape()
    this.shape_150.graphics
      .f()
      .s('#09255B')
      .ss(10, 1, 1)
      .p(
        'EggtgDdQgqieCfhrQCdhqFig5QCDBGCPAbQCAAYCKgKQCNgKCcASQEkAhERgGQAagCAHABQAVAAAKABQATAAAHAAQEDAHEWgeQDOgVCyAaQB4ARC4gaQC4gaD4hHQEJA3BgB/QBTBsglCeQgHAfgLAfQiCC7iQA9QiPA8kDCGQhvA5hyAxQgBABgBAAQiYBBibAxQhTAahUAQQlMBAl+gCQgKgBgLAAQgNAAgNAAQlxgClBhAQh3gXiwhEQhCgZhegmQgBgBgBAAQihhCj1hpQmJiphRkyg'
      )
    this.shape_150.setTransform(638.421, 807.578)
    this.shape_151 = new cjs.Shape()
    this.shape_151.graphics
      .f('#05104D')
      .s()
      .p(
        'AAAF+IgpgBIg2AAQkygGjagrQjTgqjSiPIgzgkQh8h8j1g7QjFguhSg3QhOg3AfhAQBBiFILBCIFCAoIDzAeQE/AnEngJIAsACIA+ABQD9ACENgeQBLgIC/gIQBYgDCBgKQCWgMDMgVQC8gTBZAXQBTAVgLA9QgQA9hWA0QgyAdhIAbQjNBLjKCIQikBvh+ArQgdAKgaAGIihAkQknA4lTAAIgYAAg'
      )
    this.shape_151.setTransform(636.5235, 808.7839)
    this.shape_152 = new cjs.Shape()
    this.shape_152.graphics
      .f('#019CFD')
      .s()
      .p(
        'AgSKKIgVgBIgaAAQlxgClBhAQh3gXiwhEQhCgZhegmIgCgBQihhCj1hpQmJiphRkyIgBgDQgqieCfhrQCdhqFig5QCDBGCPAbQCAAYCKgKQCNgKCcASQEkAhERgGIAhgBQAVAAAKABIAaAAQEDAHEWgeQDOgVCyAaQB4ARC4gaQC4gaD4hHQEJA3BgB/QBTBsglCeQgHAfgLAfQiCC7iQA9QiPA8kDCGQhvA5hyAxIgCABQiYBBibAxQhTAahUAQQlCA+lyAAIgWAAgA8NkYQgfBABOA3QBSA3DFAuQD1A7B8B8IAzAkQDSCPDTAqQDaArEyAGIA2AAIAqABQFgACExg6IChgkQAagGAdgKQB+grCkhvQDKiIDNhLQBIgbAygdQBWg0AQg9QALg9hTgVQhZgXi8ATQjMAViWAMQiBAKhYADQi/AIhLAIQkNAej9gCIg+gBIgsgCQknAJk/gnIjzgeIlCgoQiugWh7AAQj4AAgrBZg'
      )
    this.shape_152.setTransform(638.421, 807.578)
    this.shape_153 = new cjs.Shape()
    this.shape_153.graphics
      .f()
      .s('#09255B')
      .ss(10, 1, 1)
      .p(
        'EggugDeQgqidCfhrQCdhqFig5QCEBGCOAbQCAAYCKgKQCNgLCdATQEkAhERgGQAagCAHABQAVAAAKABQATAAAHAAQEEAHEWgeQDNgVCzAZQB4ASC3gaQC5gaD4hHQEJA3BhB/QBSBsgkCeQgHAegLAgQiDC7iQA9QiPA8kDCGQhwA5hyAxQgBABgBAAQiXBBibAxQhTAahVAQQlMBAl+gCQgKgBgLAAQgNAAgNAAQlygClAhAQh4gXiwhEQhBgZhfgmQgBgBgBAAQihhCj1hpQmJiphRkzg'
      )
    this.shape_153.setTransform(638.4221, 807.528)
    this.shape_154 = new cjs.Shape()
    this.shape_154.graphics
      .f('#05104D')
      .s()
      .p(
        'AAAF+IgpgBIg2AAQkygGjagrQjUgqjSiPIgzgkQh8h8j1g7QjFguhSg4QhPg2AfhAQBCiFILBCIFCAoIDzAeQFAAnEngJIAsACIA+ABQD+ACENgeQBKgIC/gIQBZgDCAgLQCWgMDNgUQC8gTBZAXQBTAVgLA9QgPA9hXA0QgyAdhIAbQjNBLjKCIQilBvh9ArQgdAKgaAGIiiAkQknA4lTAAIgYAAg'
      )
    this.shape_154.setTransform(636.5252, 808.7339)
    this.shape_155 = new cjs.Shape()
    this.shape_155.graphics
      .f('#019CFD')
      .s()
      .p(
        'AgSKKIgVgBIgaAAQlygClAhAQh4gXiwhEQhBgZhfgmIgCgBQihhCj1hpQmJiphRkzIgBgDQgqidCfhrQCdhqFig5QCEBGCOAbQCAAYCKgKQCNgLCdATQEkAhERgGIAhgBQAVAAAKABIAaAAQEEAHEWgeQDNgVCzAZQB4ASC3gaQC5gaD4hHQEJA3BhB/QBSBsgkCeQgHAegLAgQiDC7iQA9QiPA8kDCGQhwA5hyAxIgCABQiXBBibAxQhTAahVAQQlCA+lxAAIgXAAgA8PkYQgfBABPA2QBSA4DFAuQD1A7B8B8IAzAkQDSCPDUAqQDaArEyAGIA2AAIAqABQFgACExg6ICigkQAagGAdgKQB9grClhvQDKiIDNhLQBIgbAygdQBXg0APg9QALg9hTgVQhZgXi8ATQjNAUiWAMQiAALhZADQi/AIhKAIQkNAej+gCIg+gBIgsgCQknAJlAgnIjzgeIlCgoQitgWh8AAQj4AAgsBZg'
      )
    this.shape_155.setTransform(638.4221, 807.528)
    this.shape_156 = new cjs.Shape()
    this.shape_156.graphics
      .f()
      .s('#09255B')
      .ss(10, 1, 1)
      .p(
        'EggvgDeQgqidCghrQCchqFjg5QCDBGCPAbQCAAYCKgKQCNgLCdATQEkAhERgGQAagCAHABQAVAAAKABQATAAAHAAQEEAHEWgeQDNgVCzAZQB4ASC4gaQC4gbD4hGQEKA2BgCAQBTBrglCfQgHAegLAgQiDC7iPA9QiPA8kECGQhvA5hyAxQgBABgBAAQiYBBibAxQhTAahVAQQlMBAl+gCQgKgBgLAAQgNAAgNAAQlygClAhAQh4gXiwhEQhCgZhegmQgBgBgBAAQihhCj2hpQmIiphSkzg'
      )
    this.shape_156.setTransform(638.4221, 807.503)
    this.shape_157 = new cjs.Shape()
    this.shape_157.graphics
      .f('#05104D')
      .s()
      .p(
        'AAAF+IgpgBIg2AAQkygGjagrQjUgqjSiPIgzgkQh8h8j2g7QjFguhSg4QhOg2AfhAQBBiFIMBCIFCAoIDzAeQFAAnEngJIAsACIA+ABQD+ACENgeQBKgIDAgIQBYgDCBgLQCWgMDMgUQC9gUBYAXQBUAWgLA9QgQA9hXA0QgxAdhJAbQjNBLjKCIQikBvh+ArQgdAKgaAGIiiAkQknA4lTAAIgYAAg'
      )
    this.shape_157.setTransform(636.5252, 808.7089)
    this.shape_158 = new cjs.Shape()
    this.shape_158.graphics
      .f('#019CFD')
      .s()
      .p(
        'AgSKKIgVgBIgaAAQlygClAhAQh4gXiwhEQhCgZhegmIgCgBQihhCj2hpQmIiphSkzIgBgDQgqidCghrQCchqFjg5QCDBGCPAbQCAAYCKgKQCNgLCdATQEkAhERgGIAhgBQAVAAAKABIAaAAQEEAHEWgeQDNgVCzAZQB4ASC4gaQC4gbD4hGQEKA2BgCAQBTBrglCfQgHAegLAgQiDC7iPA9QiPA8kECGQhvA5hyAxIgCABQiYBBibAxQhTAahVAQQlCA+lxAAIgXAAgA8PkYQgfBABOA2QBSA4DFAuQD2A7B8B8IAzAkQDSCPDUAqQDaArEyAGIA2AAIAqABQFgACExg6ICigkQAagGAdgKQB+grCkhvQDKiIDNhLQBJgbAxgdQBXg0AQg9QALg9hUgWQhYgXi9AUQjMAUiWAMQiBALhYADQjAAIhKAIQkNAej+gCIg+gBIgsgCQknAJlAgnIjzgeIlCgoQiugWh7AAQj4AAgsBZg'
      )
    this.shape_158.setTransform(638.4221, 807.503)
    this.shape_159 = new cjs.Shape()
    this.shape_159.graphics
      .f()
      .s('#09255B')
      .ss(10, 1, 1)
      .p(
        'AI1oNQDNgWCzAaQDyAjHuiNQABAAABAAQEIA3BgB/QBiCAhGDJQAAAAgBABQiCC6iPA8QiPA9kECGQkECFkSBYQhTAahVAPQlMBAl+gCQgKAAgLAAQgNAAgNAAQlygDlAhAQh4gXiwhDQixhEmIioQmKiphRk1QgqieCghrQCchqFjg5QABAAACABQD0CEElgWQCNgKCdASQEkAiERgHQAagBAHAAIAAAAQAVAAAKACQAFAAAHAAIABAAQEKAHEdgeg'
      )
    this.shape_159.setTransform(638.4206, 807.4947)
    this.shape_160 = new cjs.Shape()
    this.shape_160.graphics
      .f('#05104D')
      .s()
      .p(
        'AAAF+IAAAAIgVgBIgUAAQlVgCjtgvQjtgvjsiuQh8h8j2g7QjFguhSg4QhOg2AfhAQBBiFIMBCII1BGQFAAnEngJIABAAIArACQEbAHEugiQBKgIDAgIQC/gIF8gmQC9gUBYAXQBUAWgLA9IAAAAQgZBfjIBKQjNBLjKCIQjJCIiQAiIiiAkQknA4lTAAIgYAAg'
      )
    this.shape_160.setTransform(636.5252, 808.7089)
    this.shape_161 = new cjs.Shape()
    this.shape_161.graphics
      .f('#019CFD')
      .s()
      .p(
        'AgSKKIgVAAIgaAAQlygDlAhAQh4gXiwhDQixhEmIioQmKiphRk1QgqieCghrQCchqFjg5QAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABABQD0CEElgWQCNgKCdASQEkAiERgHIAhgBIAAAAQAVAAAKACIAMAAIABAAQEKAHEdgeQDNgWCzAaQDyAjHuiNIACAAQEIA3BgB/QBiCAhGDJIgBABQiCC6iPA8QiPA9kECGQkECFkSBYQhTAahVAPQlCA+lxAAIgXAAgA8PkYQgfBABOA3QBSA4DFAuQD2A7B8B8QDsCtDtAwQDtAvFVACIAUAAIAWAAIAAAAQFgACExg5ICigkQCQgjDJiHQDKiIDNhLQDIhKAZhgIAAAAQALg9hUgVQhYgXi9ATQl8Ani/AIQjAAHhKAJQkuAhkbgHIgrgBIgBAAQknAIlAgmIo1hHQiugWh7AAQj4AAgsBZg'
      )
    this.shape_161.setTransform(638.4206, 807.4947)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }] })
        .to({ state: [{ t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }] }, 1)
        .to({ state: [{ t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }] }, 1)
        .to({ state: [{ t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }] }, 1)
        .to({ state: [{ t: this.shape_20 }, { t: this.shape_19 }, { t: this.shape_18 }] }, 1)
        .to({ state: [{ t: this.shape_23 }, { t: this.shape_22 }, { t: this.shape_21 }] }, 1)
        .to({ state: [{ t: this.shape_26 }, { t: this.shape_25 }, { t: this.shape_24 }] }, 1)
        .to({ state: [{ t: this.shape_29 }, { t: this.shape_28 }, { t: this.shape_27 }] }, 1)
        .to({ state: [{ t: this.shape_32 }, { t: this.shape_31 }, { t: this.shape_30 }] }, 1)
        .to({ state: [{ t: this.shape_35 }, { t: this.shape_34 }, { t: this.shape_33 }] }, 1)
        .to({ state: [{ t: this.shape_38 }, { t: this.shape_37 }, { t: this.shape_36 }] }, 1)
        .to({ state: [{ t: this.shape_41 }, { t: this.shape_40 }, { t: this.shape_39 }] }, 1)
        .to({ state: [{ t: this.shape_44 }, { t: this.shape_43 }, { t: this.shape_42 }] }, 1)
        .to({ state: [{ t: this.shape_47 }, { t: this.shape_46 }, { t: this.shape_45 }] }, 1)
        .to({ state: [{ t: this.shape_50 }, { t: this.shape_49 }, { t: this.shape_48 }] }, 1)
        .to({ state: [{ t: this.shape_53 }, { t: this.shape_52 }, { t: this.shape_51 }] }, 1)
        .to({ state: [{ t: this.shape_56 }, { t: this.shape_55 }, { t: this.shape_54 }] }, 1)
        .to({ state: [{ t: this.shape_59 }, { t: this.shape_58 }, { t: this.shape_57 }] }, 1)
        .to({ state: [{ t: this.shape_62 }, { t: this.shape_61 }, { t: this.shape_60 }] }, 1)
        .to({ state: [{ t: this.shape_65 }, { t: this.shape_64 }, { t: this.shape_63 }] }, 1)
        .to({ state: [{ t: this.shape_68 }, { t: this.shape_67 }, { t: this.shape_66 }] }, 1)
        .to({ state: [{ t: this.shape_71 }, { t: this.shape_70 }, { t: this.shape_69 }] }, 1)
        .to({ state: [{ t: this.shape_74 }, { t: this.shape_73 }, { t: this.shape_72 }] }, 1)
        .to({ state: [{ t: this.shape_77 }, { t: this.shape_76 }, { t: this.shape_75 }] }, 1)
        .to({ state: [{ t: this.shape_80 }, { t: this.shape_79 }, { t: this.shape_78 }] }, 1)
        .to({ state: [{ t: this.shape_83 }, { t: this.shape_82 }, { t: this.shape_81 }] }, 1)
        .to({ state: [{ t: this.shape_86 }, { t: this.shape_85 }, { t: this.shape_84 }] }, 1)
        .to({ state: [{ t: this.shape_89 }, { t: this.shape_88 }, { t: this.shape_87 }] }, 1)
        .to({ state: [{ t: this.shape_92 }, { t: this.shape_91 }, { t: this.shape_90 }] }, 1)
        .to({ state: [{ t: this.shape_95 }, { t: this.shape_94 }, { t: this.shape_93 }] }, 1)
        .to({ state: [{ t: this.shape_98 }, { t: this.shape_97 }, { t: this.shape_96 }] }, 1)
        .to({ state: [{ t: this.shape_101 }, { t: this.shape_100 }, { t: this.shape_99 }] }, 1)
        .to({ state: [{ t: this.shape_104 }, { t: this.shape_103 }, { t: this.shape_102 }] }, 1)
        .to({ state: [{ t: this.shape_107 }, { t: this.shape_106 }, { t: this.shape_105 }] }, 1)
        .to({ state: [{ t: this.shape_110 }, { t: this.shape_109 }, { t: this.shape_108 }] }, 1)
        .to({ state: [{ t: this.shape_113 }, { t: this.shape_112 }, { t: this.shape_111 }] }, 1)
        .to({ state: [{ t: this.shape_116 }, { t: this.shape_115 }, { t: this.shape_114 }] }, 1)
        .to({ state: [{ t: this.shape_119 }, { t: this.shape_118 }, { t: this.shape_117 }] }, 1)
        .to({ state: [{ t: this.shape_122 }, { t: this.shape_121 }, { t: this.shape_120 }] }, 1)
        .to({ state: [{ t: this.shape_125 }, { t: this.shape_124 }, { t: this.shape_123 }] }, 1)
        .to({ state: [{ t: this.shape_128 }, { t: this.shape_127 }, { t: this.shape_126 }] }, 1)
        .to({ state: [{ t: this.shape_131 }, { t: this.shape_130 }, { t: this.shape_129 }] }, 1)
        .to({ state: [{ t: this.shape_134 }, { t: this.shape_133 }, { t: this.shape_132 }] }, 1)
        .to({ state: [{ t: this.shape_137 }, { t: this.shape_136 }, { t: this.shape_135 }] }, 1)
        .to({ state: [{ t: this.shape_140 }, { t: this.shape_139 }, { t: this.shape_138 }] }, 1)
        .to({ state: [{ t: this.shape_143 }, { t: this.shape_142 }, { t: this.shape_141 }] }, 1)
        .to({ state: [{ t: this.shape_146 }, { t: this.shape_145 }, { t: this.shape_144 }] }, 1)
        .to({ state: [{ t: this.shape_149 }, { t: this.shape_148 }, { t: this.shape_147 }] }, 1)
        .to({ state: [{ t: this.shape_152 }, { t: this.shape_151 }, { t: this.shape_150 }] }, 1)
        .to({ state: [{ t: this.shape_155 }, { t: this.shape_154 }, { t: this.shape_153 }] }, 1)
        .to({ state: [{ t: this.shape_158 }, { t: this.shape_157 }, { t: this.shape_156 }] }, 1)
        .to({ state: [{ t: this.shape_161 }, { t: this.shape_160 }, { t: this.shape_159 }] }, 1)
        .wait(1)
    )
    // Layer_1
    this.instance_9 = new lib.Tween5('synched', 0)
    this.instance_9.setTransform(638.65, 658.8, 0.9305, 1.0501)
    this.timeline.addTween(
      cjs.Tween.get(this.instance_9)
        .to({ scaleX: 1.0607, scaleY: 0.9403, x: 633.95, y: 691 }, 22, cjs.Ease.get(1))
        .to({ scaleX: 0.9305, scaleY: 1.0501, x: 638.65, y: 658.8 }, 29, cjs.Ease.get(1))
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(313.1, -342, 1255, 1260.3)
  // stage content:
  ;(lib.DoomFaces = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // Layer_3
    this.instance = new lib.rfgerg('synched', 0)
    this.instance.setTransform(228.15, 202.7, 0.3605, 0.3605, 0, 0, 0, 943.9, 569.7)
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(52))
    this._renderFirstFrame()
  }).prototype = p = new lib.AnMovieClip()
  p.nominalBounds = new cjs.Rectangle(115.7, 49, 337.5, 279.4)
  // library properties:
  lib.properties = {
    id: '84324E02EE1AC6418039986885C27C31',
    width: 230,
    height: 350,
    fps: 24,
    color: '#0066CC',
    opacity: 0.0,
    manifest: [],
    preloads: [],
  }
  // bootstrap callback support:
  ;(lib.Stage = function (canvas) {
    createjs.Stage.call(this, canvas)
  }).prototype = p = new createjs.Stage()
  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay
  }
  p.play = function () {
    this.tickEnabled = true
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
  }
  p.stop = function (ms) {
    if (ms) this.seek(ms)
    this.tickEnabled = false
  }
  p.seek = function (ms) {
    this.tickEnabled = true
    this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000)
  }
  p.getDuration = function () {
    return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000
  }
  p.getTimelinePosition = function () {
    return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000
  }
  an.bootcompsLoaded = an.bootcompsLoaded || []
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = []
  }
  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback)
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i])
      }
    }
  }
  an.compositions = an.compositions || {}
  an.compositions['84324E02EE1AC6418039986885C27C31'] = {
    getStage: function () {
      return exportRoot.stage
    },
    getLibrary: function () {
      return lib
    },
    getSpriteSheet: function () {
      return ss
    },
    getImages: function () {
      return img
    },
  }
  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id)
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id)
    }
  }
  an.getComposition = function (id) {
    return an.compositions[id]
  }
  an.makeResponsive = function (isResp, respDim, isScale, scaleType, domContainers) {
    var lastW,
      lastH,
      lastS = 1
    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()
    function resizeCanvas() {
      var w = lib.properties.width,
        h = lib.properties.height
      var iw = window.innerWidth,
        ih = window.innerHeight
      var pRatio = window.devicePixelRatio || 1,
        xRatio = iw / w,
        yRatio = ih / h,
        sRatio = 1
      if (isResp) {
        if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
          sRatio = lastS
        } else if (!isScale) {
          if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio)
        } else if (scaleType == 1) {
          sRatio = Math.min(xRatio, yRatio)
        } else if (scaleType == 2) {
          sRatio = Math.max(xRatio, yRatio)
        }
      }
      domContainers[0].width = w * pRatio * sRatio
      domContainers[0].height = h * pRatio * sRatio
      domContainers.forEach(function (container) {
        container.style.width = w * sRatio + 'px'
        container.style.height = h * sRatio + 'px'
      })
      stage.scaleX = pRatio * sRatio
      stage.scaleY = pRatio * sRatio
      lastW = iw
      lastH = ih
      lastS = sRatio
      stage.tickOnUpdate = false
      stage.update()
      stage.tickOnUpdate = true
    }
  }
  an.handleSoundStreamOnTick = function (event) {
    if (!event.paused) {
      var stageChild = stage.getChildAt(0)
      if (!stageChild.paused || stageChild.ignorePause) {
        stageChild.syncStreamSounds()
      }
    }
  }
  an.handleFilterCache = function (event) {
    if (!event.paused) {
      var target = event.target
      if (target) {
        if (target.filterCacheList) {
          for (var index = 0; index < target.filterCacheList.length; index++) {
            var cacheInst = target.filterCacheList[index]
            if (cacheInst.startFrame <= target.currentFrame && target.currentFrame <= cacheInst.endFrame) {
              cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h)
            }
          }
        }
      }
    }
  }
})((createjs = createjs || {}), (AdobeAn = AdobeAn || {}))
var createjs, AdobeAn
