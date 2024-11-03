import { MainPage } from "../components/MainPage/MainPage";
import { baseUrl } from "../utils/constants";

export default async function Home() {
  const data = await fetch(
    `${baseUrl}Chery`
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
