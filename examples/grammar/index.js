// import 'babel-polyfill' //会使打包之后的文件增大！
import Vue from 'vue'
import Counter from './Container.vue'
import COM_1 from './C1.vue'
// import Counter2 from './Counter2.vue'

import plugin1 from './plugin1'

// 使用自定义插件
console.warn( plugin1 );
Vue.use(plugin1);

// console.log( "Counter", Counter );

// Vue.component('Counter', Counter);

// 创建根组件
var demo = new Vue({
	el: '#app',
	data:{
		pa1:1,
	},
	// render:h=> h( Counter ),
	/* render:h=> {
		console.log("index.this",this);
		return h( Counter );
	}, */
	render(h){
		console.log("index.this",this);
		return h( Counter, { attrs:{ a1:1 } }, [COM_1] );
	},
	components:{
		COM_1
	},
	/*template:"<p>hello</p>" */
});


// 注意：
/*
 counter.vue 相当与
 const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
*/