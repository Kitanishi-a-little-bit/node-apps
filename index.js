const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: false })); // req.bodyを使う為に使用
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  console.log(req);
  res.send("<h1>トップページ</h1>");
});

app.post("/api/vi/quiz", (req, res) => {
  const answer = req.body.answer;
  if(answer === "2") {
    // res.send("<h1>不正解</h1>")
    res.redirect("/correct.html")
  } else {
    // res.send("<h1>不正解</h1>")
    res.redirect("/wrong.html")
  }
});

app.get("/about", (req, res) => {
  res.send("Aboutページ");
});

app.listen(3000, () => {
  console.log("起動中");
});
