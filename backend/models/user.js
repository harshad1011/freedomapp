// var schema = new Schema({
//     name: String
// });

var model = {
    name: "Test",
};

// module.exports = mongoose.model("User", schema);

module.exports = Object.assign(module.exports, model);