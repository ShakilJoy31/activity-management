import { useRouter } from "next/router";
import { AiTwotoneDelete } from "react-icons/ai";
import { useState } from 'react';
import { useEffect } from 'react';
import { getUser, deleteUserFromDb } from "@/components/lib/helper";
import { BsArrowLeft } from 'react-icons/bs';

const DeleteUser = () => {
    const router = useRouter(); 
    const [users, setUsers] = useState([]);
    const [deleteUserId, setDeleteUserId] = useState(''); 
    useEffect(() => {
        getUser().then(res => setUsers(res))
    }, [])
    const handleCofirmDelete = () =>{
        deleteUserFromDb(deleteUserId).then(res => console.log(res))
        const restUser = users.filter(user => user?._id !== deleteUserId)
        setUsers(restUser); 
        setDeleteUserId('');
    }
    return (
        <div>
            <div className='mx-12'>
            <span onClick={()=>router.push('/addDeleteUser')} style={{
                position:'absolute',
                left:'50px',
                top:'25px',
                cursor:'pointer'
            }}><BsArrowLeft color={'orange'} size={35}></BsArrowLeft></span>
            <div className='flex justify-center pt-4 pb-6 gap-x-12'>
            <h1 className='text-5xl text-orange-500'>Explore Your Users here</h1>
            </div>
                {/* <h1 className='flex justify-center mb-8 text-4xl font-bold'>All Users are here.</h1> */}
                <div>
                    <div className="w-full overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th> <span className='flex justify-center'> Sl No.</span></th>
                                    <th> <span className='flex justify-center'> Name</span></th>
                                    <th> <span className='flex justify-center'> Photo</span></th>
                                    <th> <span className='flex justify-center'> Phone</span></th>
                                    <th> <span className='flex justify-center'> Email</span></th>
                                    <th> <span className='flex justify-center'> Address</span></th>
                                    <th> <span className='flex justify-center'> Education</span></th>
                                    <th> <span className='flex justify-center'> Action</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index) => <tr>
                                        <th> <span className='flex justify-center'>{index + 1}</span> </th>
                                        <td><span className='flex justify-center'>{user?.name}</span></td>
                                        <td>
                                            <div className='flex justify-center'>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="w-16 h-16 mask mask-squircle">
                                                            <img src='#' alt="User" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className='flex justify-center'>{user?.phone}</span>
                                        </td>
    
                                        <td>
                                            <span className='flex justify-center'>{user.email}</span>
                                        </td>
    
                                        <td>
                                            <span className='flex justify-center'>{user.address}</span>
                                        </td>
    
                                        <td>
                                            <span className='flex justify-center'>{user.education}</span>
                                        </td>
                                        <th>
                                            <div className='flex justify-center'>
                                                <label onClick={()=>setDeleteUserId(user?._id)} htmlFor="my-modal-4" className="btn"><span><AiTwotoneDelete color={'#9A1663'} size={30}></AiTwotoneDelete></span></label>
                                            </div>
                                        </th>
                                    </tr>)
                                }
                                

                            </tbody>
                            <tfoot>
                                <tr>
                                <th> <span className='flex justify-center'> Sl No.</span></th>
                                    <th> <span className='flex justify-center'> Name</span></th>
                                    <th> <span className='flex justify-center'> Photo</span></th>
                                    <th> <span className='flex justify-center'> Phone</span></th>
                                    <th> <span className='flex justify-center'> Email</span></th>
                                    <th> <span className='flex justify-center'> Address</span></th>
                                    <th> <span className='flex justify-center'> Education</span></th>
                                    <th> <span className='flex justify-center'> Action</span></th>
                                </tr>
                            </tfoot>

                        </table>
                    </div>
                    {/* <div>
                        <div className='flex items-center justify-center gap-x-4'>
                            <p className='flex justify-center text-2xl text-error'>Waiting for you to add some food to the cart---{'>'}</p>
                            <button className='text-red-500 btn btn-square loading'></button>
                            <button style={{
                                backgroundImage: "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
                                backgroundSize: "100%",
                                backgroundRepeat: "repeat",
                            }} onClick={() => router.push('/')} className="btn btn-error btn-outline hover:cursor-pointer"> <span className='text-black normal-case border-0'>Let Me Add</span> </button>
                        </div>
                    </div> */}

                    {/* Modal for confirm delete */}

                    {
                        deleteUserId && <div>
                        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                        <label htmlFor="my-modal-4" className="cursor-pointer modal">
                            <label className="relative modal-box" htmlFor="">
                                <h3 className="flex justify-center mb-6 text-3xl font-bold text-error">Are you sure to delete?</h3>
                                <div className='flex justify-center gap-x-8'>
                                    <button onClick={()=>setDeleteUserId('')} className='btn btn-success btn-outline w-[140px]'>No</button>
                                    <button onClick={handleCofirmDelete} className='w-[140px] btn btn-error btn-outline'>Yes</button>
                                </div>
                            </label>
                        </label>
                    </div>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default DeleteUser;