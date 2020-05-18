<template>
<div>
  <Header :content="'Administration'"></Header>
    <el-button type="primary" @click="add" round>Add Product</el-button><br><br>
  <el-table
    :data="getAllData"
    style="width: 100%">
    <el-table-column
    prop="id"
    label="#"
    width="70">
    </el-table-column>
    <el-table-column
    prop="name"
    label="Name"
    width="300">
    </el-table-column>
    <el-table-column
    prop="price"
    label="Price"
    width="100">
    </el-table-column>
    <el-table-column
    prop="stock"
    label="Stock"
    width="100">
    </el-table-column>
    <el-table-column
    prop="createdAt"
    label="Arrived"
    width="200">
    </el-table-column>
        <el-table-column
      fixed="right"
      label="Action"
      width="180">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="increment(scope.$index, getAllData)"
          type="text"
          size="small">
          Add Stock
        </el-button>
        <el-button
          @click.native.prevent="deleteProduct(scope.$index, getAllData)"
          type="text"
          size="small">
          Delete
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
  components: {
    Header
  },
  methods: {
    add () { this.$router.push({ path: '/add-products' }) },
    getAll () {
      axios({
        method: 'GET',
        url: 'https://mighty-hamlet-29943.herokuapp.com/products'
      })
        .then(({ data }) => {
          this.$store.commit('SET_ALL_PRODUCT', data.products)
        })
        .catch(err => { console.log(err) })
    },
    increment (i, data) {
      axios({
        method: 'PUT',
        url: `https://mighty-hamlet-29943.herokuapp.com/products/${data[i].id}`,
        data: {
          stock: data[i].stock += 1
        }
      })
        .then(update => {
          this.success('stock added')
        })
        .catch(err => console.log(err))
    },
    deleteProduct (i, data) {
      axios({
        method: 'DELETE',
        url: `https://mighty-hamlet-29943.herokuapp.com/products/${data[i].id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(update => {
          this.success('Product deleted')
          this.getAll()
        })
    },
    warning () {
      this.$message({
        showClose: true,
        message: 'Oops, Access Denied',
        type: 'warning'
      })
    },
    success (msg) {
      this.$message({
        showClose: true,
        message: `Yeay, ${msg}`,
        type: 'success'
      })
    }
  },
  computed: {
    getAllData () { return this.$store.state.allProduct }
  },
  created () { this.getAll() }
}
</script>

<style scoped>
.actionbutton {
  display: flex;
  justify-content: space-evenly;
}

</style>
