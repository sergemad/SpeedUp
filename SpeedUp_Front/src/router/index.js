import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import Devis from '@/components/Devis'
import Profil from '@/components/Profil'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/Devis',
      name: 'Devis',
      component: Devis
    },
    {
      path: '/Profil',
      name: 'Profil',
      component: Profil
    }
  ]
})
