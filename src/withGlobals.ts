import { ADDON_ID } from './constants';
import { StoryFn, StoryContext } from "@storybook/addons";
import { ReactNode } from 'react';

export const withGlobals =
  (decorated: (Story: any, values: Record<string, any>, context: StoryContext) => any) =>
    (story: any, context: StoryContext) => {
      const values = context.globals[ADDON_ID]
      return decorated(story, values, context);
    }