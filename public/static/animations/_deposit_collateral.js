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
      .ss(20, 1, 1)
      .p(
        'EAwrgGGQADAzgnBvQgmBuivB1QivB1jCBMQiTA5jdA1QniBzpAA6Qg5AGg6AFQnyAtq1AMQjnAEiXgCQhkgBhcgEQhjgFhZgIQj/gWkmg5QjngukzhPQimgrhkgfQiQgthwgyQiFg7hJhAQgxgphMg+QhNg/gohKQgnhLgGg2QgGg2gEg4QgCgagDhH'
      )
    this.shape.setTransform(0.0358, 0.3083)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#1294E4')
      .s()
      .p(
        'AppIhQhkgBhcgEQhjgFhZgIQj/gWkmg5QjngukzhPQimgrhkgfQiQgthwgyQiFg7hJhAQgxgphMg+QhNg/gohKQgnhLgGg2QgGg2gEg4QgCgagDhHIGPAAIACAlIAAAQIACAHQASAbE4BEIHWBwQCKAWBOAzQATAMAPAOQBPBHCWA4QCVA2BXgCQA9gBCKAQQA4AGBFAKQBWAMBqANQC4AVD2AXQGAAiD3gxQCdggE3g6IGOhKQGAhHDvguIDxgxQCpgjA+gMQCNgMAyhHQgEgWAFgLQAMgWECAFQgQAJEOgHIAMgKIAtArQADAzgnBvQgmBuivB1QivB1jCBMQiTA5jdA1QniBzpAA6IhzALQnyAtq1AMQiaADh2AAIhugBg'
      )
    this.shape_1.setTransform(0.0358, 0.3083)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#05104D')
      .s()
      .p(
        'AigE/Qj1gXi5gVQhqgNhWgMQhFgKg4gGQiJgRg9ACQhYACiVg3QiWg4hOhHQgQgOgSgMQhOgyiLgWInVhwQk4hEgTgbIgBgHIgBgQIAPgCQFFgeClgHQEQgMDYAXQDmAYDAA/ID+BeQCYA5BrARQBsASCOgHQAvgCDMgRQC7gPECgHQCUgEEqgFQG0gKEtgnICJgfQHphmFbAhQA9AGAoALQA2APAhAdQASAPALASQgyBHiNAMQg+ALiqAkIjwAwQjwAul/BHImOBKQk3A7ieAgQiRAdjCAAQiFAAifgOg'
      )
    this.shape_2.setTransform(-9.0375, -21.5752)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-321.4, -64.3, 642.9, 129.2)
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
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f()
      .s('#05104D')
      .ss(21, 1, 1)
      .p(
        'AQzT8QNziOO5n2QO5n1B2kvQB1kvgPivQgGhNgShJQkFqZrrB8Qh+AWh6AjQlUBIm1ABQvChbw9AAQwVAAvBBbQm2AAlThIQh6gkh+gWQrsh8kFKZQgRBJgHBOQgOCuB1EwQB1EuO5H2QO6H1NzCOQIGBUIZABQATAAATAAQIagBIGhUg'
      )
    this.shape.setTransform(-0.9991, 12.6773)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'AAUqVQKyAMLkBLQN8BbKOjgIAeAAQD1Hz1IJHQuJFHviAGQgUAAgSAAQvjgGuJlHQ1IpHD1nzIAeAAQKODfN8haQLkhLKzgMQAKAAAJAAQAJAAAKAA'
      )
    this.shape_1.setTransform(-1.0026, 3.4)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#05104D')
      .s()
      .p(
        'AgSLEQvjgGuJlHQ1IpGD1n0IAeAAQKODgN8hbQLkhLKzgLIATgBIATAAIAAABQKyALLkBLQN8BbKOjgIAeAAQD1Hz1IJHQuJFHviAGIgUAAIgSAAg'
      )
    this.shape_2.setTransform(-1.0026, 3.4)
    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f('#1294E4')
      .s()
      .p(
        'AgTVRQoZgBoGhUQtziOu6n1Qu5n2h1kuQh1kwAOiuQAHhOARhJQEFqZLsB8QB+AWB6AkQFTBIG2AAQPBhbQVAAQQ9AAPCBbQG1gBFUhIQB6gjB+gWQLrh8EFKZQASBJAGBNQAPCvh1EvQh2Evu5H1Qu5H2tzCOQoGBUoaABIgTAAIgTAAgA9+EbQOJFGPiAGIAmAAQPjgGOJlGQVIpIj1nzIgeAAQqODgt8haQrkhMqzgLIAAgBIgSAAIgUABQqyALrkBMQt8BaqOjgIgeAAQj2H0VJJHg'
      )
    this.shape_3.setTransform(-0.9991, 12.6773)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-420.1, -133.9, 838.2, 293.20000000000005)
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
    this.shape = new cjs.Shape()
    this.shape.graphics.f().s('#09255B').ss(22, 1, 1).p('AA5DdQgTgjgRgiQhqjaAnia')
    this.shape.setTransform(-405.4396, -7.7375)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f()
      .s('#05104D')
      .ss(22, 1, 1)
      .p(
        'EA/ZAAaQBaiig+i3Qg8i5ibhHQibhJj5A/Qj5A+iJDWQjsEZongRQgIgCgJgCQgIgBgJgCQuOi63DhDEA4kAAAQiGDYi0CNQmME3pphAQidghiegdQupisukgaQgWgCgYAAQgkABgjAAQg8ABg7ACQuRAYuWCmIgeAFQg1AIgxAHQm9BDicgRQjbgYi4hVQiVhFh/htQiWiDh1i8Ah+kvQxAAdxJDlQonARjskZQiJjWj5g+Qj4g/icBJQibBHg8C5IgHAX'
      )
    this.shape_1.setTransform(0.9024, -0.0822)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#1294E4')
      .s()
      .p(
        'EgwPAIJQAEgMgCgMQC4BUDbAYIicAJQghACgdAAQjaAAAfhfgEgwNAHxQgMhRkIhiQiWiDh1i8QB1C8CWCDQg4gVhFgWQmWiCiMhGQhPigAAh+QAAgtAKgpIAHgXQA8i4CbhHQCchJD4A/QD5A9CJDWQDsEZIngRQRJjkRAgeIAAgCQXDBDOOC6IARAEIARADQInARDskZQCJjWD5g9QD5g/CbBJQCbBHA8C4QA+C3haCjIgWAoQg9h1AaAzQATAmrJE+QC0iNCGjYQiGDYi0CNQjmBnk0CEQCfhIsHAUQhZAChVAAQupirukgbQgWgBgYAAIhIABIh2ACQuQAYuXCmIgeAFIhmAQQlmAhjzAQQjbgYi4hUgA+7IcIgeAFIgkAHIgkAEIBmgQgAOaGJUgiCAAigK1ABsQOXimOQgYIB2gCIBIgBQAYAAAWABQOkAbOpCrQqNgBmciTgEgwNAHxIAAAAgEg/JABHIgZgtQhTiZAwiqQgKApAAAtQAAB+BPCgIgJgEgAASkxIgSgBIBIgBQAYAAAWABIAAACIAZABg'
      )
    this.shape_2.setTransform(0.002, -0.0032)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-422.1, -72.5, 845.1, 144.9)
  ;(lib.Tween3 = function (mode, startPosition, loop, reversed) {
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
      .ss(20, 1, 1)
      .p(
        'EgNpgmXQBZkuLFgiQBcCkA9CYQBrEJBqCsQBrCsApCiQAqChDfCkQDgCkCfB5QCfB5DtCZQBrBPBGBRQFZH5EmGmQCPMah+KOQgfCkgsB9QgkBkgwBUQloCbksCBQqIEWhBAHQlmAnjjgEQjjgEiohHQiohGiHgUQiIgUlijYQljjZiJp4QiJp5gPgdQgsgtgjgpQhxh+hLh5QgMgShBhvQgvhPgjgwQgJgLg+hOQgqg2gXgmQg6hkgHh4QgHh4g6hpQg7hqAMhbQALhbgNgtMAhhAAAQqCnqhvoJQAHmzBmlVg'
      )
    this.shape.setTransform(-0.0012, -0.0104)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#E89FED')
      .s()
      .p(
        'EADHAroQjjgEiohHQiohGiHgUQiIgUlijYQljjZiJp4QiJp5gPgdQgsgtgjgpQhxh+hLh5QgMgShBhvQgvhPgjgwIhHhZQgqg2gXgmQg6hkgHh4QgHh4g6hpQg7hqAMhbQALhbgNgtMAhhAAAQqCnqhvoJQAHmzBmlVQBZkuLFgiQBcCkA9CYQBrEJBqCsQBrCsApCiQAqChDfCkQDgCkCfB5QCfB5DtCZQBrBPBGBRQFZH5EmGmQCPMah+KOQgfCkgsB9QgkBkgwBUIqUEcQqIEWhBAHQlJAjjaAAIgmAAg'
      )
    this.shape_1.setTransform(-0.0012, -0.0104)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-247.5, -289.2, 495, 578.5)
  ;(lib.Tween1 = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f('#0163AF').s().p('AioJ1IQgx9ICxAiIwqRyQgGg1ihAegAwoHyIQix9ICvAiIwpRyQgGg1iiAeg')
    this.shape.setTransform(-49.55, -11.725)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#3D98DE')
      .s()
      .p(
        'AhEIxQLbsdDgjpIBCAAQADAOAJAMQmVG6hSBWInZH5QgUALgPAAQgdAAgJgogAvEGuQLdsdDfjpIBCAAQACAOAJAMQmUG6hRBXInZH4QgVALgQAAQgdAAgJgog'
      )
    this.shape_1.setTransform(-67.525, -19.4882)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics.f('#0163AF').s().p('AioJ1IQgx9ICxAiIwqRyQgGg1ihAegAwoHyIQix9ICvAiIwpRyQgGg1iiAeg')
    this.shape_2.setTransform(40, 1.325)
    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f('#3D98DE')
      .s()
      .p(
        'AhEIxQLbsdDgjpIBCAAQADAOAJAMQmVG6hSBWInZH5QgUALgPAAQgdAAgJgogAvEGuQLdsdDfjpIBCAAQACAOAJAMQmUG6hRBXInZH4QgVALgQAAQgdAAgJgog'
      )
    this.shape_3.setTransform(22.025, -6.4382)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-164, -79.6, 310.5, 146.2)
  ;(lib.Symbol34 = function (mode, startPosition, loop, reversed) {
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
      .p(
        'EAhngAVQgOgThwg2IgDgBIgBgBQiKhBh1AJQjdAQh7ARQh7ARkVBsQkXBupNAlQpNAmnAiHQm0iDiGg8QgEgCgDgBQi6gkjEAWQiRAQhkA9QgiAWgdAa'
      )
    this.shape.setTransform(-0.9375, 38.4654)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f()
      .s('#05104D')
      .ss(24, 1, 1)
      .p(
        'EgrUAGrQgXkFBKiEQBKiDCDh6QCDh6FGg3QFFg2DZAtQAQACARACQABABACAAQAMAEANAEQAKACALAEQKSC9KPAbQApACAqABQAaABAYAAQAQAAAQgBQEcgNEcgrQFMgyFOhbQAFgBAGgCQAlgKAmgLAUIlvQI4hwFFCTQFECTBsCsQCUFMASBj'
      )
    this.shape_1.setTransform(0.5432, -10.5687)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#1294E4')
      .s()
      .p(
        'AoRHvQlUhcjyhKQjyhLh1gLIgHgDQi6gkjEAVQiRAQhkA+QgiAVgdAbQAdgbAigVQgvBwi2glQjYgsjhgTQgYkEBKiEQBKiECEh6QCDh6FFg2QFFg3DaAtIAgAFIADABIAZAHIAVAGQKSC+KPAbQAqACAqAAIAxACQARAAAQgCQEbgNEcgqQFMgyFPhbIAKgDIgKADQlPBblMAyQDliBFOgcQBbgIBiAAIhLAVQI5hwFECTQFECSBtCsQCUFMARBkIAFAXQgwADgEgDQgdgVgjAHQgiAIgPAcIgIARIhIAcQkRg9iBAVQgOgThwg2IgDgBIgBgBQjXhxhLATQhMATh9ANQh+AOlMBHQlMBHnJBqQj0A4jSAAQi3AAiegrgEggrAECIABgBIgBAAIAAABgAfYEcQBwA2AOATQgCAMgKAAQgbAAhXhVgAgpkXQgqAAgqgCQqPgbqSi+QHcB8YiAoQkcAqkbANQgQACgRAAIgxgCg'
      )
    this.shape_2.setTransform(0.7932, 0.5865)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-289.3, -65.2, 579.7, 130.3)
  ;(lib.Symbol31copy = function (mode, startPosition, loop, reversed) {
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
  ;(lib.Symbol29copy2 = function (mode, startPosition, loop, reversed) {
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
        'AkgDqQgCgLgCgRQgBgRgSg8QgSg6AHg3QAHg0gGgiQgFgiAGgcQAHgdAJgXQArgOAWgNQAsgaAegJQg1AjgQAjQgQAiAZAQIAZAOQAQAJgTASQgTASgLA9QgLA8BNADIgMAVQgpApgRBEIgRAcQgCAEgLAMQgMANgGADIgDgNgAizBOQgmBFgQAfIgEAJQARhEApgpgAEjCpQgYgsgvgjQgEgMAPABIgCgBQgPgHgYgIIgdgKQArgEAvARQA8AWgah1QATARALAyQAJAlABAiIAAAXIgFASIAFgpIgFApQgGAUgIAIIgPgJgAEOCbQgBgEggglQgOgPgDgJQAvAjAYAsQgVgMAAgCgAFACWIAAAAgADcBaIAAAAgAizBOIAAAAgADuhEQgdgYgcgUQgbgUAWgFQAWgFgfgtIgXgPQABgDAYABIAFADIASAOQAVAaAdBCIALAPQgCACAEAGQgGgCgBABIACACQAJAPgEAAQgDAAgOgMgADAi7IAAAAgACujJIgFgDIABAAQAKABAMAQIgSgOg'
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
  ;(lib.Symbol28copy = function (mode, startPosition, loop, reversed) {
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
      .ss(9, 1, 1)
      .p(
        'AsXDUQAygGCxAFQCyAGDcA0QDcA0DFAKQDFAKCvjGQBhhuArhkQAFgMAQgsQAQgtgSg9QgRg+g3gaQg3gZhaAWQhZAWgxBNQhUBkjFgGQmqhZmngEQgIAAgIAAAJshvQiaD5lAghQmqhZmngFQgIAAgIAB'
      )
    this.shape.setTransform(-5.6454, 0.5355)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#1294E4')
      .s()
      .p(
        'AD7FLQjFgKjcg0Qjcg0iygGQixgFgyAGIBIjIIAAjoIAQAAQGnAEGqBZQDFAGBUhkQAxhNBZgWQBagWA3AZQA3AaARA+QASA9gQAtIgVA4QgrBkhhBuQimC8i7AAIgTAAgADcBtQEGgBCIjWIABgCIABgDIgBADIgBACQiIDWkGABIgBAAIAAAAQgiAAgjgEIgEAAQmqhZmngFIgQABIAQgBQGnAFGqBZIAEAAQAjAEAiAAIAAAAIABAAg'
      )
    this.shape_1.setTransform(-5.6454, 0.5355)
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
  }).prototype = getMCSymbolPrototype(lib.Symbol28copy, new cjs.Rectangle(-89.3, -37.1, 167.3, 85.4), null)
  ;(lib.Symbol21copy = function (mode, startPosition, loop, reversed) {
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
  }).prototype = getMCSymbolPrototype(lib.Symbol21copy, new cjs.Rectangle(-50.3, -56.1, 94.6, 111.30000000000001), null)
  ;(lib.Symbol18copy = function (mode, startPosition, loop, reversed) {
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
  }).prototype = getMCSymbolPrototype(lib.Symbol18copy, new cjs.Rectangle(-49, -33.4, 94.6, 66.5), null)
  ;(lib.Symbol17copy = function (mode, startPosition, loop, reversed) {
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
  }).prototype = getMCSymbolPrototype(lib.Symbol17copy, new cjs.Rectangle(-99.8, -26.5, 101.7, 54.3), null)
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
    // Layer_1
    this.instance = new lib.Symbol28copy()
    this.instance.setTransform(-204.95, -21.55, 2.7955, 2.7955, 0, 0, 180, -0.1, 0.1)
    this.instance_1 = new lib.Symbol28copy()
    this.instance_1.setTransform(205.55, -21.55, 2.7955, 2.7955, 0, 0, 0, 0.1, 0.1)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }, { t: this.instance }] })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-423.3, -125.5, 846.6, 238.6)
  ;(lib.Symbol25copy = function (mode, startPosition, loop, reversed) {
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
    // Layer_2 (mask)
    var mask = new cjs.Shape()
    mask._off = true
    var mask_graphics_0 = new cjs.Graphics().p(
      'AGpDOQhegJgsguQgtgugNgqQgMgqgEguQgDgogDgXQAUgfgNgiQCDgzB4gEQB4gDChAeQAJA8gBAyQgBAygEAkQgFAlghA5QgiA4haAdQgwAPg9AAQgZAAgcgDgApKDCQhagdghg4Qgig5gEglQgFgkgBgyQAAgyAIg8QChgfB4AEQB4AECDAzQgMAhAUAgQgFAXgDAoQgDAugNAqQgMAqgsAuQgtAuheAJQgcADgZAAQg9AAgwgPg'
    )
    var mask_graphics_7 = new cjs.Graphics().p(
      'AGpDOQhegJgsguQgtgugNgqQgMgqgEguQgDgogDgXQAUgfgNgiQCDgzB4gEQB4gDChAeQAJA8gBAyQgBAygEAkQgFAlghA5QgiA4haAdQgwAPg9AAQgZAAgcgDgApKDCQhagdghg4Qgig5gEglQgFgkgBgyQAAgyAIg8QChgfB4AEQB4AECDAzQgMAhAUAgQgFAXgDAoQgDAugNAqQgMAqgsAuQgtAuheAJQgcADgZAAQg9AAgwgPg'
    )
    this.timeline.addTween(
      cjs.Tween.get(mask)
        .to({ graphics: mask_graphics_0, x: -0.25, y: 3.3006 })
        .wait(1)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(6)
        .to({ graphics: mask_graphics_7, x: -0.25, y: 3.3006 })
        .wait(1)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(187)
    )
    // Layer_3
    this.instance = new lib.Tween1('synched', 0)
    this.instance.setTransform(-42.5, -0.85)
    var maskedShapeInstanceList = [this.instance]
    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask
    }
    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .to({ _off: true }, 1)
        .wait(6)
        .to({ _off: false, x: -39.3 }, 0)
        .to({ _off: true }, 1)
        .wait(187)
    )
    // Layer_1
    this.instance_1 = new lib.Symbol18copy()
    this.instance_1.setTransform(-44.1, 0.15, 1, 1, 0, 0, 180)
    this.instance_2 = new lib.Symbol18copy()
    this.instance_2.setTransform(44.1, 0.15)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }] })
        .to({ state: [] }, 1)
        .to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }] }, 6)
        .to({ state: [] }, 1)
        .wait(187)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-89.7, -33.2, 179.4, 66.4)
  ;(lib.Symbol20copy = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.Symbol21copy()
    this.instance.setTransform(42.95, 0, 1, 1, 0, 0, 180)
    this.instance_1 = new lib.Symbol21copy()
    this.instance_1.setTransform(-43.65, 0)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }, { t: this.instance }] })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Symbol20copy, new cjs.Rectangle(-94, -56.1, 187.3, 111.30000000000001), null)
  ;(lib.Symbol14copy2 = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.Symbol29copy2('synched', 0)
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
    this.instance_1 = new lib.Symbol29copy2('synched', 0)
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
  }).prototype = getMCSymbolPrototype(lib.Symbol14copy2, new cjs.Rectangle(-205.2, -82.8, 166.2, 140), null)
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
    this.instance = new lib.Symbol17copy()
    this.instance.setTransform(9.85, 57.95, 4.4338, 4.4338, 0, 0, 180, -3.1, 0.5)
    this.instance_1 = new lib.Symbol17copy()
    this.instance_1.setTransform(1.7, 57.95, 4.4338, 4.4338, 0, 0, 0, 1.6, 0.5)
    this.instance_2 = new lib.Symbol20copy()
    this.instance_2.setTransform(7.9, -162.6, 4.4338, 4.4338, 0, 0, 0, 3, -0.1)
    this.instance_3 = new lib.Symbol25copy('synched', 7)
    this.instance_3.setTransform(7.95, 236.85, 4.538, 4.538, 0, 0, 0, 0.1, 0.2)
    this.instance_4 = new lib.Symbol31copy('synched', 0)
    this.instance_4.setTransform(-190, 205.4, 1, 1.0357, 0, 0, 180, 0, 1.2)
    this.instance_5 = new lib.Symbol31copy('synched', 0)
    this.instance_5.setTransform(201.85, 205.4, 1, 1.0357, 0, 0, 0, 0, 1.2)
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#873E7F')
      .s()
      .p(
        'EAu0AaaQCEhsgVgWQgUgXgIggQgHggAHgeQAKgnAlgmQATgUA2goQCThxBWiCQA/hgAxiHQAehWAsiiQAoiRAShTQAbh/AHhpQAEgyACgOQAGglANgXQAHgLAJgKQgCAMACAQQAGBEC7CdQgSBegLBSQgJBSgrCdQgmCPgbBRQgoB6gvBdQhbC1iQCLQguAthsBYQghAahYA2QhaA2h7A+QgtAXgLAAQgSAABShEgEgyPAYpQgbgFgdgSQgRgKghgaQhshZgugtQiQiLhbi0Qgvhdgoh6QgbhSgmiPQgqicgLhTQgKhSgSheQC8idAFhCQABgRgBgMQAJAJAGAMQAOAXAGAkQACAOAEAyQAHBpAcB/QARBTAnCRQAsCjAfBVQAxCHA/BgQBWCCCUBxQA1AoATAUQAkAlAKAoQAIAegIAgQgHAfgUAYQgUAXgfALQgTAHgUAAQgKAAgJgCgAoWQLQgfgNgTgZQgUgYgGghQgGghAKgeQAKgkAigjQAKgLA2gwQBAg5AvhBQAIgYARgYIAZgfIAYglQARgYAigeIAcglIA1hGQAvg/AJguQADgOADgfQACgdAEgPQAHgcASgWQATgXAYgLQAagLAbAAQAcABAYAOQAZAOATAbQARAZAGAgQALAsgIA4QAlgEAbANQAWALAYAZIAoAsQAQAPAhAcQAbAZALAZQAOAkgOArQgLAmgdAjQAQAMBDApQA0AfAcAZQAoAjAVAsQAXAygIAuQgHAngcAeQgbAdglAJQgsAJgxgVQgqgSgog0Qglg2gegdQgdgeg2gcQg3gdgkgEQgkgEgzAGIhGAHQgcACgUALQgPAJgNAEQgOAFgtAtQgtAtgzBGQg1BFgXAOQggAUgdADIgQACQgWAAgWgKgARmtNQgbgFgqgOIhEgVQhJgUhGALIg6ALQgiAFgYgEQgPgEgVgJIgjgQQgggMhBgHImngsQgzgGgagIQgogMgXgaQgZgdgEguQgDgpAOgqQkXAIkNBFQhGASgfAVIgoAfQgXATgRAIQgfAOglgFQgjgFgegVQg1gkgchNQgwAbgcAJQgtAOgigMQgOgFgWgNQgZgPgLgFQgRgHgXgDIgqgCIjPgIQh3gIhWgVQhngYggg5QgJgRgHgcQgHgggEgPIgRg7QgIgjAEgZQAHgmAigaQAggYApgGQAggFAuAGIBOAJQBQAJBogQQAmgGCSgfQCmgiDRgaQCDgRD3gZIEAgaQB2gMA7gEQBhgGBPACQBAACBRAKQAlAEBsAPIFZAvQDEAdCSAiQBZAVDPA6IC1A0QBCATAjAPQA2AYAiAiQAoAnAJA5QAKA9ghAoQgfAmg+AHQgpAFhFgKQiQgWhaADQiCAFhbA2QAsABAmAWQAnAXAUAmQAVAngHAuQgHAvggAcQgZAXgnAGQgOADgQAAQgUAAgVgFg'
      )
    this.shape.setTransform(7.55, 224.3505)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape },
            { t: this.instance_5 },
            { t: this.instance_4 },
            { t: this.instance_3 },
            { t: this.instance_2 },
            { t: this.instance_1 },
            { t: this.instance },
          ],
        })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-447.7, -411.4, 887.5999999999999, 825.5)
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
    this.instance = new lib.Symbol17copy()
    this.instance.setTransform(14.45, 57.4, 4.4356, 4.4356, 0, 0, 180, -2.8, 0.4)
    this.instance_1 = new lib.Symbol17copy()
    this.instance_1.setTransform(5.65, 57.4, 4.4356, 4.4356, 0, 0, 0, 1.2, 0.4)
    this.instance_2 = new lib.Symbol20copy()
    this.instance_2.setTransform(11.45, -163.2, 4.4356, 4.4356, 0, 0, 0, 2.5, -0.1)
    this.instance_3 = new lib.Symbol25copy('single', 0)
    this.instance_3.setTransform(5.75, 236.25, 4.538, 4.538, 0, 0, 0, 0.1, 0.2)
    this.instance_4 = new lib.Symbol31copy('synched', 0)
    this.instance_4.setTransform(-192.2, 204.95, 1, 1.0358, 0, 0, 180, 0, 1)
    this.instance_5 = new lib.Symbol31copy('synched', 0)
    this.instance_5.setTransform(199.65, 204.95, 1, 1.0358, 0, 0, 0, 0, 1)
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#873E7F')
      .s()
      .p(
        'EAu0AaaQCEhsgVgWQgUgXgIggQgHggAHgeQAKgnAlgmQATgUA2goQCThxBWiCQA/hgAxiHQAehWAsiiQAoiRAShTQAbh/AHhpQAEgyACgOQAGglANgXQAHgLAJgKQgCAMACAQQAGBEC7CdQgSBegLBSQgJBSgrCdQgmCPgbBRQgoB6gvBdQhbC1iQCLQguAthsBYQghAahYA2QhaA2h7A+QgtAXgLAAQgSAABShEgEgyPAYpQgbgFgdgSQgRgKghgaQhshZgugtQiQiLhbi0Qgvhdgoh6QgbhSgmiPQgqicgLhTQgKhSgSheQC8idAFhCQABgRgBgMQAJAJAGAMQAOAXAGAkQACAOAEAyQAHBpAcB/QARBTAnCRQAsCjAfBVQAxCHA/BgQBWCCCUBxQA1AoATAUQAkAlAKAoQAIAegIAgQgHAfgUAYQgUAXgfALQgTAHgUAAQgKAAgJgCgAoWQLQgfgNgTgZQgUgYgGghQgGghAKgeQAKgkAigjQAKgLA2gwQBAg5AvhBQAIgYARgYIAZgfIAYglQARgYAigeIAcglIA1hGQAvg/AJguQADgOADgfQACgdAEgPQAHgcASgWQATgXAYgLQAagLAbAAQAcABAYAOQAZAOATAbQARAZAGAgQALAsgIA4QAlgEAbANQAWALAYAZIAoAsQAQAPAhAcQAbAZALAZQAOAkgOArQgLAmgdAjQAQAMBDApQA0AfAcAZQAoAjAVAsQAXAygIAuQgHAngcAeQgbAdglAJQgsAJgxgVQgqgSgog0Qglg2gegdQgdgeg2gcQg3gdgkgEQgkgEgzAGIhGAHQgcACgUALQgPAJgNAEQgOAFgtAtQgtAtgzBGQg1BFgXAOQggAUgdADIgQACQgWAAgWgKgARmtNQgbgFgqgOIhEgVQhJgUhGALIg6ALQgiAFgYgEQgPgEgVgJIgjgQQgggMhBgHImngsQgzgGgagIQgogMgXgaQgZgdgEguQgDgpAOgqQkXAIkNBFQhGASgfAVIgoAfQgXATgRAIQgfAOglgFQgjgFgegVQg1gkgchNQgwAbgcAJQgtAOgigMQgOgFgWgNQgZgPgLgFQgRgHgXgDIgqgCIjPgIQh3gIhWgVQhngYggg5QgJgRgHgcQgHgggEgPIgRg7QgIgjAEgZQAHgmAigaQAggYApgGQAggFAuAGIBOAJQBQAJBogQQAmgGCSgfQCmgiDRgaQCDgRD3gZIEAgaQB2gMA7gEQBhgGBPACQBAACBRAKQAlAEBsAPIFZAvQDEAdCSAiQBZAVDPA6IC1A0QBCATAjAPQA2AYAiAiQAoAnAJA5QAKA9ghAoQgfAmg+AHQgpAFhFgKQiQgWhaADQiCAFhbA2QAsABAmAWQAnAXAUAmQAVAngHAuQgHAvggAcQgZAXgnAGQgOADgQAAQgUAAgVgFg'
      )
    this.shape.setTransform(5.35, 223.7505)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape },
            { t: this.instance_5 },
            { t: this.instance_4 },
            { t: this.instance_3 },
            { t: this.instance_2 },
            { t: this.instance_1 },
            { t: this.instance },
          ],
        })
        .to(
          {
            state: [
              { t: this.shape },
              { t: this.instance_5 },
              { t: this.instance_4 },
              { t: this.instance_3 },
              { t: this.instance_2 },
              { t: this.instance_1 },
              { t: this.instance },
            ],
          },
          13
        )
        .to({ state: [] }, 1)
        .wait(88)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-441.8, -412.1, 887.2, 826)
  ;(lib.Tween6 = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.Symbol14copy2()
    this.instance.setTransform(-1.65, 1.6, 6.08, 5.7601, 0, 0, 0, -122.4, -12.8)
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-505.1, -401.6, 1010.2, 806.2)
  ;(lib.deposit = function (mode, startPosition, loop, reversed) {
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
    // hand
    this.instance = new lib.Tween3('synched', 0)
    this.instance.setTransform(29.2, 1010.35)
    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .to({ y: 568.7 }, 5, cjs.Ease.get(1))
        .wait(1)
        .to({ y: 573.6628 }, 0)
        .wait(1)
        .to({ y: 585.869 }, 0)
        .wait(1)
        .to({ y: 606.5632 }, 0)
        .wait(1)
        .to({ y: 636.6808 }, 0)
        .wait(1)
        .to({ y: 676.0117 }, 0)
        .wait(1)
        .to({ y: 722.0651 }, 0)
        .wait(1)
        .to({ y: 769.8387 }, 0)
        .wait(1)
        .to({ y: 813.7221 }, 0)
        .wait(1)
        .to({ y: 849.9933 }, 0)
        .wait(1)
        .to({ y: 877.4415 }, 0)
        .wait(1)
        .to({ y: 896.4563 }, 0)
        .wait(1)
        .to({ y: 908.05 }, 0)
        .to({ y: 904.05 }, 1)
        .to({ y: 872.65 }, 4, cjs.Ease.get(1))
        .wait(1)
        .to({ y: 869.1939 }, 0)
        .wait(1)
        .to({ y: 858.8 }, 0)
        .to({ y: 1146.3 }, 8, cjs.Ease.quadInOut)
        .to({ _off: true }, 1)
        .wait(19)
    )
    // dollar
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'A1A7XQU6ABU1ACQF1B9E6FyQBhByBEBsQCyEdA9DDQBnFOAGDkQAaD8AyE/QB2KdAaH1Ugq7gCOgq6ACBQAXn4CKqAQDippBboGQAijDCWkWQBOiNBah4QD6leFCh/g'
      )
    this.shape.setTransform(-12.975, 764.875)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#006020')
      .s()
      .p(
        'AV5VYQkOgKjJihQjEifgDjJQgIjAC6h1QCwhyD/AGQD+ACC3B4QC6B7AVDGQAUDQijCWQijCTj7AAIgaAAgA9ATGQieiTAkjKQAii/DKh8QDGh5D8gEQD+gHCjBvQCpBzgSDAQgSDIjLCcQjPCfkPAHIgWABQj9AAieiRgAvzlXQlgihAsi1QAFgQAGgPQBSixGShiQF0heHUADQHQgCGBBeQGfBiBhCtQAKAUAHAVQArCqlXCbQmnC7p5AFIgYAAQprAAmWi2gAN1zFQilgBh+gZQh8gZgKgeQgNgdBlgRQBfgRCSAAQCSABB5ASQB7ATAdAdQAcAehbAXQhdAYibAAIgMAAgAxAziQhfgZAcgdQAdgdB6gRQB4gSCSABQCSAABfARQBkASgKAdQgJAdh6AYQh8AYilABQijgBhigYg'
      )
    this.shape_1.setTransform(-14.3623, 731.769)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#009933')
      .s()
      .p(
        'Egq6AbLQAXn4CKqAQDippBboGQAijDCWkWQBOiNBah4QD6leFCh/QU6ABU1ACQF1B9E6FyQBhByBEBsQCyEdA9DDQBnFOAGDkQAaD8AyE/QB2KdAaH1Ugq7gCOgq6ACBgAN/DFQi6B1AIDAQADDJDECfQDJChEOAKQENAICribQCjiWgUjQQgVjGi6h7Qi3h4j+gCIgZgBQjvAAinBtgA0aBmQj8AEjGB5QjKB8giC/QgkDKCeCTQClCXEMgHQEPgHDPifQDLicASjIQASjAiphzQiZhojpAAIgfAAgAtG0qQmSBihSCxQgGAPgFAQQgsC1FgChQGeC6J7gEQJ5gFGni7QFXibgriqQgHgVgKgUQhhitmfhiQmBhenQACIgXAAQnHAAlqBbgAIW6PQhlARANAdQAKAeB8AZQB+AZClABQCjABBhgZQBbgXgcgeQgdgdh7gTQh5gSiSgBQiSAAhfARgAv66RQh6ARgdAdQgcAdBfAZQBiAYCjABQClgBB8gYQB6gYAJgdQAKgdhkgSQhfgRiSAAIgIAAQiNAAh1ARg'
      )
    this.shape_2.setTransform(-12.975, 764.875)
    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'EgsVAZtQA0n1CspvQD/pMBvnkQApi1CdkAQBRiBBchtQD+k8E8hzQUUABUOACQFuBwE9FPQBjBpBGBiQC6EGBEC1QB0E3AQDYQAlDtBCEyQCaKLA3HyUgsWgCOgsVACBg'
      )
    this.shape_3.setTransform(-12.925, 617.4)
    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#006020')
      .s()
      .p(
        'AWTUAQkTgKjQidQjJiZgFjCQgLi4C6hvQCuhsD/AFQD+ACC8BzQC/B1AcC9QAcDIihCSQigCPj/AAIgcAAgA9eRyQiaiPArjCQApi4DQh2QDKhzD8gDQD/gHCiBqQCnBtgUC4QgVDBjRCXQjVCakUAHIgXAAQkBAAidiMgAvmlZQlZiVAwimQAEgOAHgOQBUiiGLhZQFshVHKACQHEgBF6BVQGXBZBjCeQALASAHATQAuCdlQCOQmfCup0AFIgZAAQplAAmOipgANfx7QiggBh7gWQh5gXgLgbQgMgaBigQQBcgPCOAAQCOABB2AQQB4ARAdAaQAcAbhZAWQhbAVibAAIgHAAgAwjyWQhcgWAcgaQAdgaB2gQQB2gPCOAAQCNAABdAPQBgAQgJAbQgJAah3AWQh5AVihABQifAAhfgXg'
      )
    this.shape_4.setTransform(-14.4449, 584.3944)
    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f('#009933')
      .s()
      .p(
        'EgsVAZtQA0n2CspuQD/pLBvnlQApi1Cdj/QBRiCBchtQD+k9E8hyQUUABUOACQFuBxE9FOQBjBpBGBiQC6EGBEC1QB0E3AQDYQAlDtBCEyQCaKLA3HyUgsWgCPgsVACCgAOCCMQi6BwALC4QAFDCDJCZQDQCdETAJQETAJCoiXQChiSgcjIQgci+i/h0Qi8hzj+gCIgYAAQjvAAimBmgA0dAzQj8ADjKBzQjQB2gpC4QgrDCCaCPQCjCTESgHQEUgHDViaQDRiYAVjAQAUi4inhuQiYhijpAAIggAAgAs0z2QmLBahUChQgHAOgEAOQgwCnFZCUQGWCtJ2gEQJ0gEGfiuQFQiPguicQgHgTgLgSQhjiemXhZQl6hVnEABIgZAAQm7AAliBSgAIH44QhiAPAMAaQALAbB5AYQB7AWCgABQCfAABegVQBZgWgcgbQgdgbh4gQQh2gRiOAAQiOAAhcAPgAvf46Qh2APgdAbQgcAZBcAXQBfAWCfABQChgBB5gWQB3gVAJgbQAJgahggQQhdgPiNAAIgJAAQiJAAhyAPg'
      )
    this.shape_5.setTransform(-12.925, 617.4)
    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'EgtcAYkQBLnzDHpgQEVo2B/nKQAtiqCkjvQBTh3BehlQEAkjE4hoQT2AATxACQFoBnE/E0QBlBgBHBbQDAD0BKCqQB+ElAYDOQAuDjBNEnQC3J9BNHvUgtdgCOgtcACCg'
      )
    this.shape_6.setTransform(-12.925, 502.675)
    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f('#006020')
      .s()
      .p(
        'AWpS7QkYgKjUiZQjOiWgIi8QgMixC5hrQCthoEAAGQD+ACC/BtQDCBxAiC3QAiDCieCOQigCNkEAAIgZgBgA90QwQiYiLAyi9QAuixDThxQDOhvD9gDQD+gHCiBmQCmBogWCyQgYC7jUCTQjbCYkYAHIgWAAQkGAAibiKgAvclbQlTiLAzibQAEgNAIgNQBUiWGHhSQFmhOHAACQG8gCF0BPQGSBSBkCSQALARAHASQAwCRlJCGQmaCipvAFIgXAAQpiAAmKiegANPxCQidgBh5gVQh3gVgKgYQgNgYBhgOQBZgOCLAAQCLAAB0AQQB1APAdAYQAbAZhVATQhYAUiSAAIgOAAgAwMxaQhZgVAbgYQAdgYB0gOQBzgOCLAAQCLAABaAOQBeAPgKAYQgJAYh0AUQh3ATidABQicAAhdgUg'
      )
    this.shape_7.setTransform(-14.517, 469.7651)
    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f('#009933')
      .s()
      .p(
        'EgtcAYkQBLnzDHpgQEVo2B/nKQAtiqCkjvQBTh3BehlQEAkjE4hoQT2AATxACQFoBnE/E0QBlBgBHBbQDAD0BKCqQB+ElAYDOQAuDjBNEnQC3J9BNHvUgtdgCOgtcACCgAOEBhQi5BrAMCxQAIC8DOCWQDUCZEYAKQEWAHCniTQCeiOgijCQgii3jChxQi/htj+gBIgagBQjvAAikBigA0eALQj9ADjOBvQjTBxguCxQgyC9CYCLQChCQEWgGQEYgHDbiYQDUiTAYi7QAWiyimhoQiYhgjqAAIgeABgAslzMQmHBShUCWQgIANgEANQgzCbFTCLQGSChJxgDQJvgFGaiiQFJiGgwiRQgHgSgLgRQhkiSmShSQl0hPm8ACIgVAAQm0AAldBMgAH830QhhAOANAYQAKAYB3AVQB5AVCdABQCcABBcgVQBVgTgbgZQgdgYh1gPQh0gQiLAAQiLAAhZAOgAvJ32Qh0AOgdAYQgbAYBZAVQBdAUCcAAQCdgBB3gTQB0gUAJgYQAKgYhegPQhagOiLAAIgJAAQiGAAhvAOg'
      )
    this.shape_8.setTransform(-12.925, 502.675)
    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'EguPAXwQBbnxDbpXQElomCKm3QAxijCojhQBUhyBfheQECkRE1hgQThAATcABQFkBgFBEgQBlBbBJBWQDEDnBOCiQCFEZAeDGQA0DcBWEfQDKJzBeHtUguQgCNguPACCg'
      )
    this.shape_9.setTransform(-12.9, 420.75)
    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f('#006020')
      .s()
      .p(
        'AW4SKQkbgJjYiXQjRiTgJi4QgNitC4hnQCshlEAAFQD+ACDCBqQDFBuAmCyQAmC9icCNQieCJkGAAIgbAAgA+EQCQiXiJA3i5QAyitDWhuQDQhrD9gDQD/gGChBiQCmBlgYCuQgaC2jXCRQjfCVkbAHIgXAAQkIAAiZiHgAvVlcQlOiEA0iTQAFgMAHgMQBWiOGDhNQFhhKG7ACQG2gBFvBKQGOBNBlCKQALAQAIARQAxCJlEB/QmXCbpsAFIgYAAQpeAAmGiXgANDwZQibgBh3gTQh1gUgKgWQgNgXBfgNQBYgNCJAAQCJAABxAPQB0AOAdAWQAbAXhUATQhYASiVAAIgHAAgAv7wwQhYgTAbgXQAdgWBygNQBygNCIABQCIAABZAMQBdAOgKAWQgJAXhyASQh1ATibABQiagBhbgTg'
      )
    this.shape_10.setTransform(-14.5523, 387.8925)
    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f('#009933')
      .s()
      .p(
        'EguPAXvQBbnxDbpWQElomCKm3QAxiiCojjQBUhwBghfQEBkRE1hhQThAATcADQFkBfFBEgQBlBbBJBXQDEDmBOCiQCFEZAeDGQA0DcBVEfQDLJzBdHuUguPgCOguPACBgAOFBCQi4BnANCtQAKC4DQCTQDZCXEaAJQEZAICmiRQCciMgmi+QgmiyjFhuQjBhpj+gCIgZAAQjwAAikBfgA0ggQQj9ADjQBqQjWBtgyCtQg2C5CWCJQCgCNEYgGQEcgHDeiVQDYiRAZi2QAYiuimhlQiXhbjpAAIggABgAsbyvQmDBNhWCOQgHAMgEAMQg1CTFOCEQGOCaJvgDQJsgFGWibQFEh+gxiKQgIgQgLgRQhliKmNhNQlwhKm2ABIgWAAQmuAAlYBIgAHz3EQhfANANAXQALAXB1ATQB2ATCbABQCaABBagTQBUgTgbgWQgdgXh0gNQhxgPiJgBQiJABhYAMgAu63GQhyANgdAWQgbAXBYAUQBbASCaABQCbgBB1gSQBygTAJgXQAKgWhcgOQhagMiHAAIgLAAQiCAAhuAMg'
      )
    this.shape_11.setTransform(-12.9, 420.75)
    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'EgutAXQQBknwDnpRQEuocCRmtQAzidCrjaQBVhtBghbQEDkGEyhcQTVAATPACQFhBbFCEVQBmBXBKBTQDHDgBPCcQCKESAhDBQA5DYBaEaQDXJuBnHsUguugCOgutACCg'
      )
    this.shape_12.setTransform(-12.875, 371.6)
    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f('#006020')
      .s()
      .p(
        'AXARtQkcgKjaiVQjTiSgJi1QgPiqC4hmQCshiEAAFQD+ACDDBoQDHBrAoCwQAoC6iaCLQieCJkJAAIgaAAgA+OPlQiWiHA5i2QA1irDYhsQDRhpD9gDQD/gGChBgQClBkgZCrQgaC0jZCPQjhCTkdAHIgXABQkKAAiYiHgAvRldQlMiAA2iOQAEgMAIgMQBWiIGBhKQFfhHG3ACQGygBFtBHQGMBKBlCFQALAQAIAQQAzCElDB7QmUCXpqAEIgYAAQpcAAmEiSgAM7wBQiZgBh2gSQh0gTgKgWQgNgVBegNQBXgMCIAAQCHAABxAOQByAOAdAVQAbAWhTASQhXARiSAAIgJAAgAvywXQhXgSAbgWQAdgVBygMQBwgNCHABQCHAABYAMQBcANgKAVQgJAWhxASQh1ARiZABQiZAAhagTg'
      )
    this.shape_13.setTransform(-14.5911, 338.7653)
    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f('#009933')
      .s()
      .p(
        'EgutAXQQBknwDnpRQEuobCRmuQAzidCrjaQBVhtBghbQEDkGEyhcQTVAATPACQFhBcFCEUQBmBYBKBTQDHDfBPCcQCKESAhDCQA5DXBaEaQDXJtBnHtUguugCOgutACCgAOGAvQi4BmAPCqQAJC1DTCRQDaCWEcAKQEbAGCmiPQCaiLgoi7QgoivjHhsQjDhnj+gCIgZAAQjwAAijBdgA0hgiQj9ADjRBoQjYBsg1CqQg5C3CWCHQCfCMEagGQEdgHDhiUQDZiOAai0QAZisilhjQiXhZjrAAIgeAAgAsVydQmBBKhWCIQgIAMgEAMQg2COFMB/QGMCWJsgDQJqgFGUiWQFDh7gziEQgIgRgLgQQhliEmMhKQlthImyACIgXAAQmpAAlWBFgAHu2nQheANANAVQAKAWB0ATQB2ASCZABQCZAABZgRQBTgSgbgWQgdgWhygNQhxgOiHAAQiIAAhXAMgAuw2pQhyANgdAVQgbAWBXASQBaASCZABQCZgBB1gRQBxgTAJgVQAKgWhcgNQhYgMiHAAIgKAAQiCAAhrAMg'
      )
    this.shape_14.setTransform(-12.875, 371.6)
    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'AzW3RQTQAATLACQFgBaFCERQBnBWBKBTQDHDcBRCbQCLEQAiC/QA6DXBcEZQDbJrBqHsUgu4gCOgu3ACCQBnnwDrpPQExoYCTmpQA0icCsjYQBWhrBfhaQEEkDEyhbg'
      )
    this.shape_15.setTransform(-12.875, 355.2)
    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f('#006020')
      .s()
      .p(
        'AXDRjQkcgJjciVQjTiRgKi1QgPipC4hlQCshiEAAFQD+ACDDBoQDIBqApCvQApC6iaCKQidCIkJAAIgbAAgA+SPcQiViHA6i1QA2iqDYhrQDShoD9gDQD/gGCgBfQCmBjgZCqQgbCzjaCPQjiCTkdAHIgXAAQkKAAiZiGgAvPldQlMh/A2iMQAFgMAIgLQBWiHGAhJQFehGG2ACQGxgBFsBGQGLBJBlCDQALAQAIAQQAzCDlBB5QmTCVpqAFIgYAAQpbAAmDiRgAM5v4QiZgBh1gSQh0gTgLgVQgMgVBdgNQBXgMCHAAQCHAABxAOQByANAdAVQAbAWhTASQhXARiSAAIgIAAgAvvwOQhWgSAbgVQAdgVBxgMQBwgNCHABQCGAABYAMQBbAMgKAWQgJAVhxARQh0ASiZABQiYgBhagSg'
      )
    this.shape_16.setTransform(-14.5982, 322.3904)
    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f('#009933')
      .s()
      .p(
        'Egu3AXFQBnnvDrpPQExoZCTmoQA0icCsjYQBWhrBfhbQEEkCEyhaQTQAATLACQFgBaFCEQQBnBXBKBSQDHDcBRCcQCLEPAiC/QA6DWBcEZQDbJrBqHtUgu4gCOgu3ACBgAOGApQi4BlAPCpQAKC1DTCRQDcCUEcAKQEcAHCliPQCaiKgpi6QgpivjIhrQjDhmj+gCIgZAAQjwAAijBcgA0hgnQj9ACjSBoQjYBrg2CpQg6C2CVCHQCfCMEbgHQEdgGDiiUQDaiOAbizQAZirimhiQiWhZjrAAIgeABgAsTyYQmABKhWCHQgIALgFAMQg2CMFMB/QGKCUJsgDQJqgFGTiVQFBh6gziCQgIgQgLgQQhliDmLhJQlshHmxACIgYAAQmoAAlUBDgAHs2dQhdANAMAUQALAWB0ATQB1ASCZABQCYAABZgRQBTgSgbgWQgdgVhygNQhxgOiHAAQiHAAhXAMgAut2fQhxAMgdAWQgbAVBWASQBaASCYAAQCZgBB0gRQBxgSAJgVQAKgVhbgNQhYgMiGABIgLgBQiBAAhrAMg'
      )
    this.shape_17.setTransform(-12.875, 355.2)
    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'Egu2AXZQBrnyDrpPQEyoiCSmkQABgEABgDQA3ibCmjUQBWhrBfhbQBDhFBHg4QDIifDghHQFSgFFRgGQN9ABN7ABQDEAxC6BoQCVBXCPB8QBlBXBJBTQDGDfBQCbQAvBdAiBUQBFChAXB/QA3DNBWEGQAFAPAFAPQBNDbBADMQB0F0BHFAQiWgFiVgEQldgKlbgHQjKgHjLgEQwggbwcAGQsGAEsJAXQnVANnVAUg'
      )
    this.shape_18.setTransform(-13, 357.2)
    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f('#006020')
      .s()
      .p(
        'AXCRuQkcgJjbiVQjTiRgLi1QgPiqC4hmQCrhiEAAFQD+ACDDBoQDIBrApCvQAqC6ibCLQidCIkJAAIgaAAgA+PPnQiViIA5i2QA2iqDYhrQDShpD9gDQD+gGCgBgQCmBjgZCrQgaC0jaCPQjiCTkcAHIgXAAQkLAAiYiGgAtOkvQhDgUg+gYQlKh/A2iNQAFgMAHgMQBXiHF+hKIAygKQFLg9GXACQG3ABFcBDIAJACQGKBLBlCEIAKAOIAJASQAzCDlAB6QhEAZhKAWQltBpoBADIgOAAIgPAAQn3AAlhhngAM6v+QiZgBh1gTQh0gTgLgWQgMgXBegNQBXgNCHAAQCHAABxAPQByAOAdAWQAaAXhTASQhXASiSAAIgIAAgAvuwUQhXgTAbgXQAdgWBxgNQBwgNCHABQCGAABYAMQBbAOgJAWQgJAXhxASQh0ASiZABQiYgBhagSg'
      )
    this.shape_19.setTransform(-14.3767, 325.0904)
    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f('#009933')
      .s()
      .p(
        'EgpgAGYQEzoiCRmkIACgHQA3ibCnjTQBVhtBfhaQBEhEBGg5QDIifDghIQFSgEFRgGIb4ACQDEAxC6BoQCVBXCPB8QBlBXBJBTQDGDfBQCcQAuBcAjBTQBECiAYB/QA3DNBWEGIAKAeQBNDbA/DMQB1F0BGE/IkrgJQlcgJlbgHQjKgHjLgFQwhgawbAGQsGAEsJAWQnUAOnVAUQBrnyDqpPgAOIA5Qi4BmAQCqQAKC0DTCRQDbCWEcAJQEcAHCkiPQCbiLgqi6QgpiwjIhrQjDhnj+gCIgZAAQjvAAijBdgA0cgYQj9ACjSBpQjYBrg2CqQg5C2CVCIQCfCLEbgFQEcgIDiiTQDaiPAaizQAZirilhjQiXhZjqAAIgeAAgAreycIgxAKQl/BLhWCHQgIAMgFAMQg2CMFKCAQA+AXBDAVQFmBpIBgCIAOAAQIBgDFthqQBKgVBEgZQFAh6gziEIgJgRIgKgOQhkiEmLhLIgJgCQlbhDm4gBIgZgBQmJAAlAA7gAHx2gQheANAMAWQALAXB0ATQB1ATCZABQCYABBZgTQBUgSgbgXQgdgXhygNQhwgPiHAAQiIAAhXANgAuq2iQhxANgdAWQgbAWBXAUQBaASCYABQCZgBB0gSQBxgTAJgWQAKgWhbgOQhZgMiGAAIgKgBQiBAAhsANg'
      )
    this.shape_20.setTransform(-13, 357.2)
    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'EguyAYCQB5n3DopSQEwonCVmtQABgDABgEQA5ieCkjVQBVhuBeheQBChFBGg7QDDiiDbhTQFIgSFHgZQOHABOFABQDGAvC9BlQCQBdCKB/QBjBaBHBVQC/DjBPCgQAuBeAiBUQBDCjAZCCQA4DQBYEHQAFAPAFAQQBNDcBCDOQB2F3BMFEQiMABiNACQlHAElFAHQjMgFjMgEQwzgXwfAFQsLAEsXAVQnYANncAUg'
      )
    this.shape_21.setTransform(-13.425, 364.975)
    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics
      .f('#006020')
      .s()
      .p(
        'AW/SQQkcgJjbiWQjTiSgLi3QgQirC2hnQCqhkD/AFQD9ACDEBpQDIBsAqCxQArC7iZCMQidCKkKAAIgYAAgA+JQGQiWiIA6i4QA1isDYhsQDRhqD8gDQD+gGCgBiQClBlgYCsQgaC2jYCPQjhCUkcAHIgVAAQkMAAiZiIgAtQknQhDgUg9gZQlFiBA2iQQAFgMAIgLQBViKF7hOIAxgKQFLhBGXACQG4ACFaBIIAKACQGGBPBjCHIAJAPIAJARQAxCGk7B7QhDAahKAWQlsBtoBADIgOAAIgJAAQn8AAlhhtgAM8wPQiZgBh1gVQh0gVgKgaQgMgaBegPQBYgQCIAAQCIAABwASQByAQAcAaQAaAahUAVQhWATiOAAIgOAAgAvvwoQhXgVAbgaQAcgZBxgPQBwgQCIAAQCHAABYAQQBcAQgKAaQgJAZhxAUQh0AUiZABQiYAAhbgVg'
      )
    this.shape_22.setTransform(-13.6901, 333.1883)
    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .f('#009933')
      .s()
      .p(
        'EgpRAG5QEwonCVmtIACgHQA5ieCkjVQBVhuBeheQBChFBGg7QDDiiDbhTQFIgSFHgZIcMACQDGAvC9BlQCQBdCKB/QBjBaBHBVQC/DjBPCgQAuBeAiBUQBDCjAZCCQA4DQBYEHIAKAfQBNDcBCDOQB2F3BMFEIkZADQlHAElFAHImYgJQwzgXwfAFQsLAEsXAVQnYANncAUQB5n3DopSgAOOBYQi2BnAQCrQAKC3DTCSQDbCWEcAJQEbAGCkiQQCaiMgri7QgqixjIhsQjEhoj9gCIgWAAQjxAAiiBegA0NADQj9ADjQBqQjYBsg1CsQg6C4CVCIQCgCNEagFQEdgHDgiUQDZiPAZi2QAYisilhlQiXhdjrAAIgbABgArTycIgxAKQl7BOhWCKQgIALgEAMQg2CQFECBQA+AZBDAUQFkBuIBgBIAOAAQIBgDFshtQBKgWBEgaQE7h7gxiGIgKgRIgJgPQhiiHmHhPIgKgCQlZhIm5gCIgXAAQmJAAlBA/gAIA27QheAPAMAaQAKAaBzAVQB1AVCZABQCYABBagUQBUgVgagaQgcgahxgQQhxgSiHAAQiJAAhXAQgAuh29QhxAPgcAZQgaAaBXAVQBaAVCZAAQCZgBB0gUQBxgUAJgZQAJgahbgQQhZgQiHAAIgIAAQiDAAhtAQg'
      )
    this.shape_23.setTransform(-13.425, 364.975)
    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'EgutAZGQCPoBDnpVQEqowCam6QABgEABgDQA9imCgjWQBUhyBchhQBAhJBEg+QC8inDShnQE4goE2g4QOXABOWACQDKAsDDBeQCIBnCCCEQBdBfBEBZQC2DrBMCnQAsBgAiBVQBCClAaCGQA7DWBaEJQAFAPAFAQQBODgBEDSQB6F7BWFKQh/AMh9ANQkkAbkeAeQjRgEjQgDQxRgRwmADQsSAFstAUQnfALnnATg'
      )
    this.shape_24.setTransform(-14.075, 377.9)
    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics
      .f('#006020')
      .s()
      .p(
        'AW4THQkagIjbiXQjSiUgMi5QgRiuC0hpQCohnD9AFQD8ABDEBsQDJBuAsCzQAtC+iZCNQidCNkMAAIgVgBgA9/Q6QiWiKA5i6QA1ivDXhvQDQhsD7gCQD9gGCfBlQCkBogXCvQgYC4jXCRQjeCVkcAGIgVAAQkLAAiaiKgAtTkZQhCgWg8gaQk8iFA2iTQAEgMAIgMQBUiOF2hTIAwgLQFKhHGXACQG5ACFXBQIAKACQGBBWBfCOIAIAOIAJARQAvCKkzB9QhCAbhKAXQlrB0oBADIgOAAIgEAAQn/AAlhh2gAM/wrQiZgBh1gZQhzgZgJgfQgMggBggUQBYgUCJAAQCJABBwAVQByAVAaAgQAZAghWAYQhZAXiUAAIgGAAgAvvxKQhYgYAagfQAbgfBygTQBwgUCIAAQCIAABaAUQBcAUgJAgQgJAfhyAXQh0AYiZABQiZgBhbgZg'
      )
    this.shape_25.setTransform(-12.5484, 346.7094)
    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics
      .f('#009933')
      .s()
      .p(
        'Ego3AHwQEqowCam6IACgHQA9ilCgjXQBUhxBchiQBAhJBEg+QC8inDShmQE4gpE2g4IctADQDKAsDDBfQCIBmCCCFQBdBeBEBZQC2DrBMCnQAsBgAiBVQBCClAaCGQA7DWBaEJIAKAfQBODhBEDRQB6F7BWFKIj8AZQkkAckeAdImhgHQxRgRwmAEQsSAEstATQnfAMnnATQCPoBDnpVgAOXCMQizBpAQCvQAMC5DSCTQDbCXEbAJQEaAFCjiSQCZiNgti+QgriyjKhvQjEhrj8gCIgXAAQjuAAigBigAz1AyQj7ADjQBrQjXBwg1CuQg5C6CWCKQCfCQEagGQEcgGDfiVQDXiRAYi3QAXiwilhnQiXhgjqAAIgaAAgArBydIgxALQl1BThVCOQgHAMgFAMQg2CTE8CFQA8AaBDAWQFiB3IBAAIAOAAQIBgEFrh0QBKgXBDgbQEzh9gwiJIgIgRIgJgPQheiOmChVIgJgDQlYhQm5gCIgRAAQmNAAlCBFgAIY3pQhfAVALAfQAJAgB0AYQB0AZCZABQCZABBbgYQBVgYgYggQgbgghxgVQhwgViJAAQiJAAhZATgAuR3rQhxAUgcAeQgZAfBYAZQBbAYCYABQCagBB0gXQBxgYAJgfQAJgfhcgVQhZgTiIAAIgHgBQiEAAhuAUg'
      )
    this.shape_26.setTransform(-14.075, 377.9)
    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'EgulAakQCvoNDjpaQEio9ChnNQACgDABgEQBCiuCajZQBTh3BYhnQA/hNBBhDQCyiuDFiBQEhhJEfhiQOuABOtABQDRAoDJBWQB9B0B4CMQBVBlA/BfQCoD3BJCvQArBjAgBXQBACoAdCLQA+DfBdELQAGAQAFAQQBPDlBHDYQB/GABjFSQhqAbhoAcQjyA9jpA/QjXgDjUgCQx9gJwvACQscADtMASQnpALn2AQg'
      )
    this.shape_27.setTransform(-15.025, 396.025)
    this.shape_28 = new cjs.Shape()
    this.shape_28.graphics
      .f('#006020')
      .s()
      .p(
        'AWwUVQkagIjaiYQjRiVgOi9QgSiyCxhtQClhqD7AEQD6ACDFBuQDKByAuC2QAvDAiXCQQicCQkNAAIgSgBgA9wSEQiXiOA5i9QA0iyDWhyQDPhwD5gBQD6gFCfBpQCkBrgWCzQgWC8jVCSQjcCXkbAGIgQAAQkNAAiciNgAAKiCQoCgBlfiCQhBgYg7gbQkwiKA3iZQAEgNAHgMQBTiUFthaIAwgMQFJhQGWACQG7ADFTBaIAKADQF6BgBZCWIAIAPIAIARQAsCOkoCAQhBAchKAaQlpB8oBAEIgOAAgANExSQiagBh0geQhzgegIgoQgKgnBggaQBbgaCKAAQCKABBwAbQBxAcAZAnQAWAohXAdQhbAciVAAIgFAAgAvvx4QhZgdAYgnQAagmBygaQBxgZCKAAQCJAABaAaQBdAagJAoQgIAmhyAdQh0AciaABQiZgBhcgeg'
      )
    this.shape_28.setTransform(-10.9378, 365.6077)
    this.shape_29 = new cjs.Shape()
    this.shape_29.graphics
      .f('#009933')
      .s()
      .p(
        'EgoTAI9QEio9ChnNIADgHQBCiuCajZQBTh3BYhnQA/hNBBhDQCyiuDFiBQEhhJEfhiIdbACQDRAoDJBWQB9B0B4CMQBVBlA/BfQCoD3BJCvQArBjAgBXQBACoAdCLQA+DfBdELIALAgQBPDlBHDYQB/GABjFSIjSA3QjyA9jpA/ImrgFQx9gJwvACQscADtMASQnpALn2AQQCvoNDjpagAOlDUQixBtASCyQAOC9DRCVQDaCYEaAIQEZAFCiiUQCXiQgvjAQgui2jKhyQjFhuj6gCIgUAAQjuAAieBmgAzTB0Qj5ABjPBwQjWByg0CyQg5C9CXCOQCgCREZgEQEbgGDciXQDViSAWi8QAWizikhrQiYhkjtAAIgUAAgAqoyeIgwAMQltBahTCUQgHAMgEANQg3CZEwCKQA7AbBBAYQFfCCICABIAOAAQIBgEFph8QBKgaBBgcQEoiAgsiOIgIgRIgIgPQhZiWl6hgIgKgDQlTham7gDIgUAAQmKAAlBBOgAI64oQhgAaAKAnQAIAoBzAeQB0AeCaABQCYABBdgdQBXgdgWgoQgZgnhxgcQhwgbiKgBQiKAAhbAagAt74sQhyAagaAmQgYAnBZAdQBcAeCZABQCagBB0gcQBygdAIgmQAJgohdgaQhagaiJAAIgGAAQiGAAhvAZg'
      )
    this.shape_29.setTransform(-15.025, 396.025)
    this.shape_30 = new cjs.Shape()
    this.shape_30.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'EgubAceQDWodDgpiQEXpLCsnmQABgEABgEQBKi5CTjdQBQh9BVhuQA8hTA8hIQCmi5C0ijQEFhxEBiaQPMABPKACQDZAjDSBKQBuCFBrCWQBMBuA4BmQCXEFBFC6QAnBnAfBaQA9CsAhCSQBCDrBiEMQAFAQAGARQBPDsBNDgQCEGGB1FdQhQAvhMAuQizBpilBoQjdAAjbAAQy0ABw7gBQspACt0AQQn2AJoJAOg'
      )
    this.shape_30.setTransform(-16.2, 419.325)
    this.shape_31 = new cjs.Shape()
    this.shape_31.graphics
      .f('#006020')
      .s()
      .p(
        'AWlV6QkYgHjZiaQjRiYgQjBQgTi3CshxQCihvD4AEQD3ABDHByQDLB1AxC7QAzDEiWCTQicCTkNAAIgPAAgA9dTiQiYiQA4jCQAzi3DVh2QDNhzD3gBQD4gECdBuQCjBwgTC4QgUDBjSCUQjYCakaAEIgPAAQkNAAidiSgAAChYQoCgBlciSQhAgag5geQkgiQA2ihQAEgMAHgMQBRidFjhiIAvgOQFHhbGWACQG8AEFQBoIAJADQFxBtBRChIAHAOIAIARQAoCVkaCDQhAAfhJAbQloCJn/ADIgOAAgANKyDQiagChzgkQhyglgHgyQgJgxBigiQBcgiCMABQCMAABwAkQBwAjAWAxQAVAzhaAjQhdAjiXAAIgEAAgAvvyzQhagjAXgxQAYgwByghQBxghCLAAQCMABBbAhQBfAigJAyQgJAwhyAjQh0AiiaAAQiZgBhegkg'
      )
    this.shape_31.setTransform(-8.8813, 389.8798)
    this.shape_32 = new cjs.Shape()
    this.shape_32.graphics
      .f('#009933')
      .s()
      .p(
        'EgnlAKfQEXpLCsnmIACgIQBKi5CTjdQBQh9BUhuQA9hTA9hIQCmi5CzijQEFhxEAiaIeWADQDZAjDTBKQBuCFBrCWQBMBuA4BmQCWEFBGC6QAnBnAfBaQA9CsAhCSQBCDrBiEMIALAhICbHMQCFGGB1FdQhQAvhMAuQizBpilBoIm4AAQy0ABw7gBQspACt0AQQn2AJoJAOQDXodDfpigAO2ExQitByAUC3QAPDBDRCXQDaCbEXAGQEZAECfiXQCWiTgzjDQgxi7jLh1QjGhzj3gBIgSAAQjtAAibBrgAyoDIQj3ABjNBzQjVB2gzC3Qg3DCCXCRQChCVEYgEQEagEDYiZQDSiVAUjAQAUi4ikhxQiXhqjsAAIgSAAgAqIyfIgvANQliBjhRCcQgIAMgDANQg2ChEfCQQA5AdBAAbQFcCRICACIAOAAQIAgEFniIQBKgcA/gfQEaiDgoiUIgIgSIgGgOQhSihlwhtIgKgDQlQhnm8gFIgNAAQmOAAlCBagAJm55QhiAhAJAyQAHAxByAlQBzAkCaACQCZABBfgjQBagkgVgyQgWgyhwgjQhwgkiLAAIgFAAQiJAAhbAigAte5+QhzAhgYAwQgXAwBbAkQBdAkCZABQCaAAB0gjQBzgiAIgxQAJgxhfgiQhbgiiLAAIgFAAQiJAAhuAhg'
      )
    this.shape_32.setTransform(-16.2, 419.325)
    this.shape_33 = new cjs.Shape()
    this.shape_33.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'EguOAezQEHoyDbppQEKpeC4oFQABgEABgEQBSjICKjgQBPiFBPh4QA5hYA4hQQCXjECgjOQDhijDcjdQPwABPuACQDjAcDdA9QBcCaBaCiQBBB4AwBvQCCEXA/DIQAkBsAeBdQA5CxAmCaQBGD5BoEOQAGARAFASQBRD0BSDpQCMGOCJFrQguBGgrBFQhmCehRCbQjmACjiACQz3APxKgFQs6ACukANQoFAHohALg'
      )
    this.shape_33.setTransform(-17.7, 447.825)
    this.shape_34 = new cjs.Shape()
    this.shape_34.graphics
      .f('#006020')
      .s()
      .p(
        'AWYX0QkWgFjYidQjQiagSjHQgWi9Cnh3QCeh1D0AEQD0AADIB4QDOB6A0DAQA2DIiTCWQibCYkQAAIgJAAgA9FVWQiaiVA3jIQAzi8DSh7QDMh4D0AAQD0gDCdB0QChB3gRC+QgRDGjNCXQjVCckYAEIgJAAQkRAAieiXgAgHgkQoEgDlXikQg/geg3ggQkMiYA2iqQAEgNAHgMQBOimFWhuIAugPQFFhpGWACQG+AGFKB4IAKAEQFkB8BJCuIAGAOIAGASQAkCckICHQg+AihJAeQlmCXn+AEIgNAAgANRzBQiagChygsQhxgtgGg+QgHg+BkgrQBfgrCOAAQCNABBwAtQBwAtATA+QARA/hdArQhfAqiVAAIgHAAgAvvz7QhcgrAVg9QAWg8BzgqQBxgrCOABQCNAABdAsQBgArgIA+QgJA9hyAqQh0ApibAAQiagChfgrg'
      )
    this.shape_34.setTransform(-6.3518, 419.5767)
    this.shape_35 = new cjs.Shape()
    this.shape_35.graphics
      .f('#009933')
      .s()
      .p(
        'EgmsAMYQEKpeC4oFIADgIQBRjICKjgQBOiFBQh4QA5hYA4hQIE3mSQDhijDbjdIffADQDjAcDdA9QBcCaBaCiQBBB4AwBvQCCEXA/DIQAkBsAeBdQA5CxAlCaQBHD5BoEOIALAjQBRD0BSDpQCMGOCJFrQguBGgrBFQhnCehQCbInIAEQz3APxLgFQs5ACulANQoEAHohALQEHoyDbppgAPLGjQioB3AWC9QASDGDQCaQDYCeEXAFQEWACCdiaQCTiXg2jIQg0jAjNh6QjJh3j0gBIgOAAQjrAAiYBygAxyEvQjzAAjMB4QjTB7gyC9Qg4DHCaCVQChCaEXgDQEZgDDUicQDOiYARjGQAQi9ihh3QiZhyjsAAIgMAAgApgyhIguAPQlWBthOCmQgGANgFAMQg2CrEMCXQA3AhA/AdQFXCkIDADIAOAAQH+gDFmiXQBJgeA/giQEHiIgjicIgHgRIgGgOQhIiullh9IgJgEQlLh4m+gGIgLAAQmQAAlABogAKc7dQhkArAHA9QAGA/BxAtQByAsCbACQCZABBigrQBcgrgRhAQgTg+hwgsQhwguiNAAIgDAAQiMAAheArgAs87kQhzArgVA7QgVA9BbArQBfAsCaACQCbAAB0gqQBzgqAIg9QAIg9hggsQhdgriNgBIgDAAQiMAAhwAqg'
      )
    this.shape_35.setTransform(-17.7, 447.825)
    this.shape_36 = new cjs.Shape()
    this.shape_36.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'EguAAhdQE/pJDVpzQD8pzDFooQACgDABgEQBbjZCAjlQBLiOBKiCQA1hgA1hYQCEjRCJj+QC5jcCykqQQZACQXABQDuAWDqAtQBICyBHCwQAzCEAoB4QBpErA6DXQAgBzAcBfQA2C4AqCjQBMEJBvESQAFASAGARQBSD9BZD0QCUGYChF5QgKBigFBgQgODaAPDUQjxAFjqAFQ1EAcxbgIQtMABvcAJQoVAGo8AIg'
      )
    this.shape_36.setTransform(-19.35, 480.2)
    this.shape_37 = new cjs.Shape()
    this.shape_37.graphics
      .f('#006020')
      .s()
      .p(
        'AWIaAQkTgFjYigQjPidgUjNQgYjDChh+QCYh7DyACQDvABDKB9QDQB/A5DFQA6DOiSCbQiZCekSAAIgEAAgA8sXYQiaiZA1jPQAyjCDRiBQDJh9DxABQDxgCCaB8QChB9gODGQgODMjJCbQjQCekXACIgFABQkSAAihiegAgUAVQoEgFlRi4Qg+ghg0gkQj3igA2i1QAEgMAGgNQBMixFIh6IAtgRQFCh5GWABQHAAIFECMIAJADQFYCPA/C9IAEAOIAFARQAeCljzCNQg8AkhJAiQljCmn9AEIgOAAgANZ0GQibgDhxg2Qhwg2gEhMQgGhLBng2QBig2CQAAQCQABBvA4QBvA4AQBNQAOBMhgA1QhiAziXAAIgGAAgAr00XQibgChhg0Qheg1AThKQAUhJB0g1QBxg1CQABQCQAABfA2QBiA2gJBLQgIBLhyAzQhzAyiXAAIgGAAg'
      )
    this.shape_37.setTransform(-3.4668, 453.3501)
    this.shape_38 = new cjs.Shape()
    this.shape_38.graphics
      .f('#009933')
      .s()
      .p(
        'EglsAOhQD8pzDFooIADgIQBbjYCAjlQBLiPBKiAQA1hhA0hYQCGjRCIj+QC5jbCxkrMAgxAAEQDuAVDqAtICPFiQAzCEAoB4QBpErA6DXIA8DTQA1C3AqCjQBNEIBuESIALAkQBTD9BYDzQCVGZChF5QgLBhgEBgQgPDaAQDVIncAJQ1DAdxbgIQtMABvcAJQoVAFo8AJQE/pKDVpygAPiIkQihB+AYDDQAUDNDPCdQDYCgETAEQEVABCaieQCSibg7jOQg4jGjQh/QjKh9jvAAIgMAAQjqAAiUB5gA3vIhQjSCAgxDDQg1DOCaCaQCjCfEVgCQEXgCDPifQDKibAOjMQAOjFihh+Qiah7jxACIgEgBQjvAAjHB9gAoyyjIgtARQlIB6hMCwQgGANgEANQg2C1D2CgQA0AkA+AhQFSC5IDAFIAOAAQH+gFFiimQBKgiA7gkQD0iNgeilIgFgRIgEgPQg/i8lYiPIgJgEQlEiLnAgIIgHAAQmSAAk/B4gALZ9PQhnA2AGBMQADBMBxA2QBwA1CcADQCaABBlgzQBgg1gOhNQgQhMhvg5Qhvg4iQgBQiQAAhiA2gAsU9XQh0A2gUBIQgTBLBeA0QBhA0CaACQCcABB0gyQBzgzAIhLQAJhLhig3Qhfg1iRgBIgCAAQiOAAhwA0g'
      )
    this.shape_38.setTransform(-19.35, 480.2)
    this.shape_39 = new cjs.Shape()
    this.shape_39.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'EgveAjyQFwpeDQp6QDvqGDRpGQACgEABgEQBkjnB2jpQBKiWBFiLQAyhmAwhgQB1jcB1kpQCVkNCNluQQ9ACQ8ACQD3APD1AfQA2DHA3C8QAnCPAgCBQBUE8A1DmQAcB2AbBjQAyC9AuCrQBREWB1EVQAGATAFASQBUEFBeD9QCcGgC2GHQAWB5AdB3QA/EPBjEHQj6AIjyAHQ2GApxrgLQtbAAwNAGQolADpTAGg'
      )
    this.shape_39.setTransform(-10.175, 508.675)
    this.shape_40 = new cjs.Shape()
    this.shape_40.graphics
      .f('#006020')
      .s()
      .p(
        'AOTZVQjOiggXjSQgajKCciDQCUiCDtADQDtAADLCCQDSCEA8DKQA+DSiPCfQiYCikTAAQkSgDjWiigA8VZMQibieA0jUQAxjJDPiEQDIiCDtABQDugBCZCCQCgCEgMDLQgLDSjFCeQjMCikVAAIgCAAQkTAAijiigAgeBJQoFgHlNjKQg9glgxgmQjkioA3i+IAJgZQBJi7E7iFIAtgTQE/iHGWACQHDAJE+CbIAJAGQFMCeA2DKIAEAOIADARQAaCtjiCRQg6AnhJAkQlgC0n8AFIgOAAgANg1EQicgChwg+Qhvg+gChZQgEhYBpg/QBkg/CSAAQCSABBvBCQBuBBAOBZQAKBahjA8QhkA6iWAAIgIAAgArz1XQibgDhig8Qhgg8ARhXQAShUB0g+QByg+CSAAQCSABBhA/QBjBAgIBXQgJBYhyA6QhzA5iYAAIgGAAg'
      )
    this.shape_40.setTransform(-0.9273, 483.0498)
    this.shape_41 = new cjs.Shape()
    this.shape_41.graphics
      .f('#009933')
      .s()
      .p(
        'EgmeAQaQDvqGDRpGIADgIQBkjnB2jpICPkhIBijGQB1jcB1kpQCVkNCNluMAh5AAEQD3APD1AfQA2DHA3C8QAnCPAgCBQBUE8A1DmQAcB2AbBjIBgFoQBREWB1EVIALAlQBUEFBeD9QCcGgC2GHQAWB5AdB3QA/EPBjEHInsAPQ2GApxrgLQtbAAwNAGQolADpTAGQFwpeDQp6gAOMKVQibCEAZDJQAXDTDOCgQDWCiESADQEUgBCXiiQCQieg+jSQg8jLjSiEQjMiCjsAAIgJAAQjoAAiRB/gA4gKMQjPCFgwDJQg1DTCcCfQCjCiEUAAQEVgBDMiiQDFidALjSQAMjLifiEQiaiCjuABIgFAAQjqAAjGCAgAp1ylIgsASQk7CFhJC7IgKAaQg2C+DjCoQAyAmA9AlQFMDLIEAGIAOAAQH9gEFgi1QBJgkA7goQDhiQgZitIgEgSIgEgOQg1jKlMieIgKgFQk+ibnDgKIgGAAQmSAAk9CGgAKk+yQhpA/AEBYQADBZBvA+QBwA9CcADQCbABBng7QBjg8gLhaQgNhZhvhCQhuhBiSgCQiSAAhlBAgAtd+8QhzA/gSBUQgRBXBfA8QBjA7CbADQCcABB0g5QBzg6AIhYQAIhXhjhAQhgg/iTgBIgCAAQiRAAhxA9g'
      )
    this.shape_41.setTransform(-10.175, 508.675)
    this.shape_42 = new cjs.Shape()
    this.shape_42.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'EgwxAlsQGYpuDMqBQDlqWDbpfQABgEACgFQBrjxBvjtQBHicBBiTQAwhsAshlQBpjmBklLQB4k2BumlQRcACRZACQD/AKD9AUQApDXApDHQAeCXAZCJQBCFKAxDwQAaB7AZBmQAvDAAyCyQBVEiB6EXQAFATAGATQBUEMBkEEQCiGnDHGSQAwCMA5CKQB+E6CoExQkBAKj4AJQ2+A0x3gOQtogBw1AEQoxACpnADg'
      )
    this.shape_42.setTransform(-2.075, 532)
    this.shape_43 = new cjs.Shape()
    this.shape_43.graphics
      .f('#006020')
      .s()
      .p(
        'AOKa5QjNijgZjXQgbjOCXiIQCRiGDrACQDpgBDNCGQDTCIA/DPQBCDWiOChQiWClkSABQkQgBjWikgA8CaqQicihAzjYQAwjODOiJQDGiGDrADQDrgBCZCIQCeCJgKDPQgIDYjCCfQjJCkkUAAQkTAAikingAgnBzQoFgHlJjaQg8gngvgpQjUiuA2jFIAJgaQBHjDExiOIAsgUQE9iSGWABQHEALE6CpIAJAFQFDCrAuDVIADAOIADARQAWC0jUCTQg5AqhIAmQlfDBn7AEIgOAAgANm12QicgDhvhEQhuhEgChjQgChiBqhHQBnhICTABQCUABBuBKQBuBJALBjQAJBkhmBDQhnBAiXAAIgHAAgArx2MQibgDhkhCQhhhDAQhgQAQheB0hGQByhGCTABQCVABBiBHQBkBIgIBhQgIBhhzBBQhyA+iYAAIgHAAg'
      )
    this.shape_43.setTransform(1.1462, 507.3248)
    this.shape_44 = new cjs.Shape()
    this.shape_44.graphics
      .f('#009933')
      .s()
      .p(
        'EgnNAR8QDlqVDbpfIADgJQBrjyBvjsQBHidBBiSIBcjRQBpjlBklMQB4k2BumlMAi1AAEQD/AKD9AUQApDXApDHQAeCXAZCIIBzI8QAaB7AZBlQAvDAAyCzQBVEhB6EXIALAmQBUEMBkEEQCiGnDHGSQAwCMA5CKQB+E6CoExIn5ATQ2+A0x3gOQtogBw1ADIyYAGQGYpuDMqCgANALyQiXCIAbDOQAZDXDNCjQDWClEQABQESgCCWilQCOihhCjWQg/jPjTiHQjNiGjpAAIgHAAQjmAAiPCEgA5NLkQjOCIgwDOQgzDYCcCiQCkCmETAAQEUAADJikQDCifAIjYQAKjOieiKQiZiHjrAAIgIAAQjmAAjDCEgAqxynIgsAUQkxCOhHDDIgJAaQg2DGDUCtQAvApA8AnQFJDbIFAHIANAAQH8gEFfjCQBIgmA5gqQDUiTgWizIgDgSIgDgOQgujVlDirIgJgFQk6ipnEgLIgDAAQmUAAk8CRgEAJzggEQhqBHACBiQACBjBuBFQBvBECcADQCcABBphCQBmhCgJhlQgLhjhuhJQhuhKiUgBIgCAAQiSAAhmBHgEgOdggPQh0BGgQBfQgQBgBhBCQBkBCCbADQCcACB1hAQBzhAAIhiQAIhhhkhHQhihIiVgBIgCAAQiSAAhxBFg'
      )
    this.shape_44.setTransform(-2.075, 532)
    this.shape_45 = new cjs.Shape()
    this.shape_45.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'EgxxAnLQG3p8DJqGQDcqhDjpyQACgFABgEQBwj7BqjvQBFiiA+iXQAuhwAphrQBfjtBXlmQBilVBXnRQRzACRvACQEGAGEEAMQAdDkAfDPQAWCdAVCPQA0FVAuD5QAYB+AYBoQAtDDA1C4QBYEqB9EZQAFATAGAUQBVERBoEKQCmGsDUGaQBGCbBNCZQCwFcDdFRQkHAMj8AKQ3pA8yBgQQtygBxTABQo8ABp1ACg'
      )
    this.shape_45.setTransform(4.225, 550.1445)
    this.shape_46 = new cjs.Shape()
    this.shape_46.graphics
      .f('#006020')
      .s()
      .p(
        'AODcGQjNikgajbQgdjSCViMQCNiKDpACQDoAADOCJQDUCKBBDTQBEDYiNCkQiUCnkRACQkPAAjVimgA09eeQkSgBikipQieilAzjbQAvjRDNiMQDFiJDpADQDpAACYCLQCeCOgIDTQgHDbjAChQjEClkQAAIgFAAgAguCTQoFgIlGjlQg7gpgvgqQjHizA3jLIAIgbQBGjJEoiVIArgVQE9ibGVABQHGAME2CzIAJAGQE7C1ApDdIACAOIADASQASC4jICWQg4AshIAoQldDJn7AEIgOAAgANr2dQidgDhvhJQhthKgBhrQgBhpBrhNQBphOCVAAQCUACBvBQQBtBPAJBrQAHBthoBHQhoBFiYAAIgGAAgArw21QicgDhlhHQhihIAPhnQAOhmB1hMQByhMCVABQCWABBjBOQBlBNgIBpQgIBphzBFQhxBDiXAAIgJAAg'
      )
    this.shape_46.setTransform(2.7715, 526.2248)
    this.shape_47 = new cjs.Shape()
    this.shape_47.graphics
      .f('#009933')
      .s()
      .p(
        'EAAFAnIQtygBxTABIyxADQG3p8DJqGQDcqhDjpyIADgJIDanqQBFiiA+iXQAuhwAphrQBfjtBXlmQBilVBXnRMAjiAAEQEGAGEEAMQAdDkAfDPIArEsQA0FVAuD5QAYB+AYBoQAtDDA1C4QBYEqB9EZIALAnQBVERBoEKQCmGsDUGaQBGCbBNCZQCwFcDdFRIoDAWQyoAvvJAAQkEAAj1gDgAMFM6QiUCMAcDSQAbDbDNCkQDUCmEQAAQERgCCUinQCMikhDjYQhCjTjUiKQjOiJjnAAIgHAAQjkAAiMCIgA5xMoQjMCMgvDRQgzDbCdClQClCpESABQETABDGimQC/ihAHjbQAJjTieiOQiYiLjpAAIgKgBQjjAAjCCHgArgyoIgrAVQkpCVhFDJIgJAbQg2DLDHCzQAuAqA7ApQFGDmIGAIIAOAAQH6gEFdjKQBIgoA4gsQDIiWgSi4IgCgSIgDgOQgojdk7i1IgKgGQk2iznFgMIgFAAQmTAAk6CagEAJNghDQhsBNACBpQAABrBuBKQBuBJCdADQCcACBrhHQBnhHgGhtQgJhrhuhPQhuhQiVgCQiVAAhoBOgEgPQghPQh0BMgPBmQgOBnBiBIQBlBHCbADQCdACB1hFQBzhFAIhpQAIhphmhNQhihOiWgBIgCAAQiUAAhyBLg'
      )
    this.shape_47.setTransform(4.225, 550.1445)
    this.shape_48 = new cjs.Shape()
    this.shape_48.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'EgyfAoMQHNqEDHqKQDXqpDoqBQABgEACgFQB0kBBljxQBFimA8ibQAshzAnhtQBYjzBOl5QBSlsBGnwQSDADSAACQEKADEKAFQAVDuAXDUQARCiARCTQArFdArEAQAWCAAXBpQAsDFA3C7QBaExCAEaQAGAUAFAUQBWEVBqEOQCqGwDeGgQBTCmBdCjQDTF0EDFoQkKANkBALQ4HBCyHgSQt6gBxqAAQpCAAqAAAg'
      )
    this.shape_48.setTransform(8.7, 563.2845)
    this.shape_49 = new cjs.Shape()
    this.shape_49.graphics
      .f('#006020')
      .s()
      .p(
        'AN+c9QjMilgcjdQgdjWCSiOQCMiMDnACQDmgBDOCLQDWCNBDDUQBFDbiMClQiTCpkQADQkOAAjVingA0zfUQkRgBilirQieimAyjeQAvjVDMiNQDFiMDnAEQDoAACXCPQCeCQgIDWQgFDdi+CjQjDClkPABIgFgBgAgzCrQoFgJlEjuQg7gqgtgsQi+i2A2jQIAIgbQBFjNEjiaIAqgWQE7igGXAAQHFANE0C6IAJAHQE2C8AlDjIACAOIABASQARC7jACYQg3AthIAqQlcDPn7AFIgOAAgANu24QidgEhuhMQhuhOABhxQgBhwBthRQBphRCWAAQCWACBuBUQBtBTAIByQAFBxhpBMQhqBJiaAAIgEAAgArw3SQibgEhmhLQhjhKAOhtQAOhrB1hRQByhPCWAAQCXACBjBRQBmBSgHBvQgIBuh0BIQhyBHiZAAIgHAAg'
      )
    this.shape_49.setTransform(3.9268, 539.7498)
    this.shape_50 = new cjs.Shape()
    this.shape_50.graphics
      .f('#009933')
      .s()
      .p(
        'EAAHAoNI/kgBIzCAAQHNqEDHqKQDXqpDoqBIADgJQB0kBBljxQBFimA8ibQAshzAnhtQBYjzBOl5QBSlsBGnwMAkDAAFQEKADEKAFQAUDuAYDUQARCiARCTQAqFdArEAQAXCAAXBpQAsDFA2C7QBbExB/EaIAMAoQBWEVBqEOQCpGwDeGgQBUCmBdCjQDTF0EDFoQkKANkBALQzCA0vTAAQkFAAj0gEgALbNsQiRCOAcDVQAdDdDLCmQDVCnEOAAQERgDCSipQCNilhGjbQhDjVjWiNQjNiLjnABIgGAAQjjAAiKCLgA6KNWQjMCOgvDUQgxDeCdCnQClCrESABQESACDEioQC+iiAGjdQAHjWieiRQiXiOjnAAIgMAAQjhAAjACHgAsByrIgrAWQkjCahEDNIgJAbQg2DPC+C3QAtArA7ArQFEDvIFAIIAPAAQH6gEFcjRQBIgpA3gtQDAiYgRi8IgBgRIgCgOQgkjkk3i8IgJgGQkzi7nGgMIgDAAQmUAAk6CggEAIyghzQhtBRABBwQgBBwBuBOQBuBNCdADQCcABBshKQBphLgFhyQgIhxhthUQhuhUiWgBIgCAAQiUAAhpBRgEgPzgh/Qh1BQgOBrQgOBtBkBLQBlBLCbADQCeACB1hIQBzhIAIhvQAHhuhlhSQhkhSiXgBIgCAAQiVAAhxBPg'
      )
    this.shape_50.setTransform(8.7, 563.2845)
    this.shape_51 = new cjs.Shape()
    this.shape_51.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'Egy7Ao0QHbqKDFqMQDUqvDrqJQACgEACgFQB1kFBkjyQBEioA6idQAsh1AlhwQBUj1BJmFQBHl6A8oCQSOADSKACQEMABENACQAQDzASDYQAOClAQCUQAkFjAqEDQAVCCAXBpQArDHA4C+QBbE0CBEcQAGATAGAUQBWEXBsEQQCsGzDjGkQBdCsBmCqQDoGCEaF2QkNAOkCALQ4aBFyLgSQt/gBx2gBQpHgBqHAAg'
      )
    this.shape_51.setTransform(11.4, 571.1862)
    this.shape_52 = new cjs.Shape()
    this.shape_52.graphics
      .f('#006020')
      .s()
      .p(
        'AN7deQjMingcjeQgejXCRiPQCKiODmACQDmgBDPCMQDVCOBEDWQBHDciLCnQiTCpkQAEQkOAAjUiogA0tf2QkRgCilisQieioAyjgQAvjVDLiPQDEiNDnADQDnABCXCRQCdCRgHDYQgFDfi9CjQjACnkOAAIgHAAgAg2C4QoGgIlCjzQg6grgtgtQi5i5A2jRIAJgbQBDjQEgidIAqgWQE7ilGWAAQHGANEyDAIAKAGQEyDAAiDnIACAOIACARQAOC+i7CaQg2AthIArQlcDUn6ADIgOAAgANw3JQiegEhthOQhthQABh0QgBhzBthUQBqhVCXABQCWACBuBWQBtBXAHB0QAEB1hpBOQhrBLiYAAIgGAAgArv3kQicgDhmhNQhjhNANhwQANhvB1hSQByhTCXABQCYABBjBUQBnBVgIByQgIBxhzBLQhyBIiYAAIgIAAg'
      )
    this.shape_52.setTransform(4.6261, 547.8498)
    this.shape_53 = new cjs.Shape()
    this.shape_53.graphics
      .f('#009933')
      .s()
      .p(
        'EAAHAo3I/0gCIzOgBQHbqKDGqMQDTqvDrqJIAEgJQB1kFBkjyQBEioA6idQAsh1AlhwQBUj1BImFQBIl6A9oCMAkXAAFIIYADQAQDzATDYQAOClAPCUQAlFjAqEDQAVCCAXBpQArDHA4C+QBbE0CBEcIAMAnQBWEXBrEQQCsGzDkGkQBdCsBlCqQDoGCEbF2QkNAOkCALQzXA3vcAAQkCAAjxgEgALCOKQiRCPAfDXQAcDeDMCnQDTCnEOAAQEQgDCTiqQCLimhHjcQhEjWjViOQjPiNjlABIgFAAQjjAAiJCNgA6ZNyQjLCQguDVQgzDgCfCnQCkCsERACQETACDCioQC+ijAEjfQAHjYidiSQiXiQjngBIgKAAQjhAAjACJgAsWytIgqAWQkfCdhEDQIgJAbQg2DSC6C5QAsAsA6ArQFCD0IHAJIANAAQH7gEFbjVQBIgqA2gtQC8iagPi+IgCgRIgBgOQgjjnkyjAIgKgGQkxjAnHgNIgCAAQmVAAk6CkgEAIigiPQhuBUABByQgBB0BtBQQBtBPCeADQCcACBthNQBphNgEh1QgHh0hthXQhuhXiWgBIgCAAQiVAAhpBUgEgQJgicQh1BTgNBuQgNBxBjBMQBmBNCcAEQCdACB1hKQB0hLAHhxQAIhyhmhVQhkhUiYgCIgCAAQiVAAhyBSg'
      )
    this.shape_53.setTransform(11.4, 571.1862)
    this.shape_54 = new cjs.Shape()
    this.shape_54.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'EgWggpIQWfADWaADQBCRSBwIMQBwINDRHKQBaErB0ElQD0JoFmJLQDvGHEiF6QkOAOkDAMQ4gBGyMgSQuAgCx7gBQpIgBqJAAQHpqaDDqaQDMqaDuqQQEHpECgnhQCknmBzwgg'
      )
    this.shape_54.setTransform(12.3, 573.8184)
    this.shape_55 = new cjs.Shape()
    this.shape_55.graphics
      .f('#006020')
      .s()
      .p(
        'AN6dpQjMimgcjgQgejXCQiQQCKiPDmACQDlgBDPCNQDWCOBEDXQBHDdiLCmQiSCqkQADIgCABQkMAAjUiogEgUrAgAQkRgCilisQieioAyjgQAujWDLiQQDEiMDnADQDmABCXCRQCdCSgGDYQgFDgi8CjQjACnkOAAIgHgBgAt/hBQkrjeBEkFQA9jxFXiwQFGisGoAHQGpANEyDBQFDDKAaD0QAfEClHDAQlgDYoDABQoGgJlCj1gANw3PQidgDhuhQQhthQABh2QAAhzBthVQBrhVCWAAQCXABBuBYQBtBXAGB2QAEB2hqBPQhqBLiZAAIgGAAgArv3qQicgDhmhOQhkhOANhxQANhwB1hTQBzhTCWAAQCYACBkBVQBnBWgIByQgIB0hzBKQhyBJiYAAIgIAAg'
      )
    this.shape_55.setTransform(4.8507, 550.5499)
    this.shape_56 = new cjs.Shape()
    this.shape_56.graphics
      .f('#009933')
      .s()
      .p(
        'EAAIApFI/7gDIzRgBQHpqaDDqaQDMqaDuqQQEGpEChnhQCjnmB0wgMAs4AAGQBDRSBwIMQBvINDSHKQBZErB1ElQD0JoFmJLQDvGHEiF6IoRAaQzYA4vcAAQkFAAjzgEgAK6OTQiQCQAeDYQAcDfDMCmQDUCoENAAQEQgECTiqQCLimhIjdQhEjWjWiPQjOiNjlABIgFAAQjjAAiICNgA6eN7QjLCQgvDWQgyDgCfCoQClCtERACQESACDDipQC8ijAEjgQAHjYidiSQiXiRjngBIgLAAQjgAAi/CJgAscyuQlYCwg8DxQhEEFErDfQFCD1IGAJQIDgBFgjZQFHjAgfkCQgaj0lEjKQkxjBmogNIgfAAQmWAAk6ClgEAIcgiZQhtBVAAB0QgBB1BtBQQBuBQCdADQCdACBshNQBqhOgEh3QgGh1hthYQhuhXiXgCIgCAAQiVAAhqBVgEgQQgimQh1BUgNBvQgNByBkBNQBlBOCcADQCdACB2hKQBzhLAIhzQAIhzhnhWQhkhViYgBIgCAAQiVAAhyBSg'
      )
    this.shape_56.setTransform(12.3, 573.8184)
    this.shape_57 = new cjs.Shape()
    this.shape_57.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'EgwWApQQFtqjDJqkQDGqMDZqGQDYosCgn0QC4pCCcuEQBXgyBWgzQUBACUBABQAjAsAjAqQCANcCXJBQB9H2C0HQQBZEkBnEhQDaJmEbJWQC/GWDbGOQhWBThUBSQhHAChGACQ2vAnzMgKQudgBwrgBQpHAAprgBg'
      )
    this.shape_57.setTransform(8.025, 558.1853)
    this.shape_58 = new cjs.Shape()
    this.shape_58.graphics
      .f('#006020')
      .s()
      .p(
        'AOFd8QjJiqgXjlQgYjaCWiTQCPiQDoABQDngBDJCQQDQCSA7DaQA+DjiOCpQiWCwkNACQkMAAjRiugEgVKAghQkOgBieixQiYirA0jlQAxjaDLiTQDFiPDnADQDoAACWCRQCcCUgNDcQgMDkjCCpQjHCtkNAAIgDAAgAuFhQQk0jzBEkpQA9kPFci7QFIizGpAEQGqAHE6C/QFODKAnEQQArEolHDhQliD4oTABQoUgGlOkHgANb48QibgBhvhIQhuhHgChlQgDhkBohHQBmhHCSAAQCTABBuBIQBuBKAMBkQAJBmhkBGQhmBFiYAAIgFgBgAr05KQibgChjhGQhhhGAQhjQAPhiB0hGQBxhGCTABQCTAABhBIQBkBHgHBkQgIBjhyBEQhyBEiZAAIgEAAg'
      )
    this.shape_58.setTransform(5.1054, 529.9498)
    this.shape_59 = new cjs.Shape()
    this.shape_59.graphics
      .f('#009933')
      .s()
      .p(
        'EABlApTI/IgCIyygBIgBAAQFtqjDJqkQDGqMDZqGQDYosCgn0QC4pCCcuEICthlMAoCAADIBGBWQCANcCXJBQB9H2C0HQQBZEkBnEhQDaJmEbJWQC/GWDbGOQhWBThUBSIiNAEQx9AfvwAAQkMAAkCgCgAMGNmQiWCSAYDbQAXDlDJCqQDRCtEMAAQENgCCWivQCOiqg+jiQg7jbjQiSQjJiPjnABIgDAAQjmAAiOCPgA57NYQjLCTgxDaQg0DlCYCrQCeCwEOABQEOABDJiuQDCioAMjlQANjbiciUQiWiRjogBIgGAAQjkAAjCCNgAr51QQlcC6g9EPQhEEpE0DzQFOEJIUAFQITgBFij4QFHjigrknQgnkRlOjJQk6i/mpgHIgTAAQmeAAlBCvgEAIpgj2QhoBHADBkQACBlBuBHQBvBHCbACQCbABBohGQBkhFgJhmQgMhlhuhJQhuhIiTgBIgCAAQiRAAhlBHgEgPdgj9Qh0BGgPBiQgQBjBhBFQBjBGCbACQCbABB0hEQByhEAIhkQAHhjhkhIQhhhHiTgBIgCAAQiSAAhwBGg'
      )
    this.shape_59.setTransform(8.025, 558.1853)
    this.shape_60 = new cjs.Shape()
    this.shape_60.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'EguaApcQEVqrDMqrQDCqCDKqAQC4oZCeoBQDHqGC6sUQA6hWA5hWQTtAATsABQA5AUA5ASQCtL/C4KBQCHHlCgHUQBXEgBeEeQDIJlDlJeQCcGgCpGdQgJCGgHCGQhGABhFABQ1fARz5gEQuygBvyAAQpHAApXAAg'
      )
    this.shape_60.setTransform(4.975, 546.996)
    this.shape_61 = new cjs.Shape()
    this.shape_61.graphics
      .f('#006020')
      .s()
      .p(
        'AONeJQjHisgUjoQgUjdCaiVQCUiRDpAAQDoAADFCRQDMCUA1DdQA3DniRCtQiXCykMABQkLAAjOiygEgVhAg3QkLAAiZizQiUitA2jpQAzjcDLiVQDEiQDpAAQDpABCVCRQCaCVgQDeQgSDojFCsQjNCxkLAAIgCAAgAuJhcQk8kBBFlDQA+klFfjCQFJi4GpACQGrADFBC9QFWDKAvEmQA0FBlID5QljEOoeABQofgDlVkVgAJC7LQhuhAgFhaQgFhYBlg+QBig9CPAAQCQAABvA+QBvA/APBYQANBahgBAQhkBAiaAAQiagBhwhBgAvy7RQhfhAARhZQARhWBzg+QBwg9CQABQCPAABgA9QBiA+gHBYQgIBZhxA/Qh0BAiZAAQiagChghAg'
      )
    this.shape_61.setTransform(5.3097, 515.2248)
    this.shape_62 = new cjs.Shape()
    this.shape_62.graphics
      .f('#009933')
      .s()
      .p(
        'EACoApdI+kgBIyeAAIAAAAQEVqrDMqrQDCqCDKqAQC4oZCeoBQDHqGC6sUIBzisMAnZAABIByAmQCtL/C4KBQCHHlCgHUQBXEgBeEeQDIJlDlJeQCcGgCpGdIgQEMIiLACQxGANwFAAIoNAAgAM8NFQiaCVAUDdQATDoDICtQDOCyELAAQELgBCYizQCRisg4jnQg0jdjMiVQjFiQjpAAQjoAAiUCQgA5hM/QjMCVgyDdQg3DoCUCtQCZCzEMABQEMAADNiyQDGisARjnQARjeiaiWQiWiRjpAAIgBAAQjoAAjDCPgArg3EQlfDCg9EkQhFFEE7EAQFWEXIfACQIeAAFjkQQFHj5g0lBQgvkmlWjJQlAi+mrgDIgJAAQmkAAlGC3gEAIzgk4QhlA+AFBXQAEBaBvBBQBwBBCaABQCZAABkhAQBhhAgOhaQgOhZhwg+Qhug+iQAAIgDAAQiNAAhhA9gEgO4gk7QhzA9gRBXQgSBZBfBAQBhBACZABQCaAABzg/QByg/AHhZQAHhYhhg+Qhgg+iQAAIgCAAQiPAAhuA9g'
      )
    this.shape_62.setTransform(4.975, 546.996)
    this.shape_63 = new cjs.Shape()
    this.shape_63.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'Egt2ApiQDhqvDOqvQC/p8DCp7QCkoPCeoJQDPquDMrRQAohsAphsQTgABTgAAQBGAFBGAEQDJLHDLKoQCNHbCTHXQBXEdBYEcQC9JkDFJjQCHGmCMGmQAlClAmClQhFAAhEAAQ0vAF0VgBQu/AAvPgBQpHAApLAAg'
      )
    this.shape_63.setTransform(6.9, 540.2841)
    this.shape_64 = new cjs.Shape()
    this.shape_64.graphics
      .f('#006020')
      .s()
      .p(
        'AOSeRQjHitgQjrQgSjeCdiWQCWiSDpAAQDpAADDCSQDJCWAxDfQAzDpiSCuQiZC1kKAAQkKAAjNi1gA8PeQQiQiuA3jqQAzjfDMiWQDEiRDpAAQDpAACWCSQCZCVgTDgQgVDpjICuQjQC1kKAAQkKAAiXi1gAuMhjQk/kJBFlTQA9kxFhjHQFKi8GqABQGsABFEC8QFaDJA1EzQA5FRlIEHQlkEcokABQolgBlbkegAI571Qhvg9gFhSQgGhRBig4QBgg4COABQCOgBBuA4QBxA4AQBRQAQBUheA8QhiA9iZAAQiZgBhxg9gAvz72Qhdg8AShTQAShRBzg4QBvg4COABQCOgBBeA4QBhA4gHBSQgIBShwA8Qh0A9iYAAQiaAAhfg9g'
      )
    this.shape_64.setTransform(5.427, 506.3998)
    this.shape_65 = new cjs.Shape()
    this.shape_65.graphics
      .f('#009933')
      .s()
      .p(
        'EACqApjI+OgBIySAAQDhqvDOqvQDAp8DBp7QCkoPCeoJQDPquDMrRIBRjYMAnAAABICLAJQDJLHDMKoQCNHbCTHXQBWEdBZEcQC9JkDEJjQCJGmCLGmIBKFKIiJAAQw8AEwsAAInbAAgAM3MyQidCWASDeQAQDrDHCuQDNC0EKAAQELAACYi1QCSiugyjpQgxjfjJiWQjEiSjpAAQjpAAiWCSgA54MwQjMCWgzDfQg3DqCRCuQCWC1EKAAQEKAADRi0QDHiuAVjqQAUjfiaiWQiViSjpAAIgCAAQjoAAjECRgAr24KQliDHg8ExQhGFTFAEJQFaEfIlABQIkgBFlkdQFHkHg5lRQg1kzlajJQlEi8mrgBIgFAAQmnAAlIC7gEAISglgQhiA4AGBRQAGBTBvA8QBwA9CZABQCZAABig9QBfg8gQhTQgRhShwg4Qhvg3iOAAIgDAAQiLAAhgA3gEgPIglhQhyA4gSBRQgTBTBdA8QBgA9CZAAQCZAABzg9QBwg8AIhSQAHhShgg4Qhfg3iOAAIgDAAQiMAAhuA3g'
      )
    this.shape_65.setTransform(6.9, 540.2841)
    this.shape_66 = new cjs.Shape()
    this.shape_66.graphics.f().s('#05104D').ss(18, 1, 1).p('EgUtgpjMApMAAAMAZOBTIMhbZAAAg')
    this.shape_66.setTransform(7.825, 538.05)
    this.shape_67 = new cjs.Shape()
    this.shape_67.graphics
      .f('#006020')
      .s()
      .p(
        'AOTeUQjGiugQjsQgRjeCeiXQCXiRDpAAQDqAADCCRQDICXAwDfQAyDqiTCvQiZC2kKAAQkKAAjNi2gA8SeUQiQiuA4jsQA0jeDLiXQDFiRDpAAQDpAACVCRQCaCXgUDfQgWDqjJCvQjRC2kKAAQkJAAiWi2gAuNhlQlBkNBGlXQA9k2FijJQFKi8GqAAQGsAAFFC8QFcDKA2E2QA7FXlIEMQlkEgonAAQonAAlckggAI28DQhvg7gGhRQgGhOBig2QBfg2CNABQCNgBBvA2QBwA2ASBOQAQBRhdA7QhhA8iZABQiZgBhxg8gAvz8DQhdg7AThRQAShOByg2QBvg2COABQCNgBBeA2QBgA2gHBOQgHBRhxA7QhzA8iYABQiZgBhfg8g'
      )
    this.shape_67.setTransform(5.4641, 503.4498)
    this.shape_68 = new cjs.Shape()
    this.shape_68.graphics
      .f('#009933')
      .s()
      .p(
        'EgtsApkMAY/hTIMApMAAAMAZOBTIgAMyMrQidCXARDeQAQDrDGCvQDMC2EKgBQEKABCai2QCSivgyjqQgvjfjJiXQjCiRjpAAQjpAAiYCRgA6CMrQjMCXg0DeQg3DrCQCvQCVC2EKgBQEKABDRi2QDIivAWjqQAUjfiZiXQiViRjqAAQjpAAjECRgAsB4iQlhDJg+E2QhFFXFBEMQFcEiInAAQInAAFkkiQFIkMg7lWQg2k2lcjKQlGi8mrAAIgCAAQmqAAlJC8gEAIFgltQhiA2AHBOQAGBRBvA7QBxA8CZABQCYgBBhg8QBeg7gRhRQgRhPhxg1Qhug2iOABIgCgBQiMAAheA2gEgPQgltQhyA2gTBOQgTBRBeA7QBeA8CZABQCZgBBzg8QBwg7AIhRQAHhPhgg1Qhfg2iNABIgCgBQiMAAhuA2g'
      )
    this.shape_68.setTransform(7.825, 538.05)
    this.shape_69 = new cjs.Shape()
    this.shape_69.graphics.f().s('#05104D').ss(18, 1, 1).p('EgVPgpoMAqIAAAUAM/ApoAH8AppMhTnAAAUAG5gppANrgpog')
    this.shape_69.setTransform(8.25, 529.425)
    this.shape_70 = new cjs.Shape()
    this.shape_70.graphics
      .f('#006020')
      .s()
      .p(
        'ANvezQi9ingNjiQgPjYCaiSQCViPDiABQDjgBC6CPQC/CSAoDYQArDiiRCnQiXCtj+AAQj/AAjCitgA7KezQiOinAwjiQAsjYDCiSQC8iPDiABQDjgBCTCPQCWCSgRDYQgTDii/CnQjGCtj/AAQj/AAiTitgAuCghQlBkQA+lhQA4lAFgjRQFKjHGtABQGvgBFFDHQFaDRAxFCQA0FflIEQQliEiodAAQoeAAlakigAI98AQhxhAgFhWQgGhVBkg6QBhg6CQAAQCQAABwA6QByA6AQBVQAPBXhgA/QhjBAibABQiagBhyhAgAwC8AQhghAAShWQARhVBzg6QBxg6CQAAQCQAABgA6QBiA6gGBVQgHBXhyA/Qh0BAiaABQibgBhhhAg'
      )
    this.shape_70.setTransform(5.562, 498.25)
    this.shape_71 = new cjs.Shape()
    this.shape_71.graphics
      .f('#009933')
      .s()
      .p(
        'EgpyAppUAG4gppANrgpoMAqIAAAUAM/ApoAH7AppgAMWOIQibCSAPDYQANDiC9CnQDCCtD/AAQD/AACXitQCRingsjiQgojYi/iSQi6iOjiAAQjjAAiUCOgA5VOIQjBCSgtDYQgwDiCOCnQCTCtD/AAQD/AADGitQC/inATjiQARjYiWiSQiSiOjkAAQjiAAi8COgAsI3bQlgDRg3FBQg/FgFBEQQFaEkIeAAQIeAAFikkQFIkQg1lfQgxlBlajSQlFjGmuAAIgCAAQmtAAlJDGgEAIKgldQhjA6AFBVQAGBXBwA/QByBACbABQCagBBjhAQBgg/gPhXQgQhVhyg6Qhvg5iRAAQiQAAhhA5gEgPngldQhyA6gSBVQgRBXBfA/QBhBACbABQCbgBBzhAQByg/AHhXQAHhVhjg6Qhgg5iQAAQiQAAhxA5g'
      )
    this.shape_71.setTransform(8.25, 529.425)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] })
        .to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }] }, 1)
        .to({ state: [{ t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }] }, 1)
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
        .to({ state: [] }, 1)
        .wait(28)
    )
    // mouth1
    this.instance_1 = new lib.Tween5('synched', 0)
    this.instance_1.setTransform(-1.2, 295.6)
    this.instance_2 = new lib.Tween9('synched', 0)
    this.instance_2.setTransform(1.25, 364.45)
    this.instance_2._off = true
    this.instance_3 = new lib.Symbol34('synched', 0)
    this.instance_3.setTransform(4.15, 308, 1.1172, 0.9009, 0, 0, 0, 0.1, 0.1)
    this.instance_3._off = true
    this.shape_72 = new cjs.Shape()
    this.shape_72.graphics
      .f()
      .s('#05104D')
      .ss(22, 1, 1)
      .p(
        'A5zrCQEpikDvgrQDvgrFyB5QFxB4DCgfQDEgfEHhTQDlhJGNA1QGNA0F0HGQFzHEjhFYQhVBziTAwQiTAvjfgpQjfgpkABvQkBBvimA2QioA2jDAdQjCAdingWQingXiigeQiigfj2ifQj3igiuAaQivAZl7gcQl7gdCypRQCInHEpilg'
      )
    this.shape_72.setTransform(7.1896, 284.6108)
    this.shape_73 = new cjs.Shape()
    this.shape_73.graphics
      .f('#1294E4')
      .s()
      .p(
        'AirOUQingXiigeQiigfj2ifQj3igiuAaQivAZl7gcQl7gdCypRQCInHEpilQEpikDvgrQDvgrFyB5QFxB4DCgfQDEgfEHhTQDlhJGNA1QGNA0F0HGQFzHEjhFYQhVBziTAwQiTAvjfgpQjfgpkABvQkBBvimA2QioA2jDAdQhvAQhlAAQhNAAhIgJgAythdQFWB4FTB2QDFBEFMgSQJLgSHfj2QDahwCTC1QB3CRBNgYQBYAiAbhLQAqh0jViCQhjg8hugiQjFg8jBBYQkHB4kSBWQi6A7mLAAQmQAAofkUQhcgvhoAFQkuASiqC4QgrEjDWi0QCiiHCEAAQAqAAAoAOg'
      )
    this.shape_73.setTransform(7.1896, 284.6108)
    this.shape_74 = new cjs.Shape()
    this.shape_74.graphics
      .f('#05104D')
      .s()
      .p(
        'AoJC9QlTh3lWh4Qiig6jWCzQjWC1ArkjQCqi4EugSQBogGBcAwQIfETGQABQGLAAC6g8QEShWEHh4QDBhYDFA8QBuAiBjA9QDVCBgqB0QgbBMhYgjQhNAYh3iRQiTi0jaBwQnfD2pLASQhFAEg/AAQjxAAicg2g'
      )
    this.shape_74.setTransform(7.6507, 280.2598)
    this.shape_75 = new cjs.Shape()
    this.shape_75.graphics
      .f()
      .s('#05104D')
      .ss(21, 1, 1)
      .p(
        'A7jrCQE9ikD/grQEAgrGKB5QGLB4DPgfQDRgfEZhTQD1hJGoA1QGoA0GNHGQGNHEjxFYQhbBzidAwQicAvjvgpQjugpkSBvQkSBviyA2QiyA2jRAdQjPAdizgWQiygXitgeQitgekIigQkHigi6AaQi6AZmVgcQmVgdC+pRQCSnHE9ilg'
      )
    this.shape_75.setTransform(7.1402, 290.7072)
    this.shape_76 = new cjs.Shape()
    this.shape_76.graphics
      .f('#1294E4')
      .s()
      .p(
        'Ai3OUQiygXitgeQitgekIigQkHigi6AaQi6AZmVgcQmVgdC+pRQCSnHE9ilQE9ikD/grQEAgrGKB5QGLB4DPgfQDRgfEZhTQD1hJGoA1QGoA0GNHGQGNHEjxFYQhbBzidAwQicAvjvgpQjugpkSBvQkSBviyA2QiyA2jRAdQh2AQhrAAQhTAAhOgJgAz+hdQFsB4FrB2QDSBEFjgSQJzgSIAj2QDohwCeC1QB/CRBRgYQBeAiAdhLQAuh0jkiCQhqg8h2giQjSg8jOBYQkZB4kkBWQjHA7mmAAQmrAApEkUQhigvhvAFQlEASi1C4QgtEkDki1QCtiHCNAAQAtAAArAOg'
      )
    this.shape_76.setTransform(7.1402, 290.7072)
    this.shape_77 = new cjs.Shape()
    this.shape_77.graphics
      .f('#05104D')
      .s()
      .p(
        'AotC9Qlqh3lth4Qitg6jkCzQjkC1AtkjQC1i4FDgSQBvgGBiAwQJEETGrABQGnAADGg8QEkhWEZh4QDPhYDSA8QB1AiBqA9QDkCBgtB0QgdBMhegjQhSAYh/iRQidi0jpBwQn/D2p0ASQhJAEhEAAQkBAAing2g'
      )
    this.shape_77.setTransform(7.6519, 286.3598)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }] })
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .to({ state: [{ t: this.shape_74 }, { t: this.shape_73 }, { t: this.shape_72 }] }, 1)
        .to({ state: [{ t: this.shape_77 }, { t: this.shape_76 }, { t: this.shape_75 }] }, 1)
        .to({ state: [] }, 1)
        .wait(4)
    )
    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
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
        .wait(10)
        .to({ _off: false, scaleX: 0.8219, scaleY: 0.9798, y: 278.3 }, 0)
        .wait(1)
        .to({ regY: 0.1, scaleX: 0.8656, scaleY: 0.9783, x: 0.1, y: 293.05 }, 0)
        .wait(1)
        .to({ scaleX: 0.8909, scaleY: 0.9775, x: 0.9, y: 301.5 }, 0)
        .wait(1)
        .to({ regY: 0, scaleX: 0.9036, scaleY: 0.977, x: 1.35, y: 305.7 }, 0)
        .wait(1)
        .to({ scaleX: 0.9073, scaleY: 0.9769, x: 1.4, y: 306.95 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .to({ _off: true }, 1)
        .wait(19)
    )
    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(14)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ scaleX: 0.9406, scaleY: 1.0152, x: 3.1, y: 349 }, 0)
        .wait(1)
        .to({ scaleX: 0.889, scaleY: 1.0284, x: 4.7, y: 335.6 }, 0)
        .wait(1)
        .to({ regY: 0.1, scaleX: 0.8454, scaleY: 1.0395, x: 6.05, y: 315.4 }, 0)
        .wait(1)
        .to({ regY: 0, scaleX: 0.8098, scaleY: 1.0486, x: 7.15, y: 298.7 }, 0)
        .wait(1)
        .to({ scaleX: 0.782, scaleY: 1.0557, x: 8.05, y: 285.75 }, 0)
        .wait(1)
        .to({ regX: 0.1, regY: 0.1, scaleX: 0.7622, scaleY: 1.0608, x: 8.75, y: 276.65 }, 0)
        .wait(1)
        .to({ regX: 0, regY: 0, scaleX: 0.7504, scaleY: 1.0638, x: 9.05, y: 271 }, 0)
        .wait(1)
        .to({ scaleX: 0.7464, scaleY: 1.0648, x: 9.15, y: 269.15 }, 0)
        .wait(1)
        .to({ scaleX: 0.83, scaleY: 0.8815, y: 274.2 }, 0)
        .to({ _off: true }, 1)
        .wait(28)
    )
    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(33)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ scaleX: 0.9958, scaleY: 1.0186, x: 4.2, y: 307.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.8851, scaleY: 1.1262, x: 4.15 }, 0)
        .wait(1)
        .to({ regX: 0, regY: 0, scaleX: 0.7849, scaleY: 1.2234, x: 4.05, y: 307.9 }, 0)
        .wait(1)
        .to({ y: 300.85 }, 0)
        .wait(1)
        .to({ y: 293.95 }, 0)
        .wait(1)
        .to({ y: 287.3 }, 0)
        .wait(1)
        .to({ y: 280.85 }, 0)
        .wait(1)
        .to({ y: 274.6 }, 0)
        .wait(1)
        .to({ y: 268.5 }, 0)
        .wait(1)
        .to({ y: 262.65 }, 0)
        .wait(1)
        .to({ y: 256.95 }, 0)
        .wait(1)
        .to({ y: 251.5 }, 0)
        .to({ _off: true }, 1)
        .wait(6)
    )
    // Layer_5 (mask)
    var mask = new cjs.Shape()
    mask._off = true
    var mask_graphics_0 = new cjs.Graphics().p(
      'EAf9BPiQi4gOj/g6QkmhJiTgjQkDg8i3gRQifgOjHAIQh4AFjuAVI/YCwQnBAnj8glQmBg4jzjvQiRiPhejPQhdjPgajnQgKhbABhbIglh6QlayNg8knQg+knA3k0QA2k0CajrQjxjWiDk/QiMlTAjlVQAilPDSlNQCJjbEnlEQCdisBVhZQCIiOBzhqQA7g2AqgfQA4gqA1gVQA4gWBJgIQAugEBXAAMA7mAABQBdAEA0ASQBxAqBwCZQBqCQAIAJQBGBQBEAUQAqANA6gHQAhgDBDgNQC5gdC4A+QC3A+CUCMQCVCNBiDNQBhDNAdDnQALB8AJA9QAPBpAhBDQAgBCBAA7QAhAgBWBAQFYD+ErFTQDLDnB+DbQCZEMA1ESQAyD6gjEGQgiEFhuDaQhuDZiuCXQitCWjJAzQAnFGhDFLQhCFHidEMQicEIjmCzQjkCykEA+QiVAjipAAQg7AAg9gEg'
    )
    var mask_graphics_32 = new cjs.Graphics().p(
      'EAf9A42Qi4gOj/g6QkmhJiTgjQkDg8i3gRQifgOjHAIQh4AFjuAVI/YCwQnBAnj8glQmBg4jzjvQiRiPhejPQhdjPgajnQgKhbABhbIglh6QlayNg9knQg9knA3k0QA2kzCajrQjxjWiDk/QiMlTAjlWQAilPDSlNQCJjbEnlEQCdisBVhZQCIiOBzhqQA7g2AqgfQA4gqA1gVQA4gWBJgIQAugEBXAAUAXHgCKAkSAAfQDCgJBJA0QBJA0BkBMQBjBLA5B8QA4B8CtBNIAKgDQC5gdC4A+QC3A+CUCMQCVCNBiDNQBhDNAdDnQALB8AJA9QAPBpAhBDQAgBCBAA7QAhAgBWBAQFYD/ErFTQDLDnB+DbQCZEMA1ERQAyD6gjEGQgiEFhuDaQhuDZiuCXQitCWjJAzQAnFGhDFLQhCFHidEMQicEIjmCzQjkCykEA+QiVAjipAAQg7AAg9gEg'
    )
    var mask_graphics_48 = new cjs.Graphics().p(
      'EAf9BKbQi4gOj/g6QkmhKiTgiQkDg9i3gQQifgPjHAJQh4AFjuAVI/YCwQnBAnj8glQmBg5jzjvQiRiOhejQQhdjOgajoQgKhbABhbIglh6QlayMg8knQg+knA3k1QA2k0CajrQjxjWiDk/QiMlSAjlVQAilPDSlOQCJjaEnlEQCdisBVhaQCIiOBzhpQA7g2AqgfQA4gqA1gVQA4gXBJgHQAugFBXAAMA7mAACQBdAEA0ASQBxApBwCZQBqCQAIAKQBGBPBEAVQAqAMA6gGQAhgEBDgMQC5gdC4A9QC3A+CUCNQCVCNBiDNQBhDNAdDnQALB7AJA9QAPBpAhBDQAgBCBAA8QAhAfBWBBQFYD/ErFRQDLDnB+DbQCZENA1ERQAyD6gjEGQgiEFhuDaQhuDaiuCWQitCXjJAzQAnFGhDFKQhCFIidELQicEIjmC0QjkCxkEA/QiVAjipAAQg7AAg9gEg'
    )
    var mask_graphics_50 = new cjs.Graphics().p(
      'EAf9BKbQi4gOj/g6QkmhKiTgiQkDg9i3gQQifgPjHAJQh4AFjuAVI/YCwQnBAnj8glQmBg5jzjvQiRiOhejQQhdjOgajoQgKhbABhbIglh6QlayMg8knQg+knA3k1QA2k0CajrQjxjWiDk/QiMlSAjlVQAilPDSlOQCJjaEnlEQCdisBVhaQCIiOBzhpQA7g2AqgfQA4gqA1gVQA4gXBJgHQAugFBXAAMA7mAACQBdAEA0ASQBxApBwCZQBqCQAIAKQBGBPBEAVQAqAMA6gGQAhgEBDgMQC5gdC4A9QC3A+CUCNQCVCNBiDNQBhDNAdDnQALB7AJA9QAPBpAhBDQAgBCBAA8QAhAfBWBBQFYD/ErFRQDLDnB+DbQCZENA1ERQAyD6gjEGQgiEFhuDaQhuDaiuCWQitCXjJAzQAnFGhDFKQhCFIidELQicEIjmC0QjkCxkEA/QiVAjipAAQg7AAg9gEg'
    )
    this.timeline.addTween(
      cjs.Tween.get(mask)
        .to({ graphics: mask_graphics_0, x: 36.9233, y: 509.4377 })
        .wait(32)
        .to({ graphics: mask_graphics_32, x: 36.9249, y: 654.6319 })
        .wait(16)
        .to({ graphics: mask_graphics_48, x: 36.9233, y: 476.6877 })
        .wait(2)
        .to({ graphics: mask_graphics_50, x: 36.9233, y: 476.6877 })
        .wait(1)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(1)
    )
    // dollar2
    this.shape_78 = new cjs.Shape()
    this.shape_78.graphics.f().s('#05104D').ss(18, 1, 1).p('Egn2AprUAEFgprAORgpqMAqmAAAUANKApqAFnAprg')
    this.shape_78.setTransform(8.45, 524.95)
    this.shape_79 = new cjs.Shape()
    this.shape_79.graphics
      .f('#006020')
      .s()
      .p(
        'ANdfCQi4ijgNjeQgNjUCYiRQCUiLDfAAQDgAAC1CLQC6CRAlDUQAnDdiQCkQiVCpj5gBQj6ABi8ipgA6mfCQiOijAtjeQApjUC9iRQC3iLDfAAQDgAACRCLQCVCRgQDUQgSDdi6CkQjBCpj5gBQj5ABiSipgAt8AAQlCkRA7llQA1lGFfjWQFKjKGuAAQGxAAFFDKQFZDXAuFHQAxFjlIERQlhEkoYABQoZgBlZkkgAJA7/QhxhBgFhaQgGhYBmg8QBig8CRABQCRgBBxA8QByA8APBYQAPBahiBBQhkBCibABQicgBhyhCgAwJ7/QhhhBARhaQAQhYB0g8QBxg8CRABQCSgBBhA8QBjA8gGBYQgHBahyBBQh0BCicABQicgBhhhCg'
      )
    this.shape_79.setTransform(5.6097, 495.5)
    this.shape_80 = new cjs.Shape()
    this.shape_80.graphics
      .f('#009933')
      .s()
      .p(
        'Egn2AprUAEFgprAORgpqMAqlAAAUANLApqAFnAprgAMHO2QiYCRANDTQAMDeC5CjQC8CpD6AAQD4AACWipQCQijgnjdQgljVi6iQQi2iMjfAAQjgAAiTCMgA49O2Qi+CRgpDTQgsDeCOCjQCSCpD5AAQD5AADBipQC6ijASjdQAPjViUiQQiRiMjgAAQjfAAi3CMgAsL24QlfDWg1FFQg7FlFBETQFaEkIYAAQIZAAFhkkQFIkTgxliQgulIlZjWQlFjLmwAAIgCAAQmuAAlJDLgEAIOglUQhmA7AFBYQAFBaByBBQByBCCbACQCcgCBkhCQBhhBgOhaQgPhXhzg8Qhwg8iRAAQiRAAhiA8gEgPyglUQhzA7gRBYQgRBaBhBBQBiBCCcACQCcgCB0hCQByhBAHhaQAGhXhjg8Qhig8iRAAQiRAAhyA8g'
      )
    this.shape_80.setTransform(8.45, 524.95)
    this.shape_81 = new cjs.Shape()
    this.shape_81.graphics.f().s('#05104D').ss(18, 1, 1).p('Egk6ApuUgAIgpuAPJgpuMArSAAAUANcApuACGApug')
    this.shape_81.setTransform(8.7717, 554.45)
    this.shape_82 = new cjs.Shape()
    this.shape_82.graphics
      .f('#006020')
      .s()
      .p(
        'ANCfZQixiegLjXQgLjOCViOQCSiJDaAAQDbAACvCJQCzCNAgDQQAhDViOCfQiUCijxAAQjxAAi0iigA5wfZQiMieAmjXQAkjOC2iOQCxiJDaAAQDbAACPCJQCSCNgODQQgPDVizCfQi5CijxAAQjwAAiRiigAt0AzQlCkUA2lsQAxlNFdjdQFKjSGxAAQGzAAFFDSQFYDeAqFPQAsFplJEUQlfEmoRAAQoSAAlYkmgAJF79QhyhFgFheQgFhcBnhAQBkg+CUAAQCTAABxA+QBzBAAOBdQAOBdhjBFQhmBFidABQidgBhzhFgAwU79QhjhFAQheQAQhcB0hAQByg+CUAAQCTAABjA+QBlBAgGBdQgHBdhyBFQh2BFidABQidgBhjhFg'
      )
    this.shape_82.setTransform(5.6798, 527.6)
    this.shape_83 = new cjs.Shape()
    this.shape_83.graphics
      .f('#009933')
      .s()
      .p(
        'Egk6ApvUgAIgpvAPJgpuMArSAAAUANcApuACGApvgALxP7QiVCOALDPQALDWCxCeQC0CiDxAAQDxAACUiiQCOieghjWQggjPiziOQiviJjbAAQjaAAiSCJgA4bP7Qi2COgkDPQgmDWCMCeQCRCiDwAAQDxAAC5iiQCzieAPjWQAOjPiSiOQiPiJjbAAQjaAAixCJgAsR2EQldDdgxFOQg2FrFCEWQFYElISAAQIRAAFfklQFJkWgslpQgqlPlYjeQlFjRmyAAIgCAAQmxAAlJDRgEAIRglIQhnA/AFBcQAFBfByBEQBzBFCdABQCdgBBmhFQBjhEgOheQgOhdhzg/Qhxg+iTgBQiUABhkA+gEgQCglIQh0A/gQBcQgQBfBjBEQBjBFCdABQCdgBB2hFQByhEAHheQAGhdhlg/Qhjg+iTgBQiUABhyA+g'
      )
    this.shape_83.setTransform(8.7717, 554.45)
    this.shape_84 = new cjs.Shape()
    this.shape_84.graphics.f().s('#05104D').ss(18, 1, 1).p('EgV5gpxMAr+AAAUANuApxgBaApyMhD+AAAUgEVgpyAQBgpxg')
    this.shape_84.setTransform(6.5468, 583.925)
    this.shape_85 = new cjs.Shape()
    this.shape_85.graphics
      .f('#006020')
      .s()
      .p(
        'AMmfwQipiZgJjPQgKjKCTiKQCQiHDVAAQDWAACoCHQCsCKAbDKQAcDPiNCZQiSCcjoAAQjpAAiticgA46fwQiLiZAhjPQAejKCviKQCqiHDVAAQDWAACOCHQCPCKgLDKQgODPisCZQiwCcjpAAQjoAAiPicgAtsBmQlCkXAxlyQAtlVFbjkQFKjZGzABQG1gBFGDZQFWDkAmFYQAnFvlJEXQldEnoLAAQoKAAlXkngAJK77QhzhIgEhjQgFhgBphDQBlhCCWABQCVgBByBCQB0BDANBhQANBihlBIQhoBIieABQiegBh0hIgAwf77QhlhIAPhjQAPhgB1hDQBzhCCWABQCVgBBlBCQBmBDgFBhQgHBihzBIQh2BIifABQiegBhlhIg'
      )
    this.shape_85.setTransform(5.7413, 559.65)
    this.shape_86 = new cjs.Shape()
    this.shape_86.graphics
      .f('#009933')
      .s()
      .p(
        'EghlApyUgEVgpyAQBgpxMAr+AAAUANuApxgBaApygAL1RBQiTCKAKDKQAJDPCpCZQCtCcDpAAQDoAACSicQCNiZgcjPQgbjKisiKQioiHjWAAQjVAAiQCHgA3fRBQivCKgeDKQghDPCLCZQCPCcDoAAQDpAACwicQCsiZAOjPQALjKiPiKQiOiHjWAAQjVAAiqCHgAr91PQlbDkgtFWQgxFyFCEYQFXEmIKAAQILAAFdkmQFJkYgnlwQgmlYlWjkQlGjZm1ABIgBAAQmzAAlJDYgEAIvgk7QhpBCAFBgQAEBkBzBHQB0BICeABQCegBBohIQBlhHgNhjQgNhhh0hCQhyhCiVAAQiWAAhlBCgEgP5gk7Qh1BCgPBgQgPBkBlBHQBlBICeABQCfgBB2hIQBzhHAHhjQAFhhhmhCQhlhCiVAAQiWAAhzBCg'
      )
    this.shape_86.setTransform(6.5468, 583.925)
    this.shape_87 = new cjs.Shape()
    this.shape_87.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'EghxApQQhKsKAksMQAirDB9q6QBhoVCUoPQB7m2Cdm2QBLi+BTi9QPgAAPfAAQGPAPGOARQAaBNAZBMQCjHtCDH0QCvKoBsKyQB5MPAoMMQgBJHgyJHUghxAAAghwAABg'
      )
    this.shape_87.setTransform(5.6249, 576.55)
    this.shape_88 = new cjs.Shape()
    this.shape_88.graphics
      .f('#006020')
      .s()
      .p(
        'A49fMQiLiaAhjQQAfjKCviLQCriHDVAAQDXAACNCHQCQCKgMDLQgODQitCaQixCdjpAAQjoAAiPidgAMnfMQipiagJjRQgJjKCTiLQCQiHDWAAQDWAACoCHQCtCKAaDLQAcDRiNCaQiTCdjpAAQjoAAiuidgAtpBLQlBkRAzloQAvlNFZjdQFIjTGvAAQGxAAFEDSQFUDeApFOQAqFmlHESQlcEhoKABQoLAAlVkigAJD7kQhyhGgFhgQgEheBnhAQBkhACTAAQCUAABxBAQByBAAOBfQANBfhkBGQhlBGidABQidgBhyhGgAwU7kQhjhFAPhhQAQheBzhAQByhACUAAQCTAABjBAQBmBBgGBeQgHBghyBFQh1BGicABQidgBhkhGg'
      )
    this.shape_88.setTransform(5.4397, 551.625)
    this.shape_89 = new cjs.Shape()
    this.shape_89.graphics
      .f('#009933')
      .s()
      .p(
        'EghxApQQhKsKAksMQAirEB9q5QBhoVCUoPQB7m2Cdm2QBLi+BTi+Ie/AAQGPAPGOASIAzCZQCjHtCDHzQCvKpBsKyQB5MPAoMLQgBJHgyJIMhDhAABgA3bQUQivCKgfDKQghDRCLCaQCPCdDoAAQDpAACxidQCtiaAOjQQAMjLiQiKQiNiHjXAAQjVAAirCHgAL9QTQiTCKAJDLQAJDQCpCbQCuCcDoAAQDpAACTicQCNibgcjQQgajLitiLQioiGjWAAQjWAAiQCHgArx1SQlZDegvFNQgzFoFBESQFVEgILAAQIKAAFckhQFHkSgqlmQgplOlUjeQlEjTmxABIgCAAQmuAAlHDSgEAItgkhQhnBAAEBdQAFBhByBGQByBGCdABQCdgBBlhGQBkhGgNhgQgOhehyhAQhxhAiUAAQiTAAhkBAgEgPngkhQhzBAgQBdQgPBiBjBFQBkBFCdACQCcgBB1hGQByhFAHhhQAGhehmhAQhjhAiTAAQiUAAhyBAg'
      )
    this.shape_89.setTransform(5.6249, 576.55)
    this.shape_90 = new cjs.Shape()
    this.shape_90.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'EgiXAkRQgh1UBWpzQA4mxBUlwQAPhCAQhCQALgtAKgrQBnmgCHmUQAFgPAFgPQBCi6BKi4QC5hmCphYQCahQCbhNQBWgRBVgQQF8hKF6hKQAaAAAaAAQGAAJGAAJQAKAKAKAJQAlAiAlAhQDLC8DDC9QAgA4AgA3QAuBQAsBQQA+BvA8BwQBIDWBCDZQBFDsA+DwQAQA/AQA/QBWFlBHFxQANBFAMBEQAxE0AgE7QAbFyADF8QABASAAASQgCCng5ELUgf7AExgkCgEDg'
      )
    this.shape_90.setTransform(5.8054, 542.3719)
    this.shape_91 = new cjs.Shape()
    this.shape_91.graphics
      .f('#006020')
      .s()
      .p(
        'A5JdOQiLieAjjUQAgjNCxiMQCuiHDWAAQDYAACNCGQCQCLgODOQgPDUiuCeQi0CijqAAQjpAAiQihgAMrdLQiqidgHjWQgKjNCWiLQCQiIDXABQDYgBCpCHQCtCKAaDOQAbDWiOCeQiVCijqAAQjqAAiuiigAthgUQk6j+A6lHQA1krFTjGQE/i+GhABQGigBE+C9QFQDFAxEtQA0FDlAD+QlXEOoKACQoKAAlSkMgAvr6RQheg+AQhXQAQhUBvg6QBug6CMAAQCMAABfA6QBhA7gHBUQgGBVhuA/QhwA/iXAAQiWgBhfg+gAIp6RQhug/gGhXQgFhTBig6QBfg5CNgBQCMAABtA6QBuA6APBVQAOBVhdA/QhgA+iXABQiWgBhvg+g'
      )
    this.shape_91.setTransform(4.397, 522.85)
    this.shape_92 = new cjs.Shape()
    this.shape_92.graphics
      .f('#009933')
      .s()
      .p(
        'EgiXAkRQgh1UBWpzQA4mxBUlwIAfiEIAVhYQBnmgCHmUIAKgeQBCi6BKi4QC5hmCphYQCahQCbhNICrghIL2iUIA0AAIMAASIAUATIBKBDQDLC8DDC9IBABvQAuBQAsBQQA+BvA8BwQBIDWBCDZQBFDsA+DwIAgB+QBWFlBHFxIAZCJQAxE0AgE7QAbFyADF8IABAkQgCCng5ELQxRClydAAQvrAAwkh3gAxrM5QjWAAitCHQiyCMggDMQgiDVCLCdQCPCiDpAAQDrAACziiQCvieAPjUQANjOiPiLQiNiGjXAAIgCAAgARfM1QjYAAiQCIQiVCLAJDNQAIDVCqCeQCuCiDqAAQDqAACUiiQCPiegbjWQgajOiuiLQioiGjWAAIgCAAgAro0OQlSDHg1ErQg6FHE6D9QFRENILAAQIJgCFYkOQFAj+g1lEQgxkslQjGQk+i8mhABIgCAAQmgAAk/C8gEgPIgh3QhvA6gRBUQgPBXBdA+QBfA+CXABQCWgBBxg/QBtg+AHhWQAGhUhgg6Qhfg6iMAAQiNAAhtA6gEAIEgh3QhiA6AFBTQAGBXBuA+QBuA/CXABQCWgBBgg/QBeg+gOhWQgPhUhug7Qhtg5iNAAQiMAAhfA6g'
      )
    this.shape_92.setTransform(5.8054, 542.3719)
    this.shape_93 = new cjs.Shape()
    this.shape_93.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'EgiXAkRQgh1UBWpzQA4mxBUlwQAPhCAQhCQALgtAKgrQBnmgCHmUQBMjYBKi4QC5hmCphYQCahQCbhNQBWgRBVgQQF8hKF6hKQAaAAAaAAQGAAJGAAJQAKAKAKAJQAlAiAlAhQDLC8DDC9QAgA4AgA3QAuBQAsBQQA+BvA8BwQBIDWBCDZQBFDsA+DwQAQA/AQA/QBWFlBHFxQANBFAMBEQAxE0AgE7QAbFyADF8QABASAAASQgCCng5ELUgf7AExgkCgEDg'
      )
    this.shape_93.setTransform(5.8054, 533.7219)
    this.shape_94 = new cjs.Shape()
    this.shape_94.graphics
      .f('#006020')
      .s()
      .p(
        'A5JdOQiLieAjjVQAgjMCxiMQCuiHDWAAQDYAACNCGQCQCLgODOQgPDUiuCeQi0CijqAAQjpAAiQihgAMrdLQiqidgHjWQgKjNCWiLQCQiIDXABQDYgBCpCHQCtCKAaDOQAbDWiOCeQiVCijqAAQjqAAiuiigAthgVQk6j9A6lHQA1krFTjGQE/i9GhAAQGiAAE+C8QFQDFAxEtQA0FDlAD+QlXEOoKACQoKAAlSkNgAvr6RQheg+AQhXQAQhUBvg6QBug5CMgBQCMABBfA5QBhA6gHBUQgGBWhuA/QhwA/iXABQiWgBhfg/gAIp6RQhug/gGhXQgFhTBig6QBfg5CNgBQCMAABtA6QBuA6APBUQAOBWhdA/QhgA+iXABQiWgBhvg+g'
      )
    this.shape_94.setTransform(4.397, 514.2)
    this.shape_95 = new cjs.Shape()
    this.shape_95.graphics
      .f('#009933')
      .s()
      .p(
        'EgiXAkRQgh1UBWpzQA4mxBUlwIAfiEIAVhYQBnmgCHmUQBMjYBKi4QC5hmCphYQCahQCbhNICrghIL2iUIA0AAIMAASIAUATIBKBDQDLC8DDC9IBABvQAuBQAsBQQA+BvA8BwQBIDWBCDZQBFDsA+DwIAgB+QBWFlBHFxIAZCJQAxE0AgE7QAbFyADF8IABAkQgCCng5ELQxRClydAAQvrAAwkh3gAxrM5QjWAAitCHQiyCMggDMQgiDVCLCdQCPCiDpAAQDrAACziiQCvieAPjUQANjOiPiLQiNiGjXAAIgCAAgARfM1QjYAAiQCIQiVCLAJDNQAIDVCqCeQCuCiDqAAQDqAACUiiQCPiegbjWQgajOiuiLQioiGjWAAIgCAAgAro0OQlSDHg1ErQg6FHE6D9QFRENILAAQIJgCFYkOQFAj+g1lEQgxkslQjGQk+i8mhABIgCAAQmgAAk/C8gEgPIgh3QhvA6gRBUQgPBXBdA+QBfA+CXABQCWgBBxg/QBtg+AHhWQAGhUhgg6Qhfg6iMAAQiNAAhtA6gEAIEgh3QhiA6AFBTQAGBXBuA+QBuA/CXABQCWgBBgg/QBeg+gOhWQgPhUhug7Qhtg5iNAAQiMAAhfA6g'
      )
    this.shape_95.setTransform(5.8054, 533.7219)
    this.shape_96 = new cjs.Shape()
    this.shape_96.graphics
      .f('#006020')
      .s()
      .p(
        'A5JdOQiLieAjjUQAgjNCxiMQCuiHDWAAQDYAACNCGQCQCLgODOQgPDViuCdQi0CijqAAQjpAAiQihgAMrdMQiqiegHjWQgKjNCWiLQCQiHDXgBQDYAACpCHQCtCKAaDOQAbDWiOCeQiVCijqAAQjqAAiuihgAthgUQk6j+A6lHQA1krFTjGQE/i+GhABQGigBE+C9QFQDFAxEsQA0FElAD+QlXEOoKACQoKAAlSkMgAvr6RQheg+AQhXQAQhUBvg6QBug6CMAAQCMAABfA6QBhA6gHBVQgGBWhuA9QhwBAiXAAQiWgBhfg+gAIp6SQhug+gGhWQgFhUBig6QBfg5CNgBQCMABBtA5QBuA6APBVQAOBVhdA+QhgA/iXABQiWgBhvg/g'
      )
    this.shape_96.setTransform(4.397, 509)
    this.shape_97 = new cjs.Shape()
    this.shape_97.graphics
      .f('#006020')
      .s()
      .p(
        'A5JdNQiLidAjjVQAgjMCxiMQCuiHDWAAQDYAACNCHQCQCKgODOQgPDUiuCeQi0CijqAAQjpAAiQiigAMrdLQiqiegHjUQgKjOCWiLQCQiHDXAAQDYgBCpCGQCtCLAaDPQAbDViOCeQiVCijqAAQjqAAiuiigAthgVQk6j9A6lGQA1ksFTjHQE/i9GhABQGigBE+C8QFQDGAxEtQA0FDlAD/QlXENoKACQoKAAlSkNgAvr6RQheg+AQhXQAQhUBvg6QBug5CMgBQCMABBfA5QBhA6gHBUQgGBXhuA+QhwA+iXACQiWgBhfg/gAIp6RQhug/gGhXQgFhTBig6QBfg6CNAAQCMAABtA5QBuA7APBUQAOBWhdA/QhgA+iXABQiWgBhvg+g'
      )
    this.shape_97.setTransform(4.397, 507.25)
    this.shape_98 = new cjs.Shape()
    this.shape_98.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'EgJ5gkgQGXAAGWAAQF6AIF6AKQAwAoAvAoQCoCPCiCQQBeDBBZDIQBeDXBXDeQCOF3CDGiQATA/ATBAQCZJjBDKwQACASACARQAjIxACJcUggUABXgndgBqQAF1UB6qjQALhAANhBQBZnEB9mkQA/jSBHjJQBQjNBVjHQBRizBVitQBNgnBNglQFUilFTing'
      )
    this.shape_98.setTransform(3.725, 514.341)
    this.shape_99 = new cjs.Shape()
    this.shape_99.graphics
      .f('#006020')
      .s()
      .p(
        'A5YavQiKiiAkjaQAhjQC1iLQCwiIDYAAQDagBCMCHQCQCKgPDRQgRDaixCjQi2CnjsABQjrgBiQimgAMwarQirijgGjaQgJjSCXiMQCSiIDYAAQDagBCqCHQCuCKAaDTQAaDciQCjQiWCojsABQjsgBivingAtWiOQkyjkBDkbQA8kDFLipQE1iiGOAAQGPAAE3CfQFKCoA8ECQBBEYk3DmQlSD2oJAEQoKAAlMj0gAu44qQhYg0ARhLQAShIBpgyQBogyCEABQCDgBBZAyQBaAzgGBIQgHBJhoA1QhrA2iPAAQiPAAhYg2gAII4rQhpg1gGhJQgGhIBbgyQBZgyCEAAQCEABBnAwQBpAzARBIQAPBKhWA0QhZA2iPABQiPgBhqg2g'
      )
    this.shape_99.setTransform(3.0775, 486.9)
    this.shape_100 = new cjs.Shape()
    this.shape_100.graphics
      .f('#009933')
      .s()
      .p(
        'Egj4AjnQAF1UB6qjIAYiBQBZnEB9mkQA/jSBHjJQBQjNBVjHQBRizBVitICahMIKnlMIMtAAQF6AIF6AKIBfBQQCoCPCiCQQBeDBBZDIQBeDXBXDeQCOF3CDGiIAmB/QCZJjBDKwIAEAjQAjIxACJcQunAnwEAAQzeAA1og6gAxnI+QjXAAiwCHQi1CMgiDQQgkDaCLCiQCPCmDrABQDtgBC2inQCxijAQjaQAQjSiQiKQiMiFjYAAIgDAAgARxI2QjZAAiRCIQiXCMAIDRQAHDbCqCjQCvCnDsAAQDsAACWioQCQijgajcQgZjTiviLQioiFjYAAIgDAAgAAA3tQmPAAk1CiQlLCpg9EDQhDEbEyDkQFND1IKAAQIJgEFSj3QE2jmhBkYQg7kClLioQk1ifmOAAIgBAAgEgOLgg1QhpAygRBIQgRBKBXA1QBZA2CPAAQCOgBBrg1QBpg1AGhKQAHhIhbgyQhYgyiEAAQiEAAhoAygEAHogg1QhcAyAGBHQAHBKBpA1QBqA2COAAQCPAABZg2QBXg1gQhJQgRhIhogzQhogxiEAAQiEAAhYAyg'
      )
    this.shape_100.setTransform(3.725, 514.341)
    this.shape_101 = new cjs.Shape()
    this.shape_101.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'Egj0AjkQAF1RB6qjQALhBANhAQBZnDB9mkQA/jRBHjJQBPjNBVjGQBQizBVitQBNgnBNglQBFgiBFgiQEOiDENiEQGXAAGWAAQF5AIF5AKQAwAoAwAoQBrBbBqBcQA6AzA6A0QBeDABZDIQBdDWBXDfQCOF2CCGhQATA/ATBAQCYJiBEKvQACARABASQAkIwACJaQhRAEhSADUgfRABNgl1gBlg'
      )
    this.shape_101.setTransform(3.75, 512.2485)
    this.shape_102 = new cjs.Shape()
    this.shape_102.graphics
      .f('#006020')
      .s()
      .p(
        'A5VasQiKihAkjZQAhjQC1iMQCwiHDXAAQDZgBCMCGQCQCKgPDSQgRDZiwCiQi2CnjsABQjrgBiPimgAMuaoQiqiigHjaQgIjRCWiMQCSiHDYgBQDZgBCpCGQCvCLAZDSQAaDciQCiQiVCojsAAQjrAAivingAtViNQkxjjBCkbQA9kDFKipQE1ihGNAAQGOgBE2CgQFKCnA7ECQBBEYk2DlQlRD2oIAEQoJAAlMj0gAu34nQhXg1ARhKQARhIBpgyQBogxCDAAQCEAABYAxQBbAzgHBHQgGBKhpA1QhrA1iOABQiPAAhYg2gAIH4oQhpg1gGhKQgGhHBbgyQBZgxCDgBQCEABBoAxQBoAyARBIQAPBJhWA1QhZA2iPAAQiOAAhqg2g'
      )
    this.shape_102.setTransform(3.1025, 484.875)
    this.shape_103 = new cjs.Shape()
    this.shape_103.graphics
      .f('#009933')
      .s()
      .p(
        'Egj0AjkQAG1RB5qjIAYiBQBZnDB9mkQA/jRBHjJQBPjNBVjGQBRizBUitQBNgnBNglICLhEQEOiDENiEIMrAAQF6AIF5AKIBgBQIDUC3IB1BnQBeDABYDIQBdDWBXDfQCPF2CCGhIAmB/QCYJiBDKvIAEAjQAkIwACJaIijAHQtfAhusAAQzZAA1ig5gAxlI+QjWAAiwCHQi1CMghDPQgkDZCKCiQCPCmDqAAQDtAAC2inQCwiiAQjaQAQjRiQiKQiLiFjXAAIgEAAgARuI2QjYAAiRCHQiXCMAJDRQAGDaCrCjQCvCnDrAAQDrgBCWinQCQijgajbQgZjSiviLQioiFjXAAIgEAAgAgB3qQmNAAk1CiQlKCpg9ECQhDEbEyDkQFMD0IIAAQIJgEFRj2QE2jmhBkXQg7kClKioQk1ifmNAAIgCAAgEgOKggxQhoAygRBHQgSBLBYA1QBYA1CPABQCOgBBrg2QBog1AHhJQAGhIhagyQhYgyiEAAQiEAAhoAygEAHnggxQhcAyAHBHQAGBKBpA1QBqA1COABQCPgBBYg1QBXg1gQhKQgQhHhogzQhogxiEAAQiEAAhYAyg'
      )
    this.shape_103.setTransform(3.75, 512.2485)
    this.shape_104 = new cjs.Shape()
    this.shape_104.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'EgjnAjYQAF1FB6qlQALhAANhAQBZnBB8miQA+jQBGjHQBQjNBTjFQBQiyBUisQBMgnBMgmQBFgiBEgjQENiAEMiCQGVAAGTAAQF4AIF3AKQAvAnAwAnQBrBaBqBaQA6AzA5A0QBdC/BYDHQBcDWBWDdQCNF0CBGfQATA/ATBAQCYJgBDKqQACASACARQAjIuADJXQhQAEhQAFUgfKABKgllgBjg'
      )
    this.shape_104.setTransform(3.825, 505.9745)
    this.shape_105 = new cjs.Shape()
    this.shape_105.graphics
      .f('#006020')
      .s()
      .p(
        'A5MakQiJihAkjXQAhjOC0iLQCuiGDWAAQDYgBCMCFQCPCJgQDQQgQDYiwChQi0CmjrAAQjpAAiPilgAMpagQipiigGjYQgJjQCWiKQCQiHDXAAQDYgBCpCFQCtCKAZDQQAaDaiPCiQiUCmjrABQjqAAiuimgAtQiKQkwjiBCkaQA8kCFJioQEzihGLAAQGNgBE0CfQFICnA7EBQBAEXk0DkQlQD1oFADQoGAAlKjygAuy4fQhXg0ARhKQARhIBogyQBogxCDAAQCCAABYAxQBaAygGBIQgHBJhnA1QhrA1iNABQiOAAhYg2gAIF4fQhog1gHhKQgGhHBbgyQBYgxCDAAQCEAABnAxQBnAyARBIQAQBJhWA1QhZA1iOAAQiOAAhpg1g'
      )
    this.shape_105.setTransform(3.1597, 478.825)
    this.shape_106 = new cjs.Shape()
    this.shape_106.graphics
      .f('#009933')
      .s()
      .p(
        'EgjnAjYQAF1FB6qlIAYiAQBZnBB8miQA+jQBGjHQBQjNBTjFQBQiyBUisICYhNICJhFIIZkCIMoAAQF4AIF3AKIBfBOQBrBaBqBaIBzBnQBdC/BYDHQBcDWBWDdQCNF0CBGfIAmB/QCYJgBDKqIAEAjQAjIuADJXIigAJQtYAgukAAQzWAA1dg5gAxeI9QjWAAivCGQizCLgiDOQgjDYCJCgQCOClDqABQDqgBC1imQCwihAQjYQAPjQiPiJQiKiEjWAAIgDAAgARoI1QjXABiQCGQiWCLAIDPQAHDZCpChQCuCmDqAAQDqAACVinQCPihgajaQgajRitiJQiniFjWAAIgDAAgAAA3hQmNAAkzChQlICog8ECQhCEaEvDiQFKD0IGAAQIFgEFQj1QE0jlhAkWQg7kBlIinQkzifmLAAIgBAAgEgOFggmQhpAxgRBIQgRBKBXA1QBYA1COABQCOgBBqg1QBog1AGhJQAHhIhagyQhYgyiDAAQiDAAhnAygEAHlggmQhbAxAGBIQAGBJBoA1QBqA1CNABQCOgBBZg1QBWg1gPhJQgRhIhogyQhngxiDAAQiDAAhYAyg'
      )
    this.shape_106.setTransform(3.825, 505.9745)
    this.shape_107 = new cjs.Shape()
    this.shape_107.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'EgjRAjGQAE0zB6qnQAMhAAMhAQBYm8B6mfQA+jOBGjGQBOjLBTjEQBPixBTiqQBKgoBKgmQBDgjBDgjQELh9ELh9QGRAAGQAAQF0AHF0AJQAwAmAwAnQBrBXBpBXQA5AzA4A0QBbC+BXDFQBbDVBVDbQCLFyB/GbQATA+ATA/QCWJcBDKkQACARACASQAkIpADJRQhNAHhNAFUge9ABJglMgBgg'
      )
    this.shape_107.setTransform(3.975, 495.5347)
    this.shape_108 = new cjs.Shape()
    this.shape_108.graphics
      .f('#006020')
      .s()
      .p(
        'A48aWQiIifAjjUQAhjMCyiJQCtiFDUAAQDWgBCKCEQCOCHgPDOQgRDViuCfQiyCkjpAAQjnAAiNijgAMiaSQioifgGjWQgJjNCUiKQCPiEDVgBQDWgBCnCEQCsCIAZDOQAaDYiOCfQiTCljoAAQjoAAisikgAtIiFQktjgBBkYQA7kBFGinQEwigGIAAQGJAAEyCeQFFCmA6D/QA/EVkyDjQlMDyoAAEQoBAAlHjxgAur4QQhWg1ARhJQARhHBngyQBngxCCAAQCCAABXAxQBZAygGBHQgGBJhnA0QhqA1iMABQiNAAhYg1gAIB4RQhng1gHhJQgFhGBagyQBXgxCCAAQCDAABmAxQBnAyAQBHQAPBIhVA1QhYA1iNAAQiMAAhpg1g'
      )
    this.shape_108.setTransform(3.2604, 468.675)
    this.shape_109 = new cjs.Shape()
    this.shape_109.graphics
      .f('#009933')
      .s()
      .p(
        'EgjRAjGQAE0zB6qnIAYiAQBYm8B6mfQA+jOBGjGQBOjLBTjEQBPixBTiqICUhOICGhGIIWj6IMhAAILoAQIBgBNIDUCuIBxBnQBbC+BXDFQBbDVBVDbQCLFyB/GbIAmB9QCWJcBDKkIAEAjQAkIpADJRIiaAMQtVAfueAAQzKAA1Mg2gAxUI8QjUAAitCFQiyCJghDMQgjDVCICfQCNCjDnAAQDpAACyikQCuifARjWQAPjOiOiHQiJiDjUAAIgDAAgARcI1QjVAAiPCFQiUCJAJDNQAGDWCoCgQCsCkDoAAQDogBCTikQCOiggajXQgZjOisiIQimiDjUAAIgDAAgAgB3RQmJAAkwCgQlGCng7EAQhBEYEtDhQFHDyIBAAQIAgEFMj0QEyjig/kVQg6kAlFimQkxidmHAAIgCAAgEgN/ggTQhnAxgRBHQgRBKBWA0QBYA1CNABQCMgBBqg1QBng1AGhIQAGhIhZgxQhXgxiCAAQiCAAhnAxgEAHhggTQhaAxAFBHQAHBJBnA0QBpA1CMABQCNgBBYg1QBVg0gPhJQgQhHhngyQhmgwiDgBQiCABhXAxg'
      )
    this.shape_109.setTransform(3.975, 495.5347)
    this.shape_110 = new cjs.Shape()
    this.shape_110.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'Egi0AirQAF0ZB6qqQALg/AMg/QBXm2B5mbQA9jMBEjEQBNjIBRjCQBOivBRipQBIgoBIgnQBBgkBBgkQEJh3EIh4QGNAAGLAAQFwAHFvAJQAwAkAvAlQBsBTBpBTQA3A0A2A0QBaC8BVDDQBZDSBTDZQCJFvB9GVQASA+ASA+QCVJWBDKbQACARABARQAmIjAEJJQhKAJhJAIUgetABFgkpgBcg'
      )
    this.shape_110.setTransform(4.15, 480.9286)
    this.shape_111 = new cjs.Shape()
    this.shape_111.graphics
      .f('#006020')
      .s()
      .p(
        'A4maCQiHicAjjRQAhjICviHQCriDDRAAQDTgBCICCQCMCFgPDKQgQDSirCcQixCijlAAQjkAAiLihgAMXZ/QilidgHjSQgIjKCSiHQCNiDDSAAQDSgBClCBQCqCHAZDKQAZDUiLCdQiRChjlABQjlAAiqihgAs9h+QkqjeBAkWQA6j+FCimQEtieGDAAQGFAAEuCcQFBClA4D9QA+ETkuDgQlIDwn5ADQn7AAlCjugAug39QhWg0ARhJQARhGBmgxQBlgxCBAAQCBAABWAxQBYAxgGBHQgGBIhmA0QhoA0iLABQiMAAhWg1gAH83+Qhng0gGhIQgGhGBagxQBWgxCBAAQCBAABlAwQBmAyAQBGQAPBIhVA0QhXA1iLAAQiLAAhng1g'
      )
    this.shape_111.setTransform(3.4107, 454.525)
    this.shape_112 = new cjs.Shape()
    this.shape_112.graphics
      .f('#009933')
      .s()
      .p(
        'Egi0AirQAF0ZB6qqIAYh+QBWm2B6mbQA8jMBEjEQBNjIBSjCQBNivBRipQBIgoBIgnICChIIISjvIMXAAQFwAHFvAJIBgBJIDTCmIBuBoQBaC8BUDDQBaDSBTDZQCJFvB8GVIAlB8QCUJWBDKbIAEAiQAmIjADJJIiSARQtKAeuQAAQy/AA09g1gAxGI7QjQAAirCDQivCHghDIQgjDRCHCcQCLChDkAAQDlAACxiiQCricAQjSQAOjKiLiFQiHiBjRAAIgEAAgARNI0QjTAAiMCDQiTCHAJDKQAHDSClCdQCqChDlAAQDlgBCRihQCLidgajUQgYjKiqiHQikiAjQAAIgDAAgAqy0eQlCCmg6D+QhAEWEqDeQFCDvH7AAQH4gDFIjxQEvjgg+kTQg5j9lBilQkticmEAAQmFAAksCegAt1/5QhnAxgQBGQgRBJBWA0QBWA1CMAAQCKgBBpg0QBlg0AHhIQAGhHhYgxQhXgxiAAAQiBAAhlAxgAHb/5QhZAxAGBGQAGBIBmA0QBoA1CKAAQCMAABXg1QBUg0gOhIQgRhGhlgyQhmgwiAAAQiBAAhXAxg'
      )
    this.shape_112.setTransform(4.15, 480.9286)
    this.shape_113 = new cjs.Shape()
    this.shape_113.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'EgiNAiKQAEz5B7qtQALg+AMg+QBVmvB2mVQA8jJBDjBQBLjFBPjAQBMisBPinQBFgpBFgoQA+glA/glQEGhwEFhxQGHAAGFAAQFqAHFqAIQAvAiAwAiQBqBPBpBOQA1A0A0A0QBXC5BTDBQBXDPBRDWQCGFqB5GPQASA8ASA+QCRJNBEKPQABARACARQAmIbAGJAQhFALhFALUgeVABBgj8gBWg'
      )
    this.shape_113.setTransform(4.425, 462.1194)
    this.shape_114 = new cjs.Shape()
    this.shape_114.graphics
      .f('#006020')
      .s()
      .p(
        'A4KZqQiEiZAijNQAgjECsiFQCoh/DNgBQDPAACGB/QCJCCgODHQgQDMioCaQiuCdjhAAQjgAAiIicgAMJZmQiiiagHjNQgIjGCPiEQCKh/DOgBQDPgBCjB/QCmCEAZDGQAZDPiICZQiPCejhABQjhgBinidgAsvh1QkljbA/kSQA4j8E8ikQEoicF+AAQF/AAEpCaQE7CjA3D8QA8EPkpDdQlDDsnwADQnxABk9jsgAuT3jQhUg0AQhIQARhGBkgwQBkgwB/AAQB/AABVAwQBXAxgGBFQgGBHhkA0QhnA0iJABQiJgBhWgzgAH13kQhlg0gGhHQgGhGBYgwQBWgwB/gBQB/ABBjAwQBlAwAPBGQAPBHhUA0QhVAziKABQiJgBhlgzg'
      )
    this.shape_114.setTransform(3.6183, 436.3)
    this.shape_115 = new cjs.Shape()
    this.shape_115.graphics
      .f('#009933')
      .s()
      .p(
        'EgiNAiKQAEz5B7qtIAXh8QBVmvB2mVQA8jJBDjBQBLjFBPjAQBMisBPinQBFgpBFgoIB9hKIILjhIMMAAILUAPIBfBEIDTCdIBpBoQBXC5BTDBQBXDPBRDWQCGFqB5GPIAkB6QCRJNBEKPIADAiQAmIbAGJAIiKAWQtBAcuDAAQyrAA0igxgAwzI5QjNAAioCAQisCFggDEQgiDNCECYQCICdDgAAQDhAACuieQCoiZAQjNQAOjGiJiCQiFh/jPAAIgBAAgAQ3IzQjOAAiKCAQiPCEAIDGQAHDNCiCaQCnCdDhAAQDhAACPieQCIiZgZjPQgZjHimiDQihh+jOAAIgDAAgAgC2gQl/AAkoCcQk8Ckg4D8Qg/ESElDbQE9DsHxAAQHwgDFDjuQEpjcg8kQQg3j7k7ijQkoial9AAIgCAAgAtq/XQhkAwgRBGQgQBIBUAzQBWA0CJABQCJgBBng0QBkg0AGhHQAGhGhXgwQhVgwh/AAQh/AAhkAwgAHU/XQhYAwAGBFQAGBIBlAzQBlA0CJABQCKgBBVg0QBUgzgPhHQgPhGhlgxQhjgvh/gBQh/ABhWAwg'
      )
    this.shape_115.setTransform(4.425, 462.1194)
    this.shape_116 = new cjs.Shape()
    this.shape_116.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'EgheAhhQADzRB8qyQALg8ALg9QBTmmB0mPQA6jEBCi+QBIjCBNi8QBJipBNikQBBgrBCgpQA7gnA7gmQEDhnEChpQF/AAF9AAQFkAHFjAHQAvAgAvAfQBqBJBpBIQAyA0AyA0QBUC3BQC9QBUDMBPDRQCCFlB1GHQARA7ARA9QCPJEBDKAQABARACAQQAoISAHIzQg/APhAAOUgd6AA9gjEgBQg'
      )
    this.shape_116.setTransform(4.725, 439.1526)
    this.shape_117 = new cjs.Shape()
    this.shape_117.graphics
      .f('#006020')
      .s()
      .p(
        'A3oZKQiBiTAijIQAfi/CoiBQCkh9DJAAQDLAACDB8QCGB/gPDAQgPDIikCVQiqCZjcAAQjcAAiFiZgAL5ZIQifiVgHjIQgIjBCMiBQCHh9DJAAQDLAACeB8QCjB/AZDCQAZDIiGCWQiLCZjcABQjcAAijiZgAsehpQkejYA8kPQA3j3E2iiQEiibF3AAQF4AAEiCZQE1ChA1D4QA5EMkjDYQk8DpnlADQnmgBk3jmgAuC3FQhTgyAQhIQAQhFBjgvQBigwB9AAQB9AABTAwQBWAwgGBFQgGBGhjAzQhlAziGABQiHgBhUgzgAHs3FQhjg0gFhGQgGhFBXgvQBUgwB9AAQB9ABBhAuQBjAxAPBEQAOBHhSAzQhVAziGAAQiHAAhkgzg'
      )
    this.shape_117.setTransform(3.8426, 414.05)
    this.shape_118 = new cjs.Shape()
    this.shape_118.graphics
      .f('#009933')
      .s()
      .p(
        'EgheAhhQADzRB8qyIAWh5QBTmmB0mPQA6jEBCi+QBIjCBNi8QBJipBNikICDhUIB2hNIIFjQIL8AAILHAOIBeA/IDTCRIBkBoQBUC3BQC9QBUDMBPDRQCCFlB1GHIAiB4QCPJEBDKAIADAhQAoISAHIzIh/AdQs4Abt2AAQySAAz+gugAwcI3QjJAAikB9QioCBgfC/QgiDHCBCUQCFCZDcAAQDcAACqiZQCkiVAPjIQAPjAiGiAQiDh7jKAAIgBAAgAQeIxQjJAAiHB9QiMCBAIDAQAHDICfCVQCjCZDcAAQDcAACLiaQCGiVgZjJQgZjBijiAQidh7jJAAIgDAAgAqczkQk2Cig3D3Qg8EPEeDYQE3DnHmAAQHlgDE8jpQEjjZg5kMQg1j3k1ihQkiiZl3AAQl4AAkiCbgAtb+uQhjAvgQBFQgQBHBTAzQBUAzCHABQCGgBBlgzQBjgzAGhGQAGhFhWgwQhTgwh9AAQh9AAhiAwgAHM+uQhXAvAGBFQAFBGBjAzQBkAzCHABQCGgBBVgzQBSgzgOhGQgPhFhjgwQhhgvh9AAQh9AAhUAwg'
      )
    this.shape_118.setTransform(4.725, 439.1526)
    this.shape_119 = new cjs.Shape()
    this.shape_119.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'EggnAgxQADyhB9q4QAKg7ALg7QBRmcBxmGQA4jAA/i6QBGi9BLi5QBGilBKihQA9gsA9grQA4goA3goQD+hdD+heQF2AAF1AAQFbAFFbAHQAvAdAvAcQBqBCBoBBQAvA0AuA0QBSCzBMC5QBRDIBMDNQB9FeBwF9QARA7AQA7QCLI4BDJvQABARACAQQApIGAKIlQg5ATg5ASUgdZAA3giEgBIg'
      )
    this.shape_119.setTransform(5.075, 411.999)
    this.shape_120 = new cjs.Shape()
    this.shape_120.graphics
      .f('#006020')
      .s()
      .p(
        'A3AYmQh+iPAhjBQAfi4Ckh9QCfh5DDAAQDGgBB/B4QCDB8gOC6QgPDBigCQQilCUjXAAQjVAAiCiUgALlYkQiciQgGjCQgJi6CJh8QCDh5DEgBQDFAACbB4QCeB8AYC6QAZDDiBCQQiICUjWABQjWAAifiUgAsKhcQkXjTA6kKQA0j0EvifQEbiYFuAAQFwgBEcCXQEtCfAyDzQA3EIkcDUQk0DjnZADQnZAAkvjigAtu2gQhRgyAPhGQAPhEBhgvQBgguB6AAQB6AABSAuQBUAwgFBDQgHBFhgAyQhjAziDAAQiEAAhSgygAHi2hQhhgygFhGQgFhDBVgvQBSguB6AAQB6AABgAuQBgAvAPBEQAOBFhRAyQhTAyiEABQiDgBhigyg'
      )
    this.shape_120.setTransform(4.1087, 387.725)
    this.shape_121 = new cjs.Shape()
    this.shape_121.graphics
      .f('#009933')
      .s()
      .p(
        'EggnAgxQADyhB9q4IAVh2QBRmcBxmGQA4jAA/i6QBGi9BLi5QBGilBKihQA9gsA9grIBvhQIH8i7ILrAAQFbAFFbAHIBeA5IDSCDIBdBoQBSCzBMC5QBRDIBMDNQB9FeBwF9IAhB2QCLI4BDJvIADAhQApIGAKIlIhyAlQsrAXtiAAQx3AAzZgogAwBI2QjDAAigB4QijB9gfC5QghDBB9CPQCCCTDWABQDWgBCliUQChiPAOjCQAOi6iCh7Qh/h3jDAAIgDAAgAQBIwQjEAAiEB5QiIB9AIC6QAHDBCbCQQCfCUDXAAQDWAACHiVQCCiPgZjDQgYi7ifh8Qiah3jEAAIgBAAgAgD1XQlvAAkcCYQkuCgg1D0Qg6EKEYDTQEvDjHZAAQHYgDE0jkQEcjVg2kHQgzj0ktieQkaiXluAAIgCAAgAtJ99QhhAvgQBDQgPBGBRAyQBSAyCEABQCEgBBjgyQBggyAGhFQAGhEhUgvQhSguh6AAQh6AAhgAugAHC99QhVAvAFBDQAGBGBhAxQBhAzCEAAQCDAABUgzQBQgxgOhGQgOhDhhgvQhfguh6gBQh7ABhSAug'
      )
    this.shape_121.setTransform(5.075, 411.999)
    this.shape_122 = new cjs.Shape()
    this.shape_122.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'A/nf5QACxrB+q+QAKg5ALg5QBOmQBtl9QA2i7A9i1QBCi4BIi0QBDiiBHidQA3gtA4gtQA0gqAzgqQD5hRD5hTQFsAAFrAAQFRAFFSAGQAvAZAvAZQBpA6BnA5QAsA0ArA0QBNCvBJC0QBNDEBIDIQB4FWBqFyQAQA5AQA6QCGIrBDJbQACAQABAPQAsH6AMIUQgyAYgyAXUgczAAwgg4gA/g'
      )
    this.shape_122.setTransform(5.525, 380.6709)
    this.shape_123 = new cjs.Shape()
    this.shape_123.graphics
      .f('#006020')
      .s()
      .p(
        'A2RX9Qh6iJAgi6QAeixCeh5QCah0C+AAQC/gBB7B0QB/B3gOCzQgOC6ibCJQigCOjQAAQjPAAh9iNgALOX6QiXiJgGi7QgJiyCEh4QB/h1C+AAQC/AACVBzQCaB4AYCzQAZC7h+CJQiDCPjPABQjQAAiaiPgAryhMQkQjOA4kFQAyjvEmicQETiWFlAAQFmAAETCUQEkCcAwDuQAzEDkUDPQkrDdnJADQnKAAkmjcgAtY12QhPgxAPhEQAPhDBeguQBegtB3AAQB3AABQAtQBSAvgFBCQgGBDheAyQhgAxiBAAQiAAAhRgxgAHX13QhfgxgFhEQgFhCBTguQBQgtB4gBQB3ABBdAtQBeAuAOBDQANBDhPAxQhRAyiAAAQiBAAhegyg'
      )
    this.shape_123.setTransform(4.4408, 357.35)
    this.shape_124 = new cjs.Shape()
    this.shape_124.graphics
      .f('#009933')
      .s()
      .p(
        'A/nf5QACxrB+q+IAVhyQBOmQBtl9QA2i7A9i1QBCi4BIi0QBDiiBHidIBvhaIBnhUIHyikILXAAIKjALIBeAyIDQBzIBXBoQBNCvBJC0QBNDEBIDIQB4FWBqFyIAgBzQCGIrBDJbIADAfQAsH6AMIUIhkAvQsYAVtJAAQxaAAywgkgAviIzQi+AAiaB0QieB4geCyQggC5B6CKQB9CNDPAAQDQAACgiOQCbiKAOi5QAOizh/h3Qh7hzi+AAIgBAAgAPeIuQi+AAh/B0QiEB4AJCzQAGC6CXCKQCaCODQAAQDPAACDiPQB+iKgZi6QgYi0iah3QiVhzi+AAIgBAAgAgE0pQlmAAkTCVQkmCdgyDvQg4EFEQDOQEmDdHKAAQHJgDErjeQEUjPgzkDQgwjvkkibQkSiUlkAAIgCAAgAs29FQheAugPBCQgPBFBPAxQBRAxCAAAQCBAABggyQBegxAGhDQAFhDhSguQhQgth3AAQh3AAheAtgAG29FQhTAuAFBCQAFBEBfAxQBeAxCBABQCAgBBRgxQBPgxgNhEQgOhCheguQhdgth3gBQh4ABhQAtg'
      )
    this.shape_124.setTransform(5.525, 380.6709)
    this.shape_125 = new cjs.Shape()
    this.shape_125.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'A+ee5QABwsB/rFQAJg3ALg4QBLmCBolyQA0i1A6iwQA/izBEivQBAicBDiZQAygwAzguQAugsAvgsQDzhED0hFQFgAAFfAAQFHAEFHAFQAvAVAvAVQBoAwBnAvQAnA1AnA0QBJCrBFCvQBJC+BDDCQByFOBkFlQAPA3APA4QCCIcBCJFQACAPABAPQAuHrAOICQgpAdgpAcQ8IAo/jg1g'
      )
    this.shape_125.setTransform(5.975, 345.173)
    this.shape_126 = new cjs.Shape()
    this.shape_126.graphics
      .f('#006020')
      .s()
      .p(
        'A1dXOQh1iEAfiwQAdiqCYhzQCUhvC3AAQC3gBB3BvQB6BygMCrQgOCxiWCDQiaCHjIABQjHgBh5iGgAK0XLQiSiDgGiyQgJiqB/hyQB6hwC3AAQC3AACRBuQCUBzAXCqQAZCyh5CEQh+CIjHAAQjJAAiUiIgArYg7QkGjIA0j/QAvjqEciZQELiSFZAAQFbAAEKCQQEaCaAtDpQAwD9kLDKQkgDWm5ACQm6AAkbjWgAs+1GQhNgxAOhCQAOhBBcgtQBagsB0AAQB0AABOAsQBPAtgFBBQgGBDhbAvQhdAwh9ABQh8AAhOgwgAHJ1HQhbgwgFhDQgFhABRgtQBOgsB0AAQB0AABaAsQBbAtANBBQANBChNAwQhPAwh9AAQh8AAhcgwg'
      )
    this.shape_126.setTransform(4.8073, 322.95)
    this.shape_127 = new cjs.Shape()
    this.shape_127.graphics
      .f('#009933')
      .s()
      .p(
        'A+ee5QABwsB/rFIAUhvQBLmCBolyQA0i1A6iwQA/izBEivQBAicBDiZIBlheIBdhYIHniJIK/AAIKOAJIBeAqIDPBfIBOBpQBJCrBFCvQBJC+BDDCQByFOBkFlIAeBvQCCIcBCJFIADAeQAuHrAOICIhSA5QsFARstAAQw4AAyBgegAu/IwQi2AAiUBvQiZBzgdCpQgfCxB1CDQB5CHDIAAQDIAACaiHQCViEAOixQANiqh6hyQh3hui2AAIgCAAgAO3IsQi2AAh7BvQh+BzAICqQAHCyCRCDQCVCHDIAAQDIAAB+iIQB4iDgYiyQgYiriUhyQiQhui2AAIgCAAgAgFz1QlbAAkKCSQkcCZgwDqQg0D/EHDIQEbDXG5AAQG5gCEhjYQEKjJgwj9QgsjqkaiZQkJiQlZAAIgCAAgAsf8FQhcAtgOBAQgOBDBNAwQBOAwB9ABQB8gBBegwQBbgwAGhCQAFhBhQgtQhOgthzAAQh0AAhbAtgAGp8FQhQAtAEBAQAFBDBbAwQBcAwB9AAQB8AABQgwQBMgwgMhDQgOhAhbgtQhagth0AAQh0AAhOAtg'
      )
    this.shape_127.setTransform(5.975, 345.173)
    this.shape_128 = new cjs.Shape()
    this.shape_128.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'A9NdzQAAvnCArNQAJg1AKg2QBIlyBklnQAxiuA3iqQA7isBAiqQA7iXA/iVQAsgxAsgxQApguApguQDug2Dtg2QFUAAFSAAQE7ADE7AEQAvARAuAQQBoAmBmAlQAjA1AjA0QBECmA/CpQBFC4A/C7QBrFFBdFXQAOA1AOA2QB8IMBCIsQACAOABAPQAwHaARHsQgfAjgfAjQ7ZAf+Egpg'
      )
    this.shape_128.setTransform(6.5, 305.4924)
    this.shape_129 = new cjs.Shape()
    this.shape_129.graphics
      .f('#006020')
      .s()
      .p(
        'A0iWZQhwh8AeioQAcigCRhtQCOhqCuABQCwgBByBpQB1BtgMChQgNCniPB8QiUCAjAAAQi/AAhzh/gAKXWXQiMh8gHioQgIihB5htQB1hqCvAAQCvAACKBpQCOBtAXChQAYCohzB9Qh4B/i/ABQjAgBiOh/gAq6gnQj8jCAwj5QAsjjESiWQEAiOFOgBQFOABEACNQEPCWApDkQAsD2kBDDQkVDPmmACQmmAAkQjPgAsi0SQhKguANhBQANg/BZgsQBYgrBwAAQBwAABLArQBNAsgFA/QgFBBhYAuQhaAvh5ABQh4AAhMgwgAG60SQhYgvgEhAQgFg/BOgsQBMgrBwAAQBwAABXArQBYAsANA/QAMBAhLAvQhNAvh4ABQh4gBhZgvg'
      )
    this.shape_129.setTransform(5.2153, 284.5)
    this.shape_130 = new cjs.Shape()
    this.shape_130.graphics
      .f('#009933')
      .s()
      .p(
        'A9NdzQAAvnCArNIAThrQBIlyBklnQAxiuA3iqQA7isBBiqQA7iXA+iVIBYhiIBShcIHchsIKlAAIJ2AHIBdAhIDOBLIBFBpQBFCmA/CpQBFC4A+C7QBrFFBeFXIAcBrQB7IMBDIsIADAdQAwHaARHsIg+BGQrzANsTAAQwPAAxIgXgAzUKWQiRBtgcChQgeCnBwB8QBzB/C/AAQDBAACTiAQCPh8ANinQAMihh1htQhyhoiwAAQiuAAiOBpgAOMIqQivAAh1BpQh5BtAJChQAGCoCMB8QCOCADAAAQDAAAB4iAQBzh8gYipQgXihiPhtQiJhoiuAAIgCAAgApVwsQkRCVgtDkQgwD5D8DBQEQDQGnAAQGmgCEUjQQEBjDgsj2QgpjkkPiWQkAiNlNAAQlOAAkBCPgAsF69QhaArgNA/QgNBBBKAvQBNAvB4AAQB4gBBagvQBYguAGhBQAEg/hMgrQhMgshvAAQhxAAhXAsgAGa69QhNArAEA/QAFBBBXAuQBZAvB5ABQB4gBBNgvQBKgugMhBQgMg/hZgsQhWgrhxAAQhwAAhMAsg'
      )
    this.shape_130.setTransform(6.5, 305.4924)
    this.shape_131 = new cjs.Shape()
    this.shape_131.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'A7zckQgBuaCBrWQAJgzAKgzQBDlhBflZQAuinA0ikQA3ilA7ikQA3iRA6iPQAlg0AmgzQAigxAkgxQDmglDngmQFFAAFEAAQEuADEtACQAvAMAuALQBnAaBmAbQAeA0AdA1QA+CgA7CiQA/CyA6C0QBjE6BWFHQANA0ANAzQB1H6BCIQQACAOABANQAzHJAVHUQgVAqgVApQ6kAW8agdg'
      )
    this.shape_131.setTransform(7.0999, 261.6123)
    this.shape_132 = new cjs.Shape()
    this.shape_132.graphics
      .f('#006020')
      .s()
      .p(
        'AzhVeQhrhzAdidQAbiXCKhmQCGhjCmAAQCngBBsBjQBvBmgLCXQgMCdiIB0QiMB3i3AAQi1AAhuh3gAJ2VdQiEh0gHidQgIiXByhmQBvhjCmgBQCmAACEBjQCHBmAXCXQAXCehsB0QhyB3i2AAQi3AAiIh3gAqZgRQjxi7AtjxQAojdEFiSQD2iLFAAAQFBAAD0CKQECCSAlDeQAoDvj2C7QkIDImRABQmRAAkDjHgAGqzXQhVgtgEg/QgEg9BLgqQBJgqBtAAQBrAABUAqQBVAqALA9QALA/hIAtQhKAuh0AAQhzAAhVgugAsCzXQhIgtANg/QAMg9BVgqQBVgqBsAAQBrAABJAqQBKAqgEA9QgGA/hUAtQhXAuhzAAQh0AAhJgug'
      )
    this.shape_132.setTransform(5.6739, 241.975)
    this.shape_133 = new cjs.Shape()
    this.shape_133.graphics
      .f('#009933')
      .s()
      .p(
        'A7zckQgBuaCBrWIAThmQBDlhBflZQAtinA1ikQA3ilA7ikQA2iRA7iPIBKhnIBGhiIHNhLIKKAAIJbAFIBdAXIDNA1IA6BpQA/CgA7CiQA+CyA6C0QBkE6BWFHIAaBnQB1H6BCIQIADAbQAzHJAUHUIgpBTQrbAKrxAAQvlAAwNgRgAtsIpQimAAiGBjQiLBngaCWQgdCdBrBzQBtB4C2AAQC3AACLh4QCJhzAMidQALiXhvhmQhshjimAAIgBAAgAJHKKQhyBnAHCXQAICdCEBzQCIB4C2AAQC3AABxh4QBth0gXidQgXiXiHhnQiEhiimAAQimAAhvBjgAo+vwQkFCRgoDdQgtDyDxC6QEDDIGRAAQGRgBEIjIQD1i8gnjvQgljekDiRQjziKlBAAQlAAAj2CLgAGK5vQhLAqAEA9QAEA/BUAuQBVAtB0ABQBzgBBLgtQBIgugLg+QgLg+hVgqQhUgqhsAAQhsAAhJAqgArq5vQhVAqgMA9QgNBABIAtQBJAtBzABQB0gBBXgtQBUgtAGg/QAEg9hKgrQhJgqhrAAQhsAAhVAqg'
      )
    this.shape_133.setTransform(7.0999, 261.6123)
    this.shape_134 = new cjs.Shape()
    this.shape_134.graphics
      .f()
      .s('#05104D')
      .ss(18, 1, 1)
      .p(
        'A6RbPQgCtGCCrgQAJgwAJgxQA/lOBZlLQArifAxidQAxieA3icQAyiLA1iKQAeg2Adg2QAdgzAcg0QDfgTDfgUQE2AAE0AAQEgABEfACQAuAGAuAGQBmANBlAOQAZA1AYA0QA4CbA0CbQA6CrA0CrQBcEvBME2QANAxALAxQBvHlBBHyQACANACANQA2G1AXG7QgJAxgJAwQ5qAM6ngPg'
      )
    this.shape_134.setTransform(7.7241, 213.5995)
    this.shape_135 = new cjs.Shape()
    this.shape_135.graphics
      .f('#006020')
      .s()
      .p(
        'AyaUeQhlhrAciRQAZiMCChfQB/hcCcAAQCdAABmBcQBpBfgKCMQgMCRiABrQiEBuisAAQisAAhnhugAJTUdQh+hqgHiSQgIiMBshfQBohcCdAAQCdAAB8BcQCABfAWCMQAXCRhnBrQhrBvirAAQisAAiBhvgAp2AFQjkixAojqQAmjWD3iNQDqiGExAAQEyAADoCGQD0CNAhDXQAiDnjpCzQj5C/l7ABQl6AAj2jAgAGYyWQhRgsgDg9QgEg7BIgpQBGgoBoAAQBnAABPAoQBRApALA7QAKA9hFAsQhIAshuAAQhuAAhRgsgArfyWQhFgsALg9QAMg7BSgpQBQgoBoAAQBmAABGAoQBHApgEA7QgFA9hRAsQhSAshvAAQhuAAhGgsg'
      )
    this.shape_135.setTransform(6.1653, 195.425)
    this.shape_136 = new cjs.Shape()
    this.shape_136.graphics
      .f('#009933')
      .s()
      .p(
        'A6RbPQgCtGCCrgIAShhQA/lPBZlKQArifAxidQAxieA3icQAyiLA1iKIA7hsIA5hnIG+gnIJqAAII/ADIBcAMIDLAbIAxBpQA4CbA0CbQA6CrA0CrQBcEvBME2IAYBiQBvHlBBHyIAEAaQA2G1AXG7IgSBhQrJAFrUAAQuwAAvEgIgAs8ImQidAAh+BcQiCBfgaCMQgbCRBkBqQBoBvCrAAQCtAACEhvQCAhqALiSQALiMhphfQhmhbicAAIgBAAgAIiKAQhrBgAICMQAHCRB+BrQCABuCsAAQCsAABrhuQBmhrgXiSQgWiMiAhfQh8hcidAAQicAAhpBcgAokuuQj4CNglDWQgpDpDlCzQD1C+F7AAQF6AAD6i/QDpizgjjoQggjXj1iNQjniGkyAAQkyAAjpCHgAF54YQhJApAEA6QAEA9BQAsQBRAsBvABQBugBBIgsQBFgsgKg8QgLg7hRgpQhQgphnAAQhoAAhFApgArL4YQhSApgLA6QgMA9BFAsQBGAsBvABQBugBBTgsQBQgrAGg9QAEg7hHgpQhGgphnAAQhnAAhRApg'
      )
    this.shape_136.setTransform(7.7241, 213.5995)
    this.shape_137 = new cjs.Shape()
    this.shape_137.graphics.f().s('#05104D').ss(18, 1, 1).p('A4qZxQgF5xKI5wIc6AAQI/ZwBZZxg')
    this.shape_137.setTransform(8.7481, 161.375)
    this.shape_138 = new cjs.Shape()
    this.shape_138.graphics
      .f('#006020')
      .s()
      .p(
        'AItTYQh2hhgHiEQgIiABkhYQBhhUCSAAQCSAAB1BUQB3BYAWCAQAWCEhfBhQhjBlihAAQihAAh4hlgAxNTYQhehhAaiEQAYiAB5hYQB2hUCSAAQCTAABfBUQBiBYgJCAQgLCEh3BhQh8BlihAAQigAAhhhlgApPAfQjXipAkjhQAhjODpiIQDdiCEhAAQEiAADaCCQDlCIAcDQQAeDfjcCpQjqC2liAAQliAAjmi2gAGExQQhMgqgDg7QgEg5BFgnQBDgnBjAAQBiAABLAnQBNAnAKA5QAJA7hCAqQhFAqhoABQhpgBhNgqgAq6xQQhBgqAKg7QALg5BNgnQBNgnBiAAQBiAABDAnQBDAngDA5QgFA7hNAqQhOAqhpABQhpgBhDgqg'
      )
    this.shape_138.setTransform(6.7088, 144.825)
    this.shape_139 = new cjs.Shape()
    this.shape_139.graphics
      .f('#009933')
      .s()
      .p(
        'A4qZxQgF5xKI5wIc6AAQI/ZwBZZxgAH4J2QhkBXAICAQAHCFB2BhQB4BkChAAQChAABjhkQBfhhgWiFQgWiAh3hXQh1hViSAAQiSAAhhBVgAwUJ2Qh5BXgYCAQgaCFBeBhQBhBkCgAAQChAAB8hkQB3hhALiFQAJiAhihXQhfhViTAAQiSAAh2BVgAoMtnQjpCJghDOQgkDgDXCrQDmC1FiAAQFiAADqi1QDcirgejfQgcjPjliJQjaiBkhAAQkiAAjdCBgAFi26QhFAnAEA4QADA7BMAqQBNArBpAAQBoAABFgrQBCgqgJg6QgKg5hNgnQhLgnhiAAQhjAAhDAngAqt26QhNAngLA4QgKA7BBAqQBDArBpAAQBpAABOgrQBNgqAFg6QADg5hDgnQhDgnhiAAQhiAAhNAng'
      )
    this.shape_139.setTransform(8.7481, 161.375)
    var maskedShapeInstanceList = [
      this.shape_78,
      this.shape_79,
      this.shape_80,
      this.shape_81,
      this.shape_82,
      this.shape_83,
      this.shape_84,
      this.shape_85,
      this.shape_86,
      this.shape_87,
      this.shape_88,
      this.shape_89,
      this.shape_90,
      this.shape_91,
      this.shape_92,
      this.shape_93,
      this.shape_94,
      this.shape_95,
      this.shape_96,
      this.shape_97,
      this.shape_98,
      this.shape_99,
      this.shape_100,
      this.shape_101,
      this.shape_102,
      this.shape_103,
      this.shape_104,
      this.shape_105,
      this.shape_106,
      this.shape_107,
      this.shape_108,
      this.shape_109,
      this.shape_110,
      this.shape_111,
      this.shape_112,
      this.shape_113,
      this.shape_114,
      this.shape_115,
      this.shape_116,
      this.shape_117,
      this.shape_118,
      this.shape_119,
      this.shape_120,
      this.shape_121,
      this.shape_122,
      this.shape_123,
      this.shape_124,
      this.shape_125,
      this.shape_126,
      this.shape_127,
      this.shape_128,
      this.shape_129,
      this.shape_130,
      this.shape_131,
      this.shape_132,
      this.shape_133,
      this.shape_134,
      this.shape_135,
      this.shape_136,
      this.shape_137,
      this.shape_138,
      this.shape_139,
    ]
    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask
    }
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to({ state: [{ t: this.shape_80 }, { t: this.shape_79 }, { t: this.shape_78 }] }, 24)
        .to({ state: [{ t: this.shape_83 }, { t: this.shape_82 }, { t: this.shape_81 }] }, 1)
        .to({ state: [{ t: this.shape_86 }, { t: this.shape_85 }, { t: this.shape_84 }] }, 1)
        .to({ state: [{ t: this.shape_89 }, { t: this.shape_88 }, { t: this.shape_87 }] }, 1)
        .to(
          {
            state: [
              { t: this.shape_92, p: { y: 542.3719 } },
              { t: this.shape_91 },
              { t: this.shape_90, p: { y: 542.3719 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_95, p: { y: 533.7219 } },
              { t: this.shape_94 },
              { t: this.shape_93, p: { y: 533.7219 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_95, p: { y: 528.5219 } },
              { t: this.shape_96 },
              { t: this.shape_93, p: { y: 528.5219 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_92, p: { y: 526.7719 } },
              { t: this.shape_97 },
              { t: this.shape_90, p: { y: 526.7719 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_92, p: { y: 526.7719 } },
              { t: this.shape_97 },
              { t: this.shape_90, p: { y: 526.7719 } },
            ],
          },
          1
        )
        .to({ state: [{ t: this.shape_100 }, { t: this.shape_99 }, { t: this.shape_98 }] }, 1)
        .to({ state: [{ t: this.shape_103 }, { t: this.shape_102 }, { t: this.shape_101 }] }, 1)
        .to({ state: [{ t: this.shape_106 }, { t: this.shape_105 }, { t: this.shape_104 }] }, 1)
        .to({ state: [{ t: this.shape_109 }, { t: this.shape_108 }, { t: this.shape_107 }] }, 1)
        .to({ state: [{ t: this.shape_112 }, { t: this.shape_111 }, { t: this.shape_110 }] }, 1)
        .to({ state: [{ t: this.shape_115 }, { t: this.shape_114 }, { t: this.shape_113 }] }, 1)
        .to({ state: [{ t: this.shape_118 }, { t: this.shape_117 }, { t: this.shape_116 }] }, 1)
        .to({ state: [{ t: this.shape_121 }, { t: this.shape_120 }, { t: this.shape_119 }] }, 1)
        .to({ state: [{ t: this.shape_124 }, { t: this.shape_123 }, { t: this.shape_122 }] }, 1)
        .to({ state: [{ t: this.shape_127 }, { t: this.shape_126 }, { t: this.shape_125 }] }, 1)
        .to({ state: [{ t: this.shape_130 }, { t: this.shape_129 }, { t: this.shape_128 }] }, 1)
        .to({ state: [{ t: this.shape_133 }, { t: this.shape_132 }, { t: this.shape_131 }] }, 1)
        .to({ state: [{ t: this.shape_136 }, { t: this.shape_135 }, { t: this.shape_134 }] }, 1)
        .to({ state: [{ t: this.shape_139 }, { t: this.shape_138 }, { t: this.shape_137 }] }, 1)
        .to({ state: [] }, 1)
        .wait(5)
    )
    // Layer_13
    this.instance_4 = new lib.Tween2('synched', 0)
    this.instance_4.setTransform(-1.2, 347)
    this.instance_5 = new lib.Symbol28copy()
    this.instance_5.setTransform(-166.5, 306.35, 2.2667, 2.1825, 0, 0, 180, -0.1, 0.2)
    this.instance_6 = new lib.Symbol28copy()
    this.instance_6.setTransform(166.1, 306.35, 2.2667, 2.1825, 0, 0, 0, 0.2, 0.2)
    this.instance_7 = new lib.Tween11('synched', 0)
    this.instance_7.setTransform(4.35, 373.55)
    this.instance_7._off = true
    this.shape_140 = new cjs.Shape()
    this.shape_140.graphics.f().s('#05104D').ss(17, 1, 1).p('AAAAAIAAAA')
    this.shape_140.setTransform(-23.525, 234.9)
    this.shape_141 = new cjs.Shape()
    this.shape_141.graphics
      .f()
      .s('#09255B')
      .ss(7, 1, 1)
      .p(
        'AAHqsIgEAAQgLAAgMAAAAcqsQgEAAgDAAQgHAAgHAAQAHAAAHAAAEBqyQgCAAgCABAAeKzQAbAAAaAAQARAAAQAAAkAqyQACAAADABAgdqsQAFAAAEAAAgdKzQgbAAgaAAQgRAAgQAA'
      )
    this.shape_141.setTransform(1.575, 303.95)
    this.shape_142 = new cjs.Shape()
    this.shape_142.graphics
      .f()
      .s('#05104D')
      .ss(21, 1, 1)
      .p(
        'AkLouIgBAAQgDAAgBAAQlcgNmvhvQmyhxmGgXQjagMkrAhQkrAgiPCHQiPCHAmFWQAnFVHAgHQHBgIJMEsQJMEsK3AvQArABArABQAFAAAEAAQAGAAAFAAIAQAAQAHAAAHAAQAEAAAFAAQArgBArgBQK3gvJMksQJMksGKA3QGLA2CElCQCFlDiyinQizinkvhDQkwhCjaAMQmGAXmyBxQmvBvlcANQgBAAgCAAIgCAAQgBAAgCAAQh9AEhdABIgCAAQgEAAgDABIgTAAQgLAAgLgBEgmkgDsQEmhdKMCtQKLCrGHApQGHAoArABQAFAAAEACQALAAA3gBQA4gBAIAAQAHAAgWgBQgWAAGHgoQGHgpKLirQKMitFKBKAguopQhdgBh9gEQgCAAgBAA'
      )
    this.shape_142.setTransform(3.2929, 290.8143)
    this.shape_143 = new cjs.Shape()
    this.shape_143.graphics
      .f('#1294E4')
      .s()
      .p(
        'AANM2IBWgCIAAACIghAAIg1AAgAgKM2IgQAAIgLAAIgJAAIhWgCQq3gvpMksQpMksnBAIQnAAHgnlVQgmlWCPiHQCPiHErggQErghDaAMQGGAXGyBxQGvBvFcANIgBgBIAFABIgEAAIAEAAIABAAIAAAAIADAAQB9AEBdABIAJAAIAWABIATAAIAHgBIACAAQBdgBB9gEIADAAIACAAIAEgBIgBABIgDAAIADAAQFcgNGvhvQGyhxGGgXQDagMEwBCQEvBDCzCnQCyCniFFDQiEFCmLg2QmKg3pMEsQpMEsq3AvIhWACIgJAAIgOAAgAglBjIBCgBIBAgBIABAAIgQgBIgBAAQAAgCFygmQGHgpKLirIAMgDIADgBQG9h1ElAAIABAAIAAAAQB9AABiAVIACABIADAAIgDAAIgCgBQhigVh9AAIAAAAIgBAAQklAAm9B1IgDABIgMADQqLCrmHApQlyAmAAACIABAAIAQABIgBAAIhAABIhCABQgEgCgFAAQgrgBmHgoQmHgpqLirQmohxkQAAIgBAAIAAAAQiSAAhnAhQBnghCSAAIAAAAIABAAQEQAAGoBxQKLCrGHApQGHAoArABQAFAAAEACIAAAAgAiEM2IAAgCIBWACIg1AAIghAAgABjM0gAgPooIgWgBIAAAAIAYAAIAEAAIANAAIgNAAIANAAIAAAAIAHAAIgHABgAglopIAAAAg'
      )
    this.shape_143.setTransform(3.2929, 290.8143)
    this.shape_144 = new cjs.Shape()
    this.shape_144.graphics
      .f('#873E7F')
      .s()
      .p(
        'AwFHaQpShXjih4Qjih4qYEwQk3CrAZtiQADABAEkdQA2HVPKhTQLFg9F6CgQKLguLwgSQOsgYCbAkIILhSIABAAIgBAAQLfhyBVgBQBVFnAJDaQAJDaoGjrQoHjspoDXQppDXpZAxQjaASjZAAQl+AAl6g3g'
      )
    this.shape_144.setTransform(2.5899, 332.1718)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_4 }] })
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .to({ state: [] }, 1)
        .to(
          {
            state: [
              { t: this.instance_6, p: { scaleX: 2.2667, x: 166.1, y: 306.35, regX: 0.2, scaleY: 2.1825 } },
              { t: this.instance_5, p: { regX: -0.1, scaleX: 2.2667, x: -166.5, y: 306.35, scaleY: 2.1825 } },
            ],
          },
          10
        )
        .to(
          {
            state: [
              { t: this.instance_6, p: { scaleX: 2.3714, x: 174.8, y: 321.1, regX: 0.2, scaleY: 2.1825 } },
              { t: this.instance_5, p: { regX: 0, scaleX: 2.3714, x: -173.3, y: 321.1, scaleY: 2.1825 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_6, p: { scaleX: 2.4462, x: 181.1, y: 331.65, regX: 0.2, scaleY: 2.1825 } },
              { t: this.instance_5, p: { regX: 0, scaleX: 2.4462, x: -178, y: 331.65, scaleY: 2.1825 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_6, p: { scaleX: 2.4911, x: 184.85, y: 338, regX: 0.2, scaleY: 2.1825 } },
              { t: this.instance_5, p: { regX: -0.1, scaleX: 2.4911, x: -180.55, y: 338, scaleY: 2.1825 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_6, p: { scaleX: 2.5056, x: 186.05, y: 340.1, regX: 0.3, scaleY: 2.1825 } },
              { t: this.instance_5, p: { regX: 0.1, scaleX: 2.5056, x: -181.55, y: 340.1, scaleY: 2.1825 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_6, p: { scaleX: 2.5056, x: 186.05, y: 340.1, regX: 0.3, scaleY: 2.1825 } },
              { t: this.instance_5, p: { regX: 0.1, scaleX: 2.5056, x: -181.55, y: 340.1, scaleY: 2.1825 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_6, p: { scaleX: 2.5056, x: 186.05, y: 340.1, regX: 0.3, scaleY: 2.1825 } },
              { t: this.instance_5, p: { regX: 0.1, scaleX: 2.5056, x: -181.55, y: 340.1, scaleY: 2.1825 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_6, p: { scaleX: 2.5056, x: 186.05, y: 340.1, regX: 0.3, scaleY: 2.1825 } },
              { t: this.instance_5, p: { regX: 0.1, scaleX: 2.5056, x: -181.55, y: 340.1, scaleY: 2.1825 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_6, p: { scaleX: 2.5056, x: 186.05, y: 340.1, regX: 0.3, scaleY: 2.1825 } },
              { t: this.instance_5, p: { regX: 0.1, scaleX: 2.5056, x: -181.55, y: 340.1, scaleY: 2.1825 } },
            ],
          },
          1
        )
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [] }, 1)
        .to(
          {
            state: [
              { t: this.shape_144 },
              { t: this.shape_143 },
              { t: this.shape_142 },
              { t: this.shape_141 },
              { t: this.shape_140 },
            ],
          },
          2
        )
        .to(
          {
            state: [
              { t: this.instance_6, p: { scaleX: 2.4289, x: 176.9, y: 307, regX: 0.4, scaleY: 3.1171 } },
              { t: this.instance_5, p: { regX: -0.1, scaleX: 2.4289, x: -179.1, y: 307, scaleY: 3.1171 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_6, p: { scaleX: 2.7033, x: 197.7, y: 321, regX: 0.5, scaleY: 2.8752 } },
              { t: this.instance_5, p: { regX: -0.1, scaleX: 2.7033, x: -198.8, y: 321, scaleY: 2.8752 } },
            ],
          },
          1
        )
        .to({ state: [] }, 1)
        .wait(1)
    )
    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
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
        .wait(38)
    )
    this.timeline.addTween(
      cjs.Tween.get(this.instance_7)
        .wait(33)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ scaleX: 0.9003, scaleY: 1.2356, y: 389.15 }, 0)
        .wait(1)
        .to({ scaleX: 0.8005, scaleY: 1.4711, y: 404.7 }, 0)
        .wait(1)
        .to({ scaleX: 0.7008, scaleY: 1.7067, y: 420.35 }, 0)
        .wait(1)
        .to({ scaleY: 1.6732, y: 412.65 }, 0)
        .wait(1)
        .to({ scaleY: 1.6397, y: 405 }, 0)
        .wait(1)
        .to({ scaleY: 1.6061, y: 397.4 }, 0)
        .wait(1)
        .to({ scaleY: 1.5726, y: 389.75 }, 0)
        .wait(1)
        .to({ scaleY: 1.5391, y: 382.1 }, 0)
        .wait(1)
        .to({ scaleY: 1.5056, y: 374.5 }, 0)
        .wait(1)
        .to({ scaleY: 1.4721, y: 366.9 }, 0)
        .wait(1)
        .to({ scaleY: 1.4386, y: 359.25 }, 0)
        .wait(1)
        .to({ scaleY: 1.4052, y: 351.6 }, 0)
        .to({ _off: true }, 1)
        .wait(6)
    )
    // Layer_2
    this.instance_8 = new lib.Tween7('synched', 0)
    this.instance_8.setTransform(-4.3, -153.45)
    this.instance_9 = new lib.Tween8('synched', 0)
    this.instance_9.setTransform(-13.1, -321.45, 0.9253, 1.1078)
    this.instance_9._off = true
    this.timeline.addTween(
      cjs.Tween.get(this.instance_8)
        .to({ x: -5.8, y: -153.85 }, 14)
        .to({ _off: true, scaleX: 0.9253, scaleY: 1.1078, x: -13.1, y: -321.45 }, 8, cjs.Ease.get(1))
        .wait(30)
    )
    this.timeline.addTween(
      cjs.Tween.get(this.instance_9)
        .wait(14)
        .to({ _off: false }, 8, cjs.Ease.get(1))
        .wait(1)
        .to({ regX: -4.6, regY: 1.5, scaleX: 0.9994, scaleY: 1.0452, x: -17.6, y: -255.8 }, 0)
        .wait(1)
        .to({ regX: 0, regY: -0.1, scaleX: 1.0648, scaleY: 0.99, x: -13.05, y: -200.9 }, 0)
        .wait(1)
        .to({ regX: -4.6, regY: 1.5, scaleX: 1.0365, scaleY: 0.9714, x: -17.8, y: -172.05 }, 0)
        .wait(1)
        .to({ scaleX: 1.0162, scaleY: 0.9581, x: -17.7, y: -152.55 }, 0)
        .wait(1)
        .to({ scaleX: 1.0041, scaleY: 0.9501, x: -17.65, y: -140.85 }, 0)
        .wait(1)
        .to({ regX: 0, regY: 0, scaleX: 1, scaleY: 0.9474, x: -13.1, y: -138.5 }, 0)
        .wait(1)
        .to({ regX: -4.6, regY: 1.5, x: -17.7, y: -137.1 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ regX: 0, regY: 0, x: -13.1, y: -138.5 }, 0)
        .wait(1)
        .to({ regX: -4.6, regY: 1.5, scaleX: 0.9953, scaleY: 0.9545, x: -17.4, y: -139.9 }, 0)
        .wait(1)
        .to({ scaleX: 0.9908, scaleY: 0.9613, x: -17.05, y: -142.65 }, 0)
        .wait(1)
        .to({ scaleX: 0.9864, scaleY: 0.9679, x: -16.8, y: -145.3 }, 0)
        .wait(1)
        .to({ regX: 0, regY: 0, scaleX: 0.9822, scaleY: 0.9742, x: -12, y: -149.3 }, 0)
        .wait(1)
        .to({ regX: -4.6, regY: 1.5, scaleX: 0.9791, scaleY: 0.9789, x: -15.4, y: -158.05 }, 0)
        .wait(1)
        .to({ scaleX: 0.9763, scaleY: 0.9832, x: -14.4, y: -167.45 }, 0)
        .wait(1)
        .to({ scaleX: 0.9737, scaleY: 0.987, x: -13.5, y: -175.85 }, 0)
        .wait(1)
        .to({ scaleX: 0.9714, scaleY: 0.9905, x: -12.65, y: -183.4 }, 0)
        .wait(1)
        .to({ scaleX: 0.9694, scaleY: 0.9935, x: -11.95, y: -190.1 }, 0)
        .wait(1)
        .to({ scaleX: 0.9677, scaleY: 0.9962, x: -11.35, y: -195.9 }, 0)
        .wait(1)
        .to({ scaleX: 0.9662, scaleY: 0.9984, x: -10.85, y: -200.8 }, 0)
        .wait(1)
        .to({ scaleX: 0.965, scaleY: 1.0002, x: -10.4, y: -204.8 }, 0)
        .wait(1)
        .to({ scaleX: 0.964, scaleY: 1.0017, x: -10.1, y: -207.9 }, 0)
        .wait(1)
        .to({ scaleX: 0.9634, scaleY: 1.0027, x: -9.85, y: -210.15 }, 0)
        .wait(1)
        .to({ scaleX: 0.963, scaleY: 1.0033, x: -9.7, y: -211.5 }, 0)
        .wait(1)
        .to({ regX: 0, regY: 0, scaleX: 0.9628, scaleY: 1.0035, x: -5.2, y: -213.4 }, 0)
        .to({ regX: -0.1, regY: -0.1, scaleX: 0.9876, scaleY: 1.0011, x: -4.65, y: -173.55 }, 2)
        .to({ _off: true }, 1)
        .wait(1)
    )
    // Layer_1
    this.instance_10 = new lib.Tween6('synched', 0)
    this.instance_10.setTransform(0, 175.4)
    this.timeline.addTween(
      cjs.Tween.get(this.instance_10)
        .to({ startPosition: 0 }, 14)
        .to({ regY: 0.2, scaleX: 0.9084, scaleY: 1.2709, y: 22.55 }, 8, cjs.Ease.get(1))
        .wait(1)
        .to({ regY: 1.5, scaleX: 0.9504, scaleY: 1.1818, x: -7.55, y: 68.7 }, 0)
        .wait(1)
        .to({ regX: -0.1, regY: 0.4, scaleX: 0.9875, scaleY: 1.1032, x: -14.3, y: 106.7 }, 0)
        .wait(1)
        .to({ regX: 0, regY: 1.5, scaleX: 0.993, scaleY: 1.058, x: -9.05, y: 129.3 }, 0)
        .wait(1)
        .to({ scaleX: 0.9969, scaleY: 1.0258, x: -5.4, y: 144.55 }, 0)
        .wait(1)
        .to({ scaleX: 0.9992, scaleY: 1.0064, x: -3.2, y: 153.7 }, 0)
        .wait(1)
        .to({ regY: 0, scaleX: 1, scaleY: 1, x: -2.6, y: 155.65 }, 0)
        .wait(1)
        .to({ regY: 1.5, y: 157.15 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ regY: 0, y: 155.65 }, 0)
        .wait(1)
        .to({ regY: 1.5, scaleX: 0.961, scaleY: 1.0928, y: 156.45 }, 0)
        .wait(1)
        .to({ scaleX: 0.9234, scaleY: 1.1823, y: 155.75 }, 0)
        .wait(1)
        .to({ scaleX: 0.8872, scaleY: 1.2686, x: -2.65, y: 155.15 }, 0)
        .wait(1)
        .to({ regY: 0, scaleX: 0.8524, scaleY: 1.3515, y: 152.45 }, 0)
        .wait(1)
        .to({ regY: 1.5, x: -2.95, y: 141.45 }, 0)
        .wait(1)
        .to({ x: -3.25, y: 129.2 }, 0)
        .wait(1)
        .to({ x: -3.55, y: 117.7 }, 0)
        .wait(1)
        .to({ scaleX: 0.8523, x: -3.8, y: 107 }, 0)
        .wait(1)
        .to({ x: -4.05, y: 97.05 }, 0)
        .wait(1)
        .to({ x: -4.25, y: 87.9 }, 0)
        .wait(1)
        .to({ x: -4.5, y: 79.5 }, 0)
        .wait(1)
        .to({ x: -4.65, y: 71.85 }, 0)
        .wait(1)
        .to({ x: -4.85, y: 65.05 }, 0)
        .wait(1)
        .to({ x: -5, y: 58.95 }, 0)
        .wait(1)
        .to({ regX: -0.1, regY: 0.1, x: -5.2, y: 51.8 }, 0)
        .to({ regX: 0, regY: 0, scaleX: 0.8524, x: -2.65, y: 47.2 }, 1)
        .wait(1)
        .to({ scaleX: 0.9189, scaleY: 1.193, x: -1.5, y: 105.05 }, 0)
        .wait(1)
        .to({ scaleX: 0.9681, scaleY: 1.0758, x: -0.6, y: 147.75 }, 0)
        .to({ _off: true }, 1)
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-513.3, -777.2, 1018.0999999999999, 2212.8)
  // stage content:
  ;(lib._deposit_collateral = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.deposit('synched', 0)
    this.instance.setTransform(197.45, 180.6, 0.1814, 0.1814, 0, 0, 0, -12.4, 170.9)
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(51))
    this._renderFirstFrame()
  }).prototype = p = new lib.AnMovieClip()
  p.nominalBounds = new cjs.Rectangle(306.5, 158.6, -15.300000000000011, 251.4)
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
