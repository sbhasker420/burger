import React from "react";

import Aux from "../../hoc/Aux";

export default function Layout(props) {
  return (
    <Aux>
      <div>toolbar sidedrawer, backdrop</div>
      <main>{props.children}</main>
    </Aux>
  );
}
