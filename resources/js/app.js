
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';
import App from './App.vue';
import router from './routes.js';
import store from './store.js';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en';

Vue.config.productionTip = false

Vue.use(ElementUI, {locale});

//https://www.npmjs.com/package/vue-chartkick
//https://chartkick.com/vue
import VueChartkick from 'vue-chartkick';

//https://www.npmjs.com/package/highcharts
import Highcharts from 'highcharts';

//https://www.npmjs.com/package/vue-router-back-button
import { writeHistory } from 'vue-router-back-button';

router.afterEach(writeHistory);

router.afterEach(writeHistory);

//https://www.npmjs.com/package/vue-chartkick
Vue.use(VueChartkick, {adapter: Highcharts});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
