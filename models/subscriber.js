const mongoose = require('mongoose');
mongoose.set('bufferCommands', false);
const subscriberSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true
  }, 
  subscribedToChannel: {
    type: Boolean, 
    required: true
  }, 
  subscribedDate: {
    type: Date, 
    required: true, 
    default: Date.now
  }
}); 

module.exports = mongoose.model('Subscriber', subscriberSchema);