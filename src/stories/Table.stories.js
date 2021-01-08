import Table from './StoryTable.vue';

export default {
  title: 'Table',
  component: Table,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Table },
  template: '<Table v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  headers: [
    { value: 'Name', ascending: true, sortable: true },
    { value: 'Age', ascending: false, sortable: true },
    { value: 'Country', ascending: false, sortable: true },
  ],
  rows: [
    ['John Doe', '32', 'United States'],
    ['Jane Doe', '38', 'United States of america'],
    ['Jane van der Doe', '32', 'United States'],
    ['John Doe', '32', 'United States'],
  ],
};
