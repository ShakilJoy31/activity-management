import connectMongo from "../../../components/database/conn";
import { getUsers, postUsers, putUsers, deleteUser, putUsersActivity } from "../../../components/database/controller";

export default async function handler(req, res) {
    connectMongo().catch(()=> res.status(405).json({error: 'Error in the Connection'}));
    // Type of request
    const { method } = req;
    switch (method) {
        case 'GET':
            getUsers(req, res);
            break; 
        case 'POST':
            postUsers(req, res);
            break; 
        case 'PUT': 
             putUsers(req, res); 
             putUsersActivity(req, res); 
            break; 
        case 'DELETE':
            deleteUser(req,res); 
            break; 
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']); 
            res.status(405).end(`Method ${method} Is Not Allowed`)
            break; 
    }
}