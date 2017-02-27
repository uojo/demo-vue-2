<template>
	<div class="cpbox">
	<slot name="header" />
	<p>innerTitle: {{name}}</p>
	<p>description: 具名 slot</p>
	<p>props> pd1:{{pd1}}</p>
	<slot name="footer" />
	</div>
</template>

<script>
export default {
	data:()=>{
		return {
			name:"组件2_1"
		}
	},
	props:{
		pd1:{
			type:Number,
			default:100,
			required:true,
			validator:function( value ){
				return value>5;
			}
			
		}
	}
}
</script>