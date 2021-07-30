import React, { useEffect } from "react";
import { GlobalControlsParameter } from "./GlobalControlsParameter";
import {
  useAddonState,
  useChannel,
  useGlobals,
  useParameter,
} from "@storybook/api";
import { AddonPanel, ArgsTable, Args, ArgTypes } from "@storybook/components";
import { ADDON_ID, EVENTS, PARAM_KEY } from "./constants";

type PanelProps = {
  active: boolean;
};

const getDefaultValues = (variables: GlobalControlsParameter["variables"]) =>
  Object.entries(variables).reduce(
    (acc, [key, arg]) => ({ ...acc, [key]: arg?.defaultValue ?? null }),
    {} as Record<string, unknown>
  );

export function Panel(props: PanelProps) {
  const { variables, presetColors } = useParameter<GlobalControlsParameter>(
    PARAM_KEY,
    {
      variables: {},
      presetColors: [],
    }
  );

  const [{ [ADDON_ID]: values }, setGlobals] = useGlobals();
  useEffect(() => {
    const defaultValues = getDefaultValues(variables);
    setGlobals({ [ADDON_ID]: defaultValues });
  }, [variables, setGlobals]);

  const onUpdateArgs = (updatedArgs: Args) => {
    const newValues = { ...values, ...updatedArgs };
    setGlobals({ [ADDON_ID]: newValues });
  };

  const withPresetColors = Object.entries(variables).reduce(
    (acc, [key, arg]) => {
      if (arg?.control?.type !== "color" || arg?.control?.presetColors)
        acc[key] = arg;
      else acc[key] = { ...arg, control: { ...arg.control, presetColors } };
      return acc;
    },
    {} as ArgTypes
  );

  console.log({ values, variables });
  return (
    <AddonPanel {...props}>
      <ArgsTable
        inAddonPanel
        rows={withPresetColors}
        args={values}
        updateArgs={onUpdateArgs}
      />
    </AddonPanel>
  );
}
