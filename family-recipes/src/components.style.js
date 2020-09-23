import styled from "@emotion/styled";

export const Div = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  & > h2 {
    width: 100%;
  }
  & > form {
    display: flex;
    flex-wrap: wrap;
    width: 60%;
    justify-content: center;
    align-content: center;
    flex-direction: column;
  }
`;
export const Label = styled.label`
  margin: 2%;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Header = styled.div`
  width: 100%;
  margin: 2% 0%;
`;

export const DivLinks  = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: .5%;
  background-color: #333333;
  width: 100%;
`

export const Button = styled.button`
padding: 0% 2%;
width: 10%;
margin: 0 1%;
&:hover{
  background-color: aliceblue;
}
`