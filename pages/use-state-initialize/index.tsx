import * as React from "react";
import Usestateinitialization from "../../Components/usestate/usestateinitialization";

export default function UseStateTest() {
  const [number, setNumber] = React.useState(0);

  return (
   <Usestateinitialization  />
  );
}
