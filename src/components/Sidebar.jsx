import Logo from "./Logo";
import styles from "./Sidebar.module.css";
import AppNav from "./AppNav"
import { Outlet } from "react-router-dom";


export default function Sidebar() {
  return (
    <div className={styles.Sidebar}>
      <Logo />
      <AppNav />

      
       <Outlet />
       
       <footer className={styles.footer}>
       <p className={styles.copyright}>
       &copy: copyright {new Date().getFullYear()} by WorldWise Inc</p>
       </footer>

          </div>
  )
}
