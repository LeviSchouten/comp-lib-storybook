<template>
    <tr>
      <td><input type="checkbox" :checked="isSelected" @click="handleSelectClick"></td>
      <td v-for="column in columns" :key="column">{{ column }}</td>
      <td>
        <drop-down-icon
          :options="actions"
          :selected="selected"
          @onSelect="handleActionsClick"
        >
          <i class="fas fa-ellipsis-h"></i>
        </drop-down-icon>
      </td>
    </tr>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import TableRowSelect from './TableRowSelect.vue';
import DropDownIcon from './DropDownIcon.vue';
import DropDown from './DropDown.vue';

import { Action } from '../interfaces';

@Component({
  components: {
    DropDownIcon,
    DropDown,
  },
})
export default class TableRowSelectActions extends TableRowSelect {
  @Prop({})
  readonly selected!: string;

  @Prop({})
  readonly actions!: string[];

  public handleActionsClick(option: string): void {
    const action: Action = {
      option,
      row: this.columns,
    };
    this.$emit('onAction', action);
  }
}
</script>

<style scroped>
i {
  padding-left: 10px;
  font-size: 0.9rem;
  line-height: 1.9;
  cursor: pointer;
}
</style>
