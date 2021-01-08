import Button from '../components/Button.vue';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: [
          'is-dark',
          'is-primary',
          'is-link',
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
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<Button v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
};
