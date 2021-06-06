<template>
  <li class="task-item">
    <a href="#" v-on:click.prevent="onCheck" class="task-checkbox">
      <img
        v-if="data.isDone"
        class="task-checkbox-icon"
        src="@/assets/checked.png"
      />
    </a>
    <span class="task-name">{{ data.name }}</span>
    <a href="#" v-on:click.prevent="onRemove" class="task-remove">
      <img class="task-checkbox-icon" src="@/assets/cancel.png" />
    </a>
  </li>
</template>

<script>
export default {
  name: 'TaskItem',
  methods: {
    onCheck() {
      this.$emit('onCheck', this.data.id);
    },
    onRemove() {
      this.$emit('onRemove', this.data.id);
    },
  },
  props: {
    data: {
      type: Object,
    },
  },
};
</script>

<style>
.task-item {
  text-align: left;
  padding: 15px;
  border-bottom: 1px solid #ededed;
  display: flex;
  align-items: center;
}

.task-checkbox {
  border: 1px solid #ededed;
  border-radius: 999px;
  height: 25px;
  min-width: 25px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.task-remove {
  margin-left: auto;
}

.task-checkbox-icon {
  height: 15px;
  width: 15px;
}

.task-name {
  word-break: break-all;
  display: block;
  line-height: 1.2;
  transition: color 0.4s;
  font-size: 24px;
  color: #4d4d4d;
  font-weight: 300;
  margin-right: 20px;
}
</style>
