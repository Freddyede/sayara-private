import { useContext, createContext, useState } from "react";

const AuthContext: any = createContext(null);

const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("site") || "");
  const loginAction = async (data: any) => {
    const response = await fetch(process.env.API_URL + '/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    if (res.data) {
      console.log(res.data);
      setUser(res.data.user);
      setToken("Bearer " + res.data.token);
      localStorage.setItem("user", "Bearer " + res.data.token);
      window.location.href = "/dashboard";
      return;
    } else {
      throw new Error(res.message);
    }
  };
  const registerAction = async (data: any) => {
    const response = await fetch(process.env.API_URL + '/register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    if (res.message === 'User created successfully.') {
      window.location.href = "/login";
    }
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, registerAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );

};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};