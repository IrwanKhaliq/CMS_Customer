<template>
<div>
    <el-carousel indicator-position="outside">
    <el-carousel-item v-for="(item, o) in dashboard" :key="o" style="height: 60vw">
      <img :src="item.img" alt="">
    </el-carousel-item>
    </el-carousel><br>
</div>
</template>

<script>
export default {
  name: 'Carousel',
  data () {
    return {
      dashboard: [
        { img: 'https://static.zara.net/photos//mkt/spots/ss20-north-tennis-collection-kids/subhome-xmedia-new-in//landscape_0.jpg?ts=1589529721098&imwidth=1362' },
        { img: 'https://static.zara.net/photos//mkt/spots/ss20-north-shoes-bags-woman/subhome-xmedia-20//landscape_0.jpg?ts=1589566559772&imwidth=1362' },
        { img: 'https://static.zara.net/photos//mkt/spots/ss20-north-collection-woman/subhome-xmedia-20-01//landscape_0.jpg?ts=1589566463249&imwidth=1362' }
      ]
    }
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 500px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
