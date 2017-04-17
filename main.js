const ordinals = ['A','B','C','D','E','F','G','H','I','J']
class Robot {
  constructor () {
    this.position_x = Math.floor(Math.random() * (10 - 1) + 1)
    this.position_y = Math.floor(Math.random() * (9 - 0))
    this.bla = 'column-'+ ordinals[this.position_x] + (this.position_y).toString()
    this.previousTarget = ''
    this.showPreviousTarget()
  }

  showPreviousTarget() {
    this.previousTarget = document.getElementById(this.bla)
    this.previousTarget.className = 'column eve'
  }

  forward () {
    if (this.position_y+1 > 0 && this.position_y+1 < 11) {
      this.position_y += 1
      return this.showPosition()
    }
    return
  }
  backwards () {
    if (this.position_y-1 > 0 && this.position_y-1 < 11) {
      this.position_y -= 1
      return this.showPosition()
    }
    return
  }
  to_left () {
    if (this.position_x-1 > -1 && this.position_x-1 < 10) {
      this.position_x -= 1
      return this.showPosition()
    }
    return
  }
  to_right () {
    if (this.position_x+1 > 0 && this.position_x+1 < 10) {
      this.position_x += 1
      return this.showPosition()
    }
    return this.showPosition()
  }
  checkKey (field, event) {
    switch (event.keyCode) {
      case 37:
        this.to_left()
        break;
      case 38:
        this.backwards()
        break;
      case 39:
        this.to_right()
        break;
      case 40:
        this.forward()
        break;
      default:
        return
    }
  }
  showPosition () {
    const target = document.getElementById('column-'+ ordinals[this.position_x]+(this.position_y).toString())
    this.previousTarget.className='column trail'
    target.className = 'column eve'
    this.previousTarget = target
    return
  }
}

const newRobot = new Robot()
