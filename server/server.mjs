import express from "express";
import cors from "cors";
import { async } from "@firebase/util";
// import { User } from "../src/firebase";

const app = express();

const PORT = 9000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

export const sendUserData = async (req, res) => {};

export const getUserData = async (req, res) => {};

const userRouter = express.Router();
const customerRouter = express.Router();
const formRouter = express.Router();

app.use("/user", userRouter);
app.use("/customer", customerRouter);
app.use("/form", formRouter);

userRouter.route("/:id").post(sendUserData);

userRouter.route("/:id").get(getUserData);

customerRouter.route("/").get(getUserData);

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
