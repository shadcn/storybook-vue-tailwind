import { action } from '@storybook/addon-actions';

import Button from '../src/components/Button';

export default {
  title: 'Button',
  component: Button,
};

export const Default = () => ({
  components: { Button },
  template: '<Button>Button</Button>',
});

export const Red = () => ({
  components: { Button },
  template: '<Button color="red">Red Button</Button>',
});

export const Blue = () => ({
  components: { Button },
  template: '<Button color="blue">Blue Button</Button>',
});
