import { fn } from '@storybook/test';
import Navigation from '../components/Navigation';

export default {
  title: 'Example/Navigation',
  component: Navigation,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
    args: { LoggedIn: fn() },
  },
};
export const LoggedIn = {
 };