const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");
const colors = require("colors/safe");

dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("trust proxyy", 1);

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 30 // limit each IP to 30 requests per windowMs
});

app.use(limiter);
app.use("/", require("./routes/APICalls"));

if (process.env.NODE_ENV === "production") {
	app.use(express.static("frontend/build"));

	app.get("*", (req, res) =>
		res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
	);
} else if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

app.listen(PORT, () => {
	console.log(
		colors.green.bold(
			`Server running in ${process.env.NODE_ENV} mode at http://localhost:${PORT}`
		)
	);
});
