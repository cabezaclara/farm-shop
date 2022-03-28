import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";
import { StyledMakeOrder, StyledInput, Text, Price } from "./styles";

function MakeOrder({ price }) {
  return (
    <>
      <StyledMakeOrder>
        <Title as="h2" size={TitleSize.EXTRA_SMALL}>
          Сделать заказ
        </Title>
        <StyledInput tyle="text" placeholder="Введите адрес доставки" />
        <Text>
          Цена <Price>{price} руб.</Price>
        </Text>
        <Button maxWidth="314">Купить</Button>
      </StyledMakeOrder>
    </>
  );
}

export default MakeOrder;
