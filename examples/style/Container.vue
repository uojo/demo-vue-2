<style>
.box_a{ background:#eee; padding:10px; }
@import "./a.css"
</style>

<template>
<div class="box_a">
	{{a0}}
	<C1 />
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
			}
		}
	},
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

