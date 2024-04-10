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
    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#873E7F')
      .s()
      .p(
        'AhTVqQmehBiWhGQiVhHhjg5Qhjg5iJiFQiLiFhch3Qhch3hEiKQhEiKgyhTQgyhUgtioQgsipg1gGIAAyrIDOAAIFhB6QGFDyG2jyIOah6IPOAAQD9F1B0IGQAhCPguBsQgmQmlBEVQlAEWmOA3Qi3AZi7AAQjbAAjfgig'
      )
    this.shape.setTransform(-13.6707, 60.6239)
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-196.9, -81.4, 366.5, 284.1)
  ;(lib.Symbol29 = function (mode, startPosition, loop, reversed) {
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
      .ss(3, 1, 1)
      .p(
        'AEuA6QAEAWgNARQgVAUgjgRQgVgNgkgNQg2gThrADQhrAChCASQhDASgPAqQgPAqgegiQglg8AbhVQAbhUA3gjQA4giA3gEQA2gFAfABQB6ABBbBAQBVA8AQBWQAAADABAEg'
      )
    this.shape.setTransform(2.2054, 8.0209)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#873E7F')
      .s()
      .p(
        'AkDB+QgIgBgGgMQgJgSgFgeIgCgcQgCgWAAgLQABgXALgWQADgHAEgEQAGgFgBACQAEgCABgEQABgEAGgFIAZgzQACgEADAAQAGgBABAHQgLAHgEAHIgKAmIgHAhQgDAUAAAeQAAAeAIAQQACAFAEADIAGAFQAEAEAAAEQABAEgEADQABAJgGANQgGAIgDADQgFADgFAAIgDAAgAEBBbQgSgHgBgBIgCgDIgBgFQgDAAgDgFQgBgDgXgPQAXgCAFgFQAVgQgKgpQgKgpgWgmQABAEgGgGIABgEQADgDADAAQADABADADIADAHIAGAHIAAACIAEABQANACALAPQAGALAGAQQAMApAGAaQADAHAAAIIACAeIgBAAIAAAAIAAABQgLAJgPAAIAAAAIAAAAQgLAAgMgFIgCgBIgCAAIgBgBIAAAAIgBAAIABAAIAAAAIABABIACAAIACABQAMAFALAAIAAAAIAAAAQAPAAALgJIAAgBIAAAAIABAAIgKAMQgEADgJAAIgMgBg'
      )
    this.shape_1.setTransform(2.295, 10.0864)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#EB9EEF')
      .s()
      .p(
        'AkZCSQglg8AbhVQAbhUA3gjQA4giA3gEQA2gFAfABQB6ABBbBAQBVA8AQBWIABAHQAEAWgNARIgCgdQgBgIgCgIQgGgZgNgqQgFgQgHgLQgKgPgOgCIgDAAIgBgCIgFgIIgEgGQgCgDgDgBQgEgBgCAEIgCAEQAGAGAAgEQAVAmALAoQAKApgVARQgFAFgYACQAXAOACAEQACAEADABIACAEQgVgNgkgNQg2gThrADQhrAChCASQhDASgPAqQgIAXgNAAQgKAAgOgPgAkPgfQgFADgDAHQgLAWAAAYQgBALACAWIADAcQAEAdAJASQAGANAIABQAHABAGgFQAEgCAFgIQAHgOgBgJQADgCgBgFQAAgDgEgEIgGgFQgEgEgBgFQgIgQAAgdQgBgfAEgTIAGghIALgnQAEgGALgHQgBgIgHABQgCABgDADIgYAzQgGAFgBAFQgBAEgEACIAAgBIgFAEg'
      )
    this.shape_2.setTransform(2.2054, 8.0209)
    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f('#05104D')
      .s()
      .p('AhrBrQgsgsAAg/QAAg+AsgsQAtgtA+AAQA/AAAsAtQAtAsAAA+QAAA/gtAsQgsAtg/AAQg+AAgtgtg')
    this.shape_3.setTransform(1.675, 18.675)
    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f()
      .s('#05104D')
      .ss(3, 1, 1)
      .p(
        'Ak6kYQAqgOAXgOQAsgaAegJQACAAACgBQAxgOA6gBQAFAAAGAAQB7AABYA6QADACACACQAKAGAIAHQA7AwAEA7QAAABAAABAD0ipQANALASAXQASAYANAjQANAjgFA1QgCATgDAWQgEAcgHAjADRgGQAvAjAYAsQALAUAGAXQADAMACANQADAagFAXQgGAbgKACAjdD3QgIgQgHgSQAPgSAtgUQAEgCAEgBQAzgWBygEQBwgDBPAbQARAFANAGQA1AUANASQAUAhgSAWQgRAVgggEQgSgCgKgBQgDAAgCAAQgFAAgCAAQgaAGgcAUQgxAjhHAIQhGAIgygMQgkgGgcgWQgcgWggg4QgNgRgJgTQgSgqAHgxQAAgBABgCQACgOADgNQARhEAqgn'
      )
    this.shape_4.setTransform(-0.0593, -1.721)
    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics.f('#E775F6').s().p('AADgEIAFABIgPAHIAKgIg')
    this.shape_5.setTransform(20, 27.55)
    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f('#999999')
      .s()
      .p(
        'Ai9BGQgcgVghg3QgIgRgHgSQAPgRAtgUIACAFIABAAIgDAGIAGgEIARgHQAUgIAagFQAYgEAvgBIAzgCIASABQAqADBdASIAyALIAKADIgJgLQA0AVANARQAUAigRAUQgSAVgggDIgcgDIgFAAIgHAAQgMgCAUgLQAUgLAAgPQABgQgMgKQgLgKgmgLQg3gOgvgCQgugCgaADIg8AIQgiAFgbAIQgaAJgVAUQAAAbAnA0QAGALATAGIABAFIAGAEIABAFIAFABIADAFQgjgHgcgWg'
      )
    this.shape_6.setTransform(2.806, 23.725)
    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'Ah6BkIgDgEIgFgCIgBgEIgGgFIgBgEQgTgGgGgMQgog0ABgbQAUgTAbgJQAagJAjgEIA8gIQAagEAuACQAuACA4AOQAmALALAKQALAKAAAQQgBAPgUALQgUALANACQgaAGgcAUQgxAjhGAIQgdADgaAAQglAAgdgHgADBg/IgygLQhdgSgqgDIgSgBIgzABQgvABgYAEQgaAFgUAIIgRAIIgGADIADgFIgBAAIgCgGIAIgDQAzgWBygEQBwgDBPAbIAeALIAKAKg'
      )
    this.shape_7.setTransform(2.4489, 23.5839)
    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f('#EB9EEF')
      .s()
      .p(
        'AkhDwIgBgBIARgdIAFgIQAQggAmhEIAMgVQhNgDAKg9QALg8ATgSQAUgSgQgJIgZgPQgZgPAPgjQAQgiA2gkIAEgBQAygOA5gBIALAAQB7AABYA6QgXgBgCADIAXAPQAgAtgWAGQgXAFAcAUQAcAUAdAYQAdAYgSgcIANAMIgIgNQANALASAYQASAWANAjQANAjgFA2QgBghgIglQgMgzgSgRQAZB2g7gWQgwgSgrAEIAeAKQAYAJAPAHIACABQgQgBAFALQADAJANAQQAhAlAAADQAAADAVAMIAPAJQAIgJAGgUQgEAdgHAiIgBAAQgGgXgLgUQALAUAGAXIonAEIABgDIAFgbIgFAbIgBADgAEQDsIAAAAgADag4IgMgPQgdhDgUgaQA7AwADA7IAAACIgBgBg'
      )
    this.shape_8.setTransform(2.4032, -13.725)
    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f('#873E7F')
      .s()
      .p(
        'AkgDqQgCgLgCgRQgBgRgSg8QgSg6AHg3QAHg0gGgiQgFgiAGgcQAHgdAJgXQArgOAWgNQAsgaAegJQg1AjgQAjQgQAiAZAQIAZAOQAQAJgTASQgTASgLA9QgLA8BNADIgMAVQgpApgRBEIgRAcQgCAEgLAMQgMANgGADIgDgNgAizBOQgmBFgQAfIgEAJQARhEApgpgAEjCpQgYgsgvgjQgEgMAPABIgCgBQgPgHgYgIIgdgKQArgEAvARQA8AWgah1QATARALAyQAJAlABAiIgFApQgGAUgIAIIgPgJgAEOCbQgBgEggglQgOgPgDgJQAvAjAYAsQgVgMAAgCgAFACWIAFgpIAAAXIgFASIAAAAgAFFBtIAAAAgADcBaIAAAAgAizBOIAAAAgADuhEQgdgYgcgUQgbgUAWgFQAWgFgfgtIgXgPQABgDAYABIABAAQAKABAMAQQAVAaAdBCIALAPQgCACAEAGQgGgCgBABIACACQAJAPgEAAQgDAAgOgMgACujJIASAOIgSgOIgFgDIAFADg'
      )
    this.shape_9.setTransform(-1.1436, -11.375)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-33.6, -39.2, 67.6, 75)
  ;(lib.Symbol28 = function (mode, startPosition, loop, reversed) {
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
      .s('#09255B')
      .ss(7, 1, 1)
      .p(
        'AMHhlQAgg6gWhCQgWhCg3gaQg4gZhZAWQhZAWgxBNQhUBkjFgGQmqhZmngEQgIAAgIAAAsZDUQAygGCxAFQCyAGDcA0QDcA0DFAKQDFAKCvjGQBrh5AphtAJqhvQiaD5lAghQmqhZmngFQgIAAgIAB'
      )
    this.shape.setTransform(-5.4339, 0.5355)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#1294E4')
      .s()
      .p(
        'AD5FLQjFgKjcg0Qjcg0iygGQixgFgyAGIBIjIIAAjoIAQAAQGnAEGqBZQDFAGBUhkQAxhNBZgWQBZgWA4AZQA3AaAWBCQAWBCggA6QggA6ANgWIANgWQgpBthrB5QimC8i7AAIgTAAgADaBtQEFgBCIjWIACgCIABgDIgBADIgCACQiIDWkFABIgBAAIAAAAQgiAAgkgEIgDAAQmqhZmngFIgQABIAQgBQGnAFGqBZIADAAQAkAEAiAAIAAAAIABAAg'
      )
    this.shape_1.setTransform(-5.4339, 0.5355)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    )
    // Layer_2
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#873E7F')
      .s()
      .p(
        'AheDlQj/hMjrgMQjrgMArgKQAsgLgMgIQgMgJgDgOQgCgOAIgMQAIgMAPgDQAagFC4AGQC0AFDhA1QDXAzClgHQClgHCUinQCUipgjgKQBPgdADgSQABgJAFgHQAaCGiCC1QiBC3jBAqQhFAPhNAAQiKAAijgxg'
      )
    this.shape_2.setTransform(-3.9855, 20.4186)
    this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1))
    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(-88.3, -36.1, 165.8, 84.4), null)
  ;(lib.Symbol21 = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f('#0163AF').s().p('AAFAeIhJgOQgDgYAFgLQAEgMADgCQAAAOAcAKQAiAKBDgBIgDAWQABAGAAAGQgqAAgVgEg')
    this.shape.setTransform(37.1692, -42.8)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#05104D')
      .s()
      .p('AgbAdQgPgFgEgMQgBgDABgEQABgIAHgIQAMgMATgFIABAAQASgFAPAEQAQAFADAMIABAGQAAAIgJAJQgLANgTAFIgGABIgMACQgJAAgIgDg')
    this.shape_1.setTransform(2.7167, -27.4966)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#009DFF')
      .s()
      .p(
        'AlpDiQAmkGAYg1QAZg1ASgPQASgQAHgIIATgRIAigYIAtgaIAugXIAxgVQAZgJAZgIQAagJAagIIBTgTIA1gJIAhgGIABAAIAkgCQgigTAJgeQAEgGAGgFQAcgaBMgCIARAAIgFBpIABAFQgCAeACAFIAAJmIglAAQgyAAgmABIhIADIgjADIgiADIgDAAIg8AJIhGAQIhSAVQgpAMgpAOQglALgkAOQghANgfAPQgLAHgIAAQgvAAAhjhg'
      )
    this.shape_2.setTransform(6.6971, -5.0762)
    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f('#0163AF')
      .s()
      .p('AiKDwQACggAHg6QAIg5AqiXQAZhYBDhXQAzhABLhBQgGAJgTAQQgSAPgZA1QgYA1gmEGQglEHBGgtIiSBjQgmgqAEhRg')
    this.shape_3.setTransform(-30.4235, 12.95)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    )
    // Layer_2
    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#05104D')
      .s()
      .p(
        'Al+IsQgXgCgQgRQg4g4AGhuIAAAAQACgiAIg8IAAgBQAIg7AsieQAsinDBilIgBABIATgRIAFgEIAigYIAGgEIAtgZIACgBIAvgYIADgBIAwgVIACgBQAZgKAcgIQAbgKAcgIIACAAIBTgUIADAAIAtgIIAAAAIADgLIAAgBQACgIAGgLQAGgMAKgJQATgSASgIQARgIAigGQAigGAsABIgCCBIgOAAIgJAAIgIAAIgTABIgFAAIgKABIgLACIgBABIAAACIAAAEIgBAPQgBAOgHALQgFAHgGAHIgKAHQgMAHgPABIhOANIgBAAIgBABIhNASQgZAHgXAIIgEACQgXAGgVAIIgxAVIgpAWIgqAXIgbATIgRAPIgBABQigCJgoCIQgoCTgIA3IAAgBQgHA3gCAfIAAAXIAcgWIAIgFQAdgQAegOQAhgQAjgOIAAAAQAmgOAmgMQAqgPArgMIABAAIBSgWIACAAIBGgPIADgBIA+gKIAIAAIABAAIAfgDIAjgCQAqgCApAAIABAAIBagCIAcgBIAAB4IgYABIgBAAIhcACIgBAAQgmAAgmACIgEAAIgcABIgjADIgEABIg2AIIhEAPIhPAVQgmALgnANIgCABQgjALgiANIgBAAQgeAMgdAOIgzAaIhVBCQgQANgUAAIgGgBg'
      )
    this.shape_4.setTransform(-3.1302, -0.4568)
    this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1))
    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(-50.3, -56.1, 94.6, 111.30000000000001), null)
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
  ;(lib.Symbol17 = function (mode, startPosition, loop, reversed) {
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
      .f('#0163AF')
      .s()
      .p(
        'AniCyQAAgpAqg6IA9guQAagVBIgqQBHgrBSgkQBRgjBHgTQBGgUAlgHQAlgIBBgHQBUgMCjgBQAIBegMBbQhoAChSAHQiKAKhzAkQiqA1hnBHQhqBIhGABIgBAAQhGAAABgpg'
      )
    this.shape.setTransform(-46.6411, -4.6374)
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))
    // Layer_3
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#009DFF')
      .s()
      .p(
        'Am6ChQgXgMgMgnQgNgoArgeQAPArAyABQA0gBBphIQBlhGCog2QBxgkCIgKQBQgIBHgCQAzAqgTAzIhhADQjFAKiQAvQiSAvhnBEQhoBDg0ADIgSABQgmAAgTgJg'
      )
    this.shape_1.setTransform(-46.6312, 4.9226)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics.f('#0163AF').s().p('AAJgGIgQANQgEgHAUgGg')
    this.shape_2.setTransform(-88.3223, 2.3)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }] })
        .wait(1)
    )
    // Layer_2
    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f('#05104D')
      .s()
      .p(
        'AlpCrQhOgEgfgZQgfgagFg0QgFg2AQgoQAQgpAUgYQAUgZAQgLQAQgLAiAAQAhgBA7gNQA7gNATgBIgeASQhCAngYASIAAABIgqAgIgPALIgCABQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQgEAIgFAHIgEANQgQAmAGAiIAAAAQAFAWAEAIQALAFAWADQAfgGBgg6IAAgBQByhHCTgvQCQgvDGgKQAhgCAgAAQBmgBgiBaQhYgCh/ANQh+AOhpAkIAAAAQiHAqhoBCIgBAAQhdBEhKAAIgIAAg'
      )
    this.shape_3.setTransform(-48.9902, 10.6852)
    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#FFFFFF')
      .s()
      .p('AlEBfQAdgPAPAIIgOAHgAAUgqIAVAMIgDABIgSgNgACrgyIgZAEIgBAAIgIABQgBgSAjANgAE9g6IgLAAQAfhIgUBIg')
    this.shape_4.setTransform(-39.8919, -15.9519)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_4 }, { t: this.shape_3 }] })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(-99.8, -26.5, 101.7, 54.3), null)
  ;(lib.Symbol9 = function (mode, startPosition, loop, reversed) {
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
      .f('#B1CEC2')
      .s()
      .p(
        'A6zKHIgKgDIgFgEIgCgFIgCgFIACgFIACgFIAFgEIAKgEMA0agADIAKgCIAAgBIAJADIAFAFIADAEIAAAGIAAAEIgCAFIgDAFIgHAFIgFADIgHABMg0dAAAgA6lInIgLgEIgGgEIgBgFIgBgFIABgFIABgEIAGgGIALgBIAAgBMA1YAAAIAJACIAEAGIAEAEIAAAFIAAAFIgEAFIgEAEIgJAEMg1YAAAgA6XBMIgKgDIgFgGIgCgEIgCgFIACgFIACgEIAFgGIAKgDMAzjgADIAJgCIAAgBIAJADIAFAFIADAFIAAAEIAAAGIgBAEIgEAFIgHAFIgFADIgGACMgzmAAAgA6ogUIgKgDIgFgFIgCgFIgCgFIACgEIACgGIAFgEIAKgCIAAgCMA1dAAAIAJAEIAFAEIAEAGIAAAEIAAAFIgEAFIgFAFIgJADMg1dAAAgA5IoDIgKgCIgEgGIgBgEIgCgFIACgFIABgFIAEgEIAKgEMAxFgADIAKgBIAAgCIAHADIAGAFIADAEIAAAGIAAAEIgCAFIgDAFIgHAFIgEADIgHABMgxIAAAgA4opjIgKgEIgFgEIgBgFIgCgFIACgFIABgFIAFgEIAKgCIAAgBMAxYAAAIAJADIAEAEIADAFIAAAFIAAAFIgDAFIgEAEIgJAEMgxYAAAg'
      )
    this.shape.setTransform(0.175, 13.05)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#EBE7E6')
      .s()
      .p(
        'A6cJ4IgKgDIgFgFIgCgEIgCgGIACgEIACgFIAFgFIAKgEMA0jgACIAKgCIAAgCIAJAEIAFAEIADAFIAAAFIAAAFIgCAEIgDAGIgGAFIgGADIgHABMg0mAAAgA5iIXIgKgDIgFgFIgCgEIgCgGIACgEIACgFIAFgFIAKgBIAAgCMA0BAAAIAJADIAFAFIADAFIAAAEIAAAGIgDAEIgFAFIgJADMg0BAAAgA5iG/IgKgEIgFgEIgCgFIgCgFIACgFIACgFIAFgEIAKgCIAAgBMA0BAAAIAJADIAFAEIADAFIAAAFIAAAFIgDAFIgFAEIgJAEMg0BAAAgA5yApIgKgDIgFgFIgBgFIgCgFIACgEIABgFIAFgFIAKgEMAzPgADIAJgBIAAgBIAJACIAFAGIADAEIAAAFIAAAFIgCAFIgDAEIgGAGIgGACIgGACMgzSAAAgA46g2IgJgEIgGgEIgBgGIgCgEIACgFIABgFIAGgFIAJgBIAAgCMAyuAAAIAIADIAFAFIADAFIAAAFIAAAEIgDAGIgFAEIgIAEMgyuAAAgA46iOIgJgDIgGgFIgBgFIgCgFIACgFIABgEIAGgGIAJgBIAAgCMAyuAAAIAIADIAFAGIADAEIAAAFIAAAFIgDAFIgFAFIgIADMgyuAAAgA3pmkIgJgDIgFgFIgBgEIgCgGIACgEIABgFIAFgFIAJgEMAu9gACIAJgCIAAgCIAIAEIAFAEIADAFIAAAFIAAAFIgCAEIgDAFIgGAGIgFADIgGABMgvAAAAgA22oFIgJgDIgEgFIgCgEIgBgGIABgEIACgFIAEgFIAJgBIAAgCMAugAAAIAHADIAFAFIADAFIAAAEIAAAGIgDAEIgFAFIgHADMgugAAAgA25pOIgKgCIgEgGIgBgEIgCgFIACgFIABgFIAEgEIAKgEMAtdgADIAJgBIAAgCIAHADIAFAFIADAEIAAAGIAAAEIgCAFIgDAFIgGAFIgEADIgGABMgtgAAAg'
      )
    this.shape_1.setTransform(-2.425, -14.55)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-173.6, -77.7, 347.29999999999995, 155.5)
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
      .f('#05104D')
      .s()
      .p(
        'AS0QvMgl4AAAQgVAAgOgPQgPgPAAgUQAAgVAPgPQAOgOAVAAIf0AAIgBgBQgGgHABgIIACg8QAAgIAGgGQAGgFAIAAIADAAIgEBkQAHgBAFgEIE1AAIAGAAQAGhTADhRQAvyLnnpmIjjAAIgHgLIgHgLQgFgHgIgCQgIgCgHAFQgHAEgBAIIgBAFQAAAFADAFIABABIgWAAI5zAAQgVAAgOgPQgPgOAAgVQAAgUAPgPQAOgPAVAAIZzAAIFAAAQALAAAKAFQAKAFAHAIQI9K0hsVpQgCATgOANQgOAOgUAAIAAAAg'
      )
    this.shape.setTransform(-11.3574, -1.625)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#77A08F')
      .s()
      .p(
        'ACwN5QAHABAFAFQAFAGAAAJIgCA8QAAAIgGAFIgBABQgFAEgHABIAEhkgACwNHQgIAAgGgGQgFgGAAgIIACg9QAAgIAGgGQAGgFAJAAIACAAQAHABAFAFQAFAGAAAJIgCA8QAAAIgGAGQgGAFgHAAIgBABIgBgBgAC2KxQgIAAgGgHQgFgGAAgIIADg9IAAgDQABgGAFgEQAHgGAIAAQAIABAGAGQAFAGAAAIIgDA9QAAAIgGAGQgGAFgHAAIgBAAIgBAAgAC9IZQgIAAgGgGQgGgFAAgJIABg8QgBgIAGgGQAGgGAIAAQAJAAAGAGQAGAGgBAIIAAA9QAAAIgGAGQgGAFgIAAIAAAAgACuF9QgFgGAAgIIgCg8QAAgJAFgGQAGgGAIAAQAJAAAGAFQAGAGAAAIIABA9QABAJgGAFQgGAGgIAAIAAAAQgJAAgGgFgACqDlQgGgFgBgIIgEg7QgBgIAGgHQAFgGAIgBIACAAQAHAAAGAFQAGAFABAIIAFA8QAAAIgGAHQgFAGgHAAIgBAAIgCABQgHAAgGgGgACdBQQgHgFgBgIIgJg8QgBgHAFgHQAFgGAIgCIACAAQAHAAAFAEQAHAFACAHIAJA9QABAIgFAHQgFAGgHABIgCAAIgCAAQgHAAgFgEgACGg+QgHgEgCgJIgNg8QgCgIAFgHQAEgHAIgCQAIgCAHAFQAHAEACAIIANA9QACAJgFAGQgEAHgIACIgFAAQgGAAgEgDgABmjSQgHgFgCgIIgNg6QgCgIAFgHQAEgGAGgDIACAAIACAAQAHgBAGAEQAHAEACAIIANA7QACAIgFAHQgEAHgIABIgFABQgFAAgFgDgABFliQgHgEgDgIIgQg5QgDgIAEgIQAEgHAIgCIACgBQAHgBAGADQAIAEACAIIARA6QACAIgEAHQgEAHgHACIgBABIgGAAQgFAAgEgCgAAanxQgIgDgCgIIgKgbIAAAAIgCgGIgHgWQgDgIAEgHQADgHAHgDQAIgDAIADQAHAEADAIIAKAcIAAgBIAJAcQADAIgEAHQgDAHgGADIgCAAIgGACQgFAAgEgDgAgZp7QgIgDgDgIIgYg2QgDgHADgIQADgIAHgDQAIgEAHADQAIADAEAIIAXA3QADAHgDAIQgCAIgIADQgEACgDAAQgEAAgEgCgAhYsCQgHgCgEgHIgdg0QgEgHACgIQACgIAHgEIACgBQAGgDAHACQAIACAEAHIAeA0QAEAIgDAHQgCAIgHAEIAAAAQgFADgFAAIgGgBgAihuCQgIgBgEgIIgggyIAAAAQgEgFABgGIAAgEQACgIAHgFQAHgEAIABQAIACAEAHIAHALIAHALIASAdQAFAIgCAIQgCAHgGAEIgBABQgFADgFAAIgFgBg'
      )
    this.shape_1.setTransform(54.5, -2.9495)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#5D5D5D')
      .s()
      .p(
        'ACaN4QgZAAgPgUQgQgVACgcQgBgeAUgUQARgWAYACQAXgCAPAVQAPAVgBAeQgDAbgPAVQgTAWgUAAIgBgBgAB/HxQgTgSADgdQAAgeAPgPQARgVAYABQAVgBASATQASAQAAAeQgBAcgQATQgTAVgVAAIgBAAQgZAAgOgUgABzCdQgRgUgDgVQgEgaAQgQQAMgPAYgBQAVgBAUAPQASAPAFAbQABAUgOAVQgPAPgWAEQgZgDgRgOgABDh9QgTgMgFgWQgEgUAMgPQANgNAXgBQAWgBATANQATAPAGATQAEAXgNAMQgMARgXgBIgBABQgWAAgTgPgAAFl1QgVgNgCgQQgHgTANgNQAKgMAXABQAWgBATAMQAQALAJASQAFATgMALQgKAOgXABIgCAAQgVAAgTgNgAhNphQgWgKgGgRQgJgPALgOQAJgKAXgBQARABAXAKQAUAMAJAQQAEAQgGALQgNANgSAAIgDAAQgVAAgSgMgAi5s0QgWgLgJgSQgMgOAJgNQAGgLAVgBQASABAYALQAVAOAMANQAHASgFALQgIALgUAAIgFAAQgSAAgTgLg'
      )
    this.shape_2.setTransform(73.9199, -4.3994)
    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f('#EBE7E6')
      .s()
      .p(
        'ANkPLIAAgBQAGgFABgJIACg7QAAgJgGgGQgFgFgGgBIACgyQAHAAAFgFQAGgGABgIIACg8QAAgJgGgGQgFgFgGgBIACgyQAHgBAFgFQAGgFABgIIADg9QAAgIgGgGQgFgGgIgBQgJAAgGAFQgFAFgBAGImKADI5zABIAAlOIZzgBIGegIIABAAIgCgfQAIgBAFgFQAGgHgBgIIgEg8QgBgIgHgGQgGgFgHABIgFgzQAHgCAEgGQAFgGgBgIIgJg8QgBgJgHgFQgGgEgHABIgGgnIgDAAIl5AJI5zABIAAj9IZzgBIFBgHQgHACgEAGQgEAIACAIIANA6QABAIAHAEQAHAFAIgCQAIgCAFgHQAEgGgBgIIgNg7QgCgIgHgEQgGgEgHAAIgMgvQAHgCADgHQAEgHgCgIIgQg6QgDgIgHgEQgHgDgGABIgQgwQAHgCADgHQAEgHgDgIIgKgcIAAAAIgKgcQgCgHgIgEQgHgDgIACQgIADgDAIQgEAHADAIIAIAVIjoADI5zABIAAjTIZzAAIClgBIABAAIgLgWQAGgEADgIQACgIgEgHIgdg0QgEgHgIgCQgHgCgHADIgZgqQAGgEACgIQABgIgEgHIgSgdIDjAAQHnJmgvSLQgGBRgJBTgAPlLlQgUAVABAeQgCAbAQAVQAPAVAZAAQAVAAATgVQAPgVADgcQABgegPgUQgPgWgXADIgEAAQgWAAgPATgANbGuQgGAFAAAJIAAA8QgBAIAGAGQAGAGAIAAQAJAAAGgFQAFgGABgIIAAg9QAAgJgGgFQgGgGgIAAIAAAAQgIAAgGAGgAPsF5QgPAPAAAfQgDAcATATQAOAUAagBQAVAAATgUQAQgUABgcQAAgegSgPQgSgTgVABIgCAAQgXAAgQATgANmERQgIAAgGAGQgGAGABAJIABA7QAAAJAGAGQAGAFAIAAQAJAAAFgGQAGgGAAgIIgBg9QgBgIgGgGQgGgFgIAAIAAAAgAP9AeQgYABgMAPQgQARAEAaQADAUARAVQARANAZADQAWgEAPgOQAOgWgBgUQgFgagSgPQgUgPgUAAIgBAAgAMrisQgIACgFAHQgEAGACAIIANA9QABAIAHAFQAHAEAIgBQAIgCAFgHQAEgHgBgIIgNg9QgCgIgHgFQgFgDgGAAIgEABgAPFjrQgXAAgNANQgMAQAEATQAFAWATAMQATAPAXAAQAXAAAMgRQANgLgEgXQgGgTgTgPQgSgMgUAAIgDAAgANhnNQgNAMAHATQACARAWAMQAUAOAWgBQAXAAAKgOQAMgLgFgTQgJgSgQgMQgTgLgWAAIgCAAQgWAAgKAMgAMGq0QgLANAJAQQAGARAWAJQAUANAWgBQASABANgNQAHgMgFgPQgJgQgUgMQgXgKgRgCQgXACgJAKgAJ5rjQgIADgDAIQgDAHAEAIIAYA2QADAIAIADQAHADAIgDQAHgEAEgHQADgIgDgHIgZg3QgDgIgIgDIgHgBQgEAAgEACgAKSuHQgJAMAMAPQAJASAWAKQAVANAVgCQAUABAIgMQAFgKgHgSQgMgNgVgPQgYgLgSAAQgVABgGALg'
      )
    this.shape_3.setTransform(-13.8538, -1.625)
    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#B1CEC2')
      .s()
      .p(
        'AwIPLIAAl4IZygBIGLgDIgBADIgDA9QAAAIAFAGQAGAGAIABIACAAIgCAyIgCAAQgIAAgGAFQgHAGAAAIIgCA8QAAAJAGAGQAFAGAJAAIABAAIgCAyIgCAAQgIAAgHAFQgGAGAAAIIgCA8QAAAIAGAHIABABgAwIg5IZygBIF6gJIACAAIAHAnIgCAAQgIABgFAHQgFAHACAIIAJA7QABAIAGAFQAHAFAIgBIABAAIAGAzIgCAAQgIABgFAGQgFAGAAAJIAFA6QAAAJAGAFQAHAGAIgBIABAAIABAfIgBAAImeAII5yABgAwIonIZygBIDogDIADAHIAAAAIAJAbQACAHAIAEQAHAEAIgDIACgBIAPAwIgBABQgIACgEAHQgEAIACAHIARA6QACAHAHAEQAHAFAIgDIACAAIALAvIgBABIgCAAIlCAHI5yABgAwIvKIZyAAIAWAAIAgAyQAEAHAIACQAIACAHgEIABgBIAaAqIgCABQgHAEgCAIQgCAIAEAHIAdA0QAEAHAIACQAIACAHgEIAAAAIAMAWIgBAAIimABI5yAAg'
      )
    this.shape_4.setTransform(-30.125, -1.625)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-138.4, -108.7, 254.2, 214.2)
  ;(lib.Symbol3 = function (mode, startPosition, loop, reversed) {
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
      .s('#09255B')
      .ss(10, 1, 1)
      .p(
        'AQlAOQAuhTgfheQgfhfhQglQhQglh/AgQiAAghHBuQh5CQkbgJQpjh/pggHQgMAAgLABANFAAQgUAggWAdQiUDDjrAuQh2AXiLgPQoYhwoVgTQgKAAgKgBQhBgChBAAQgMAAgLAB'
      )
    this.shape.setTransform(4.8402, -26.4714)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#1294E4')
      .s()
      .p(
        'ADVE8QiMgKjMgpQjOgpjAgQImBggQIVATIYBwQA2AGAzAAIAAAAIABAAQBKAABEgNIAEAAIAFgBQgsAUhXAAQgfAAglgDgAEEE5QgzAAg2gGQoYhwoVgTIAAgBIgUAAIiCgDIgXABIAAlNIAXAAQJgAGJjCAQEbAIB5iQQBHhuCAgfQB/ghBQAmQBQAkAfBfQAfBeguBTIgSAiQgLgBgKgxQgQhMhnBDQgyAfg6ApQAWgdAUgfQgUAfgWAdQg+AshIA2QhkBKiVBGIgFABIgEAAQhEANhKAAIgBAAIAAAAgAGcErIAAAAgAuSCwIAAAAgAw/CtIAXgBICCADg'
      )
    this.shape_1.setTransform(4.8402, -26.1463)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-109, -63, 227.7, 73.1)
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
  ;(lib.Symbol20 = function (mode, startPosition, loop, reversed) {
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
    // Layer_2
    this.instance = new lib.Symbol21()
    this.instance.setTransform(42.95, 0, 1, 1, 0, 0, 180)
    this.instance_1 = new lib.Symbol21()
    this.instance_1.setTransform(-43.65, 0)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }, { t: this.instance }] })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(-94, -56.1, 187.3, 111.30000000000001), null)
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
    // Layer_6
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#FFFFFF')
      .s()
      .p('AgMANQgFgFgBgIQABgHAFgGQAFgEAHAAQAIAAAFAEQAGAGgBAHQABAIgGAFQgFAFgIABQgHgBgFgFg')
    this.shape.setTransform(-87.95, -26.95)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#FFFFFF')
      .s()
      .p('AgJAKQgEgFABgFQgBgEAEgFQAFgDAEAAQAFAAAFADQADAFAAAEQAAAFgDAFQgFADgFAAQgEAAgFgDg')
    this.shape_1.setTransform(-96, -21.5)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#FFFFFF')
      .s()
      .p('AgYAYQgKgJAAgPQAAgOAKgKQAKgKAOAAQAPAAAKAKQAKAKAAAOQAAAPgKAJQgKALgPAAQgOAAgKgLg')
    this.shape_2.setTransform(-88.4, -17.8)
    this.instance = new lib.Symbol29('synched', 0)
    this.instance.setTransform(-90.3, -43.55, 1, 1, 0, 0, 0, 0.7, 0)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    )
    // Layer_5
    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f('#FFFFFF')
      .s()
      .p('AgMANQgFgFgBgIQABgHAFgGQAFgEAHAAQAIAAAFAEQAGAGgBAHQABAIgGAFQgFAFgIABQgHgBgFgFg')
    this.shape_3.setTransform(-156.9, -27.65)
    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#FFFFFF')
      .s()
      .p('AgJAKQgEgFABgFQgBgEAEgFQAFgDAEAAQAFAAAFADQADAFAAAEQAAAFgDAFQgFADgFAAQgEAAgFgDg')
    this.shape_4.setTransform(-165.35, -22.2)
    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f('#FFFFFF')
      .s()
      .p('AgYAYQgKgJAAgPQAAgOAKgKQAKgKAOAAQAPAAAKAKQAKAKAAAOQAAAPgKAJQgKALgPAAQgOAAgKgLg')
    this.shape_5.setTransform(-157.75, -18.5)
    this.instance_1 = new lib.Symbol29('synched', 0)
    this.instance_1.setTransform(-153.45, -43.35, 1, 1, 0, 0, 180, 0.7, 0)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }] })
        .wait(1)
    )
    // Layer_8
    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f('#873E7F')
      .s()
      .p(
        'AjMCJIgTgQQgIgHgDgKQgDgLAEgKQADgKAJgHQAJgHAKgBQAFAAAJACQAEgCAFABIABgCQAKgLANgDQAGgBAOgBQANAAAGgCQAHgCAKgGIADgCQAQgRAHgMIgCgJIgGgQQgCgJAAgHQAAgKAFgIQAGgJAIgFQAIgEALABIAJgCIAAgDIABgbQADgPAIgJQAJgKAPAAIAAAAIABAAIAAAAQAPAAAJAKQAIAJACAPIACAbIAAACIAJADQALgBAIAEQAIAFAGAJQAFAIAAAKQAAAHgDAJIgEAQIgDAJQAHALAPASIAEACQAKAGAGACQAHACANAAQAOABAGABQANADAKALIABABQAFAAAEACQAIgCAGAAQALABAIAHQAIAHAEAKQADAKgDALQgCAKgIAHIgTAQQgMAIgHgCQgIgCgWgCQgWgCgggLQgfgMgagXQgVgTgYgCQgWACgWAUQgZAXggALQggALgWACQgWACgIACIgDAAQgHAAgJgGg'
      )
    this.shape_6.setTransform(-122.35, -24.055)
    this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1))
    // Layer_7
    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f()
      .s('#05104D')
      .ss(4, 1, 1)
      .p(
        'AMrAAQAABUgiBKQgbA5guA0QhsB0ifBFQjBBSj0AAQjAAAiYgxQiZgyiXhyQiiiLAAi2QAAjcDuidQDticFPAAQFQAADtCcQADACADACQDoCbAADag'
      )
    this.shape_7.setTransform(-122.125, 1.725)
    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f('#873E7F')
      .s()
      .p(
        'AljF0QighFhsh1QAJABgkgoQgUgXgOglIgLgJQgihLAAhSQAAjbDnibQBfBahgAuQhgAuglBCQglBBgIAlQgHAmgCAiQADBzCKAAQCKgBAUCGQATCHE8AUQE7ATCeg0IDqhOQA4gSATgDQiXBziaAxQiXAyjBAAQj0AAjAhSg'
      )
    this.shape_8.setTransform(-129, 9.75)
    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f('#873E7F')
      .s()
      .p(
        'AmpGVQiZgziXhxQATABBEAYQBDAXCRA1QCSA0FZgYQFagYALiFQALiFB1gBQB2gDAJhiQAKg0gQg3QgPg3gbgtQgcguhSgXQhSgYBCiDQDnCbAADbQAABSgiBLIgLAKQgOAkgUAWQgkApAJAAQhsB0igBEQjABTj0AAQjBAAiYgxg'
      )
    this.shape_9.setTransform(-114.05, 9.75)
    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f('#E89FED')
      .s()
      .p(
        'AlMHMQiRg0hDgXQhEgYgTgCQiiiKAAi3QAAjcDuicQDtidFPAAQFQAADtCdIAGAEQhCCDBTAXQBSAYAbAuQAbAtAQA3QAQA1gKA1QgJBjh2ACQh1ACgLCFQgLCElaAYQhuAIhYAAQjBAAhkgkgALtEJQATgWAPglIALgJQgbA5guAzIAAAAQgHAAAjgog'
      )
    this.shape_10.setTransform(-123.825, -2.1211)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }] })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-205.2, -82.8, 166.2, 140), null)
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
    // Layer_4
    this.instance = new lib.Symbol9('synched', 0)
    this.instance.setTransform(5.95, 0.2)
    this.instance.alpha = 0.4414
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(32))
    // Layer_2
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#000000')
      .s()
      .p(
        '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'
      )
    this.shape.setTransform(8.2072, -0.45)
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(32))
    // Layer_1
    this.instance_1 = new lib.Symbol4('synched', 0)
    this.instance_1.setTransform(-100.6, 1.3, 0.9798, 0.9999, 0, 0, 180, 0.3, 0.2)
    this.instance_2 = new lib.Symbol4('synched', 0)
    this.instance_2.setTransform(111.2, 1.3, 0.9798, 0.9999, 0, 0, 0, 0.2, 0.2)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }] })
        .wait(32)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-213.7, -107.5, 438.2, 214)
  ;(lib.paper_nested = function (mode, startPosition, loop, reversed) {
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
    // Layer_2
    this.instance = new lib.Symbol1('synched', 5)
    this.instance.setTransform(633.35, 460.6, 1.0088, 0.6257, 0, 0, 0, 0.1, 0.2)
    this.instance._off = true
    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(34)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ regX: 5.3, regY: -0.5, scaleX: 1.0078, scaleY: 0.6375, x: 638.55, y: 462.15, startPosition: 6 }, 0)
        .wait(1)
        .to({ scaleX: 1.0019, scaleY: 0.7078, x: 638.5, y: 474.05, startPosition: 7 }, 0)
        .wait(1)
        .to({ scaleY: 0.7079, startPosition: 8 }, 0)
        .wait(1)
        .to({ scaleX: 1.0002, scaleY: 0.7281, y: 477.5, startPosition: 9 }, 0)
        .wait(1)
        .to({ regX: 0, regY: 0, scaleX: 1, scaleY: 0.731, x: 633.2, y: 478.55, startPosition: 0 }, 0)
        .to({ scaleY: 0.6186, y: 464.05 }, 5)
        .to({ scaleY: 0.8428, y: 504.55 }, 5, cjs.Ease.bounceOut)
        .to({ regY: 0.1, scaleY: 0.6849, y: 490.1 }, 5)
        .to({ regY: 0, scaleY: 1, y: 530.55 }, 5)
        .to({ scaleY: 0.888, y: 516.05 }, 5)
        .to({ scaleY: 1, y: 556.55 }, 5, cjs.Ease.bounceOut)
        .to({ scaleY: 0.8875, y: 542.05 }, 5)
        .to({ scaleY: 1.1351, y: 604.3 }, 5, cjs.Ease.bounceOut)
        .to({ scaleY: 1, y: 582.55 }, 5)
        .to({ y: 608.55 }, 5, cjs.Ease.bounceOut)
        .to({ startPosition: 6 }, 38)
        .to({ _off: true }, 1)
        .wait(6)
        .to({ _off: false, startPosition: 13 }, 0)
        .to({ startPosition: 21 }, 8)
        .to({ _off: true }, 1)
        .wait(11)
        .to({ _off: false, startPosition: 1 }, 0)
        .to({ startPosition: 23 }, 22)
        .to({ _off: true }, 1)
        .wait(13)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(0, 0, 864.6, 724.8)
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
    // Layer_3
    this.instance = new lib.Symbol3('synched', 0)
    this.instance.setTransform(540.1, 513.55, 1, 1, 0, 0, 180, -0.3, -2.5)
    this.instance_1 = new lib.Symbol3('synched', 0)
    this.instance_1.setTransform(737.4, 513.55, 1, 1, 0, 0, 0, -0.3, -2.5)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }, { t: this.instance }] })
        .to({ state: [{ t: this.instance_1 }, { t: this.instance }] }, 36)
        .to({ state: [] }, 1)
        .to({ state: [{ t: this.instance_1 }, { t: this.instance }] }, 9)
        .to({ state: [{ t: this.instance_1 }, { t: this.instance }] }, 110)
        .to({ state: [] }, 1)
        .wait(13)
    )
    // Layer_4 (mask)
    var mask = new cjs.Shape()
    mask._off = true
    var mask_graphics_0 = new cjs.Graphics().p(
      'EgWsBJ/QglAAgbgeQgbggAAgsMAAAhE+QAAgrAbgfQAbggAlAAMBsrAAAQAmAAAbAgQAbAfAAArMAAABE+QAAAsgbAgQgbAegmAAgEBM4BGsIHsAAIAAgTInpAAQAAAKgDAJgEBL1BGsQgEgJAAgKMhYZAAAQAAAKgCAJMBYfAAAIAAAAgEgNuBGsQgDgJAAgKIneAAIAAATIHhAAIAAAAgEBM7AFEIHpAAIAAgCInpAAIAAACgAsoFEMBYZAAAIAAgCMhYZAAAIAAACgA1PFEIHeAAIAAgCIneAAg'
    )
    var mask_graphics_36 = new cjs.Graphics().p(
      'Eg2VAkJQglAAgbgeQgbghgBgrMAAAhE9QABgrAbgfQAbggAlAAMBsrAAAQAlAAAcAgQAaAfAAArMAAABE9QAAArgaAhQgcAeglAAgEAtOAg2IHsAAIAAgTInoAAQAAAJgEAKgEAsMAg2QgEgKgBgJMhYYAAAQAAAJgCAKMBYfAAAIAAAAgEgtXAg2QgEgKABgJIneAAIAAATIHhAAIAAAAgEAtSggyIHoAAIAAgBInoAAIAAABgEgsRggyMBYYAAAIAAgBMhYYAAAIAAABgEg04ggyIHeAAIAAgBIneAAg'
    )
    var mask_graphics_46 = new cjs.Graphics().p(
      'Eg2VAkJQglAAgbgeQgbghgBgrMAAAhE9QABgrAbgfQAbggAlAAMBsrAAAQAlAAAcAgQAaAfAAArMAAABE9QAAArgaAhQgcAeglAAgEAtOAg2IHsAAIAAgTInoAAQAAAJgEAKgEAsMAg2QgEgKgBgJMhYYAAAQAAAJgCAKMBYfAAAIAAAAgEgtXAg2QgEgKABgJIneAAIAAATIHhAAIAAAAgEAtSggyIHoAAIAAgBInoAAIAAABgEgsRggyMBYYAAAIAAgBMhYYAAAIAAABgEg04ggyIHeAAIAAgBIneAAg'
    )
    var mask_graphics_156 = new cjs.Graphics().p(
      'Eg2VAkJQglAAgbgeQgbghgBgrMAAAhE9QABgrAbgfQAbggAlAAMBsrAAAQAlAAAcAgQAaAfAAArMAAABE9QAAArgaAhQgcAeglAAgEAtOAg2IHsAAIAAgTInoAAQAAAJgEAKgEAsMAg2QgEgKgBgJMhYYAAAQAAAJgCAKMBYfAAAIAAAAgEgtXAg2QgEgKABgJIneAAIAAATIHhAAIAAAAgEAtSggyIHoAAIAAgBInoAAIAAABgEgsRggyMBYYAAAIAAgBMhYYAAAIAAABgEg04ggyIHeAAIAAgBIneAAg'
    )
    this.timeline.addTween(
      cjs.Tween.get(mask)
        .to({ graphics: mask_graphics_0, x: 559.512, y: 473.5333 })
        .wait(36)
        .to({ graphics: mask_graphics_36, x: 762.05, y: 715.75 })
        .wait(1)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(9)
        .to({ graphics: mask_graphics_46, x: 762.05, y: 715.75 })
        .wait(110)
        .to({ graphics: mask_graphics_156, x: 762.05, y: 715.75 })
        .wait(1)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(13)
    )
    // Layer_5
    this.instance_2 = new lib.paper_nested('synched', 34)
    this.instance_2.setTransform(817.85, 736.05, 0.8698, 1.0044, 0, 0, 0, 840.8, 735.8)
    this.instance_2._off = true
    var maskedShapeInstanceList = [this.instance_2]
    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask
    }
    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(34)
        .to({ _off: false }, 0)
        .to({ startPosition: 36 }, 2)
        .to({ _off: true }, 1)
        .wait(9)
        .to({ _off: false, scaleX: 0.8999, scaleY: 1.0274, x: 823.3, y: 738.2, startPosition: 46 }, 0)
        .to({ regX: 840.7, regY: 735.6, scaleX: 1.0082, scaleY: 1.1099, x: 843, y: 745.75, startPosition: 89 }, 43)
        .to({ startPosition: 118 }, 29)
        .to({ regX: 807.4, regY: 521, x: 809.45, y: 507.6, startPosition: 119 }, 1)
        .wait(1)
        .to(
          {
            regX: 638.6,
            regY: 559.2,
            scaleX: 1.0089,
            scaleY: 1.126,
            skewX: -2.4653,
            skewY: -2.8646,
            x: 641.25,
            y: 559.1,
            startPosition: 120,
          },
          0
        )
        .wait(1)
        .to(
          { scaleX: 1.0111, scaleY: 1.1713, skewX: -9.4043, skewY: -10.9276, x: 649.2, y: 584.05, startPosition: 121 },
          0
        )
        .wait(1)
        .to(
          { scaleX: 1.0148, scaleY: 1.2505, skewX: -21.5506, skewY: -25.0413, x: 671.8, y: 624.5, startPosition: 122 },
          0
        )
        .wait(1)
        .to(
          {
            regX: 807.4,
            regY: 521,
            scaleX: 1.0197,
            scaleY: 1.3546,
            skewX: -37.5014,
            skewY: -43.5757,
            x: 809.5,
            y: 507.6,
            startPosition: 123,
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 638.6,
            regY: 559.2,
            scaleX: 1.0238,
            scaleY: 1.4415,
            skewX: -50.8148,
            skewY: -59.0461,
            x: 763.25,
            y: 690.6,
            startPosition: 124,
          },
          0
        )
        .wait(1)
        .to(
          { scaleX: 1.0271, scaleY: 1.5113, skewX: -61.5035, skewY: -71.4667, x: 805.1, y: 699.55, startPosition: 125 },
          0
        )
        .wait(1)
        .to(
          { scaleX: 1.0294, scaleY: 1.5595, skewX: -68.8752, skewY: -80.0327, x: 834.9, y: 700.3, startPosition: 126 },
          0
        )
        .wait(1)
        .to(
          { scaleX: 1.0307, scaleY: 1.5877, skewX: -73.1978, skewY: -85.0557, x: 852.5, y: 698.6, startPosition: 127 },
          0
        )
        .wait(1)
        .to(
          {
            regX: 807.2,
            regY: 521.1,
            scaleX: 1.0313,
            scaleY: 1.5995,
            skewX: -75.0011,
            skewY: -87.1511,
            x: 809.45,
            y: 507.75,
            startPosition: 134,
          },
          0
        )
        .to(
          {
            regX: 807.3,
            scaleX: 1.0081,
            scaleY: 1.0391,
            rotation: -63.9873,
            skewX: 0,
            skewY: 0,
            x: 809.65,
            y: 773.8,
            startPosition: 154,
          },
          9,
          cjs.Ease.quadIn
        )
        .to(
          {
            regX: 807,
            regY: 521,
            scaleX: 0.9409,
            scaleY: 1.7779,
            rotation: 0,
            skewX: -22.4472,
            skewY: 2.9997,
            x: 983.25,
            y: 1112.6,
            startPosition: 162,
          },
          18,
          cjs.Ease.quadInOut
        )
        .to({ startPosition: 163 }, 1)
        .to({ _off: true }, 1)
        .wait(13)
    )
    // Layer_1
    this.instance_3 = new lib.Symbol17()
    this.instance_3.setTransform(645.95, 288.35, 2.2804, 2.2804, 0, 0, 180, -3.1, 1)
    this.instance_4 = new lib.Symbol17()
    this.instance_4.setTransform(642, 288.35, 2.2804, 2.2804, 0, 0, 0, 2.7, 1)
    this.instance_5 = new lib.Symbol20()
    this.instance_5.setTransform(645, 174.75, 2.2804, 2.2804, 0, 0, 0, 3.5, 0.7)
    this.instance_6 = new lib.Symbol25()
    this.instance_6.setTransform(640.55, 380.7, 2.3302, 2.3302, 0, 0, 0, 0.6, 0.7)
    this.instance_7 = new lib.Symbol31('synched', 0)
    this.instance_7.setTransform(539.1, 364.45, 0.5132, 0.5132, 0, 0, 180, -2.4, 2)
    this.instance_8 = new lib.Symbol31('synched', 0)
    this.instance_8.setTransform(740.25, 364.45, 0.5132, 0.5132, 0, 0, 0, 2, 2)
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#873E7F')
      .s()
      .p(
        'EAu0AZfQCEhogVgWQgUgXgIgeQgHgfAHgdQAKgmAlgkQAUgTA1gnQCThtBWh+QA/hcAxiCQAehTAsicQAoiNAShPQAbh7AHhlQAEgwACgOQAGgjANgXQAHgLAJgJQgCAMACAPQAGBBC7CYQgSBagLBQQgKBPgqCXQgmCKgbBPQgoB1gvBaQhbCuiQCGQguAshsBVQghAZhYA0QhaA0h7A8QgtAWgLAAQgSAABShBgEgyPAXxQgbgEgdgRQgRgLghgZQhshVgugsQiQiGhbiuQgvhagoh1QgbhPgmiKQgqiXgLhPQgKhQgShaQC8iYAFhAQABgQgBgMQAJAJAGAMQAOAWAGAjQACAOADAwQAIBlAcB7QARBPAnCNQAsCcAfBTQAxCCA/BcQBWB+CUBtQA1AnATATQAkAkALAmQAHAdgHAfQgIAegVAXQgUAWgeAKQgTAHgUAAQgKAAgJgCgAoWPmQgfgMgTgYQgUgXgGggQgGggAKgdQAKgjAigiQAKgKA2guQBAg3Avg/QAHgXASgXIAZgeIAYgkQARgXAigdIAcgjIA1hEQAvg9AJgsQADgOADgeQACgcAEgOQAHgbASgVQASgWAZgLQAagMAbABQAcABAYANQAZAOATAaQARAZAGAeQALAqgJA2QAmgDAbANQAVAKAZAYIAoAqQAQAPAhAbQAbAYALAYQAOAjgOAqQgLAkgdAiQAQALBDAoQA0AeAcAYQAoAiAVArQAXAvgIAtQgHAmgcAcQgbAdglAIQgsAJgxgUQgqgSgogyQglg0gegcQgdgdg2gbQg3gcgkgEQgkgEgzAGIhGAHQgcACgUAKQgPAJgNAEQgOAFgtArQgtAsg0BDQg0BCgXAOQggATgdAEIgPABQgXAAgWgKgARmsvQgbgFgqgNIhEgVQhJgThGALIg6AKQgiAFgYgEQgPgEgVgJIgjgPQgggMhBgGImngrQgzgFgagIQgogMgXgZQgZgcgEgsQgDgoAPgoQkYAIkNBCQhGASgfAUIgoAdQgXATgRAHQgfAOglgFQgjgEgegUQg1gjgchKQgwAZgcAJQgtANgigLQgPgFgVgMQgZgPgKgEQgSgHgXgDIgqgDIjPgHQh3gIhWgUQhmgXghg3QgJgQgHgbQgHgfgEgPIgRg5QgJgiAFgYQAHgkAigZQAggYApgFQAggFAuAFIBOAKQBQAIBogQQAmgFCSgeQCmghDRgZQCDgQD3gYIEAgaQB2gLA7gEQBhgGBPACQBAACBRAKICRASIFZAuQDEAcCSAgQBZAUDPA5IC0AyQBDASAjAOQA2AXAiAhQAnAmAKA3QAKA6ghAnQgfAlg+AHQgpAEhGgJQiPgVhaADQiCAFhbAzQAsABAmAWQAnAWAUAkQAVAmgHAtQgHAtggAbQgZAWgnAGQgOACgQAAQgUAAgVgEg'
      )
    this.shape.setTransform(640.7947, 373.5016, 0.5137, 0.5137)
    this.instance_9 = new lib.Symbol28()
    this.instance_9.setTransform(534.6, 504.95, 1.4358, 1.4358, 0, 0, 180, -0.4, 0.1)
    this.instance_10 = new lib.Symbol28()
    this.instance_10.setTransform(745.5, 504.95, 1.4358, 1.4358, 0, 0, 0, 0.2, 0.1)
    this.instance_11 = new lib.Symbol14()
    this.instance_11.setTransform(639.6, 428.75, 3.1231, 2.9588, 0, 0, 0, -122.4, -12.8)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.instance_11 },
            { t: this.instance_10 },
            { t: this.instance_9 },
            { t: this.shape },
            { t: this.instance_8 },
            { t: this.instance_7 },
            { t: this.instance_6 },
            { t: this.instance_5 },
            { t: this.instance_4 },
            { t: this.instance_3 },
          ],
        })
        .to(
          {
            state: [
              { t: this.instance_11 },
              { t: this.instance_10 },
              { t: this.instance_9 },
              { t: this.shape },
              { t: this.instance_8 },
              { t: this.instance_7 },
              { t: this.instance_6 },
              { t: this.instance_5 },
              { t: this.instance_4 },
              { t: this.instance_3 },
            ],
          },
          36
        )
        .to({ state: [] }, 1)
        .to(
          {
            state: [
              { t: this.instance_11 },
              { t: this.instance_10 },
              { t: this.instance_9 },
              { t: this.shape },
              { t: this.instance_8 },
              { t: this.instance_7 },
              { t: this.instance_6 },
              { t: this.instance_5 },
              { t: this.instance_4 },
              { t: this.instance_3 },
            ],
          },
          9
        )
        .to(
          {
            state: [
              { t: this.instance_11 },
              { t: this.instance_10 },
              { t: this.instance_9 },
              { t: this.shape },
              { t: this.instance_8 },
              { t: this.instance_7 },
              { t: this.instance_6 },
              { t: this.instance_5 },
              { t: this.instance_4 },
              { t: this.instance_3 },
            ],
          },
          110
        )
        .to({ state: [] }, 1)
        .wait(13)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(381, 45.2, 738, 901.9)
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
    this.instance = new lib.Symbol5('synched', 0)
    this.instance.setTransform(40.65, 311.6, 1, 1, 0, 0, 0, 683.4, 635.3)
    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .to({ startPosition: 19 }, 19)
        .to({ regX: 683.2, regY: 635.2, scaleX: 1.121, scaleY: 0.8952, x: 43, y: 309.75, startPosition: 25 }, 6)
        .to(
          { regX: 683.3, regY: 635.1, scaleX: 0.9356, scaleY: 1.0401, x: 43.1, y: 256.5, startPosition: 33 },
          8,
          cjs.Ease.quadInOut
        )
        .to({ regX: 682.8, regY: 635, scaleX: 0.9694, scaleY: 1, x: 43.15, y: 289.45, startPosition: 34 }, 1)
        .to({ scaleX: 1.1044, scaleY: 0.932, x: 41.6, y: 361.8, startPosition: 46 }, 3, cjs.Ease.none)
        .to({ scaleX: 1, scaleY: 1, x: 38.35, y: 310.85, startPosition: 59 }, 14, cjs.Ease.get(1))
        .wait(98)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-295, -357, 769.6, 979.9)
  ;(lib.Symbol8 = function (mode, startPosition, loop, reversed) {
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
    // Layer_6
    this.instance = new lib.Symbol6('synched', 28)
    this.instance.setTransform(363.7, 359.15, 0.8106, 0.8106)
    this.instance._off = true
    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(28)
        .to({ _off: false }, 0)
        .to({ startPosition: 31 }, 3)
        .to({ scaleX: 0.7994, scaleY: 0.8262, y: 364.95, startPosition: 37 }, 6)
        .to({ _off: true }, 1)
        .wait(12)
        .to({ _off: false, regX: 0.1, scaleX: 0.7827, scaleY: 0.8496, x: 363.8, y: 373.65, startPosition: 50 }, 0)
        .to({ startPosition: 63 }, 13)
        .to({ _off: true }, 1)
        .wait(5)
        .to({ _off: false, startPosition: 69 }, 0)
        .to({ startPosition: 71 }, 2)
        .to({ _off: true }, 1)
        .wait(7)
        .to({ _off: false, startPosition: 79 }, 0)
        .to({ startPosition: 82 }, 3)
        .to({ _off: true }, 1)
        .wait(9)
        .to({ _off: false, startPosition: 92 }, 0)
        .to({ startPosition: 106 }, 14)
        .to({ _off: true }, 1)
        .wait(4)
        .to({ _off: false, startPosition: 111 }, 0)
        .to({ startPosition: 129 }, 18)
        .to({ _off: true }, 1)
        .wait(45)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(124.6, 69.8, 610.6, 833.1)
  ;(lib.TOS = function (mode, startPosition, loop, reversed) {
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
    // Layer_2
    this.instance = new lib.Symbol8('synched', 28)
    this.instance.setTransform(208.7, 191.95, 0.4004, 0.4629, 0, 0, 0, 371.2, 472.4)
    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(10)
        .to({ regX: 371.3, regY: 472.6, scaleX: 0.5109, scaleY: 0.3515, y: 219.95, startPosition: 50 }, 0)
        .to(
          { regX: 371.2, regY: 472.4, scaleX: 0.4164, scaleY: 0.4164, y: 187.1, startPosition: 69 },
          14,
          cjs.Ease.get(1)
        )
        .wait(3)
        .to({ startPosition: 79 }, 0)
        .wait(4)
        .to({ startPosition: 92 }, 0)
        .wait(15)
        .to({ startPosition: 111 }, 0)
        .wait(19)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(99.7, 5.6, 257.5, 360.79999999999995)
  // stage content:
  ;(lib.RECOVER_TOS110 = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.TOS('synched', 0)
    this.instance.setTransform(190.35, 245.4, 1, 1, 0, 0, 0, 195.2, 241)
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(65))
    this._renderFirstFrame()
  }).prototype = p = new lib.AnMovieClip()
  p.nominalBounds = new cjs.Rectangle(294.9, 160, 57.5, 210.8)
  // library properties:
  lib.properties = {
    id: '5B891109717B474C91651FF03F835961',
    width: 400,
    height: 300,
    fps: 30,
    color: '#FFFFFF',
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
  an.compositions['5B891109717B474C91651FF03F835961'] = {
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
