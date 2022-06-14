import styles from "./Layout.module.scss";
import Logo from "/public/logo-nextjs.svg";
export default function Header() {
  return (
    <header className={styles.header}>
      <Logo height={40} />
      <span>this is my header</span>
    </header>
  );
}
