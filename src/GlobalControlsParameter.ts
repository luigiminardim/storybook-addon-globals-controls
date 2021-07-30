import { ArgTypes } from "@storybook/addons";
import { PresetColor } from "@storybook/components";

export type GlobalControlsParameter = {
  variables: ArgTypes;
  presetColors?: PresetColor[];
}