<template>
  <div class="search-box">
    <a
      href="javascript:void(0)"
      v-on:click="onCheckAllTask"
      class="task-checkbox"
    >
      <img
        v-if="isAllTaskChecked"
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
import { mapActions } from 'vuex';

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
    tasks() {
      return this.$store.getters.getTask;
    },
    isAllTaskChecked() {
      return !this.$store.getters.getTask.find(task => !task.isDone);
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
}

.new-todo::placeholder {
  color: #dedede;
}

.new-todo:focus {
  outline: 0;
}
</style>
