const cors = require("cors");
const express = require("express");
const { mongoConnect } = require("./config/config");
const router = require("./routers/user");
const app = express();

const port = process.env.PORT || 4001;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/user", router);

(async () => {
  try {
    await mongoConnect();
    app.listen(port, (_) =>
      console.log(`Welcome, you are currently using mongodb ${port}`)
    );
  } catch (err) {
    console.log(`Failed to connect to mongodb`);
  }
})();
