
function cardinalSetup(jwt) {
    Cardinal.setup("init", {
        jwt: jwt
    });
}

function cardinalHandleChallenge(url, encoded_method_data, transaction_id) {
//    continueObject: ContinueObject,
//    orderObject: OrderObject

    Cardinal.continue('cca',
        { AcsUrl: url, Payload: encoded_method_data },
        { OrderDetails: { TransactionId: transaction_id } }
        );

    Cardinal.on("payments.validated", function (data, jwt) {
        return {
            jwt: jwt,
            data: data
        }
     }
}
