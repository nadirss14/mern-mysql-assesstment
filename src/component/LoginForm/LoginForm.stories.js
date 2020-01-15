import React from "react";
import { storiesOf } from "@storybook/react";
import { actions } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import LoginForm from "./LoginForm";

storiesOf("LoginForm", module).add("Light", () => <LoginForm></LoginForm>);
//   .add("Dark", () => <Navbar styles='Header__dark'></Navbar>);
