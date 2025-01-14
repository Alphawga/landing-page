import { Metadata } from 'next';
import { siteMetadata } from '@/config/metadata';

export const metadata: Metadata = {
  title: siteMetadata.precisionKeywords.title,
  description: siteMetadata.precisionKeywords.description,
  icons: siteMetadata.precisionKeywords.icons,
};

export default function PrecisionKeywordsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 