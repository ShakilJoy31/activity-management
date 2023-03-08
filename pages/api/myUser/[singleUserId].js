import connectMongo from "../../../components/database/conn";
import { getSpecificUser } from "../../../components/database/controller";

export default async function handler(req, res) {
    connectMongo().catch(()=> res.status(405).json({error: 'Error in the Connection'}));
    // Type of request
    const { method } = req;
    switch (method) {
        case 'GET':
            getSpecificUser(req, res);
            break; 
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']); 
            res.status(405).end(`Method ${method} Is Not Allowed`)
            break; 
    }
}