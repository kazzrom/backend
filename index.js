import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import studentRouter from "./routers/Group/StudentRouter.js";
import characteristicRouter from "./routers/Profile/CharacteristicRouter.js";
import familyRouter from "./routers/Profile/FamilyRouter.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/students", studentRouter);
app.use("/characteristics", characteristicRouter);
app.use("/families", familyRouter);

app.listen(PORT, () => {
  console.log(`Server is running`);
});
