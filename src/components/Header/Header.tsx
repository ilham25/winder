import React from "react";

import { HeaderContainer } from "components/Container";
import Brand from "./Brand";
import ProjectInformation from "./ProjectInformation";

type Props = {};

const Header = (props: Props) => {
  return (
    <HeaderContainer>
      <Brand />
      <ProjectInformation></ProjectInformation>
    </HeaderContainer>
  );
};

export default Header;
