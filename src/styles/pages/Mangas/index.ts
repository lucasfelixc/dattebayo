import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;

  .contentLine {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    .line {
      width: 80%;
      height: 1px;

      background: #c4c4c4;
    }
  }
`
