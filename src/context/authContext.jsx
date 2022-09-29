import { createContext, useContext, useState } from 'react';

const authContext = createContext();
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error('There is not auth provider');
  return context;
};
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('user');
  const authProps = { user, setUser };
  return (
    <authContext.Provider value={authProps}>{children}</authContext.Provider>
  );
};
