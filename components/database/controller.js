import myClient from "../model/userModal";
// import activity from "../model/activityModal";


export async function getUsers (req, res) {
    try{
        const users = await myClient.find({}); 
        if(!users){
            return res.status(404).json({error: 'Data not found'})
        }
        return res.status(200).send(users)
    }catch(error){
        res.status(404).json({error: error})
    }
}

// For the post user
export async function postUsers (req, res) {
    try{
        const formData = req.body;
        if(!formData){
            return res.status(404).json({error: 'Form data is not provided....!'});
        }
        else{
            myClient.create(formData, (error, data)=>{
                console.log(data); 
                return res.status(200).json(data); 
            })   
        }
    }catch(error){
        return res.status(404).json({error: 'Operation failed'}); 
    }
}

// For the PUT user
export async function putUsers (req, res) {
    try{
        const {userId} = req.query; 
        const formData = req.body; 
        if(userId && formData){
            const user = await myClient.findByIdAndUpdate(userId, formData)
            res.status(200).json(user); 
        }
        res.status(404).json({error: 'User is not selected...!'}); 
    }catch(errors){
        return res.status(404).json({error: 'Operation failed to update the data....!'}); 
    }
}


export async function putUsersActivity (req, res) {
    try{
        const {userId} = req.query; 
        const formData = req.body;
        console.log(formData); 
        if(userId && formData){
            const user = await myClient.findByIdAndUpdate(userId, formData)
            res.status(200).json(user); 
        }
        res.status(404).json({error: 'User is not selected...!'}); 
    }catch(errors){
        return res.status(404).json({error: 'Operation failed to update the data....!'}); 
    }
}

// For delete the user
export async function deleteUser (req, res){
    try{
        const {userId} = req.query; 
        if(userId){
            const user = await myClient.findByIdAndDelete(userId); 
            return res.status(200).json({deleted: user}); 
        }
        res.status(404).json({error:'User id is not selected'}); 
    }catch(error){
        res.status(404).json({error: 'Operation failed to delete the data....!'})
    }
}


// Get Specific User
export async function getSpecificUser(req, res) {
    try{
        const {singleUserId} = req.query; 
        if(singleUserId){
            const user = await myClient.findById(singleUserId); 
            return res.status(200).json(user); 
        }
        res.status(404).json({error: 'User id is not found.'}); 
    }catch(error){
        res.status(404).json({error: 'Operation failed to get a specific user.'}); 
    }
}


// For getting the specific user
// export async function getUser(req, res) {
//     try{
//         const {userId} = req.query; 
//         if(userId){
//             const user = await Users.findById(userId); 
//             return res.status(200).json(user); 
//         }
//         res.status(404).json({error: 'User id is not found.'}); 
//     }catch(error){
//         res.status(404).json({error: 'Operation failed to get a specific user.'}); 
//     }
// }