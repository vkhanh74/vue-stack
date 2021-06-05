// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex, { createLogger } from 'vuex';
import App from './App';
import './app.css';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [
    createLogger({
      collapsed: false,
    }),
  ],
  state: {
    tasks: [
      { id: 1, name: 'Wakeup', isDone: true },
      { id: 2, name: 'Clean tooth', isDone: true },
      { id: 3, name: 'Take a shower', isDone: false },
    ],
  },
  getters: {
    getTask: state => state.tasks,
  },
  mutations: {
    increment(state) {
      state.selectedTask = 1;
    },
    checkTask(state, payload) {
      const tasks = state.tasks;
      const index = tasks.findIndex(i => i.id === payload);
      state.tasks = [
        ...tasks.slice(0, index),
        { ...tasks[index], isDone: !tasks[index].isDone },
        ...tasks.slice(index + 1),
      ];
    },
    checkAllTask(state) {
      const tasks = state.tasks;
      const isAllTaskChecked = tasks.find(task => !task.isDone);
      state.tasks = tasks.map(task => ({
        ...task,
        isDone: !!isAllTaskChecked,
      }));
    },
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
