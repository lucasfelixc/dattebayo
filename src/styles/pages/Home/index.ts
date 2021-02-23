import styled, { css } from 'styled-components'

interface showShadow {
  show: boolean
}

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

export const Shadow = styled.div<showShadow>`
  ${props =>
    props.show &&
    css`
      width: 100vw;
      height: 100vh;

      display: flex;
      z-index: 10;
      position: absolute;

      background: rgba(119, 116, 116, 0.5);
    `}
`
