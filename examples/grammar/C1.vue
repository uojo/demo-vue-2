<template>
	<div class="cpbox">
	{{ca1}}
	
	<p><button @click="fn1">btn1</button></p>
	</div>
</template>

<script>
export default {
	data:()=>{
		return {ca1:"Com_1"}
	},
	methods:{
		fn1(){
			console.info( this );
			console.info( this.$GM.fn1(), this.$myMethod() );
		}
	}
}
</script>