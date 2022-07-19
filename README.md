# react-gauge-ultimate

> Powerful gauge chart for React

[![NPM](https://img.shields.io/npm/v/react-gauge-ultimate.svg)](https://www.npmjs.com/package/react-gauge-ultimate) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![react-gauge-ultimate Banner](https://user-images.githubusercontent.com/76048512/117805590-6379b780-b26e-11eb-8b0f-c7aa525fa899.png)

## Install

```bash
npm i react-gauge-ultimate
```

or

```bash
yarn add react-gauge-ultimate
```

## Usage

```jsx
import React from 'react'

import { Gauge } from 'react-gauge-ultimate'
import 'react-gauge-ultimate/dist/index.css'

const App = () => {
  return (
    <Gauge
      id='gauge id'
      className='Gauge'
      label='label text'
      percent={1}
      darkMode={false}
    />
  )
}

export default App
```

## API

> `Warning:` Do not use the same `id` for multiple charts, as it will put multiple charts in the same container

| Name            | PropType                    | Description                                                                                                         | Default value          |
| --------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| id              | PropTypes.string.isRequired | Used for the identification of the div surrounding the chart                                                        |                        |
| className       | PropTypes.string            | Add `className` to the div container                                                                                |                        |
| style           | PropTypes.object            | Add `style` to the div container                                                                                    | { width: '100%' }      |
| darkMode        | PropTypes.bool              | Set dark mode style to Gauge                                                                                        | false                  |
| marginInPercent | PropTypes.number            | Margin for the chart inside the containing SVG element                                                              | 0.05                   |
| cornerRadius    | PropTypes.number            | Corner radius for the elements in the chart                                                                         | 6                      |
| nrOfLevels      | PropTypes.number            | The number of elements displayed in the arc                                                                         | 3                      |
| percent         | PropTypes.number            | The number where the pointer should point to (between 0 and 1)                                                      | 0.4                    |
| label           | PropTypes.string            | The text that displays above the percent                                                                            | ''                     |
| arcPadding      | PropTypes.number            | The distance between the elements in the arc                                                                        | 0.05                   |
| arcWidth        | PropTypes.number            | The thickness of the arc                                                                                            | 0.2                    |
| colors          | PropTypes.array             | An array of colors in HEX format displayed in the arc                                                               | ["#00FF00", "#FF0000"] |
| textColor       | PropTypes.string            | The color of the text                                                                                               | "#FFFFFF"              |
| needleColor     | PropTypes.string            | The color of the needle triangle                                                                                    | "#464A4F"              |
| needleBaseColor | PropTypes.string            | The color of the circle at the base of the needle                                                                   | "#464A4F"              |
| hideText        | PropTypes.bool              | Whether or not to hide the percentage display                                                                       | false                  |
| arcsLength      | PropTypes.array             | An array specifying the length of each individual arc. If this prop is set, the nrOfLevels prop will have no effect | none                   |
| animate         | PropTypes.bool              | Whether or not to animate the needle when loaded                                                                    | true                   |
| animDelay       | PropTypes.number            | Delay in ms before starting the needle animation                                                                    | 500                    |
| animateDuration | PropTypes.number            | Duration in ms for the needle animation                                                                             | 3000                   |
| formatTextValue | PropTypes.func              | Format you own text value (example: value => value+'%')                                                             | null                   |

## License

MIT © [boof-tech](https://github.com/boof-tech)
