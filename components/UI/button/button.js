// components/UI/button/button.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses:['t-class','t-class-icon','t-class-loading'],
  properties: {
    theme:{
      type:String,
      value:'default',
    },
    text:{
      type:String,
      value:'',
    },
    size:{
      type:String,
      value:'medium'
    },
    icon:{
      type:String,
      value:''
    },
    iconColor:{
      type:String,
      value:'#fff'
    },
    ghost:{
      type:Boolean,
      value:false
    },
    block:{
      type:Boolean,
      value:false
    },
    disable:{
      type:Boolean,
      value:false
    },
    round:{
      type:Boolean,
      value:false
    },
    circle:{
      type:Boolean,
      value:false
    },
    openType:{
      type:String,
      value:''
    },
    appParameter:{
      type:String,
      value:''
    }


  },

  /**
   * 组件的初始数据
   */
  data: {
    buttonList:[
      { 
        type:'default',
        title:'default',
        round:true,
      },
      { 
        type:'primary',
        title:'primary',
        round:true,
        // plain:true,
      },
      { 
        type:'success',
        title:'success',
        round:false,
        // plain:true,
      },
      { 
        type:'info',
        title:'info',
        round:false,
        plain:true,
      },
      { 
        type:'warning',
        title:'warning',
        round:false,
        plain:true,
      },
      { 
        type:'danger',
        title:'danger',
        round:false,
        plain:true,
      },
    ]
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
