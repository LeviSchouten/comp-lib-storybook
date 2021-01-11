import Radio from '../components/Radio.vue';

export default {
  title: 'Radio',
  component: Radio,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Radio },
  template: '<Radio v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  options: ['Sales', 'Installed', 'Design'],
  checked: ['Sales'],
};
