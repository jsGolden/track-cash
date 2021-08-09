import { useState, createContext, ReactNode } from 'react';

interface AuthContextData {
  login: (email: string, password: string, remember?: boolean) => void;
  logout: () => void;
  currentToken: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

const tokenNamespace = '@track-cash:token';

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const [currentToken, setCurrentToken] = useState(
    localStorage.getItem(tokenNamespace) || '',
  );

  function login(email: string, password: string, remember = false) {
    const token = btoa(`${email}:${password}`);
    setCurrentToken(token);

    if (remember) {
      localStorage.setItem(tokenNamespace, token);
    } else {
      localStorage.removeItem(tokenNamespace);
    }
  }

  function logout() {
    setCurrentToken('');
    localStorage.removeItem(tokenNamespace);
  }

  return (
    <AuthContext.Provider value={{ login, logout, currentToken }}>
      {children}
    </AuthContext.Provider>
  );
}
