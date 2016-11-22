<style src="../css/chat.css"></style>

<template>
  <div class="chatapp">
	<p>{{a1}}</p>
    <ThreadSection />
    <message-section></message-section>
  </div>
</template>

<script>
import ThreadSection from './ThreadSection.vue'
import MessageSection from './MessageSection.vue'

import { mapGetters } from 'vuex'

export default {
	name: 'App',
	computed:{
		a0:()=>0,
		a1(){
			console.log("容器.computed.this",this);
			
			return "hello";
		}
	},
	components: {
		ThreadSection,
		MessageSection
	}
}
</script>
