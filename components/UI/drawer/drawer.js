// components/UI/drawer/drawer.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    placement: {
      type: String,
      value: 'right'
    },
    baseSidebar: {
      type: Array,
      value: []
    },
    zIndex:{
      type:Number,
      value:1222,
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
    stop() {},
    closeDrawer() {
      this.triggerEvent("closeDrawer")
    }
  },

})