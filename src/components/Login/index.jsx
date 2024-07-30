import {
  Container,
  InputWrapper,
  Title,
  Wrapper,
  Button,
  IconWrapper,
  Input,
} from "./style";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title.Main>Login to your account</Title.Main>
        <Title.Description>Enter your details to login.</Title.Description>
        {/* Email */}
        <Title.Label>
          Email Address <span className="star">*</span>
        </Title.Label>
        <InputWrapper>
          <IconWrapper>
            <FaEnvelope />
          </IconWrapper>
          <Input placeholder="Enter your email address" />
        </InputWrapper>
        {/* Password */}
        <Title.Label>
          Password <span className="star">*</span>
        </Title.Label>
        <InputWrapper>
          <IconWrapper>
            <FaLock />
          </IconWrapper>
          <Input type="password" placeholder="Enter your password" />
        </InputWrapper>
        <Button>Login</Button>
      </Wrapper>
    </Container>
  );
};

export default Login;
