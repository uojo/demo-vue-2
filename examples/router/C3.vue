<template>
	<div class="cpbox">
	<b>{{a1}}</b>
	<Info/>
	
	<router-view></router-view>
	</div>
</template>

<script>
import Info from './Info.vue'

export default {
	data:()=>{
		
		return {a1:"组件-3"}
	},
	computed:{
		a2(){
			console.log( "data.this", this );
			return 3;
		}
	},
	components:{
		Info
	}
}
</script>