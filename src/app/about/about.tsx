import { FC } from "react";

const AboutPage: FC<{ data: any }> = ({ data }) => {
  return (
    <>
      <main className="flex flex-col items-center">
        <h1 className="mt-12">О студии</h1>
        {data.map((post: any) => (
          <div key={post.id}>{post.title}</div>
        ))}
        <div className="mt-8 max-w-6xl flex flex-col gap-4 font-Brygada_1918">
          <p>
            В интернете миллионы сайтов, но лишь небольшая часть из них, около
            1%, можно назвать по-настоящему успешными. Причина не в плохом
            дизайне - среди непопулярных веб-ресурсов есть немало настоящих
            шедевров, но они не продают. Дело не в дорогой рекламе, ведь она
            далеко не всегда окупается из-за высоких аппетитов владельцев
            рекламных площадей. Даже оригинальные тексты от именитых
            копирайтеров не всегда помогают, так как современные пользователи
            больше привлекают визуальные элементы.
          </p>
          <p>
            Компания TIPS предлагает простые решения для сложных вопросов.
            Лишь гармоничное сочетание всех элементов оформления сайта позволит
            добиться ожидаемого эффекта и получать желаемую прибыль.
          </p>
          <p>
            Откройте для себя мир доступной рекламы и бесконечного роста продаж.
            Интернет - уникальная площадка для бизнеса, но огромное количество
            возможностей затрудняет их эффективное использование даже опытными
            предпринимателями. Компания TIPS предлагает своим клиентам
            современный и выгодный сервис:
          </p>
          <ul className="list-disc pl-8">
            <li className="text-purpleUl">Создание сайтов</li>
            <li className="text-purpleUl">Продвижение сайтов</li>
            <li className="text-purpleUl">Поддержка сайтов</li>
            <li className="text-purpleUl">Шаблоны сайтов</li>
          </ul>
          <p>
            Ваши деньги будут вложены с умом, а потому принесут достойную
            прибыль. Если Вы давно хотели вывести свою компанию в глобальную
            сеть, но откладывали задачу на потом, пора заняться этим. Если Вам
            нужен знак – вот он: время действовать прямо сейчас.
          </p>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
