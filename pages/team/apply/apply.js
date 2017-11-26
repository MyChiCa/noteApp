// pages/team/apply/apply.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:[{
      id:'1',
      name:'朱顺胜',
      phone:'13866669999',
      position:'前端开发',
      date:'2017-11-11'
    },{
        id: '2',
        name: '谢志翔',
        phone: '13866669990',
        position: '后端开发',
        date: '2017-11-11'
    },{
        id: '3',
        name: '韩科炜',
        phone: '13866669991',
        position: '前端开发',
        date: '2017-11-11'
    }]
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
  itemClick(e) {
    wx.showActionSheet({
      itemList: ["通过", "拒绝"],
      success: function (res) {
        if (res.tapIndex !== undefined) {
          console.log(res.tapIndex);
        }

      },
      fail: function (res) {
        console.log(res.errMsg);
      }
    })
  }
})