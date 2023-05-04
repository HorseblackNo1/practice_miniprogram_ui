// components/UI/back-top/back-top.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses:['t-class'],
  properties: {
    theme:{
      type:String,
      value:'half-round' // round、half-round
    }
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
    goBackTop(){
      this.triggerEvent('goBackTop')
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300
      })
    }
  }
})
