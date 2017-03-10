<template>
<table class="mt10 tbarea">
<caption>INFO</caption>
<tbody>
	<tr>
		<td width="30%">
			URL参数：
			<ul>
				<li>params: {{$route.params}} </li>
				<li>query: {{$route.query}} </li>
				<li>hash: {{$route.hash}} </li>
			</ul>
			<ul>
				<li>path: {{$route.path}} </li>
				<li>fullPath: {{$route.fullPath}} </li>
				<li>meta: {{$route.meta}} </li>
			</ul>
		</td>
		<td>
			跳转（跟随query、state）：
			<ul>
				<li><a @click="fnc2" >组件2：</a><p>{{r2}}</p>
					<ul>
						<li><a @click="fnc21" >组件2-1：</a>
						<p>{{r21}}</p>
						</li>
					</ul>
				</li>
				<li><a @click="fnc3" >组件3：</a>
					<p>{{r3}}</p>
					<ul>
						<li><a @click="fnc31" >组件3-1：</a>
							<p>{{r31}}</p>
						</li>
					</ul>
				</li>
				
			</ul>
		</td>
	</tr>
</tbody>
</table>
</template>

<script>
export default {
	data:()=>{
		return {
			a1:"根组件",
			r2:{
				path:"/c2",
				query:{q1:1},
				params:{p1:1},
			},
			r21:{
				path:"/c2/c21",
				query:{q1:2},
				params:{p1:2},
			},
			r3:{
				path:"/c3",
				query:{q1:3},
				hash:"h3",
				params:{"p1":3},
				// meta:{"m1":3},
			},
			r31:{
				path:"/c3/c31/31",
				query:{q1:4},
				hash:"h4",
				params:{"id":4},
			}
		}
	},
	methods:{
		fnc2(){
			console.log("路由跳转",this);
			this.$router.push(this.r2);
		},
		fnc21(){
			this.$router.push(this.r21);
		},
		fnc3(){
			this.$router.push(this.r3);
		},
		fnc31(){
			this.$router.push(this.r31);
		},
	}
}
</script>