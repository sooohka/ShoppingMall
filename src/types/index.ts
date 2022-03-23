import { IconType } from "react-icons/lib";
import { To } from "react-router-dom";

type LinkWithIcon = {
  to: To;
  icon: IconType;
  label: string;
};

export type { LinkWithIcon };
