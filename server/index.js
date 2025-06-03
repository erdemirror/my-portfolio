import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/api/contact", (req, res) => {
  const { name, email, subject, message } = req.body;
  console.log("hello:", {
    name,
    email,
    subject,
    message,
  });

  // You can add email sending or database logic here

  res.json({ message: "avsan2" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
