import { withGlobals } from "../src/withGlobals";
import { GlobalControlsParam } from "../src/GlobalControlsParam";

export const globalTypes = {
  uncontrolled: {
    name: "Uncontrolled",
    description: "Should not have any controls.",
  },
  boolean: {
    name: "Boolean",
    description: "Boolean Description",
    defaultValue: true,
    control: { type: "boolean" },
  },
  number: {
    name: "Number",
    description: "Number Description",
    defaultValue: 8,
    control: { type: "number", min: 6, max: 10, step: 2 },
  },
  range: {
    name: "Range",
    description: "Range Description",
    defaultValue: 8,
    control: { type: "range", min: 6, max: 10, step: 0.5 },
  },
  object: {
    name: "Object",
    description: "Object Description",
    defaultValue: { hasDefaultValue: true },
    control: { type: "object" },
  },
  date: {
    name: "Date",
    description: "Date Description",
    control: { type: "date" },
  },
  text: {
    name: "Text",
    description: "Text Descrition",
    defaultValue:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    control: { type: "text" },
  },
  color: {
    name: "Color",
    description: "Color Description",
    defaultValue: "#088",
    control: { type: "color" },
  },
};

export const parameters = {
  globalControls: {
    presetColors: [
      { color: "#ff4785", title: "Coral" },
      "rgba(0, 159, 183, 1)",
      "#fe4a49",
    ],
  } as GlobalControlsParam,
};

export const decorators = [
  withGlobals((Story, globalValues) => (
    <div>
      {JSON.stringify(globalValues, null, 2)}
      <Story />
    </div>
  )),
];
