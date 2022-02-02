//import tools
import styled from "styled-components";
import tw from "twin.macro";

//Style
const InfoContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
  `};
`;
const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;
export function Form() {
    return (
        <InfoContainer>
            <Title>Toto</Title>

        </InfoContainer>
    )
}