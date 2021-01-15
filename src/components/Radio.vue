<template>
  <div class="control">
    <label v-for="option in options" :key="option" class="radio">
      <input type="radio" :checked="checked.includes(option)" :value="option" @click="handleClick">
      {{ option }}
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class Radio extends Vue {
  @Prop({ required: true })
  readonly options!: string[];

  @Prop({})
  readonly checked!: string[];

  public handleClick(event: Event): void {
    const { value } = event.target as HTMLInputElement;
    this.$emit('onSelect', value);
  }
}
</script>

<style scoped>
.control {
  display: flex;
  flex-direction: column;
}

.radio + .radio {
  margin-left: 0;
}
</style>
