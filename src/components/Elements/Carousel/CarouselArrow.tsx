import { Icon } from "@chakra-ui/react";
import CarouselContext from "@Components/Elements/Carousel/CarouselContext";
import { CAROUSEL_ACTION } from "@Components/Elements/Carousel/CarouselReducer";
import { useContext } from "react";
import { IconType } from "react-icons";

type CarouselArrowProps = {
  icon: IconType;
  orientation: "left" | "right";
  onClick: (orientation: "left" | "right") => () => void;
};

function CarouselArrow(props: CarouselArrowProps) {
  const { icon, orientation, onClick } = props;

  const dir = { [orientation]: 0 };

  return (
    <Icon
      onClick={onClick(orientation)}
      zIndex={1}
      pos="absolute"
      top="50%"
      transform="translateY(-50%)"
      {...dir}
      w={20}
      h={20}
      _hover={{ opacity: 1, cursor: "pointer" }}
      opacity={0.3}
      color="white"
      as={icon}
    />
  );
}
export default CarouselArrow;
