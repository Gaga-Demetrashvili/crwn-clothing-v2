require("dotenv").config().parsed;
const stripe = require("stripe")("sk_test_51LYBX0JFE1wgNGVBnn2UHlvlx05Xs30lWeQd8VxlyJIH7IKOdVYcTDIDJYzsObjVx7gZfOp1enYOi1oKfjCn229y00fxsbJgIP");

exports.handler = async (event) => {
    try {
        const { amount } = JSON.parse(event.body);

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
            payment_method_types: ["card"],
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ paymentIntent }),
        };
    } catch (error) {
        console.log({ error });

        return {
            statusCode: 400,
            body: JSON.stringify({ error }),
        };
    }
};