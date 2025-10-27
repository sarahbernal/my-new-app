import Counter from "./components/Counter";

export default function Home() {
  return (
    <main style={{ textAlign: "center", padding: "40px" }}>
      <h1>Next.js Button Counter</h1>
      <Counter /> {/* default count=0, step=1 */}
      <Counter initialCount={5} initialStep={2} /> {/* custom props */}
    </main>
  );
}
