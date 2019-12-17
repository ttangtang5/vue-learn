<template>
  <div>
      <h4>这是demo文件 vuex中数据{{ $store.state.count }}</h4>
      <h4>这是demo文件 {{ $store.getters.optCount }}</h4>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit('increment', 2);
  },
}
</script>

<style>

</style>