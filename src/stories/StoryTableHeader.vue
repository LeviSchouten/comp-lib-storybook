<template>
  <div>
    <Table>
      <table-header :headers="headers" @onSort="onSort"/>
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
export default class StoryTableHeader extends Vue {
  private rows = [
    ['John Doe', '32', 'United States'],
    ['Jane Doe', '38', 'France'],
    ['Jane van der Doe', '32', 'Netherlands'],
    ['John Doe', '33', 'Spain'],
  ];

  @Prop()
  readonly header1!: Header;

  @Prop()
  readonly header2!: Header;

  @Prop()
  readonly header3!: Header;

  get headers(): Header[] {
    return [this.header1, this.header2, this.header3];
  }

  public onSort(header: Header): void {
    this.$emit('onSort', header);
  }
}
</script>

<style>

</style>