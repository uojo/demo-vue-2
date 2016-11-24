<template>
	<div class="cpbox">
	{{a1}}
	
	<p><button @click="fn1">push( {{r1}} )</button></p>
	
	
	<Info />
	
	</div>
</template>

<script>
import Info from './Info.vue'

export default {
	data:()=>{
		return {
			a1:"组件-31",
			r1:{
				// path:
			}
		}
	},
	computed:{
		r1:{
			cache:false,
			get(){
				return {
					query:{
						q1:5,
						"_":Date.now()
					},
					// meta:{ he:1 } //无效
					
				}
			}
			
		}
	},
	methods:{
		fn1(){
			let t = new Date().getTime()
			console.log("添加时间戳", t, this.t);
			// this.r1.query._ = t;
			this.$router.push( this.r1 );
		}
	},
	components:{
		Info
	}
}
</script>