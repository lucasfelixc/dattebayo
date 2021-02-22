import { useState } from 'react'
import Link from 'next/link'

import LogoMin from '../../../assets/icons/logomin.svg'
import {
  Container,
  MenuSection,
  MenuToggle
} from '../../../styles/pages/components/Header'

const Header: React.FC = () => {
  const [on, setOn] = useState(false)

  const handleCloseDisplay = () => {
    setOn(!on)
  }

  return (
    <Container>
      <div className="contentLogo">
        <LogoMin />
      </div>
      <MenuSection on={on}>
        <MenuToggle className="menuToogle" onClick={handleCloseDisplay}>
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </MenuToggle>

        <div className="nav">
          <Link href="/#">Animes</Link>
          <Link href="/#">Mangás</Link>
        </div>
      </MenuSection>
    </Container>
  )
}

export default Header
