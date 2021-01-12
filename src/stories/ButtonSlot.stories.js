import ButtonSlot from '../components/ButtonSlot.vue';

export default {
  title: 'ButtonIcon',
  component: ButtonSlot,
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
  components: { ButtonSlot },
  template: '<ButtonSlot v-bind="$props" > <i class="fas fa-info-circle"></i> </ButtonSlot>',
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Info',
};
