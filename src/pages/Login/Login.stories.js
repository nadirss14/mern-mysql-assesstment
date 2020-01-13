import React from "react";
import { storiesOf } from "@storybook/react";
import { actions } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Login from "../Login/Login";

storiesOf("Login", module).add("basic", () => <Login></Login>);
