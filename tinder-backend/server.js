// const express = require("express");
// const mongoose = require("mongoose");
import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import Cards from './models/CardsModel.js';


//app config
const app = express();
const port = process.env.PORT || 5000;


//middleware
app.use(cors());
app.use(express.json());

//DB config
const db_url = "mongodb+srv://tinder-admin:tinder-admin@cluster0.ocutd.mongodb.net/tinderDB?retryWrites=true&w=majority";
mongoose.connect(db_url, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, });
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

//API endpoints
app.get("/", (request, response) => {
  response.status(200).send("Backend Works");
});

app.post("/cards", (request, response) => {
    console.log("create card called");
    const card = request.body;
    console.log(card);
    Cards.create(card, (err,data) => {
        if(err){
            response.status(500).send("Error occured while creating card"+err);
        }else{
            response.status(201).send("Card created successfully");
        }
    });
});

app.get("/cards", (request,response) => {
    Cards.find((err, data) => {
        if(err){
            response.status(500).send("Failed to get cards");
        }else{
            response.status(200).send(data);
        }
    });
})

//Listener
app.listen(port, () => {
  console.log(`Backend Started, listening to port ${port}`);
});
