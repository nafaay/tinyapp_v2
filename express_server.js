const express = require("express");
const app = express();
const PORT = 8080; // default port 8080

app.set("view engine", "ejs");

const urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});
app.get("/urls/:shortURL", (req, res) => {
  const templateVars = { url: urlDatabase[req.params.shortURL]}
  res.render("url_show", templateVars);
  // res.send(`<h4>${urlDatabase[req.params.shortURL]}</h4>`);
})

app.get("/urls", (req, res) => {
  const templateVars = { urls: urlDatabase} 
  res.render("urls_list", templateVars);
})


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});