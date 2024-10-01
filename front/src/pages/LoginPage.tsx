import { useState } from 'react';
import { useAuth } from '../context/AuthContext.tsx';

export function LoginPage() {
  const [email, setEmail]: any = useState();
  const [password, setPassword]: any = useState();
  const [showText, setShowText] = useState(false);
  const {loginAction}: any = useAuth();
  const handleForm = (e: any) => {
    e.preventDefault();
    loginAction({ email: email, password: password });
  }
  return (
    <form onSubmit={handleForm}>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <input type={showText ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)} />
      <button type='button' onClick={() => setShowText(!showText)}>{!showText ? (<i className="fas fa-eye-slash"></i>) : (<i className="fas fa-eye"></i>)}</button>
      <button type="submit">Se connecter</button>
    </form>
  )
}