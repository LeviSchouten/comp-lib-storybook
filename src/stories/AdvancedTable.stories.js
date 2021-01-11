import AdvancedTable from './AdvancedTable.vue';

export default {
  title: 'AdvancedTable',
  component: AdvancedTable,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AdvancedTable },
  template: '<AdvancedTable v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  // isStriped: true,
};
