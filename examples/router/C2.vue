<template>
<div class="cpbox">
	<b>{{a1}}</b>
	<router-view class="view one"></router-view>
	<router-view class="view two" name="a"></router-view>
	<router-view class="view three" name="b"></router-view>
</div>
</template>

<script>
export default {
	data:()=>{
		return {
			a1:"组件-C2"
		}
	}
}
</script>