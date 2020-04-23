//index.js
//获取应用实例
const app = getApp()
import request from '../request/request'
Page({
  data: {
    swiperArr: [], // swiper
    navArr: [], // 导航
    floorData: [], // 首页数据
  },
  onLoad: function () {
    wx.showLoading({
      title: '加载中',
      mask: true
    })

    Promise.all([request('/home/swiperdata'), request('/home/catitems'), request('/home/floordata')]).then((data) => {
      this.setData({
        swiperArr: data[0],
        navArr: data[1],
        floorData: data[2]
      })
      setTimeout(function () {
        wx.hideLoading()
      }, 1000)
    })
  },
  onShow: function () {
    
  }
})
