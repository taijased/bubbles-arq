import Vue from 'vue'
import VueRouter from 'vue-router'


const Index = () => import('../views/Index.vue')
const Main = () => import('../views/index/Main.vue')
const About = () => import('../views/index/About.vue')


const Menu = () => import('../views/index/Menu.vue')
const MenuControls = () => import('../components/MenuControls.vue')
const FormControls = () => import('../components/FormControls.vue')



const DreamTeamMobile = () => import('../views/Test.vue')








const Error404 = () => import('../views/Error404.vue')
const PrivacyPolicy = () => import('../views/PrivacyPolicy.vue')
const PrivacyPolicyChildren = () => import('../views/PrivacyPolicyChildren.vue')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index,
    children: [
      {
        path: '/',
        component: Main
      },
      {
        path: '/about',
        component: About
      },
      {
        path: '/test',
        component: DreamTeamMobile
      },
      {
        path: '/menu',
        component: Menu,
        children: [ 
          {
            path: '/',
            component: MenuControls,
          },
          {
            path: '/stayintouch',
            component: FormControls,
          },

        ]
      },
    ]
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
