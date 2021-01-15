import AdvancedTable from './components/AdvancedTable.vue';

export default {
  title: 'Collection/AdvancedTable',
  component: AdvancedTable,
  argTypes: {
    actions: {
      control: {
        type: 'check',
        options: [
          'Download asbuilt',
          'Download letter',
          'Upload akkoordverklaring',
        ],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AdvancedTable },
  template: '<AdvancedTable v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  canViewTable: true,
  canFilterTable: true,
  canCommitAction: true,
};
