<template>
  <div>
    <Table>
      <table-header :headers="headers"/>
      <tbody>
        <table-row :columns="row"/>
      </tbody>
    </Table>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Table from '../../components/Table.vue';
import TableHeader from '../../components/TableHeader.vue';
import TableRow from '../../components/TableRow.vue';

import { Header } from '../../interfaces';

@Component({
  components: {
    Table,
    TableHeader,
    TableRow,
  },
})
export default class StoryTableRow extends Vue {
  private headers: Header[] = [];

  @Prop({ type: Array, required: true })
  readonly row!: string[];
}
</script>

<style>

</style>
