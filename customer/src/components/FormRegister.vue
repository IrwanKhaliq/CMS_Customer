<template>
  <div>
    <Nav></Nav>
    <h1>Form Register</h1>
      <form>
        <el-input type="email" placeholder="Your first name" v-model="first_name" clearable></el-input><br><br>
        <el-input type="email" placeholder="Your last name" v-model="last_name" clearable></el-input><br><br>
        <el-input type="email" placeholder="Your mail" v-model="email" clearable></el-input><br><br>
        <el-input placeholder="Your Password" v-model="password" show-password></el-input><br><br>
        <el-button type="primary submit" @click.prevent="onSubmit">Submit</el-button>
        <el-button type="primary" @click="cancel">Cancel</el-button>
      </form>
  </div>
</template>

<script>
import axios from 'axios'
import Nav from '@/components/Navigation.vue'

export default {
  data () {
    return {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    }
  },
  components: {
    Nav
  },
  methods: {
    onSubmit () {
      axios({
        method: 'POST',
        url: 'https://mighty-hamlet-29943.herokuapp.com/register',
        data: {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
          role: 'customer'
        }
      })
        .then(newUser => {
          this.success()
          this.$router.push({ path: '/login' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    success () {
      this.$message({
        message: 'Yup, your account created',
        type: 'success'
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
