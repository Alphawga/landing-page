import { Metadata } from 'next';
import { siteMetadata } from '@/config/metadata';

export const metadata: Metadata = {
  title: siteMetadata.precisionGrammar.title,
  description: siteMetadata.precisionGrammar.description,
  icons: siteMetadata.precisionGrammar.icons,
};

export default function PrecisionGrammarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 