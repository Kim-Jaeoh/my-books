import React from "react";
import styles from "./Layout.module.css";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => (
  <div className={styles.layout}>{children}</div>
);

export default Layout;
