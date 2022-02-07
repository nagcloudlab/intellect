import mongoose from 'mongoose'

const Message = mongoose.model('Message', { text: String, createdBy: String });
export default Message