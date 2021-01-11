export interface Header {
  value: string;
  ascending: boolean;
  sortable: boolean;
}

export interface Row {
  columns: string[];
  isSelected: boolean;
}

export interface Action {
  option: string;
  row: string[];
}
