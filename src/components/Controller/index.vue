<template>
  <div class="controller">
    <span>2 item left</span>
    <ul class="controller-filter">
      <li>All</li>
      <li>Active</li>
      <li>Completed</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Controller',
};
</script>

<style>
.controller {
  display: grid;
  grid-template-columns: 2fr 3fr 2fr;
}

.controller-filter {
  margin-left: auto;
  margin-right: auto;
}
.controller-filter > li {
  display: inline-block;
}

.controller-filter > li:not(:last-child) {
  margin-right: 10px;
}
</style>
