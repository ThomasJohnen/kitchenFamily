import { Box, Heading } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ResumeCard from "./Card";

// 8 recettes d'exemple
const recipes = Array.from({ length: 8 }).map((_, i) => ({
  title: `Recette ${i + 1}`,
  description: `Description de la recette ${i + 1}`,
  imageUrl: `https://picsum.photos/400/300?random=${i + 1}`,
  duringTime: `${15 + i * 5} min`,
  categories: ["Traditionnel", i % 2 === 0 ? "Halal" : "Végétarien"],
}));

const Carousel = () => {
  return (
    <Box w="100%" mx="auto" px={10} py={8}>
      <Heading fontSize="1.5rem" mb={4} textAlign="left">
        Recettes Populaires
      </Heading>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={4}   // 👈 4 visibles à la fois
        navigation          // flèches
        loop
      >
        {recipes.map((recipe, index) => (
          <SwiperSlide key={index}>
            <ResumeCard {...recipe} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;
