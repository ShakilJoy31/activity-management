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
    const handleCofirmDelete = () => {
        deleteUserFromDb(deleteUserId).then(res => console.log(res))
        const restUser = users.filter(user => user?._id !== deleteUserId)
        setUsers(restUser);
    }
    return (
        <div>
            <div className='mx-12'>
                <span onClick={() => router.push('/addDeleteUser')} style={{
                    position: 'absolute',
                    left: '50px',
                    top: '25px',
                    cursor: 'pointer'
                }}><BsArrowLeft color={'orange'} size={35}></BsArrowLeft></span>
                <div className='flex justify-center pt-4 pb-6 gap-x-12'>
                    <h1 className='text-5xl text-orange-500'>Explore Your Users here</h1>
                </div>
                <div>
                    <div className="w-full overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th> <span className='flex justify-center'> Sl No.</span></th>
                                    <th> <span className='flex justify-center'> Name</span></th>

                                    <th> <span className='flex justify-center'> Phone</span></th>
                                    <th> <span className='flex justify-center'> Email</span></th>
                                    <th> <span className='flex justify-center'> Address</span></th>
                                    <th> <span className='flex justify-center'> Action</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users?.map((user, index) => <tr key={index}>
                                        <th> <span className='flex justify-center'>{index + 1}</span> </th>
                                        <td><span className='flex justify-center'>{user?.name}</span></td>

                                        <td>
                                            <span className='flex justify-center'>{user?.phone}</span>
                                        </td>

                                        <td>
                                            <span className='flex justify-center'>{user.email}</span>
                                        </td>

                                        <td>
                                            <span className='flex justify-center'>{user.address}</span>
                                        </td>

                                        <th>
                                            <div className='flex justify-center'>
                                                <label onClick={() => setDeleteUserId(user?._id)} htmlFor="my-modal-4" className="btn"><span><AiTwotoneDelete color={'#9A1663'} size={30}></AiTwotoneDelete></span></label>
                                            </div>
                                        </th>
                                    </tr>)
                                }


                            </tbody>
                            <tfoot>
                                <tr>
                                    <th> <span className='flex justify-center'> Sl No.</span></th>
                                    <th> <span className='flex justify-center'> Name</span></th>

                                    <th> <span className='flex justify-center'> Phone</span></th>
                                    <th> <span className='flex justify-center'> Email</span></th>
                                    <th> <span className='flex justify-center'> Address</span></th>
                                    <th> <span className='flex justify-center'> Action</span></th>
                                </tr>
                            </tfoot>

                        </table>
                    </div>

                    {/* Modal for confirm delete */}
                    {
                        deleteUserId && <div>
                            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                            <label htmlFor="my-modal-4" className="cursor-pointer modal">
                                <label style={{
                                    backgroundColor: '#19A7CE',
                                    borderRadius: '5px'
                                }} className="relative modal-box" htmlFor="">
                                    <h3 className="flex justify-center mb-6 text-3xl font-bold text-black">Are you sure to delete?</h3>
                                        <div className='flex justify-end gap-x-6'>

                                            <label htmlFor="my-modal-4" style={{
                                                backgroundImage: "linear-gradient(45deg ,#FEA1BF, #BFEAF5)",
                                                backgroundSize: "100%",
                                                backgroundRepeat: "repeat",
                                            }} className={`normal-case btn btn-sm border-0 text-xl text-black mt-2 w-32`}>No
                                            </label>

                                            <label onClick={handleCofirmDelete} htmlFor="my-modal-4" style={{
                                                backgroundImage: "linear-gradient(45deg ,green ,white)",
                                                backgroundSize: "100%",
                                                backgroundRepeat: "repeat",
                                            }} className={`normal-case btn btn-sm border-0 text-xl text-black mt-2 w-32`}>Yes
                                            </label>

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