<template>
<div>
<p>{{a0}}</p>
<div class="column is-12">
    <label class="label" for="email">Email</label>
    <p :class="{ 'control': true }">
        <input v-validate data-vv-rules="required|email" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text" placeholder="Email">
        <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
    </p>
</div>
</div>
</template>

<script>

export default {
	data:()=>{
		// console.log("data",this); // undefined
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
	props:["a1"],
	methods:{
		fn1(){
			++this.a7.a;
			++this.a7.b;
		}
	}
}
</script>

