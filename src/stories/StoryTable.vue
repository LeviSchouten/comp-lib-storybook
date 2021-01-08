<template>
  <div>
    <Table>
      <table-header :headers="headers" @onSort="sortRows"/>
      <tbody>
        <table-row v-for="row in rows" :key="row.join('-')" :columns="row"/>
      </tbody>
    </Table>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Table from '../components/Table.vue';
import TableHeader from '../components/TableHeader.vue';
import TableRow from '../components/TableRow.vue';

interface Header {
  value: string;
  ascending: boolean;
  sortable: boolean;
}

@Component({
  components: {
    Table,
    TableHeader,
    TableRow,
  },
})
export default class StoryTable extends Vue {
  @Prop({ type: Array })
  readonly headers!: Header[];

  @Prop({ required: true, type: Array })
  rows!: string[][];

  public sortRows(): void {
    this.rows = this.rows.sort();
  }
}
</script>

<style>

</style>
