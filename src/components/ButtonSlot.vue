<template>
  <button
    class="button"
    :class="classes"
    :disabled="isDisabled"
    @click="handleClick"
  >
    {{ label }}
    <div class="slot"><slot/></div>
  </button>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import Button from './Button.vue';

@Component({})
export default class ButtonSlot extends Button {
  @Prop({ required: false })
  readonly label!: string;
}
</script>

<style scoped>
.slot {
  padding-left: 10px;
}
</style>
