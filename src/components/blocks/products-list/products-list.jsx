import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/css/scrollbar";
import SwiperCore, { Scrollbar } from "swiper";
import ProductCard from "/src/components/ui/product-card/product-card";
import { Ul, Li } from "/src/components/styled";
import { StyledProductsList, StyledSwiper } from "./styles";

SwiperCore.use([Scrollbar]);

function ProductsList({ products }) {
  return products && products.length ? (
    <StyledProductsList>
      <StyledSwiper slidesPerView={1} spaceBetween={12}>
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </StyledProductsList>
  ) : null;
}

export default ProductsList;
