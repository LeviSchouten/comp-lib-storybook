import TableRow from './components/StoryTableRow.vue';

export default {
  title: 'TableRow',
  component: TableRow,
  argTypes: {
    row: { control: { type: 'array' } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TableRow },
  template: '<TableRow v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  row: ['John Doe', '32', 'United States'],
};
