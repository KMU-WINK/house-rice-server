import Express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routers/user-router';

const app = Express();
app.use(bodyParser.json());

// Router 을 추가시 아래와 같이 추가하세요.
app.use('/users', userRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(8000, () => {
    console.log('http://127.0.0.1:8000/');
});
