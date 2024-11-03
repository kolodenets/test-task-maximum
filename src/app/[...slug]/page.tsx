import CarPage from "@/src/components/CarPage/CarPage";
import { baseUrl } from "@/src/utils/constants";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const data = await fetch(`${baseUrl}${slug[0]}?car_id=${slug[1]}`);
  const car = await data.json();

  return (
    <main>
      <CarPage car={car[0]} />
    </main>
  );
}
