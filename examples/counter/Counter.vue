<template>
	<div>
	<table class="tbarea">
		<tbody>
		<tr>
			<td width="30%">
				<h5>配置对象</h5>
				<ul>
					<li>data: {{a0}} World</li>
					<li>props: {{a1}}</li>
				</ul>
			</td>
			<td width="30%">
				<h5>Components</h5>
				<Child1 />
			</td>
			<td>
				<h5>Components</h5>
				<Com_1 />
			</td>
		</tr>
		</tbody>
	</table>
	</div>
</template>

<script>
import Child1 from './Child_1.vue'
import Com_1 from './Com_1.vue'

let localCount = 20;

export default {
	data:()=>{
		console.log("data",this); // undefined
		return {a0:"Hello"}
	},
	props:["a1"],
	components:{
		Child1,
		Com_1
	}
}
</script>

