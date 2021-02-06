import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/house-rice', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    nickname: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('User', UserSchema);

export default User;
