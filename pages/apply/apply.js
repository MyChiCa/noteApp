const util = require('../../utils/util.js')
const date = new Date();
const start = util.formatDate(date);
const api = require("../../utils/api")
Page({
  data: {
    items: [
      {name: 1, value: '男',checked: 'true'},
      {name: 0, value: '女'}
    ],
    gender:1,
    userInfo:{},
    avatarUrl:"",
    teamId:'',//团队Id
    name:'', //真是姓名
    position:'', //职位
    phone:'', //手机号
    // date: start  //入职日期
  },
  //绑定name值
  bindNameInput: function(e){
    this.setData({
      name: e.detail.value
    })
  },
  //绑定职位
  bindPositionInput:function(e) {
    this.setData({
      position: e.detail.value
    })
  },
  //绑定电话
  bindPhoneInput : function(e){
    this.setData({
      phone: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getUserInfo({
      success: res => {
        console.log(res.userInfo);
        this.setData({
          userInfo:res.userInfo
        });
        // this.setData({
        //   gender:res.userInfo.gender,
        //   name:res.userInfo.nickName,
        //   avatarUrl:res.userInfo.avatarUrl
        // })
      }
    })
  },
  //选择性别的按钮
  radioChange(e){
    this.setData({
      gender:e.detail.value
    });
  },
  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  // 提交按钮
  formSubmit(e){
    var apply = e.detail.value;
    //  //验证表单
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
        api.joinTeam({
          teamId:1,
          userId:"12345",
          userName:apply.name,
          gender:this.data.gender * 1,//1 男，0 女
          avatar:this.data.userInfo.avatarUrl,
          job:apply.position,
          telephone:apply.phone,
        }).then(e=>{
          if(e.data.errorCode == 0){
            wx.showToast({
              title: '申请成功,等待管理员审核。'
            })
          }else{
            wx.showToast({
              title: '申请失败,联系程序开发者。---- 翔仔'
            })
          }
          
          console.log(e);
        });
        // apply.teamId = this.data.teamId;
        // apply.userId = "11111";//用户id
        // console.log(apply);
    }
  }
})