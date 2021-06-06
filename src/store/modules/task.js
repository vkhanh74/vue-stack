import { v4 as uuidv4 } from 'uuid';

const taskModule = {
  state: {
    list: [
      { id: 1, name: 'Wakeup', isDone: true },
      { id: 2, name: 'Clean tooth', isDone: true },
      { id: 3, name: 'Take a shower', isDone: false },
    ],
  },
  getters: {
    getTask: state => state.list,
  },
  mutations: {
    addTask(state, payload) {
      state.list = [...state.list, { id: uuidv4(), name: payload, isDone: false }];
    },
    checkTask(state, payload) {
      const tasks = state.list;
      const index = tasks.findIndex(i => i.id === payload);
      state.list = [
        ...tasks.slice(0, index),
        { ...tasks[index], isDone: !tasks[index].isDone },
        ...tasks.slice(index + 1),
      ];
    },
    checkAllTask(state) {
      const tasks = state.list;
      const isAllTaskChecked = tasks.find(task => !task.isDone);
      state.list = tasks.map(task => ({
        ...task,
        isDone: !!isAllTaskChecked,
      }));
    },
  },
  actions: {
    addTask(context, { name }) {
      context.commit('addTask', name);
    },
    checkAllTask(context) {
      context.commit('checkAllTask');
    },
  },
};

export default taskModule;
