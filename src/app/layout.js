import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>Company Gap Analysis</title>
        <meta name="description" content="Marketing gap analysis tool" />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <main className="py-8">
          {children}
        </main>
      </body>
    </html>
  );
}

export const metadata = {
  title: 'Company Gap Analysis',
  description: 'Marketing gap analysis tool',
};