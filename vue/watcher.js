// 订阅者
import Dep from './dep'

export default class Watcher {
  constructor (vm, expOrFn, cb) {
    this.vm = vm  // 被订阅的数据一定来自于当前Vue实例
    this.cb = cb // 当数据更新时需要执行的回调函数
    this.expOrFn = expOrFn // 被监听的数据（表达式或函数）
    this.val = this.get()  // 维护更新之前的数据
  }
  get () {
    // 当前订阅者（watcher）读取被订阅数据的最新更新后的值时，通知订阅者管理员收集当前订阅者
    Dep.target = this
    const val = this.vm._data[this.expOrFn]
    // 置空 用于下一个Watcher使用
    Dep.target = null
    return val
  }
  // 对外暴漏的接口，用于在订阅的数据被更新时，由订阅者管理员（Dep）调用
  update () {
    this.vm._randerDom() // 检测的数据变动后，更新dom
    this.run()
  }
  run () {
    const val = this.get()
    if (val !== this.val) {
      this.val = val
      this.cb.call(this.vm)
    }
  }
}