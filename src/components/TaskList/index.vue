<template>
  <ul>
    <template v-for="task in tasks">
      <TaskItem
        v-bind:key="task.id"
        v-on:onCheck="onCheck"
        v-on:onRemove="onRemove"
        v-bind:data="task"
      />
    </template>
  </ul>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import TaskItem from '../TaskItem';

export default {
  name: 'TaskList',
  components: {
    TaskItem,
  },
  computed: {
    ...mapState({
      tasks: state => state.tasks.list,
    }),
  },
  methods: {
    ...mapActions(['checkTask', 'removeTask']),
    onCheck(id) {
      this.checkTask({ id });
    },
    onRemove(id) {
      this.removeTask({ id });
    },
  },
  data() {
    return {
      test: true,
    };
  },
};
</script>

<style></style>
