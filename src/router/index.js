import Vue from 'vue'
import VueRouter from 'vue-router'


const Index = () => import('../views/Index.vue')

const ViewerLite = () => import('../views/ViewerLite.vue')

const Error404 = () => import('../views/Error404.vue')
const PrivacyPolicy = () => import('../views/PrivacyPolicy.vue')
const PrivacyPolicyChildren = () => import('../views/PrivacyPolicyChildren.vue')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/privacypolicy',
    component: PrivacyPolicy
  },
  {
    path: '/bc',
    component: PrivacyPolicyChildren
  },
  { 
    path: "*", 
    component: Error404
  },
  {
    path: '/viewerlite',
    component: ViewerLite
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


