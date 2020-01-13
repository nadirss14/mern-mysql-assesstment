import React from "react";
import { storiesOf } from "@storybook/react";
import { actions } from "@storybook/addon-actions";
import { LinkTo } from "@storybook/addon-links";

import Error from "./Error";

storiesOf("Error", module).add("default", () => (
  <Error Error='Mensaje de Error'></Error>
));
