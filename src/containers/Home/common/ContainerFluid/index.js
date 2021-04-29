import React from "react";

import * as S from "./styles";

const ContainerFluid = (props) => (
  <S.ContainerFluid {...props}>{props.children}</S.ContainerFluid>
);

export default ContainerFluid;
