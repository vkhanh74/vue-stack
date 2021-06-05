<template>
  <div class="container">
    <h1 class="title">todos</h1>
    <div class="content-container">
      <SearchBar />
      <TaskList v-bind:data="tasks" />
      <Controller />
    </div>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar';
import TaskList from './components/TaskList';
import Controller from './components/Controller';

export default {
  name: 'App',
  data() {
    return {
      tasks: [
        { id: 1, name: 'Wakeup', isDone: true },
        { id: 2, name: 'Clean tooth', isDone: true },
        { id: 3, name: 'Take a shower', isDone: false },
      ],
    };
  },
  components: {
    SearchBar,
    TaskList,
    Controller,
  },
};
</script>

<style>
body {
  font-family: 'Helvetica Neue', sans-serif;
  background-color: #f5f5f5;
}

.title {
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
  margin-bottom: 15px;
}

.container {
  max-width: 550px;
  margin-left: auto;
  margin-right: auto;
}

.content-container {
  text-align: center;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
}
</style>
