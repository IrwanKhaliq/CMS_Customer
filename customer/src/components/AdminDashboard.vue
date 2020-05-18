<template>
  <div>
    <Headers :content="'Find Product'" ></Headers>
    <el-button type="primary" icon="el-icon-edit" @click="addProductForm" circle></el-button><br>
    <small>Create New Product</small><br><br>
    <el-input placeholder="# Product's ID" v-model="id" width="10" clearable></el-input><br><br>
    <el-button type="primary submit" @click.prevent="getProduct">Submit</el-button><br><br>
    <signOut></signOut>
  </div>
</template>

<script>
import axios from 'axios'
import Headers from './Header.vue'

export default {
  name: 'AdminDashboard',
  data () {
    return {
      id: null
    }
  },
  components: { Headers },
  computed: {
    errStatus () { return this.$store.state.errorStatus }
  },
  methods: {
    addProductForm () {
      this.$router.push({ path: '/add-products' })
    },
    getProduct () {
      axios({
        method: 'GET',
        url: `https://mighty-hamlet-29943.herokuapp.com/products/${this.id}`,
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          this.$router.push({ path: `/products/${this.id}` })
          this.$store.commit('SET_DETAIL_ITEM', data.product)
          this.success()
        })
        .catch(_ => {
          this.warning()
          setTimeout(() => {
            this.$store.commit('SET_ERROR_STATUS', false)
          }, 2000)
        })
    },
    warning () {
      this.$message({
        showClose: true,
        message: 'Oops, Product Not Found',
        type: 'warning'
      })
    },
    success () {
      this.$message({
        showClose: true,
        message: 'Here you are',
        type: 'success'
      })
    }
  }
}
</script>

<style>
</style>
