import Vue from 'vue';
import Router from 'vue-router';

import login from '../components/login.vue';
import register from '../components/register.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            component: login
        },
        {
            path: 'register',
            component: register
        }
    ]
});

export default router;