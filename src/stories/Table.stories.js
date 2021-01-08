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
  isStriped: true,
};
