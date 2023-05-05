// components/UI/switch/switch.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    size:{
      type:String,
      value:'medium'
    },
    disable:{
      type:Boolean,
      value:true,
    },
    switchCheck:{
      type:Boolean,
      value:true,
    },
    label:{
      type:Array,
      value:[], //'开','关'
    },
    icon:{
      type:Array,
      value:[], //'right1','close'
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
    changeSwitch(e){
      // console.log("changeSwitch=>",e)
      let { switchcheck } = e.currentTarget.dataset;
      console.log("changeSwitch=>",switchcheck)
      this.setData({
        switchCheck:!switchcheck
      })
    }
  }
})
