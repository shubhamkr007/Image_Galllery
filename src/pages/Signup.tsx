import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../firebase/config';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate();
  const [email, setEmail] =useState<string>('');
  const [password, setPassword]=useState<string>('');
  const [error, setError]=useState<string>('');

  // console.log(email,password);

  const handleSubmit= async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    console.log('aaaa');

    try{
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    }
    catch(error)
    {
      if (error.code === 'auth/email-already-in-use') {
        try {
          await signInWithEmailAndPassword(auth, email, password);
          navigate('/');
        } catch (loginError) {
          console.error(loginError.message);
          setError(error.message)
        }
      } else {
      console.error(error.message);
      setError(error.message)
    }
    }

  }
  return (
    <form  onSubmit={handleSubmit}>
      {error && error}
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col ">
            <div className="text-center">
              <h1 className="text-5xl font-bold">SignUp Now!</h1>
              <p className="py-6">SignUp and Share Your Photos to the World!</p>
            </div>
            <div className="card sm:w-[30rem] shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}  placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">SignUp</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </form>
  )
}

export default Signup