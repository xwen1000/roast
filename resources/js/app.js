window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found');
}

require('./bootstrap');

import Vue from 'vue';

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

import router from './routes.js'
import store from './store.js'

new Vue({
    router,
    store
}).$mount('#app');