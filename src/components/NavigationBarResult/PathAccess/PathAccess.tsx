import { NavigationBarResult } from "../NavigationBarResult";
export const PathAccess = () => {
  return(
  <>
    <NavigationBarResult/>
      <div className="access__buy">
        <h2>ДЯКУЄМО</h2>
        <p>
          Ваше замовлення успішно опрацьоване! Скоро ви одержите
          електронного листа з усією інформацією про придбані продукти.
        </p>
        <p>
          <b>Ваш номер замовлення:</b>
          22830459
        </p>
        <h3>Огляд замовлення</h3>
        <p>
          <b>Статус замовлення:</b>
          Оброблено
        </p>
        <i>Ви можете знайти свій рахунок-фактуру
          <a href="https://store.payproglobal.com/Invoice?Id=624175be-6591-4ea1-8dfa-7361180a27c9&Date=20210819">
            Тут
          </a>
        </i>.
        <div></div>
      </div>
  </>
  );
}