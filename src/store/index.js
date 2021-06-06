import Vue from 'vue';
import Vuex, { createLogger } from 'vuex';
import commonModule from './modules/common';
import taskModule from './modules/task';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    common: commonModule,
    tasks: taskModule,
  },
  plugins: debug
    ? [
      createLogger({
        collapsed: false,
      }),
    ]
    : [],
});
