import Table from './components/StoryTableHeader.vue';

export default {
  title: 'TableHeader',
  component: Table,
  argTypes: {
    header1: {
      type: 'object',
    },
    header2: {
      type: 'object',
    },
    header3: {
      type: 'object',
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Table },
  template: '<Table v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  header1: { value: 'Name', ascending: false, sortable: true },
  header2: { value: 'Age', ascending: false, sortable: false },
  header3: { value: 'Country', ascending: false, sortable: false },
};
