import { useMediaQuery } from "@chakra-ui/react";
import theme from "@Src/styles/theme";

const breakPoints = Object.values(theme.breakpoints).map((value) => `(min-width:${value})`);

function useBreakPoints() {
  const [xs, sm, md, lg, xl] = useMediaQuery(breakPoints);

  return { xs, sm, md, lg, xl };
}

export default useBreakPoints;
