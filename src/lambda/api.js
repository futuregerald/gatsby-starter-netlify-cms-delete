exports.handler = function(event, context, callback) {
  console.log(event.headers);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(event.headers),
  });
};
