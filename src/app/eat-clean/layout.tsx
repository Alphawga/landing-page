import { Metadata } from 'next';
import { siteMetadata } from '@/config/metadata';

export const metadata: Metadata = {
  title: siteMetadata.eatClean.title,
  description: siteMetadata.eatClean.description,
  icons: siteMetadata.eatClean.icons,
};

export default function EatCleanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 