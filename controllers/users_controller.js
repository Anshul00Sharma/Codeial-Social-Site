module.exports.profile = function (req, res) {
  return res.render("users", {
    title: "users",
    welcome_msg: "Welcome to users page",
  });
};
