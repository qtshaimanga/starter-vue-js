Vue.use(require('vue-resource'));

Vue.http.options.root = 'http://localhost:8000';
Vue.http.options.xhr = { withCredentials: true };
Vue.http.options.emulateJSON = true;
Vue.http.options.emulateHTTP = true;
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'
Vue.http.headers.common['Access-Control-Request-Method'] = 'GET,POST,PUT,DELETE,OPTIONS'
// Vue.http.interceptors.push(
//     {
//         request(req) {
//             if (store.state.token)
//                 req.url = req.url + "?token=" + store.state.token;
//             return req;
//         }
//     }
// );
//Vue.http..headers['Authorization'] = 'Bearer: ' + localStorage.getItem('id_token')
