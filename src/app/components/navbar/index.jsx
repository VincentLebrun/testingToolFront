import styled from "styled-components";
import tw from "twin.macro";

//Style
const ListContainer = styled.ul`
${tw`
flex
list-none
`}
`;

const NavItems = styled.ul`
${`
  text-sm
  text-black
`}
`;
export function Navbar() {
    return (
        <ListContainer>
            <NavItems>
                <a href="#">Accueil</a>
            </NavItems>
            <NavItems>
                <a href="#">Projets</a>
            </NavItems>
            <NavItems>
                <a href="#">Seconnecter</a>
            </NavItems>
        </ListContainer>
    );
};


