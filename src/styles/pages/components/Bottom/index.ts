import styled, { css, keyframes } from 'styled-components'

const slideMoreInfo = keyframes`
  to {
    transform: translateY(-60vh)
  }
`

interface showMore {
  more: boolean
}

export const Container = styled.div<showMore>`
  width: 100%;
  height: 18vh;

  display: flex;
  flex-direction: column;

  margin-top: 10px;

  background: ${props => props.theme.colors.backgroundLight};
  box-shadow: 0px -10px 30px rgba(0, 0, 0, 0.25);
  border-radius: 40px 40px 0 0;

  .moreInfo {
    width: 100%;
    height: 60px;

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
    height: auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 15px;

    .title {
      width: 250px;
      height: 30px;

      strong {
        font-size: 1.3rem;
      }
    }

    button {
      width: 48px;
      height: 48px;

      background: none;

      a {
        width: 100%;
        height: 100%;
      }
    }
  }

  .synopsis {
    width: 100%;
    height: 50%;

    margin-top: 20px;
    padding: 0 20px;

    overflow-y: scroll;

    p {
      font-size: 1.1rem;
      line-height: 1.5rem;
    }
  }

  .indicators {
    width: 100%;
    height: 50px;

    margin-top: 20px;

    display: flex;
    justify-content: space-around;
    align-items: center;

    .relevant {
      width: 70px;
      height: 35px;

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 15px;

      background: ${props => props.theme.colors.primary};

      span {
        color: #e1e1e6;
        font-weight: 600;
      }
    }

    .ageRating {
      color: ${props => props.theme.colors.secondary};
      font-weight: 600;
    }
  }

  .shadow {
    display: none;
  }

  ${props => {
    if (props.more) {
      return css`
        height: 80vh;

        position: fixed;
        z-index: 20;

        animation: ${slideMoreInfo} 0.3s ease-in-out forwards;
      `
    }
  }}
`
