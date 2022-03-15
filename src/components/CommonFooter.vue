<template>
  <div class="tab">
    <cube-tab-bar
        v-model="selectedLabelSlots"
        @click="changHandler">
      <cube-tab v-for="(item) in tabs" :icon="item.icon" :label="item.label" :key="item.path" :value="item.path">
      </cube-tab>
    </cube-tab-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedLabelSlots: '/',
      tabs: [{
        label: '首页',
        icon: 'cubeic-home',
        path: '/'
      }, {
        label: '我的订单',
        icon: 'cubeic-like',
        path: '/order'
      }, {
        label: '个人中心',
        icon: 'cubeic-person',
        path: '/personal'
      }]
    }
  },
  methods: {
    changHandler(path) {
      //this.$route.path为当前路径
      if (path !== this.$route.path) {
        this.$router.push(path)
      }
    }
  },
  created() {
    //默认路由选择器，如刷新页面，需要重新进到当前路由
    this.selectedLabelSlots = this.$route.path
  }
}
</script>
<!--SCSS是⼀种CSS预处理语⾔, scoped 是指这个scss样式 只作⽤于当前组件-->
<style lang="scss" scoped>
.tab {
  position: fixed;
  bottom: 0;
  z-index: 999;
  background-color: #fff;
  width: 100%;
  border-top: 1px solid rgba($color: #000000, $alpha: 0.1);
}

.cube-tab_active {
  color: #3bb149;
}
</style>