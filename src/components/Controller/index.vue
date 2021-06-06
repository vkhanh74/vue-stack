<template>
  <div class="controller">
    <span class="controller-counter">2 item left</span>
    <ul class="controller-filter">
      <li
        v-bind:key="item.key"
        v-for="item in filters"
        v-bind:class="{ active: filterKey === item.key }"
      >
        <a href="#" v-on:click.prevent="onSetFilterKey(item.key)">
          {{ item.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Controller',
  data() {
    return {
      filters: [
        { key: 'all', title: 'All' },
        { key: 'active', title: 'Active' },
        { key: 'completed', title: 'Completed' },
      ],
    };
  },
  methods: {
    ...mapActions(['setFilterKey']),
    onSetFilterKey(key) {
      this.setFilterKey({ key });
    },
  },
  computed: {
    ...mapState({
      filterKey: state => state.common.filterKey,
    }),
  },
};
</script>

<style>
.controller {
  display: grid;
  grid-template-columns: 2fr 3fr 2fr;
  padding: 15px;
  font-weight: 300;
  font-size: 14px;
  color: #777;
}

.controller-counter {
  text-align: left;
}

.controller-filter {
  margin-left: auto;
  margin-right: auto;
}
.controller-filter > li {
  display: inline-block;
}

.controller-filter > li > a {
  font-weight: 300;
  font-size: 14px;
  color: #777;
  text-decoration: none;
}

.controller-filter > li.active > a {
  border: 1px solid #dededd;
  padding: 2px 10px;
  border-radius: 5px;
}

.controller-filter > li:not(:last-child) {
  margin-right: 10px;
}
</style>
