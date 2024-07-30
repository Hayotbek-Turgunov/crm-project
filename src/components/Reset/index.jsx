import {
  Container,
  InputContainer,
  Title,
  Wrapper,
  CountrySelectorWrapper,
  FlagIcon,
  CountryCode,
  Input,
  Button,
} from "./style";

const Reset = () => {
  return (
    <Container>
      <Wrapper>
        <Title.Main>Reset Password</Title.Main>
        <Title.Description>
          Enter your email to reset your password.
        </Title.Description>
        <Title.Label>Phone</Title.Label>
        <InputContainer>
          <CountrySelectorWrapper>
            <FlagIcon
              src="https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg"
              alt="UZ"
            />
            <CountryCode>
              <option value="UZ">UZ</option>
              <option value="UZ">UZ</option>
              <option value="UZ">UZ</option>
              <option value="UZ">UZ</option>
              <option value="UZ">UZ</option>
            </CountryCode>
          </CountrySelectorWrapper>
          <Input type="tel" placeholder="+998 90 000 00 00" />
        </InputContainer>
        <Button>Reset Password</Button>
      </Wrapper>
    </Container>
  );
};

export default Reset;
