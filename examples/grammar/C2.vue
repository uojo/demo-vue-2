<template>
<div class="cpbox">
{{ca1}} 
<span class="j_slot_a">
<slot > slot初始内容：<button>btn0</button></slot>
</span>
<b>slotDomHeight:{{slotHeight}}</b>
<C2_1>
  <h5 slot="header">header</h5>
  <p>content</p>
  <p slot="footer">footer</p>
</C2_1>
<C2_1 :pd1="a1" />
</div>
</template>

<script>
import C2_1 from './C2_1.vue'

export default {
	data:()=>{
		return {
			ca1:"组件2",
			slotHeight:0,
			a1:1,
			a2:"文本内容"
		}
	},
	computed:{
		/* slotHeight (){
			
			return 0;
		} */
	},
	methods:{
		getSlotDomHeight(){
			const slotDom = this.$el.querySelector(".j_slot_a");
			// console.log( "slotHeight", slotDom, slotDom.offsetHeight );
			return slotDom.offsetHeight;
		}
	},
	components:{
		C2_1
	},
	mounted(){
		this.slotHeight = this.getSlotDomHeight();	
	}
}
</script>