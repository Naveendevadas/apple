const user= require("../db/models/user")
const success_function = require('../utils/response-handler').success_function;
const error_function = require('../utils/response-handler').error_function;


exports.addmovies = async (req, res) => {
    try {
        let data = req.body;
        console.log("data from request:", data);

        const addedMovie = await user.create(data);

        if (addedMovie) {
            let response = success_function({
                statusCode: 201,
                message: "Movie added",
            });

            res.status(response.statusCode).send(response);
            return;
        } else {
            let response = error_function({
                statusCode: 400,
                message: "Movie addition failed",
            });
            res.status(response.statusCode).send(response);
            return;
        }
    } catch (error) {
        console.log("error:", error);

        let response = error_function({
            statusCode: 400,
            message: error.message ? error.message : "Something went wrong",
        });

        res.status(response.statusCode).send(response);
        return;
    }
};
