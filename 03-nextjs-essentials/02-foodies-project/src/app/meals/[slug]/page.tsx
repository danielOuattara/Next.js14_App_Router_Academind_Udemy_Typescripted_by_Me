import Image from "next/image";
import styles from "./page.module.css";
import { getSingleMeal } from "@/libraries/meal";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function SingleMealPage({ params }: Props) {
  const singleMeal = await getSingleMeal(params.slug);

  if (!singleMeal) {
    notFound();
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image fill src={singleMeal.image} alt={singleMeal.title} />
        </div>

        <div className={styles.headerText}>
          <h1>{singleMeal.title}</h1>
          <p className={styles.creator}>
            by{" "}
            <a href={`mailto:${singleMeal.creator_email}`}>
              {singleMeal.creator}
            </a>
          </p>
          <p className={styles.summary}>{singleMeal.summary}</p>
        </div>
      </header>
      <main>
        <p>Single Meal: {params.slug}</p>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{
            __html: singleMeal.instructions.replace(/\n/g, "<br/>"),
          }}
        ></p>
      </main>
    </>
  );
}
