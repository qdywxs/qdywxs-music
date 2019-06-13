class Swiper {
  constructor(node) {
    if(!node) throw new Error("需要传递需要绑定的 DOM 元素")  /*💡如果用户没有传递 node，
                                                          则作一个“提示”。*/
    /*💡判断 node 的类型。*/
    let root = typeof node === "string" ? document.querySelector(node) : node
    
    
    let eventHub = {"swipLeft": [], "swipRight": []}
    
    let initX
    let newX
    let clock
    root.addEventListener("touchstart", function(e) {
      initX = e.changedTouches[0].pageX
    })
    
    root.addEventListener("touchmove", function(e) {
      if(clock) {
        clearInterval(clock)
      }
      clock = setTimeout(()=>{
        newX = e.changedTouches[0].pageX
        if(newX - initX > 10) {
          eventHub["swipRight"].forEach(fn=>fn.bind(root)()) 
        } else if(initX - newX > 10){
          eventHub["swipLeft"].forEach(fn=>fn.bind(root)())
        }  
      }, 100)
    })
    
    this.on = function(type, fn) {  /*💡this 代表我们创建的这个对象。
                                    即，这个对象上会有 on 和 off 方法。*/
      if(eventHub[type]) {
        eventHub[type].push(fn)
      }
    }
    
    this.off = function(type, fn) {  /*💡off 是指在上边“函数体”里找到要解绑的“函数体”。
                                     然后从数组中将其“删除”。*/
      let index = eventHub[type].indexOf(fn)
      if(index !== -1) {
        eventHub[type].splice(index, 1)
      }
    }
    
  }
}


//🏆然后我们导出：
export default Swiper

/*🏆当其他文件引用时：
import Swiper from "xxx.js"
*/