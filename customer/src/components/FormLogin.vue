<template>
  <div>
    <div v-if="errStatus">
      <el-alert title="Make sure tour email registered" type="warning"></el-alert>
    </div>
    <form>
      <el-input type="email" placeholder="Please input" v-model="email" clearable></el-input><br><br>
      <el-input placeholder="Please input password" v-model="password" show-password></el-input><br><br>
      <el-button type="primary submit" @click.prevent="onSubmit">Submit</el-button>
      <el-button type="primary" @click="cancel">Cancel</el-button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    errStatus () { return this.$store.state.errorStatus }
  },
  methods: {
    onSubmit () {
      axios({
        method: 'POST',
        url: 'https://mighty-hamlet-29943.herokuapp.com/login',
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          this.email = ''
          this.password = ''

          this.success()

          this.$store.commit('SET_IS_ADMIN', data.isAdmin)
          this.$router.push({ path: '/' })
        })
        .catch(_ => {
          this.$store.commit('SET_ERROR_MSG', 'Not Found')
          this.warning()
        })
    },
    success () {
      this.$message({
        message: 'Yup, you\'re logged in',
        type: 'success'
      })
    },
    warning () {
      this.$message({
        message: 'Hmmm, email or password wrong',
        type: 'warning'
      })
    },
    cancel () { this.$router.push({ path: '/' }) }
  },
  created () {
    if (localStorage.access_token) { this.$router.push({ path: '/' }) }
  }
}
</script>

<style>
</style>
