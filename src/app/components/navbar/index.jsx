//import tools
import styled from "styled-components";
import tw from "twin.macro";

//import component
import { NavItems } from "./navItems";

//Style
const NavbarContainer = styled.div`
  min-height: 68px;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    flex-row
    items-center
    lg:pl-12
    lg:pr-12
    justify-between
  `};
`;
export function Navbar() {
    return (
        <NavbarContainer>
            <NavItems />
        </NavbarContainer>
    );
};


