<template>
  <div class="home">
    <div v-if="this.admin">
      <AdDashboard></AdDashboard>
    </div>
    <div v-else>
    <Nav v-if="!setIsLogin()"></Nav>
    <Carousel></Carousel>
    <Form></Form>
    <Cards></Cards>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import Carousel from '@/components/Carousel.vue'
import Cards from '@/components/Cards.vue'
import Nav from '@/components/Navigation.vue'
// import AdminDashboard from '@/components/AdminDashboard.vue'
import AdDashboard from '@/components/AdDashboard.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    Cards,
    Nav,
    // AdminDashboard,
    AdDashboard
  },
  computed: {
    admin () {
      return this.$store.state.isAdmin
    }
  },
  methods: {
    setIsLogin () {
      if (localStorage.access_token) {
        axios({
          method: 'GET',
          url: 'https://mighty-hamlet-29943.herokuapp.com/indetify',
          headers: {
            access_token: localStorage.access_token
          }
        })
          .then(({ data }) => {
            this.$store.commit('SET_IS_ADMIN', data.isAdmin)
            this.$store.commit('SET_IS_LOGIN', true)
          })
        return true
      } else {
        this.$store.commit('SET_IS_LOGIN', false)
        return false
      }
    }
  },
  created () {
    this.setIsLogin()
  }
}
</script>

<style scoped>
.el-menu-demo {
  margin: 0;
}
</style>
