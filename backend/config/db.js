const mongoose = require('mongoose');
const connectDB = () => {

  mongoose.connect('mongodb+srv://admin:55qcV9nzw4BSVdcj@db-airbnb-cluster.l9xj0.mongodb.net/DB-AIRBNB-Cluster?retryWrites=true&w=majority&appName=DB-AIRBNB-Cluster', {
  
    }).then(() => {
      console.log('Connected to MongoDB');
    }).
    catch((err) => {
      console.log('Error connecting to MongoDB', err);
  });
}

module.exports = connectDB;


