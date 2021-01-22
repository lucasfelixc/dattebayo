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
  .menuToogle {
    width: 40px;
    height: 30px;

    .one,
    .two,
    .three {
      width: 100%;
      height: 5px;

      background: ${props => props.theme.colors.textDark};

      margin: 6px auto;
      border-radius: 10px;
    }
  }

  ${props => {
    if (props.on) {
      return css`
        width: 100vw;
        height: 100vh;

        position: absolute;
        top: 0;
        left: 0;

        /* background: ${props => props.theme.colors.backgroundLight}; */
        background: #000000;
      `
    }
  }}
`
