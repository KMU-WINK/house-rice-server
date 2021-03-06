import express from 'express';
import * as userService from '../services/user-service';

const router = express.Router();

router.get('/', async (req, res) => {
    // 전체 유저 목록을 가져옵니다.
    const users = await userService.getUsers();
    res.json(users);
});

router.post('/', (req, res) => {
    // 회원가입
    const {
        username, password, nickname, name, phone,
    } = req.body;

    userService.register({
        username, password, nickname, name, phone,
    });

    res.status(200).json({ test: 'test' });
});

router.get('/:id', (req, res) => {
    // 한 명의 유저만 가져옵니다.
});

router.patch('/:id', (req, res) => {

});

export default router;
