import LoginForm from "./components/LoginForm";
import { Container } from "./components/styled/Container.styled";
import heroImage from "./assets/undraw_authentication_re_svpt 1.png";
import { Heroimage } from "./components/styled/Heroimage.styled";

function App() {
  return (
    <Container color='black'>
      <Heroimage src={heroImage} alt='heroimage'></Heroimage>
      <LoginForm />
    </Container>
  );
}

export default App;
