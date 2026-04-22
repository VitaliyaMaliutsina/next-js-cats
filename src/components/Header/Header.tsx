import styles from "./header.module.css";
import { Nav } from "@/components/Nav/Nav";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Nav />
    </header>
  );
};
