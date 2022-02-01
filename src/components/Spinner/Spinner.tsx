
import styles from "./Spinner.module.css"
export default function Spinner() {
  return <div className={styles.spinner}>
    <div className="spinner-border" role="status"></div>
  </div>;
}
