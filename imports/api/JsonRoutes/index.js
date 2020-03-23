JsonRoutes.add("get", "/reddit", (req, res, next) => {
    console.log(req);
    JsonRoutes.sendResult(res, {
        code: 200
    });
});