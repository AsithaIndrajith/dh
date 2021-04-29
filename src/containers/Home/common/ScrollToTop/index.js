import React from "react";
import { BackTop } from "antd";
import SvgIcon from "../../common/SvgIcon";
import SCROLLTOPLOGO from "../../../../assests/svg/scroll-top.svg";
import * as S from "./styles";

const Input = () => (
  <BackTop>
    <S.Up>
      <SvgIcon src={SCROLLTOPLOGO} />
    </S.Up>
  </BackTop>
);

export default Input;
