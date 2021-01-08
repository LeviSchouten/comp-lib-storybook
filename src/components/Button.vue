<template>
  <button
    class="button"
    :class="classes"
    :disabled="isDisabled"
    @click="handleClick"
  >{{ label }}</button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  @Prop({ required: true })
  readonly label!: string;

  @Prop({
    default: 'is-info',
    validator: (value) => [
      'is-dark',
      'is-primary',
      'is-link',
      'is-info',
      'is-success',
      'is-warning',
      'is-danger',
    ].indexOf(value) !== -1,
  })
  readonly color!: string;

  @Prop({
    default: 'is-normal',
    validator: (value) => [
      'is-small',
      'is-normal',
      'is-medium',
      'is-large',
    ].indexOf(value) !== -1,
  })
  readonly size!: string;

  @Prop({ default: false })
  readonly isLight!: boolean;

  @Prop({ default: false })
  readonly isOutlined!: boolean;

  @Prop({ default: false })
  readonly isRounded!: boolean;

  @Prop({ default: false })
  readonly isFullwidth!: boolean;

  @Prop({ default: false })
  readonly isLoading!: boolean;

  @Prop({ default: false })
  readonly isDisabled!: boolean;

  get classes(): object {
    return {
      'is-dark': this.color === 'is-dark',
      'is-primary': this.color === 'is-primary',
      'is-link': this.color === 'is-link',
      'is-info': this.color === 'is-info',
      'is-success': this.color === 'is-success',
      'is-warning': this.color === 'is-warning',
      'is-danger': this.color === 'is-danger',
      'is-small': this.size === 'is-small',
      'is-normal': this.size === 'is-normal',
      'is-medium': this.size === 'is-medium',
      'is-large': this.size === 'is-large',
      'is-light': this.isLight,
      'is-outlined': this.isOutlined,
      'is-rounded': this.isRounded,
      'is-fullwidth': this.isFullwidth,
      'is-loading': this.isLoading,
    };
  }

  public handleClick(event: Event): void {
    this.$emit('onClick', event);
  }
}
</script>

<style>

</style>
