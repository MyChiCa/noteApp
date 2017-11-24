const util = require('../../utils/util.js')
const date = new Date();
const start = util.formatDate(date);
Page({
  data: {
    teamId:'',//团队Id
    name:'', //真是姓名
    position:'', //职位
    phone:'', //手机号
    date: start  //入职日期
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.teamId){
        this.setData({
          teamId: options.teamId
        });
    }else{
      //获取不到teamId 可以跳转回首页
    }
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
  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  formSubmit(e){
    var apply = e.detail.value;
     //验证表单
    if (apply.name == "" || apply.position == ""){
      wx.showToast({
        title: '请完善表单'
      })
    } else if (apply.phone.length != 11){
      wx.showToast({
        title: '11位手机'
      })
    }else{
        //表单验证通过
        apply.teamId = this.data.teamId;
        apply.userId = "11111";//用户id
        console.log(apply);
    }
  }
})