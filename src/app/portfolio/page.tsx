import styles from "./portfolio.module.scss";

export default function Portfolio() {
  return (
    <>
      <main className={styles.images}>
        <div className={styles.images_wrapper}>
          <img src="/portfolio1.png" alt="#" className={styles.image}/>
          <img src="/portfolio2.png" alt="#" className={styles.image}/>
          <img src="/portfolio3.png" alt="#" className={styles.image}/>
          <img src="/portfolio4.png" alt="#" className={styles.image}/>
          <img src="/portfolio1.png" alt="#" className={styles.image5}/>
          <img src="/portfolio2.png" alt="#" className={styles.image6}/>
          <img src="/portfolio5.png" alt="#" className={styles.image7}/>
        </div>
      </main>
    </>
  );
}
