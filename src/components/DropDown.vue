<template>
  <div
    class="dropdown"
    :class="{ 'is-active': isActive && !isDisabled }"
  >
    <div class="dropdown-trigger">
      <button
        class="button"
        @click="toggleIsActive"
        :disabled="isDisabled"
        :style="style"
      >
        <span>{{ selected }}</span>
        <i class="fas fa-chevron-down"></i>
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

@Component
export default class DropDown extends Vue {
  private isActive = false;

  @Prop({ required: true })
  readonly selected!: string;

  @Prop({ type: Array })
  readonly options!: string[];

  @Prop({ type: Boolean, default: false })
  readonly disabled!: boolean;

  @Prop({
    default: 'auto',
    validator: (value) => ['auto', 'fixed'].indexOf(value) !== -1,
  })
  readonly width!: string;

  get style(): object {
    if (this.width === 'fixed') return { width: this.calcWidth };
    return {};
  }

  get isDisabled(): boolean {
    if (this.disabled) return true;
    if (!this.options.length) return true;
    return false;
  }

  get calcWidth(): string {
    let max = this.selected.length;
    this.options.forEach((option) => {
      if (option.length > max) max = option.length;
    });
    if (max < 5) max = 5;
    return `${max + 5}ch`;
  }

  public toggleIsActive(): void {
    this.isActive = !this.isActive;
  }

  public selectOption(option: string): void {
    this.$emit('onChange', option);
  }
}
</script>

<style scoped>
i {
  padding-left: 10px;
  font-size: 0.9rem;
}

.button {
  justify-content: space-between;
}
</style>
