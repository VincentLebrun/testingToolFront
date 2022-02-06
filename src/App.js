//Import tools
import styled from "styled-components";
import tw from "twin.macro";

//Import Components
import { HomePage } from "./app/containers/Homepage";
import { Form } from "./app/components/form";
// import { Navbar } from "./app/components/navbar";
//style for container
const AppContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center  
  `}
`;
function App() {
  return (
    <AppContainer>
      <HomePage />
      <Form />
    </AppContainer>
  );
}

export default App;
