// import 'babel-polyfill' //会使打包之后的文件增大！
import Vue from 'vue'
import Container from './Container.vue'
import COM_1 from './C1.vue'
// import Container2 from './Container2.vue'

import plugin1 from './plugin1'

// 使用自定义插件
console.warn( plugin1 );
Vue.use(plugin1);

// console.log( "Container", Container );

// Vue.component('Container', Container);

// 创建根组件
var demo = new Vue({
	el: '#app',
	data:{
		pa1:1,
	},
	// render:h=> h( Container ),
	/* render:h=> {
		console.log("index.this",this);
		return h( Container );
	}, */
	render(h){
		console.log("index.this",this);
		return h( Container, { attrs:{ a1:1 } }, [COM_1] );
	},
	components:{
		COM_1
	},
	/*template:"<p>hello</p>" */
});


// 注意：
/*
 counter.vue 相当与
 const Container = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
*/