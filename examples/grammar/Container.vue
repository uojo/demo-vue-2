<template>
	<div>
	<table class="tbarea">
		<tbody>
		<tr>
			<td width="30%">
				<h5>配置对象</h5>
				<ul>
					<li>data: {{a0}} World</li>
					<li>props: {{a1}}</li>
				</ul>
			</td>
			<td width="30%">
				<h5>Components</h5>
				<C1 :pd1="a5" :pd2="a7" :pd3="a9" />
				<h5>继承给子组件的变量：</h5>
				<p>对象：a: {{a7.a}}，b: {{a7.b}}，非：{{a5}}</p>
				<p>变更继承量 <button @click="fn1"> plus.parent </button> </p>
				
				<h5>总结</h5>
				<ul>
					<li>单向数据流，解决继承的双向绑定，可以利用对象</li>
					<li>将对象继承给子组件，将会互通</li>
					<li>parent.obj.a 被子组件修改了，所以 parent.change 后不变</li>
					<li>实现随时父附值给子初始化：对象继承下去后，删掉！</li>
					
				</ul>
			</td>
			<td>
				<h5>Components</h5>
				<C2>
					<button>btn2</button>
				</C2>
			</td>
		</tr>
		</tbody>
	</table>
	</div>
</template>

<script>
import C1 from './C1.vue'
import C2 from './C2.vue'

let localCount = 20;

export default {
	data:()=>{
		console.log("data",this); // undefined
		return {
			a0:"Hello",
			a5:1,
			a6:10,
			a7:{
				a:10,
				b:2
			},
			a9:"world"
		}
	},
	
	props:["a1"],
	methods:{
		fn1(){
			++this.a7.a;
			++this.a7.b;
		}
	},
	components:{
		C1,
		C2
	}
}
</script>

