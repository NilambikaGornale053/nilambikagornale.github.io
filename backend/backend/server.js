const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// MONGO URI - FIXED
const MONGO_URI = "mongodb+srv://nilambikagornale_db_user:m3ueCLhAvbONqfi2@cluster0.fefvlbu.mongodb.net/cyberproject?appName=Cluster0";

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("DB Error:", err));

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  phone: String,
  website: String
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.post('/api/users', async (req, res) => {
  const saved = await new User(req.body).save();
  res.json(saved);
});

app.put('/api/users/:id', async (req, res) => {
  const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

app.delete('/api/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "deleted" });
});

app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));