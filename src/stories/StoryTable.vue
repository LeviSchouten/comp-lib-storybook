<template>
  <div>
    <Table :isBordered="isBordered" :isHoverable="isHoverable" :isStriped="isStriped">
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

import { Header } from '../interfaces';

@Component({
  components: {
    Table,
    TableHeader,
    TableRow,
  },
})
export default class StoryTable extends Vue {
  private rows = [
    ['John Doe', '32', 'United States'],
    ['Jane Doe', '38', 'France'],
    ['Jane van der Doe', '32', 'Netherlands'],
    ['John Doe', '33', 'Spain'],
  ];

  private headers = [
    { value: 'Name', ascending: false, sortable: true },
    { value: 'Age', ascending: false, sortable: true },
    { value: 'Country', ascending: false, sortable: true },
  ];

  @Prop({ default: false })
  readonly isStriped!: boolean;

  @Prop({ default: false })
  readonly isBordered!: boolean;

  @Prop({ default: false })
  readonly isHoverable!: boolean;

  public sortRows(header?: Header): void {
    let index = 0;

    if (!header) {
      this.rows = this.rows.sort();
      return;
    }

    if (header) index = this.headers.indexOf(header);

    this.rows.sort((a, b) => {
      if (a[index] > b[index]) return -1;
      if (a[index] < b[index]) return 1;
      return 0;
    });

    if (this.headers[index].ascending) this.rows.reverse();

    this.headers[index].ascending = !this.headers[index].ascending;
  }

  created() {
    this.sortRows();
    this.headers = this.headers;
  }
}
</script>

<style>

</style>
