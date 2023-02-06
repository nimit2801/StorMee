import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/home.vue';
import Login from './components/login.vue';
import Upload from './components/upload.vue';
// const Home = { template: '<div>Home</div>' };
// const Login = { template: '<div>About</div>' };
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', component: Login },
  { path: '/upload', component: Upload },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
const app = createApp(App);
app.use(router);
app.mount('#app');
