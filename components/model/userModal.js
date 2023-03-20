import { Schema, models, model } from 'mongoose';

const clientSchema = new Schema({
    name: String,
    email: String,
    phone: Number,
    address: String,
    
    orderId: String,
    files: String,
    clientName: String,
    website: String,
    projectName: String,
    projectList: Array,
    projectTask: Array,
    projectAccess: String,
    price: Array,
    paid: Number,
    due: Number,
    status: String,
    startDate: String,
    endDate: String
})

const myClient = models.clientInfo || model('clientInfo', clientSchema);
export default myClient;