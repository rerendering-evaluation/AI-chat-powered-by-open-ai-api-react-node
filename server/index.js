const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const configuration = new Configuration({
  organization: "org-Qi5JOLPEbyUqtGErr3vOhAtl",
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

const port = 3001;

app.post("/", async (req, res) => {
  const message = req.body;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${message.message}`,
    max_tokens: 100,
    temperature: 0.5,
  });
  res.json({
    message: response.data.choices[0].text,
  });
});

app.listen(port, () => {
  console.log("Example");
});
