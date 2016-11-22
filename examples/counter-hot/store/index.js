import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
import moduleA from './modules/double'

Vue.use(Vuex)

const store = new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
	modules:{
		moduleA
	}
});

if (module.hot) {
	module.hot.accept([
			'./state',
			'./getters',
			'./actions',
			'./mutations'
		], () => {
		
		
		store.hotUpdate({
			mutations:( require("./mutations") ),
			getters:( require("./getters") ),
			modules:{
				moduleA:( require("./modules/double").default )
			}

		})
	})
}


export default store
