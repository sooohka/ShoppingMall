import { Icon } from "@chakra-ui/react";
import CarouselContext from "@Components/Elements/Carousel/CarouselContext";
import { CAROUSEL_ACTION } from "@Components/Elements/Carousel/CarouselReducer";
import { useContext } from "react";
import { IconType } from "react-icons";

type CarouselArrowProps = {
  icon: IconType;
  orientation: "left" | "right";
};

function CarouselArrow(props: CarouselArrowProps) {
  const { dispatch } = useContext(CarouselContext);
  const { icon, orientation } = props;

  const dir = { [orientation]: 0 };

  const handleClick = () => {
    if (orientation === "left") dispatch(CAROUSEL_ACTION.GO_PREV());
    if (orientation === "right") dispatch(CAROUSEL_ACTION.GO_NEXT());
  };

  return (
    <Icon
      onClick={handleClick}
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
