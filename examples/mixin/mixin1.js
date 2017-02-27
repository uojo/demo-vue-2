import utils from '../utils'
const {msg} = utils

let handle={
  my1:{
    methods:{
		fn1(){
			msg("mixin.methods.fn1")
		},
		fn2(){
			msg("mixin.methods.fn2")
		}
    },
	beforeCreate(){
		msg("mixin.lifecycle.beforeCreate",this);
	},
	created(){
		msg("mixin.lifecycle.created",this);
	},
	beforeMount(){
		msg("mixin.lifecycle.beforeMount",this);
	},
	mounted(){
		msg("mixin.lifecycle.mounted",this);
	},
	beforeUpdate(){
		msg("mixin.lifecycle.beforeUpdate",this);
	},
	updated(){
		msg("mixin.lifecycle.updated",this);
	},
	beforeDestroy(){
		msg("mixin.lifecycle.beforeDestroy",this);
	}
  },
  my2:{
	
  }
}

export default handle;