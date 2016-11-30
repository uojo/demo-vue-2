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
				<C1 :td1="a5" />
				<p>{{a5}}</p>
			</td>
			<td>
				<h5>Components</h5>
				<C2 />
			</td>
		</tr>
		</tbody>
	</table>
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
			a6:10
		}
	},
	props:["a1"],
	components:{
		C1,
		C2
	}
}
</script>

