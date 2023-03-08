import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getUser, specificUser, updateUser, updateUserActivity } from '@/components/lib/helper';
import { useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import { BsArrowLeft } from 'react-icons/bs';
import image from './Invoice Tamplate.svg';
import ShowUser from './ShowUser.module.css';
// import { HiSave } from 'react-icons/hi';
// import { RxReset } from 'react-icons/rx';
// import { GiPlayerNext } from 'react-icons/gi';
// import { GiPlayerPrevious } from 'react-icons/gi';
// import { RxUpdate } from 'react-icons/rx';
// import { FaDownload } from 'react-icons/fa';
// import { BiNotepad } from 'react-icons/bi';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const singleUser = () => {
    // Create and download PDF
    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })
    // Fetching Data....
    const router = useRouter();
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState([]);
    useEffect(() => {
        // specificUser(router?.query?.singleUserId).then(res => setUsers(res))
        getUser().then(res => setUsers(res))
        if (users?.length !== 0) {
            const foundUser = users.find(singleUser => singleUser._id === router?.query?.singleUserId);
            setUser(foundUser)
        }
    }, [users])

    // user?.projectList?.map(p=>console.log(p.shopify))
    let selectedProject = [];
    user?.projectList?.map(p => {
        if (p.shopify) {
            selectedProject.push('Shopify Store Setup')
        }
        if (p.WooCommerce) {
            selectedProject.push('WooCommerce Store Setup')
        }
        if (p.addProducts) {
            selectedProject.push('Add Products Details')
        }
        if (p.createWebsite) {
            selectedProject.push('Create Website Policy')
        }
        if (p.GMBProfile) {
            selectedProject.push('GMB Profile Setup')
        }
        if (p.analyticsSetup) {
            selectedProject.push('Analytics Setup')
        }
        if (p.websiteLogo) {
            selectedProject.push('Website Logo')
        }
    })

    let projectTaskArray = [];
    user?.projectTask?.map(p => {
        if (p.shopifyTask) {
            projectTaskArray.push(p?.shopifyTask)
        }
        if (p.WooCommerceTask) {
            projectTaskArray.push(p?.WooCommerceTask)
        }
        if (p.addProductsTask) {
            projectTaskArray.push(p?.addProductsTask)
        }
        if (p.createWebsiteTask) {
            projectTaskArray.push(p?.createWebsiteTask)
        }
        if (p.GMBProfileTask) {
            projectTaskArray.push(p?.GMBProfileTask)
        }
        if (p.analyticsSetupTask) {
            projectTaskArray.push(p?.analyticsSetupTask)
        }
        if (p.websiteLogoTask) {
            projectTaskArray.push(p?.websiteLogoTask)
        }
    })


    let projectIndPrice = [];
    let totalPrice = 0;
    user?.price?.map(p => {
        if (p.shopifyInput) {
            projectIndPrice.push(p?.shopifyInput)
            totalPrice = totalPrice + p?.shopifyInput;
        }
        if (p.WooCommerceInput) {
            projectIndPrice.push(p?.WooCommerceInput)
            totalPrice = totalPrice + p?.WooCommerceInput;
        }
        if (p.addProductsInput) {
            projectIndPrice.push(p?.addProductsInput)
            totalPrice = totalPrice + p?.addProductsInput;
        }
        if (p.createWebsiteInput) {
            projectIndPrice.push(p?.createWebsiteInput)
            totalPrice = totalPrice + p?.createWebsiteInput;
        }
        if (p.GMBProfileInput) {
            projectIndPrice.push(p?.GMBProfileInput)
            totalPrice = totalPrice + p?.GMBProfileInput;
        }
        if (p.analyticsSetupInput) {
            projectIndPrice.push(p?.analyticsSetupInput)
            totalPrice = totalPrice + p?.analyticsSetupInput;
        }
        if (p.websiteLogoInput) {
            projectIndPrice.push(p?.websiteLogoInput)
            totalPrice = totalPrice + p?.websiteLogoInput;
        }
    })

    // Previous and Next button functionality
    // const handlePreviousButton = () => {
    //     const userPosition = users.indexOf(user) - 1;
    //     const data = users[userPosition];
    //     if (userPosition > -1) {
    //         router.push(data._id)
    //     }
    //     else {
    //         toast.error('No previous user found!');
    //     }
    // }

    // const handleNextButton = () => {
    //     const userPosition = users.indexOf(user) + 1;
    //     console.log(userPosition, users.length);
    //     const data = users[userPosition];
    //     if (userPosition !== users?.length) {
    //         router.push(data._id)
    //     }
    //     else {
    //         toast.error('No next user found!');
    //     }
    // }
    // Taking daily activity as input.
    const [noteForClient, setNoteForClient] = useState(false)
    return (
        <div style={{ backgroundImage: `url('https://i.ibb.co/02WGMX8/Screenshot-1141.png')`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }} ref={componentRef} className={`pb-[850px] mx-72 ${ShowUser?.backgroundImage}`}>
            <span className='cursor-pointer hover:text-orange-500' onClick={handlePrint}><FaDownload size={45}></FaDownload></span>
            <div className='flex justify-end mr-[rem] mt-[rem]'>
                
                <div className="overflow-x-auto">
                    <table className="w-64 text-black">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td>
                                    <div>
                                        <small>EXPERT SOLUTION</small>

                                        <br />
                                        <small>MD MURSHIDUL HAQUE</small>
                                        <br />

                                        <small>BANGLADESH</small>
                                        <br />

                                        <small>MURSHIDUL29@GMAIL.COM</small>
                                        <br />
                                        <small>+880 1772266236</small>

                                        <br />
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <small>{user?.clientName}</small>
                                        <br />

                                        <small>{user?.address}</small>

                                        <br />
                                        <small>{user?.email}</small>

                                        <br />
                                        <small>{user?.phone}</small>
                                        <br />
                                        </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default singleUser;