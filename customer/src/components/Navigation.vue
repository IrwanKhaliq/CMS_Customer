<template>
<div>
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1" @click="home">HOME</el-menu-item>
  <el-menu-item index="2" @click="login">Log In</el-menu-item>
  <el-menu-item index="3" @click="register">Register</el-menu-item>
</el-menu><br><br>
</div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      this.activeIndex = `${key}`
      this.activeIndex2 = `${key}`
    },
    home () { this.$router.push('/') },
    login () { this.$router.push({ path: '/login' }) },
    register () { this.$router.push({ path: '/register' }) }
  }
}
</script>

<style>

</style>
