// pages/drawer/drawer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showDrawer:false,
    list:null,
    baseSidebar:[
      {
        title: '菜单一',
      },
      {
        title: '菜单二',
      },
      {
        title: '菜单三',
      },
      {
        title: '菜单四',
      },
      {
        title: '菜单五',
      },
      {
        title: '菜单六',
      },
      {
        title: '菜单七',
      },
      {
        title: '菜单八',
      },
      
    ],
    baseSidebarIcon:[
      {
        title: '菜单一',
        icon:'fenlei'
      },
      {
        title: '菜单二',
        icon:'fenlei'
      },
      {
        title: '菜单三',
        icon:'fenlei'
      },
      {
        title: '菜单四',
        icon:'fenlei'
      },
      {
        title: '菜单五',
        icon:'fenlei'
      },
      {
        title: '菜单六',
        icon:'fenlei'
      },
      {
        title: '菜单七',
        icon:'fenlei'
      },
      {
        title: '菜单八',
        icon:'fenlei'
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
  btnAction(){
    console.log("btnAction=>")
  },
  closeDrawer(){
    this.setData({
      showDrawer:false
    })
  },
  getDrawer(e){
    let { baseSidebar,baseSidebarIcon  } = this.data;
    let { icon } = e.currentTarget.dataset;
    console.log("icon=>",icon)
    if(icon){
      this.setData({
        list:baseSidebarIcon
      })
    }else{
      this.setData({
        list:baseSidebar
      })
    }
    this.setData({
      showDrawer:true
    })

  }
})