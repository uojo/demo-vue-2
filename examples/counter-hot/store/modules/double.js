// initial state
const state = {
	countA:10,
	countB:20
}

// mutations
const mutations = {
	incrementDouble(state){
		state.countA*=2;
	},
	decrementDouble(state){
		--state.countA;
	}
}

const actions = {
	incrementDouble(context,payload){
		context.commit("incrementDouble")
	},
	decrementDouble(context,payload){
		context.commit("decrementDouble")
	},
}

export default {
  state,
  mutations,
  actions
}
