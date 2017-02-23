const MyPlugin={};
MyPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = function () {
    // 逻辑...
  }
  
  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
    }
  })
  // 3. 注入组件
  Vue.mixin({
    created: function () {
      // 逻辑...
    }
  })
  
  // 4. 添加事例方法
  Vue.prototype.$myMethod = function (options) {
    // 逻辑...
	console.log("$myMethod：this指向实例", this); //
  }
  
  Vue.prototype.$GM = {
	  fn1(){
		  // Vue.prototype 指向的是原型，不过去原型中的属性时，因为 this 的指向是GM所以出错
		  console.log("自定义实例 $GPP.fn() 被执行", this, Vue.prototype ); //this 指向 $GM
		  
	  }
  }
  
}


export default MyPlugin;