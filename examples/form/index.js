// import 'babel-polyfill' //会使打包之后的文件增大！
import Vue from 'vue'
import Container from './Container.vue'
import VeeValidate from 'vee-validate';



Vue.use(VeeValidate);

// 创建根组件
var demo = new Vue({
	el: '#app',
	render:h=> h( Container ),
});

