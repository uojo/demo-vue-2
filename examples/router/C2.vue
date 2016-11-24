<template>
	<div class="cpbox">
	<b>{{a1}}</b>
	<router-view name="c21"></router-view>
	</div>
</template>

<script>
export default {
	data:()=>{
		return {a1:"组件-2"}
	}
}
</script>