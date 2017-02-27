<template>
	<div class="cpbox">
	<slot name="header" />
	<p>innerTitle: {{name}}</p>
	<p>description: 具名 slot</p>
	<slot name="footer" />
	</div>
</template>

<script>
export default {
	data:()=>{
		return {
			name:"组件2_1"
		}
	}
}
</script>