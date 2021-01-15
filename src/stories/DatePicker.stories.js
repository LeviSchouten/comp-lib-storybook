import DatePicker from '../components/DatePicker.vue';

export default {
  title: 'DatePicker',
  component: DatePicker,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DatePicker },
  template: '<DatePicker v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'DatePicker',
};
