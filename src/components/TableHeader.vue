<template>
  <thead>
    <tr>
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
import { Component, Vue, Prop } from 'vue-property-decorator';

interface Header {
  value: string;
  ascending: boolean;
  sortable: boolean;
}

@Component
export default class TableHeader extends Vue {
  @Prop({ required: true, type: Array })
  readonly headers!: Header[];

  public triggerSort(header: Header): void {
    this.$emit('onSort', header);
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
