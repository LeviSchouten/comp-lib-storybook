<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-one-fifth" />
        <div class="column">
          <drop-down
            :options="multipleActions"
            :selected="selectedAction"
            @onSelect="handleMultipleAction"
            width="fixed"
          />
          <Button
            label="Go"
            :isDisabled="!actions.includes(selectedAction) || selected.length === 0"
            @onClick="handleAction"
          />
        </div>
      </div>
      <div class="columns">
        <div class="column is-one-fifth">
          <p class="has-text-weight-semibold mb-1 mt-4">Filter by text</p>
          <Input placeholder="Search..." @onChange="handleInputChange"/>
          <p class="has-text-weight-semibold mb-1 mt-2">Filter by status</p>
          <Radio :options="statuses" :checked="checked" @onSelect="handleCheck"/>
        </div>
        <div class="column">
          <Table :isHoverable="true" :isStriped="true">
            <table-header-select
              :headers="headers"
              :isChecked="multipleChecked"
              @onSort="sortRows"
              @onCheck="handleMultipleSelect"
            />
            <tbody>
              <table-row-select-actions
                v-for="row in rows"
                v-show="filteredRows.includes(row[0])"
                :key="row.join('-')"
                :columns="row"
                :actions='actions'
                :isSelected="selected.includes(row[0])"
                @onSelect="handleSelect"
                @onAction="handleRowAction"
              />
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Table from '../components/Table.vue';
import TableHeaderSelect from '../components/TableHeaderSelect.vue';
import TableRowSelectActions from '../components/TableRowSelectActions.vue';
import DropDown from '../components/DropDown.vue';
import Input from '../components/Input.vue';
import Radio from '../components/Radio.vue';
import Button from '../components/Button.vue';

import { Action, Header, Row } from '../interfaces';

@Component({
  components: {
    Table,
    TableHeaderSelect,
    TableRowSelectActions,
    DropDown,
    Input,
    Radio,
    Button,
  },
})
export default class AdvancedTable extends Vue {
  private headers = [
    { value: 'Address', ascending: false, sortable: true },
    { value: 'Name', ascending: false, sortable: false },
    { value: 'Email', ascending: false, sortable: false },
    { value: 'Phone', ascending: false, sortable: false },
    { value: 'Status', ascending: false, sortable: false },
    { value: '', ascending: false, sortable: false },
  ]

  private rows = [
    ['4872  Nixon Avenue', 'M. Macdonald', 'mmacdonald@gmail.com', '0123456789', 'Sales'],
    ['1235  Mutton Town Road', 'J.J. Rees', 'jjrees@gmail.com', '0123456789', 'Installed'],
    ['3469  Point Street', 'D. Knowles', 'dknowles@gmail.com', '0123456789', 'Installed'],
    ['1687  Eastland Avenue', 'G. Hyde', 'ghyde@gmail.com', '0123456789', 'Design'],
  ]

  private statuses = ['Installed', 'Sales', 'Design'];

  private actions = ['Download asbuilt', 'Upload akkoordverklaring'];

  private selectedAction = 'Select action';

  private checked: string[] = [];

  private multipleChecked = false;

  private selected: string[] = [];

  private filterValue = '';

  get multipleActions(): string[] {
    return this.actions.filter((action) => action !== this.selectedAction);
  }

  get filteredRows(): string[] {
    let rows: string[][] = [];
    if (this.checked.length === 0) this.checked[0] = '';
    if (this.checked.length > 1 && this.checked.includes('')) {
      const index = this.checked.indexOf('');
      this.checked.splice(index, 1);
    }
    this.rows.forEach((row) => {
      this.checked.forEach((c) => {
        if (row[4].includes(c)) rows.push(row);
      });
    });

    rows = rows.filter((row) => row.join(' ').toLowerCase().includes(this.filterValue.toLowerCase()));

    this.selected = this.selected.filter((s) => rows.some((row) => row[0] === s));

    return rows.reduce((acc, row) => {
      acc.push(row[0]);
      return acc;
    }, []);
  }

  public handleInputChange(event: string): void {
    this.filterValue = event;
  }

  public handleCheck(event: string): void {
    const index = this.checked.indexOf(event);
    if (index === -1) this.checked.push(event);
    else this.checked.splice(index, 1);
  }

  public sortRows(header: Header): void {
    this.rows = this.rows.sort((a, b) => {
      if (a[0] > b[0]) return -1;
      if (a[0] < b[0]) return 1;
      return 0;
    });

    if (header.ascending) this.rows.reverse();

    const index = this.headers.findIndex((h) => h.value === header.value);
    this.headers[index].ascending = !this.headers[index].ascending;
  }

  public handleAction(): void {
    console.log(this.selected);
    console.log(this.selectedAction);
  }

  public handleSelect(row: Row): void {
    if (!row.isSelected) this.selected.push(row.columns[0]);
    if (row.isSelected) {
      const index = this.selected.indexOf(row.columns[0]);
      this.selected.splice(index, 1);
    }
  }

  public handleRowAction(action: Action): void {
    console.log(action);
    console.log(this.selected);
  }

  public handleMultipleAction(action: string): void {
    this.selectedAction = action;
  }

  public handleMultipleSelect(): void {
    if (this.multipleChecked) this.selected = [];
    else this.selected = [...this.filteredRows];
    this.multipleChecked = !this.multipleChecked;
  }
}
</script>

<style>
</style>
