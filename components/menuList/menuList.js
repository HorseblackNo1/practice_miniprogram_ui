// components/menuList/menuList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:''
    },
    icon:{
      type:String,
      value:'',
    },
    subList:{
      type:null,
      value:[]
    }
   
  },

  /**
   * 组件的初始数据
   */
  data: {
    showPlay:false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showPlaySubList(){
        this.setData({
          showPlay:!this.data.showPlay
        })
    },
    tapChild(e){
      let { name } = e.currentTarget.dataset;
      this.triggerEvent('click',{ name })
    }

  }
})
