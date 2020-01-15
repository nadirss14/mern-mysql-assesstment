import React from "react";
import { storiesOf } from "@storybook/react";
import { actions } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Register from "../Register/Register";

storiesOf("Login", module).add("basic", () => <Register></Register>);
