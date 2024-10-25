"use server"; // creates a server action, a function guarantied to work ONLY on server
import { revalidatePath } from "next/cache";
import { saveMeal } from "./meal";
import { redirect } from "next/navigation";

function isInvalidText(text: string) {
  if (!text || text.trim() === "") {
    return true;
  }
  return false;
}

export async function shareMeal(formData: FormData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    imageFile: formData.get("image"),
    creator: formData.get("creator"),
    creator_email: formData.get("email"),
  } as TypeMeal;

  // input validation "server side"
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.imageFile.size === 0
  ) {
    // throw new Error("Error in Creating new Meal: inputs are not valid");
    return {
      message: "Invalid inputs",
    };
  }

  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
