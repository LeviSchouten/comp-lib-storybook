<template>
  <div class="control" :class="classes">
    <input
      class="input"
      :class="classes"
      :type="type"
      :disabled="isDisabled"
      :placeholder="placeholder"
      v-model="value"
    >
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Watch,
} from 'vue-property-decorator';

@Component({})
export default class Input extends Vue {
  @Prop({
    default: 'text',
    validator: (value) => [
      'text',
      'password',
      'email',
      'tel',
    ].indexOf(value) !== -1,
  })
  readonly type!: string;

  @Prop({
    default: '',
    validator: (value) => [
      '',
      'is-primary',
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
  readonly isLoading!: boolean;

  @Prop({ default: false })
  readonly isDisabled!: boolean;

  @Prop({ default: false })
  readonly isRounded!: boolean;

  @Prop({ required: true })
  readonly placeholder!: string;

  private value = '';

  get classes(): object {
    return {
      'is-primary': this.color === 'is-primary',
      'is-info': this.color === 'is-info',
      'is-success': this.color === 'is-success',
      'is-warning': this.color === 'is-warning',
      'is-danger': this.color === 'is-danger',
      'is-small': this.size === 'is-small',
      'is-normal': this.size === 'is-normal',
      'is-medium': this.size === 'is-medium',
      'is-large': this.size === 'is-large',
      'is-rounded': this.isRounded,
      'is-loading': this.isLoading,
    };
  }

  @Watch('value')
  onValueChange(): void {
    this.$emit('onChange', this.value);
  }
}
</script>

<style>

</style>
