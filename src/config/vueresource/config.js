import Vue from 'vue';
import config from '../index.js'

Vue.use(require('vue-resource'));

Vue.http.options.root = 'http://localhost:8000';
Vue.http.options.emulateJSON = true;
Vue.http.options.emulateHTTP = true;

Vue.http.interceptors.push(function(request, next) {

    if(request.url != ('api/login' || 'api/register') ){

        let auth = JSON.parse(localStorage.getItem('auth'))
        Vue.http.headers.common['X-Access-Token'] = 'Bearer ' + auth.token;

        //console.log("request beyond : ", request);

    }

    next()
});
