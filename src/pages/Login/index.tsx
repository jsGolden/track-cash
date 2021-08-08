import { Container } from './styles';

import logoImg from '../../assets/images/logo.svg';

import { PrimaryButton } from '../../components/PrimaryButton.tsx';
import { Input } from '../../components/Input';
import { Checkbox } from '../../components/Checkbox';

export function Login(): JSX.Element {
  return (
    <Container>
      <main>
        <header>
          <img src={logoImg} alt="TrackCash" />
          <h1>Fazer login no TrackCash:</h1>
        </header>

        <form>
          <div className="form--inputs">
            <Input icon="email" type="email" placeholder="Digite seu email" />

            <Input
              icon="password"
              type="password"
              placeholder="Digite sua senha"
            />
            <PrimaryButton text="Entrar" type="submit" />

            <div className="form--misc">
              <Checkbox />
              <div className="misc--links">
                <a href="/">Recuperar senha</a>
                <a href="/">Cadastre-se</a>
              </div>
            </div>
          </div>
        </form>
      </main>

      <aside>
        <h2>Muito mais que um conciliador financeiro!</h2>
      </aside>
    </Container>
  );
}
