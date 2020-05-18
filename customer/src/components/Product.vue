<template>
  <div class="demo-image__lazy">
    <el-image :src="product.image_url" lazy></el-image>
    <h1>{{ product.name }}</h1>
    <small>Add Item</small><br>
    <TotalItem></TotalItem>
  </div>
</template>

<script>
import TotalItem from './TotalItem.vue'

export default {
  name: 'Product',
  components: {
    TotalItem
  },
  computed: {
    productId () { return this.$route.params.id },
    product () { return this.$store.state.detailItem }
  }
}
</script>
