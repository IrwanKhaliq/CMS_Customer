<template>
  <div>
    <form>
    <el-form ref="form" label-width="120px">
        <el-input placeholder="Product's Name" v-model="name" clearable></el-input><br><br>
        <el-input placeholder="https://image-cdn.hypb.st/https..." v-model="image_url" clearable></el-input><br><br>
        <el-input placeholder="Product's Price" v-model="price" clearable></el-input><br><br>
        <el-input placeholder="Product's Stock" v-model="stock" clearable></el-input><br><br>
        <el-form-item label="">
          <el-select v-model="category" placeholder="Please Select Category">
            <el-option v-for="(category, i) in categories" :key="i" :label="category" :value="category"></el-option>
          </el-select>
        </el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button type="primary" @click="cancel">Cancel</el-button>
    </el-form>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AddProduct',
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: '',
      category: '',
      categories: ['shoes', 'upper', 'belt', 'socks', 'sandals']
    }
  },
  methods: {
    onSubmit () {
      axios({
        method: 'POST',
        url: 'https://mighty-hamlet-29943.herokuapp.com/products',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: this.name,
          image_url: this.image_url,
          price: this.price,
          stock: this.stock,
          category: this.category
        }
      })
        .then(newProduct => {
          this.success()
          this.$router.push({ path: '/' })

          this.name = ''
          this.image_url = ''
          this.price = ''
          this.stock = ''
          this.category = ''
        })
        .catch(err => {
          this.warning(err.message)
        })
    },
    success () {
      this.$message({
        message: 'Yup, your product added',
        type: 'success'
      })
    },
    warning (err) {
      this.$message({
        message: `Oops, ${err}`,
        type: 'warning'
      })
    },
    cancel () { this.$router.push({ path: '/' }) }
  }
}
</script>

<style>
</style>
