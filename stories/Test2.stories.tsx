import { Meta } from "@storybook/react";

export default {
  title: "Json tester 2",
} as Meta;

export function test() {
  return <h1>Assert that the change of story doesn't affect the globals</h1>;
}
