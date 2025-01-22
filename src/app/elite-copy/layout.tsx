import { Montserrat, Open_Sans } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata = {
  title: 'CopyImpactHub - Professional Copywriting Services',
  description: 'Transform your brand with copy that inspires action. We deliver polished, SEO-optimized content designed to engage, rank, and grow.',
};

export default function EliteCopyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${montserrat.variable} ${openSans.variable} font-sans`}>
      {children}
    </div>
  );
} 