import React from "react";
import { storiesOf } from "@storybook/react";
import { actions } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Home from "../Home/Home";

storiesOf("Home", module).add("basic", () => <Home></Home>);
