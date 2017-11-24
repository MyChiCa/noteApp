// pages/team/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddenmodalput:true,
    modelText:"杭州映兔科技",
    title:"杭州映兔科技"
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
  onShareAppMessage: function (options) {
      return {
        title:"杭州映兔科技邀请",
        path:"/pages/apply/apply"
      }
  },
  //点击编辑团队
  editBtnClick:function(){
    this.setData({
      hiddenmodalput: !this.data.hiddenmodalput
    })  
  },
  //绑定输入框的值
  bindModelText(e){
    this.setData({
      modelText: e.detail.value
    })
  },
  //弹出框取消
  cancel:function(){
    console.log('cancel');
    this.setData({
      hiddenmodalput: !this.data.hiddenmodalput
    })  
  },
  //弹出框确认
  confirm:function(){
    this.setData({
      title: this.data.modelText,
      hiddenmodalput: !this.data.hiddenmodalput
    })  
  }
})