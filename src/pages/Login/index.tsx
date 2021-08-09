import { useFormik } from 'formik';
import * as yup from 'yup';

import { Container } from './styles';

import logoImg from '../../assets/images/logo.svg';

import { PrimaryButton } from '../../components/PrimaryButton.tsx';
import { Input } from '../../components/Input';
import { Checkbox } from '../../components/Checkbox';
import { useAuth } from '../../hooks/useAuth';

export function Login(): JSX.Element {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Email inválido')
      .required('Preenchimento obrigatório'),
    password: yup.string().required('Preenchimento obrigatório'),
    rememberMe: yup.bool(),
  });

  const { login } = useAuth();

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    onSubmit: formValues => {
      const { email, password, rememberMe } = formValues;
      login(email, password, rememberMe);
    },
    validationSchema,
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  return (
    <Container>
      <main>
        <header>
          <img src={logoImg} alt="TrackCash" />
          <h1>Fazer login no TrackCash:</h1>
        </header>

        <form onSubmit={handleSubmit}>
          <div className="form--inputs">
            <Input
              icon="email"
              type="email"
              name="email"
              placeholder="Digite seu email"
              isError={!!errors.email && touched.email}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && (
              <span className="form--error">{errors.email}</span>
            )}

            <Input
              icon="password"
              type="password"
              name="password"
              placeholder="Digite sua senha"
              isError={!!errors.password && touched.password}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && (
              <span className="form--error">{errors.password}</span>
            )}

            <PrimaryButton
              text="Entrar"
              type="submit"
              isLoading={isSubmitting}
            />

            <div className="form--misc">
              <Checkbox
                name="rememberMe"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.rememberMe}
              />
              <div className="misc--links">
                <a href="/">Recuperar senha</a>
                <a href="/">Cadastre-se</a>
              </div>
            </div>
          </div>
        </form>
      </main>

      <aside>
        <div className="content">
          <h2>Muito mais que um conciliador financeiro!</h2>
          <p>
            A melhor ferramenta no mercado e a única com processo automatizado,
            que compara as informações entre Plataformas, MarketPlaces,
            Transportadoras, Meios de Pagamento e Instituições Financeiras!
          </p>
        </div>
      </aside>
    </Container>
  );
}
