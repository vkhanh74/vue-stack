<template>
  <ul>
    <template v-for="task in tasks">
      <TaskItem
        v-bind:key="task.id"
        v-on:onCheck="onCheck"
        v-bind:data="task"
      />
    </template>
  </ul>
</template>

<script>
import { mapState } from 'vuex';
import TaskItem from '../TaskItem';

export default {
  name: 'TaskList',
  components: {
    TaskItem,
  },
  computed: {
    ...mapState(['tasks']),
  },
  methods: {
    onCheck(id) {
      this.$store.commit('checkTask', id);
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
