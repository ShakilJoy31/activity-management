import { useRouter } from 'next/router';
import ShowUser from './ShowUser.module.css';
const addDeleteUser = () => {
    const router = useRouter();
    return (
        <div>
            <div style={{
                backgroundImage: `url('https://www.shutterstock.com/image-vector/business-planning-task-management-concept-260nw-1987578881.jpg')`,
                width: '100vw',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                filter: 'blur(8px)',
            }} className="flex items-center justify-center min-h-screen">
            </div>
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: '2',
            }} className="">
                <div className='grid items-center justify-between grid-cols-1 lg:flex md:flex md:grid-cols-2 lg:grid-cols-3 gap-x-6'>

                <div onClick={() => router.push('/addUser')} className={`h-48 shadow-xl cursor-pointer w-80 hover:shadow-lg card image-full ${ShowUser.adminCard}`}>
                    <figure><img src="https://img.freepik.com/free-photo/business-people-shaking-hands-meeting-room_53876-15185.jpg" alt="Shoes" /></figure>
                    <h2 style={{
                        zIndex:'999'
                    }} className="flex items-center justify-center text-4xl text-orange-500">Add Client Data</h2>
                </div>

                <div onClick={() => router.push('/deleteUser')} className={`h-48 shadow-xl cursor-pointer w-80 hover:shadow-lg card image-full ${ShowUser.adminCard}`}>
                    <figure><img src="https://thumbs.dreamstime.com/b/client-icon-cancel-sign-client-icon-close-delete-remove-symbol-client-icon-cancel-sign-client-icon-close-delete-116307516.jpg" alt="Shoes" /></figure>
                    <h2 style={{
                        zIndex:'999'
                    }} className="flex items-center justify-center text-4xl text-orange-500">Delete Client</h2>
                </div>

                <div onClick={() => router.push('/showUser')} className={`h-48 shadow-xl cursor-pointer w-80 hover:shadow-lg card image-full ${ShowUser.adminCard}`}>
                    <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6o_G7xPtDmcPagF146XLVCOhHL81QtW07Zcs78R-WQeNC7J5wUB3diiEqxP7h4xd9D58&usqp=CAU" alt="Shoes" /></figure>
                    <h2 style={{
                        zIndex:'999'
                    }} className="flex items-center justify-center text-4xl text-orange-500">Show Clients</h2>
                </div>
                </div>

            </div>
        </div >
    );
};

export default addDeleteUser;