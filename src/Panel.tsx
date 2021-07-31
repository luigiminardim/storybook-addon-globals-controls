import React, { useEffect, useMemo } from "react";
import { GlobalControlsParam } from "./GlobalControlsParam";
import { useGlobals, useGlobalTypes, useParameter } from "@storybook/api";
import {
  AddonPanel,
  ArgsTable,
  ArgTypes,
  PresetColor,
} from "@storybook/components";
import { PARAM_KEY } from "./constants";

type PanelProps = {
  active: boolean;
};

const filterUncontrolledTypes = (globalTypes: ArgTypes) =>
  Object.entries(globalTypes).reduce((acc, [key, arg]) => {
    if (arg.control !== undefined) acc[key] = arg;
    return acc;
  }, {} as ArgTypes);

const addPresetColors = (globalTypes: ArgTypes, presetColors: PresetColor[]) =>
  Object.entries(globalTypes).reduce((acc, [key, arg]) => {
    if (arg?.control?.type !== "color" || arg?.control?.presetColors)
      acc[key] = arg;
    else acc[key] = { ...arg, control: { ...arg.control, presetColors } };
    return acc;
  }, {} as ArgTypes);

const getRows = (globalTypes: ArgTypes, presetColors: PresetColor[]) =>
  addPresetColors(filterUncontrolledTypes(globalTypes), presetColors);

export function Panel(props: PanelProps) {
  const { presetColors } = useParameter<GlobalControlsParam>(PARAM_KEY, {
    presetColors: [],
  });
  const globalTypes = useGlobalTypes();
  const [globals, updateGlobals] = useGlobals();

  const rows = useMemo(
    () => getRows(globalTypes, presetColors),
    [globalTypes, presetColors]
  );
  return (
    <AddonPanel {...props}>
      <ArgsTable
        inAddonPanel
        rows={rows}
        args={globals}
        updateArgs={updateGlobals}
      />
    </AddonPanel>
  );
}
