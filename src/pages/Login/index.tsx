import { Container } from './styles';

import logoImg from '../../assets/images/logo.svg';
import { PrimaryButton } from '../../components/PrimaryButton.tsx';

export function Login(): JSX.Element {
  return (
    <Container>
      <main>
        <header>
          <img src={logoImg} alt="TrackCash" />
          <h1>Fazer login no TrackCash:</h1>
        </header>

        <form>
          <input type="text" placeholder="Digite seu email" />
          <input type="text" placeholder="Digite sua senha" />

          <PrimaryButton text="Entrar" type="submit" />
        </form>
      </main>

      <aside>
        <h2>Muito mais que um conciliador financeiro!</h2>
      </aside>
    </Container>
  );
}
