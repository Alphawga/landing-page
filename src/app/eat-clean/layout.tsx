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
  title: 'EatCleanFit - Healthy Meals & Nutrition Plans',
  description: 'Fuel your body with delicious, healthy meals that prevent disease. Explore our collection of tasty pasta options and personalized nutrition plans.',
};

export default function EatCleanLayout({
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