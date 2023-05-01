import React, { useContext } from "react";
import Wrapper from "../assets/wrapper/Carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SharxcContext } from "../context/context";
import BlogCard from "./BlogCard";
import { useParams } from "react-router-dom";

const Carousel = () => {
  const { blogPosts } = useContext(SharxcContext);

  const { id } = useParams();
  const posts = blogPosts.filter((post) => post.id !== parseInt(id));

  const settings = {
    dots: false,
    nav: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        {posts.map((slide) => {
          const { id, title, image, excerpt } = slide;
          const item = { id, title, image, excerpt };
          return <BlogCard key={id} {...item} />;
        })}
      </Slider>
    </Wrapper>
  );
};

export default Carousel;
