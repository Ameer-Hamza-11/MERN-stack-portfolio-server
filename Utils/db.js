const mongoose = require('mongoose');

if (!process.env.MONGODB_URI) {
  console.error("MONGODB_URI not defined!");
  throw new Error("Missing MongoDB URI");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  if (cached.conn) return cached.conn;

 if (!cached.promise) {
    const opts = { bufferCommands: false };
    cached.promise = mongoose.connect(process.env.MONGODB_URI, opts)
      .then((mongoose) => {
        console.log('Database connection successfull');
        return mongoose;
      }).catch((error) => {
        console.log('Database Connection failed', error);
        throw error; 
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
};

module.exports = connectDB;
