<template>
	<div>
	<h3>容器组件（根）</h3>
	<Menu0 />
	<router-view></router-view>
	</div>
</template>

<script>
import C1 from './C1.vue'
import Menu0 from './Menu.vue'

let localCount = 20;

export default {
	data:()=>{
		console.log("data",this); // undefined
		return {a0:"Hello"}
	},
	props:["a1"],
	components:{
		Menu0,
		C1
	}
}
</script>

