<template>
<div class="cpbox">
导航（href 跳转，不跟随 query、state）：
<ul>
	<li><a href="#">组件1（根）</a></li>
	<li><a href="#/c2">组件2</a>（redirect > C21）
		<ul>
			<li><a href="#/c2/c21">组件2-1（URL嵌套，组件【同级】渲染）</a></li>
			<li><a href="#/c2/c22">组件2-2（URL嵌套，组件【同级】渲染）</a></li>
		</ul>
	</li>
	<li><a href="#/c3">组件3</a>
		<ul>
			<li><a href="#/c3/c31">组件3-1（URL嵌套，组件【嵌套】渲染）</a></li>
		</ul>
	</li>
</ul>
<p>注意：</p>
<ul>
	<li>同级组件：C2、C3</li>
</ul>
</div>
</template>

<script>
export default {
	data:()=>{
		return {a1:"根组件"}
	}
}
</script>