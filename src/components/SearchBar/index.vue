<template>
  <div class="search-box">
    <a
      href="javascript:void(0)"
      v-on:click="onCheckAllTask"
      class="task-checkbox"
    >
      <img
        v-if="shouldHideCheckIcon"
        class="task-checkbox-icon"
        src="@/assets/checked.png"
      />
    </a>
    <input
      class="new-todo"
      type="text"
      v-model="search"
      v-bind:placeholder="placeholder"
      v-on:keyup.enter="onAddTask"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'SearchBar',
  data() {
    return {
      search: '',
      placeholder: 'What needs to be done?',
    };
  },
  methods: {
    ...mapActions(['addTask', 'checkAllTask']),
    onAddTask() {
      this.addTask({ name: this.search });
      this.search = '';
    },
    onCheckAllTask() {
      this.checkAllTask();
    },
  },
  computed: {
    ...mapState({
      tasks: state => state.tasks.list,
    }),
    shouldHideCheckIcon() {
      return !this.tasks.find(task => !task.isDone) && !!this.tasks.length;
    },
  },
};
</script>

<style>
.search-box {
  padding: 15px;
  display: flex;
  box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
  background-color: rgba(0, 0, 0, 0.003);
  position: relative;
  width: 100%;
  box-sizing: border-box;
}

.new-todo {
  color: #4d4d4d;
  font-weight: 300;
  border: none;
  font-size: 24px;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.new-todo::placeholder {
  color: #dedede;
}

.new-todo:focus {
  outline: 0;
}
</style>
