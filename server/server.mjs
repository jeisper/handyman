import express from "express";
import cors from "cors";
import axios from "axios";

const PORT = 9000;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const pageRouter = express.Router();

app.use("/", pageRouter);

pageRouter.route("/");

// postsRouter.route("/").get(getData);
// ticketsRouter.route("/").post(getPage);
// ticketsRouter.route("/:id").get(getTicket);

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
