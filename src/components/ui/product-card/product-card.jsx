import React from "react";
import { TitleSize } from "../title/title";
import Tabs from "/src/components/ui/tabs/tabs";
import OptionsList from "/src/components/ui/options-list/options-list";
import {
  StyledProductCard,
  CardWrapper,
  StyledTitle,
  Image,
  Text,
  Price
} from "./styles";

function ProductCard({ product }) {
  const tabs = [
    {
      title: "Описание",
      content: (
        <Text>
          {product.description}
          <Price>
            {" "}
            {product.price} руб./ {product.weight} гр.
          </Price>
        </Text>
      )
    },
    {
      title: "Характеристики",
      content: <OptionsList list={product.characteristics} />
    },
    {
      title: "Свойства",
      content: <OptionsList list={product.structure} />
    }
  ];

  return (
    <StyledProductCard>
      <Image src={product.image} width="248" height="248" alt={product.title} />
      <CardWrapper>
        <StyledTitle as="h2" size={TitleSize.EXTRA_SMALL}>
          {product.title}
        </StyledTitle>
        <Tabs maxContentHeiht="105px" tabs={tabs} tabIndex={1} />
      </CardWrapper>
    </StyledProductCard>
  );
}

export default ProductCard;
