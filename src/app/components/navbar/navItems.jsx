//import tools
import React from 'react';
import styled from "styled-components";
import tw from "twin.macro";

//style 
const ListContainer = styled.ul`
${tw`
  flex
  list-none
`}
`;

const NavItem = styled.ul`
${`
  text-sm
  text-black
`}
`;
//mount component
export function NavItems() {
    return (
        <ListContainer>
            <NavItem>
                <a href="form">Accueil</a>
            </NavItem>
            <NavItem>
                <a href="form">Projets</a>
            </NavItem>
            <NavItem>
                <a href="form">Seconnecter</a>
            </NavItem>
        </ListContainer>
    )
};
