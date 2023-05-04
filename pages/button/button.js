// pages/button/button.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btnBasicList:[
      {
        id:0,
        text:'默认按钮',
        theme:'default',
      },
      {
        id:1,
        text:'primary',
        theme:'primary',
      },
      {
        id:2,
        text:'light',
        theme:'light',
      },
      {
        id:3,
        text:'danger',
        theme:'danger',
      },
      {
        id:4,
        text:'outline',
        theme:'outline',
      },
      {
        id:4,
        text:'text',
        theme:'text',
      },
    ],
    btnDisableList:[
      {
        id:0,
        text:'默认按钮',
        theme:'default',
        disable:true,
      },
      {
        id:1,
        text:'primary',
        theme:'primary',
        disable:true,
      },
      {
        id:2,
        text:'light',
        theme:'light',
        disable:true,
      },
      {
        id:3,
        text:'danger',
        theme:'danger',
        disable:true,
      },
      {
        id:4,
        text:'outline',
        theme:'outline',
        disable:true,
      },
      {
        id:4,
        text:'text',
        theme:'text',
        disable:true,
      },
    ],
    btnIconList:[
      {
        id:0,
        text:'primary',
        theme:'primary',
        icon:'search',
        iconColor:'#fff',
        size:'medium'
      },
      {
        id:1,
        text:'primary',
        theme:'primary',
        icon:'phone',
        iconColor:'#fff',
        size:'large'
      },
      {
        id:2,
        text:'',
        theme:'primary',
        icon:'like',
        iconColor:'#fff',
        size:'large'

      },
      {
        id:3,
        text:'light',
        theme:'light',
        icon:'like',
        iconColor:'#0052d9',
        size:'large'
      },
      
    ],
    btnGhostList:[
      {
        id:0,
        text:'default',
        theme:'default',
        ghost:true,
        size:'medium'
      },
      {
        id:1,
        text:'primary',
        theme:'primary',
        ghost:true,
        size:'medium'
      },
      {
        id:2,
        text:'danger',
        theme:'danger',
        ghost:true,
        size:'medium'
      },
    ],
    btnblockList:[
      {
        id:0,
        text:'default',
        theme:'default',
        block:true,
        size:'medium'
      },
      {
        id:1,
        text:'primary',
        theme:'primary',
        block:true,
        size:'medium'
      },
      {
        id:2,
        text:'danger',
        theme:'danger',
        block:true,
        size:'medium'
      },
    ],
    btnGroupList:[
      {
        id:0,
        text:'default',
        theme:'default',
        block:true,
        size:'medium'
      },
      {
        id:1,
        text:'primary',
        theme:'primary',
        block:true,
        size:'medium'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  getphonenumber(data){
    console.log("getphonenumber=>",data)
  },
  getuserinfo(data){
    console.log("getuserinfo=>",data)
  },
  launchAppError(data){
    console.log("launchAppError=>",data)
  },
  chooseavatar(data){
    console.log("chooseavatar=>",data)
  }
})