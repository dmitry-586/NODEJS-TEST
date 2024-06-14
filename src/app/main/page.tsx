import Image from "next/image";
import styles from "./main.module.scss"


export default function MainPage() {
    return (
      <>
        <main className={styles.container}>
          <div>
            <Image src="/next.svg" alt="#" width={200} height={200} />
          </div>
          <div className={styles.create_wrapper}>
            <div className="flex">
              <h3 className="text-3xl duration-0">Создание сайтов</h3>
              <Image
                src="/Arrow-Right-Up.svg"
                alt="#"
                width={40}
                height={40}
                className={styles.black_arrow}
              />
            </div>
            <p className="text-xl duration-0">
              Разработаем сайт полностью под ключ, который будет продавать в
              первый дни запуска.
            </p>
          </div>
          <div className={styles.create_wrapper}>
            <div className="flex">
              <h3 className="text-3xl duration-0">Создание сайтов</h3>
              <Image
                src="/Arrow-Right-Up.svg"
                alt="#"
                width={40}
                height={40}
                className={styles.black_arrow}
              />
            </div>
            <p className="text-xl duration-0">
              Разработаем сайт полностью под ключ, который будет продавать в
              первый дни запуска.
            </p>
          </div>
          <div className={styles.create_wrapper}>
            <div className="flex">
              <h3 className="text-3xl duration-0">Создание сайтов</h3>
              <Image
                src="/Arrow-Right-Up.svg"
                alt="#"
                width={40}
                height={40}
                className={styles.black_arrow}
              />
            </div>
            <p className="text-xl duration-0">
              Разработаем сайт полностью под ключ, который будет продавать в
              первый дни запуска.
            </p>
          </div>
        </main>
      </>
    );
  }
  