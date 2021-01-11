<template>
  <div
    class="dropdown"
    :class="classes"
    v-outer-click="onOuterClick"
  >
    <div class="dropdown-trigger">
      <button
        class="button"
        @click="toggleIsActive"
        :disabled="disabled"
        :style="style"
      >
        <slot />
      </button>
    </div>
    <div class="dropdown-menu">
      <div class="dropdown-content">
        <a
          v-for="option in options"
          :key="option"
          class="dropdown-item"
          @click="() => selectOption(option)"
        >
          {{ option }}
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import DropDown from './DropDown.vue';
import '../directives';

@Component
export default class DropDownSlot extends DropDown {
  @Prop({})
  readonly selected!: string;
}
</script>

<style scoped>
i {
  padding-left: 10px;
  font-size: 0.9rem;
}

.button {
  padding: 0;
  border: none;
  background-color: inherit;
  cursor: pointer;
}
</style>
