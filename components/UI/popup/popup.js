// components/UI/popup/popup.js
Component({
  /**
   * 组件的属性列表
   */
  
  properties: {
    placement:{
      type:String,
      value:'bottom'
    },
    zIndex:{
      type:Number,
      value:1200,
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
    closePopup(e){
      this.triggerEvent('closePopup',{e})
    },
    stop(){
      console.log("stop")
    }
  }
})
