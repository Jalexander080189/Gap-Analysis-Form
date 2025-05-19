import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}

export const metadata = {
  title: 'Gap Analysis Form',
  description: 'Marketing gap analysis tool',
};