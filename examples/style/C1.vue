<template>
<div class="box_b">

</div>
</template>

<script>
// require("./a.css") // error

export default {
	data:()=>{
		return {
			title:"组件1",
			i:0
		}
	},
	methods:{
		fn1(){
			console.info( this );
			
		}
	},
	computed:{
		
	},
	// 生命周期
	beforeUpdate:function(){
		
	},
	updated:function(){
		
		
	}

}
</script>