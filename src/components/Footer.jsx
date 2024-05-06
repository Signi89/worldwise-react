import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div>
    <footer className={styles.footer}>
    <p className={styles.copyright}>
    &copy: copyright {new Date().getFullYear()} by WorldWise Inc</p>
    </footer>
    </div>
  )
}
