import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the dist directory
app.use(express.static('dist'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
