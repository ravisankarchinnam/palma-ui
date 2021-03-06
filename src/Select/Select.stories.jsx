import React from "react";
import { Select } from "./Select";
import { MenuItem } from "../MenuItem";
import { boolean, select } from "@storybook/addon-knobs";
import Readme from "./README.md";

export default {
  title: "Components/Select",
  parameters: {
    readme: {
      // Show readme before story
      content: Readme
    }
  }
};

export const selectDefault = () => (
  <Select
    id={"some-id"}
    labelId={"some-id"}
    defaultValue={0}
    disabled={boolean("Disabled", false)}
    color={select("Color", ["primary", "secondary"], "secondary")}
  >
    <MenuItem key={0} value={0}>
      One
    </MenuItem>
    <MenuItem key={1} value={1}>
      Two
    </MenuItem>
    <MenuItem key={2} value={2}>
      Three
    </MenuItem>
  </Select>
);

export const selectWithCustomValueRender = () => {
  const renderValue = value => {
    return `Picked value ${value}`;
  };
  return (
    <Select
      id={"some-id"}
      labelId={"some-id"}
      defaultValue={0}
      disabled={boolean("Disabled", false)}
      renderValue={renderValue}
      color={select("Color", ["primary", "secondary"], "secondary")}
    >
      <MenuItem key={0} value={0}>
        One
      </MenuItem>
      <MenuItem key={1} value={1}>
        Two
      </MenuItem>
      <MenuItem key={2} value={2}>
        Three
      </MenuItem>
    </Select>
  );
};
