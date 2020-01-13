import React from "react";
import { storiesOf } from "@storybook/react";
import { actions } from "@storybook/addon-actions";
import { Links } from "@storybook/addon-links";
import NotFound from "./NotFound";

storiesOf("Not Found", module).add("Basic", () => <NotFound></NotFound>);
