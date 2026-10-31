
import express from 'express';

const app = express();

// app.get('/', (req, res) => {
//     res.send('Server is ready');
// });

// Get a list of 5 jokes
app.get('/api/jokes', (req, res) => {

    const jokes = [
        {
            id: 1,
            title: 'Funny Computer',
            content: 'Why did the computer go to the doctor? Because it had a virus!'
        },
        {
            id: 2,
            title: 'Funny Programmer',
            content: 'Why do programmers prefer dark mode? Because light attracts bugs!'
        },
        {
            id: 3,
            title: 'Funny Math',
            content: 'Why was the math book sad? Because it had too many problems!'
        },
        {
            id: 4,
            title: 'Funny Developer',
            content: 'Why did the developer go broke? Because he used up all his cache!'
        },
        {
            id: 5,
            title: 'Funny JavaScript',
            content: 'Why did JavaScript developer wear glasses? Because he could not C#!'
        }
    ];

    res.json(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
