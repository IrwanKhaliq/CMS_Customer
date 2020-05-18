<template>
<div>
<h1>Categories</h1>
  <el-row>
  <el-col :span="3" v-for="(category, index) in categories" :key="index" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }" class="card">
      <div  @click="detail(index)">
       <img :src="category.img" class="image">
      </div>
    </el-card>
    <h3>{{ category.name}}</h3>
  </el-col>
</el-row>
</div>
</template>

<script>
export default {
  name: 'Cards',
  data () {
    return {
      currentDate: 'Pegasus 36 Black',
      num: 1,
      // categories: ['shoes', 'upper', 'belt', 'shock', 'sandals'],
      categories: [
        { name: 'shoes', img: 'https://static.zara.net/photos//mkt/spots/ss20-north-shoes-bags-woman/subhome-xmedia-20//landscape_0.jpg?ts=1589566559772&imwidth=1362' },
        { name: 'upper', img: 'https://static.zara.net/photos//mkt/spots/ss20-north-collection-woman/subhome-xmedia-20-01//landscape_0.jpg?ts=1589566463249&imwidth=1362' },
        { name: 'belt', img: 'https://ecs7.tokopedia.net/img/cache/700/attachment/2019/8/16/156592786142565/156592786142565_d977e51a-93d6-4345-9937-7b4650fef946.png' },
        { name: 'socks', img: 'https://static.zara.net/photos///2020/V/M/3/p/0000/000/142/2/w/1012/0000000142_9_1_1.jpg?ts=1578505079728' },
        { name: 'sandals', img: 'https://images-na.ssl-images-amazon.com/images/I/71eoW0xtZIL._AC_UX466_.jpg' }
      ]
    }
  },
  methods: {
    detail (i) {
      this.$store.commit('SET_PRODUCT_AS_CATEGORY', this.categories[i].name)
      this.$router.push({ path: `/products/category/${this.categories[i].name}` })
    }
  }
}
</script>

<style scoped>
.time {
font-size: 13px;
color: #999;
}

.bottom {
margin-top: 13px;
line-height: 12px;
}
.button {
padding: 0;
float: right;
}
.image {
width: 100%;
display: block;
}
.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both
}
</style>
