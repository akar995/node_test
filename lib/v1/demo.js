exports.addCallback = ((a, b, callback) => {
  setTimeout(function () {
    return callback(null, a + b);
  }, 1888);
});
exports.addPromise = ((a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      return resolve(a + b);
    }, 1888);
  });
});
