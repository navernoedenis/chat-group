import { FC, ReactNode } from "react";
import { Container, Header, HeaderTitle, HeaderLink, Main } from "./styles";

import CenterLayout from "layouts/center";

interface SignInAndSignUpLayoutProps {
  children: ReactNode;
  type: "sign-in" | "sign-up";
}

const SignInAndSignUpLayout: FC<SignInAndSignUpLayoutProps> = ({
  children,
  type = "sign-in"
}) => {
  const isSignIn = type === "sign-in";
  const inOrUp = isSignIn ? "in" : "up";
  const inOrUpLink = isSignIn ? "up" : "in";

  return (
    <CenterLayout>
      <Container>
        <Header>
          <HeaderTitle variant="h2" noWrap>
            Sign {inOrUp}
          </HeaderTitle>
          <HeaderLink to={`/auth/sign-${inOrUpLink}`}>
            Go To Sign {inOrUpLink}
          </HeaderLink>
        </Header>
        <Main component="main">{children}</Main>
      </Container>
    </CenterLayout>
  );
};

export default SignInAndSignUpLayout;
