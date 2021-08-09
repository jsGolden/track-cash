import { HeaderContainer } from './styles';

import logoImg from '../../assets/images/logo-white.svg';
import profileImg from '../../assets/images/profile-white.svg';

export function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <nav>
        <a href="/dashboard">
          <img src={logoImg} alt="TrackCash" />
        </a>

        <div className="header--buttons">
          <a href="/dashboard">
            <img src={profileImg} alt="Perfil" />
          </a>
        </div>
      </nav>
    </HeaderContainer>
  );
}
