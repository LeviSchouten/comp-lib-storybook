<template>
  <div>
    <Table>
      <table-header-select :headers="headers" @onSort="onSort" :isChecked="isChecked"/>
      <tbody>
        <table-row v-for="row in rows" :key="row.join('-')" :columns="row"/>
      </tbody>
    </Table>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Table from '../../components/Table.vue';
import TableHeaderSelect from '../../components/TableHeaderSelect.vue';
import TableRow from '../../components/TableRow.vue';

import { Header } from '../../interfaces';

@Component({
  components: {
    Table,
    TableHeaderSelect,
    TableRow,
  },
})
export default class StoryTableHeader extends Vue {
  private rows = [];

  @Prop()
  readonly header1!: Header;

  @Prop()
  readonly header2!: Header;

  @Prop()
  readonly header3!: Header;

  @Prop({ default: false })
  readonly isChecked!: boolean;

  public handleSelectClick(): void {
    this.$emit('onCheck');
  }

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