import styled from '@emotion/styled'

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
  & > form{
    display: flex;
    flex-wrap: wrap;
    width: 60%;
    justify-content: center;
    flex-direction: column;
  }
`
export const Input = styled.input`
margin: 2%;
`

