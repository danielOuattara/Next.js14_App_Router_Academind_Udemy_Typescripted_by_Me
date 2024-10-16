type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function BlogPostPage({ params }: Props) {
  console.log(params.slug);
  return (
    <main>
      <h1>Blog {params.slug}</h1>
    </main>
  );
}
