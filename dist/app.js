"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const express_session_1 = __importDefault(require("express-session"));
// dotenv.config();
const app = (0, express_1.default)();
// const port = 3000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Session middleware for session-based authentication
app.use((0, express_session_1.default)({
    secret: '3b19b46a1a2592d56b5f4338fa7ad88d09f987d37fc5f74a25e5c12e37f0367c',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        secure: false, // Set to true if using HTTPS
    },
}));
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:5000",
    ],
    credentials: true,
}));
// Basic route
app.get('/', (req, res) => {
    res.send('hello from human!');
});
app.use("/api/", routes_1.default);
exports.default = app;
