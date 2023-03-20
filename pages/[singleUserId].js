import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getUser } from '@/components/lib/helper';
import { useState } from 'react';
import { BsArrowLeft, BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import ShowUser from './ShowUser.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleUser = () => {
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
    const handlePreviousButton = () => {
        const userPosition = users.indexOf(user) - 1;
        const data = users[userPosition];
        if (userPosition > -1) {
            router.push(data._id)
        }
        else {
            toast.error('No previous user found!');
        }
    }


    // Handle Next button functionality.
    const handleNextButton = () => {
        const userPosition = users.indexOf(user) + 1;
        const data = users[userPosition];
        if (userPosition !== users?.length) {
            router.push(data._id)
        }
        else {
            toast.error('No next user found!');
        }
    }


    // Taking daily activity as input.
    return (
        <div className='flex items-center justify-center'>
            <div className='flex items-center justify-between'>
            <div>
                <span onClick={handlePreviousButton} className='hover:text-black'><BsFillArrowLeftCircleFill size={35}></BsFillArrowLeftCircleFill></span>
            </div>

            <div className='flex justify-center gap-x-6'>
                <div>
                <span onClick={() => router.push('/showUser')}><BsArrowLeft color={'orange'} size={35}></BsArrowLeft></span>
                </div>

                <div ref={componentRef} className={` bg-white ${ShowUser?.pageBorder} ${ShowUser?.backgroundImage}`}>
                {/* <div className={`${ShowUser.topBorder}`}></div> */}

                <div className='flex justify-between mx-12 gap-x-6'>
                    <div>
                        <div onClick={handlePrint} className={`w-48 tooltip`} data-tip="Clik me to download">
                            <img className={`w-48 tooltip ${ShowUser.download}`} src="https://i.ibb.co/0FJYB1d/Screenshot-1162.png" alt="" />
                        </div>

                        <div className='mt-4'>
                            <p className={`${ShowUser.invoiceAndDate} flex justify-around`}><span className=''>Invoice No:</span> <span className='text-red-600'>{user?.orderId}</span></p>
                            <p className={`${ShowUser.invoiceAndDate} flex justify-around`}><span className=''>Date:</span> <span className='text-red-600'>{user?.endDate}</span></p>
                        </div>
                    </div>

                    {/* another invoice */}
                    {/* <div className='flex justify-between mt-4'>
                        <div className={`${ShowUser.invoiceAndDate}`}>
                        <span className={` flex justify-end`}>Invoice No:</span>
                        <span className={` flex justify-end`}>Date:</span>
                        </div>
                        <div className={`${ShowUser.invoiceAndDate}`}>
                        <span className='flex justify-end text-red-600'>{user?.orderId}</span>
                        <span className='flex justify-end text-red-600'>{user?.endDate}</span>
                        </div>
                    </div> */}

                    <div className=''>
                        <p className='flex justify-center font-bold text-black text-7xl'>Invoice</p>

                        <div className='mt-8'>
                            <div className="overflow-x-auto">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th><span className='flex justify-center'>FROM</span></th>
                                            <th><span className='flex justify-center'>TO</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td>
                                                <div>
                                                    <p className='flex justify-center'>EXPERT SOLUTION</p>


                                                    <p className='flex justify-center'>MD MURSHIDUL HAQUE</p>


                                                    <p className='flex justify-center'>BANGLADESH</p>


                                                    <p className='flex justify-center'>MURSHIDUL29@GMAIL.COM</p>

                                                    <p className='flex justify-center'>+880 1772266236</p>


                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <p className='flex justify-center'>User Information</p>


                                                    <p className='flex justify-center'>{user?.clientName}</p>


                                                    <p className='flex justify-center'>{user?.address}</p>


                                                    <p className='flex justify-center'>{user?.email}</p>


                                                    <p className='flex justify-center'>{user?.phone}</p>

                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Table */}

                <div className='mx-12 mt-4'>
                    <div className="overflow-x-auto">
                        <table className="table w-full">

                            <thead>
                                <tr>
                                    <th><span className='flex justify-center'>Service</span></th>
                                    <th><span className='flex justify-center'>Task</span></th>
                                    <th><span className='flex justify-center'>Price</span></th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    selectedProject?.map((project, index) => <tr map={index}>
                                        <th><span className='flex justify-center'>{project}</span></th>
                                        <td><span className='flex justify-center'>{projectTaskArray[index]}</span></td>
                                        <td><span className='flex justify-center'>{projectIndPrice[index]}</span></td>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='flex justify-end mx-12 mt-4'>
                    <div className='flex justify-between w-36'>

                        <div>
                            <p className='flex justify-end text-black'>Sub Total:</p>
                            <p className='flex justify-end text-black'>(-) Discount: </p>
                            <p className='flex justify-end text-black'>Paid: </p>
                        </div>

                        <div>
                            <p className='text-red-600'>{totalPrice}</p>
                            <p className='text-red-600'>{totalPrice * (2 / 100)}</p>
                            <p className='text-red-600'>{user.paid}</p>
                        </div>

                    </div>
                </div>

                <div className='flex justify-between mx-12 mt-4'>
                    <img className='w-96' src="https://i.ibb.co/Hxsqjyg/332142867-590222216296249-973339747083001193-n.png" alt="" />

                    <div>
                        <div className={`${ShowUser?.dueShow}`}>
                            <p className='flex justify-between text-black'><span>Due: </span><span className='text-red-600'>{user?.due}</span></p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center w-full mt-4'>
                    <img className='w-full' src="https://i.ibb.co/kcvF1wv/Screenshot-1163.png" alt="" />
                </div>


            </div>

            </div>  

            <div className='ml-12'>
                <span onClick={handleNextButton} className='hover:text-black'><BsFillArrowRightCircleFill size={35}></BsFillArrowRightCircleFill></span>
            </div>

            <ToastContainer></ToastContainer>
        </div>
        </div>

    );
};

export default SingleUser;


{/* <span className='cursor-pointer hover:text-orange-500' onClick={handlePrint}><FaDownload size={45}></FaDownload></span> */ }