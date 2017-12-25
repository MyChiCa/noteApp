// pages/team/leave/leave.js
const api = require("../../../utils/api")
const moment = require("../../../lib/moment.min")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    api.ManagementCenter().then(e => {
      console.log(e);
      if (e.data.errorCode == 0) {
        let array = e.data.data;
        array.map(item => {
          item.start_format = moment(item.startTime * 1000).format("YYYY-MM-DD");
          item.end_format = moment(item.endTime * 1000).format("YYYY-MM-DD");
          return item;
        })
        console.log(array);
        this.setData({
          array: array
        })
      }
    })
  },
  itemClick(e) {
    wx.showActionSheet({
      itemList: ["通过", "拒绝"],
      success: function (res) {
        // debugger;
        if (res.tapIndex !== undefined) {
          api.handleapply({
            id: 1,
            status: 1
          })
        }
      },
      fail: function (res) {
        if (res.tapIndex !== undefined) {
          api.handleapply({
            id: this.data.array[res.tapIndex].id,
            status: 2
          })
        }
      }
    })
  }
})