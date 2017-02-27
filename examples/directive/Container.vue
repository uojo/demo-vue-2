<template>
	<div>
	<table class="tbarea">
		<tbody>
		<tr>
			<td width="30%">
				<input type="text" v-my1.a.b="hello"/><button>my1</button>
			</td>
			<td width="30%">

			</td>
			<td>

			</td>
		</tr>
		</tbody>
	</table>
	</div>
</template>

<script>
// import C1 from './C1.vue'
import directives from './directive1'
console.warn( directives )

export default {
	directives,
	data:()=>{
		console.log("data",this); // undefined
		return {
			a0:"Hello",
			a5:1,
			a6:10,
			a7:{
				a:10,
				b:2
			}
		}
	},
	methods:{
		fn1(){
			
		}
	},
	components:{
		// C1,
		// C2
	}
}
</script>

