import Observer, { observe } from './observer'
import Watcher from './watcher'  // 观察者实例
export default class Vue {
  constructor(options = {}){
    this.$options = options
    let data = this._data = this.$options.data
    // 遍历data，将data最外层属性代理到Vue实例上
    // this.key 就能访问到data对象中的数据
    Object.keys(data).forEach(key => this._proxy(key))
    // 监听data
    observe(data)
    // 获取dom节点
    this.$el = document.querySelector(options.el)
    // 渲染DOM
    this._randerDom()
  }
  _randerDom (val) {
    console.log('更新了dom', this._data)
    // 解析字符串模板
    if (this.$el && this.$options && this.$options.template) {
      this.$el.innerHTML = this.$options.template(this._data)
    }
  }
  // 对外暴漏调用订阅者的接口，内部主要在指令中使用订阅者
  $watch (expOrFn, cb) {
    // 当监听的value发生变化时，触发cb()方法
    new Watcher(this, expOrFn, cb)
  }
  _proxy(key){
    Object.defineProperty(this, key, {
      configurable: true,
      enumerable: true,
      get: () => {
        console.log('vue get')
        return this._data[key]
      },
      set: (val) => {
        console.log('vue set')
        this._data[key] = val
      }
    })
  }
}