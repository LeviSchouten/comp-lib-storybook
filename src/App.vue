<template>
  <div id="app">
    <advanced-table
      :canViewTable="true"
      :canCommitAction="true"
      :canFilterTable="true"
      :actions="actions"
      :count="1000"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AdvancedTable from './stories/components/AdvancedTable.vue';

Component.registerHooks([
  'updated',
]);

console.time('App');

@Component({
  components: {
    AdvancedTable,
  },
})
export default class App extends Vue {
  private actions = ['Download', 'Upload', 'Edit', 'Delete'];

  // eslint-disable-next-line class-methods-use-this
  updated() {
    console.log('updated');
    console.timeEnd('App');
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
