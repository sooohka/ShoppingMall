import React, { useEffect, useState } from "react";
import * as Type from "@Types/index";
import { To, useLocation } from "react-router-dom";
import SidebarLinkListItem from "./SidebarLinkListItem";

type Props = {
  links: Type.LinkWithIcon[];
};
function SidebarLinkList({ links }: Props) {
  const [currentLink, setCurrentLink] = useState(links[0].to);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== currentLink) setCurrentLink(pathname);
  }, [currentLink, pathname]);

  const handleLinkClick = (link: To) => () => {
    setCurrentLink(link);
  };

  return (
    <>
      {links.map((link) => (
        // 현재 선택된 상태 나타내기
        <SidebarLinkListItem
          selected={currentLink === link.to}
          handleLinkClick={handleLinkClick}
          key={link.label}
          link={link}
        />
      ))}
    </>
  );
}

export default SidebarLinkList;
