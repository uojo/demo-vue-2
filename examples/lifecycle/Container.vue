<template>
	<div>
	<table class="tbarea">
		<tbody>
		<tr>
			<td width="30%">
				<p>组件的生命周期，this 指向实例
				</p>
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
import utils from '../utils'

const {msg} = utils

msg( "utils", utils )

export default {
	mixins:[my1],
	data:()=>{
		// msg("data",this); // undefined
		return {
			a0:"Hello"
		}
	},
	methods:{
		fn1(){
			msg("vue.fn1")
		},
		fn2(){
			msg("vue.fn2")
		}
	},
	components:{
		// C1,
		// C2
	},
	created: function () { 
	    //在实例创建之后同步调用。此时实例已经结束解析选项，这意味着已建立：数据绑定，计算属性，方法，watcher/事件回调。
	    //但是还没有开始 DOM 编译，$el 还不存在,但是实例存在,即this.a存在,可打印出来 。
	    msg("建立");
	},
	beforeCompile: function () {
	    msg("未开始编译");
	},
	compiled: function () { 
	    //在编译结束后调用。此时所有的指令已生效，因而数据的变化将触发 DOM 更新。但是不担保 $el 已插入文档。
	    msg("编译完成");
	},
	ready: function () { 
	    //在编译结束和 $el 第一次插入文档之后调用，如在第一次 attached 钩子之后调用。注意必须是由 Vue 插入（如 vm.$appendTo() 等方法或指令更新）才触发 ready 钩子。
	    msg("一切准备好了");
	},
	attached :function () {  //myVue.$appendTo(".test2")暂时触发不了,不知道怎么解决
	    //在 vm.$el 插入 DOM 时调用。必须是由指令或实例方法（如 $appendTo()）插入，直接操作 vm.$el 不会 触发这个钩子。
	    msg("插入DOM成功");
	},
	detached :function () { //触发事件 myVue.$destroy(true),其中参数true控制是否删除DOM节点或者myVue.$remove()
	    //在 vm.$el 从 DOM 中删除时调用。必须是由指令或实例方法删除，直接操作 vm.$el 不会 触发这个钩子。
	    msg("删除DOM成功");
	},
	beforeDestroy: function () {  //触发方式,在console里面打myVue.$destroy();
	    //在开始销毁实例时调用。此时实例仍然有功能。
	    msg("销毁前");
	},
	destroyed: function () {   //触发方式,在console里面打myVue.$destroy();其中myVue.$destroy(true)是删除DOM节点,会触发detached函数,但是实例仍然存在
	    //在实例被销毁之后调用。此时所有的绑定和实例的指令已经解绑，注意是解绑不是销毁,所有的子实例也已经被销毁。
	    msg("已销毁");
	}
}
</script>

