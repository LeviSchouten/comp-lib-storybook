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
        <span>{{ selected }}</span>
        <i v-if="isUp" class="fas fa-chevron-up"></i>
        <i v-else class="fas fa-chevron-down"></i>
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
import '../directives';

@Component
export default class DropDown extends Vue {
  private isActive = false;

  @Prop({ required: true })
  readonly selected!: string;

  @Prop({ type: Array })
  readonly options!: string[];

  @Prop({ default: false })
  readonly isDisabled!: boolean;

  @Prop({ default: false })
  readonly isUp!: boolean;

  @Prop({
    default: 'auto',
    validator: (value) => ['auto', 'fixed'].indexOf(value) !== -1,
  })
  readonly width!: string;

  get classes(): object {
    return {
      'is-up': this.isUp,
      'is-active': this.isActive && !this.disabled,
    };
  }

  get style(): object {
    if (this.width === 'fixed') return { width: this.calcWidth };
    return {};
  }

  get disabled(): boolean {
    if (this.isDisabled) return true;
    if (!this.options.length) return true;
    return false;
  }

  get calcWidth(): string {
    let max = this.selected.length;
    this.options.forEach((option) => {
      if (option.length > max) max = option.length;
    });
    if (max < 5) max = 5;
    if (max > 5 && max < 24) max += 4;
    return `${max}ch`;
  }

  public toggleIsActive(): void {
    this.isActive = !this.isActive;
  }

  public onOuterClick(): void {
    this.isActive = false;
  }

  public selectOption(option: string): void {
    this.$emit('onSelect', option);
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
