// components/UI/divider/divider.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses:['t-class','t-class-line','t-class-content'],
  properties: {
    align:{
      type:String,
      value:'center', // left,right,center
    },
    text:{
      type:String,
      text:''
    },
    dashed:{
      type:Boolean,
      value:false,
    },
    layout:{
      type:String,
      value:'horizontal', //horizontal,vertical
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

  }
})
