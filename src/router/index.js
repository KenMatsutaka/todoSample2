import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoList from "../components/TodoList"
import TodoForm from "../components/TodoForm"

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: TodoList
  },
  {
    path: '/todos/add',
    component: TodoForm
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router