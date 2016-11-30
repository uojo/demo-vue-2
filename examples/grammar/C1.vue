<template>
	<div class="cpbox">
	{{ca1}}
	
	<p><button @click="fn1">btn1</button></p>
	<p>继承变量：{{td1}} , {{td2}} <button @click="fn2"> plus </button></p>
	</div>
</template>

<script>
export default {
	data:()=>{
		return {ca1:"组件1",i:0,_td1:0}
	},
	props:['td1'],
	methods:{
		fn1(){
			console.info( this );
			console.info( this.$GM.fn1(), this.$myMethod() );
		},
		fn2(){
			++this.i
		}
	},
	computed:{
		td2(){
			return this.td1+this.i;
		}
	},
	// 生命周期
	beforeUpdate:function(){

		if( this.td1 ){
			this._td1 = this.td1;
		}
		
	},
	updated:function(){
		this.td1 = 0;
	}

}
</script>