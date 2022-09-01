import { Container } from '@mui/material';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return <Container maxWidth="xl">{children}</Container>;
}

export default Layout;
