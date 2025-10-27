import Counter from "./components/Counter";

export default function Home() {
  return (
    <main style={{ textAlign: "center", padding: "40px" }}>
      <h1>Next.js Button Counter</h1>

        {/* First counter with default values */}
      <Counter />

      {/*Second counter with custom starting values */}
      <Counter initialCount={10} initialStep={5} />
    </main>
  );
}
