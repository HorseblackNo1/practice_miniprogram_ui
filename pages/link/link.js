// pages/link/link.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navigatorProps:{
      target:'', //self,miniProgram
      url:'/',
      openType:'navigate', //navigate,redirect,relunch, navigateBack,exit(target="miniProgram 有效")
      deleta:1,
      appID:'',
      path:'',
      extraData:{},
      version:'', //develop,trial,release
      shortLink:'',
      hoverClass:'',
      hoverStopPropagation:false,// boolean
      hoverStartTime:50,
      hoverStayTime:600,
    }
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
  onSuccess(e){
    console.log("onSuccess=>",e)
  },
  onFail(e){
    console.log("onFail=>",e)
  },
  onComplete(e){
    console.log("onComplete=>",e)
  }
})