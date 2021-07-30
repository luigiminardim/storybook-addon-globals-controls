import { GlobalControlsParameter } from './../src/GlobalControlsParameter';
import { ArgType } from "@storybook/api";

export const parameters = {
  globalControls: {
    variables: {
      text: {
        name: 'Texto',
        description: '',
        defaultValue: '#333',
        control: { type: 'text' }
      },
      color: {
        name: 'Cor',
        description: '',
        defaultValue: '#333',
        control: { type: 'color' }
      },
    },
    presetColors: [
      { color: '#ff4785', title: 'Coral' },
      'rgba(0, 159, 183, 1)',
      '#fe4a49',
    ]
  } as GlobalControlsParameter,
}