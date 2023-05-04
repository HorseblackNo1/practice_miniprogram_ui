// components/UI/fab/fab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    buttonProps: {
      type: null,
      value: {}
    },
    icon: {
      type: String,
      value: ''
    },
    text: {
      type: String,
      value: ''
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    getphonenumber(e){
      // console.log("bindgetphonenumber=>",e)
      this.triggerEvent('getphonenumber',{e})
    },

    getuserinfo(e){
      //用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与wx.getUserInfo返回的一致，open-type="getUserInfo"时有效
      let { detail } = e
      // console.log("getuserinfo=>",detail)
      this.triggerEvent('getuserinfo',{detail})
    },


    launchAppError(e){
      // console.log("launchAppError=>",e)
      let {detail} = e
      this.triggerEvent('launchAppError',{detail})
    },
    chooseavatar(e){
      // console.log("chooseavatar=>",e)
      this.triggerEvent('chooseavatar',{e})
    }
  }
})