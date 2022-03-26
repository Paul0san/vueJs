import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    // meta: { requiresAuth: false }
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: RegisterView,
    // meta: { requiresAuth: false }
  },
  {
    path: '/dashboard',
    name: 'DashboardView',
    component: () => import(/* webpackChunkName: "DashboardView" */ '../views/DashboardView.vue'),
    // meta: {
    //   requiresAuth: true
    // }

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   let loggedIn;
//   if(localStorage.get('token')){
//     loggedIn = true;
//   }
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

//   // Check for protected route
//   if (requiresAuth && !loggedIn) next('/')
//   else next();
// });

export default router
