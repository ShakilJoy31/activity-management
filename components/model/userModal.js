import { Schema, models, model } from 'mongoose';

const userSchema = new Schema({
    name: String,
    email: String,
    phone: Number,
    address: String,
    education: String,
    hobby: String,
    
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
    endDate: String,
    note: String
})

const myUser = models.allUser || model('allUser', userSchema);
export default myUser;