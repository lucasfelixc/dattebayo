import { useState } from 'react'
import LogoMin from '../../../assets/icons/logomin.svg'

import {
  Container,
  MenuSection
} from '../../../styles/pages/components/Header/style'

const Header: React.FC = () => {
  const [on, setOn] = useState(false)

  const handleOpenDisplay = () => {
    setOn(!on)
  }

  return (
    <Container>
      <div className="contentLogo">
        <LogoMin />
      </div>
      <MenuSection on={on} onClick={handleOpenDisplay}>
        <div className="menuToogle">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
      </MenuSection>
    </Container>
  )
}

export default Header
