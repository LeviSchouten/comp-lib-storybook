import DropDown from '../components/DropDown.vue';

export default {
  title: 'DropDown',
  component: DropDown,
  argTypes: {
    width: { control: { type: 'select', options: ['auto', 'fixed'] } },
    options: { control: { type: 'array' } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DropDown },
  template: '<DropDown v-bind="$props"/>',
});

export const Primary = Template.bind({});
Primary.args = {
  selected: 'Option 0',
  options: ['Option 1', 'Option 2'],
};
