<template>
  <div class="search-box">
    <a
      href="javascript:void(0)"
      v-on:click="onCheckAllTask"
      class="task-checkbox"
    >
      <img class="task-checkbox-icon" src="@/assets/checked.png" />
    </a>
    <input class="new-todo" type="text" v-bind:placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      placeholder: 'What needs to be done?',
    };
  },
  computed: {
    tasks() {
      return this.$store.getters.getTask;
    },
    isAllTaskChecked() {
      return this.$store.getters.getTask.find(task => !task.isDone);
    },
    onCheckAllTask() {
      return () => this.$store.commit('checkAllTask');
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
