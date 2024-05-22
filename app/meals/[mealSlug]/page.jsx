import { getMeal } from "@/lib/meals";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const meals = getMeal(params.mealSlug);
  if (!meals) {
    notFound();
  }
  return {
    title: meals.title,
    descripttion: meals.summary,
  };
}
const MealDetailsPage = ({ params }) => {
  const meals = getMeal(params.mealSlug);
  if (!meals) {
    notFound();
  }
  meals.instructions = meals.instructions.replace(/\n/g, "<br/>");
  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image
            src={`https://akshay-nextjs-demo-users-image.s3.amazonaws.com/${meals.image}`}
            alt={meals.title}
            fill
          />
        </div>
        <div className={styles.headerText}>
          <h1>{meals.title}</h1>
          <p className={styles.creator}>
            {" "}
            by <a href={`mailto:${meals.creator_email}`}>{meals.creator}</a>
          </p>
          <p className={styles.summary}>{meals.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{ __html: meals.instructions }}
        ></p>
      </main>
    </>
  );
};

export default MealDetailsPage;
