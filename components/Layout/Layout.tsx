import { Container } from '@mui/material';
import { ReactNode } from 'react';
import Navbar from '@components/Navbar';

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <Container maxWidth="lg">
      <Navbar />
      {children}
    </Container>
  );
}

export default Layout;
