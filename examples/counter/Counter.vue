<template>
	<div>
	{{a0}} World
	<p>{{a1}} - </p>
	<Child1 />
	<Com_1 />
	</div>
</template>

<script>
import Child1 from './Child_1.vue'

let localCount = 20;

export default {
	data:()=>{
		console.log("data",this); // undefined
		return {a0:"Hello"}
	},
	props:["a1"],
	components:{
		Child1,
		Com_1: ()=>{
			console.log( "Com_1", this ); // undefined
		}
	}
}
</script>

