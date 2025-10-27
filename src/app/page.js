"use client";
import Counter from "../component/Counter";

export default function Home() {
  return (
    <main style={{ textAlign: "center", padding: "50px"}}>
      <h1>Next.js Button Counter</h1>

      {/* One Counter with defaults */}
      <Counter />

      {/*One Counter with custom props*/}
      <Counter initialCount={5} initialStep={2}/>
    </main>
  );
}