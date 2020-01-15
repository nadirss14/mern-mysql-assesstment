import React from "react";
import { storiesOf } from "@storybook/react";
import { actions } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Navbar from "./Navbar";

storiesOf("Navbar", module)
  .add("Light", () => <Navbar styles='Header__light'></Navbar>)
  .add("Dark", () => <Navbar styles='Header__dark'></Navbar>);
