<template>
<div>
  <el-input-number v-model="num" :min="1" :max="10"></el-input-number><br><br>
  <el-button type="primary submit" @click="add">Add To Store</el-button>
  <el-button type="danger" icon="el-icon-delete" @click="deleteProduct" circle></el-button><br><br>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TotalItem',
  data () {
    return {
      num: 1
    }
  },
  computed: {
    detailItem () { return this.$store.state.detailItem }
  },
  methods: {
    add () {
      axios({
        method: 'PUT',
        url: `https://mighty-hamlet-29943.herokuapp.com/products/${this.detailItem.id}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          stock: this.detailItem.stock + this.num
        }
      })
        .then(updateProduct => {
          this.success(this.num)
          this.num = 1
        })
        .catch(err => {
          this.warning(err.message)
        })
    },
    deleteProduct () {
      axios({
        method: 'DELETE',
        url: `https://mighty-hamlet-29943.herokuapp.com/products/${this.detailItem.id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(deleted => {
          this.$router.push({ path: '/' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    warning (err) {
      this.$message({
        showClose: true,
        message: `Oops, ${err}`,
        type: 'warning'
      })
    },
    success (num) {
      this.$message({
        showClose: true,
        message: `Yeay, ${num} stock added`,
        type: 'success'
      })
    }
  }
}
</script>
