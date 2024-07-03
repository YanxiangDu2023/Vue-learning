// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import NotificationList from './components/NotificationList.vue';
import SubmitIssue from './components/SubmitIssue.vue';

const routes = [
  {
    path: '/',
    name: 'Notifications',
    component: NotificationList
  },
  {
    path: '/submit-issue',
    name: 'SubmitIssue',
    component: SubmitIssue
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
