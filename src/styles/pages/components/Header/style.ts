import styled, { css } from 'styled-components'

interface OpenDisplay {
  on: boolean
}

export const Container = styled.div`
  width: 100%;
  height: 15%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;
`

export const MenuSection = styled.div<OpenDisplay>`
  .nav {
    display: none;
  }

  ${props => {
    if (props.on) {
      return css`
        width: 100vw;
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        top: 0;
        left: 0;

        z-index: 10;

        background: ${props => props.theme.colors.backgroundLight};

        .nav {
          display: flex;
          flex-direction: column;
          text-align: center;
        }

        .nav a {
          transition-duration: 0.5s;
          font-size: 2rem;
          font-weight: 600;
          line-height: 8rem;
        }

        .menuToogle {
          position: absolute;
          right: 20px;
          top: 30px;

          .one {
            transform: rotate(45deg) translate(7px, 7px);
          }

          .two {
            opacity: 0;
          }

          .three {
            transform: rotate(-45deg) translate(8px, -9px);
          }
        }
      `
    }
  }}
`

export const MenuToggle = styled.div`
  width: 35px;
  height: 30px;

  .one,
  .two,
  .three {
    width: 100%;
    height: 5px;

    background: ${props => props.theme.colors.textDark};

    margin: 6px auto;
    border-radius: 10px;

    transition-duration: 0.3s;
  }
`
