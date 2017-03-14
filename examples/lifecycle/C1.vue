<template>
	<div class="cpbox">
	{{title}}
	
	<p><button @click="fn1">btn1</button></p>
	<h5>继承的变量：</h5>
	<p> 对象：a: {{pd2.a}}，b: {{pd2.b}}，非：{{pd1}} </p>
	<p>变更继承量 <button @click="fn2"> change.props </button></p>
	<h5>本地变量：</h5>
	<p>
		<button @click="fn3"> change.local.depend </button>
		<button @click="fn4"> change.local.props </button>
	</p>
	<p>不改继承改依赖：{{td1}}，继承附本地：{{td3}}</p>
	</div>
</template>

<script>
export default {
	data:()=>{
		return {
			title:"组件1",
			i:0,
			td2:0,
			td3:0
		}
	},
	props:['pd1','pd2'],
	methods:{
		fn1(){
			console.info( this );
			console.info( this.$GM.fn1(), this.$myMethod() );
		},
		fn2(){
			++this.pd2.b;
		},
		fn3(){
			// 利用好computed中的依赖
			++this.td2;
		},
		fn4(){
			// 利用好computed中的依赖
			++this.td3;
		}
	},
	computed:{
		td1(){
			return this.pd2.a+this.td2;
		}
	},
	// 生命周期
	beforeMount:function(){
		console.warn("beforeMount",this);
	},
	mounted:function(){
		console.warn("mounted");
	},
	beforeUpdate:function(){
		/*
		if( this.pd1 ){
			this._pd1 = this.pd1;
		}
		*/
		if( this.pd2.a ){
			this.td3 = this.pd2.a
		}
		
	},
	updated:function(){
		
		// this.pd1 = 0;	// error,不能修改继承的属性
		
		if(this.pd2.a){
			this.pd2.a = 0; //继承的是个对象，就可以改
		}
		
	}

}
</script>