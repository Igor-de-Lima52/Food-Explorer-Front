import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

import { api } from "../services/api.js";

function AuthProvider({ children }){
  const [data, setData] = useState({});

  async function signIn({ email, password }){
    try{
      const response = await api.post("sessions", { email, password }, { withCredentials: true });
      const { user, token } = response.data;

      localStorage.setItem("@food-explorer:user", JSON.stringify(user));
      localStorage.setItem("@food-explorer:token", token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`; 

      setData({ user });
    }catch(error){
      if(error.response){
        alert(error.response.data.message);
      }else{
        alert("Não foi possível entrar.");
      }
    }
  }
  async function signOut(){
    localStorage.removeItem("@food-explorer:user");
    setData({});
  }
  
  useEffect(() => {
    const user = localStorage.getItem("@food-explorer:user");
    const token = localStorage.getItem("@food-explorer:token");

    if(token && user){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, []);

  return(
    <AuthContext.Provider value={{
      signIn,
      signOut,
      user: data.user
    }}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);
  
  return context;
}

export { AuthProvider, useAuth };