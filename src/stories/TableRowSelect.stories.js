import TableRowSelect from './components/StoryTableRowSelect.vue';

export default {
  title: 'TableRowSelect',
  component: TableRowSelect,
  argTypes: {
    row: { control: { type: 'array' } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TableRowSelect },
  template: '<TableRowSelect v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  row: ['John Doe', '32', 'United States'],
};
