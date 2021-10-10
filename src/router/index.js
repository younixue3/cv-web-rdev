import { createRouter, createWebHashHistory } from 'vue-router'

// Page
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Project from "../views/Project";
import Certificate from "../views/Certificate";

// Layout
import DashboardLayout from "../views/layout/Dashboard.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    component: DashboardLayout,
    redirect: '/dashboard/index',
    children: [
      {
        path: 'index',
        name: 'indexDashboard',
        component: Dashboard
      },
      {
        path: 'project',
        name: 'Project',
        component: Project
      },
      {
        path: 'certificate',
        name: 'Certificate',
        component: Certificate
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
