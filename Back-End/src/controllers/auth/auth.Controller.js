const { StatusCodes } = require("http-status-codes");
const { successResponse, errorResponse } = require("../../utils/response");
const { MSG } = require("../../utils/message");
const UserService = require("../../services/auth/auth.Services");

const bcrypt = require('bcrypt');
const moment = require('moment');

const userService = new UserService();

exports.registerUser = async (req, res) => {
    console.log(req.body);

    const exitsUser = await userService.fetchSingleUser({ email: req.body.email });

    if (exitsUser) {
        return res.json(errorResponse(StatusCodes.BAD_REQUEST, true, MSG.USER_EXIST));
    }

    req.body.password = await bcrypt.hash(req.body.password, 11);
    req.body.create_at = moment().format('DD/MM/YYYY, h:mm:ss a');
    req.body.update_at = moment().format('DD/MM/YYYY, h:mm:ss a');


    const newUser = await userService.registerUser(req.body);


    return res.json(successResponse(StatusCodes.CREATED, false, MSG.USER_CREATED, newUser));
}

exports.loginUser = (req, res) => {
    return res.json(errorResponse(StatusCodes.INTERNAL_SERVER_ERROR, true, MSG.SUCCESS));
}