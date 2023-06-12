// index.js

/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "images")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**
 * Routes Definitions
 */
app.get("/", async (request, response) => {
  let links = await getAllLinks();
  let lovedbrands = await getAllLovedBrands();
  response.render("index", { title: "Home", menu: links, lovedbrands : lovedbrands });
});

app.get("/men", async (request, response) => {
  let links = await getAllLinks();
  let lovedbrands = await getAllLovedBrands();
  response.render("men", { title: "Men", menu: links, lovedbrands : lovedbrands  });
});

app.get("/women", async (request, response) => {
  let links = await getAllLinks();
  response.render("women", { title: "Women", menu: links });
});

app.get("/kids", async (request, response) => {
  let links = await getAllLinks();
  response.render("kids", { title: "Kids", menu: links });
});

app.get("/homeliving", async (request, response) => {
  let links = await getAllLinks();
  response.render("homeliving", { title: "Home & Living", menu: links });
});

app.get("/beauty", async (request, response) => {
  let links = await getAllLinks();
  response.render("beauty", { title: "Beauty", menu: links });
});

app.get("/profile", async (request, response) => {
  let links = await getAllLinks();
  response.render("profile", { title: "Profile", menu: links });
});

app.get("/wishlist", async (request, response) => {
  let links = await getAllLinks();
  response.render("wishlist", { title: "Wishlist", menu: links });
});

app.get("/bag", async (request, response) => {
  let links = await getAllLinks();
  response.render("bag", { title: "Bag", menu: links });
});

app.get("/levis", async (request, response) => {
  let links = await getAllLinks();
  let levis = await getAllLevis();
  response.render("levis", { title: "Levi's",  menu: links, levis : levis });
});
9
app.get("/nike", async (request, response) => {
  let links = await getAllLinks();
  let lovedbrands = await getAllLovedBrands();
  response.render("nike", { title: "Nike",  menu: links, lovedbrands : lovedbrands });
});

app.get("/chanel", async (request, response) => {
  let links = await getAllLinks();
  let lovedbrands = await getAllLovedBrands();
  response.render("chanel", { title: "Chanel",  menu: links, lovedbrands : lovedbrands });
});

app.get("/hnm", async (request, response) => {
  let links = await getAllLinks();
  let lovedbrands = await getAllLovedBrands();
  response.render("hnm", { title: "H&M",  menu: links, lovedbrands : lovedbrands });
});

app.get("/lululemon", async (request, response) => {
  let links = await getAllLinks();
  let lovedbrands = await getAllLovedBrands();
  response.render("lululemon", { title: "Lululemon",  menu: links, lovedbrands : lovedbrands });
});

app.get("/rolex", async (request, response) => {
  let links = await getAllLinks();
  let lovedbrands = await getAllLovedBrands();
  response.render("rolex", { title: "Rolex",  menu: links, lovedbrands : lovedbrands });
});

app.get("/dior", async (request, response) => {
  let links = await getAllLinks();
  let lovedbrands = await getAllLovedBrands();
  response.render("dior", { title: "Dior",  menu: links, lovedbrands : lovedbrands });
});

app.get("/levisjacket", async (request, response) => {
  let links = await getAllLinks();
  let levis = await getAllLevis();
  let denim = await getOneLevisjacket();
  response.render("levisjacket", { title: "Levis Jacket",  menu: links, levis : levis, jacket : denim });
});

/**
 * Server Activation
 */
app.listen(port, async () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
  const { MongoClient, ObjectId } = require("mongodb");
  const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}/?retryWrites=true&w=majority`;
  const client = new MongoClient(dbUrl);
    //MONGO HELPER FUNCTIONS
    async function connection() {
      db = client.db("urbanClothingAdmin");
      return db;
    }

    async function getAllLinks() {
      db = await connection();
      let results = db.collection("menuLinks").find({}); // find({}) is select all
      res = await results.toArray();
      return res;
    }

    async function getAllLovedBrands() {
      db = await connection();
      let lovedBrands = db.collection("lovedBrands").find({});
      resbrands = await lovedBrands.toArray();
      return resbrands;
    }

    async function getAllLevis() {
      db = await connection();
      let levis = db.collection("levis").find({});
      reslevis = await levis.toArray();
      return reslevis;
    }

    async function getOneLevisjacket() {
      db = await connection();
      let jack = db.collection("levis").findOne({ type: "Denim Jacket"});
      return jack;
    }