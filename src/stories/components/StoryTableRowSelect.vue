<template>
  <div>
    <Table>
      <table-header :headers="headers"/>
      <tbody>
        <table-row-select :columns="row" :isSelected="isSelected"/>
      </tbody>
    </Table>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Table from '../../components/Table.vue';
import TableHeader from '../../components/TableHeader.vue';
import TableRowSelect from '../../components/TableRowSelect.vue';

import { Header } from '../../interfaces';

@Component({
  components: {
    Table,
    TableHeader,
    TableRowSelect,
  },
})
export default class StoryTableRowSelect extends Vue {
  private headers: Header[] = [];

  @Prop({ type: Array, required: true })
  readonly row!: string[];

  @Prop({ default: false })
  readonly isSelected!: boolean;
}
</script>

<style>

</style>
