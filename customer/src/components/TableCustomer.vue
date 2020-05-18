<template>
<div>
  <Header :content="'Logout'"></Header><br>
  <h1>
    {{ (categorySearch).toUpperCase() }}
  </h1>
  <el-button type="info" icon="el-icon-message" @click="cart" circle></el-button>
  <el-table
    :data="getAllData"
    style="width: 100%">
    <el-table-column
    prop="id"
    label="#"
    width="180">
    </el-table-column>
    <el-table-column
    prop="name"
    label="Name"
    width="300">
    </el-table-column>
    <el-table-column
    prop="price"
    label="Price"
    width="150">
    </el-table-column>
    <el-table-column
    prop="stock"
    label="Stock"
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
          Add To Cart
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
    cart () {
      axios({
        method: 'GET',
        url: 'https://mighty-hamlet-29943.herokuapp.com/carts',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          this.$store.commit('SET_CARTS', data.carts)
          this.$router.push({ path: '/carts' })
        })
    },
    decrement (i, data) {
      if (localStorage.access_token) {
        if (data[i].stock > 0) {
          axios({
            method: 'PUT',
            url: `https://mighty-hamlet-29943.herokuapp.com/products/${data[i].id}`,
            data: {
              stock: data[i].stock -= 1
            }
          })
            .then(update => {
              this.$store.commit('SET_CATEGORY_DATA', this.getAllData)
              axios({
                method: 'POST',
                url: 'https://mighty-hamlet-29943.herokuapp.com/carts',
                data: {
                  ProductId: data[i].id,
                  quantity: 1
                },
                headers: {
                  access_token: localStorage.access_token
                }
              })
                .then(({ data }) => {
                  this.success()
                })
                .catch(err => { this.warning(err.message) })
            })
        } else if (data[i].stock === 0) {
          this.warning('Product sold out')
        }
      } else {
        this.warning('please login first')
      }
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
        message: 'Yeay, Product added',
        type: 'success'
      })
    }
  },
  computed: {
    categorySearch () { return (this.$route.params.category) },
    getAllData () { return this.$store.state.categoryData }
  },
  created () {
    console.log(this.categorySearch)
    if (localStorage.access_token) {
      axios({
        method: 'GET',
        url: `https://mighty-hamlet-29943.herokuapp.com/products/category/${this.categorySearch}`
      })
        .then(({ data }) => {
          this.$store.commit('SET_CATEGORY_DATA', data.products)
        })
        .catch(err => { console.log(err) })
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
