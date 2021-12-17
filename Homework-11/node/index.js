const express = require("express");
const app = express();

// var blocks = {
//     'Fixed': 'Fastened securely in position',
//     'Movable': 'Capable of being moved',
//     'Rotating': 'Moving in a circle around its center'
// };
const blocks = [
  {
    id: "fixed",
    description: "Fastened securely in position",
  },
  {
    id: "movable",
    description: "Capable of being moved",
  },
  {
    id: "rotating",
    description: "Moving in a circle around its center",
  },
];

app.use((req, res, next) => {
  console.log(req.query);
  next();
});

app.use(express.static("public"));

app.get("/blocks", (req, res) => {
  res.json(blocks);
});
app.get("/blocks/:id", (req, res) => {
  const { id } = req.params;
  const block = blocks.filter((block) => block.id === id)[0];
  res.json(block);
});

app.put("blocks/:id", (req, res) => {
  const { id } = req.params;
  const block = blocks.map((item) => {
    if (item.id === id) {
      return {
        id: req.body.id,
        description: req.body.description,
      };
    }
    return item;
  });
  res.json(block);
});

app.delete("/blocks/:id", (req, res) => {
  const { id } = req.params;
  const deletedBlock = blocks.filter((item) => item.id === id);
  res.json(deletedBlock[0]);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
