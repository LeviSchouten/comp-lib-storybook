<template>
  <div>
    <Table>
      <table-header :headers="headers"/>
      <tbody>
        <table-row-select-actions
          :columns="row"
          :isSelected="isSelected"
          :actions="actions"
        />
      </tbody>
    </Table>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Table from '../../components/Table.vue';
import TableHeader from '../../components/TableHeader.vue';
import TableRowSelectActions from '../../components/TableRowSelectActions.vue';

import { Header } from '../../interfaces';

@Component({
  components: {
    Table,
    TableHeader,
    TableRowSelectActions,
  },
})
export default class StoryTableRowSelectActions extends Vue {
  private headers: Header[] = [];

  @Prop({ type: Array, required: true })
  readonly row!: string[];

  @Prop({})
  readonly actions!: string[];

  @Prop({ default: false })
  readonly isSelected!: boolean;
}
</script>

<style>

</style>
