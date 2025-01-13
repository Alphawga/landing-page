import { Montserrat, Roboto } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata = {
  title: 'EasyMultiLingo - Advanced Document Review Platform',
  description: 'Streamline your workflow, ensure accuracy, and collaborate seamlessly using our advanced review platform.',
};

export default function EasyMultiLingoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${montserrat.variable} ${roboto.variable} font-sans`}>
      {children}
    </div>
  );
} 