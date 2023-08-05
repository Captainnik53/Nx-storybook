import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { MatButtonModule } from '@angular/material/button';
const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'ButtonComponent',
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [MatButtonModule],
    }),
  ],
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  render: (args: ButtonComponent) => ({
    props: args,
  }),
  args: {
    disabled: false,
    buttonText: 'This is simple button!',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
    },
  },
};

export const Disabled: Story = {
  render: (args: ButtonComponent) => ({
    props: args,
  }),
  args: {
    disabled: true,
    buttonText: 'This is disabled button!',
  },
};
