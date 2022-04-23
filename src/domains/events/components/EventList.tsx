import { Box, Text } from "@chakra-ui/react";
import Carousel from "@Components/Elements/Carousel";
import images from "@Src/assets";
import React from "react";

const media = [
  { src: images.sale1, label: "img1" },
  { src: images.sale2, label: "img2" },
  { src: images.sale3, label: "img3" },
  { src: images.sale4, label: "img4" },
  { src: images.sale5, label: "img5" },
];

function EventList() {
  return (
    <Box w="100%" height="100%">
      <Carousel media={media} />
    </Box>
  );
}

export default EventList;
