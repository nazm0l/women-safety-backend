"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// dotenv.config();
const app = (0, express_1.default)();
const port = 3000;
// Middleware
// app.use(cors());
// app.use(express.json());
// Database connection
// const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/myapp';
// mongoose.connect(mongoURI)
//   .then(() => console.log('MongoDB connected successfully'))
//   .catch(err => console.error('MongoDB connection error:', err));
// Basic route
app.get('/', (req, res) => {
    res.send('hello from human');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
exports.default = app;
