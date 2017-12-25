let api = require("../../../utils/api");
let moment = require("../../../lib/moment.min");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teamName:""
  },
  bindKeyInput: function(e) {
    this.setData({
      teamName: e.detail.value
    })
  },
  formSubmit(e){
    if(this.data.teamName == ""){
      wx.showToast({
        title: '请输入团队名称'
      })
    }else{
      console.log(moment)
      api.createTeam({
        "userId":"12345455",
        "timestamp":moment().format("X")*1,
          "data":{
            "userId": "12345455",
            "teamName": this.data.teamName,
            "initialDay":7
          }
      }).then(e=>{
        if(e.data.errorCode == 0){
          wx.showToast({
            title: '成功',
            icon: 'succes',
            duration: 1000,
            mask: true
          })
          wx.redirectTo({
            url:"/pages/team/index/index"
          });
        }else{
          wx.showToast({
            title: '失败',
            // icon: 'succes',
            duration: 1000,
            mask: true
          })
        }
      })
    }
  }
})