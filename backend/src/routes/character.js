const express = require("express");

const CharacterApi = require("../api/character");
const router = express.Router();

router.get("/", CharacterApi.findAllCharacters);
router.get("/:id", CharacterApi.findOneCharacter);
router.post("/", CharacterApi.createCharacter);
router.put("/:id", CharacterApi.updateCharacter);
router.delete("/:id", CharacterApi.deleteCharacter);

module.exports = router;
