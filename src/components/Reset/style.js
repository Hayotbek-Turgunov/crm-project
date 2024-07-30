import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 100vh;
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

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  height: 40px;
  width: 360px;
`;

export const CountrySelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 8px;
  border: 1px solid red;
  height: 100%;
  border-radius: 8px 0 0 8px;
  border: 1px solid #ccc;
  padding-left: 10px;
  padding-right: 10px;
`;

export const FlagIcon = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 0px;
`;

export const CountryCode = styled.select`
  border: none;
  background: transparent;
  outline: none;
  font-size: 16px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-left: 8px; // Adjust based on your icon or flag
`;

export const Input = styled.input`
  display: inline-block;
  border: none;
  outline: none;
  flex-grow: 1;
  font-size: 16px;
`;

Title.Label = styled(Title)`
  //styleName: Body/Left-to-right/14/medium;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  margin-top: 20px;
  margin-bottom: 4px;
  font-weight: 800;
`;
