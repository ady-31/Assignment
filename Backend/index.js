import express from "express";
// import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from './models/Book.js'; 
import cors from "cors";
 
const app = express();

// Add middleware to parse JSON bodies
app.use(express.json());  
app.use(cors())

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome to MERN");
});

// Route to save a new Book
app.post('/books', async (request, response) => {
    try {
        // Validate request body
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }

        // Create a new book object
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        };

        // Save the book to the database
        const book = await Book.create(newBook);
        return response.status(201).send(book);
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Connect to MongoDB and start the server
mongoose
    .connect('mongodb+srv://8wn94xL3YusRDmLm:abcd@bookstore.h3hrr.mongodb.net/bookstore')
    .then(() => {
        console.log('App connected to database');
        app.listen(5000, () => {
            console.log(`App is listening to port: ${5000}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
