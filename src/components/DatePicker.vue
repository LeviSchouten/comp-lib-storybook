<template>
  <input type="date" class="date" @change="handleChange" v-model="selectedDate">
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Date extends Vue {
  private selectedDate = '';

  public handleChange(): void {
    this.$emit('onChange', this.selectedDate);
  }
}
</script>

<style>
.date {
  font-size: 1.1rem;
}
</style>
