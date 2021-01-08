<template>
  <div class="table-container">
    <table class="table is-striped">
      <slot />
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class StoryTable extends Vue {}
</script>
