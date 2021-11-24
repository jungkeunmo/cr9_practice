const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/", (req, res, next) => {
    const selectQuery = `
        SELECT  score,
                content,
                createdAt
          FROM  reviews
         ORDER  BY  content   ASC    
    `;

    try {
        db.query(selectQuery, (err, reviews) => {
            res.render("screens/home", {reviews});
        });
    } catch (error) {
        console.error(error);
        return res.redirect("/");
    };
});

router.get("/create", (req, res) => {
    res.render("screens/create");
});

router.post("/create", (req, res) => {
    const insertQuery = `
       INSERT   INTO    reviews (
           score,
           content,
           createdAt
       ) VALUES (
            ${req.body.score},
            "${req.body.content}",
            now()
       )
    `;

    try {
        db.query(insertQuery, (error, reviews) => {
            if(error) {
                console.log(error);
            };
            res.redirect("/");
        });
    } catch (error) {
        console.error(error);
        res.redirect("/");
    };    
});

module.exports = router;