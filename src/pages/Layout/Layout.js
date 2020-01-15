import React from "react";

function Layout(props) {
  return (
    <React.Fragment>
      <section>{props.children}</section>
    </React.Fragment>
  );
}

export default Layout;
