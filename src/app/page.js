export default function Home() {
  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Gap Analysis Form</h1>
      <div className="bg-card p-6 rounded-lg shadow-sm">
        <p className="text-lg mb-4">Welcome to the Gap Analysis Tool</p>
        <p className="text-muted-foreground">
          This application helps businesses understand their market position,
          identify marketing funnel gaps, and calculate recommended marketing budgets.
        </p>
      </div>
    </div>
  );
}