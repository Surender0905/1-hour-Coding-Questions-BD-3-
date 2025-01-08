import app from "./src/app.js";

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

process.on("error", (error) => {
    console.error(error);
    process.exit(1);
});
