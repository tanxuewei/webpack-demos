// 管理订阅者
// 对订阅者进行收集、存储和通知
export default class Dep {
  constructor () {
    this.subs = [] // 订阅者队列
  }
  addSub (sub) {
    this.subs.push(sub)  // 添加订阅者
  }
  notify () {
    // 通知所有的订阅者（watcher），触发订阅者的响应逻辑处理
    this.subs.forEach((sub) => sub.update())
  }
}