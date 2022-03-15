import { useMediaQuery, theme } from "@chakra-ui/react";

const breakPoints = Object.values(theme.breakpoints).map((value) => `(min-width:${value})`);

function useBreakPoints() {
  const [, sm, md, lg, xl] = useMediaQuery(breakPoints);

  return { sm, md, lg, xl };
}

export default useBreakPoints;
