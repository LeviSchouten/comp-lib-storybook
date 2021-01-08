<template>
  <tr>
    <td v-for="column in columns" :key="column">{{ column }}</td>
  </tr>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class TableRow extends Vue {
  @Prop({ required: true, type: Array })
  readonly columns!: string[];
}
</script>

<style>

</style>
