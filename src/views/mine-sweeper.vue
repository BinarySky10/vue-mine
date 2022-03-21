<script lang="ts" setup>
import { ref, reactive, defineComponent } from 'vue';

const WIDTH = 10;
const HEIGHT = 10;

interface BlockState {
  x: number;
  y: number;
  mine: Boolean;
  count: number;
  turnOver: Boolean;
  explode: Boolean;
}
interface Postion {
  x: number;
  y: number;
}

// 伪数组加箭头函数生成数组  Array.from([1, 2, 3], x => x + x);
// let array = new Array(height).fill(new Array(width).fill(0));
let array = Array.from({ length: HEIGHT }, (value, x) => {
  return Array.from({ length: WIDTH },
    (value, y): BlockState => ({
      x: x,
      y: y,
      mine: Math.random() < 0.15,
      count: 0,
      turnOver: false,
      explode: false,
    })
  );
});
const state = reactive(array);

//计算数量
function computeCount(arrayState: BlockState[][]) {

  //计算方向
  function computeDirections(x: number, y: number): Postion[] {
    //方向
    const directions = [
      {
        x: -1,
        y: -1
      },
      {
        x: -1,
        y: 0
      },
      {
        x: -1,
        y: 1
      },
      {
        x: 0,
        y: -1
      },
      {
        x: 0,
        y: 1
      },
      {
        x: 1,
        y: -1
      },
      {
        x: 1,
        y: 0
      },
      {
        x: 1,
        y: 1
      },
    ]
    return directions.map(item => {
      return {
        x: x + item.x,
        y: y + item.y
      }
    })
  }

  for (let y = 0; y < arrayState.length; y++) {
    let row = arrayState[y]
    for (let x = 0; x < row.length; x++) {
      if (arrayState[x][y]?.mine) {
        continue;
      }
      let postions = computeDirections(x, y)
      arrayState[x][y].count = 0
      postions.forEach((postion: Postion) => {
        if (arrayState?.[postion.x]?.[postion.y]?.mine) {
          arrayState[x][y].count += arrayState[postion.x][postion.y].mine ? 1 : 0
        }
      })

    }
  }
}
//点击翻牌
function turnOverMine(arrayState: BlockState[][], x: number, y: number) {
  arrayState[x][y].turnOver = true;
  if (arrayState[x][y].mine) {
    arrayState[x][y].explode = true;
  }
}
//翻开为零的块
function turnZero() {

}

computeCount(state)

</script>
<template>
  <div class="mine-map">
    <div v-for="(row, x) in state" :key="x">
      <button
        class="mine-block"
        :class="block.turnOver ? 'mine-block-color-over' : 'mine-block-color'"
        v-for="(block, y) in row"
        :key="y"
        @click="turnOverMine(state, x, y)"
      >
        <template v-if="block.turnOver">
          <!-- 💣 -->
          <template v-if="block.mine && block.explode">{{ '💥' }}</template>
          <template v-else>{{ block.count ? block.count : '' }}</template>
        </template>
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.mine-map {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(182, 179, 179, 0.082);
  div {
    display: flex;
    button {
      width: 40px;
      height: 40px;
      margin: 4px;
    }
  }
}
.mine-block {
  width: 40px;
  height: 40px;
  margin: 1px;
}
.mine-block-color {
  background: rgb(119, 116, 116);
}
.mine-block-color-over {
  background: #fff;
}
</style>
