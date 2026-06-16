// Route for user login
const loginUser = async (req, res) => {
  res.json({ msg: "Login User API working" });
};

// Route for user registration
const registerUser = async (req, res) => {
  res.json({ msg: "Register User API working" });
};

// Route for admin login
const adminLogin = async (req, res) => {
  res.json({ msg: "Admin Login API working" });
};

export { loginUser, registerUser, adminLogin };
