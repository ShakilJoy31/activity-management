import { Schema, models, model } from 'mongoose';

const activitySchema = new Schema({
    orderId : String,
            files: String,
            clientName:String,
            website:String,
            projectName: String,
            projectAccess: String,
            price:Number,
            paid:Number,
            due: Number,
            status:String,
            startDate: String,
            endDate: String,
            note: String
})
const activity = models.activities || model('activities', activitySchema)
export default activity; 