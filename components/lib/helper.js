const baseUrl = "https://activity-management.vercel.app";

// http://localhost:3000
// https://activity-management.vercel.app

// Get all the user from the database
export const getUser = async () =>{
    const response = await fetch(`${baseUrl}/api/myUser`)
    const json = await response.json();
    return json;
}

// Posting new user
export const addUsers = async (formData) => {
        try{
            const Options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            }
            const response = await fetch(`${baseUrl}/api/myUser`, Options); 
            const json = await response.json(); 
            return json; 
        }catch(error){
            return(error)
        }
}

// Update User
export async function updateUser (userId, formData) {
    try{
        const Options = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            }
            const response = await fetch(`${baseUrl}/api/myUser/?userId=${userId}`, Options)
            const json = await response.json(); 
            return json; 
        }catch(error){
            return (error);  
        }
}

// export async function updateUserActivity (userId, formData) {
//     try{
//         console.log(userId, formData); 
//         const Options = {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(formData)
//             }
//             const response = await fetch(`${baseUrl}/api/myUser/?userId=${userId}`, Options)
//             const json = await response.json(); 
//             return json; 
//         }catch(error){
//             return (error);  
//         }
// }

// Delete user
export async function deleteUserFromDb (userId){
    console.log(userId); 
    async function getStaticProps(context){
        try{
        const Options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(`${baseUrl}/api/myUser/?userId=${userId}`, Options)
        const json = await response.json(); 
        return json;
    }catch(error){
        return(error); 
    }
    }
    return getStaticProps(); 
}

// Gegging the specific user
// export async function specificUser (userId){
//   const res = await fetch(`${baseUrl}/api/myUser/${userId}`);
//   const user = await res.json();
//   return user; 
// }