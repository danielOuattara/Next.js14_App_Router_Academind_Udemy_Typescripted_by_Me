type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function SingleMealPage({ params }: Props) {
  return (
    <main>
      <h1>Single Meal: {params.slug}</h1>
    </main>
  );
}
