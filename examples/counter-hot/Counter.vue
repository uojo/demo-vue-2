<template>
<div>
<p>Count: {{ count }} ，local-limit: {{ limit }} </p>
<p><b>Recent History (last {{$store.state.limit}} entries): </b> [ {{ recentHistory }} ] </p>
<p>state/rootState：<b>{{$store.state.moduleA.countA}}</b> , <b>{{count_alias1}}</b></p>
<p>
	<button @click="increment">+</button>
	<button @click="decrement">-</button>
	<button @click="incrementIfOdd">Increment if odd</button>
	<button @click="incrementAsync">Increment async</button>
</p>

<hr />

<b>ModuleA</b>
<p><span>CountA：</span>
	<button @click="incrementDouble">+</button>
		<b>{{countA}}</b>
	<button @click="decrementDouble">-</button> 
</p>

</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
	computed: {
		...mapState({
			countA:(state)=>state.moduleA.countA,
			count_alias1:(state, rootState)=>{
				console.debug("state/rootState", state, rootState);
				return rootState.count;
			}
		}),
		...mapGetters([
			'limit',
			'count',
			'recentHistory'
		])
	},
	methods: {
		...mapActions([
			'increment',
			'decrement',
			'incrementIfOdd',
			'incrementAsync',
			
			'decrementDouble'
		]),
		incrementDouble(){
			// console.debug("mapAction", this);
			this.$store.dispatch("incrementDouble");
		}
	}
}
</script>
