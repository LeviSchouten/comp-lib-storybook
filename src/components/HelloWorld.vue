<template>
  <div class="hello">
    <drop-down selected="Option 1" :options="['Option 2', 'Option 3']"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import DropDown from '@/components/DropDown.vue';

@Component({
  components: {
    DropDown,
  },
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">

</style>
