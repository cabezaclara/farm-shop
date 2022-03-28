import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import Checkbox from "/src/components/ui/checkbox/checkbox";
import {
  StyledProductsChoice,
  StyledUl,
  StyledLi,
  CheckboxLabel
} from "./styles";

function ProductsChoice({ products }) {
  return (
    <StyledProductsChoice>
      <Title as="h2" size={TitleSize.EXTRA_SMALL}>
        Выберите продукты
      </Title>
      <StyledUl>
        {products.map((product) => (
          <StyledLi key={product.id}>
            <Checkbox
              labelComponent={CheckboxLabel}
              name={product.title}
              text={product.title}
            />
          </StyledLi>
        ))}
      </StyledUl>
    </StyledProductsChoice>
  );
}

export default ProductsChoice;
