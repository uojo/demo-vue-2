<template>
	<div>
	<h3>容器组件（根）</h3>
	
	<p>{{a1}} - </p>
	<C1 />
	</div>
</template>

<script>
import C1 from './C1.vue'

let localCount = 20;

export default {
	data:()=>{
		console.log("data",this); // undefined
		return {a0:"Hello"}
	},
	props:["a1"],
	components:{
		C1
	}
}
</script>

