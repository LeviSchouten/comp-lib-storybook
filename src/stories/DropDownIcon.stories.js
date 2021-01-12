import DropDownIcon from '../components/DropDownIcon.vue';

export default {
  title: 'DropDownIcon',
  component: DropDownIcon,
  argTypes: {
    width: { control: { type: 'select', options: ['auto', 'fixed'] } },
    options: { control: { type: 'array' } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DropDownIcon },
  template: '<DropDownIcon v-bind="$props" > <i class="fas fa-info-circle"></i> </DropDownIcon>',
});

export const Primary = Template.bind({});
Primary.args = {
  selected: 'Option 0',
  options: ['Option 1', 'Option 2'],
};
