<template>
	<div>
	<table class="tbarea">
		<tbody>
		<tr>
			<td width="30%">
				methods 优先级
				<p>
					<button @click="fn1">fn1</button>
					<button @click="fn2">fn2</button>
				</p>
			</td>
			<td width="30%">
				优先级
				<ol>
					<li> this.methods > mixin.methods</li>
					<li> this.lifeCycle < mixin.lifeCycle</li>
				</ol>
			</td>
			<td>
				
			</td>
		</tr>
		</tbody>
	</table>
	</div>
</template>

<script>
import C1 from './C1.vue'
import utils from '../utils'
import mixins from './mixin1'

const {msg} = utils
const { my1 } = mixins

msg( "utils", utils )
msg( "mixins", my1 )

export default {
	mixins:[my1],
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
		/* fn1(){
			msg("vue.fn1")
		}, */
		fn2(){
			msg("vue.fn2")
		}
	},
	components:{
		// C1,
		// C2
	},
	beforeCreate(){
		msg("lifecycle.beforeCreate",this);
	},
	created(){
		msg("lifecycle.created",this);
	},
	beforeMount(){
		msg("lifecycle.beforeMount",this);
	},
	mounted(){
		msg("lifecycle.mounted",this);
	},
	beforeUpdate(){
		msg("lifecycle.beforeUpdate",this);
	},
	updated(){
		msg("lifecycle.updated",this);
	},
	beforeDestroy(){
		msg("lifecycle.beforeDestroy",this);
	}
}
</script>

