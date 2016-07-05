import Vue from 'vue'
import Create from './Create.vue'
import Update from './Update.vue'


var VueResource = require('vue-resource');
Vue.use(VueResource);

import { container, create, update, remove } from './RestfulVue'

new Vue({
  el: 'body',

  mixins: [ container ],

  components: { Create, Update }
})
