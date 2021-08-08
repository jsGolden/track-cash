import { Container } from './styles';

import logoImg from '../../assets/images/logo.svg';

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
          <input type="submit" value="Entrar" />
        </form>
      </main>

      <aside>
        <h2>Muito mais que um conciliador financeiro!</h2>
      </aside>
    </Container>
  );
}
