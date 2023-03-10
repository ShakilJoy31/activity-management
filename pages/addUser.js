import { useEffect, useRef, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { addUsers } from "../components/lib/helper";
import { BsArrowLeft } from 'react-icons/bs';
import { ImUserPlus } from 'react-icons/im';
import { useRouter } from "next/router";
import { useReactToPrint } from 'react-to-print';
import { getUser, specificUser, updateUser, updateUserActivity } from '@/components/lib/helper';
import ShowUser from './ShowUser.module.css';
import { HiSave } from 'react-icons/hi';
import { RxReset } from 'react-icons/rx';
import { GiPlayerNext } from 'react-icons/gi';
import { GiPlayerPrevious } from 'react-icons/gi';
import { RxUpdate } from 'react-icons/rx';
import { FaDownload } from 'react-icons/fa';
import { BiNotepad } from 'react-icons/bi';
import { FaUserAlt } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProjectSelectionTable from "./ProjectSelectionTable";

const AddUser = () => {
    const router = useRouter();

    // State for client personal information
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [education, setEducation] = useState('');
    const [hobby, setHobby] = useState('');


    // State for client official information
    const [orderId, setOrderId] = useState('');
    const [files, setFiles] = useState('');
    const [clientName, setClientName] = useState('');
    const [website, setWebsite] = useState('');
    const [projectName, setProjectName] = useState('');
    const [projectAccess, setProjectAccess] = useState('');
    const [price, setPrice] = useState('');
    const [paid, setPaid] = useState('');
    const [due, setDue] = useState('');
    const [status, setStatus] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [note, setNote] = useState('');

    // State for project
    const [shopify, setShopify] = useState(false); 
    const [wooCommerce, setWooCommerce] = useState(false); 
    const [addProducts, setAddProducts] = useState(false); 
    const [createWebsite, setCreateWebsite] = useState(false); 
    const [GMBProfile, setGMBProfile] = useState(false); 
    const [analyticsSetup, setAnalyticsSetup] = useState(false); 
    const [websiteLogo, setWebsiteLogo] = useState(false);

    // State for project price management
    let [shopifyInput, setShopifyInput] = useState(0); 
    let [wooCommerceInput, setWooCommerceInput] = useState(0); 
    let [addProductsInput, setAddProductsInput] = useState(0); 
    let [createWebsiteInput, setCreateWebsiteInput] = useState(0); 
    let [GMBProfileInput, setGMBProfileInput] = useState(0); 
    let [analyticsSetupInput, setAnalyticsSetupInput] = useState(0); 
    let [websiteLogoInput, setWebsiteLogoInput] = useState(0);

    // States for project task
    const [shopifyTask, setShopifyTask] = useState(''); 
    const [wooCommerceTask, setWooCommerceTask] = useState(''); 
    const [addProductsTask, setAddProductsTask] = useState(''); 
    const [createWebsiteTask, setCreateWebsiteTask] = useState(''); 
    const [GMBProfileTask, setGMBProfileTask] = useState(''); 
    const [analyticsSetupTask, setAnalyticsSetupTask] = useState(''); 
    const [websiteLogoTask, setWebsiteLogoTask] = useState(''); 

    console.log()

    const totalPrice = shopifyInput + wooCommerceInput + addProductsInput + createWebsiteInput + GMBProfileInput + analyticsSetupInput + websiteLogoInput;

    // Form Data section

    const handleAddUserButton = () => {
        if (!name || !email || !phone || !address || !education) {
            toast.error('Missing Personal Information')
        }
        else {
            const formData = {
                name: name,
                email: email,
                phone: phone,
                address: address,
                education: education
            }
            console.log(formData);
            // updateUser(router?.query?.singleUserId, formData).then(res => {
            //     setName('');
            //     setEmail('');
            //     setPhone('');
            //     setAddress('');
            //     setEducation('');
            //     toast.success('Information is updated successfully')
            // })
        }
    }

    const handleUserDataUpdateButton = () => {
        if (totalPrice) {
            const userFormData = {
                name: name,
                email: email,
                phone: phone,
                address: address,
                education: education,
                hobby: hobby,
                orderId: orderId,
                files: files,
                clientName: clientName,
                website: website,
                projectName: projectName,
                projectList: {
                    shopify:shopify, 
                    WooCommerce: wooCommerce, 
                    addProducts: addProducts, 
                    createWebsite: createWebsite,
                    GMBProfile: GMBProfile,
                    analyticsSetup: analyticsSetup,
                    websiteLogo: websiteLogo
                },
                projectTask: {
                    shopifyTask:shopifyTask, 
                    WooCommerceTask: wooCommerceTask, 
                    addProductsTask: addProductsTask, 
                    createWebsiteTask: createWebsiteTask,
                    GMBProfileTask: GMBProfileTask,
                    analyticsSetupTask: analyticsSetupTask,
                    websiteLogoTask: websiteLogoTask
                },
                projectAccess: projectAccess,
                price: {
                    shopifyInput:shopifyInput, 
                    WooCommerceInput: wooCommerceInput, 
                    addProductsInput: addProductsInput, 
                    createWebsiteInput: createWebsiteInput,
                    GMBProfileInput: GMBProfileInput,
                    analyticsSetupInput: analyticsSetupInput,
                    websiteLogoInput: websiteLogoInput
                },
                paid: paid,
                due: totalPrice - paid,
                status: status,
                startDate: startDate,
                endDate: endDate,
                note: note
            }

            addUsers(userFormData).then(res => {
                if (res) {
                    console.log(res); 
                    setOrderId('')
                    setFiles('')
                    setClientName('')
                    setWebsite('')
                    setProjectName('')
                    setProjectAccess('')
                    setPrice('')
                    setPaid('')
                    setDue('')
                    setStatus('')
                    setStartDate('')
                    setEndDate('')
                    setNote('')
                    toast.success('User is added successfully')
                }
                else {
                    toast.error('Something went wrong! Try Again.')
                }
            })
        }
        else {
            toast.error('Client Information is required');
        }
    }


    // This functionality is taken from addClient
    // Create and download PDF
    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })

    // Taking daily activity as input.
    const handleResetInputField = () => {
        setOrderId('')
        setFiles('')
        setClientName('')
        setWebsite('')
        setProjectName('')
        setProjectAccess('')
        setPrice('')
        setPaid('')
        setDue('')
        setStatus('')
        setStartDate('')
        setEndDate('')
        setNote('')
        toast.success('Input fields are empty.')
    }

    const [projectSelectionModal, setProjectSelectionModal] = useState(false)

    return (
        <div ref={componentRef} className='pb-4 mx-16'>
            <h1 className="flex justify-center pt-6 mb-8 text-4xl font-bold text-orange-500">Add a Client here.</h1>
            <div className=" hero">
                <span onClick={() => router.push('/addDeleteUser')} style={{
                    position: 'absolute',
                    left: '50px',
                    top: '25px',
                    cursor: 'pointer'
                }}><BsArrowLeft color={'orange'} size={35}></BsArrowLeft></span>
                <div className="grid justify-center lg:flex gap-x-6">

                    <img style={{
                        position:'absolute',
                        left:'26%',
                        top:'13%'
                    }} className="w-20 h-20 rounded-md" src="https://i.ibb.co/fDQ6SHM/Expert-Solution-Black.gif" alt="" />
                    <div className={`flex-shrink-0 w-full mt-24 max-w-sm bg-black card ${ShowUser?.userUpdateCard}`}>
                        <div>
                            <div className={`p-6`}>
                                <h1 className="flex justify-center mb-4 text-xl text-white">
                                    <span className='flex items-center justify-center gap-x-4'>
                                        <span><FaUserAlt color={'white'} size={25}></FaUserAlt></span>
                                        <span>Client Personal Information.</span>
                                    </span>
                                </h1>
                                <div className="mb-6 form-control">
                                    <label className="label">
                                        <span className="text-white ">Name</span>
                                    </label>
                                    <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Type your name' value={name} className="input focus:outline-none " />
                                </div>
                                <div className="mb-6 form-control">
                                    <label className="label">
                                        <span className="text-white ">Email</span>
                                    </label>
                                    <input onChange={(e) => setEmail(e.target.value)} type="email" value={email} placeholder='Type your email' className="input focus:outline-none" />
                                </div>
                                <div className="mb-6 form-control">
                                    <label className="label">
                                        <span className="text-white ">Phone</span>
                                    </label>
                                    <input onChange={(e) => setPhone(e.target.value)} type="number" placeholder='Type your phone number' value={phone} className="input focus:outline-none " />
                                </div>
                                <div className="mb-6 form-control">
                                    <label className="label">
                                        <span className="text-white ">Address</span>
                                    </label>
                                    <input onChange={(e) => setAddress(e.target.value)} type="text" value={address} placeholder='Type your address' className="input focus:outline-none " />
                                </div>
                                

                                
                            </div>
                        </div>

                    </div>

                    {/* User Card */}
                    <div ref={componentRef} className={`text-center lg:text-left ${ShowUser?.userToggleCard} pb-6 pl-6 pr-6 w-full pt-2 h-full`}>

                        <h1 className="flex justify-center my-2 text-2xl text-white">Client Official Information</h1>

                        <div>
                            <div className=''>
                                {/* User Card */}
                                <div className='mt-4'>
                                    <div className=''>
                                        <div>
                                            <div className='flex justify-between gap-x-4'>
                                                <div className="mb-4 form-control">
                                                    <label className="flex items-center ">
                                                        <span className="text-xl text-white">Client</span>
                                                        <span className="pl-2 mr-2 text-xl text-white">Id</span>
                                                        <input onChange={(e) => setOrderId(e.target.value)} value={orderId} type="text" placeholder='Order Id' className="w-64 p-2 ml-16 rounded focus:outline-none" />
                                                    </label>
                                                </div>


                                                <div className="mb-4 form-control">
                                                    <label className="flex justify-between cursor-pointer">
                                                        <span className="text-xl text-white">Files</span>
                                                        <input onChange={(e) => setFiles(e.target.value)} value={files} type="text" placeholder='Files' className="w-64 p-2 ml-6 rounded focus:outline-none" />
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="mb-4 form-control">
                                                <label className="flex items-center">
                                                    <span className="text-xl text-white w-[25%]">Client Name</span>
                                                    <input onChange={(e) => setClientName(e.target.value)} value={clientName} type="text" placeholder='Type client name' className="w-full p-2 rounded focus:outline-none" />
                                                </label>
                                            </div>

                                            <div className="mb-4 form-control">
                                                <label className="flex items-center">
                                                    <span className="text-xl text-white w-[25%]">Project Name</span>
                                                    <input onChange={(e) => setProjectName(e.target.value)} type="text" placeholder='Type project name' className="w-full p-2 rounded focus:outline-none" />
                                                </label>
                                            </div>

                                            <div className="mb-4 form-control">
                                                <label className="flex items-center justify-between">
                                                    <span className="text-xl text-white w-[25]">Project List</span>

                                                    <label style={{ height: '40px' }} htmlFor="my-modal-3" onClick={(e) => setProjectSelectionModal(!projectSelectionModal)} className="w-[80%] rounded btn btn-sm text-white hover:text-black normal-case bg-black border-0 hover:bg-white h-4">
                                                        Select Projects
                                                    </label>

                                                </label>
                                            </div>


                                            <div className="mb-4 form-control">
                                                <label className="flex items-center">
                                                    <span className="text-xl text-white w-[25%]">Project Access</span>
                                                    <textarea value={projectAccess} onChange={(e) => setProjectAccess(e.target.value)} className="w-full py-2 pl-2 rounded-md focus:outline-none" placeholder='Project Access'></textarea>
                                                </label>
                                            </div>

                                            {/* 1 */}
                                            <div className='flex justify-between gap-x-4'>
                                                <div className="mb-4 form-control">
                                                    <label className="flex items-center ">
                                                        <span className="text-xl text-white">Price</span>
                                                        <input onChange={(e) => setPrice(e.target.value)} value={totalPrice} type="number" placeholder='Price' className="w-64 p-2 rounded ml-[6.5rem] focus:outline-none" />
                                                    </label>
                                                </div>

                                                <div className="mb-4 form-control">
                                                    <label className="flex items-center">
                                                        <span className="text-xl text-white">Paid</span>
                                                        <input onChange={(e) => setPaid(e.target.value)} value={paid} type="number" placeholder='Amount Paid' className="w-64 p-2 ml-6 rounded focus:outline-none" />
                                                    </label>
                                                </div>
                                            </div>


                                            {/* 2 */}
                                            <div className='flex justify-between gap-x-4'>
                                                <div className="mb-4 form-control">
                                                    <label className="flex items-center ">
                                                        <span className="text-xl text-white">Due</span>
                                                        <input onChange={(e) => setDue(e.target.value)} type="number" placeholder='Due' value={(totalPrice) ? totalPrice - paid : ''} className="w-64 p-2 rounded ml-[7rem] focus:outline-none" />
                                                    </label>
                                                </div>

                                                <div className="mb-4 form-control">
                                                    <label className="flex items-center">
                                                        <span className="text-xl text-white">Status</span>
                                                        <input onChange={(e) => setStatus(e.target.value)} value={status} type="text" placeholder='Type Status' className="w-64 p-2 ml-6 rounded focus:outline-none" />
                                                    </label>
                                                </div>
                                            </div>

                                            {/* fake 3 */}
                                            <div className='flex gap-x-2'>
                                                <div className="mb-4 form-control">
                                                    <label className="flex items-center ">
                                                        <span className="text-xl text-white mr-[57.5px]">Start Date</span>
                                                        <input onChange={(e) => setStartDate(e.target.value)} type="date" className="w-64 p-2 rounded focus:outline-none" />
                                                        {/* value={startDatePlaceholder} */}
                                                    </label>
                                                </div>

                                                <div className="mb-6 form-control">
                                                    <label className="flex items-center">
                                                        <span className="text-xl text-white">End Date</span>

                                                        <input onChange={(e) => setEndDate(e.target.value)} type="date" className="w-64 p-2 ml-2 rounded focus:outline-none" />
                                                        {/* value={endDatePlaceholder} */}
                                                    </label>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* <p style={{
                                opacity: '0'
                            }} className="">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem shakil.</p> */}

                            <div className='flex justify-end'>

                                <div className='flex justify-between gap-x-8'>
                                    <label onClick={handleResetInputField} style={{
                                        backgroundImage: "linear-gradient(45deg, #dd7973, #ffbd03 )",
                                        backgroundSize: "100%",
                                        backgroundRepeat: "repeat",

                                    }} className="mt-4 border-0 w-50 btn btn-sm"> <span className='text-white normal-case'> <span className='flex items-center justify-center gap-x-2'> <span>Reset</span><span><RxReset size={20}></RxReset></span></span></span>
                                    </label>

                                    <label onClick={handleUserDataUpdateButton} style={{
                                        backgroundImage: "linear-gradient(45deg, aliceblue, yellow )",
                                        backgroundSize: "100%",
                                        backgroundRepeat: "repeat",
                                    }} className="mt-4 border-0 w-50 btn btn-sm"> <span className='text-red-600 normal-case'> <span className='flex items-center justify-center gap-x-2'> <span>Save</span><span><HiSave size={20}></HiSave></span></span></span>
                                    </label>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

            {
                projectSelectionModal && <ProjectSelectionTable setProjectSelectionModal={setProjectSelectionModal} setShopify={setShopify} setWooCommerce={setWooCommerce} setAddProducts={setAddProducts} setCreateWebsite={setCreateWebsite} setGMBProfile={setGMBProfile} setAnalyticsSetup={setAnalyticsSetup} setWebsiteLogo={setWebsiteLogo} shopify={shopify} wooCommerce={wooCommerce} addProducts={addProducts} createWebsite={createWebsite} GMBProfile={GMBProfile} analyticsSetup={analyticsSetup} websiteLogo={websiteLogo} setShopifyInput={setShopifyInput} setWooCommerceInput={setWooCommerceInput} setAddProductsInput={setAddProductsInput} setCreateWebsiteInput={setCreateWebsiteInput} setGMBProfileInput={setGMBProfileInput} setAnalyticsSetupInput={setAnalyticsSetupInput} setWebsiteLogoInput={setWebsiteLogoInput} setShopifyTask={setShopifyTask} setWooCommerceTask={setWooCommerceTask} setAddProductsTask={setAddProductsTask} setCreateWebsiteTask={setCreateWebsiteTask} setGMBProfileTask={setGMBProfileTask} setAnalyticsSetupTask={setAnalyticsSetupTask} setWebsiteLogoTask={setWebsiteLogoTask}></ProjectSelectionTable>
            }
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddUser;