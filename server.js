import app from "./api/app.js";

const port = 3003;

app.listen(3003, () => {
  console.log(`server running at ${port}`);
});
