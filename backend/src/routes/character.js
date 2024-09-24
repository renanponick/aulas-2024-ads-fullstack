const express = require("express");

const CharacterApi = require("../api/character");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", authMiddleware(), CharacterApi.findAllCharacters);
router.get("/:id", authMiddleware(), CharacterApi.findOneCharacter);
router.post("/", authMiddleware(['admin']), CharacterApi.createCharacter);
router.put("/:id", authMiddleware(['admin']), CharacterApi.updateCharacter);
router.delete("/:id", authMiddleware(['admin']), CharacterApi.deleteCharacter);

module.exports = router;
