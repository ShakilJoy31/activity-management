import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react';
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUser } from '@/components/lib/helper';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isPasswordVasible, setIsPasswordVasible] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const handleLogin = () => {
    if(email && password){
      if (email === 'labib@gmail.com' && password === '12345') {
        router.push('/addDeleteUser');
      }
      else{
        toast.error('incorrect information');
      }
    }
    else{
      toast.error('email and password is required');
    }
  }
  return (
    <>
      <Head>
        <title>Activity Management</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className='flex justify-center py-8 text-4xl text-orange-500'>Let me recognize you first.</h1>
        <div className='flex justify-center'>
        <div style={{
          backgroundColor: '#19A7CE',
          borderRadius: '5px',
        }} className="card w-96 hover:shadow-2xl">
          <div className="card-body">
            <h1 className="flex justify-center text-4xl text-black">Login here</h1>
            <div>
              <div className="flex justify-center mt-12">
                <div>
                  <div className='gap-8 mb-8'>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Type your email' className="block mx-auto w-80 input focus:outline-none" required />
                    <br />

                    <div className="block mx-auto rounded-lg">
                      <input onChange={(e) => setPassword(e.target.value)} type={isPasswordVasible ? 'password' : 'text'} placeholder='Type your password' className="w-80 input focus:outline-none" required/>
                      {
                        isPasswordVasible ? <span style={{
                          position: 'absolute',
                          right: '40px',
                          marginTop: '10px'
                        }} onClick={() => setIsPasswordVasible(!isPasswordVasible)} className="pl-[5px] pr-[5px]"><AiFillEyeInvisible size={25}></AiFillEyeInvisible></span> : <span style={{
                          position: 'absolute',
                          right: '40px',
                          marginTop: '10px'
                        }} onClick={() => setIsPasswordVasible(!isPasswordVasible)} className="pl-[5px] pr-[5px]"><AiFillEye size={25}></AiFillEye></span>
                      }
                    </div>
                  </div>

                  <button style={{
                    backgroundImage: "linear-gradient(45deg, red, black)",
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                  }} onClick={handleLogin} className="block mx-auto mb-8 text-2xl text-white normal-case border-0 w-80 btn">Log in</button>

                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        
        <ToastContainer></ToastContainer>
      </main>
    </>
  )
}
