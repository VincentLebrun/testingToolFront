import styled from "styled-components";
import tw from "twin.macro";

const TextContainer = styled.div`
`
const Text = styled.p`
 ${tw`
text-3xl
lg:text-5xl
text-black
font-extrabold
`}`;

export function Project() {


    return (
        <TextContainer>

            <Text>Projets</Text>
        </TextContainer>
    );
};


