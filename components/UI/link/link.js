// components/UI/link/link.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses:['t-class', 't-class-hover', 't-class-prefix-icon', 't-class-content', 't-class-suffix-icon'],
  properties: {
    text:{
      type:String,
      value:'',
    },
    navigatorProps:{
      type:Object,
      value:{}
    },
    prefixIcon:{
      type:String,
      value:'',
    },
    suffixIcon:{
      type:String,
      value:'',
    },
    size:{
      type:String,
      value:'dedium', // small,dedium,larg
    },
    disabled:{
      type:Boolean,
      value:false, 
    },
    hover:{
      type:Boolean,
      value:false,
    },
    theme:{
      type:String,
      value:'default', // default,primary,danger,warning,success
    },
    underline:{
      type:Boolean,
      value:false, 
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    change:{
      default:'rgba(0,0,0,0.9)',
      primary:'#0052d9',
      danger:'#d54941',
      warning:'#e37318',
      success:'#2ba471',
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onSuccess(e){
      // console.log("onSuccess=>",e)
      this.triggerEvent("onSuccess",{e})
    },
    onFail(e){
      // console.log("onFail=>",e)
      this.triggerEvent("onFail",{e})
    },
    onComplete(e){
      // console.log("onComplete=>",e)
      this.triggerEvent("onComplete",{e})
    }
  }
})
