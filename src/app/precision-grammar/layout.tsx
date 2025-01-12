import { Montserrat, Roboto } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-roboto',
  display: 'swap',
});

export default function PrecisionGrammarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${montserrat.variable} ${roboto.variable}`}>
      {children}
    </div>
  );
} 