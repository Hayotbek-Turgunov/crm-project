import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 100vh;
`;

export const LoginDescription = styled.span`
  font-size: 40px;
  text-align: center;
  font-weight: 600;
  display: inline-block;
`;

export const Wrapper = styled.div`
  width: 380px;
  height: 414px;
  padding: 12px 20px 12px 20px;
`;

export const Title = styled.div`
  font-family: Inter;
  font-size: 28px;
  font-weight: 500;
  line-height: 38px;
  text-align: center;
  color: #1f1f1f;
`;

Title.Main = styled(Title)``;
Title.Description = styled(Title)`
  //styleName: Body/Left-to-right/14/regular;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #8c8c8c;
`;

Title.Label = styled(Title)`
  //styleName: Body/Left-to-right/14/medium;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  margin-top: 32px;
  margin-bottom: 4px;

  .star {
    color: red;
  }
`;

export const LoginLink = styled.a`
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.005em;
  text-align: left;
  color: #8c8c8c;
  text-decoration: underline;
  text-underline-offset: 5px;
`;

export const Input = styled.input`
  outline: none;
  height: 40px;
  padding: 8px 12px 8px 12px;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid #d0d7de;
  box-sizing: border-box;
  width: 100%;
  &::placeholder {
    color: ${(props) => props.placeholderColor || "#929FAF"};
  }
  text-indent: 28px;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 10px;
  top: 55%;
  transform: translateY(-50%);
  font-size: 18px;
  color: #666;
`;

export const Button = styled.button`
  width: (390px);
  height: (48px);
  padding: 12px 18px;
  gap: 4px;
  border-radius: 8px;
  border: 1px solid;
  width: 100%;
  color: #ffffff;
  margin-top: 32px;
  background-color: #1890ff;

  &:hover {
    cursor: pointer;
    background-color: red;
  }
`;
