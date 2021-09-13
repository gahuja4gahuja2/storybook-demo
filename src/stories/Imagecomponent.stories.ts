import { moduleMetadata } from "@storybook/angular";
import { CommonModule } from "@angular/common";
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ImagecomponentComponent } from "src/app/imagecomponent/imagecomponent.component";
import { useArgs } from "@storybook/addons";

// Define the Meta for the story first

export default {
    title: 'Example of Image Component',
    component: ImagecomponentComponent,
} as Meta;

// Define the template for the component

const Template: Story<ImagecomponentComponent> = (args: ImagecomponentComponent) => ({
    component: ImagecomponentComponent,
    props: args,
});

export const NoImageCaption = Template.bind({});
NoImageCaption.args = {
    figCaptionTxt: '',
};

export const WithImageCaption = Template.bind ({});
WithImageCaption.args = {
    figCaptionTxt: 'DET is Deepen Engineering Talent initiative',
};

export const WithFullOpacity = Template.bind ({});
WithFullOpacity.args = {
    imgOpacity: 1 
};

export const WithHalfOpacity = Template.bind ({});
WithHalfOpacity.args = {
    imgOpacity: 0.5
};

export const WithZeroOpacity = Template.bind ({});
WithZeroOpacity.args = {
    imgOpacity: 0
};
