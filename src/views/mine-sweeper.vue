<script lang="ts" setup>
import { ref, reactive, defineComponent } from 'vue';

const WIDTH = 10;
const HEIGHT = 10;

interface BlockState {
  x: number;
  y: number;
  mine: Boolean;
}
// 伪数组加箭头函数生成数组  Array.from([1, 2, 3], x => x + x);
// let array = new Array(height).fill(new Array(width).fill(0));
let array = Array.from({ length: HEIGHT }, (value, x) => {
  return Array.from({ length: WIDTH },
    (value, y): BlockState => ({
      x: x,
      y: y,
      mine: Math.random() < 0.2,
    })
  );
});
var a = 20;
function generateMines() {
  "xxxx"

}


const state = reactive(array);

// // ts声明全局变量
// declare global {
//   interface Window {
//     something: any;
//   }
// }
// window.something = state
</script>
<template>
  <div class="mine-map">
    <div v-for="(row, y) in state" :key="y">
      <button class="mine-block" v-for="(block, x) in row" :key="x">
        <!-- {{ block.mine? '💣': '' }} -->
        <template v-if="block.mine">
          <!-- <i class="ri-fire-fill"></i> -->
        </template>
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.mine-map {
  display: flex;
  flex-direction: column;
}
.mine-block {
  width: 40px;
  height: 40px;
  margin: 1px;
}
</style>
