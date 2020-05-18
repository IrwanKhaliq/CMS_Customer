<template>
    <el-page-header @back="logout" :content="content">
    </el-page-header>
</template>

<script>
export default {
  name: 'Headers',
  props: ['content'],
  methods: {
    logout () {
      localStorage.removeItem('access_token')
      this.$store.commit('SET_IS_LOGIN', false)
      this.$store.commit('SET_IS_ADMIN', false)
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style>
</style>
