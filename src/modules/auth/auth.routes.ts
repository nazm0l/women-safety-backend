// auth.routes.ts
import express from 'express';
import { register, login } from './auth.controller';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

export  const Authorization = router;

// this file is written 
