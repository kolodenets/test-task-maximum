import { MainPage } from "../components/MainPage/MainPage";

export default async function Home() {
  const data = await fetch(
    "https://test2.maximum-haval.ru/public/test-task/v1/brand/Chery"
  );
  const cars = await data.json();

  return (
    <main>
      <div>
        <MainPage cars={cars} />
      </div>
    </main>
  );
}
