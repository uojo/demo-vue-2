<style>
.is-danger {color:red;}
</style>

<template>
<div>
<p>{{title}}
<button @click="getData">data</button>
<button @click="getErrors">errors</button>
</p>
<form @submit.prevent="validateBeforeSubmit">
	<div class="column is-12">
		<label class="label" for="">Input-area</label>
		<p>
			<b>ruleD：radio, checkbox</b>
			<ul>
				<li>
					<label class="radio">
						<input name="radio_group_1" v-validate data-vv-rules="required|in:1,2" value="1" type="radio">
						Option 1
					</label>
					<label class="radio">
						<input name="radio_group_1" value="2" type="radio">
						Option 2
					</label>
					<label class="radio">
						<input name="radio_group_1" value="3" type="radio">
						Option 3
					</label>
					<span class="help is-danger" v-show="getShow('radio_group_1')">{{ errors.first('radio_group_1') }}</span>
				</li>
				<li>
					<label class="checkbox">
						<input name="terms" v-validate data-vv-rules="required" type="checkbox">
						I agree to the terms and conditions.
					</label>
					<span class="help is-danger" v-show="errors.has('terms')">{{ errors.first('terms') }}</span>
				</li>
			</ul>
		</p>
		<p>
			<b>ruleC：</b>
			<ul>
				<li>生命周期中<b>定义规则</b>：
					<input v-validate data-vv-rules="required|ruleC" :class="getClass1('c5')" v-model="c5" name="c5" type="text">
					<span v-show="getShow('c5')" class="help is-danger">{{ errors.first('c5') }}</span>
				</li>
				<li>生命周期中<b>初始校验</b>：
					<input :class="getClass1('c4')" v-model="c4" name="c4" type="text">
					<span v-show="getShow('c4')" class="help is-danger">{{ errors.first('c4') }}</span>
					<button type="button" @click="ck_c4">check</button>
				</li>
			</ul>
			
		</p>
		<p>
			<b>ruleB：</b>
			<input v-validate data-vv-rules="ruleB" :class="getClass1('c3')" name="c3" type="text">
			<span v-show="getShow('c3')" class="help is-danger">{{ errors.first('c3') }}</span>
		</p>
		<p>
			<b>ruleA：</b>
			<input v-validate data-vv-rules="required|ruleA" :class="getClass1('c2')" name="c2" type="text">
			<span v-show="getShow('c2')" class="help is-danger">{{ errors.first('c2') }}</span>
		</p>
		
		
		<label class="label" for="">Input-c1</label>
		<p>
			<input v-validate data-vv-rules="required" :class="getClass1('c1')" name="c1" type="text" placeholder="required">
			<span v-show="getShow('c1')" class="help is-danger">{{ errors.first('c1') }}</span>
		</p>
		<label class="label" for="">Email</label>
		<p :class="{ 'control': true }">
			<input v-validate v-validate.inital="email" data-vv-rules="required|email" :class="getClass1('email')" name="email" type="text" placeholder="required,email">
			<span v-show="getShow('email')" class="help is-danger">{{ errors.first('email') }}</span>
		</p>
		
	</div>
	<p><button>submit</button></p>
	
</form>
</div>
</template>

<script>
import './ruleA';

export default {
	data:()=>{
		// console.log("data",this); // undefined
		return {
			title:"Vee-validate",
			a5:1,
			a6:10,
			a7:{
				a:10,
				b:2
			},
			good:100
		}
	},
	computed:{
		
	},
	methods:{
		getData(){
			// console.log("$data", this.$data);
			
		},
		getErrors(){
			// console.log("$data", this.errors.all());
			
		},
		getShow(name){
			// console.log("errors",this.errors);
			return this.errors.has(name);
		},
		getClass1(name){
			// console.log("getClass1.errors",this.errors);
			
			return {'input': true, 'is-danger': this.errors.has(name) };
		},
		validateBeforeSubmit(e){
            // 校验所有
			this.$validator.validateAll().then(result=>{
				console.info("validateAll.result",result);
			});
			
			console.log( "validateBeforeSubmit", this.c4 );
			
			this.ck_c4();
			
            if ( this.errors.any() ) {
				console.warn( this.errors );
            }
		},
		ck_c4(){
			console.info( "ck_c4", this, this.fields );
			// 单独校验
			this.$validator.validate("c5", this.c4).then(result=>{
				
				console.info( "Promise.result（校验结果 boolean）",result );
				
			});
		}
	},
	// 生命周期
	created(){
		
		// 添加校验规则（方式二）
		const rule3 = {
			messages: {
				en:(field, args) => {
					console.log( "rule3.message", field, args, this );
					return field + '请输入 1 ';
				}
			},
			validate: (value, args) => {
				
				return new Promise(resolve =>{
					
					console.info( "Promise.start" );
					setTimeout(() => {
						
						resolve({
							valid: value==="1"
						});
					}, 500);
					
				});
				
				// 简单返回
				console.log( "rule3.validate", value, args );
				// boolean
				return value === "1";
			}
		};
		this.$validator.extend('ruleC', rule3);
		
		
		// 附加规则，调用 validate 执行校验
		this.$validator.attach('c4', 'required|ruleC');
		
		
	}
}
</script>

