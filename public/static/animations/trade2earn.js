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
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#F7FAE8')
      .s()
      .p(
        'EgjuAc5IhbmcQlS3xks4WQgmjGgciDQFYg8BPgKIAJgCQBPgLJEhZQECglE1g4QE2g5BegPQBfgOCSgbQCQgbc0lKIM2hyQABAgALAlIBHDxQA7DNCMIuQCKIvCxM/QAoDdAtDbQA+EmBUFbQBVFdBtGVQANAyAOAbIABADQlABYpfCGIk1BFQnzBxpuCTQs3DDpCCUQpCCVsoDcQhxnkhvnog'
      )
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-308.2, -282.1, 616.4, 564.2)
  ;(lib.Tween4 = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f().s('#2F8DBE').ss(9, 1, 1).p('AXdVTMgp3gmAIgMgLIkCjqIgrgoIgJgI')
    this.shape.setTransform(-332.375, 323)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f()
      .s('#09255B')
      .ss(9, 1, 1)
      .p(
        'AWEBmQgTgBgKgTQgCgEgCgEQgKgXgHgiQgJgogFgPQgFgQAAAAQiGn7iBn4QiWpHiOpDQkSxXkLxUQg2jcg6jQQgjirhFARQhFARgBgGQt6BftrCDQjmAhjlAlQqBBlpoBcQuSCat3B7QgEAAgEABQiPAViMAVQgEAAgFABQhlAKhWAYQgPAEgPAEQgFABgEABQgrAogeA3MAOzBV+IACANQABAHABAGIAsEiAhMAsQiZAiilAlQoBB0p/CXQtPDIpSCZQpSCZs+DiQh1nyhxn1QgwjSgvjUQla4dk15CQgnjKgdiIQFhg9BSgLQAFgBAEgBQBRgKJVhcQEIgmE+g6QE/g7BhgPQBhgOCVgcQCVgcdplTINMh1QACAhAKAmQALAlA+DSQA9DTCOI+QCPI+C2NWQApDkAvDiQA/EuBWFkQBYFoBvGfQAOAzAOAdQABABAAABQlJBcpuCIgEhOoAbWIABAYQABAAABABQAGAvAFArQAEAgAAAbQAMCRAEBgQAGAGAGAFQB/B5A1AwQCMCOCSCNQIMH7IgISQIyIiE5E0QE5E0CnB6QCmB5D/g6QD/g5K7kLQK7kMRWmZQRWmZL8kjQL7kkKaj7QKaj7FaiKQFaiKCtmAQnHlPpLjgQwnmVvomsQoijopgieQgRgEgQgFQhsAHgXAbIgPACIgTACQgSACghAEQgPACAOgKIABAIIAzgG'
      )
    this.shape_1.setTransform(-0.025, -0.0007)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#79949E')
      .s()
      .p('AgIASQgBAAgBgFQAFAAAAgCQADgJABgIIAMAKQgBAQgLAAIgHgCgAgBgGIABgNIAIABIAAABQADANAAAIgAgBgGg')
    this.shape_2.setTransform(-451.325, 215.6093)
    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics.f('#5E7B8E').s().p('AgBABIAAgBIADABIgDAAg')
    this.shape_3.setTransform(-447.675, 209.475)
    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics.f('#0A90C1').s().p('AAcgHQAAAGgBAAQgwAJgGAAQgHAAA+gPg')
    this.shape_4.setTransform(-327.3439, 244.6717)
    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f('#647879')
      .s()
      .p('AgZDzIgRiSIACABIALBaQAEAgAAAaIAAgDgAAngbIgNg8Igbh9IgGgiIAHAiIAZB2IAPBDIADALIAAABQgBABgDgNg')
    this.shape_5.setTransform(-498.95, 167.7)
    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics.f('#1296BB').s().p('AmUBKIABgSQEViDGUhHQAFAAADADQAzA5BEAnQjKBKjOBQQhlAohYAAQh3AAhdhJg')
    this.shape_6.setTransform(-356.25, 185.4502)
    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f('#0A8EBD')
      .s()
      .p(
        'AldAsQgTAGAGgDQC7hkDhAIQAAgGACgDQBChDBKA8QAAgFADgEQArhAB+BHQi4BViMgsQgEgCgFAAQAwAthLAZQgBAAAAAGQg3AkhUABIgKAAQgEgBgEACQgnALgiAAQhKAAgwg5g'
      )
    this.shape_7.setTransform(-378.3812, 170.8966)
    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f('#1F8EAE')
      .s()
      .p(
        'AmKA6IgJgGQEkh1GGhCQAAAGACABIB7BOQi3BPjZAiIgIABQgBgGACAAQBKgagxgsQAFAAAFABQCLAtC5hWQh/hGgrBAQgCADAAAGQhKg9hCBEQgCACAAAGQjhgHi7BjQgHAEAUgGQBFBTB9gmQAFgBAEAAQAAAGgCAAQgzAWgsAAQhTAAg8hKg'
      )
    this.shape_8.setTransform(-377.55, 169.3162)
    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics.f('#465458').s().p('AgDgmIAAgKIAIAJIgIgJIAIABIAAAIIAABNIAAALQgOgfAGg4gAgDgwIAAAAg')
    this.shape_9.setTransform(-482.1488, 191.6)
    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f('#DEE8E4')
      .s()
      .p('AB/CEQiMhohqiOIEADpQgBAKgDAJQAAABgFAAQABgFgCgCgAh3hyIgSgYQAFAAADADQCHB2CEB8IgBAMgAh3hyg')
    this.shape_10.setTransform(-465.225, 202.975)
    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f('#1493BD')
      .s()
      .p('AifCGQhmg8hRhNQAFAAAFgCQD9hTDng1QAGABAEADQBSA8BjAuQAAAHgCABQjlBtkNA4QAAgHgCgBg')
    this.shape_11.setTransform(-114.675, 235.75)
    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics.f('#BECDCF').s().p('AgYALIgKgBQAAgCAdADIgGABIgNgBgAgYgCQAIgDAaAIIgigFgAAUgLQAHAEAIABIgDADg')
    this.shape_12.setTransform(-268.625, 310.5083)
    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics.f('#0D8FC2').s().p('AgfARQglggBtgVQgGBJgeAAQgOAAgWgUg')
    this.shape_13.setTransform(-320.8422, 248.1894)
    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics.f('#0990BF').s().p('AANgGQAAAGgDAAQgTAHgCAAQgEAAAcgNg')
    this.shape_14.setTransform(-305.2071, 249.5806)
    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics.f('#1492BA').s().p('AmhBDIgFgLQEuiFGJhUQAFABADADQBAA4BOAqQAAAGgCAAQlSB7llBWIAAAFQhKgqhFg0g')
    this.shape_15.setTransform(-315.425, 221.3)
    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics.f('#0B93C2').s().p('AAOAsQi+g0DygmQAPBdgwAAQgJAAgKgDg')
    this.shape_16.setTransform(-277.7357, 236.3707)
    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f('#1A8FB8')
      .s()
      .p('AiRCDQhOgThRhLQAAgGACgBQCehiEehAQAAAGADABQBRA4BPA5QAAAGgCAAQjYBNjeA+IgKgCg')
    this.shape_17.setTransform(-170.775, 252.925)
    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f('#118DB9')
      .s()
      .p('Aj4D9QiwiCifiQQAAgFACAAQF8iOGvhbQAFAAAEADQCqCJCvCFQAAAGgBABQmjB9maByQAAgGgCgBg')
    this.shape_18.setTransform(-255.45, 267.4)
    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f('#1398B4')
      .s()
      .p('AkYAkIgGgBQCMhjEhg2QAFAAAEAEQA7AvBMAeQAAAGgDACQi8BVjMA/IgLAAIgFAAQhdAAg/hTg')
    this.shape_19.setTransform(-138.125, 217.4286)
    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f('#1593BC')
      .s()
      .p(
        'AodD0QhUgyg+hJIgFAAQIjjRKfieQAFAAAEADQBGA7BYArQAAAGgBAAQpqDMpeCyQgFAAgEgDgAo/CnQA/A6AJhwQhtAUAlAigAl5CjQACgBAAgGQgxAaAvgTgApGBxQACgBAAgFQhxAbBvgVgAhjBMQBGATgRhuQjzAlC+A2g'
      )
    this.shape_20.setTransform(-266.375, 233.225)
    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics.f('#1890B7').s().p('AiNB9QhKgQhHhMIgGgBQCXhmEng4QAAAGACACICJBhQAAAGgBAAQjfA8jIBSIgKgCg')
    this.shape_21.setTransform(-192.3187, 235.375)
    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics.f('#1D99B8').s().p('AkJAkIgFAAQCChWEQgtQABAGACABICIBTQAAAFgCACQikBeiSAAQh2AAhqg8g')
    this.shape_22.setTransform(-196.55, 186.6676)
    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics.f('#1791BB').s().p('Aj+ArIgKgGQCTheD4goQAFABADADQA4AxBGAlQAAAGgDABQikBiiRAAQhtAAhig3g')
    this.shape_23.setTransform(-248.6, 201.7148)
    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics.f('#1898B5').s().p('Aj8AYIgFgBQCJhNDmghQAFAAAFADQBKAlBAAxQAAAGgDABQiTBPiEAAQh3AAhthAg')
    this.shape_24.setTransform(-213.35, 169.5472)
    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics.f('#3892A5').s().p('AgKAMQgFgCgFAAIAAgLIAAgMIAKABQAUABALALQgCAOgQAAQgFAAgIgCg')
    this.shape_25.setTransform(-187.525, 129.3893)
    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics.f('#1195B7').s().p('AjXAAIgGAAQDWiIDlB1IAAALIAAALIAAAMQAAAGgDABQhzA0hkAAQh4AAhjhKg')
    this.shape_26.setTransform(-211.825, 128.8833)
    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics.f('#119FC5').s().p('AAdgMQAAAGgBAAQg1ATgDAAQgEAAA9gZg')
    this.shape_27.setTransform(-254.8438, 177.1925)
    this.shape_28 = new cjs.Shape()
    this.shape_28.graphics.f('#0898C2').s().p('AAvgCIAAAFQi7gEC7gBg')
    this.shape_28.setTransform(-273.8625, 185.725)
    this.shape_29 = new cjs.Shape()
    this.shape_29.graphics.f('#0899C2').s().p('AANAFIAAAGQgzgoAzAig')
    this.shape_29.setTransform(-281.4625, 188.9013)
    this.shape_30 = new cjs.Shape()
    this.shape_30.graphics.f('#1698B9').s().p('AkDAhIgFAAQB3hPD+gsQAFAAAEADQBBAzBSAjQABAFgDABQiiBWiNAAQh1AAhmg6g')
    this.shape_30.setTransform(-233.0208, 153.5598)
    this.shape_31 = new cjs.Shape()
    this.shape_31.graphics.f('#1895B8').s().p('AkbAtQgBgGADgCQCNhcEbgoQAAAGACABQBHAoBEApQABAGgDABQi2BgigAAQh1AAhqgzg')
    this.shape_31.setTransform(-284.4, 167.1213)
    this.shape_32 = new cjs.Shape()
    this.shape_32.graphics
      .f('#1696B9')
      .s()
      .p(
        'AkVApQAAgGACgBQCLhREEg0QAFAAAEAEQBCA2BOArQAAAFgCACQioBbiWAAQh6AAhwg7gAiTBBIAAgFQgYgRgCAAQgCAAAcAWgAglAZIAAgFQi9AAC9AFgACFhFQACAAgBgGQhzAxBygrg'
      )
    this.shape_32.setTransform(-265.35, 183.493)
    this.shape_33 = new cjs.Shape()
    this.shape_33.graphics.f('#1694B7').s().p('AkmCcQg+gZhHhIIgEAAQE1iJGghPQAFAAACADQA4A7BLAmQAAAGgCAAQliB0lpBdIgJgCg')
    this.shape_33.setTransform(-335.325, 202.65)
    this.shape_34 = new cjs.Shape()
    this.shape_34.graphics
      .f('#1891B3')
      .s()
      .p('AiMBvQhSgshLg0IgEAAQCvhdEWgjQAGAAADADQBIApBFArQAAAGgBABQjnA0jJBRQgGgBgDgCg')
    this.shape_34.setTransform(-308.35, 154.075)
    this.shape_35 = new cjs.Shape()
    this.shape_35.graphics.f('#1290B2').s().p('Aj9AdQAAgGACgCQBqhGDrgjQAFAAAEACQBHAsBUAeQAAAGgCABQibBWiKAAQhvAAhlg4g')
    this.shape_35.setTransform(-255.775, 139.1599)
    this.shape_36 = new cjs.Shape()
    this.shape_36.graphics
      .f('#1A91B2')
      .s()
      .p('AgOBcQh3g3hhhHQAFAAAFgBQB6geB3ghQAAAGACABQBwAtBgA4QAAAGgCABQh4Ath5AlQAAgHgCAAg')
    this.shape_36.setTransform(-40.225, 159.525)
    this.shape_37 = new cjs.Shape()
    this.shape_37.graphics
      .f('#1597BC')
      .s()
      .p('AjfCZQhJgVheg9QAAgGADgCQDfiAFzhYQAFAAAFACQBUAyBaAsQAAAGgCAAQktBsksBhIgLgBg')
    this.shape_37.setTransform(-74.87, 196.6)
    this.shape_38 = new cjs.Shape()
    this.shape_38.graphics
      .f('#1293B1')
      .s()
      .p('AjXAVQgEgDgGAAQAAgqCngwQCDgmBqBPQAAAGACAFQALAYAiACIAAANQh7BChuAAQhuAAhihAg')
    this.shape_38.setTransform(-37.3503, 108.6555)
    this.shape_39 = new cjs.Shape()
    this.shape_39.graphics
      .f('#3C95A5')
      .s()
      .p('AAQAZQgFgBgGAAIAAgNQgggCgLgYQgCgFAAgGQAGAAAEACQAkASAjASQABAPgOAAQgFAAgHgCg')
    this.shape_39.setTransform(-15.3459, 108.1755)
    this.shape_40 = new cjs.Shape()
    this.shape_40.graphics.f('#08A3CD').s().p('AAVAAIAAAFQhTgQBTALg')
    this.shape_40.setTransform(-100.45, 183.9246)
    this.shape_41 = new cjs.Shape()
    this.shape_41.graphics
      .f('#1899B8')
      .s()
      .p('AhNBkQhqgtheg3QABgGABAAQCjg/C4glQAFAAAEADQBXBABuAoQAAAHgCAAQi3AtioA2QAAgGgCgBg')
    this.shape_41.setTransform(-76.2, 171.4)
    this.shape_42 = new cjs.Shape()
    this.shape_42.graphics.f('#327C7F').s().p('AgHgCIAPADIgPACg')
    this.shape_42.setTransform(-116.425, 166.15)
    this.shape_43 = new cjs.Shape()
    this.shape_43.graphics.f('#1499B6').s().p('AhPBgQhMgShShHIgGAAQBhhBDjgoQAGABAEADQBGAyBTAmQAAAFgCABQigAuiWA0IgLgCg')
    this.shape_43.setTransform(-165.8, 158.2)
    this.shape_44 = new cjs.Shape()
    this.shape_44.graphics.f('#179BB6').s().p('AjxAXIgFAAQDfinEOCEQAAAGgCABQiaBMiFAAQhqAAhdgwg')
    this.shape_44.setTransform(-146.35, 173.0257)
    this.shape_45 = new cjs.Shape()
    this.shape_45.graphics
      .f('#119CBE')
      .s()
      .p('AkjAuQAAgGACgCQCNhUERg3QAFAAAEADICeBbQAAAGgDABQi1BmikAAQh6AAhxg4gADsgQIAAgGQgggEgIAAQgMAAA0AKg')
    this.shape_45.setTransform(-121.9464, 186.143)
    this.shape_46 = new cjs.Shape()
    this.shape_46.graphics.f('#1894B8').s().p('AklAwQABgGACgCQCChlEZgsQAGAAADADQBIA3BcAjQAAAGgCACQi0BuinAAQh6AAh0g6g')
    this.shape_46.setTransform(-172.95, 203.2436)
    this.shape_47 = new cjs.Shape()
    this.shape_47.graphics
      .f('#108FAF')
      .s()
      .p('AhWBbQhagshQg2IAKgCQCfguCrglQAAAGACAAQBeApBNA2QAAAFgBAAQisAligAqQgFAAgFgCg')
    this.shape_47.setTransform(-166.025, 118.1)
    this.shape_48 = new cjs.Shape()
    this.shape_48.graphics.f('#1297B4').s().p('Aj2AWIgFAAQB7g/D7goQAGAAADADQA5AoA/AiQAAAFgCABQiaBQiDAAQhyAAhhg8g')
    this.shape_48.setTransform(-183.9, 141.6057)
    this.shape_49 = new cjs.Shape()
    this.shape_49.graphics
      .f('#1896B3')
      .s()
      .p('AhVBqQhchAhmgzQAFAAAFgCQCng6C6gmQAGAAAEACQBVA2BlAmQAAAGgCABQijBLi/AnQgFAAgEgCg')
    this.shape_49.setTransform(-59.1458, 138.9)
    this.shape_50 = new cjs.Shape()
    this.shape_50.graphics
      .f('#247B88')
      .s()
      .p('AgsAYQAAgGACgBQAVgLALgQQgXAGAGgSQAAgCAGABQAFAAAFACQAYAJAgAEQgZAfg1ABIgLAAg')
    this.shape_50.setTransform(-88.275, 147.47)
    this.shape_51 = new cjs.Shape()
    this.shape_51.graphics
      .f('#1494B6')
      .s()
      .p('AhdBoQhRg7hVg1QABgGDkhCQDhhDA2BjIAAAMQgFAAgBACQgGASAXgHQgLASgUAJQgCABgBAGQABAGgDABQiWA0idAmQgGgBgEgDg')
    this.shape_51.setTransform(-115.4, 148.714)
    this.shape_52 = new cjs.Shape()
    this.shape_52.graphics
      .f('#1096B3')
      .s()
      .p('AhaBdQhag4hag5IAMgBQCqgnCwgjQAGAAAFADQBNAvBfAfQAAAFgDACQiiBDi6AjQgFAAgFgCg')
    this.shape_52.setTransform(-83.575, 120.8)
    this.shape_53 = new cjs.Shape()
    this.shape_53.graphics.f('#1795B5').s().p('AjYgBIgGgBQBMg0DVgWQAGAAAEADQBCAyBPAkQABAGgDACQh4A4hlAAQh5AAhehOg')
    this.shape_53.setTransform(-126.1964, 129.7621)
    this.shape_54 = new cjs.Shape()
    this.shape_54.graphics.f('#118EAE').s().p('AjhAOQAAgHADgCQA9g/DRgQQAGAAAEACQBKAwBeAbQAAAGgCABQh8BBhxAAQhuAAhmg9g')
    this.shape_54.setTransform(-122.0708, 107.8133)
    this.shape_55 = new cjs.Shape()
    this.shape_55.graphics
      .f('#0F8DAA')
      .s()
      .p('AhaBSQhMgvhRgoQAAgHABAAQCYgqCggdQAGAAAEADQBLAxBhAaQAAAGgBABQigAwinAiQgFAAgFgCg')
    this.shape_55.setTransform(-81.325, 98.75)
    this.shape_56 = new cjs.Shape()
    this.shape_56.graphics.f('#2286A2').s().p('AiDgiIAAgGQCMgGB7BPQAAAGgBABQgTABgSAAQiAAAhhhLg')
    this.shape_56.setTransform(-51.2917, 91.6326)
    this.shape_57 = new cjs.Shape()
    this.shape_57.graphics.f('#565C60').s().p('AuICAIAJgBIcIkJQuQCat3B6IgJABIgBgLg')
    this.shape_57.setTransform(-442.675, -439.05)
    this.shape_58 = new cjs.Shape()
    this.shape_58.graphics.f('#7D8288').s().p('AiRAWQCRgaCRgWIABALIkaApIgJABg')
    this.shape_58.setTransform(-547.65, -423.525)
    this.shape_59 = new cjs.Shape()
    this.shape_59.graphics.f('#EFF3E1').s().p('AgDAAIADAAIAEAAIgEABIgDgBg')
    this.shape_59.setTransform(-285.15, -442.3)
    this.shape_60 = new cjs.Shape()
    this.shape_60.graphics
      .f('#1095BE')
      .s()
      .p('AwKGaQhtg/hchNQC7hEC/g6QNxkOOVkjQAGABAGACQCOA3CNA7QjrBokEBPQuIETtlEEQAAgGgCgCg')
    this.shape_60.setTransform(35.375, 190.425)
    this.shape_61 = new cjs.Shape()
    this.shape_61.graphics.f('#25838E').s().p('AgMgKQAEgCAGAAIAMAAIANABQAAAMgFAKQgBACgHAAQgxgHAbgQg')
    this.shape_61.setTransform(98.141, 111.2958)
    this.shape_62 = new cjs.Shape()
    this.shape_62.graphics
      .f('#1695B3')
      .s()
      .p('Ag/BWQhZg0hkgqQAGAAAGgBQCDgvCRggQAGAAAGACQBmAiBmAkQABAHgDABQiRA5idAoQgGAAgFgDg')
    this.shape_62.setTransform(114.4036, 137.675)
    this.shape_63 = new cjs.Shape()
    this.shape_63.graphics
      .f('#1496B3')
      .s()
      .p('Aj7AUQgCgBAAgHQAHABABgDQAFgKAAgMIgNgBIgNAAQABgGACgBQCUgoCYgkQAGABAGABQB4AkBiA8QiZAwiaAtQgFABgGAAQhigmhmgmg')
    this.shape_63.setTransform(124.525, 111.35)
    this.shape_64 = new cjs.Shape()
    this.shape_64.graphics.f('#0A9CBE').s().p('AAsACIAAAHQivgeCvAXg')
    this.shape_64.setTransform(47.7875, 156.9466)
    this.shape_65 = new cjs.Shape()
    this.shape_65.graphics
      .f('#1996B3')
      .s()
      .p(
        'AhzBxQhdg5hjgyQAGAAAFgCQDAhBDMg2QAGAAAFADQBdA0BoArQAAAGgDABQjRA8jIBCQgGAAgFgDgAgYA6QA8AfAohnQhuhSgVBOIgGAVIgMAAQg/AABwA3gACtgqIAAgHQhOgKgJAAQgMAABjARg'
      )
    this.shape_65.setTransform(34.9, 162.1)
    this.shape_66 = new cjs.Shape()
    this.shape_66.graphics.f('#0899BE').s().p('AgOA2Qh5g7BUAFIAGgWQAWhOBtBRQgfBQgrAAQgMAAgOgHg')
    this.shape_66.setTransform(33.879, 162.5011)
    this.shape_67 = new cjs.Shape()
    this.shape_67.graphics.f('#1997B8').s().p('AkNAuQAAgGADgCQBqhWD8gyQAAAGACACQBUAxBcAoQAAAFgCACQihBdiYAAQhyAAhug1g')
    this.shape_67.setTransform(-13.4, 175.9536)
    this.shape_68 = new cjs.Shape()
    this.shape_68.graphics
      .f('#1895B4')
      .s()
      .p('AgVBcQh6g2hug8QAAgGACgBIEihFQAGAAAFADQBmAzBmA2QAAAGgBABQiTAhh8AxQgBgGgCgBg')
    this.shape_68.setTransform(-3.4, 148.575)
    this.shape_69 = new cjs.Shape()
    this.shape_69.graphics.f('#0698BD').s().p('AkJAvIgXgCQFnikDaBVQAAAGgCABQjKBbi8AAQhSAAhQgRg')
    this.shape_69.setTransform(-3.35, 122.8915)
    this.shape_70 = new cjs.Shape()
    this.shape_70.graphics
      .f('#1F92AD')
      .s()
      .p(
        'AihB8Qhugvhkg6IALgBQERhCELhNQAGAAAFACQBXAvBeAtQAAAGgCABQkABUkIBCQgFAAgGgCgAkWAuIAXACQEGA5EiiDQACgBAAgGQhJgdhbAAQiuAAjvBsg'
      )
    this.shape_70.setTransform(-4.3708, 122.775)
    this.shape_71 = new cjs.Shape()
    this.shape_71.graphics
      .f('#159AB6')
      .s()
      .p('Ag2BhQhpg4hkg9IAMgBQCNgjCHgrQAGAAAFADQBqA4ByAyQAAAGgDABQiUAviYAkQgGAAgFgDg')
    this.shape_71.setTransform(36, 136.125)
    this.shape_72 = new cjs.Shape()
    this.shape_72.graphics.f('#1D97B9').s().p('AjIAKIgGgBQBYg/CLgRQAGAAAFADQBSA0BdAqQAAAGgCABQheAnhZAAQhxAAhtg+g')
    this.shape_72.setTransform(77.1792, 147.4539)
    this.shape_73 = new cjs.Shape()
    this.shape_73.graphics
      .f('#138EAD')
      .s()
      .p('AhDBiQhehAhog2QAHAAAFgBQCGgvCUggQAGAAAGACQB0AkBtAuQAAAHgBAAQigA7ihAzQgHAAgEgDg')
    this.shape_73.setTransform(77.55, 124.775)
    this.shape_74 = new cjs.Shape()
    this.shape_74.graphics
      .f('#2F90A3')
      .s()
      .p('ABIAvQgFgCgGAAQAAgGACgFQAEgIAGgGQhHgxhvgNIgBgGIAMAAQBzgHBdBMQAEAdgYAAQgHAAgLgDg')
    this.shape_74.setTransform(60.8114, 105.8686)
    this.shape_75 = new cjs.Shape()
    this.shape_75.graphics
      .f('#1092B1')
      .s()
      .p('AjPgJQgFgDgGAAQB5giB4ghQAGgCAGAAIAAAGQBwANBIAyQgHAGgDAHQgDAFAAAGQhiAphtAcQgGABgFAAQhmgrhdgwg')
    this.shape_75.setTransform(46.25, 109.195)
    this.shape_76 = new cjs.Shape()
    this.shape_76.graphics.f('#0391BA').s().p('AAhgJQAAAHgCAAQg5AMgGAAQgHAABIgTg')
    this.shape_76.setTransform(57.4623, 63.8769)
    this.shape_77 = new cjs.Shape()
    this.shape_77.graphics
      .f('#1E8EA9')
      .s()
      .p('AgYA3QhwgpgvgwQAHAAAFgCQC+g1CkBWQAAAGgBABQhYAmhqAPIgMgCgAAKgMQACAAAAgGQiDAiCBgcg')
    this.shape_77.setTransform(59.6, 64.8278)
    this.shape_78 = new cjs.Shape()
    this.shape_78.graphics
      .f('#118FB3')
      .s()
      .p('Ag7BUQhqgzhngzIALgBQCignCugbQAHAAADADQBMA0BoAYQAAAGgCAAQihAriaArQgGAAgFgCg')
    this.shape_78.setTransform(-21.575, 84.15)
    this.shape_79 = new cjs.Shape()
    this.shape_79.graphics.f('#1294AE').s().p('AjyAIIgGAAQB6gtDBglQAHAAAEADQBLApBgAXQAAAGgDABQiOBLh8AAQh3AAhnhDg')
    this.shape_79.setTransform(22.45, 72.4969)
    this.shape_80 = new cjs.Shape()
    this.shape_80.graphics
      .f('#1499B5')
      .s()
      .p('AiJBlQhRgvhVgrQAAgGABAAQDdg0DYg4QAFAAAFADQBLAwBUAqQAAAGgBABQjcAxjRA6QgHAAgEgDg')
    this.shape_80.setTransform(12.1, 96.825)
    this.shape_81 = new cjs.Shape()
    this.shape_81.graphics.f('#0198BD').s().p('AAlgNQAAAGgCABQhCAUgFAAQgFAABOgbg')
    this.shape_81.setTransform(144.9248, 82.6689)
    this.shape_82 = new cjs.Shape()
    this.shape_82.graphics.f('#0C99BD').s().p('AARAAIAAAGQhEgTBEANg')
    this.shape_82.setTransform(111.2125, 94.8909)
    this.shape_83 = new cjs.Shape()
    this.shape_83.graphics
      .f('#1F93AB')
      .s()
      .p(
        'AkCAXIgGAAQBcg9DsguQAAAGABABQBmAlBiAmQAAAGgCABQiYBQiJAAQh5AAhvg+gAi5AmQABAGAAAHQCuA4CFhoQAEgDAAgFQg2gMhUgcQgFgCgHAAQiqAoAIAtgAC9ACIAAgFQgcgGgFAAQgIAAApALg'
      )
    this.shape_83.setTransform(94.025, 95.2769)
    this.shape_84 = new cjs.Shape()
    this.shape_84.graphics.f('#049ABB').s().p('AiaAoQAAgHgBgGQgIgtCpgoQAHAAAFACQBVAcA2AMQAAAGgEADQhXBChnAAQg4AAg9gTg')
    this.shape_84.setTransform(91.0321, 96.3831)
    this.shape_85 = new cjs.Shape()
    this.shape_85.graphics
      .f('#2290A3')
      .s()
      .p(
        'AkRAmIgGAAQByhYEngfQABAHABAAQBOAdBGAfQAAAHgDABQi5BYidAAQhvAAhhgsgAjmA0IAGAAQDgAsCxh0QADgCAAgGQhAgKg5AAQisAAh1Bag'
      )
    this.shape_85.setTransform(67.425, 81.686)
    this.shape_86 = new cjs.Shape()
    this.shape_86.graphics.f('#0697B8').s().p('AjHAnIgGAAQCch4D+AoQABAGgDACQiBBUiZAAQg6AAg+gMg')
    this.shape_86.setTransform(64.8536, 82.9043)
    this.shape_87 = new cjs.Shape()
    this.shape_87.graphics.f('#118EAB').s().p('AjgAlIgGAAQBGhLDugjQAGAAAEADQA7AsBTAUQABAGgDABQiLBJiCAAQhdAAhaglg')
    this.shape_87.setTransform(117.8542, 68.7136)
    this.shape_88 = new cjs.Shape()
    this.shape_88.graphics.f('#1C8BA8').s().p('AijgJQABgHABAAQCrg3CaBOQAAAGgCABQhHAahEAAQhfAAhbgxg')
    this.shape_88.setTransform(110.5, 51.5321)
    this.shape_89 = new cjs.Shape()
    this.shape_89.graphics.f('#1E88A3').s().p('AihgiIANgBQCogeCOBWQAAAGgCABQhEAQg5AAQh+AAhGhOg')
    this.shape_89.setTransform(85.475, 57.5631)
    this.shape_90 = new cjs.Shape()
    this.shape_90.graphics.f('#258DA6').s().p('AhugSIgHAAQBZguCSBXQAAAGgBAAQghAGgeAAQhaAAhKg1g')
    this.shape_90.setTransform(132.975, 46.2449)
    this.shape_91 = new cjs.Shape()
    this.shape_91.graphics
      .f('#F2F5E4')
      .s()
      .p(
        'AsBJfQl6jvlmj5QCjhJC0g6QN4kkOnkyQAHABAFADQGgDZGhDnQjTBjjrBSQukFIt2EEQgGgBgFgDgAyLBWQhMAahMAVQD+DKEgCxQADACAAAGQOGkhOmlBQB9gsBrhAQlHiOkqigQgFgDgHAAQuyEktuEpg'
      )
    this.shape_91.setTransform(144, 258.175)
    this.shape_92 = new cjs.Shape()
    this.shape_92.graphics.f('#1B90A6').s().p('AgnBSQhmgrhag0IAMgBQCNgaCAgrQAGAAAFADICrBRQAAAGgCABQh/ApiCAjQgGAAgGgCg')
    this.shape_92.setTransform(155.25, 125.4)
    this.shape_93 = new cjs.Shape()
    this.shape_93.graphics.f('#0993C1').s().p('Aj4AYQABgHADgCQDTigEaB7QAAAGgEADQh4BZiOAAQhtAAh6g0g')
    this.shape_93.setTransform(177.35, 144.5382)
    this.shape_94 = new cjs.Shape()
    this.shape_94.graphics.f('#0790B7').s().p('AAmgCIAAAFQiYgBCYgEg')
    this.shape_94.setTransform(238.525, 127.825)
    this.shape_95 = new cjs.Shape()
    this.shape_95.graphics
      .f('#238EAD')
      .s()
      .p(
        'AhKB4QiQg2h/hIQAGAAAGgBQDNhBDegxQAHAAAGACQB5A1B2A7QAAAHgCAAQjMA/jJA8QgHgBgGgCgAjwAPQgCABgBAIQEaB5DTifQADgDAAgGQh5g1htAAQiOAAh5Bbg'
      )
    this.shape_95.setTransform(176.855, 144.6)
    this.shape_96 = new cjs.Shape()
    this.shape_96.graphics
      .f('#1A8EAD')
      .s()
      .p(
        'AgiB0QiRhCiHhJQAGABAGgCQCrgxCvgtQAHAAAFADQB7A+CIAyQAAAGgCABQiiBCisAxQgHAAgGgDgAjpgOQgCABAAAGQB5BIB1gFQACAAgBgGQhXhhDBgaQACAAAAgHQjAAJiZA1gACmgBIAAgGQiZAFCZABg'
      )
    this.shape_96.setTransform(225.775, 128.325)
    this.shape_97 = new cjs.Shape()
    this.shape_97.graphics.f('#0A92B9').s().p('AitABQAAgGACAAQCZg2DAgJQAAAHgCAAQjBAaBXBhQABAHgCAAIgOAAQhuAAhyhEg')
    this.shape_97.setTransform(219.575, 127.4882)
    this.shape_98 = new cjs.Shape()
    this.shape_98.graphics.f('#1793B0').s().p('Al8BSIgHAAQD7hwF4hAQAGAAAGADQA/AeBJAXQAAAHgDABQkvB9kZAAQhbAAhagNg')
    this.shape_98.setTransform(203.55, 65.5455)
    this.shape_99 = new cjs.Shape()
    this.shape_99.graphics
      .f('#1594B0')
      .s()
      .p('AkGAgQAAgGACgBQBkgwDYg3QAGAAAFADQBbAuBpAhQAAAHgDABQiYBDiNAAQh2AAhvgvgABDgFQACgBAAgGQiTAyCRgrg')
    this.shape_99.setTransform(141.7786, 82.5671)
    this.shape_100 = new cjs.Shape()
    this.shape_100.graphics.f('#1694AE').s().p('AkOAPIgGAAQBMg6DjgoQAGAAAHADQBuApB/AcQAAAHgCABQijBXiOAAQh/AAhxhFg')
    this.shape_100.setTransform(173.15, 96.7949)
    this.shape_101 = new cjs.Shape()
    this.shape_101.graphics.f('#1598B3').s().p('Al6BKQAAgGACgBQEFhSFBhXQAAAGACABQBeAeBNAsQAAAHgDABQkIB0j3AAQh7AAh4gdg')
    this.shape_101.setTransform(174.975, 52.7417)
    this.shape_102 = new cjs.Shape()
    this.shape_102.graphics
      .f('#1B93B1')
      .s()
      .p('AjLAZIgGAAQBggzC0gmQAAAGADACQBFAgBIAaQAAAGgDACQh0A3huAAQhfAAhagogAB2gFIABgGQjIAbDHgVg')
    this.shape_102.setTransform(161.35, 38.1024)
    this.shape_103 = new cjs.Shape()
    this.shape_103.graphics.f('#069AC0').s().p('AAygHIAAAGQhXAJgLAAQgOAABwgPg')
    this.shape_103.setTransform(168.2187, 37.7042)
    this.shape_104 = new cjs.Shape()
    this.shape_104.graphics.f('#949E9A').s().p('AglAAQAlgGAmAAIAAANIhLgHg')
    this.shape_104.setTransform(159.05, 5.925)
    this.shape_105 = new cjs.Shape()
    this.shape_105.graphics.f('#1491B3').s().p('AmhBOQAAgGACgBQEMhmFnhPQAHAAAGACQBjAmBeAtQAAAGgDACQkcCAkSAAQiKAAiIghg')
    this.shape_105.setTransform(233.375, 78.2806)
    this.shape_106 = new cjs.Shape()
    this.shape_106.graphics
      .f('#17477C')
      .s()
      .p(
        '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'
      )
    this.shape_106.setTransform(-43.4386, 172.3)
    this.shape_107 = new cjs.Shape()
    this.shape_107.graphics
      .f('#148EB9')
      .s()
      .p('ACPDVQjIhTjPhLQgHAAgGACQkhCaj+hpIgHAAQIFikJqicQAHAAAGADQD2BnEFBhQAAAGgDACQlACAlcBaQgIAAgGgCg')
    this.shape_107.setTransform(255.4, 102.825)
    this.shape_108 = new cjs.Shape()
    this.shape_108.graphics
      .f('#2F8DBE')
      .s()
      .p(
        'Eg7eAVFIAAgpQCmgZCRg0QL6kUMkkYQNOkmNxk+QOXlLPTlaMAg+gLqQACAXgCAVIAAAPQweGcwTFpQvKFRubFLQtvE8tPEtI4eIsQiJAwhmAAQgyAAgpgMg'
      )
    this.shape_108.setTransform(198.4625, 328.5472)
    this.shape_109 = new cjs.Shape()
    this.shape_109.graphics
      .f('#186D92')
      .s()
      .p('AgRBIIAAgOQACgWgCgWIAAgOIAAg7QAJABAGgDQAJgEAIgHQAKBaggA0QgBADgGAAIgDgBg')
    this.shape_109.setTransform(580.8517, 191.0536)
    this.shape_110 = new cjs.Shape()
    this.shape_110.graphics.f('#2F6B82').s().p('AgTACQgEgDAAgHQAJAAAAgDQAMgVAaAaQgHAGgGAIQgDAGAAAHQgOgHgNgMg')
    this.shape_110.setTransform(578.3, 181.5258)
    this.shape_111 = new cjs.Shape()
    this.shape_111.graphics
      .f('#AD539B')
      .s()
      .p(
        'EgktAdtQgwjUgujUQlb4bk15CQgnjLgdiHQFig9BSgLIAJgCQBRgLJUhcQEJgmE+g5QE+g7BhgPQBigOCVgcQCVgcdnlTINNh1QABAgALAnIBJD3QA9DSCPI/QCPI+C1NVQApDlAvDhQA/EuBXFkQBXFoBwGfQANAzAPAdIABACQlKBcpvCJIk+BHQoABzp/CYQtODIpSCYQpTCZs+DiQh1nxhxn1g'
      )
    this.shape_111.setTransform(-229.275, -178.6)
    this.shape_112 = new cjs.Shape()
    this.shape_112.graphics
      .f('#26699D')
      .s()
      .p(
        'EggxBNVQinh6k5k0Qk5k0oyoiQogoSoMn7QiSiNiMiOQg1gwh/h5IgMgLQgEhggMiRQAAgbgEggIgLhaIgCgBIgBgYIABAYIgcgDIAAgPIAbgGIBPgVIgJiLIANA7QAEASAAgHIgDgLIgPhDIgah1IASgEIgCgbIACANIACANIAMgDIgQgXMgOzhV+QAeg3ArgoIAJgCIAegIQBWgYBlgKIAJgBIEbgqIAIgBQN3h7OSiaQJohcKBhlQDlglDmghQNriDN6hfQABAGBFgRQBFgRAjCrQA6DQA2DcQELRUESRXQCOJDCWJHQCBH4CGH7IAFAQIAOA3QAHAiAKAXIAEAIQAKATATABIABACIAAAGIgBgIQgOAKAPgCIAAABIABAEIAYAAQnDBzqKCnQq0CxtzDbQoICBnyB3IlKBXIk0BJQqKCbpOC3Il2BkQgNAYKRigQNhjSMrjCQNcjOOEjiQKbioSxlFQBagXgggzQAXgbBsgHIAhAJQJgCdIiDpQPoGsQnGVQJLDgHHFPQitGAlaCKQlaCKqaD7QqaD7r7EkQr8EjxWGZQxWGZq7EMQq7ELj/A5QhSAThJAAQiaAAhwhSgEgcdBIbQB8AkDOhJIYdorQNPkuNvk7QOclNPKlQQQTlqQemcQAJABABgDQAhg0gKhbQgIAHgKAEQgGADgJgBIAAA7IAAAPMgg+ALqQvTFZuYFNQtxE9tOEnQsjEXr6EUQiRA0imAZMgp4gmBMAp4AmBgEAKpA0TQnalnnglMImujtIIgibQOEj/OXkpIBIgXQMjGuMlFPIAAgGQqtmQtLmBQOKknOblMQvdmju1mAIgQgGQgxAPhKAVQmCB4nBBiIjzA2QtSC8sVC9I6aGUQsRC8rTDMQC6CxDECqIR8PhQHbijIGiTIOvkLIGnEVQInFQJQEHIAAAAgEAEWAoJQi1A7ihBJQFkD5F6DvQAFADAGABQN3kEOllIQDqhTDThjQmhjnmfjZQgGgDgGgBQupEyt3EkgEgqgAwrIAKABIATABIgagCIgDAAgEgqWAwfIAjAGQgVgHgJAAIgFABgEgpdAweIADgDQgIgBgHgEgEhKjAd7QBqCPCNBoQACACgBAFQABAFABABQATAFABgUQAAgJgDgNIAAAAIgJgBQiEh9iIh2QgDgDgFAAIASAYgEhF9AgwIADAAIgDgCIAAACgEhLYAdWQgGA4APAfIAAgLIAAhOIAsAnIgsgnIAAgIIgJgBIAAALgEBaJAcMQgBACgJAAQAAAHAEAEQAOAMAOAIQABgIADgFQAFgJAHgHQgPgOgKAAQgIAAgFAKgEhNpAW0IAsEiIgskiIgCgNIACANgEgQXhHXQ9pFTiVAcQiVAchhAOQhhAPk/A7Qk+A6kIAmQpVBchRAKIgJACQhSALlhA9QAdCIAnDKQE1ZCFaYdQAvDUAwDSQBxH1B1HyQM+jiJSiZQJSiZNPjIQJ/iXIBh0IE+hHQJuiIFJhcIgBgCQgOgdgOgzQhvmfhYloQhWlkg/kuQgvjigpjkQi2tWiPo+QiOo+g9jTIhJj3QgKgmgCghgEgsihFHIgEABIADACIAFgDIgEAAgEgcdBHxgEhLPAdUgAboaOIADgBQABABABAAQAAABAAABQABAAAAAAQAAABgBAAIgFgDgAWFBuIAzgGIgzAGg'
      )
    this.shape_112.setTransform(-0.025, -0.0007)
    this.shape_113 = new cjs.Shape()
    this.shape_113.graphics
      .f('#24B1ED')
      .s()
      .p(
        'EgktAdtQgwjUgujUQlb4bk15CQgnjLgdiHQFig9BSgLIAJgCQBRgLJUhcQEJgmE+g5QE+g7BhgPQBigOCVgcQCVgcdnlTINNh1QABAgALAnIBJD3QA9DSCPI/QCPI+C1NVQApDlAvDhQA/EuBXFkQBXFoBwGfQANAzAPAdIABACQlKBcpvCJIk+BHQoABzp/CYQtODIpSCYQpTCZs+DiQh1nxhxn1g'
      )
    this.shape_113.setTransform(-229.275, -178.6)
    this.shape_114 = new cjs.Shape()
    this.shape_114.graphics
      .f('#26699D')
      .s()
      .p(
        'EggxBNVQinh6k5k0Qk5k0oyoiQogoSoMn7QiSiNiMiOQg1gwh/h5IgMgLQgEhggMiRQAAgbgEggIgLhaIgCgBIgBgYIABAYIgcgDIAAgPIAbgGIBPgVIgJiLIANA7QAEASAAgHIgDgLIgPhDIgah1IASgEIgCgbIACANIACANIAMgDIgQgXMgOzhV+QAeg3ArgoIAJgCIAegIQBWgYBlgKIAJgBIEbgqIAIgBQN3h7OSiaQJohcKBhlQDlglDmghQNriDN6hfQABAGBFgRQBFgRAjCrQA6DQA2DcQELRUESRXQCOJDCWJHQCBH4CGH7IAFAQIAOA3QAHAiAKAXIAEAIQAKATATABQgOAKAPgCIAAABIABAEIAYAAQnDBzqKCnQq0CxtzDbQoICBnyB3IlKBXIk0BJQqKCbpOC3Il2BkQgNAYKRigQNhjSMrjCQNcjOOEjiQKbioSxlFQBagXgggzQAXgbBsgHIAhAJQJgCdIiDpQPoGsQnGVQJLDgHHFPQitGAlaCKQlaCKqaD7QqaD7r7EkQr8EjxWGZQxWGZq7EMQq7ELj/A5QhSAThJAAQiaAAhwhSgEgcdBIbQB8AkDOhJIYdorQNPkuNvk7QOclNPKlQQQTlqQemcQAJABABgDQAhg0gKhbQgIAHgKAEQgGADgJgBIAAA7IAAAPMgg+ALqQvTFZuYFNQtxE9tOEnQsjEXr6EUQiRA0imAZMgp4gmBMAp4AmBgEAKpA0TQnalnnglMImujtIIgibQOEj/OXkpIBIgXQMjGuMlFPIAAgGQqtmQtLmBQOKknOblMQvdmju1mAIgQgGQgxAPhKAVQmCB4nBBiIjzA2QtSC8sVC9I6aGUQsRC8rTDMQC6CxDECqIR8PhQHbijIGiTIOvkLIGnEVQInFQJQEHIAAAAgEAEWAoJQi1A7ihBJQFkD5F6DvQAFADAGABQN3kEOllIQDqhTDThjQmhjnmfjZQgGgDgGgBQupEyt3EkgEgqgAwrIAKABIATABIgagCIgDAAgEgqWAwfIAjAGQgVgHgJAAIgFABgEgpdAweIADgDQgIgBgHgEgEhKjAd7QBqCPCNBoQACACgBAFQABAFABABQATAFABgUQAAgJgDgNIAAAAIgJgBQiEh9iIh2QgDgDgFAAIASAYgEhF9AgwIADAAIgDgCIAAACgEhLYAdWQgGA4APAfIAAgLIAAhOIAsAnIgsgnIAAgIIgJgBIAAALgEBaJAcMQgBACgJAAQAAAHAEAEQAOAMAOAIQABgIADgFQAFgJAHgHQgPgOgKAAQgIAAgFAKgEhNpAW0IAsEiIgskiIgCgNIACANgEgQXhHXQ9pFTiVAcQiVAchhAOQhhAPk/A7Qk+A6kIAmQpVBchRAKIgJACQhSALlhA9QAdCIAnDKQE1ZCFaYdQAvDUAwDSQBxH1B1HyQM+jiJSiZQJSiZNPjIQJ/iXIBh0IE+hHQJuiIFJhcIgBgCQgOgdgOgzQhvmfhYloQhWlkg/kuQgvjigpjkQi2tWiPo+QiOo+g9jTIhJj3QgKgmgCghgEgsihFHIgEABIADACIAFgDIgEAAgEgcdBHxgEhLPAdUgAboaOIADgBQABABABAAQAAABAAABQABAAAAAAQAAABgBAAIgFgDgAWFBuIAzgGIgzAGgAWEBmIABACIAAAGg'
      )
    this.shape_114.setTransform(-0.025, -0.0007)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_112 },
            { t: this.shape_111 },
            { t: this.shape_110 },
            { t: this.shape_109 },
            { t: this.shape_108 },
            { t: this.shape_107 },
            { t: this.shape_106 },
            { t: this.shape_105 },
            { t: this.shape_104 },
            { t: this.shape_103 },
            { t: this.shape_102 },
            { t: this.shape_101 },
            { t: this.shape_100 },
            { t: this.shape_99 },
            { t: this.shape_98 },
            { t: this.shape_97 },
            { t: this.shape_96 },
            { t: this.shape_95 },
            { t: this.shape_94 },
            { t: this.shape_93 },
            { t: this.shape_92 },
            { t: this.shape_91 },
            { t: this.shape_90 },
            { t: this.shape_89 },
            { t: this.shape_88 },
            { t: this.shape_87 },
            { t: this.shape_86 },
            { t: this.shape_85 },
            { t: this.shape_84 },
            { t: this.shape_83 },
            { t: this.shape_82 },
            { t: this.shape_81 },
            { t: this.shape_80 },
            { t: this.shape_79 },
            { t: this.shape_78 },
            { t: this.shape_77 },
            { t: this.shape_76 },
            { t: this.shape_75 },
            { t: this.shape_74 },
            { t: this.shape_73 },
            { t: this.shape_72 },
            { t: this.shape_71 },
            { t: this.shape_70 },
            { t: this.shape_69 },
            { t: this.shape_68 },
            { t: this.shape_67 },
            { t: this.shape_66 },
            { t: this.shape_65 },
            { t: this.shape_64 },
            { t: this.shape_63 },
            { t: this.shape_62 },
            { t: this.shape_61 },
            { t: this.shape_60 },
            { t: this.shape_59 },
            { t: this.shape_58 },
            { t: this.shape_57 },
            { t: this.shape_56 },
            { t: this.shape_55 },
            { t: this.shape_54 },
            { t: this.shape_53 },
            { t: this.shape_52 },
            { t: this.shape_51 },
            { t: this.shape_50 },
            { t: this.shape_49 },
            { t: this.shape_48 },
            { t: this.shape_47 },
            { t: this.shape_46 },
            { t: this.shape_45 },
            { t: this.shape_44 },
            { t: this.shape_43 },
            { t: this.shape_42 },
            { t: this.shape_41 },
            { t: this.shape_40 },
            { t: this.shape_39 },
            { t: this.shape_38 },
            { t: this.shape_37 },
            { t: this.shape_36 },
            { t: this.shape_35 },
            { t: this.shape_34 },
            { t: this.shape_33 },
            { t: this.shape_32 },
            { t: this.shape_31 },
            { t: this.shape_30 },
            { t: this.shape_29 },
            { t: this.shape_28 },
            { t: this.shape_27 },
            { t: this.shape_26 },
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
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
        .to(
          {
            state: [
              { t: this.shape_114 },
              { t: this.shape_109 },
              { t: this.shape_110 },
              { t: this.shape_108 },
              { t: this.shape_107 },
              { t: this.shape_106 },
              { t: this.shape_105 },
              { t: this.shape_104 },
              { t: this.shape_103 },
              { t: this.shape_102 },
              { t: this.shape_101 },
              { t: this.shape_100 },
              { t: this.shape_99 },
              { t: this.shape_98 },
              { t: this.shape_97 },
              { t: this.shape_96 },
              { t: this.shape_95 },
              { t: this.shape_94 },
              { t: this.shape_93 },
              { t: this.shape_92 },
              { t: this.shape_91 },
              { t: this.shape_90 },
              { t: this.shape_89 },
              { t: this.shape_88 },
              { t: this.shape_87 },
              { t: this.shape_84 },
              { t: this.shape_83 },
              { t: this.shape_85 },
              { t: this.shape_86 },
              { t: this.shape_82 },
              { t: this.shape_81 },
              { t: this.shape_80 },
              { t: this.shape_79 },
              { t: this.shape_78 },
              { t: this.shape_77 },
              { t: this.shape_76 },
              { t: this.shape_75 },
              { t: this.shape_74 },
              { t: this.shape_73 },
              { t: this.shape_72 },
              { t: this.shape_71 },
              { t: this.shape_69 },
              { t: this.shape_70 },
              { t: this.shape_68 },
              { t: this.shape_67 },
              { t: this.shape_66 },
              { t: this.shape_65 },
              { t: this.shape_64 },
              { t: this.shape_63 },
              { t: this.shape_62 },
              { t: this.shape_61 },
              { t: this.shape_60 },
              { t: this.shape_59 },
              { t: this.shape_58 },
              { t: this.shape_57 },
              { t: this.shape_56 },
              { t: this.shape_55 },
              { t: this.shape_54 },
              { t: this.shape_53 },
              { t: this.shape_52 },
              { t: this.shape_51 },
              { t: this.shape_50 },
              { t: this.shape_49 },
              { t: this.shape_48 },
              { t: this.shape_47 },
              { t: this.shape_46 },
              { t: this.shape_45 },
              { t: this.shape_44 },
              { t: this.shape_43 },
              { t: this.shape_41 },
              { t: this.shape_42 },
              { t: this.shape_40 },
              { t: this.shape_38 },
              { t: this.shape_39 },
              { t: this.shape_37 },
              { t: this.shape_36 },
              { t: this.shape_35 },
              { t: this.shape_34 },
              { t: this.shape_33 },
              { t: this.shape_32 },
              { t: this.shape_31 },
              { t: this.shape_30 },
              { t: this.shape_28 },
              { t: this.shape_29 },
              { t: this.shape_27 },
              { t: this.shape_25 },
              { t: this.shape_26 },
              { t: this.shape_24 },
              { t: this.shape_23 },
              { t: this.shape_22 },
              { t: this.shape_21 },
              { t: this.shape_20 },
              { t: this.shape_19 },
              { t: this.shape_18 },
              { t: this.shape_17 },
              { t: this.shape_16 },
              { t: this.shape_15 },
              { t: this.shape_14 },
              { t: this.shape_13 },
              { t: this.shape_12 },
              { t: this.shape_11 },
              { t: this.shape_10 },
              { t: this.shape_9 },
              { t: this.shape_8 },
              { t: this.shape_7 },
              { t: this.shape_6 },
              { t: this.shape_5 },
              { t: this.shape_4 },
              { t: this.shape_3 },
              { t: this.shape_2 },
              { t: this.shape_113 },
              { t: this.shape_1 },
              { t: this.shape },
            ],
          },
          1
        )
        .wait(1)
    )
    // Layer_2
    this.shape_115 = new cjs.Shape()
    this.shape_115.graphics
      .f('#17477C')
      .s()
      .p(
        'EggoAcRQiTgQhwguQh1gvh8hiQhKg8iJiDQjcjUhohwQiui6hxioIh7i2QhLhkhQgyQhTgzi3gnQiOgehQggQgxADgtgDQipgKiFhcQiRhkgbiUQgYiKBUiIQBPh9CHhKQBxg8ChgiQBIgPDagdQIAhFK7i1QDIg0GPhtQGPhtDHg0QUklUVDioQCwgWBjgDQCYgGB5AZQCMAdCvBYQBkAzDGBvQCQBMCpBGQCDAtCnApIEBA+QCWAlBoAhQEaBZDECSQDoCtBPDpQB4gaB5AvQB5AvBIBkQBJBkAGCCQAGCBg+BqQg3BfhuBMQhQA3iGA7QkLB3nUCUQotCvi6BHQg5AWoIDaQldCSjtBBQiBAkimAhQhdASjOAjQvDCingA+QsmBmqJADIgaAAQiVAAhfgKgA/aORQABADACACIAGABIA2AAQgTgNgKgEQgPgFghgCQAIAIAGAKg'
      )
    this.shape_115.setTransform(-0.5697, 204.2294)
    this.timeline.addTween(cjs.Tween.get(this.shape_115).wait(2))
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-596.6, -507.5, 1193.2, 1015.1)
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
      .s('#09255B')
      .ss(9, 1, 1)
      .p('AhdCGQgaAFg8AnQhHAugigjAEdjJQgBgBAAgBQgBABgBABQg6A1hHAPQgTAEgPAB')
    this.shape.setTransform(-65.275, -37.1188)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f()
      .s('#09255B')
      .ss(13, 1, 1)
      .p(
        'AqGl5QgSABgMgEIAAAAQgdgKgEgeIAAABQgBgGACgyQACgyBQhWQBPhVBzAZQABAAAAAAQATAFAKADIALACQAFABADAEQBeAjBeBzQASAVAOASQAzA+AMAPQAOgDA7gTQATgGAIgDQADgBABgBQACgBACgBQAhgJAHgJQAGgLAEgUQAEgSgDgJQgIgVgQgCQgUgBgfAXQgzAkghgFQgGAAgGgCQgegJgOgoIAAAAQgBgEAAgDQABgEADgpQADgpAvguQAwgtAegOQAcgOAPAAQAAAAABAAQAGgCAWgGIgBABQAegJAyATQAuATApA2QCICxCjDaQBEgjAJgzQAIgzABgOQAAgNAehFQACgEAEgCQADgCAEgBQAwgDBEBCQBDBAAJBUQAAAEABAEQAAABAAABQAAAMAOAvQAOAwAbBVQAXBJCUGqAHwLpIoajaQh5gJhigoQgkgPgggSQgggSgegXQgygngqgyQgwg6gkhJQgVgpgQguQhEi3i6gbAwag7QgCgCgCgCQgpjhEYghIABAAQABgBACAAQB+ABBCAOQAbAGARAIQA5AcA8ApQA7AoASAlQAHgMAWg4QgzihhMhK'
      )
    this.shape_1.setTransform(11.2882, -12.2564)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#17477C')
      .s()
      .p('AAoBLQg6gpg6gcQgQgGgcgGQgOgQgGgTQgGgRAAgSQAQgBASgEQBHgPA5g1IACgCIACACQBMBJAzCgQgWA5gHALQgTglg7gog')
    this.shape_2.setTransform(-38.7, -42.3)
    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f('#AD539B')
      .s()
      .p(
        'AAIHYQh4gJhigoQgkgPgggSQgggSgegXQgygngqgyQgwg6gkhJQgVgpgQguQhEi3i6gbIgBgQQg5gUBrgJQBhgJBBA2IANANQBDBCAXAqIBjB4IAsAsIgBABQDIC3BJASQBOASAqgOQCLgBBogHIAEACIFaDDIARAKQAXAoAdAsQhpgbg0BvgAM0KnIgfghIgdgRIgOgNQgCgVAhAkQAAgBAYAXIgKgGIAdAfIAJALIgJgKgALrJuIgQgHQgVgaAlAfIAEAEIgEgCgAj5kGIgIgCQgIgCgHgGQgKgJgGgNQgIgSAAgiIAAgHQgGgIgIgUIgQgiQgJgSgKgNIgWgdIgVgQQgQgNgYgBIgCgBIgCABQgFAAgGABQgiACANgTQAFgHAGgGQAMgNARgMQAagTAJgCQAVgEAbASIAYATQAEADAFAGQArAmASAaQAgArACAsIAAAKQADAIgBAHIgBAIQAAAJABAHIAEANIADANQADAVgNAQQgMAOgSAAIgFgBgACDnbQgVgBAKgbQAKgagHgTQgFgOgFgJQgGgJgGgEQgHgEgLgBIgVABQgJgBgFABQgGACgIAHQgdAXgbACQgNABgMgFIgGgDQgPgIgGgOQgIgSAKgTQAFgIAJgGIAngXQAegTAWgFQAVgFASgDQARgDAVAHQAVAFAFALQAGAKAWAWQALAKABAZQABAWgIAjQgRBGgUAAIgBAAg'
      )
    this.shape_3.setTransform(6.1738, -6.7974)
    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#EDB0F0')
      .s()
      .p(
        'AMWLdIhDg9IgFgEQgkgfAVAaQgOgFgNgEQgdgsgYgoIgRgKIlajDIgEgCQhnAHiMABQgpAOhOgSQhKgSjHi3IABgBIgtgsIhjh5QgWgphEhCIgNgNQhAg2hhAJQhrAJA4AUIABAQQgaAFg8AmQhHAugigjIgEgEQgpjhEYghIAAAAIAEgBQB+ABBBAOQAbAGARAIQA5AcA8ApQA7AoATAlQAGgMAXg4QgzihhNhKQAYABAQANIAVAQIAXAdQAKANAJASIAPAiQAJAUAFAIIAAAHQABAiAIASQAFANAKAJQAHAGAIACIAIACQAVADAPgQQANgQgDgVIgDgNIgEgNQgCgHAAgJIABgIQABgHgCgIIAAgKQgDgsgfgrQgTgagqgmQgGgGgEgDIgXgTQgcgSgUAEQgKACgZATQgSAMgLANQgHAGgEAHQgOATAjgCQAFgBAGAAQg6A2hHAPQgTAEgPAAQgSABgNgEIABAAQgdgKgFgeIAAABQgBgGADgyQACgyBPhWQBPhVBzAZIACAAIAcAIIAMACQAEABAEAEQBeAjBdBzIAhAnIA/BNQAOgDA7gTIAagJIAFgCIADgCQAigJAGgJQAHgLAEgUQAEgSgDgJQgIgVgQgCQgVgBggAXQgyAkghgFIgLgCQgegJgPgoIABAAQgCgEABgDIADgtQADgpAwguQAwgtAdgOQAcgOAPAAIABAAIAcgIIAAABQAdgJAyATQAvATApA2QCICxCjDaQBDgjAJgzQAJgzAAgOQAAgNAfhFQABgEAEgCQAEgCAEgBQAwgDBEBCQBCBAAJBUIABAIQgnBKBeB4QhbgyCdF1QCAEwiRA+QgaC6iPgyIgcgfIAJAGQgYgXAAABQgggkACAVIAOANIA6A3IAUAUIgUgTgABJoYQAGAEAFAJQAFAJAGAOQAHATgKAaQgKAbAVABQAVABAQhHQAIgjgBgWQgBgZgLgKQgVgWgGgKQgGgLgUgFQgVgHgSADQgSADgVAFQgVAFgfATIgnAXQgIAGgFAIQgKATAHASQAGAOAQAIIAFADQAMAFANgBQAdgCAcgXQAIgHAGgCQAEgBAJABIAVgBQAMABAHAEg'
      )
    this.shape_4.setTransform(9.0117, -11.5939)
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
  p.nominalBounds = new cjs.Rectangle(-101.2, -93.2, 225, 162)
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
    this.shape.graphics
      .f()
      .s('#09255B')
      .ss(18, 1, 1)
      .p(
        'EgrsAo9QATh5ATh2QABgFABgFQAijNAhjFQAukNAtj9IA7lkUAGxgmZAEPgK/QJ7mJKwh4QHOhSKXBaQAPAAAQAAQADAAAEAAQAXAAAXAAQAEAAAEAAQAGANAYgFQAEAAAEAAQATAAATAAQAEAAAEAAQAKANAcgFQAEgBAEAAQADAAAEAAQAEAAAEAAQAKANAcgEQAEgBAEAAQADAAAEAAQAEAAAEAAQAGANAYgFQAEgBAEAAQA8ACAvANQAEABAEAAQAGANAYgFQAEgBAEAAQKXBhGfFXQDIClC8CuQCVEfBAFyQABAEAAAEQAAAXAEAWQAAABAEAAQAAATAAATQAAAEAAADQAAAXADAWQAAABAEAAQABATgBATQAAAEAAAEQAAAfAAAeQAAAEAAAEQABBngBBnQAAAEAAAEQAAAeAAAfQAAADAAAEQAAAbAAAbQAAAEAAADQgEAAgDAAQgBAbABAbQAAAEAAADQgBAbABAbQAAAEAAAEQAAAiAAAiQAAAEAAAEQgEAAgEAAQAAAaAAAbQAAAEAAAEQAAAjAAAiQAAAEAAADQgEAAgEAAQAAAbAAAbQAAAEAAADQABAMgBALQAAAEAAAEQgEAAgDAAQAAATAAATQAAAEAAAEQAAAOAAAPQAAAEAAAEQAAATAAATQAAAEAAAEQgEAAgEAAQAAAXAAAXQAAAEAAADQAAATAAAUQAAADAAAEQgEAAgEAAQABATgBATQAAAEAAAEQAAAXAAAXQAAAEAAADQgDAAgEAAQAAAUAAATQAAADAAAEQAAATAAATQAAAEAAAEQgEAAgEAAQAAATAAATQAAAEAAAEQAAATAAATQAAAEAAAEQgEAAgEAAQABATgBATQAAAEAAAEQAAAPAAAPQAAAEAAAEQgDAAgEAAQAAATAAATQAAAEAAAEQAAATAAATQAAAEAAADQgEAAgEAAQABATgBAUQAAADAAAEQABAMgBALQAAAEAAAEQgEAAgDAAQAAAXAAAXQAAADAAAEQAAAPAAAQQAAAEAAADQAAAQAAAPQAAAEAAAEQgEAAgEAAQAAAeAAAfQAAADAAAEQAAAQAAAPQAAAEAAADQAAAMAAALQAAAEAAAEQgEAAgEAAQAAAXAAAXQAAABgDBEQgICkgbIrQgBAWgBAWQgMEAgJCpQgPFAAAAJ'
      )
    this.shape.setTransform(122.5375, 21.3078)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics.f().s('#09255B').ss(9, 1, 1).p('AByA4QAEgBAEAAAh5g3QADARALAVQADAAAFAB')
    this.shape_1.setTransform(59.425, -336.275)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f()
      .s('#09255B')
      .ss(13, 1, 1)
      .p(
        'EgWRgjdQAKgcChi3QBIhZBKhWQFfmZIsjaQIXjSL7ADQEvA1gUCSQAAAEAAAEQAAATAEASQAAABAhCFQA4B2BgBmQACACAAAEQgEAAgEAAQAAAFABAGEAYygsTQANACAdAIQBEASAdAMQAXAKA8AWQHlETFMGoQB7CcC2BcEgg5gdpQE7jKFgilAoyyGQpD2XxTfaQr0VcBTTvQgTIUECOG'
      )
    this.shape_2.setTransform(-109.1874, -54.3521)
    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics.f('#0D2D5E').s().p('AAAABIABgBIAAABIgBAAg')
    this.shape_3.setTransform(-266.05, 76.85)
    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#25B0EB')
      .s()
      .p(
        'AQrAhQiRgaitgGQrsgbpDCuQkyBckSB3QjwBpj3hlQhIgdgwhEQhNhtAVjmQFokaKbhrQK3huLJBbQFcAtDqCMQFyDeDPFuQA1BeABCJQjgmHoYhjg'
      )
    this.shape_4.setTransform(182.9345, -157.8298)
    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f('#26699D')
      .s()
      .p(
        'EAEqA3yQvymvnFgOQl5gLBqyNQAWjrApkaIA7lkUAGxgmZAEPgK/QJ6mJKwh4QHOhSKYBaIAfAAIAHAAIAuAAIAIAAQAGANAYgFIAIAAIAmAAIAIAAQAKANAcgFIAIgBIAHAAIAIAAQAKANAcgEIAIgBIAHAAIAIAAQAGANAYgFIAIgBQA8ACAvANIAIABQAGANAYgFIAIgBQKXBhGfFXQDIClC8CuQCVEfBAFyIABAIQAAAXAEAWQAAAAAAAAQAAABABAAQAAAAABAAQABAAABAAIAAAmIAAAHQAAAXADAWQAAABAAAAQABAAAAAAQABAAAAAAQABAAABAAIAAAmIAAAIIAAA9IAAAIIAADOIAAAIIAAA9IAAAHIAAA2IAAAHIgHAAIAAA2IAAAHIAAA2IAAAIIAABEIAAAIIgIAAIAAA1IAAAIIAABFIAAAHIgIAAIAAA2IAAAHIAAAXIAAAIIgHAAIAAAmIAAAIIAAAdIAAAIIAAAmIAAAIIgIAAIAAAuIAAAHIAAAnIAAAHIgIAAIAAAmIAAAIIAAAuIAAAHIgHAAIAAAnIAAAHIAAAmIAAAIIgIAAIAAAmIAAAIIAAAmIAAAIIgIAAIAAAmIAAAIIAAAeIAAAIIgHAAIAAAmIAAAIIAAAmIAAAHIgIAAIAAAnIAAAHIAAAXIAAAIIgHAAIAAAuIAAAHIAAAfIAAAHIAAAfIAAAIIgIAAIAAA9IAAAHIAAAfIAAAHIAAAXIAAAIIgIAAIAAAuIgDBFIgjLPIgCAsIgVGpQhfJjj4CTQmzEDt0FoQmSCkmtAAQoBAAomjrgEA5IgUDQgBiKg1heQjPlvlyjeQjqiMlcgtQrKhbq3BvQqbBqloEaQgUDnBMBtQAwBEBIAdQD3BlDwhoQESh3EyhdQJEiuLsAbQCtAHCRAaQIYBiDgGIIAAAAgEg6/AqdQkBuFAToVQhTzvL01cQRT/ZJDWWQBbDhBmEpIgBABQAnAtAiBMQA6APifJdQlzEXqcJaQo4ZCKAQSQ1dhdA3gwgEgplAIdIACAAIAAgDIgCADgEgnXgvdIAPAAIAAgJQAjACAMgOQAKgNAZABIAxgxIAFgNQD3h/A7gxQAjgdAygXQAigWA6giQB3hGEohPQEnhOGigpQGhgpEhgqQEggrAcAHQAiAIAXARIACAAQAkANAZAgQAZAgA5AxIAFAFQADARALAVIAIABQgBASgTAFQgTAGhXgaQhXgbixAfQiwAfhyAtQhyAtjlgTQjkgTu6DqQg0ANgjALIggAOQgUAJgMAEQjUBDiJA5QiJA5gpAKQhJANggAAQgaAAABgIg'
      )
    this.shape_5.setTransform(0.0251, 22.9022)
    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AzVKLQnIhBCggyQCmg0CpguIFnhkQCwgxCVgnQCVgnCwgqQCvgrB4AVQB5AQB5AGQBUg8BogVQB2gZB2gKQA+gIA+AIQBiAGBbArQAuAVAyAJQCnAfB9B3IAJAKIBeA2Ij3AkQiSAWiRAYQh2AUh4APQhPAKhPAHQigAQigAEQkDAIj9AtQhPANhQAKIqTBrIjlgggA2oAkQgLgIAAgQQAAgLADgGQAIgLAcgXQBCg1D9ioQCshyEChoQDahXCvgpQAvgKB/gkQDfgeA7AAQA6AACzAMQDCANApAKQAUAEAyARQBAAVAJAKQARASgOASQgOARgYAAQg6gShegKQhdgJh0ASQh0ATjnApQiwAfibADQicADjnBNQjnBNinBvQijBtiBBeQgjAagKAGQgMAGgMAAQgNABgIgHg'
      )
    this.shape_6.setTransform(-56.4262, -325.4)
    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f('#24B1ED')
      .s()
      .p(
        'A85OVQKcpcFzkWQCfpdg6gPQgihMgngtIABgBQhmkphbjgIAArjI4HAAQE7jLFgilIALAAQgCATCEgXQApgKCJg5QCJg5DUhEQAMgEAUgJIAggNQAjgMA0gNQO6jqDjAUQDlATBygtQBygtCxgfQCxgfBXAaQBXAaATgFQATgFABgTIAqAKQBEASAdAMQAXAKA8AWQHlETFMGoQB7CcC2BcQqYhZnOBRQqwB4p7GJUgEOALAgGxAmYIg7FlQgtD8gtENIhEGTIgCAKIgmDuIAmjuIACgKIAIAQIgKgGQCUHSi6ADQi7ACq7AUQqAwSI45BgAnEx6IAAAEQAWgJgDAAIgTAFgEgBKgozQiwAqiUAnQiVAniwAxIloBkQipAvimA0QigAyHJBAIDkAgIKThrQBQgJBQgOQD9gtECgHQCggFCggQQBQgGBPgLQB4gPB1gTQCSgZCRgWID3gkIheg2IgIgKQh+h3imgeQgygKgugVQhbgrhjgGQg+gIg+AIQh2AKh2AZQhnAWhUA7Qh6gGh4gQQgngHgsAAQheAAh3AdgEAVsgsRIAIgBIgIABgEgaCgn3QBIhYBKhWQFfmaIsjaQIYjRL6ADQEvA1gUCSIAAAHQAAATAEATIAhCFQA4B2BgBnQACABAAAEIgIAAIABAMIgFgGQg5gwgZghQgZgfgkgNIgCgBQgXgQgigJQgcgGkhAqQkhAqmgApQmiApknBPQkoBOh3BHQg6AhgiAWQgyAXgjAeQg7Axj3B+IgTAJQhzA6gPAYQAKgcChi4gEAALg1pQh/AkgvALQiuAojaBYQkCBnisByQj9CohCA1QgdAXgHAMQgEAGAAAMQAAAPALAIQAJAHANAAQAMAAAMgHQAKgGAjgZQCAhgCjhtQCnhvDnhNQDnhMCcgEQCcgDCwgfQDngpB0gSQBzgTBeAKQBeAJA6ASQAYAAANgQQAPgSgSgTQgJgKg/gVQgzgRgUgEQgpgKjBgNQizgMg7AAQg7AAjfAegEANmgx9IAAABIAKgMIgKALg'
      )
    this.shape_7.setTransform(-67.975, -47.3271)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
  p.nominalBounds = new cjs.Rectangle(-408.7, -409.8, 820, 813.2)
  ;(lib.Symbol32 = function (mode, startPosition, loop, reversed) {
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
      .ss(13, 1, 1)
      .p(
        'AviFDQJVwHC0k5QBkiuBbi5QBbi9CCilQBOhlBBhyQA3glA4gkEgm9ARTQAAApAGAlQAHA0AQAqQAWA5AlAnQAnAoA4AWQBaAkBXAvQACABAIAGQAfAPAkAWQB0BHCVArQAeAPAgAOQADABAEAAQAOABAHAIQABADAAAEQAyAAA/AsQA/AtIsCLQCbAmB+ASQEpArEahRQDohDDph7QDph8FGjVQFGjWD+j3QD+j4ArgeQAqgfCIimQCHinDLmfQDLmggUnOQgUnOg+AbAviFDIAAAAQAAABgBABQgbBFgUA0Qg9CeAAgDQAZhIAghRQAYg8AbhAIAAgBgEglNANZQABgCAAgBQCVi9C2h4QAGgEA+gmQA/gnA9grQA9grA/gcQA/gcA8gWQA7gVBKgMQBKgMBYAxQBZAxBHA3QBIA4AlgQEglVANtIhaDZ'
      )
    this.shape.setTransform(75.9005, -0.0567)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics.f('#0D2D5E').s().p('AgBAAIADAAIgDABg')
    this.shape_1.setTransform(131.325, 142.4417)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#26699D')
      .s()
      .p(
        'AqvacQh+gSibgmQosiLg/gtQg+gsgzAAQAAgEgBgDQgHgIgOgBQgEAAgDgBQgggOgegPQiVgrh0hHQgkgWgfgPIgKgHQhXgvhagkQg4gWgngoQglgngWg5QgQgqgHg0QgGglAAgpIAOgNIBajZQgPASAXgmQC2DPDbBGQDbBGBkAkQBlAjA5BRQEFFvIrglQAvgDAwgFQAhggAagmQACgDAAgEQCRg1CAhIQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQgqibgBifQAAg1AEg1IABgIQDCiGEWgyQAXgEAIgSQiqixingqQiogqBRiIQDTivGNCFQGOCGDviPQDwiPBIg3QBJg4DIgFQDHgGEKkUQEKkUBAvBQA+gbAUHOQAUHOjLGgQjLGfiHCnQiICmgqAfQgrAej+D4Qj+D3lGDWQlGDVjpB8QjpB7joBDQi5A1i/AAQhkAAhngPgAIoRVIAAABIAEgBIgDgBIgBABg'
      )
    this.shape_2.setTransform(75.9005, 31.545)
    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AtXNVIAIgFQGbk5D9hUQDPhFBtg8QAZgOATgNQBqhICthDIF3iRQgxBihOBOQjgDhk6BAIghANQjuBZjYCGQg9AmjKBiQhtA1iWBGQimBNgnAAQg/AAEAjDgAnmmOQBYinBmieQAggyAyghQB6hPB9hPQGeh0EcAuQEcAvAuAAQgqAag2AnQjvCqkgBfQkhBfjSA/QjTA/hyBSQhxBTgXAHQAChGAihAg'
      )
    this.shape_3.setTransform(156.2168, -96.6676)
    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#24B1ED')
      .s()
      .p(
        'A3uZUQg6hRhkgkQhkgjjchGQjbhGi1jQIABgCQCUi9C2h4IBFgqQA+gnA+grQA9grA/gcQA+gcA8gWQA8gWBKgMQBKgMBYAxQBYAyBIA3QBHA4AlgQQgfBQgZBJIA9ibQA3gcgIhdIABgCIgBAAIMJ1AQBliuBai5QBci9CCilQBOhlBBhyIBvhJQRumFGaGFQFNCDglFoQBIBVAzA2IgCADQhAPCkKETQkKEUjIAFQjHAGhJA3QhJA4jvCQQjwCPmOiGQmMiGjTCvQhSCICpAqQCnArCqCwQgJATgWAEQkWAyjCCFIgBAIQgEA2AAA1QABCfAqCaQAAABgBABQAAABAAAAQAAABAAAAQgBABAAAAQiABHiSA2QAAAEgBACQgaAngiAfQgwAGguADQgyADgwAAQnhAAjtlNgATcohQitBDhqBIQgUANgZAOQhsA7jRBGQj8BUmbE3IgHAGQmhE9GtjIQCVhGBtg1QDKhiA9glQDYiFDuhaIAigMQE6hADgjhQBOhOAxhjgAM06CQh9BOh6BQQgyAgggAyQhmCehZCnQghBAgCBHQAXgIBxhSQByhTDTg+QDSg/EhhfQEhhfDviqQA1gnArgaQgvAAkbgvQhRgNhcAAQjmAAkoBTgAshCRQAvhbA0hgIBEh9IgVgKIAYAKIABABQAEAAmALxIAAAAQBVjHB8jzg'
      )
    this.shape_4.setTransform(77.45, -26.4382)
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
      .f()
      .s('#09255B')
      .ss(13, 1, 1)
      .p(
        'AviFEQJVwIC0k5QBkiuBbi5QBbi9CCilQBOhlBBhyQA3glA4gkEgm9ARTQAAApAGAlQAHA0AQAqQAWA5AlAnQAnAoA4AWQBaAkBXAvQACABAIAGQAfAPAkAWQB0BHCVArQAeAPAgAOQADABAEAAQAOABAHAIQABADAAAEQAyAAA/AsQA/AtIsCLQCaAmB/ATQEpAqEahRQDohCDph8QDph8FGjVQFGjWD+j3QD+j4ArgeQAqgeCIinQCHimDLmgQDLmggUnOQgUnOg+AbAwWHAQAXg8AchAIABAAQgBABAAAAQgbBFgUA0Qg9CeAAgDQAZhIAghRgEglNANZQABgCAAgBQCUi9C3h3QAGgFA+gmQA/gmA9grQA9gsA/gcQA/gcA8gVQA7gWBKgMQBKgMBYAxQBZAxBHA4QBHA3AmgQEglVANtIhaDZ'
      )
    this.shape.setTransform(75.9104, -0.055)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics.f('#0D2D5E').s().p('AgBAAIADAAIgDABg')
    this.shape_1.setTransform(131.325, 142.4417)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#26699D')
      .s()
      .p(
        'AqvadQh/gTiagmQosiLg/gtQg/gsgyAAQAAgEgBgDQgHgIgOgBQgEAAgDgBQgggOgegPQiVgrh0hHQgkgWgfgPIgKgHQhXgvhagkQg4gWgngoQglgngWg5QgQgqgHg0QgGglAAgpIAOgNIBajZQgPASAXgmQC1DPDcBGQDbBGBkAkQBkAjA6BRQEFFvIrgkQAugDAxgGQAhggAagmQACgDAAgEQCRg1CAhIQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQgqibgBifQAAg1AEg1IABgIQDCiGEWgyQAXgEAIgSQiqixingqQiogqBRiIQDTivGNCFQGNCGDwiPQDviOBJg4QBJg4DIgFQDHgGEKkTQEKkUBAvCQA+gbAUHOQAUHOjLGgQjLGgiHCmQiICngqAeQgrAej+D4Qj+D3lGDWQlGDVjpB8QjpB8joBCQi5A1jAAAQhkAAhmgOgAIoRVIAAABIAEgBIgDgBIgBABg'
      )
    this.shape_2.setTransform(75.9104, 31.5455)
    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AtXNVIAIgFQGbk5D9hUQDPhFBtg8QAZgOATgNQBqhICthDIF3iRQgxBihOBOQjgDhk6BAIghANQjuBZjYCGQg9AmjKBiQhtA1iWBGQimBNgnAAQg/AAEAjDgAnmmOQBYinBmieQAggyAyghQB6hPB9hPQGeh0EcAvQEcAuAuAAQgqAag2AnQjvCqkgBfQkhBfjSA/QjTA/hyBSQhxBTgXAHQAChGAihAg'
      )
    this.shape_3.setTransform(156.2168, -96.6608)
    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#24B1ED')
      .s()
      .p(
        'A3uZUQg6hRhkgkQhkgjjchGQjbhHi1jPIABgCQCUi9C3h4IBEgqQA+gnA+grQA9grA/gcQA/gcA7gWQA8gWBKgMQBJgMBZAxQBYAxBIA4QBHA4AlgQQgfBQgZBJIA9ibQA3gcgIhdIABgCIMI1AQBliuBai5QBci9CCilQBOhlBBhyIBvhJQRumFGaGFQFOCDglFoQBHBUAzA3IgCADQhAPCkKETQkKEUjHAFQjIAFhJA4QhJA4jvCQQjwCPmOiGQmMiGjTCvQhSCICpAqQCnArCqCwQgJATgWAEQkWAyjCCFIgBAIQgEA2AAA1QABCeAqCbQAAABgBABQAAABAAAAQAAABAAAAQgBABAAAAQiABHiSA2QAAAEgBACQgaAngiAfQgwAGguADQgyADgvAAQnhAAjulNgATcohQitBDhqBIQgUANgZAOQhsA7jRBGQj8BUmbE3IgHAGQmhE9GtjIQCVhGBtg1QDKhiA9glQDYiFDuhaIAigMQE6hADgjhQBOhOAxhjgAM06CQh9BOh6BQQgyAgggAyQhmCehZCnQghBAgCBHQAXgIBxhSQByhTDTg+QDSg/EhhfQEhhfDviqQA1gnArgaQguAAkcgvQhSgNhcAAQjlAAkoBTgAshCRQAvhbA0hgIBEh9IgVgKIAYAKIABABQAEAAmALxQBWjHB7jzg'
      )
    this.shape_4.setTransform(77.45, -26.4265)
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
  ;(lib.Symbol30 = function (mode, startPosition, loop, reversed) {
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
      .ss(13, 1, 1)
      .p(
        'AviFEQJVwIC0k5QBkiuBbi5QBbi9CCilQBOhlBBhyQA3glA4gkEgm9ARTQAAApAGAlQAHA0AQAqQAWA5AlAnQAnAoA4AWQBaAkBXAvQACABAIAGQAfAPAkAWQB0BHCVArQAeAPAgAOQADABAEAAQAOABAHAIQABADAAAEQAyAAA/AsQA/AtIsCLQCaAmB/ATQEpAqEahRQDohCDph8QDph8FGjVQFGjWD+j3QD+j4ArgeQAqgeCIinQCHimDLmgQDLmggUnOQgUnOg+AbAviFEQgBABAAAAQgbBFgUA0Qg9CeAAgDQAZhIAghRQAXg8AchAgEglNANZQABgCAAgBQCUi9C3h3QAGgFA+gmQA/gmA9grQA9gsA/gcQA/gcA8gVQA7gWBKgMQBKgMBYAxQBZAxBHA4QBHA3AmgQEglVANtIhaDZ'
      )
    this.shape.setTransform(75.9104, -0.055)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics.f('#0D2D5E').s().p('AgBAAIADAAIgDABg')
    this.shape_1.setTransform(131.325, 142.4417)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#26699D')
      .s()
      .p(
        'AqvadQh/gTiagmQosiLg/gtQg/gsgyAAQAAgEgBgDQgHgIgOgBQgEAAgDgBQgggOgegPQiVgrh0hHQgkgWgfgPIgKgHQhXgvhagkQg4gWgngoQglgngWg5QgQgqgHg0QgGglAAgpIAOgNIBajZQgPASAXgmQC1DPDcBGQDbBGBkAkQBkAjA6BRQEFFvIrgkQAugDAxgGQAhggAagmQACgDAAgEQCRg1CAhIQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQgqibgBifQAAg1AEg1IABgIQDCiGEWgyQAXgEAIgSQiqixingqQiogqBRiIQDTivGNCFQGNCGDwiPQDviOBJg4QBJg4DIgFQDHgGEKkTQEKkUBAvCQA+gbAUHOQAUHOjLGgQjLGgiHCmQiICngqAeQgrAej+D4Qj+D3lGDWQlGDVjpB8QjpB8joBCQi5A1jAAAQhkAAhmgOgAIoRVIAAABIAEgBIgDgBIgBABg'
      )
    this.shape_2.setTransform(75.9104, 31.5455)
    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AtXNVIAIgFQGbk5D9hUQDPhFBtg8QAZgOATgNQBqhICthDIF3iRQgxBihOBOQjgDhk6BAIghANQjuBZjYCGQg9AmjKBiQhtA1iWBGQimBNgnAAQg/AAEAjDgAnmmOQBYinBmieQAggyAyghQB6hPB9hPQGeh0EcAvQEcAuAuAAQgqAag2AnQjvCqkgBfQkhBfjSA/QjTA/hyBSQhxBTgXAHQAChGAihAg'
      )
    this.shape_3.setTransform(156.2168, -96.6608)
    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#24B1ED')
      .s()
      .p(
        'A3uZUQg6hRhkgkQhkgjjchGQjbhHi1jPIABgCQCUi9C3h4IBEgqQA+gnA+grQA9grA/gcQA/gcA7gWQA8gWBKgMQBJgMBZAxQBYAxBIA4QBHA4AlgQQgfBQgZBJIA9ibQA3gcgIhdIABgCIMI1AQBliuBai5QBci9CCilQBOhlBBhyIBvhJQRumFGaGFQFOCDglFoQBHBUAzA3IgCADQhAPCkKETQkKEUjHAFQjIAFhJA4QhJA4jvCQQjwCPmOiGQmMiGjTCvQhSCICpAqQCnArCqCwQgJATgWAEQkWAyjCCFIgBAIQgEA2AAA1QABCeAqCbQAAABgBABQAAABAAAAQAAABAAAAQgBABAAAAQiABHiSA2QAAAEgBACQgaAngiAfQgwAGguADQgyADgvAAQnhAAjulNgATcohQitBDhqBIQgUANgZAOQhsA7jRBGQj8BUmbE3IgHAGQmhE9GtjIQCVhGBtg1QDKhiA9glQDYiFDuhaIAigMQE6hADgjhQBOhOAxhjgAM06CQh9BOh6BQQgyAgggAyQhmCehZCnQghBAgCBHQAXgIBxhSQByhTDTg+QDSg/EhhfQEhhfDviqQA1gnArgaQguAAkcgvQhSgNhcAAQjlAAkoBTgAshCRQAvhbA0hgIBEh9IgVgKIAYAKIABABQAEAAmALxQBWjHB7jzg'
      )
    this.shape_4.setTransform(77.45, -26.4265)
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
      .s('#09255B')
      .ss(13, 1, 1)
      .p(
        'AviFDQJVwHC0k5QBkiuBbi5QBbi9CCilQBOhlBBhyQA3glA4gkEgm9ARTQAAApAGAlQAHA0AQAqQAWA5AlAnQAnAoA4AWQBaAkBXAvQACABAIAGQAfAPAkAWQB0BHCVArQAeAPAgAOQADABAEAAQAOABAHAIQABADAAAEQAyAAA/AsQA/AtIsCLQCbAmB+ASQEpArEahRQDohDDph7QDph8FGjVQFGjWD+j3QD+j4ArgeQAqgfCIimQCHinDLmfQDLmggUnOQgUnOg+AbAviFDIAAAAQAAABgBABQgbBFgUA0Qg9CeAAgDQAZhIAghRQAYg8AbhAIAAgBgEglNANZQABgCAAgBQCVi9C2h4QAGgEA+gmQA/gnA9grQA9grA/gcQA/gcA8gWQA7gVBKgMQBKgMBYAxQBZAxBHA3QBIA4AlgQEglVANtIhaDZ'
      )
    this.shape.setTransform(75.9005, -0.0567)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics.f('#0D2D5E').s().p('AgBAAIADAAIgDABg')
    this.shape_1.setTransform(131.325, 142.4417)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#26699D')
      .s()
      .p(
        'AqvacQh+gSibgmQosiLg/gtQg+gsgzAAQAAgEgBgDQgHgIgOgBQgEAAgDgBQgggOgegPQiVgrh0hHQgkgWgfgPIgKgHQhXgvhagkQg4gWgngoQglgngWg5QgQgqgHg0QgGglAAgpIAOgNIBajZQgPASAXgmQC2DPDbBGQDbBGBkAkQBlAjA5BRQEFFvIrglQAvgDAwgFQAhggAagmQACgDAAgEQCRg1CAhIQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQgqibgBifQAAg1AEg1IABgIQDCiGEWgyQAXgEAIgSQiqixingqQiogqBRiIQDTivGNCFQGOCGDviPQDwiPBIg3QBJg4DIgFQDHgGEKkUQEKkUBAvBQA+gbAUHOQAUHOjLGgQjLGfiHCnQiICmgqAfQgrAej+D4Qj+D3lGDWQlGDVjpB8QjpB7joBDQi5A1i/AAQhkAAhngPgAIoRVIAAABIAEgBIgDgBIgBABg'
      )
    this.shape_2.setTransform(75.9005, 31.545)
    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AtXNVIAIgFQGbk5D9hUQDPhFBtg8QAZgOATgNQBqhICthDIF3iRQgxBihOBOQjgDhk6BAIghANQjuBZjYCGQg9AmjKBiQhtA1iWBGQimBNgnAAQg/AAEAjDgAnmmOQBYinBmieQAggyAyghQB6hPB9hPQGeh0EcAuQEcAvAuAAQgqAag2AnQjvCqkgBfQkhBfjSA/QjTA/hyBSQhxBTgXAHQAChGAihAg'
      )
    this.shape_3.setTransform(156.2168, -96.6676)
    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#24B1ED')
      .s()
      .p(
        'A3uZUQg6hRhkgkQhkgjjchGQjbhGi1jQIABgCQCUi9C2h4IBFgqQA+gnA+grQA9grA/gcQA+gcA8gWQA8gWBKgMQBKgMBYAxQBYAyBIA3QBHA4AlgQQgfBQgZBJIA9ibQA3gcgIhdIABgCIgBAAIMJ1AQBliuBai5QBci9CCilQBOhlBBhyIBvhJQRumFGaGFQFNCDglFoQBIBVAzA2IgCADQhAPCkKETQkKEUjIAFQjHAGhJA3QhJA4jvCQQjwCPmOiGQmMiGjTCvQhSCICpAqQCnArCqCwQgJATgWAEQkWAyjCCFIgBAIQgEA2AAA1QABCfAqCaQAAABgBABQAAABAAAAQAAABAAAAQgBABAAAAQiABHiSA2QAAAEgBACQgaAngiAfQgwAGguADQgyADgwAAQnhAAjtlNgATcohQitBDhqBIQgUANgZAOQhsA7jRBGQj8BUmbE3IgHAGQmhE9GtjIQCVhGBtg1QDKhiA9glQDYiFDuhaIAigMQE6hADgjhQBOhOAxhjgAM06CQh9BOh6BQQgyAgggAyQhmCehZCnQghBAgCBHQAXgIBxhSQByhTDTg+QDSg/EhhfQEhhfDviqQA1gnArgaQgvAAkbgvQhRgNhcAAQjmAAkoBTgAshCRQAvhbA0hgIBEh9IgVgKIAYAKIABABQAEAAmALxIAAAAQBVjHB8jzg'
      )
    this.shape_4.setTransform(77.45, -26.4382)
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
      .f()
      .s('#09255B')
      .ss(5, 1, 1)
      .p(
        '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ABIAAAXQABACAAACQAAAHAAAIQAAAIAAAHQAAAHAAAGIAAAXQAAAQAAAQQAAAIAAAHIAAAQQAAADAAAEIgBA2QAAABAAABIAAALQAAABAAABIAAAUQAAABAAABIAAANQAAABAAABQAAAAAAABQgBAjgkAAIgFAAIAAAlQAAAMgIAJQgBABAAAAQgJAIgMAAQgMAAgJgIQAAAAAAAAQgJgJAAgNIAAglIgGAAQgkAAgCgjQAAgBAAAAQAAgBAAgBIAAgNQAAgBAAgBIAAgUQAAgBAAgBIAAgLQAAgBAAgBIAAgdQAAgBAAgBIAAi6QAAgDABgCQAEgeAhAAgEAizgIXQAAgOAJgIIAAABQAJgKAMABQAMAAAJAJQAJAHAAAOIAABFIAFAAQAjgBACAiQAAAAAAABIAABZQAAABAAABIAAAOQAAABAAABIAAALQAAABAAABIAAAUQAAABAAABIAAANQAAABAAABQAAAAAAABQgBAjgkAAIgFAAIAAEpQAAAMgIAJQgBABAAAAQgJAIgMAAQgMAAgJgIQAAAAAAAAQgJgJAAgNIAAkpIgGAAQgkAAgCgjQAAgBAAAAQAAgBAAgBIAAgNQAAgBAAgBIAAgUQAAgBAAgBIAAgLQAAgBAAgBIAAgOQAAgBAAgBIAAhZQAAgBAAAAQACgiAkABIAGAAgAcpsFQAAgNAIgHQAAgBABAAQAAgBAAAAQAIgIANAAQAMAAAJAJIgBgBQAKAJAAANIAAA9IAEAAQAlAAABAjQAAAAAAABQAAABAAABIAAAcQAAABAAAAIAAADQAAAEAAAFIAAATQAAABAAABIAAACQAAABAAABIAADTQAAAAAAABQgDAhgjAAIgEAAIAADyQAAANgJAJQgJAJgMAAQgOAAgIgKIABABQgJgJAAgNIAAjyIgGAAQgiAAgEgdQAAgDAAgCIAAkVQAAgBAAgBQAAgBAAAAQABgjAlAAIAGAAgEAlLgBxIAAhZQAAgDAAgCQAEgeAiAAIAFAAIAAleQAAgNAIgIQABAAAAgBQAAAAABAAQAIgIAMAAQAMgBAJAKIAAgBQAJAIAAAOIAAFeIAFAAQAjAAADAhQAAABAAABIAABZQAAABAAABIAAAOQAAABAAABIAAALQAAABAAABIAAAUQAAABAAABIAAANQAAABAAABQAAAAAAABQgBAjglAAIgF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AKQAJAIAAANIAABFIAEAAQAjAAADAhQAAAAAAABgEgisAJiQAjAAADAhQAAABAAABIAAD3QAAAAAAAAQgCAjgkABIgFAAIAAA9QAAALgIAJQAAAAAAABQgJAIgNABQgMAAgJgJQgJgJAAgMIAAg9IgGAAQgkgBgBgjIAAAAQAAgBAAgBIAAgNQAAgBAAgBIAAgVQAAgBAAgBIAAgLQAAgBAAgBIAAgcQAAgBAAgBIAAikQAAgBAAAAQABgiAkAAIAGAAIAAhFQAAgOAKgIIgBABQAJgJAMAAQANAAAJAJQAIAIAAANIAABFgEglvAMCQAhgBAEAeQABACAAADIAAEWQAAACgBACQgDAfgiAAIgFAAIAAA9QAAAMgIAJQgBABAAAAQgJAIgMAAQgMAAgJgIQAAAAAAAAQgJgJAAgNIAAg9IgGAAQgkAAgCgjQAAAAAAAAQAAgBAAgBIAAgNQAAgBAAgBIAAgVQAAgBAAgBIAAgLQAAgBAAgBIAAgNQAAgBAAgBIAAgNQAAgBAAgBIAAjDQAAgDABgCQAEgeAhABIAGAAIAAgDQAAgOAJgIIAAABQAJgJAMAAQAMAAAJAJQAJAIAAANIAAADgA7/KUQAAABAAABIAAAcQAAABAAABIAAALQAAABAAABIAAAVQAAABAAABIAAANQAAABAAABQAAAAAAAAQgBAjgkABIhGAAQglAAgBgkQAAAAAAAAQAAgBAAgBIAAgNQAAgBAAgBIAAgVQAAgBAAgBIAAgLQAAgBAAgBIAAhpQAAgDAAgCQAEgeAiABIAFAAQAAgOAKgIIgBABQAJgKAMABQAMgBAJAKQAJAHAAAOIAFAAQAjgBACAiQAAAAAAABg'
      )
    this.shape.setTransform(-0.0243, 0)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#89CBF4')
      .s()
      .p(
        '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'
      )
    this.shape_1.setTransform(29.3507, -7.875)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#F3CFF6')
      .s()
      .p(
        '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'
      )
    this.shape_2.setTransform(-39.2002, 0)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-255, -123.3, 510, 246.6)
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
      .s('#09255B')
      .ss(13, 1, 1)
      .p(
        'AbipCQIiCfk5HAQg9BYh7A3Qp5EbnHCtQnHCumkACQmmACoMi5QoMi5kzhpQk0hrDglLQA7hXBLhUQGQkrHRC1QHRC1LMhNQLOhNHemxQFkgJArDpg'
      )
    this.shape.setTransform(115.6951, -22.1029)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#26699D')
      .s()
      .p(
        'AxKH9QoMi6kzhpQk0hrDglKQA7hYBLhTQAkD+G8CvQG9CvJlBNQJlBOKhk6QKhk4CQmyQIiCfk5HBQg9BXh7A4Qp5EanHCuQnHCtmkADIgKAAQmiAAoGi3g'
      )
    this.shape_1.setTransform(115.6951, -10.8862)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#24B1ED')
      .s()
      .p('AkZJUQpmhNm9iwQm8ivgkj+QGQkrHRC1QHRC1LMhNQLOhNHemxQFkgJArDpQiQGxqhE5QobD7n1AAQh8AAh5gPg')
    this.shape_2.setTransform(109.775, -41.3492)
    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f()
      .s('#09255B')
      .ss(10, 1, 1)
      .p(
        'AhrC2QgjgRghgVQgkgXghgaQiMhrjEARQgXAFgtAiQgsAhiDgZIgKgEQgthhDJhHQiLAOAcgvQAcgwBhhLQBhhMB9gHIAAABQAVgBALAAIANgBQABAAAAAAAkUlVIABAAQAUAFAVAHQAeAIAeAMQAQAGAQAHQAQAGAOAGQAJAEAJADQAFADAGACQAIADAIAEQApAQAnADQAKABAJAAAkUlVIBdgwIA1gcIABgBQBwgOBDAMQBFANDLBwQDMBxB8A3QB8A4BFBHAmjilQAdgCAVACQAlAEAoAGQAaAEBuAVQALACANACIAIADAmElmQA1ACA7APAqZh8QAWgHAYgHIABAAApoiLIABAAQBlgTBBgGQAQgBANgBAGLEUIkXBiQgsAPgTAGQgBABAAAAQgkALgeAHQhOARhGgGQg3gFhHgZQg7gUgWgWQgTgTAAgYQAAgWAQgSQAPgTAdgPQAWgLAggKQAagHAlgHQArgHAVgEQASgEARgDAqZh8QAJgOgUASQAGgCAFgCg'
      )
    this.shape_3.setTransform(-111.7608, -64.0734)
    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#AD539B')
      .s()
      .p(
        'AIIEVIhXAJIAbgKQAfgKAPgHIAOgHQACgCBrAhQgZAdgbAlgAiJCZQgkgXghgaQiMhrjEASIgIgKQg/gDBmgZQBdgZBWAXIARAGQBdAdAnAYICTA7IA8AUIgBABIBgAcQhZAdhjAUQgjgRghgVgAidhiIgOgUIgCgDQgGgEA6AHIggAXIgEgDgAhaiKIAHAJIAKAIQACACgPAFQAAgKgEgOgApPiTIACADQgVAOgSAQQAkghABAAgAjGiJIgcgUQgRgKgPgHIgigPIgbgGQgVgEgYADQgJACgFACQgiAIgsAGQgsAGhQAWQAsgeA8gYIBWgjQABABAugFIANgCQAWgCAQAAQAOAAAIADIAMAEQA6ARAdAMQAwAWATAdIAEAGQAGAFACAFQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAIgaAUIhRgRgABGjsQgCgQgNgJQgLgJgIgEQgKgFgHgCQgJgBgKABIgVAFIgOADQgEADgFAFIgBACIgLgEIgSgIIgegLQgQgIgQgGIAHgFQAXgSAUgIQATgHARgFQAQgGAYABQAUgBAKAGQAKAGAfAJQAOAGALAPQAKAPAFAYQAIAcgGANgAiRkmIAJgGQAQAGAQAIIAeALgAiIksIAAAAg'
      )
    this.shape_4.setTransform(-115.55, -65.0271)
    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f('#17477C')
      .s()
      .p(
        'AECEwQgdgEgigJIA/gVIEXhiIBXgJQARAbAUAXIAVAXQjjBHgpACIg5ABQg3AAgsgGgAjHB7QhDgzgng7QgIgMgCgBQgGgHgGgGQgIgFgMgDQgKgDgLABQgNADgJAJIgNASQgKAOgVAKQgVAIgaACQgZABgagGQgYgGgUgNQgZgRgGgYQAAgBhKgaQCDAZAsghQAtgiAXgFQDEgSCMBsQAhAZAkAXIAWAPQARANAXALIgiAHIhAALQglAHgaAHQggAKgWALIgNgJgAkVkNIgBgBIgdACQAagSAVgXQA2ARA4AhQgogGglgEQgVgCgdACQAdgCAVACQAlAEAoAGQAdARAeAWgAiWkDIAAAAg'
      )
    this.shape_5.setTransform(-125.975, -53.675)
    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f('#EDB0F0')
      .s()
      .p(
        'AiiGpQg3gFhHgZQg7gUgWgWQgTgTAAgYQAAgWAQgSQAPgTAdgPQAWgLAggKQAagHAlgHIBAgLIAjgHIAFgBQBkgUBYgdIhfgcIABgBIg9gVIiTg7QgngXhdgdIgRgGQhWgXhcAZQhnAaA/ACIAIAJQgXAFgtAiQgsAhiDgZIgKgEQgthhDJhHQiLAOAcgvQAcgwBhhLQBhhMB9gHIAAABIAggBIANgBIABAAIAHACICVAoIAFgLQAFgJAGgIQAIgKg9APIBdgwQAHgHAHgEQAXgPAQgCIg1AcIA1gcIABgBQBwgOBDAMQBFANDLBwQDMBxB8A3QB8A4BFBHQhJBJgtBSQglBEhhAyQhrgggCABIgOAHQgPAHgeAKIgcAKIkXBiIg/AVIgBABQgkALgeAHQg5ANg0AAQgUAAgTgCgAjTiDIACAEIAPAUIADADIAggYQgmgEgKAAQgCAAgBAAQgBAAAAAAQgBAAAAABQAAAAABAAgAjph0QgegWgdgRQg4ghg2gRQgVAXgaASIAdgCIABABIC6AxIAAAAgAqkh4IgBAAIABAAIALgEIAugOIABAAIACgBIgDgCIAAAAIgIgNIgBgDQgCAAgjAhQAKgOgBAAQgCAAgSASgAiciCIAYAEIAIADIgIgDIgYgEQhugVgagEQAaAEBuAVgAh8h7QAQgFgDgCIgKgIIgHgKQAEAOAAALgAlljMIAbAGIAiAPQAPAGARALIAcATIBRARIAagTQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQgCgFgGgEIgEgHQgTgcgwgWQgdgNg5gRIgNgEQgIgCgOAAQgPgBgXADIgNABQgtAFgCgBIhWAkQg8AXgsAeQBRgWArgGQAsgGAigIQAFgCAJgBIAVgCQAMAAAMADgApniLIgBAAIABAAQBlgTBBgGQhBAGhlATgAgSkiQAIABAJAFQAHAFAMAIQAMAKACAQIAiAJQAFgNgHgdQgGgYgKgOQgLgQgOgFQgdgKgKgFQgKgGgWAAQgYAAgQAFQgRAFgTAIQgUAIgXARIgHAGQgegMgegIQAeAIAeAMIgJAGIBHATIASAHIALAFIABgCQAFgGAFgCIANgDIAVgFIALgBIAJABgAAgj1IgCAAIgBAAIgHAAIgJgBIgCgJQgDgNgGgGQgQgLgRABQgRADgTAQQApAQAnADIAJABIAHAAIABAAIACAAgAhDkJIgQgHIAQAHg'
      )
    this.shape_6.setTransform(-111.7608, -64.0734)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
  p.nominalBounds = new cjs.Rectangle(-201, -111.7, 534.1, 176.5)
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
      .f()
      .s('#FFFFFF')
      .ss(13, 1, 1)
      .p('AKtwvQqaB6lFBqQlGBpgJAZQgIAYAHgVQgRAagKAqQgJAmgEAzQgJBqAaEYQAIAkAJAiIBdFyQBXFdDICuQDICtCeA3QDMAuANAC')
    this.shape.setTransform(-302.4407, 34.25)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f()
      .s('#09255B')
      .ss(13, 1, 1)
      .p(
        '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'
      )
    this.shape_1.setTransform(-0.0192, -13.6233)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f()
      .s('#09255B')
      .ss(9, 1, 1)
      .p(
        'EAgygrVQAFAAAFAAAeICIQBiiRCThkQDsieFqgnQBBgHBHgDQCfgHCKgaQAWgEAWgFIAAAZQAAAFABAFQAGAlgRANQAAAFAAAFQAAAngCAkQgDBBgJA6QgDARgDAPQgFAAgFABQgCABgCAAQgIACgJACQg7ANg8AMQluBImPArQAAAAgBAAQhDAHhDAGQAAAFgBAAQgYAFgZAAQgFAAgFABQh0AXhAgYgEghvgjAQACgCADgBQgEAAgEAAQgDAAgEAAQACAAADABQACABADABgEgrBgH3QAfAAAfAAQAFAAAFAAQCGgECDgIQBygHBvgKQAFgBAFAAEgmkAivQgNADgEAAQABAAABAAQAHgBgFABQAPgCABAAIAYgEIAUgEEgyxArWQABgZAEgXQAEgYAHgV'
      )
    this.shape_2.setTransform(62.5783, -34.825)
    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f('#26699D')
      .s()
      .p(
        'AncGjQg7gBgzgEQhNgHhfgRQg6gLhvgYQhBgPgjgmQgkAYgBgZQAAgLAIgIQAIgIgVhPIAAgBQABgZAEgXQATgNA1AXQBiArBVAJQBVAKB6AYQB5AYA8gFQA8gGDXgpQDWgpB8g0QBbgmBhgkQA8gWA+gWQApgaA3giQDViGBIg3QBIg4BKhQQBJhQgtBbQgtBbgUAVQgTAVgOAaQgOAaglAkQhcBbgsAlQhYBKh1BIQhaA3iFBEQh3A9hPAdQiKAzioATQhtANiDAAIhMgBgADAB5QBgggBcgqQhcAqhgAggAwoCSQgEAXgBAZQgKglAPgLg'
      )
    this.shape_3.setTransform(-155.4166, 223.153)
    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#2F5493')
      .s()
      .p(
        'ADxPsQgagOgaAHIAQgMIAAAAIABAAIANgCIAGgBIAHgBIASgCIgGAAIgKABIAAAAIgUgBIAOgGQATgIAUgDIABAAIACAAIAAAAIgBAPIgIBCQgJgggLgHgAERORIADgCIgBADQgBAOg2AbQA1gdAAgNgAEcM5IAEgdIAAgCIAAgDIAAAAIAAAAIAAgCIAAACIAAAEIAAgEIAAAEIgIBEIAEgmgAEgMUIAAABIAAACIAAgDgAEgMXgAEgMVIAAAAgAEgMVIABgFIAAAAQgjAIk4hhQk5hjjAsMQIiATJtgBIATAAIA3AAIgDAOQgKAogXBuQggCfiODnQiODmgcB7IgKAwIAAAAgAqZmMIABAAIgNAYQAAgEAMgUgAmAqEQCGgTCsgsQJDiZBChfQgOAYANAlQAOAqAYi+QgTEtAKBaIAACUg'
      )
    this.shape_4.setTransform(-287.6, 42.3)
    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f('#21B1EE')
      .s()
      .p('AgNACIASgDQADAGADABIABgBIAAABIgBABIgKAGIgKAIIgBAAIgDgTgAgOgDIAJgDIAFgBIgOAEgAAOgUIABAAIgBAAg')
    this.shape_5.setTransform(-105.5375, -265.3125)
    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f('#27689C')
      .s()
      .p(
        'ALlOOIg+AAQhZgOizgQIgBgFQgigFgjAAIgKAAIgyAAIgKAAIg8AAIgKAAIhQAAIgBgFQgsgFgtAAIgKAAIg7AAIgKAAIhGAAIgKAAIg8AAIgBgFQgxgFgyAAIgKAAIgeAAQAAgFgBAAQgYgFgZAAIgKAAQrXgXjfoPIAAgKIAAhuIAAgKIAAgoQCortKXjOQB0gjK+gnIAoAAIB3AAQBxgBJ+AxIBaAHIADAAIAZgSQkqDkgDADQiCCRhlCuQhTCOgcBhQgcBgBBDgQBADfHGGkIgKABQhvAKhyAHQiDAIiGAEIgKAAgAT0s8IAFACIAFgDIgIAAIgHAAIAFABg'
      )
    this.shape_6.setTransform(-280.725, -176.226)
    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f('#AC539B')
      .s()
      .p(
        'A13SWIgBgPIgFhfIgBgSIACANIAAAGQACAaACgCIAGgOQAGgUgGgXQgFgPgGAaIgBABIAAgCIAAgBIABgFQABgoACgkIADgBIACgPIgCAPIgDABIABgPIgBAAIgBAAIgBAAQgVADgSAIIgWAFIgLAAIAZgXQA1gbACgOIAAgDIADgDIAAAIIAAgIIAEgpIgCgCIAAgCIAIhEIAAgEIAAgCIAKgwQAch7COjmQCOjnAgifQAXhuAKgoIADgOIBHgBQABAAgQAYIgqA+IgvBCQAUBSB8h0IAtgpQBShMAOgFIFmgGQBTgCAtACQFggDDmgGQG1gLDABbQDBBbBiEEQgNAUgKAXQgghcifhFQkbh5nXAQQj8AJiZAIQiGAGg7AHQiAANjWBTQjXBRheEcQhfEbicC2QibC2ASBOQAFAYACATIAAABIgTAbQgbhZgCgdgA19QMIAGhNgA11OwQA5gGg1gnIgEAtIAAAAgA1tNSIAGhIgA3pPOIAHgBIgCABIADABIAKACIgagBIgQACIAYgEgA3kPOIgFAAIAFAAgA3SPIIgBAAIAKgCIADgDIAHAAIgKADIgDABIgFABgA24PHIAAgBIABAAIAFAAIgFAAIAEgDIALAAIAKAAIgKACIgFAAIACAAIgCAAIAFAAIAGgBIADAAIgHABIAEgBIgEABIgGABIgOACIACgBgA2yPGIAHgBIgHABIAFgBIgFABgA2rPFIADAAIgDAAgA2ePDIABAAIAKgBIAFAAIgRACIABgBgAX3E0IAAgoQARANgLAkQgBABgFAAIAAgKgAuoi4IASgBIAAABgAn2r5IAAgKQAeAAAeAEQABAGgBAAIg8AAgAuu0LIATAAIA9AAIAKAAIAAAFIgeADQgeACgeAAIAAgKg'
      )
    this.shape_7.setTransform(-120.393, 44)
    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f('#09255B')
      .s()
      .p(
        'Av3PZIAAAAIgEgBQAJAAATgEIABAAIAMgCIgCAAIADAAIAAAAIgQAMQAbgGAZAOQALAGAJAhIAFAPIAAABIAAABIAAACIABASIAEBgQgcizhMgGgAuSQzIgBgGIgBgNIAAgCIAAAAQAHgaAEAPQAHAWgHAUIgGAOIAAAAQgBAAgCgYgAuUQeIAAAAgAv7PYIADgBIAVgDIAEAAQgTAEgJAAIAAAAgAvcPTIAAAAgAvfPTIAEAAIABAAIAEgBIgGABIgDAAgAvWPSIACAAIACAAIgKABIAGgBgAvUPSIAAAAgAvXPSIAAAAIgBgBIAGAAIgGAAIgCAAIAIAAIgIAAIgFgBIAJgCIACgBIgIAAIACgCQgJAAgBACIgQgBQg+gGhdgfQg6gTgPAUQifg2jIiuQjIithXleIhdlxIgRhGQgakYAJhqQAEgzAJgmQAKgqARgaQgCAFgBACQgBADABgBQAAAAABgDQABgDACgGQAJgZFGhpQFGhqKah6IicgJQAbgGCNAQQALABAKAEQAVAIAPATQACACAhASQgBAAAAAAQAAABAAAAQAAABABAAQAAABAAABQACAEgZAdQgHAHgHAMQgSAdgRA2IgCAFQhCBepECZQirAtiGASIPTCNIBUAMIAAgCIAhADQBwAJAgAAIAyACIABAAIABAAIBDACIAXABIBoAEIGyAOIJEAaIAtACIDkAJQAHABAHACIACAAQAUACAlARQBpAuCGBNQBfA3BLA6QBDA5ApAlQB4BsBICpQAOAhAMAjQACAEAAAFIAAAoIAAAKIAAAKQgDCah0AqIgWAGQglAJA2gOQg1AMg8gTQg/gUgehGIAAgKQABhFARg1IAJgZQAJgXAOgUQhjkEjAhbQjBhbm1ALQjmAGlgADQgtgChUACIllAGQhlgBhMgEIABAIIgTABIATAAIgSAZIgsA9IAqg+QAQgYgBAAIhGACIg4AAIgSAAQpuAAojgTQDAMNE5BiQE5BiAjgJIAAAAIAAAEIgBABIAAABIgCAQIAAAAIABgEIABgGIgEAeIgKBXQgBANg1AdIgYAXIAKABIAIABIAUABIgLAAIgKgBIgBABIgMAAIAMAAIgEACIAAAAIgCAAIgCABIACgBIACAAIgBABIgBABIgBAAIgDAAIgDAAgAjrlyIADABIAAgBIgDAAgA83mSQgNATAAAEIANgYgAvjPOIgBgBQABgCAJAAIgCACIgBABIgGAAIAGAAIgCACQgDAAgBAAQgBgBgBAAQAAAAAAAAQABgBABAAgAu0POIgCAAIgCAAIgHABIALgBgAvKPOIAAAAgAvIPNIgIgBIAWgGIgOAHIAAAAgAuIONQA2Ang6AHgAuCMzIgDAmIAAABIABACIgDApIgDADIgCACIAKhXgAuAMfIACgQIAAgBIABgBIAAgEIAAAAIAAAAIAAAEIgBAEIAAACIAAACIgBAGIgBAEIAAAAIAAAAgAt9MJg'
      )
    this.shape_8.setTransform(-169.3157, 42.9797)
    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f('#EFAFF1')
      .s()
      .p(
        'Aq5dPQmigZi6gWQi6gWlFhqQAFAAACgCQADgDAAgFQMbjIGKpYQBaiIABjPQACkNj5iiQg+gohbgLQghgEglgBIgKAAQgzAAgsADQgsADiFAgQiFAfiWC/QiXC+o+BuIgKAAQgKAAAAADIgbAEIgVADIg3AIQgKACgRAAQgwAAhmgKIgKAAQlKgchqhkIgOguQgBgSgGgYQgShPCci2QCbi1BfkbQBekbDXhSQDXhTB/gNQA8gGCFgHQCagID8gJQHXgREbB6QCgBFAgBcIgJAZQgRA1gBBFIAAAKQAeBGA/AUQA8ATA1gMQg2AOAlgJIAWgGQA+BTCThIQCRhJAWijQB+gXCIgNQH+gwKMBeQM6B2KtknQAgGagPDEQgCBDgDAGQAFABgoDtQgpDsjqBlQhyAJiDgIIicABQgXgBiAAEQjyANjdAiQtfCDouG1QiNBuhnCMQk5GrmJAAIgrgBgAiGGbQgcICj6EjQAhASAtgWQACgBAAgFQBLgeA+grQADgCAAgFQC8h0A8j0IABgKQAFAAAAgBQAMhHgRgwIgBgJQgdhvhFhGQAAgFgDgDQgXgbg3AAIgLAAgEglEAJzIAAABIARgCIgRAAIAAABgEAieAJCIgMABQBDgDgOAAIgpACgEAhoAI6QBfAFgvgDIhIgDgEgvgAG2IACAEIgCgGIAAACgEgkWAJyIgQAAIAQgCIAYgEIACADQgNADgJAAIgEAAgEgkoAJyIgCAAIARgDIgRADIgDAAIgBAAIAVgDIAbgEIAAABIgYAEIgQACQABAAABAAQAAAAAAAAQAAAAgBAAQgCAAgBAAgEgqcgNMIAuhCIAsg9IASgZIAAgBIgBgIQBMAEBlABQgNAGhSBLIguAqQhIBDglAAQgaAAgIgigEglvgSoIADAAIAAABIgDgBgEglTgUaIhDgCIgBAAIgBAAIgygCQggAAhwgJIghgDIAAACIhUgMIAAiUQgKhaATktQAFBZB1AXQC6AlBEDcQAIAaAHAdQASBPgMA0IgDALIgXgBg'
      )
    this.shape_9.setTransform(48.6935, 125.1881)
    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f('#AD539B')
      .s()
      .p(
        'EgGGAg6QhuAOiCgEIgKAAIgKAAIhOAAQAAgEgHAAQgygCicAEQicAEhTgGQunhCqKmUQGDAQE+g9IAKgBQAAAFgCACQgDADgFAAQFGBqC6AWQC5AWGjAZQGiAYFMnDQBniMCLhuQIum0NfiDQDegiDxgOQCAgDAXAAICcAAQCEAIBxgKQDrhlAojsQAojrgEgCQACgGADhDQAPjEghmaQqtEns6h3QqMhdn9AwQiIANh+AXQgVCiiTBJQiSBJg+hUQBzgpADiaIAAgKQAFAAABgCQALgjgRgNQAAgFgBgFQgMgjgOghQhIiph4hsQgqgmhDg5QhLg6heg2QiGhNhpgvQglgQgUgCIgCAAQgHgDgHAAIjkgKIgugBIpEgbImzgOIhngDIADgMQALg0gShPQgGgcgIgaQhEjci6glQh2gYgEhZQAHgLAGgIQAagdgCgEQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAAAAAAAIABAAQACgJAEgLIACgEQAlhbAkgxQACgCAFAAQAeAAAegCIAegDIAAgFQCHgFCCgIQBygHBvgKIAKAAQIfHEKXE7QKuFGNqCKQOmCTNejEQEQg9ENg4IgDABQAbALAaAMQBBBOBABQQACADAFAAQCqPNmGKfQgmBCg0AxQolJppREzQpQEznNCSQjCA9i6AAQkCAAj2h2gEgmIgZ/IA8AAQABAAgBgGQgegEgeAAIAAAKgAqURmQD6kkAcoBQBBgDAZAeQACADAAAFQBHBGAcBuIABAKQASAvgNBIQAAABgFAAIgBAJQg8D0i9B1QAAAFgCABQg/AshLAeQAAAFgCABQgYAMgWAAQgRAAgPgIgAenHoIAogCQAOAAhCADIAMgBgEgvkgcVQgMglANgYIADgEQARg2ASgeQgUCdgNAAQgDAAgDgIg'
      )
    this.shape_10.setTransform(73.417, 134.2026)
    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f('#AD529C')
      .s()
      .p(
        'AqUDxQBiiSCThjQDsieFpgnQBBgHBHgDQCfgHCKgaIAsgJIAAAZIABAKQAGAlgRANIAAAKQAAAngCAkQgDBBgJA5IgGAhIgKABIgEAAIgRAEIh3AZQluBJmOArIgBAAQhDAIhDAFQAAAGgBgBQgYAFgZAAIgKACQg5AKgsABQguAAghgNg'
      )
    this.shape_11.setTransform(321.4783, -45.3497)
    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f('#2BB2E9')
      .s()
      .p(
        'AmzBOQAPgQANgVQAagpAUg7QABgCAFAAIAcgEIArgGQEEgGDNgUQCEgMB7gUQgVAKgKAOQgYAdAVAuQACAEAAAFQglgIgpgBQhggEh1AgQgEABgFAAQgOAIgZAHQgyAPhaAJQgpAEgzADQghACgeAFQg0AJgpASQghAPgaAVQgRAPgMAAQgWAAgCg0g'
      )
    this.shape_12.setTransform(290.975, 2.957)
    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'EgsAAs5IgrgCQgXgBgTgEQgPgDgtgOIh2gpQglgNgRgKQgKgFgRgOIgbgTIgagNQgQgIgJgHQgNgJgHgMQgIgOACgNQACgPANgLQAMgKAQgCQAagDAfAUQARALAgAZQAcAVAkALIAbAHQAQAFAKAGIAMAIQAHAFAFACQAGACAKAAIAPABQAKABAPAFIAYAJQAbAIA5ABQBiADAxgCQBSgDBAgNIAigHQATgDAOADQASAEAMANQANANgBAQQgBAVgVANQgNAJgbAGQhLARhhAEQggACgyAAIhcgBgEgjfAsFQgTgBgMgNQgOgQABgVQABgcAUgOQALgIAOAAQAUAAANAQQAMAPgBAUQAAAYgPAOQgMAMgRAAIgCAAgEgOvAnDQgOg0g2gpQg2gpgLgCQjZgxhQBcQhQBcg3geQg3gfBth3QCfiECXAZQCXAZA7AqQA7ApAuBxQAvBxhKADIgIAAQhDAAgMgxgAcXKwQgKgSAKgVQAKgVATgKQARgJAXgDQAOgBAdAAQIlAJIViBQA/gQAegPIApgXQAYgNATgFQAYgFAXAJQAYAJAGAWQAEANgEAPQgFAOgKALQgQARggAPQhLAih5AfQiMAkibAZQh7ATiEANQjOAUkEAFIheACIgEAAQg8AAgPgegEArTgRjQguhahFhkQg0hKhShpQg6hIgmgsQg3g9gzgtQgigehHg2IhbhfQj7irhMguQhLgui6ixQi6ixkqAjIgBAAIgBAAQnAiwiAgaQiVgfiAgIQiAgIhzAFQh1AFlmBKQlmBLiSB+QiTB+hTA9QhTA8lwCLQDHiyAqgvQBIhSCCiMQCDiLCUhNQCVhMDxgqQDxgpDUADQDSACC3AmQC2AmBOAKQBNAKErBpQI1CrC+BJQC9BJBIA3QBIA4BcA8QBbA7AnAmQAnAmByBVQBuBUA0AyQA5A3BOBiQBNBiCICZQE0FcgeKRIlwrBg'
      )
    this.shape_13.setTransform(63.6741, -75.8657)
    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f('#226599')
      .s()
      .p(
        'A1AUPQj6iQjnikQGHpdGworIBbhzIArg1IBbhwQCXi4CfiwIAqguQBAhHCUiHQCViGBvAGQBvAGgrAFIgiAaQgkAdgiAfIgkAiQjWDOiNEZQhtDaiIDJQj2FpjQGTQiCD8hzELIAAAgIAAAIIAAAKIgLAAIAAAXIAABNIAAAKIAAAKQgEAAgFgCgAVQtpQgkgSgrgbQgxgigbgbQg8g/AAg0QAAg1AKgtQAJguAhgZQAigZAngHQAKgBAHABIABAAIACAAQATAFgBAaQgCAlAGASQAGARAOATQAPATAGAKQAJAQBLBCQBLBCA0gBICBgDQBXgWAdgLQAcgMgUAvQgUAugVAqQgVApgzAYQgjAQg7AEIgeAAQh1ABhngxg'
      )
    this.shape_14.setTransform(39.9003, -193.87)
    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f('#24B1ED')
      .s()
      .p(
        'EgqXA0cQi+gHjCiAQimhvgfijQgPhRAEhDQAVBPgIAIQgIAIAAALQABAZAkgYQAjAmBBAPQBvAYA6ALQBfARBNAHQAzAEA7ABQCxAECLgQQCpgTCKgzQBPgdB3g9QCFhEBag3QB1hIBYhLQAsglBchbQAlgkAOgaQAOgaATgVQAUgVAthbQAthbhJBQQhKBQhIA4QhIA3jVCGQg3AigpAbQg+AWg8AWQDehlDMifQDDiBAlhwQglBwjDCBQjMCfjeBlQhhAkhbAmQjABAjMAYIgFABIgEAAIgEABIgHAAIAAAAQiKAPh5AAIAAAAIgBAAQlbAAjZh6IgBgBIgDgBIgCgBQi7hHAJkIQARiABphiQAzgvAmAHQASADAPAPQBqBkFKAcIAKAAQBEANBSgDQARAAAKgCIA3gIIABAAIADAAIACAAQACAAABAAQABAAAAAAQABAAgBAAQAAAAgCAAIAQAAQAKABAQgEIASgHIgIAHIAHgCQABAAAAgFQI+huCXi+QCWi/CFgfQCFggAsgDQAsgDAzAAIAKAAQAlABAhAEQBbALA+AoQD5CigCENQgBDPhaCIQmKJYsbDIIgKABQj8AwkoAAQhNAAhRgDgEgzAAjHQgQACgMAKQgNAKgCAPQgCAOAIANQAHAMANAKQAJAGAQAIIAaAOIAbATQARANAKAGQARAKAlANIB2AoQAtAPAPADQATADAXACIArABQB0ACA6gCQBhgEBLgSQAbgGANgIQAVgNABgVQABgQgNgOQgMgNgSgDQgOgDgTACIgiAHQhAAOhSADQgxABhigCQg5gBgbgJIgYgIQgPgFgKgBIgPgBQgKgBgGgCQgFgCgHgEIgMgJQgKgGgQgEIgbgIQgkgLgcgUQgggagRgLQgbgRgXAAIgHABgEgkhAklQgUAPgBAbQgBAWAOAPQAMANATABQASABANgNQAPgOAAgYQABgUgMgOQgNgQgUAAQgOAAgLAHgEgoGAjPIABAAQgGABAFgBgAxfe5QALABA2ApQA2ApAOA1QANA0BKgDQBKgEgvhwQguhxg7gpQg7gqiXgZQiXgZifCDQhtB3A3AfQA3AfBQhcQA0g8BvAAQA6AABMARgEgsUAseQh6gYhVgKQhVgJhigrQg1gXgTANQAEgYAHgVIACABIADABIABABQDZB6FbAAIABAAIAAAAQB5AACKgPIAAAAIAHAAIAEgBIAEAAIAFgBQDMgYDAhAQh8A0jXApQjXApg8AGIgWAAQg7AAhkgTgEgf5AqlIAAAAgEgc9ApbIAAAAgEgoFAjMIAAgBIAAgBIARAAIgQACIgBAAgEgm/AjDIAKgBIAKgCIgUAEgEgmrAjAIAAAAgEgmrAjAIAAAAgAISLRQtpiKqvlGQqWk5ofnFQnGmkhAjfQhBjgAchhQAchhBTiOQBliuCCiRQADgDEqjkQCsh+BRiCQBeibBChMIAJgKQBShmAxg3QBMhTBHg6QCwiOD8hKQDSg9EQgRQHbgeHSBiQBhAUB5AfIDYA7QDRA6CPApQCOApCZAxQCaAyGfC5IgKAAIAKAAQKSFRGPJTQCsEBBaFTQALASALAXQBKCogDC4QgBAzgLBjIgxHJQgNB3gMBCQgLA3gTAkIAEAjQAAAFgCAFQhaDbiUChIgKAAIgoAAIAAAKQgFAAjABCQkNA3kPA+QnsBvoEAAQmEAAmRg/gAduFQIgcAEQgFAAgBACQgUA7gaAqQgNAVgPAQQADBPAygqQAagVAhgPQApgSA0gJQAegFAhgCQAzgDApgEQBbgJAygPQAZgHAOgJQAFAAAEgBQB1ggBgAEQApABAlAIQAAgFgCgEQgVguAYgdQAKgOAVgKQCbgZCMgkQB5gfBLgiQAggPAQgQQAKgMAFgNQAEgPgEgOQgGgVgYgKQgXgJgYAGQgTAEgYAOIgpAXQgeAOg/AQQoVCColgJQgdgBgOACQgXACgRAJQgTAKgKAVQgKAWAKASQAPAeBAgBIBegBIgrAGgEAxOgFFQiKAaifAHQhHADhBAHQlqAnjsCeQiTBjhiCSQBAAYB0gXIAKgBQAZAAAYgFQABAAAAgFQBDgGBDgHIABAAQGPgrFuhJIB3gYIARgEIAEgBIAKgBIAGggQAJg6ADhBQACgkAAgnIAAgKQARgNgGglIgBgKIAAgZIgsAJgEgHtgpHQiVCGhABHIgqAvQieCwiYC3IhbBwIgrA2IhaByQmxIsmGJdQDnCkD6CQQAEACAFAAIAAgKQAEgKADgLIgBgHQgEgcgCgeIAAgYIAKAAIAAgKIAAgHIAAghQBzkLCCj7QDQmTD2lrQCIjIBtjaQCNkaDXjNIAkgiQAjggAkgdIAhgaQAsgFhwgGIgJAAQhtAAiOCBgEAXVgqfQC6CxBLAuQBMAuD7CrIBbBfQBHA2AiAdQAzAtA3A+QAmArA6BIQBSBpA0BKQBFBkAuBbIFwLBQAeqRk0ldQiIiYhNhjQhOhhg5g4Qg0gyhuhTQhyhWgnglQgngmhbg8Qhcg8hIg3QhIg4i9hJQi+hJo1iqQkrhqhNgJQhOgLi2glQi3gnjSgCQjUgDjxAqQjxApiVBNQiUBMiDCMQiCCLhIBSQgqAvjHCyQFwiKBTg9QBTg9CTh+QCSh+FmhKQFmhLB1gEQBzgGCAAIQCAAICVAfQCAAaHACwQgIgBgJACQgoAGghAaQgiAZgJAtQgJAuAAA0QAAA1A8A+QAaAcAyAhQAqAcAkASQB0A2CHgHQA6gDAkgRQAygXAWgqQAVgqAUguQATgugcALQgcALhXAXIiCADQg0ABhLhCQhKhCgKgRQgFgKgPgSQgPgTgGgSQgGgRACglQABgbgTgEQAxgGAvAAQDpAACbCUgEgbUgjmIADATIABAAIALgIIAKgGIABgBIAAgBIgBABQgDgBgDgHIAAAAIgTAEgEgbMgjvIgJADIAAAAIAOgEIgFABgEga4gj9IAAAAIABAAIgBAAgEAgGgq9IAAAAg'
      )
    this.shape_15.setTransform(67.9623, -37.2103)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
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
  p.nominalBounds = new cjs.Rectangle(-421.1, -379.6, 842.2, 736.2)
  ;(lib.Symbol4_1 = function (mode, startPosition, loop, reversed) {
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
    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f()
      .s('#7F5100')
      .ss(7, 1, 1)
      .p(
        'AAAnGQAGAAAGABQACAAACABQACAAACAAQADABADABQADABADACQADAAADACQACABACABQACABACABQACACABABQACABACABQABABACABQABACACABQABABABABQABACACAAQAAACABABQABABABABQABACABABQABABABABQAAABABABQABABAAACQABABABABQAAABABACQABABABABQAAABAAABQABABAAACQABABAAABQAAABABABQAAABABABQAAACABABQAAABAAABQAAACAAABQAAABAAABQABABAAABQAAACAAABQAAABAAABQAAABAAABQABACAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAAAAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAACAAAAQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAAAAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAAAAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAAAQAAACAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAAAAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAAAQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAACQAAAAAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAAAQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAAAQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAAAAAACQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAAAQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAAAAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAACAAAAQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAAAAAACQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAAAQAAACAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAAAAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABgBABQAAACAAABQAAABAAABQAAACAAAAQAAACAAABQAAABgBABQAAACAAABQAAABAAABQgBABAAABQAAACAAABQgBABAAABQgBABAAACQAAAAgBACQgBABAAABQgBABAAACQgBABAAABQgBABgBABQAAABgBACQAAABgBABQgBABgBABQgBACgBABQAAABgBABQgBABgCABQAAACgBABQgCABgBABQgBABgBABQgBACgCABQgBABgCABQgCACgBABQgCABgCABQgDABgCABQgCABgCACQgDABgDABQgCABgCABQgCAAgBAAQgCABgBAAQgCAAgCABQgCAAgCABQgGAAgGAAQgFAAgGAAQgCgBgDAAQgBgBgCAAQgDgBgDAAQgDgBgEgCQgCgBgDgBQgCgBgDgCQgCgBgCgBQgCgBgBgBQgCgBgCgCQgBgBgBgBQgBgBgCgBQgBgBgBgBQgBgCgCgBQgBgBgBgBQgBgCgBgBQAAgBgBgBQgBgBgBgBQgBgCgBgBQAAgBgBgBQgBgCgBAAQAAgBgBgCQAAgBgBgBQAAgBgBgCQgBgBAAgBQAAgBgBgBQAAgBgBgCQAAgBAAgBQAAgBgBgCQAAgBAAgBQAAgBAAgBQgBgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQgBgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAAAAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAAAQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAAAAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgCAAAAQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAAAAAgCQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAAAQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAAAAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAAAQAAgCAAAAQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgCQAAAAAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAAAQAAgCAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAAAAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAAAQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgCQAAAAAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAAAQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAAAQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBABgCQAAAAAAgCQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBABgBQAAgBAAgBQAAgCAAgBQABgBAAgBQABgCAAAAQABgCAAgBQAAgBABgBQAAgCABgBQAAgBAAgBQABgBAAgBQABgBABgCQABgBABgBQAAgBAAgCQABgBABgBQABgBACgBQAAgBABgCQABgBABgBQABgBABgBQACgBABgBQABgCABgBQABgBACgBQABgCACgBQACgBABgBQACgBACgBQACgCACgBQACgBADgBQADgBACgBQADgBACgBQACAAABgBQACAAABgBQACAAABAAQADgBACAAQAGAAAFAAQAAgBAAAAg'
      )
    this.shape_16.setTransform(-279.575, -2.375)
    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f('#ECA700')
      .s()
      .p(
        'AgLHHIgFgBIgDgBIgGgBIgHgDIgFgCIgFgDIgEgCIgDgCIgEgDIgCgCIgDgCIgCgCIgDgDIgCgCIgCgDIgBgCIgCgCIgCgDIgBgCIgCgCIgBgDIgBgCIgBgDIgBgCIgBgCIgBgDIAAgCIgBgDIAAgCIAAgCIgBgCIAAgDIAAgCIAAgCIAAgDIgBgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgBIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgBIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIABgDIAAgCIAAgCIAAgCIAAgDIABgCIAAgCIAAgDIABgCIABgCIABgDIABgCIABgDIAAgCIABgCIACgDIACgCIAAgDIACgCIADgCIABgDIACgCIACgCIADgCIACgDIADgCIADgDIADgCIAEgCIAEgDIAFgCIAFgCIAFgCIADgBIADgBIADAAIAFgBIALAAIAAgBIAMABIAEABIAEAAIAGACIAGADIAGACIAEACIAEACIADADIAEACIADACIADADIACACIADACIABADIACACIACADIACACIABACIABADIACACIABADIACACIAAACIABADIABACIABACIABACIABADIAAACIAAADIAAACIABACIAAADIAAACIAAACIABADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAABIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAABIAAADIAAACIAAADIAAACIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIgBACIAAADIAAACIAAACIAAADIgBACIAAADIAAACIgBACIAAADIgBACIgBADIgBACIgBACIgBADIgBACIgCACIgBADIgBACIgCACIgCADIgBACIgDACIgBADIgDACIgCACIgDADIgDACIgDADIgEACIgFACIgEADIgGACIgEACIgDAAIgDABIgEABIgEABIgMAAIgLAAg'
      )
    this.shape_17.setTransform(-279.575, -2.375)
    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f()
      .s('#7F5100')
      .ss(7, 1, 1)
      .p(
        'Ag+HNQhLAAg0iHQg1iHAAi/QAAi+A1iHQA0iHBLAAQARAAAQAIQAQgIAQAAQAQAAAOAGQAPgGAPAAQBLAAA0CHQA1CHAAC+QAAC/g1CHQg0CHhLAAQgPAAgPgGQgOAGgQAAQgQAAgQgHQgQAHgRAAg'
      )
    this.shape_18.setTransform(-279.35, -3.15)
    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f('#ECA700')
      .s()
      .p('AhBD1QgbhmgBiPIABgnQADh2AYhXQAchmAlAAQAmAAAcBmQAbBlABCPIAAANQgCCHgaBhQgcBmgmAAQglAAgchmg')
    this.shape_19.setTransform(-286.4, -2.75)
    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics.f().s('#FFEDF9').ss(4, 1, 1).p('AhJnFQAQAHAOAOQAkAhAcBKQA1CHAAC+QAAC/g1CHQgcBJgkAiQgOAOgQAH')
    this.shape_20.setTransform(-275, -3.15)
    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics
      .f('#ECA700')
      .s()
      .p(
        'AhIHHQgPAGgQAAQgRgBgPgGQAPgIAOgNQAkghAchKQA0iHAAi/QAAi+g0iHQgchKgkghQgOgNgPgIQAPgGARgBQAQABAPAFQAOgFAPgBQBKAAA0CHQA1CHAAC+QAAC/g1CHQg0CHhKAAQgPAAgOgGg'
      )
    this.shape_21.setTransform(-268.7, -3.15)
    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics
      .f('#FADE00')
      .s()
      .p(
        'Ah/FGQg0iHAAi/QAAi+A0iHQA2iHBJAAQARABAQAGQAPAIAPANQAkAhAcBKQA1CHAAC+QAAC/g1CHQgcBKgkAhQgPANgPAIQgQAGgRABQhJAAg2iHg'
      )
    this.shape_22.setTransform(-285.65, -3.15)
    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .f()
      .s('#7F5100')
      .ss(7, 1, 1)
      .p(
        'Ag/HTQhqAAhMiJQhLiIAAjCQAAjABLiKQBMiIBqAAQASAAAQAEQAQgEARAAQAPAAAPADQAOgDAQAAQBqAABMCIQA2BjAPB/QAGAzAAA1QAAA3gGAyQgPB/g2BiQhMCJhqAAQgQAAgOgCQgPACgPAAQgRAAgQgEQgQAEgSAAg'
      )
    this.shape_23.setTransform(-277.025, -2.8)
    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics.f().s('#FFFFFF').ss(6, 1, 1).p('AhvnOQAPADAPAHQBCAdAzBdQBMCKAADAQAADChMCIQgzBehCAdQgPAHgPAD')
    this.shape_24.setTransform(-268.825, -2.8)
    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics
      .f('#ECA700')
      .s()
      .p(
        'AgDHQQgPADgPAAQgRAAgQgDQAOgEAPgGQBCgeAzheQBMiJAAjBQAAjAhMiJQgzhehCgeQgPgGgOgDQAQgEARAAQAPAAAPADQAOgDAPAAQBqAABMCJQA2BiAPCAQAHAxAAA2QAAA2gHAzQgPB/g2BiQhMCJhqAAQgPAAgOgDgAjpD2QgxhmAAiQQAAh4AjhbQAHgRAHgQQAzhmBGABQBFgBAxBmQAyBmAACOQAABdgVBLQgMApgRAlQgxBlhFABQhGgBgzhlg'
      )
    this.shape_25.setTransform(-273.25, -2.8)
    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics
      .f('#FADE00')
      .s()
      .p(
        'Ai1FKQhMiJAAjBQAAjABMiJQBLiJBqAAQARAAARAEQAPADAPAGQBCAeA0BeQBMCJgBDAQABDBhMCJQg0BehCAeQgPAGgPAEQgRADgRAAQhqAAhLiJgAiDj0QgIAQgHARQgjBbAAB4QAACQAyBmQAyBlBGABQBEgBAzhlQARglAMgpQAVhLgBhdQAAiOgxhmQgzhmhEABQhGgBgyBmg'
      )
    this.shape_26.setTransform(-283.4, -2.8)
    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics
      .f()
      .s('#7F5100')
      .ss(7, 1, 1)
      .p(
        'AgyHZQiUAAhoiLQhpiKAAjEQAAjDBpiLQBoiKCUAAQAIAAAIABQAIgBAIAAQASAAAQACQARgCASAAQCUAABoCKQBpCLAADDQAADEhpCKQhoCLiUAAQgSAAgRgCQgQACgSAAQgIAAgIgBQgIABgIAAg'
      )
    this.shape_27.setTransform(-278.675, -2.5)
    this.shape_28 = new cjs.Shape()
    this.shape_28.graphics.f().s('#FFEDF9').ss(4, 1, 1).p('AipnXQASABARADQBzAUBVBxQBoCLAADDQAADEhoCKQhVByhzAUQgRADgSAB')
    this.shape_28.setTransform(-265.175, -2.5)
    this.shape_29 = new cjs.Shape()
    this.shape_29.graphics
      .f('#FADE00')
      .s()
      .p(
        'Aj7FOQhoiKAAjEQAAjDBoiKQBoiLCTAAIAQABQASABASADQByAUBWByQBoCKABDDQgBDEhoCKQhWByhyAUQgSADgSABIgQAAQiTABhoiLgAgvlgQgcAGgZAOQgvAagnA0QhOBpAACTQAACTBOBnQBOBpBsAAQAcABAbgJQAVgFATgKQAygaApg4QBNhnAAiTQAAiThNhpQhOhohsAAQgZAAgWAGg'
      )
    this.shape_29.setTransform(-283.8, -2.5)
    this.shape_30 = new cjs.Shape()
    this.shape_30.graphics
      .f('#ECA700')
      .s()
      .p(
        'AgcHWQgSACgRAAIgRAAQASgBASgDQBxgUBWhyQBoiKABjEQgBjDhoiKQhWhyhxgUQgSgDgSgBIARgBQARAAASACQAQgCASAAQCTAABpCLQBoCKAADDQAADEhoCKQhpCLiTgBQgSAAgQgCgAkbD4QhOhnAAiTQAAiTBOhpQAng0AvgaQAZgOAcgGQAWgGAZAAQBsAABOBoQBNBpAACTQAACThNBnQgpA4gxAaQgTAKgVAFQgbAJgdgBQhsAAhOhpg'
      )
    this.shape_30.setTransform(-274.1, -2.5)
    this.shape_31 = new cjs.Shape()
    this.shape_31.graphics
      .f()
      .s('#7F5100')
      .ss(7, 1, 1)
      .p('AHVAAQAADCiJCKQiKCKjCAAQjCAAiJiKQiKiKAAjCQAAjCCKiJQCJiKDCAAQDCAACKCKQCJCJAADCg')
    this.shape_31.setTransform(-278.65, -3.6)
    this.shape_32 = new cjs.Shape()
    this.shape_32.graphics
      .f('#FFF390')
      .s()
      .p('AjJEfIgSgQIgDgCIH6nYQAQASANAVInyHPIgQgMgAk4CCIHZmsIAcAOQAYAPAXATQAOAMANAMIn8HWQgtgygWhAg')
    this.shape_32.setTransform(-280.3125, -5.35)
    this.shape_33 = new cjs.Shape()
    this.shape_33.graphics
      .f('#ECA700')
      .s()
      .p(
        'AjKEZIHynPQApBBAIBTQANB8hEBlIgVAdQhbBviPAOQgUACgSAAQhtAAhahCgAkGDjIH9nWIAVAWIn7HYQgMgMgLgMgAlYAjQgPiOBchvIAGgIQBZhoCKgOQBggKBTAnInZGrQgMgkgEgpg'
      )
    this.shape_33.setTransform(-278.6699, -3.6002)
    this.shape_34 = new cjs.Shape()
    this.shape_34.graphics
      .f('#FADE00')
      .s()
      .p(
        'AlLFMQiJiKgBjCQABjBCJiKQCJiKDCAAQDCAACKCKQCKCKAADBQAADCiKCKQiKCKjCAAQjCAAiJiKgAgilYQiKAOhaBoIgFAHQhcBwAOCOQAFApAMAkQAVBAAtAzQALAMAMAMIADADIASAPIAQAMQBpBNCEgNQCPgOBbhvIAVgdQBEhlgNh8QgIhTgphBQgNgUgQgTIgUgWQgNgNgOgLQgYgTgYgPIgbgOQhCgfhLAAQgSAAgUACg'
      )
    this.shape_34.setTransform(-278.65, -3.6)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_17 }, { t: this.shape_16 }] })
        .to(
          {
            state: [
              { t: this.shape_22 },
              { t: this.shape_21 },
              { t: this.shape_20 },
              { t: this.shape_19 },
              { t: this.shape_18 },
            ],
          },
          1
        )
        .to({ state: [{ t: this.shape_26 }, { t: this.shape_25 }, { t: this.shape_24 }, { t: this.shape_23 }] }, 1)
        .to({ state: [{ t: this.shape_30 }, { t: this.shape_29 }, { t: this.shape_28 }, { t: this.shape_27 }] }, 1)
        .to({ state: [{ t: this.shape_34 }, { t: this.shape_33 }, { t: this.shape_32 }, { t: this.shape_31 }] }, 1)
        .to({ state: [] }, 1)
        .wait(5)
    )
    // Layer_1
    this.shape_35 = new cjs.Shape()
    this.shape_35.graphics
      .f()
      .s('#7F5100')
      .ss(7, 1, 1)
      .p('AHVAAQAADCiJCKQiKCKjCAAQjCAAiJiKQiKiKAAjCQAAjCCKiJQCJiKDCAAQDCAACKCKQCJCJAADCg')
    this.shape_35.setTransform(-278.65, -3.6)
    this.shape_36 = new cjs.Shape()
    this.shape_36.graphics
      .f('#ECA700')
      .s()
      .p(
        'AjaENIgSgPQhfhYgNiDQgPiOBchwIAGgHQBZhoCKgOQBxgMBdA3QAZAPAXATQBvBaAOCPQANB8hEBlIgVAdQhbBviPAOQgUACgSAAQh3AAhghOg'
      )
    this.shape_36.setTransform(-278.6699, -3.6001)
    this.shape_37 = new cjs.Shape()
    this.shape_37.graphics
      .f('#FADE00')
      .s()
      .p(
        'AlLFMQiJiKgBjCQABjBCJiKQCJiKDCAAQDCAACKCKQCKCKAADBQAADCiKCKQiKCKjCAAQjCAAiJiKgAgilYQiKAOhaBoIgFAHQhcBwAOCOQAOCDBfBYIASAPQBvBbCOgPQCPgOBbhvIAVgdQBEhlgNh8QgPiPhuhaQgYgTgYgPQhNgthbAAQgSAAgUACg'
      )
    this.shape_37.setTransform(-278.65, -3.6)
    this.shape_38 = new cjs.Shape()
    this.shape_38.graphics
      .f()
      .s('#7F5100')
      .ss(7, 1, 1)
      .p(
        'AAzHZQCUAABoiLQBpiKAAjEQAAjDhpiLQhoiKiUAAQgIAAgIABQgIgBgIAAQgSAAgQACQgRgCgSAAQiUAAhoCKQhpCLAADDQAADEBpCKQBoCLCUAAQASAAARgDQAQADASAAQAIAAAIgBQAIABAIAAg'
      )
    this.shape_38.setTransform(-278.125, -2.5)
    this.shape_39 = new cjs.Shape()
    this.shape_39.graphics.f().s('#FFEDF9').ss(4, 1, 1).p('ACqnXQgSABgRADQhzAUhVBxQhoCLAADDQAADEBoCKQBVByBzAUQARADASAB')
    this.shape_39.setTransform(-291.625, -2.5)
    this.shape_40 = new cjs.Shape()
    this.shape_40.graphics
      .f('#FADE00')
      .s()
      .p(
        'AgPHYQgSgBgSgDQhygUhWhyQhoiKAAjEQAAjDBoiKQBWhyBygUQASgDARgBIAQgBQCUAABoCLQBoCKABDDQgBDEhoCKQhoCLiUgBIgPAAgAi4j+QhOBpAACTQAACTBOBnQAoA4AyAaQAUAKATAFQAcAJAcgBQBtAABNhpQBOhnAAiTQAAiThOhpQgng0gwgaQgYgOgbgGQgXgGgZAAQhsAAhNBog'
      )
    this.shape_40.setTransform(-273, -2.5)
    this.shape_41 = new cjs.Shape()
    this.shape_41.graphics
      .f('#ECA700')
      .s()
      .p(
        'AAeHWQgSACgQAAQiUABhoiLQhpiKAAjEQAAjDBpiKQBoiLCUAAQAQAAASACQAQgCATAAIAPABQgRABgSADQhxAUhWByQhoCKAADDQAADEBoCKQBWByBxAUQASADASABIgQAAQgTAAgQgCgAApFZQgTgFgUgKQgxgagog4QhOhnAAiTQAAiTBOhpQBNhoBsAAQAZAAAXAGQAbAGAYAOQAwAaAnA0QBOBpAACTQAACThOBnQhNBphtAAQgdABgcgJg'
      )
    this.shape_41.setTransform(-282.7, -2.5)
    this.shape_42 = new cjs.Shape()
    this.shape_42.graphics
      .f()
      .s('#7F5100')
      .ss(7, 1, 1)
      .p(
        'ABAHTQBqAABMiJQBLiIAAjCQAAjAhLiKQhMiIhqAAQgSAAgQAEQgQgEgRAAQgPAAgPADQgOgDgQAAQhqAAhMCIQg2BjgPB/QgGAzAAA1QAAA3AGAyQAPB/A2BiQBMCJBqAAQAQAAAOgCQAPACAPAAQARAAAQgEQAQAEASAAg'
      )
    this.shape_42.setTransform(-279.175, -2.8)
    this.shape_43 = new cjs.Shape()
    this.shape_43.graphics.f().s('#FFEDF9').ss(4, 1, 1).p('ABwnOQgPADgPAHQhCAdgzBdQhMCKAADAQAADCBMCIQAzBeBCAdQAPAHAPAD')
    this.shape_43.setTransform(-287.375, -2.8)
    this.shape_44 = new cjs.Shape()
    this.shape_44.graphics
      .f('#ECA700')
      .s()
      .p(
        'AAEHQQgOADgPAAQhqAAhMiJQg2higPh/QgHgzAAg2QAAg2AHgxQAPiAA2hiQBMiJBqAAQAPAAAOADQAPgDAPAAQARAAAQAEQgOADgPAGQhBAeg0BeQhMCJAADAQAADBBMCJQA0BeBBAeQAPAGAOAEQgQADgRAAQgPAAgPgDgAgFD2QgRglgMgpQgVhLAAhdQAAiOAyhmQAxhmBFABQBGgBAzBmQAHAQAHARQAjBbAAB4QAACQgxBmQgzBlhGABQhFgBgxhlg'
      )
    this.shape_44.setTransform(-282.95, -2.8)
    this.shape_45 = new cjs.Shape()
    this.shape_45.graphics
      .f('#FADE00')
      .s()
      .p(
        'AghHQQgPgEgPgGQhCgeg0heQhMiJABjBQgBjABMiJQA0heBCgeQAPgGAPgDQARgEAQAAQBrAABLCJQBMCJgBDAQABDBhMCJQhLCJhrAAQgQAAgRgDgAhrj0QgxBmAACOQgBBdAVBLQAMApARAlQAyBlBFABQBGgBAyhlQAyhmAAiQQAAh4gjhbQgHgRgIgQQgyhmhGABQhFgBgyBmg'
      )
    this.shape_45.setTransform(-272.8, -2.8)
    this.shape_46 = new cjs.Shape()
    this.shape_46.graphics
      .f()
      .s('#7F5100')
      .ss(7, 1, 1)
      .p(
        'AA/HNQBLAAA1iHQA0iHAAi/QAAi+g0iHQg1iHhLAAQgRAAgQAIQgQgIgQAAQgQAAgOAGQgPgGgPAAQhLAAg0CHQg1CHAAC+QAAC/A1CHQA0CHBLAAQAPAAAPgGQAOAGAQAAQAQAAAQgHQAQAHARAAg'
      )
    this.shape_46.setTransform(-276.25, -3.15)
    this.shape_47 = new cjs.Shape()
    this.shape_47.graphics
      .f('#ECA700')
      .s()
      .p('AhBD1QgbhmgBiPIABgnQADh2AYhXQAchmAlAAQAmAAAcBmQAbBlABCPIAAANQgCCHgaBhQgcBmgmAAQglAAgchmg')
    this.shape_47.setTransform(-269.2, -2.75, 1, 1, 0, 0, 180)
    this.shape_48 = new cjs.Shape()
    this.shape_48.graphics.f().s('#FFEDF9').ss(4, 1, 1).p('ABKnFQgQAHgOAOQgkAhgbBKQg1CHAAC+QAAC/A1CHQAbBJAkAiQAOAOAQAH')
    this.shape_48.setTransform(-280.6, -3.15)
    this.shape_49 = new cjs.Shape()
    this.shape_49.graphics
      .f('#FADE00')
      .s()
      .p(
        'AggHGQgPgIgPgNQgjghgdhKQg1iHAAi/QAAi+A1iHQAdhKAjghQAPgNAPgIQAQgGAQgBQBKAAA1CHQA1CHAAC+QAAC/g1CHQg1CHhKAAQgQgBgQgGg'
      )
    this.shape_49.setTransform(-269.95, -3.15)
    this.shape_50 = new cjs.Shape()
    this.shape_50.graphics
      .f('#ECA700')
      .s()
      .p(
        'ABKHHQgPAGgPAAQhKAAg1iHQg0iHAAi/QAAi+A0iHQA1iHBKAAQAPABAPAFQAOgFAPgBQASABAQAGQgQAIgOANQgkAhgdBKQgzCHAAC+QAAC/AzCHQAdBKAkAhQAOANAQAIQgQAGgSABQgPAAgOgGg'
      )
    this.shape_50.setTransform(-286.9, -3.15)
    this.shape_51 = new cjs.Shape()
    this.shape_51.graphics
      .f()
      .s('#7F5100')
      .ss(7, 1, 1)
      .p(
        'AAAnGQgFAAgGABQgCAAgCABQgCAAgCAAQgDABgDABQgDABgDACQgDAAgDACQgCABgCABQgCABgCABQgCACgBABQgCABgCABQgBABgCABQgBACgCABQgBABgBABQgBACgCAAQAAACgBABQgBABgBABQgBACgBABQgBABgBABQAAABgBABQgBABAAACQgBABgBABQAAABgBACQgBABgBABQAAABAAABQgBABAAACQgBABAAABQAAABgBABQAAABgBABQAAACgBABQAAABAAABQAAACAAABQAAABAAABQgBABAAABQAAACAAABQAAABAAABQAAABAAABQgBACAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAAAAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAACAAAAQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAAAAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAAAAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAAAQAAACAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAAAAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAAAQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAACQAAAAAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAAAQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAAAQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAAAAAACQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAAAQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAAAAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAACAAAAQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAAAAAACQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAAAQAAACAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAAAAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABABABQAAACAAABQAAABAAABQAAACAAAAQAAACAAABQAAABABABQAAACAAABQAAABAAABQABABAAABQAAACAAABQABABAAABQABABAAACQAAAAABACQABABAAABQABABAAACQABABAAABQABABABABQAAABABACQAAABABABQABABABABQABACABABQAAABABABQABABACABQAAACABABQACABABABQABABABABQABACACABQABABACABQACACABABQACABACABQADABACABQACABACACQADABADABQACABACABQACAAABAAQACABABAAQACAAACABQACAAACABQAGAAAFAAQAGAAAGAAQACgBADAAQABgBACAAQADgBADAAQADgBAEgCQACgBADgBQACgBADgCQACgBACgBQACgBABgBQACgBACgCQABgBABgBQABgBACgBQABgBABgBQABgCACgBQABgBABgBQABgCABgBQAAgBABgBQABgBABgBQABgCABgBQAAgBABgBQABgCABAAQAAgBABgCQAAgBABgBQAAgBABgCQABgBAAgBQAAgBABgBQAAgBABgCQAAgBAAgBQAAgBABgCQAAgBAAgBQAAgBAAgBQABgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQABgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAAAAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAAAQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAAAAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgCAAAAQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAAAAAgCQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAAAQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAAAAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAAAQAAgCAAAAQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgCQAAAAAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAAAQAAgCAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAAAAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAAAQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgCQAAAAAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAAAQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAAAQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBgBgCQAAAAAAgCQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBgBgBQAAgBAAgBQAAgCAAgBQgBgBAAgBQgBgCAAAAQgBgCAAgBQAAgBgBgBQAAgCgBgBQAAgBAAgBQgBgBAAgBQgBgBgBgCQgBgBgBgBQAAgBAAgCQgBgBgBgBQgBgBgCgBQAAgBgBgCQgBgBgBgBQgBgBgBgBQgCgBgBgBQgBgCgBgBQgBgBgCgBQgBgCgCgBQgCgBgBgBQgCgBgCgBQgCgCgCgBQgCgBgDgBQgDgBgCgBQgDgBgCgBQgCAAgBgBQgCAAgBgBQgCAAgBAAQgDgBgCAAQgGAAgGAAQAAgBAAAAg'
      )
    this.shape_51.setTransform(-279.625, -2.375)
    this.shape_52 = new cjs.Shape()
    this.shape_52.graphics
      .f('#ECA700')
      .s()
      .p(
        'AgLHHIgEgBIgEgBIgDgBIgDAAIgEgCIgGgCIgEgDIgFgCIgEgCIgDgDIgDgCIgDgDIgCgCIgDgCIgBgDIgDgCIgBgCIgCgDIgCgCIgBgCIgBgDIgCgCIgBgCIgBgDIgBgCIgBgCIgBgDIgBgCIAAgDIgBgCIAAgCIAAgDIgBgCIAAgDIAAgCIAAgCIAAgDIgBgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgDIAAgBIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgBIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIABgDIAAgCIAAgCIAAgDIABgCIAAgCIAAgDIAAgCIABgDIABgCIABgCIABgCIABgDIAAgCIACgCIABgDIACgCIABgDIABgCIACgCIACgDIACgCIABgDIADgCIACgCIADgDIADgCIAEgCIADgDIAEgCIAEgCIAGgCIAGgDIAGgCIAEAAIAEgBIALgBIAAABIAMAAIAFABIADAAIADABIADABIAFACIAFACIAFACIAEADIAEACIADACIADADIADACIACADIADACIACACIACACIABADIADACIACACIAAADIACACIACADIABACIAAACIABADIABACIABADIABACIABACIAAADIAAACIABACIAAADIAAACIAAACIAAACIABADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAABIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAABIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIgBACIAAADIAAACIAAACIAAADIgBACIAAACIAAACIgBADIAAACIgBADIgBACIgBACIgBADIgBACIgBADIgCACIgBACIgCADIgCACIgBACIgCADIgCACIgDADIgCACIgDACIgCACIgEADIgDACIgEACIgFADIgFACIgHADIgGABIgDABIgFABIgMAAIgLAAg'
      )
    this.shape_52.setTransform(-279.625, -2.375)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to({ state: [{ t: this.shape_37 }, { t: this.shape_36 }, { t: this.shape_35 }] }, 5)
        .to({ state: [{ t: this.shape_41 }, { t: this.shape_40 }, { t: this.shape_39 }, { t: this.shape_38 }] }, 1)
        .to({ state: [{ t: this.shape_45 }, { t: this.shape_44 }, { t: this.shape_43 }, { t: this.shape_42 }] }, 1)
        .to(
          {
            state: [
              { t: this.shape_50 },
              { t: this.shape_49 },
              { t: this.shape_48 },
              { t: this.shape_47 },
              { t: this.shape_46 },
            ],
          },
          1
        )
        .to({ state: [{ t: this.shape_52 }, { t: this.shape_51 }] }, 1)
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-329.1, -54, 100.90000000000003, 102.3)
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
    this.instance = new lib.Symbol6('synched', 0)
    this.instance.setTransform(247.8, 79.3)
    this.instance_1 = new lib.Symbol6('synched', 0)
    this.instance_1.setTransform(-264.85, 102.85)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }, { t: this.instance }] })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-519.8, -44, 1022.5999999999999, 270.2), null)
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
    this.instance = new lib.Symbol4_1('synched', 0)
    this.instance.setTransform(361.05, 862.65, 1, 1, 6.4104, 0, 0, -272.8, 4.2)
    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(1)
        .to({ regX: -278.6, regY: -2.9, rotation: 13.4961, x: 359.25, y: 795.2, startPosition: 1 }, 0)
        .wait(1)
        .to({ rotation: 21.5817, x: 372.5, y: 726.45, startPosition: 2 }, 0)
        .wait(1)
        .to({ rotation: 28.4653, x: 398.65, y: 648, startPosition: 3 }, 0)
        .wait(1)
        .to({ rotation: 28.4861, x: 431.4, y: 563.05, startPosition: 4 }, 0)
        .wait(1)
        .to({ rotation: 27.1526, x: 460.05, y: 482.2, startPosition: 5 }, 0)
        .wait(1)
        .to({ rotation: 27.5211, x: 481.7, y: 419.15, startPosition: 6 }, 0)
        .wait(1)
        .to({ rotation: 30.4842, x: 497.75, y: 377.55, startPosition: 7 }, 0)
        .wait(1)
        .to({ rotation: 42.9599, x: 511.9, y: 353.3, startPosition: 8 }, 0)
        .wait(1)
        .to({ rotation: 69.0098, x: 528.9, y: 342.4, startPosition: 9 }, 0)
        .wait(1)
        .to({ rotation: 96.6335, x: 546.4, y: 341.85, startPosition: 0 }, 0)
        .wait(1)
        .to({ rotation: 107.133, x: 562.4, y: 343.9, startPosition: 1 }, 0)
        .wait(1)
        .to({ rotation: 120.043, x: 579.25, y: 350.65, startPosition: 2 }, 0)
        .wait(1)
        .to({ rotation: 129.227, x: 596.4, y: 361, startPosition: 3 }, 0)
        .wait(1)
        .to({ rotation: 137.37, x: 613.9, y: 375.3, startPosition: 4 }, 0)
        .wait(1)
        .to({ rotation: 143.99, x: 631.8, y: 393.5, startPosition: 5 }, 0)
        .wait(1)
        .to({ rotation: 149.461, x: 650, y: 415.65, startPosition: 6 }, 0)
        .wait(1)
        .to({ rotation: 152.539, x: 668.55, y: 441.5, startPosition: 7 }, 0)
        .wait(1)
        .to({ rotation: 156.497, x: 687.15, y: 471.65, startPosition: 8 }, 0)
        .wait(1)
        .to({ rotation: 159.959, x: 705.75, y: 505.85, startPosition: 9 }, 0)
        .wait(1)
        .to({ rotation: 163.027, x: 724.2, y: 544.05, startPosition: 0 }, 0)
        .wait(1)
        .to({ rotation: 164.368, x: 742.65, y: 586.3, startPosition: 1 }, 0)
        .wait(1)
        .to({ rotation: 166.888, x: 760.65, y: 632.75, startPosition: 2 }, 0)
        .wait(1)
        .to({ rotation: 169.191, x: 778.25, y: 683.35, startPosition: 3 }, 0)
        .wait(1)
        .to({ rotation: 171.308, x: 795.4, y: 738.05, startPosition: 4 }, 0)
        .wait(1)
        .to({ rotation: 173.265, x: 811.9, y: 796.9, startPosition: 5 }, 0)
        .wait(1)
        .to({ rotation: 173.853, x: 828, y: 859.7, startPosition: 6 }, 0)
        .wait(1)
        .to({ rotation: 174.367, x: 843.35, y: 926.75, startPosition: 7 }, 0)
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(328.4, 310.7, 551.3000000000001, 666.4000000000001)
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
    this.instance = new lib.Symbol3()
    this.instance.setTransform(-172.7, -68.15, 1.073, 1.0495, 0, -11.3838, -8.7095, -0.1, -0.1)
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-728.1, -194.9, 1130.7, 444)
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
    // Layer_2_copy_copy_copy
    this.instance = new lib.Symbol1('synched', 4)
    this.instance.setTransform(399.3, 701.8, 1, 1, 0, 0, 0, 390.2, 705.6)
    this.instance._off = true
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({ _off: false }, 0).to({ _off: true }, 24).wait(19))
    // Layer_2_copy_copy
    this.instance_1 = new lib.Symbol1('synched', 1)
    this.instance_1.setTransform(463.7, 579.6, 1, 1, 0, 0, 0, 390.2, 705.6)
    this.instance_1._off = true
    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(3)
        .to({ _off: false }, 0)
        .wait(25)
        .to({ startPosition: 26 }, 0)
        .to({ _off: true }, 1)
        .wait(16)
    )
    // Layer_2_copy_copy
    this.instance_2 = new lib.Symbol1('synched', 2)
    this.instance_2.setTransform(492.9, 722.4, 1, 1, 0, 0, 180, 390.2, 705.6)
    this.instance_2._off = true
    this.timeline.addTween(
      cjs.Tween.get(this.instance_2).wait(1).to({ _off: false }, 0).to({ _off: true }, 26).wait(18)
    )
    // Layer_2_copy
    this.instance_3 = new lib.Symbol1('synched', 2)
    this.instance_3.setTransform(576.1, 751.65, 1, 1, 0, 0, 180, 390.2, 705.6)
    this.instance_3._off = true
    this.timeline.addTween(
      cjs.Tween.get(this.instance_3).wait(2).to({ _off: false }, 0).to({ _off: true }, 26).wait(17)
    )
    // Layer_2_copy_copy
    this.instance_4 = new lib.Symbol1('synched', 2)
    this.instance_4.setTransform(521.75, 687.65, 1, 1, 0, 0, 0, 390.2, 705.6)
    this.instance_4._off = true
    this.timeline.addTween(
      cjs.Tween.get(this.instance_4).wait(1).to({ _off: false }, 0).to({ _off: true }, 26).wait(18)
    )
    // Layer_2_copy
    this.instance_5 = new lib.Symbol1('synched', 0)
    this.instance_5.setTransform(428.55, 612.5, 1, 1, 0, 0, 0, 390.2, 705.6)
    this.instance_5._off = true
    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .wait(1)
        .to({ _off: false }, 0)
        .wait(27)
        .to({ startPosition: 27 }, 0)
        .to({ _off: true }, 1)
        .wait(16)
    )
    // Layer_2_copy
    this.instance_6 = new lib.Symbol1('synched', 0)
    this.instance_6.setTransform(532.35, 502.15, 1, 1, 0, 0, 180, 390.2, 705.6)
    this.instance_6._off = true
    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .wait(1)
        .to({ _off: false }, 0)
        .wait(27)
        .to({ startPosition: 27 }, 0)
        .to({ _off: true }, 1)
        .wait(16)
    )
    // Layer_2
    this.instance_7 = new lib.Symbol1('synched', 0)
    this.instance_7.setTransform(469.4, 508.1, 1, 1, 0, 0, 180, 390.2, 705.6)
    this.timeline.addTween(cjs.Tween.get(this.instance_7).to({ _off: true }, 27).wait(18))
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-12.2, 0, 1023.5, 1023.2)
  ;(lib.Symbol2_1 = function (mode, startPosition, loop, reversed) {
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
    this.instance_8 = new lib.Tween7('synched', 0)
    this.instance_8.setTransform(-767.05, -158.7)
    this.instance_8._off = true
    var instance_8Filter_1 = new cjs.ColorFilter(1, 1, 1, 1, 0, 0, 0, 0)
    this.instance_8.filters = [instance_8Filter_1]
    this.instance_8.cache(-310, -284, 620, 568)
    this.timeline.addTween(
      cjs.Tween.get(this.instance_8)
        .wait(13)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ y: -141.75, alpha: 0.6719 }, 0)
        .wait(1)
        .to({ y: -150.2, alpha: 0.3281 }, 0)
        .wait(1)
        .to({ y: -158.7, alpha: 0 }, 0)
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
        .to({ y: -147.4, alpha: 1 }, 1)
        .to({ y: -158.7, alpha: 0.5313 }, 1)
        .wait(1)
    )
    this.timeline.addTween(
      cjs.Tween.get(instance_8Filter_1)
        .wait(13)
        .to(new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), 0)
        .wait(1)
        .to(new cjs.ColorFilter(0.328125, 0.328125, 0.328125, 1, 170, 170, 170, 0), 0)
        .wait(1)
        .to(new cjs.ColorFilter(0.671875, 0.671875, 0.671875, 1, 85, 85, 85, 0), 0)
        .wait(1)
        .to(new cjs.ColorFilter(1, 1, 1, 1, 0, 0, 0, 0), 0)
        .wait(2)
        .to(new cjs.ColorFilter(1, 1, 1, 1, 0, 0, 0, 0), 0)
        .wait(2)
        .to(new cjs.ColorFilter(1, 1, 1, 1, 0, 0, 0, 0), 0)
        .wait(2)
        .to(new cjs.ColorFilter(1, 1, 1, 1, 0, 0, 0, 0), 0)
        .wait(2)
        .to(new cjs.ColorFilter(1, 1, 1, 1, 0, 0, 0, 0), 0)
        .wait(2)
        .to(new cjs.ColorFilter(1, 1, 1, 1, 0, 0, 0, 0), 0)
        .wait(1)
        .to(new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), 0)
        .wait(1)
        .to(new cjs.ColorFilter(1, 1, 1, 1, 0, 0, 0, 0), 0)
        .wait(1)
    )
    // Layer_9 (mask)
    var mask = new cjs.Shape()
    mask._off = true
    var mask_graphics_0 = new cjs.Graphics().p(
      'EhHkAc6IhbmcQlS3yks4WQgmjGgciDQFYg8BPgLIAJgBQBPgKJEhaQECglE1g4QE2g5BegPQBfgOCRgbQCRgbc1lKIM2hyQABAgALAlIBHDxQA7DNCKIuQCLIvCxM+QAoDfAtDaQA+EmBUFbQBVFeBsGUQAOAyAOAbIABACQlBBapdCGIk1BFQnzBwpuCTQs4DCpCCVQpCCVsoDcQhynkhunng'
    )
    var mask_graphics_1 = new cjs.Graphics().p(
      'EhHkAc6IhbmcQlS3yks4WQgmjGgciDQFYg8BPgLIAJgBQBPgKJEhaQECglE1g4QE2g5BegPQBfgOCRgbQCRgbc1lKIM2hyQABAgALAlIBHDxQA7DNCKIuQCLIvCxM+QAoDfAtDaQA+EmBUFbQBVFeBsGUQAOAyAOAbIABACQlBBapdCGIk1BFQnzBwpuCTQs4DCpCCVQpCCVsoDcQhynkhunng'
    )
    var mask_graphics_2 = new cjs.Graphics().p(
      'EhHkAc6IhbmcQlS3yks4WQgmjGgciDQFYg8BPgLIAJgBQBPgKJEhaQECglE1g4QE2g5BegPQBfgOCRgbQCRgbc1lKIM2hyQABAgALAlIBHDxQA7DNCKIuQCLIvCxM+QAoDfAtDaQA+EmBUFbQBVFeBsGUQAOAyAOAbIABACQlBBapdCGIk1BFQnzBwpuCTQs4DCpCCVQpCCVsoDcQhynkhunng'
    )
    var mask_graphics_3 = new cjs.Graphics().p(
      'EhHkAc6IhbmcQlS3yks4WQgmjGgciDQFYg8BPgLIAJgBQBPgKJEhaQECglE1g4QE2g5BegPQBfgOCRgbQCRgbc1lKIM2hyQABAgALAlIBHDxQA7DNCKIuQCLIvCxM+QAoDfAtDaQA+EmBUFbQBVFeBsGUQAOAyAOAbIABACQlBBapdCGIk1BFQnzBwpuCTQs4DCpCCVQpCCVsoDcQhynkhunng'
    )
    var mask_graphics_4 = new cjs.Graphics().p(
      'EhHkAc6IhbmcQlS3yks4WQgmjGgciDQFYg8BPgLIAJgBQBPgKJEhaQECglE1g4QE2g5BegPQBfgOCRgbQCRgbc1lKIM2hyQABAgALAlIBHDxQA7DNCKIuQCLIvCxM+QAoDfAtDaQA+EmBUFbQBVFeBsGUQAOAyAOAbIABACQlBBapdCGIk1BFQnzBwpuCTQs4DCpCCVQpCCVsoDcQhynkhunng'
    )
    var mask_graphics_5 = new cjs.Graphics().p(
      'EhHkAc6IhbmcQlS3yks4WQgmjGgciDQFYg8BPgLIAJgBQBPgKJEhaQECglE1g4QE2g5BegPQBfgOCRgbQCRgbc1lKIM2hyQABAgALAlIBHDxQA7DNCKIuQCLIvCxM+QAoDfAtDaQA+EmBUFbQBVFeBsGUQAOAyAOAbIABACQlBBapdCGIk1BFQnzBwpuCTQs4DCpCCVQpCCVsoDcQhynkhunng'
    )
    var mask_graphics_6 = new cjs.Graphics().p(
      'EhHkAc6IhbmcQlS3yks4WQgmjGgciDQFYg8BPgLIAJgBQBPgKJEhaQECglE1g4QE2g5BegPQBfgOCRgbQCRgbc1lKIM2hyQABAgALAlIBHDxQA7DNCKIuQCLIvCxM+QAoDfAtDaQA+EmBUFbQBVFeBsGUQAOAyAOAbIABACQlBBapdCGIk1BFQnzBwpuCTQs4DCpCCVQpCCVsoDcQhynkhunng'
    )
    var mask_graphics_7 = new cjs.Graphics().p(
      'EhHkAc6IhbmcQlS3yks4WQgmjGgciDQFYg8BPgLIAJgBQBPgKJEhaQECglE1g4QE2g5BegPQBfgOCRgbQCRgbc1lKIM2hyQABAgALAlIBHDxQA7DNCKIuQCLIvCxM+QAoDfAtDaQA+EmBUFbQBVFeBsGUQAOAyAOAbIABACQlBBapdCGIk1BFQnzBwpuCTQs4DCpCCVQpCCVsoDcQhynkhunng'
    )
    var mask_graphics_8 = new cjs.Graphics().p(
      'EhHkAc6IhbmcQlS3yks4WQgmjGgciDQFYg8BPgLIAJgBQBPgKJEhaQECglE1g4QE2g5BegPQBfgOCRgbQCRgbc1lKIM2hyQABAgALAlIBHDxQA7DNCKIuQCLIvCxM+QAoDfAtDaQA+EmBUFbQBVFeBsGUQAOAyAOAbIABACQlBBapdCGIk1BFQnzBwpuCTQs4DCpCCVQpCCVsoDcQhynkhunng'
    )
    var mask_graphics_9 = new cjs.Graphics().p(
      'EhHkAc6IhbmcQlS3yks4WQgmjGgciDQFYg8BPgLIAJgBQBPgKJEhaQECglE1g4QE2g5BegPQBfgOCRgbQCRgbc1lKIM2hyQABAgALAlIBHDxQA7DNCKIuQCLIvCxM+QAoDfAtDaQA+EmBUFbQBVFeBsGUQAOAyAOAbIABACQlBBapdCGIk1BFQnzBwpuCTQs4DCpCCVQpCCVsoDcQhynkhunng'
    )
    var mask_graphics_10 = new cjs.Graphics().p(
      'EhHkAc6IhbmcQlS3yks4WQgmjGgciDQFYg8BPgLIAJgBQBPgKJEhaQECglE1g4QE2g5BegPQBfgOCRgbQCRgbc1lKIM2hyQABAgALAlIBHDxQA7DNCKIuQCLIvCxM+QAoDfAtDaQA+EmBUFbQBVFeBsGUQAOAyAOAbIABACQlBBapdCGIk1BFQnzBwpuCTQs4DCpCCVQpCCVsoDcQhynkhunng'
    )
    var mask_graphics_11 = new cjs.Graphics().p(
      'EhHkAc6IhbmcQlS3yks4WQgmjGgciDQFYg8BPgLIAJgBQBPgKJEhaQECglE1g4QE2g5BegPQBfgOCRgbQCRgbc1lKIM2hyQABAgALAlIBHDxQA7DNCKIuQCLIvCxM+QAoDfAtDaQA+EmBUFbQBVFeBsGUQAOAyAOAbIABACQlBBapdCGIk1BFQnzBwpuCTQs4DCpCCVQpCCVsoDcQhynkhunng'
    )
    var mask_graphics_12 = new cjs.Graphics().p(
      'EhHkAc6IhbmcQlS3yks4WQgmjGgciDQFYg8BPgLIAJgBQBPgKJEhaQECglE1g4QE2g5BegPQBfgOCRgbQCRgbc1lKIM2hyQABAgALAlIBHDxQA7DNCKIuQCLIvCxM+QAoDfAtDaQA+EmBUFbQBVFeBsGUQAOAyAOAbIABACQlBBapdCGIk1BFQnzBwpuCTQs4DCpCCVQpCCVsoDcQhynkhunng'
    )
    var mask_graphics_13 = new cjs.Graphics().p(
      'EhHkAc6IhbmcQlS3yks4WQgmjGgciDQFYg8BPgLIAJgBQBPgKJEhaQECglE1g4QE2g5BegPQBfgOCRgbQCRgbc1lKIM2hyQABAgALAlIBHDxQA7DNCKIuQCLIvCxM+QAoDfAtDaQA+EmBUFbQBVFeBsGUQAOAyAOAbIABACQlBBapdCGIk1BFQnzBwpuCTQs4DCpCCVQpCCVsoDcQhynkhunng'
    )
    var mask_graphics_14 = new cjs.Graphics().p(
      'EhHkAc6IhbmdQlS3xks4WQgmjGgciDQFYg8BPgKIAJgCQBPgLJEhZQECglE1g4QE2g5BegPQBfgOCRgbQCRgbc1lKIM2hyQABAgALAlIBHDxQA7DMCKIvQCLIvCxM/QAoDdAtDbQA+EmBUFbQBVFdBsGVQAOAyAOAbIABADQlBBYpdCGIk1BGQnzBwpuCTQs4DDpCCUQpCCVsoDcQhynkhunng'
    )
    var mask_graphics_15 = new cjs.Graphics().p(
      'EhHkAc5IhbmcQlS3wks4YQgmjFgciDQFYg8BPgKIAJgCQBPgKJEhaQECglE1g5QE2g4BegPQBfgOCRgbQCRgbc1lKIM2hyQABAgALAlIBHDxQA7DMCKIvQCLIvCxM/QAoDdAtDbQA+EmBUFbQBVFdBsGVQAOAyAOAbIABADQlBBZpdCFIk1BFQnzBxpuCTQs4DDpCCUQpCCVsoDcQhynkhunog'
    )
    var mask_graphics_16 = new cjs.Graphics().p(
      'EhHkAc6IhbmcQlS3yks4WQgmjGgciDQFYg8BPgLIAJgBQBPgKJEhaQECglE1g4QE2g5BegPQBfgOCRgbQCRgbc1lKIM2hyQABAgALAlIBHDxQA7DNCKIuQCLIvCxM+QAoDfAtDaQA+EmBUFbQBVFeBsGUQAOAyAOAbIABACQlBBapdCGIk1BFQnzBwpuCTQs4DCpCCVQpCCVsoDcQhynkhunng'
    )
    var mask_graphics_17 = new cjs.Graphics().p(
      'EhHkAc6IhbmcQlS3yks4WQgmjGgciDQFYg8BPgLIAJgBQBPgKJEhaQECglE1g4QE2g5BegPQBfgOCRgbQCRgbc1lKIM2hyQABAgALAlIBHDxQA7DNCKIuQCLIvCxM+QAoDfAtDaQA+EmBUFbQBVFeBsGUQAOAyAOAbIABACQlBBapdCGIk1BFQnzBwpuCTQs4DCpCCVQpCCVsoDcQhynkhunng'
    )
    var mask_graphics_18 = new cjs.Graphics().p(
      'EhHkAc6IhbmcQlS3yks4WQgmjGgciDQFYg8BPgLIAJgBQBPgKJEhaQECglE1g4QE2g5BegPQBfgOCRgbQCRgbc1lKIM2hyQABAgALAlIBHDxQA7DNCKIuQCLIvCxM+QAoDfAtDaQA+EmBUFbQBVFeBsGUQAOAyAOAbIABACQlBBapdCGIk1BFQnzBwpuCTQs4DCpCCVQpCCVsoDcQhynkhunng'
    )
    var mask_graphics_19 = new cjs.Graphics().p(
      'EhHkAc6IhbmcQlS3yks4WQgmjGgciDQFYg8BPgLIAJgBQBPgKJEhaQECglE1g4QE2g5BegPQBfgOCRgbQCRgbc1lKIM2hyQABAgALAlIBHDxQA7DNCKIuQCLIvCxM+QAoDfAtDaQA+EmBUFbQBVFeBsGUQAOAyAOAbIABACQlBBapdCGIk1BFQnzBwpuCTQs4DCpCCVQpCCVsoDcQhynkhunng'
    )
    var mask_graphics_20 = new cjs.Graphics().p(
      'EhHkAc6IhbmcQlS3yks4WQgmjGgciDQFYg8BPgLIAJgBQBPgKJEhaQECglE1g4QE2g5BegPQBfgOCRgbQCRgbc1lKIM2hyQABAgALAlIBHDxQA7DNCKIuQCLIvCxM+QAoDfAtDaQA+EmBUFbQBVFeBsGUQAOAyAOAbIABACQlBBapdCGIk1BFQnzBwpuCTQs4DCpCCVQpCCVsoDcQhynkhunng'
    )
    var mask_graphics_21 = new cjs.Graphics().p(
      'EhHkAc6IhbmcQlS3yks4WQgmjGgciDQFYg8BPgLIAJgBQBPgKJEhaQECglE1g4QE2g5BegPQBfgOCRgbQCRgbc1lKIM2hyQABAgALAlIBHDxQA7DNCKIuQCLIvCxM+QAoDfAtDaQA+EmBUFbQBVFeBsGUQAOAyAOAbIABACQlBBapdCGIk1BFQnzBwpuCTQs4DCpCCVQpCCVsoDcQhynkhunng'
    )
    var mask_graphics_22 = new cjs.Graphics().p(
      'EhHkAc6IhbmcQlS3yks4WQgmjGgciDQFYg8BPgLIAJgBQBPgKJEhaQECglE1g4QE2g5BegPQBfgOCRgbQCRgbc1lKIM2hyQABAgALAlIBHDxQA7DNCKIuQCLIvCxM+QAoDfAtDaQA+EmBUFbQBVFeBsGUQAOAyAOAbIABACQlBBapdCGIk1BFQnzBwpuCTQs4DCpCCVQpCCVsoDcQhynkhunng'
    )
    var mask_graphics_23 = new cjs.Graphics().p(
      'EhHkAc6IhbmcQlS3yks4WQgmjGgciDQFYg8BPgLIAJgBQBPgKJEhaQECglE1g4QE2g5BegPQBfgOCRgbQCRgbc1lKIM2hyQABAgALAlIBHDxQA7DNCKIuQCLIvCxM+QAoDfAtDaQA+EmBUFbQBVFeBsGUQAOAyAOAbIABACQlBBapdCGIk1BFQnzBwpuCTQs4DCpCCVQpCCVsoDcQhynkhunng'
    )
    var mask_graphics_24 = new cjs.Graphics().p(
      'EhHkAc6IhbmcQlS3yks4WQgmjGgciDQFYg8BPgLIAJgBQBPgKJEhaQECglE1g4QE2g5BegPQBfgOCRgbQCRgbc1lKIM2hyQABAgALAlIBHDxQA7DNCKIuQCLIvCxM+QAoDfAtDaQA+EmBUFbQBVFeBsGUQAOAyAOAbIABACQlBBapdCGIk1BFQnzBwpuCTQs4DCpCCVQpCCVsoDcQhynkhunng'
    )
    var mask_graphics_25 = new cjs.Graphics().p(
      'EhHkAc6IhbmcQlS3yks4WQgmjGgciDQFYg8BPgLIAJgBQBPgKJEhaQECglE1g4QE2g5BegPQBfgOCRgbQCRgbc1lKIM2hyQABAgALAlIBHDxQA7DNCKIuQCLIvCxM+QAoDfAtDaQA+EmBUFbQBVFeBsGUQAOAyAOAbIABACQlBBapdCGIk1BFQnzBwpuCTQs4DCpCCVQpCCVsoDcQhynkhunng'
    )
    var mask_graphics_26 = new cjs.Graphics().p(
      'EhHkAc6IhbmcQlS3yks4WQgmjGgciDQFYg8BPgLIAJgBQBPgKJEhaQECglE1g4QE2g5BegPQBfgOCRgbQCRgbc1lKIM2hyQABAgALAlIBHDxQA7DNCKIuQCLIvCxM+QAoDfAtDaQA+EmBUFbQBVFeBsGUQAOAyAOAbIABACQlBBapdCGIk1BFQnzBwpuCTQs4DCpCCVQpCCVsoDcQhynkhunng'
    )
    var mask_graphics_27 = new cjs.Graphics().p(
      'EhHkAc5IhbmcQlS3wks4YQgmjEgciEQFYg8BPgKIAJgCQBPgKJEhaQECglE1g5QE2g4BegPQBfgOCRgbQCRgbc1lKIM2hyQABAgALAlIBHDxQA7DMCKIwQCLIuCxM/QAoDdAtDbQA+EmBUFbQBVFdBsGVQAOAyAOAbIABADQlBBYpdCHIk1BEQnzBxpuCTQs4DDpCCUQpCCVsoDcQhynkhunog'
    )
    var mask_graphics_28 = new cjs.Graphics().p(
      'EhHkAc6IhbmcQlS3yks4WQgmjGgciDQFYg8BPgLIAJgBQBPgKJEhaQECglE1g4QE2g5BegPQBfgOCRgbQCRgbc1lKIM2hyQABAgALAlIBHDxQA7DNCKIuQCLIvCxM+QAoDfAtDaQA+EmBUFbQBVFeBsGUQAOAyAOAbIABACQlBBapdCGIk1BFQnzBwpuCTQs4DCpCCVQpCCVsoDcQhynkhunng'
    )
    this.timeline.addTween(
      cjs.Tween.get(mask)
        .to({ graphics: mask_graphics_0, x: -537.625, y: -158.7 })
        .wait(1)
        .to({ graphics: mask_graphics_1, x: -537.625, y: -158.7 })
        .wait(1)
        .to({ graphics: mask_graphics_2, x: -537.625, y: -158.7 })
        .wait(1)
        .to({ graphics: mask_graphics_3, x: -537.625, y: -158.7 })
        .wait(1)
        .to({ graphics: mask_graphics_4, x: -537.625, y: -158.7 })
        .wait(1)
        .to({ graphics: mask_graphics_5, x: -537.625, y: -158.7 })
        .wait(1)
        .to({ graphics: mask_graphics_6, x: -537.625, y: -158.7 })
        .wait(1)
        .to({ graphics: mask_graphics_7, x: -537.625, y: -158.7 })
        .wait(1)
        .to({ graphics: mask_graphics_8, x: -537.625, y: -158.7 })
        .wait(1)
        .to({ graphics: mask_graphics_9, x: -537.625, y: -158.7 })
        .wait(1)
        .to({ graphics: mask_graphics_10, x: -537.625, y: -158.7 })
        .wait(1)
        .to({ graphics: mask_graphics_11, x: -537.625, y: -158.7 })
        .wait(1)
        .to({ graphics: mask_graphics_12, x: -537.625, y: -158.7 })
        .wait(1)
        .to({ graphics: mask_graphics_13, x: -537.625, y: -158.7 })
        .wait(1)
        .to({ graphics: mask_graphics_14, x: -537.625, y: -141.75 })
        .wait(1)
        .to({ graphics: mask_graphics_15, x: -537.625, y: -150.2 })
        .wait(1)
        .to({ graphics: mask_graphics_16, x: -537.625, y: -158.7 })
        .wait(1)
        .to({ graphics: mask_graphics_17, x: -537.625, y: -158.7 })
        .wait(1)
        .to({ graphics: mask_graphics_18, x: -537.625, y: -158.7 })
        .wait(1)
        .to({ graphics: mask_graphics_19, x: -537.625, y: -158.7 })
        .wait(1)
        .to({ graphics: mask_graphics_20, x: -537.625, y: -158.7 })
        .wait(1)
        .to({ graphics: mask_graphics_21, x: -537.625, y: -158.7 })
        .wait(1)
        .to({ graphics: mask_graphics_22, x: -537.625, y: -158.7 })
        .wait(1)
        .to({ graphics: mask_graphics_23, x: -537.625, y: -158.7 })
        .wait(1)
        .to({ graphics: mask_graphics_24, x: -537.625, y: -158.7 })
        .wait(1)
        .to({ graphics: mask_graphics_25, x: -537.625, y: -158.7 })
        .wait(1)
        .to({ graphics: mask_graphics_26, x: -537.625, y: -158.7 })
        .wait(1)
        .to({ graphics: mask_graphics_27, x: -537.625, y: -147.4 })
        .wait(1)
        .to({ graphics: mask_graphics_28, x: -537.625, y: -158.7 })
        .wait(1)
    )
    // Layer_8
    this.instance_9 = new lib.Tween6('synched', 0)
    this.instance_9.setTransform(-437.4, -216.25, 1.0014, 1, 0, 0, -3.0073)
    var maskedShapeInstanceList = [this.instance_9]
    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask
    }
    this.timeline.addTween(cjs.Tween.get(this.instance_9).to({ x: -954.9, y: -86.9 }, 28).wait(1))
    // Layer_7
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f()
      .s('#09255B')
      .ss(8, 1, 1)
      .p(
        'AQZk8QACAdANA+QAOBJAKAiQAQA7ArAfQArAfBJgMQBEgNAignQAigngNhDIhjATQgMACgMgHQgLgIgCgNIgZh9QgCgNAHgLQAIgLANgDIEdg1QANgDALAHQALAJADAMIAdCXQATBighBSQgiBShMA3QhMA3hnAUQhuAUhZgbQhagcg7hAQg8hAgVhWQgNg4gHgkQgJgsgMhKQgOhZAfhRQAfhRBJg6QBKg6BtgVQBpgUBZAYQBYAXA5AyQA5AzAOA3QADAKgGAKQgHAJgLACIidAdQgPADgLgGQgKgGgRgNQgagXgggKQgggJg0AKQiFAZALCLgAKAEiQgSADgOgGQgPgHgHgIIldlfIBOGNQADANgIALQgIALgMADIibAdQgNACgLgHQgLgIgDgNIiUr4QgCgNAIgLQAHgLANgDIB6gXQARgDAPAGQAPAHAGAJIFdFfIhOmOQgCgNAIgLQAHgLANgDICagdQAOgCALAIQALAHACANICVL4QADANgIAMQgHAKgOADgAo1ldQBwgVBaAbQBZAbA7BAQA6BAAWBZQAJAhAOBIQAOBHAEAgQANBbgeBRQgeBRhJA5QhJA6hxAVQhvAVhagbQhagbg6hAQg6hBgWhYQgPg/gIgoQgIgogKhDQgNhZAehRQAehRBJg5QBJg6BwgVgAlgg0QgSg9gsgeQgsgehGANQhGANgeAsQgdAsAGA+QAEAoALA6QAMA6AMAqQASA+AsAdQAsAfBGgNQBGgNAegtQAdgrgGhAQgFgrgLg6QgMg6gLgmgAuQGDQAMgDAMAIQALAIADANIAYB9QADAMgIAMQgIALgMACIoiBnQgNACgMgHQgLgIgCgNIiVr4QgDgNAIgLQAIgLANgDICagdQANgCAMAHQAKAIADANIB2Jbg'
      )
    this.shape.setTransform(-805.561, -314.6483)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'A2mKhQgLgIgCgNIiVr4QgDgNAIgLQAIgLANgDICagdQANgCAMAHQAKAIADANIB2JbIFohDQAMgDAMAIQALAIADANIAYB9QADAMgIAMQgIALgMACIoiBnIgHABQgJAAgJgGgApZHsQhagbg6hAQg6hBgWhYQgPg/gIgoIgShrQgNhZAehRQAehRBJg5QBJg6BwgVQBwgVBaAbQBZAbA7BAQA6BAAWBZQAJAhAOBIQAOBHAEAgQANBbgeBRQgeBRhJA5QhJA6hxAVQgxAJgtAAQg5AAgygPgAoQigQhGANgeAsQgdAsAGA+QAEAoALA6QAMA6AMAqQASA+AsAdQAsAfBGgNQBGgNAegtQAdgrgGhAQgFgrgLg6QgMg6gLgmQgSg9gsgeQgfgVgrAAQgTAAgVAEgABvF8QgLgIgDgNIiUr4QgCgNAIgLQAHgLANgDIB6gXQARgDAPAGQAPAHAGAJIFdFfIhOmOQgCgNAIgLQAHgLANgDICagdQAOgCALAIQALAHACANICVL4QADANgIAMQgHAKgOADIh6AXQgSADgOgGQgPgHgHgIIldlfIBOGNQADANgIALQgIALgMADIibAdIgGABQgKAAgIgGgARNCrQhagcg7hAQg8hAgVhWQgNg4gHgkQgJgsgMhKQgOhZAfhRQAfhRBJg6QBKg6BtgVQBpgUBZAYQBYAXA5AyQA5AzAOA3QADAKgGAKQgHAJgLACIidAdQgPADgLgGQgKgGgRgNQgagXgggKQgggJg0AKQiFAZALCLQACAdANA+QAOBJAKAiQAQA7ArAfQArAfBJgMQBEgNAignQAigngNhDIhjATQgMACgMgHQgLgIgCgNIgZh9QgCgNAHgLQAIgLANgDIEdg1QANgDALAHQALAJADAMIAdCXQATBighBSQgiBShMA3QhMA3hnAUQgwAJgrAAQg6AAgygQg'
      )
    this.shape_1.setTransform(-805.561, -314.6483)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#09255B')
      .s()
      .p(
        'A6rNRQhcgRg9gwQg+gxgPhAIAAgBQgEgRALgOIgBABQAKgRAPgCIgBAAICagkIAAAAQAggHAaAPIAAAAIAYARIABAAQAQAMAdAFIABAAQAeAGAngJQCAgdgGgxIAAgBQgDgMgOgEIgBgBQgWgIgjAAIgBAAQgmgBhVABIg3ABQiCAChHgyQhJgygVhsIAAAAQgOhJAfhIQAfhIBIg2QBHg1BlgYQBjgXBYATIAAAAQBZATA6AtQA9AvANA3IAAABQADARgJAOIAAAAQgLAPgOADIAAAAIiZAjQgVAFgMgCIABAAQgNgCgQgKIgUgNIAAAAQgNgJgZgDIgBAAQgbgEghAIIAAAAQgvALgcATIABgBQgWAQAFAYQADAPAPAGQAUAIAoACIAAAAICWgCIAAAAQCPgEBMAtQBPAuAXBzQAQBSglBLQglBIhQA0QhPA0hqAYQg+APg5AAQgnAAgmgHgAwOLDIAAAAQgSgLgDgUIiVr4IAAAAQgEgSALgRIABAAIAAgBQAKgQATgFICZgjIABAAQASgEARAKIABABQAPALAEASIA0EMIDng2Ig1kMIAAAAQgEgTALgRIABAAQALgRASgEICZgjIAAAAQATgFARALIgBAAQARALAEATICVL4QAEASgMASIAAAAQgKAQgTAEIiZAkQgSAEgSgKIgBgBQgPgLgEgSIg1kSIjnA2IA2ESQADASgKASIgBAAQgLARgTAEIABgBIiZAkIAAAAIgNABQgMAAgKgGgAgtHIQhegYg9hCQg8hBgXhcIAAAAQgPg/gIgpIAAAAIgShqIAAAAQgOhfAfhWIAAAAQAfhWBMhAQBLg/BzgaQBxgbBdAZIAAAAQBcAYA+BCQA8BBAXBbQAJAhAPBKQAOBHAEAhIAAAAQANBfgfBWQgfBWhLBAIgBAAQhLA/hyAaIAAAAQg8AOg2AAQgwAAgsgMgAhNgxQAEAnALA5QALA5AMApIAAAAQAQA4AmAZIABAAQAnAaA+gPQA/gOAbgqIAAAAQAagpgFg6QgGgqgLg5QgLg6gLglIAAAAQgQg4gngaIAAABQgogZg+AOIAAAAQg+APgbAoIABAAQgbAqAGA6gAKRE6IgBgBQgRgLgDgTIiVr4IAAAAQgEgSALgRIABAAIAAgBQAKgQATgFIE9hJIAAAAQCigmBoAyQBqAzAcCOQAiCsh5BlIC/DqIAAAAQAIAKACAJQADAQgKAPQgKAOgQAEIifAlQgcAGgPgIQgQgJgLgOIAAAAIiujWIhUATIAvDtQADASgKASIgBAAQgLARgTAEIABgBIiZAkIAAAAIgMABQgNAAgKgGgAL9lvIAcCQIB1gbIABAAQBhgXgNhJQgHgjgZgNQgdgNgzAMIAAAAgAZwBUIgBgBQgPgLgEgSIhzpNIi/AtIgBAAQgSAEgQgKIgBAAQgQgMgEgSIgYh9IAAAAQgEgTALgRQALgRATgEIgBAAIJ0iRIAAAAQATgFASALIAAAAQAPALAEATIAZB9QADASgKARIAAABQgMAPgSAFIAAAAIjAAtIB0JOQAEARgNASIABgBQgKARgTAEIiZAkIAAAAIgMABQgMAAgMgHg'
      )
    this.shape_2.setTransform(-733.5754, -20.0355)
    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f('#AD539B')
      .s()
      .p(
        'Ah0GhQhagcg7hAQg8hAgVhXQgNg4gHgkQgJgsgMhJQgOhZAfhRQAfhRBJg6QBKg6BtgVQBogUBZAYQBYAXA5AyQA5AzAOA3QADAKgGAKQgHAJgLACIidAdQgPADgLgGQgKgGgRgNQgagXgggKQgggJgzAKQiFAZALCLQACAdANA9QAOBJAKAiQAQA7ArAfQArAgBIgNQBEgNAignQAigngNhDIhjATQgMACgMgHQgLgIgCgNIgZh8QgCgNAHgLQAIgLANgDIEdg1QANgDALAHQALAJADAMIAdCWQATBighBSQgiBThMA3QhMA3hnAUQgvAJgrAAQg5AAgzgQg'
      )
    this.shape_3.setTransform(-683.799, -339.2372)
    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#AD539B')
      .s()
      .p(
        'AkBHSQgLgIgCgMIiVr4QgDgNAJgMQAHgLANgCIB7gXQARgEAPAHQAPAGAGAJIFcFgIhOmOQgCgNAHgLQAIgMANgCICagdQAOgDAKAIQALAIADANICVL4QADAMgIAMQgIALgNACIh7AXQgRAEgPgGQgOgHgIgJIlblgIBOGPQACAMgHAMQgIALgNACIiaAdIgGABQgKAAgJgGg'
      )
    this.shape_4.setTransform(-768.75, -323.2735)
    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f('#AD539B')
      .s()
      .p(
        'Ah2GiQhagbg6hAQg6hBgWhYQgPg/gIgoIgShqQgNhaAehRQAehRBJg5QBJg6BwgVQBvgVBaAbQBZAbA7BAQA6BAAWBZQAJAhAOBJQAOBGAEAgQANBbgeBRQgeBRhJA5QhJA6hxAVQgxAJgsAAQg5AAgygPgAgtjqQhGANgeAsQgdAsAGA/QAEAoALA5QAMA6AMAqQASA+AsAdQAsAfBFgNQBGgNAegtQAdgrgGhAQgFgrgLg5QgMg7gLgmQgSg9gsgeQgfgVgqAAQgTAAgVAEg'
      )
    this.shape_5.setTransform(-853.8773, -307.2202)
    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f('#AD539B')
      .s()
      .p(
        'AjYGmQgLgIgCgNIiVr4QgDgNAIgLQAIgLANgDICagdQANgCAMAHQAKAIADANIB2JbIFnhDQAMgDAMAIQALAIADANIAYB9QADAMgIAMQgIALgMACIohBnIgHAAQgJAAgJgFg'
      )
    this.shape_6.setTransform(-928.5735, -289.525)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .to({ state: [] }, 14)
        .to({ state: [{ t: this.shape_2 }] }, 2)
        .to({ state: [{ t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }] }, 12)
        .wait(1)
    )
    // Layer_4
    this.instance_10 = new lib.Symbol32('synched', 0)
    this.instance_10.setTransform(-157.25, 248.05, 1, 1, 0, 0, 0, 75.9, -6.5)
    this.instance_11 = new lib.Symbol31('synched', 0)
    this.instance_11.setTransform(-175.5, 138.55, 1, 1, 34.6865, 0, 0, 86.5, 10.7)
    this.instance_11._off = true
    this.instance_12 = new lib.Symbol30('synched', 0)
    this.instance_12.setTransform(-181.65, 248.3, 1.1251, 0.9999, 0, 9.8441, -1.2901, 74.2, -7.7)
    this.instance_12._off = true
    this.instance_13 = new lib.Symbol29('synched', 0)
    this.instance_13.setTransform(-157.25, 248.05, 1, 1, 0, 0, 0, 75.9, -6.5)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_10 }] })
        .to({ state: [{ t: this.instance_11 }] }, 11)
        .to({ state: [{ t: this.instance_12 }] }, 3)
        .to({ state: [{ t: this.instance_13 }] }, 9)
        .wait(6)
    )
    this.timeline.addTween(
      cjs.Tween.get(this.instance_10)
        .to({ _off: true, regX: 86.5, regY: 10.7, rotation: 34.6865, x: -175.5, y: 138.55 }, 11, cjs.Ease.quadInOut)
        .wait(18)
    )
    this.timeline.addTween(
      cjs.Tween.get(this.instance_11)
        .to({ _off: false }, 11, cjs.Ease.quadInOut)
        .to(
          {
            _off: true,
            regX: 74.2,
            regY: -7.7,
            scaleX: 1.1251,
            scaleY: 0.9999,
            rotation: 0,
            skewX: 9.8441,
            skewY: -1.2901,
            x: -181.65,
            y: 248.3,
          },
          3,
          cjs.Ease.quadIn
        )
        .wait(15)
    )
    this.timeline.addTween(
      cjs.Tween.get(this.instance_12)
        .wait(11)
        .to({ _off: false }, 3, cjs.Ease.quadIn)
        .to(
          { _off: true, regX: 75.9, regY: -6.5, scaleX: 1, scaleY: 1, skewX: 0, skewY: 0, x: -157.25, y: 248.05 },
          9,
          cjs.Ease.quadInOut
        )
        .wait(6)
    )
    // Layer_5
    this.instance_14 = new lib.Tween3('synched', 0)
    this.instance_14.setTransform(-387.25, 305.3, 0.9999, 0.9999, -14.9587, 0, 0, 37.2, -2.5)
    this.timeline.addTween(
      cjs.Tween.get(this.instance_14)
        .to(
          { regY: -2.1, scaleX: 0.9988, scaleY: 0.9988, rotation: 69.7626, x: -361.7, y: 39.15 },
          11,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 37.1,
            regY: -2.6,
            scaleX: 1.1201,
            scaleY: 0.708,
            rotation: 0,
            skewX: -13.9599,
            skewY: -15.9426,
            x: -485.1,
            y: 309.9,
          },
          3,
          cjs.Ease.quadIn
        )
        .to(
          { regX: 37.4, regY: -2.4, scaleX: 0.9999, scaleY: 0.9999, skewX: 0, skewY: 0, x: -386.35, y: 318.45 },
          9,
          cjs.Ease.quadInOut
        )
        .wait(6)
    )
    // Layer_1
    this.instance_15 = new lib.Tween1('synched', 0)
    this.instance_15.setTransform(196.05, 303.9)
    this.timeline.addTween(
      cjs.Tween.get(this.instance_15)
        .to({ startPosition: 0 }, 7)
        .to({ startPosition: 0 }, 7)
        .to({ startPosition: 0 }, 9)
        .to({ startPosition: 0 }, 5)
        .wait(1)
    )
    // Layer_2
    this.instance_16 = new lib.Symbol4('synched', 0)
    this.instance_16.setTransform(45.3, -28.75, 1, 1, 0, 0, 0, 181.6, 258.2)
    this.timeline.addTween(
      cjs.Tween.get(this.instance_16)
        .to({ rotation: 11.701, x: 45.4, y: -28.7 }, 7, cjs.Ease.quadInOut)
        .to({ rotation: 0, x: 45.3, y: -28.75 }, 7, cjs.Ease.quadIn)
        .to({ rotation: 10.995 }, 9, cjs.Ease.quadInOut)
        .to({ rotation: 0 }, 5, cjs.Ease.quadIn)
        .wait(1)
    )
    // Layer_3
    this.instance_17 = new lib.Symbol5('synched', 0)
    this.instance_17.setTransform(-162.85, 178.3, 1, 1, -14.9982, 0, 0, 67.6, 10.7)
    this.timeline.addTween(
      cjs.Tween.get(this.instance_17)
        .to({ x: -65.95 }, 14, cjs.Ease.quadInOut)
        .to({ regX: 67.5, regY: 11.1, scaleX: 0.9998, scaleY: 0.9998, rotation: 45, x: -105.1, y: 164.65 }, 9)
        .to(
          {
            regX: 67.2,
            regY: 11.2,
            scaleX: 0.9519,
            scaleY: 0.8589,
            rotation: 0,
            skewX: -22.3976,
            skewY: -19.2973,
            x: -195.55,
            y: 178.4,
          },
          3,
          cjs.Ease.get(1)
        )
        .to(
          {
            regX: 67.6,
            regY: 10.7,
            scaleX: 1,
            scaleY: 1,
            rotation: -14.9982,
            skewX: 0,
            skewY: 0,
            x: -162.85,
            y: 178.3,
          },
          2
        )
        .wait(1)
    )
    // Layer_6
    this.instance_18 = new lib.Tween4('single', 0)
    this.instance_18.setTransform(-537.55, 19.35)
    this.timeline.addTween(
      cjs.Tween.get(this.instance_18)
        .to({ startPosition: 0 }, 13)
        .to({ y: 36.3, startPosition: 1 }, 1)
        .to({ y: 19.35 }, 2)
        .to({ mode: 'synched', startPosition: 0 }, 10)
        .to({ y: 30.65 }, 1)
        .to({ y: 19.35 }, 1)
        .wait(1)
    )
    // Layer_11
    this.instance_19 = new lib.Symbol2('synched', 3)
    this.instance_19.setTransform(-880.15, -312.2, 1.5491, 1.5491, 0, 0, 180, 504.2, 668.4)
    this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(26).to({ startPosition: 0 }, 0).wait(3))
    // Layer_10
    this.instance_20 = new lib.Symbol2('synched', 17)
    this.instance_20.setTransform(-879.95, -312.2, 1.5491, 1.5491, 0, 0, 0, 504.2, 668.4)
    this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(12).to({ startPosition: 0 }, 0).wait(17))
    this.filterCacheList = []
    this.filterCacheList.push({
      instance: this.instance_8,
      startFrame: 13,
      endFrame: 13,
      x: -310,
      y: -284,
      w: 620,
      h: 568,
    })
    this.filterCacheList.push({
      instance: this.instance_8,
      startFrame: 0,
      endFrame: 0,
      x: -310,
      y: -284,
      w: 620,
      h: 568,
    })
    this.filterCacheList.push({
      instance: this.instance_8,
      startFrame: 14,
      endFrame: 14,
      x: -310,
      y: -284,
      w: 620,
      h: 568,
    })
    this.filterCacheList.push({
      instance: this.instance_8,
      startFrame: 15,
      endFrame: 15,
      x: -310,
      y: -284,
      w: 620,
      h: 568,
    })
    this.filterCacheList.push({
      instance: this.instance_8,
      startFrame: 16,
      endFrame: 16,
      x: -310,
      y: -284,
      w: 620,
      h: 568,
    })
    this.filterCacheList.push({
      instance: this.instance_8,
      startFrame: 17,
      endFrame: 17,
      x: -310,
      y: -284,
      w: 620,
      h: 568,
    })
    this.filterCacheList.push({
      instance: this.instance_8,
      startFrame: 18,
      endFrame: 18,
      x: -310,
      y: -284,
      w: 620,
      h: 568,
    })
    this.filterCacheList.push({
      instance: this.instance_8,
      startFrame: 19,
      endFrame: 19,
      x: -310,
      y: -284,
      w: 620,
      h: 568,
    })
    this.filterCacheList.push({
      instance: this.instance_8,
      startFrame: 20,
      endFrame: 20,
      x: -310,
      y: -284,
      w: 620,
      h: 568,
    })
    this.filterCacheList.push({
      instance: this.instance_8,
      startFrame: 21,
      endFrame: 21,
      x: -310,
      y: -284,
      w: 620,
      h: 568,
    })
    this.filterCacheList.push({
      instance: this.instance_8,
      startFrame: 22,
      endFrame: 22,
      x: -310,
      y: -284,
      w: 620,
      h: 568,
    })
    this.filterCacheList.push({
      instance: this.instance_8,
      startFrame: 23,
      endFrame: 23,
      x: -310,
      y: -284,
      w: 620,
      h: 568,
    })
    this.filterCacheList.push({
      instance: this.instance_8,
      startFrame: 24,
      endFrame: 24,
      x: -310,
      y: -284,
      w: 620,
      h: 568,
    })
    this.filterCacheList.push({
      instance: this.instance_8,
      startFrame: 25,
      endFrame: 25,
      x: -310,
      y: -284,
      w: 620,
      h: 568,
    })
    this.filterCacheList.push({
      instance: this.instance_8,
      startFrame: 26,
      endFrame: 26,
      x: -310,
      y: -284,
      w: 620,
      h: 568,
    })
    this.filterCacheList.push({
      instance: this.instance_8,
      startFrame: 27,
      endFrame: 27,
      x: -310,
      y: -284,
      w: 620,
      h: 568,
    })
    this.filterCacheList.push({
      instance: this.instance_8,
      startFrame: 28,
      endFrame: 28,
      x: -310,
      y: -284,
      w: 620,
      h: 568,
    })
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-1679.8, -1181.4, 2287.1, 1888.7)
  ;(lib.Symbol3_1 = function (mode, startPosition, loop, reversed) {
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
    this.instance_2 = new lib.Symbol2_1('synched', 0)
    this.instance_2.setTransform(174.2, 160.85)
    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30))
    this.instance_2.addEventListener('tick', AdobeAn.handleFilterCache)
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-1505.6, -1020.6, 2287.1, 1888.8000000000002)
  // stage content:
  ;(lib.trade2earn = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.Symbol3_1('synched', 0)
    this.instance.setTransform(264.25, 178.65, 0.1716, 0.1716)
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(30))
    this._renderFirstFrame()
  }).prototype = p = new lib.AnMovieClip()
  p.nominalBounds = new cjs.Rectangle(205.7, 153.5, 192.7, 174.10000000000002)
  // library properties:
  lib.properties = {
    id: '1341567257643A4F86E0E7FA745FACD5',
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
  an.compositions['1341567257643A4F86E0E7FA745FACD5'] = {
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
