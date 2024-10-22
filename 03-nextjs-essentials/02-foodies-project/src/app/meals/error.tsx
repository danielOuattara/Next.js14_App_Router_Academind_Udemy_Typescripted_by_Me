"use client";

type TypeError = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error }: TypeError) {
  console.log("error props = ", error);
  return (
    <main className="error">
      <h1>error happened</h1>
      <p>try again later</p>
    </main>
  );
}
