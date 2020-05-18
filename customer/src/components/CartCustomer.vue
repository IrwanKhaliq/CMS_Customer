<template>
<div>
  <Header :content="'Logout'"></Header><br>
  <h1>
      Cart
  </h1>
  <el-table
    :data="getAllData"
    style="width: 100%">
    <el-table-column
    prop="id"
    label="#"
    width="70">
    </el-table-column>
    <el-table-column
    prop="Product.name"
    label="Name"
    width="150">
    </el-table-column>
    <el-table-column
    prop="Product.category"
    label="Category"
    width="150">
    </el-table-column>
    <el-table-column
    prop="Product.price"
    label="Price @"
    width="150">
    </el-table-column>
    <el-table-column
    prop="quantity"
    label="Quantity"
    width="150">
    </el-table-column>
    <el-table-column
    prop="createdAt"
    label="Arrived"
    width="200">
    </el-table-column>
        <el-table-column
      fixed="right"
      label="Action"
      width="300">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="decrement(scope.$index, getAllData)"
          type="text"
          size="small">
          Buy
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
import axios from 'axios'
import Header from './Header'

export default {
  name: 'TableCustomer',
  components: { Header },
  methods: {
    decrement (i, data) {
      axios({
        method: 'DELETE',
        url: `https://mighty-hamlet-29943.herokuapp.com/carts/${data[i].id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(del => {
          this.$store.commit('SET_CARTS', this.getAllData)
          this.getAll()
          this.success()
        })
        .catch(err => {
          console.log(err)
          this.warning('can\'t approve transaction')
        })
    },
    getAll () {
      axios({
        method: 'GET',
        url: 'https://mighty-hamlet-29943.herokuapp.com/carts',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          this.$store.commit('SET_CARTS', data.carts)
        })
        .catch(err => { console.log(err) })
    },
    warning (msg) {
      this.$message({
        showClose: true,
        message: `Oops, ${msg}`,
        type: 'warning'
      })
    },
    success () {
      this.$message({
        showClose: true,
        message: 'Yeay, Product Paid!',
        type: 'success'
      })
    }
  },
  computed: {
    getAllData () { return this.$store.state.carts },
    totalPrice (product, items) { return product * items }
  },
  created () {
    if (localStorage.access_token) {
      this.getAll()
    } else {
      this.warning('Please login first')
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style scoped>
.actionbutton {
  display: flex;
  justify-content: space-evenly;
}
</style>
