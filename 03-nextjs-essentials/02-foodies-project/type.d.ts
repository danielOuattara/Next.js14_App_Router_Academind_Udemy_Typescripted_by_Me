type TypeMeal = {
  id: string;
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
  creator_email: string;
  instructions: string;
};

type TypeProps = {
  meals: TypeMeal[];
};
