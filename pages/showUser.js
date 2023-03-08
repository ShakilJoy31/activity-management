import { getUser } from '@/components/lib/helper';
import { useEffect } from 'react';
import { useState } from 'react';
import ShowUser from './ShowUser.module.css';
import { BsArrowLeft } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { BsSearch } from "react-icons/bs";

const ShowUsers = () => {
    const router = useRouter(); 
    const [users, setUsers] = useState([]);
    const [searchName, setSearchName] = useState('');
    console.log(searchName); 
    useEffect(() => {
        getUser().then(res => {
            if(searchName){
                const searchPeople = res.filter((food, index) => (food.name).toLowerCase().match(searchName));
                setUsers(searchPeople); 
            }
            else{
                setUsers(res)
            }
        })
    }, [searchName])
    return (
        <div className=''>
            <div>
                <div className='flex items-center pt-6 justify-evenly'>
                <span onClick={()=>router.push('/addDeleteUser')}><BsArrowLeft color={'orange'} size={35}></BsArrowLeft></span>
            <h1 className='text-2xl text-orange-500 lg:text-5xl md:text-4xl'>Explore Your Users here</h1>
            <div>
            <div className='flex justify-center form-control'>
                        <input onChange={(e)=>setSearchName((e.target.value).toLowerCase())} type='text' placeholder='Search by Name' className="w-full pl-8 focus:outline-none input" />
                        {
                            !searchName ? <span style={{
                                position: 'absolute',
                                top:'42px',
                                marginLeft:'10px'
                            }}><BsSearch color={'white'}></BsSearch></span> : <span style={{
                                position: 'absolute',
                                top:'42px',
                                marginLeft:'10px'
                            }}><BsSearch color={'#1F8A70'}></BsSearch></span>
                        }

                        
            </div>
            </div>

            </div>

            </div>


            <div className='flex justify-center pt-4 pb-6 gap-x-12'>
            </div>
            <div className='flex justify-center'>
                <div className='flex items-center justify-center'>
                <div className={`grid grid-cols-2 gap-2 ${users?.length > 6 ? 'lg:grid-cols-6 md:grid-cols-4' : 'lg:grid-cols-4 md:grid-cols-3'} `}>
                    {
                        users.map((user, index) => <div onClick={()=>router.push(user._id)} className={`w-48 p-4 hover:text-white hover:bg-black bg-white text-black cursor-pointer ${ShowUser?.paymentAbleFood}`}>
                            <h1 className='flex justify-center text-xl'>{(user?.name)?.slice(0, 25)}</h1>
                            <p className='flex justify-center'>{(user?.email)?.slice(0, 33)}</p>
                        </div>)
                    }
                </div>
                </div>
            </div>
        </div>
    );
};

export default ShowUsers;