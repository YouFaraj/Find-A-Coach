import { createRouter, createWebHistory } from 'vue-router';
import CoachDetails from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegisteration from './pages/coaches/CoachRegister.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsRecieved from './pages/requests/RequestsRecieved.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetails,
      children: [{ path: 'contact', component: ContactCoach }]
    },
    { path: '/register', component: CoachRegisteration },
    { path: '/requests', component: RequestsRecieved },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;
