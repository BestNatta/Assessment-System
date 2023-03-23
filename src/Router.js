import Vue from 'vue';
import Router from 'vue-router';
import Tasks from './views/Tasks.vue';
// import Form from './views/Form.vue';
import Create from './views/Create.vue'
// import Show from './views/Show.vue';
import Edit from './views/Edit.vue';
import Result from './views/Result.vue';
import ResuleCircle from './components/ResultCircle.vue';
import Dashboard from './views/Dashboard/dashboard1.vue';
import PreviewPDF from './views/forms/pdfPreview.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/tasks'
    },

    {
      path: '/tasks',
      name: 'tasks',
      component: Tasks
    },

    {
      path: '/tasks/create',
      name: 'create',
      component: Create
    },

    // {
    //   path: '/tasks/:id',
    //   name: 'show',
    //   component: Show
    // },

    {
      path: '/tasks/:id/edit',
      name: 'edit',
      component: Edit
    },

    {
      path: '/tasks/:id/result',
      name: 'result',
      component: Result
    },

    {
      path: '/tasks/result-circle',
      name: 'result-circle',
      component: ResuleCircle
    },

    {
      path: '/tasks/:id/dashboard',
      name: 'dashboard',
      component: Dashboard
    },

    {
      path: '/tasks/PreviewPDF',
      name: 'PreviewPDF',
      component: PreviewPDF
    }

  ]
});