import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLogin: false,
    isAdmin: false,
    errorStatus: false,
    errMessage: '',
    detailItem: '',
    categorySearch: '',
    categoryData: [],
    allProduct: [],
    carts: []
  },
  mutations: {
    SET_IS_LOGIN (state, status) { state.isLogin = status },
    SET_IS_ADMIN (state, status) { state.isAdmin = status },
    SET_DETAIL_ITEM (state, payload) { state.detailItem = payload },
    SET_ERROR_STATUS (state, payload) { state.errorStatus = payload },
    SET_ERROR_MSG (state, payload) { state.errMessage = payload },
    SET_PRODUCT_AS_CATEGORY (state, payload) { state.categorySearch = payload },
    SET_CATEGORY_DATA (state, payload) { state.categoryData = payload },
    SET_ALL_PRODUCT (state, payload) { state.allProduct = payload },
    SET_CARTS (state, payload) { state.carts = payload }
  }
})

export default store
