import styles from "../styles/style.module.css";
export default function PageUnderConstruction() {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marquee}>
        <span style={{ color: "orange" }}>Portfolio under construction..</span>
      </div>
    </div>
  );
}
