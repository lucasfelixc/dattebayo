import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 65%;

  .contentCall {
    width: 100%;
    height: 10%;

    display: flex;
    align-items: center;
  }

  .contentCall strong {
    font-size: 1.2rem;
    color: #40454f;
    margin-left: 40px;
  }
`

export const Content = styled.div`
  width: 100%;
  height: 90%;

  display: grid;

  grid-template-rows: 45% 45%;
  grid-template-columns: 50% 50%;
  grid-row-gap: 15px;

  .top {
    width: 85%;

    margin-left: 15px;
    border-radius: 5px;

    background: #c4c4c4;
  }
`
