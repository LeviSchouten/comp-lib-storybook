import Input from '../components/Input.vue';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: [
          'is-primary',
          'is-info',
          'is-success',
          'is-warning',
          'is-danger',
        ],
      },
    },
    size: {
      control: {
        type: 'select',
        options: [
          'is-small',
          'is-normal',
          'is-medium',
          'is-large',
        ],
      },
    },
    type: {
      control: {
        type: 'select',
        options: [
          'text',
          'password',
          'email',
          'tel',
        ],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Input },
  template: '<Input v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {};
