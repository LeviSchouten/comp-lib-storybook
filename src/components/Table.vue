<template>
  <table class="table" :class="classes">
    <slot />
  </table>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class StoryTable extends Vue {
  @Prop({ default: false })
  readonly isStriped!: boolean;

  @Prop({ default: false })
  readonly isBordered!: boolean;

  @Prop({ default: false })
  readonly isHoverable!: boolean;

  @Prop({ default: false })
  readonly isFullwidth!: boolean;

  get classes(): object {
    return {
      'is-bordered': this.isBordered,
      'is-hoverable': this.isHoverable,
      'is-striped': this.isStriped,
      'is-fullwidth': this.isFullwidth,
    };
  }
}
</script>
