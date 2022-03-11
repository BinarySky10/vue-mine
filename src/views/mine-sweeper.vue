<template>
  <div class="mine-map">
    <div v-for="y in 10" :key="y" >
      <button class="mine-block" v-for="x in 10" :key="x">
        {{ (y - 1) * 10 + x }}
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
