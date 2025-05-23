const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json())

app.get("/api/hello", (req, res) => {
    const data = {message: 'Hello how are you ?'}
    res.json(data)
})

app.listen(9100, () => console.log('API runing on port 9100'))