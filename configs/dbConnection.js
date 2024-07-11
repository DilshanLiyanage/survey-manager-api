import mongoose from 'mongoose';

const connetDb = async () => { 
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Connected to database. host="+connect.connection.host+" name="+connect.connection.name);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
};


export default connetDb;