import { StoryFn, StoryContext } from "@storybook/addons";
export const withGlobals =
  (decorated: (Story: any, values: Record<string, any>, context: StoryContext) => any) =>
    (story: any, context: StoryContext) => {
      const values = context.globals
      return decorated(story, values, context);
    }