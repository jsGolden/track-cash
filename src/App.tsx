import { AuthProvider } from './contexts/AuthContext';
import { Routes } from './routes';
import { GlobalStyles } from './styles/globalStyles';

function App(): JSX.Element {
  return (
    <AuthProvider>
      <GlobalStyles />
      <Routes />
    </AuthProvider>
  );
}

export default App;
