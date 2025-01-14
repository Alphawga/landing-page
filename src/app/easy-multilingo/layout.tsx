import { Metadata } from 'next';
import { siteMetadata } from '@/config/metadata';

export const metadata: Metadata = {
  title: siteMetadata.easyMultilingo.title,
  description: siteMetadata.easyMultilingo.description,
  icons: siteMetadata.easyMultilingo.icons,
};

export default function EasyMultiLingoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 