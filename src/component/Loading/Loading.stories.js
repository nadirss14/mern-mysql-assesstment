import React from "react";
import { storiesOf } from "@storybook/react";
import { actions } from "@storybook/addon-actions";
import { LinkTo } from "@storybook/addon-links";

import Loading from "./Loading";

storiesOf("Loading", module).add("Circle", () => <Loading></Loading>);
