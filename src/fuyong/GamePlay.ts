
interface BlockState {
  x: number
  y: number
  mine: Boolean
  count: number
  turnOver: Boolean
  explode: Boolean
}
export interface Postion {
  x: number
  y: number
}

export class GamePlay {
  width: number
  height: number
  constructor(width: number, height: number) {
    this.width = width
    this.height = height
    this.reset()
  }

  reset() {
    const array = Array.from({ length: this.height }, (value, x) => {
      return Array.from({ length: this.width },
        (value, y): BlockState => ({
          x,
          y,
          mine: Math.random() < 0.08,
          count: 0,
          turnOver: false,
          explode: false,
        }),
      )
    })
  }
}
