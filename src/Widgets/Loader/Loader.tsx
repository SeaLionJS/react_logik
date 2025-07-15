import styles from "./Loader.module.css";

const Loader = ({}) => {
  return (
    <div className={styles.loading_wave}>
      <div className={styles.loading_bar}></div>
      <div className={styles.loading_bar}></div>
      <div className={styles.loading_bar}></div>
      <div className={styles.loading_bar}></div>
    </div>
  );
};

export default Loader;
