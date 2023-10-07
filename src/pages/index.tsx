import Link from "next/link";

export default function Home() {
  return (
    <article>
      <h1>ExcelJS imports break production</h1>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5em' }}>
        <Link href="/import">Just importing it</Link>
        <Link href="/component">When used in a component</Link>
        <Link href="/dynamic-import">When dynamically imported</Link>
      </nav>
    </article>
  );
}
