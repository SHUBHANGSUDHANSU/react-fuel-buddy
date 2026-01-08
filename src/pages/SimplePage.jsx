export default function SimplePage({ title }) {
  return (
    <main className="simple-page">
      <div className="simple-page__inner">
        <h1>{title}</h1>
        <p>This page is ready for React content.</p>
      </div>
    </main>
  )
}
