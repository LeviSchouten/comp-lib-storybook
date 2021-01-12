<template>
  <thead>
    <tr>
      <th><input type="checkbox" :checked="isChecked" @click="handleSelectClick"></th>
      <th v-for="header in headers" :key="header.value">
        {{ header.value }}
        <span v-if="header.sortable" class="icon-button" @click="() => triggerSort(header)">
          <i v-if="header.ascending" class="fas fa-chevron-up"></i>
          <i v-else class="fas fa-chevron-down"></i>
        </span>
      </th>
    </tr>
  </thead>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import TableHeader from './TableHeader.vue';

@Component
export default class TableHeaderSelect extends TableHeader {
  @Prop({ default: false })
  readonly isChecked!: boolean;

  public handleSelectClick(): void {
    this.$emit('onCheck');
  }
}
</script>

<style scoped>
.icon-button {
  cursor: pointer;
  padding-left: 5px;
  font-size: 0.8rem;
}
</style>
