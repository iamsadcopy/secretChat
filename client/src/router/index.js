import Vue from 'vue'
import VueRouter from 'vue-router'
import App from "@/App";
import EncryptionResult from "@/components/Encryption/EncryptionResult";
import EncryptionMain from "@/components/Encryption/EncryptionMain";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: EncryptionMain
  },
  {
    path: '/secret/:id',
    name: "secret-result",
    component: EncryptionResult
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
