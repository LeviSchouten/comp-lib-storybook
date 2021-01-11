<template>
  <div class="notification" :class="classes">
    <button class="delete" @click="handleClick"></button>
    {{ content }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class Button extends Vue {
  @Prop({
    default: 'is-info',
    validator: (value) => [
      'is-primary',
      'is-link',
      'is-info',
      'is-success',
      'is-warning',
      'is-danger',
    ].indexOf(value) !== -1,
  })
  readonly color!: string;

  @Prop({ default: false })
  readonly isLight!: boolean;

  @Prop({ required: true })
  readonly content!: string;

  get classes(): object {
    return {
      'is-primary': this.color === 'is-primary',
      'is-link': this.color === 'is-link',
      'is-info': this.color === 'is-info',
      'is-success': this.color === 'is-success',
      'is-warning': this.color === 'is-warning',
      'is-danger': this.color === 'is-danger',
      'is-light': this.isLight,
    };
  }

  public handleClick(event: Event): void {
    this.$emit('onClose', event);
  }
}
</script>

<style>

</style>
