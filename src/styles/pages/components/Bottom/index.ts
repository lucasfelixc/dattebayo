import styled, { css, keyframes } from 'styled-components'

const slideMoreInfo = keyframes`
  100% {
    transform: translateY(-15px)
  }
`

interface showMore {
  more: boolean
}

export const Container = styled.div<showMore>`
  width: 100%;
  height: 20%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${props => props.theme.colors.backgroundLight};
  box-shadow: 0px -10px 30px rgba(0, 0, 0, 0.25);
  border-radius: 40px 40px 0 0;

  .moreInfo {
    width: 100%;
    height: 30%;

    border-radius: 40px 40px 0 0;

    display: flex;
    justify-content: center;
    align-items: center;

    button {
      width: 33.33%;
      height: 100%;

      background: none;

      cursor: pointer;
    }

    button .display {
      width: 100%;
      height: 9px;

      background: #c4c4c4;

      border-radius: 10px;
    }
  }

  .content {
    width: 100%;
    height: 70%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 15px;

    .title {
      width: 150px;
      height: 30px;

      background: #c4c4c4;
    }

    button {
      width: 48px;
      height: 48px;

      background: none;
    }
  }

  ${props => {
    if (props.more) {
      return css`
        position: absolute;

        height: 80vh;
        z-index: 20;

        animation: ${slideMoreInfo} 0.3 ease-out forwards;
      `
    }
  }}
`
