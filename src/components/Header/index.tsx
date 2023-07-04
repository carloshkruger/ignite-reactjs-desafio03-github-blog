import { HeaderContainer } from './styles'

import headerCoverImage from '../../assets/header-cover.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={headerCoverImage} alt="" />
    </HeaderContainer>
  )
}
