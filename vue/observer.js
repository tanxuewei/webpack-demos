// 监听数据变化
import Dep from './dep'
export default class Observer {
  constructor (value) {
    this.value = value
    this.walk(value)
  }
  walk (value) {
    Object.keys(value).forEach(key => this.convert(key, value[key]))
  }
  convert (key, val) {
    // 添加set和get方法
    defineReactive(this.value, key, val)
  }
}
export function observe (value) {
  // 当值不存在，或者不是复杂数据结构的时候，不需要监听
  if (!value || typeof value !== 'object') {
    return
  }
  return new Observer(value)
}

export function defineReactive (obj, key, val) {
  var dep = new Dep()
  // 给传入的data内部对象递归的调用observe，来实现深度监听
  // Vue.js 里需要显示的声明 deep 属性为true
  var childOb = observe(val)

  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: () => {
      console.log('get value ' + key)
      // Watcher实例在实例化过程中，会为Dep添加一个target属性，在读取data中的某个属性，会触发当前get方法。
      // 如果Dep类存在target属性，将订阅者添加到dep实例的subs数组中
      // 此处的问题是：并不是每次Dep.target有值时都需要添加到订阅者管理员中去管理，需要对订阅者去重，不影响整体思路，不去管它
      if(Dep.target){
          dep.addSub(Dep.target)
      }
      return val
    },
    set: (newVal) => {
      console.log('set value ' + key)
      if (val === newVal) return
      val = newVal
      // 对新值进行监听
      childOb = observe(newVal)
      // 通知所有订阅者，数值被改变了
      dep.notify()
    }
  })
}