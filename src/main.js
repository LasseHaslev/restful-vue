import Vue from 'vue'
import Create from './Create.vue'
import Update from './Update.vue'

import RestfulVue from './RestfulVue';

Vue.use( RestfulVue );

import { container, create, update, remove } from './RestfulVue'

new Vue({
  el: 'body',

  mixins: [ container ],

  components: { Create, Update }
})
