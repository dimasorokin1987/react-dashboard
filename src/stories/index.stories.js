import React from 'react';
import {action} from '@storybook/addon-actions';
import {Button} from '@storybook/react/demo';
//import {storiesOf} from '@storybook/react';
import {withKnobs, text, boolean, number} from "@storybook/addon-knobs";
 

export default {
    title: 'Button' ,
    //component: Button,
    decorators: [withKnobs],
    parameters: {
        notes: 'component notes: A small button component'
        //notes: { disabled: true }
    },
};

export const withTextAndAction = () => (
    <Button
        onClick={action('button-click')}
    >Hello Storybook</Button>
);

export const buttonWithEmoji = () => (
  <Button onClick={action('button-click')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

buttonWithEmoji.story = {
    parameters: {
      notes: 'story notes button with emoji',
      //notes: { disabled: true }
    },
};

export const withParameters = () => (
    <Button
        disabled={boolean("Disabled", false)}
        onClick={action('button-click')}
    >
        {text("Label", "Hello Storybook")}
    </Button>
);
buttonWithEmoji.story = {
    parameters: {
      notes: 'story notes button with emoji',
      //notes: { disabled: true }
    },
};

// Knobs as dynamic variables.
export const asDynamicVariables = () => {
    const name = text("Name", "James");
    const age = number("Age", 35);
    const content = `I am ${name} and I'm ${age} years old.`;
  
    return <div>{content}</div>;
};

// storiesOf('Button', module)
// .addDecorator(withKnobs)
// .addParameters({ notes: someNotes });