import Notification from '../components/Notification.vue';

export default {
  title: 'Notification',
  component: Notification,
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
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Notification },
  template: '<Notification v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  content: 'Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla.',
};
