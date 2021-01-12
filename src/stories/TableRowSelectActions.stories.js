import TableRowSelectActions from './components/StoryTableRowSelectActions.vue';

export default {
  title: 'TableRowSelectActions',
  component: TableRowSelectActions,
  argTypes: {
    row: { control: { type: 'array' } },
    actions: { control: { type: 'array' } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TableRowSelectActions },
  template: '<TableRowSelectActions v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  row: ['John Doe', '32', 'United States'],
  actions: ['Download', 'Upload', 'Edit', 'Delete'],
};
