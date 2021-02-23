import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 70%;

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
  justify-items: center;

  grid-template-columns: 50% 50%;
  grid-row-gap: 15px;

  overflow-y: scroll;

  .top {
    width: 85%;
    height: 200px;

    border-radius: 5px;

    background: #c4c4c4;

    img {
      border-radius: 5px;
    }
  }
`
