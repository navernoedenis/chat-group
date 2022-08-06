import { FC, ReactNode } from "react";
import { Container } from "./styles";

interface CenterLayoutProps {
  children: ReactNode;
}

const CenterLayout: FC<CenterLayoutProps> = ({ children }) => (
  <Container>{children}</Container>
);

export default CenterLayout;
