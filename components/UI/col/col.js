// components/col/col.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses:['t-class'],
  properties: {
    offset:{
      type:String || Number,
      value:0,
    },
    span:{
      type:String || Number,
      value:0,
    }
  },
  relations: {
    '../row/row': {
      type: 'parent',
      linked: function (target) {
        // console.log('parent=>target: ', target)
      },
      linkChanged: function (target) {
      },
      unlinked: function (target) {
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    gutter:0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
  }
})
