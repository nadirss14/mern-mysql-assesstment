import React from "react";
import { storiesOf } from "@storybook/react";
import { actions } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import RegisterForm from "./LoginForm";

storiesOf("RegisterForm", module).add("Light", () => (
  <RegisterForm></RegisterForm>
));
//   .add("Dark", () => <Navbar styles='Header__dark'></Navbar>);
