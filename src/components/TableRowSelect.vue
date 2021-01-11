<template>
  <tr>
    <td><input type="checkbox" :checked="isSelected" @click="handleSelectClick"></td>
    <td v-for="column in columns" :key="column">{{ column }}</td>
  </tr>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import TableRow from './TableRow.vue';

import { Row } from '../interfaces';

@Component
export default class TableRowSelect extends TableRow {
  @Prop({ required: true, type: Array })
  readonly columns!: string[];

  @Prop({ default: false })
  readonly isSelected!: boolean;

  public handleSelectClick(): void {
    const row: Row = {
      isSelected: this.isSelected,
      columns: this.columns,
    };
    this.$emit('onSelect', row);
  }
}
</script>

<style>

</style>
