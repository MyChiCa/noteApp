const util = require('../../utils/util.js')
const date = new Date();
const api = require("../../utils/api")
const moment = require("../../lib/moment.min")
const start = util.formatDate(date);
Page({
  data: {
     theme:"",//主题
     reason:"", //理由
     date:start,
     array:['半天','一天','两天','三天','四天','五天','六天','七天'],
     objectArray:[{id:0,value:0.5}, {id: 1,value: 1}, {id: 2,
         value: 2}, {id: 3,value: 3}, {id: 4,value: 4}, {id: 5,value: 5}, {id: 6,
         value:6 }, {id: 7, value: 7}],
     days:1
  },
  bindReasonInput(e){
    this.setData({
      reason:e.detail.value
    });
  },
  bindThemeInput(e){
    this.setData({
      theme:e.detail.value
    });
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
  },
  // 提交按钮
  formSubmit(e){
    var apply = e.detail.value;
    if (apply.theme == ""){
      wx.showToast({
        title: '请完善表单'
      })
    } else if (apply.reason == ""){
      wx.showToast({
        title: '请完善表单'
      })
    }else{
      api.createVacate({
        fromUserId:"12345",
        toUserId:"12345455",
        title:apply.theme,
        content:apply.reason,
        startTime:moment(this.data.date).format("X") * 1,
        endTime:moment(this.data.date).format("X") * 1 + this.data.days * 3600 * 24,
        teamId:1,
      })
    }
    // api.
  }
})