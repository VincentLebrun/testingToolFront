//Import tools
import React from 'react';
import styled from "styled-components";
import tw from "twin.macro";




//style for Homepage by default switching after if is needed
const PageContainer = styled.div`
  ${tw`
  flex
  flex-col
  w-full
  h-full
  items-center
  overflow-x-hidden
  `}
`;
const Text = styled.p``


export function HomePage() {
    return (
        <PageContainer>
            <Text>Hello</Text>

        </PageContainer>
    );
};


