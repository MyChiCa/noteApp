const util = require('../../utils/util.js')
const date = new Date();
const start = util.formatDate(date);
Page({

  /**
   * 页面的初始数据
   */
  data: {
     start:start,
     date:start,
     array:['半天','一天','两天','三天','四天','五天','六天','七天'],
     objectArray:[{id:0,value:0.5}, {id: 1,value: 1}, {id: 2,
         value: 2}, {id: 3,value: 3}, {id: 4,value: 4}, {id: 5,value: 5}, {id: 6,
         value:6 }, {id: 7, value: 7}],
     days:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  bindDateChange(e){
    this.setData({
      date: e.detail.value
    })
  },
  bindDaysChange(e){
    this.setData({
      days: e.detail.value
    })
  }
})