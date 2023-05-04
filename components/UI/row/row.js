// components/UI/row/row.js
Component({
  /**
   * 组件的属性列表
   */
  options:{
    multipleSlots: true
  },
  properties: {
    gutter:{
      type:Number || String,
      value:0
    }
  },
  relations: {
    '../col/col': {
      type: 'child',
      linked: function (target) {
        // console.log('child=>target: ', target,this.data.gutter)
        target.setData({
          gutter:this.data.gutter
        })
      },
    }
  },
  ready(){
    var nodes = this.getRelationNodes('../col/col')
    console.log("101010011010nodes=>",nodes)
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
