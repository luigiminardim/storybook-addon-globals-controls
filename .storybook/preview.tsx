import { withGlobals } from "../src/withGlobals";
import { GlobalControlsParam } from "../src/GlobalControlsParam";

export const globalTypes = {
  uncontrolled: {
    name: "Uncontrolled",
    description: "Should not have any controls.",
  },
  visible: {
    name: "Visible",
    description: "Should appear in panel but it is uncontrolled.",
    defaultValue: true,
    control: false,
  },
  number: {
    name: "Number",
    description:
      "Should have a default value, a min and max values, and a step.",
    defaultValue: 8,
    control: { type: "number", min: 6, max: 10, step: 2 },
  },
  text: {
    name: "Text",
    defaultValue: "Should not have a description.",
    control: { type: "text" },
  },
  color: {
    name: "Color",
    description: "Should show some preset colors.",
    defaultValue: "#088",
    control: { type: "color" },
  },
};

export const parameters = {
  globalsControls: {
    presetColors: [
      { color: "#ff4785", title: "Coral" },
      "rgba(0, 159, 183, 1)",
      "#fe4a49",
    ],
  } as GlobalControlsParam,
};

const withDisplayGlobals = withGlobals((Story, globalValues) => (
  <div>
    {JSON.stringify(globalValues, null, 2)}
    <Story />
  </div>
));

export const decorators = [withDisplayGlobals];
