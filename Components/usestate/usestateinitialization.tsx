import * as React from "react";
import styles from "./usestateinitialization.module.css";
import { get } from "http";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

export default function Usestateinitialization() {
  // const [number, setNumber] = React.useState(0);
  // const [number, setNumber] = React.useState(getInitialValue());
  const [number, setNumber] = React.useState(() => getInitialValue());

  return (
    <div className={styles.main}>
      <input type="number" value={number} className={styles.input} />

      <button className={styles.button} onClick={() => setNumber(number + 1)}>
        Click me
      </button>
    </div>
  );
}

function getInitialValue() {
  return 0;
}
