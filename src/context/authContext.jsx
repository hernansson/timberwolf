import { createContext, useContext, useState, useRef } from 'react';
const authContext = createContext();
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error('There is not auth provider');
  return context;
};
export const AuthProvider = ({ children }) => {
  const nftSectionRef = useRef();
  const [user, setUser] = useState(null);
  const [isOfferActive, setIsOfferActive] = useState(false);

  const authProps = {
    user,
    setUser,
    nftSectionRef,
    isOfferActive,
    setIsOfferActive,
  };
  return (
    <authContext.Provider value={authProps}>{children}</authContext.Provider>
  );
};
