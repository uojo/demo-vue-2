// import 'babel-polyfill' //会使打包之后的文件增大！
import Vue from 'vue'
import Container from './Container.vue'


// console.log( 'Container', Container );

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
		return h( Container, { attrs:{ a1:1 } } );
	}
});
