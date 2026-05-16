import express from "express";  

const app = express();
console.log(app);

app.get("/", (req, res) => {
    res.send("server is ready")
});
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
