import express from "express";
import cors from "cors";
// import { User } from "../src/firebase";

const app = express();

const PORT = 9000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const userRouter = express.Router();
const customerRouter = express.Router();

app.use("/user", userRouter);
app.use("customer", customerRouter);

// userRouter.route("/").post(sendDataToDataBase);
// userRouter.route("/:id").get(getUserData);
// customerRouter.route("/").get(getUserData);

app.get("/", (req, res) => {
  res.send({
    status: 200,
    data: [
      {
        msg: "hello world",
      },
    ],
  });
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
