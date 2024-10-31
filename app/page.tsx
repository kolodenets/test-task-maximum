import styles from "./page.module.scss";

export default async function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>Home</main>
    </div>
  );
}
