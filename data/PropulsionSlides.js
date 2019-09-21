const Slide = require('../api/models/slide.js');

const title_slide = new Slide("Propulsion", "description for game...");
const level_1 = new Slide("level 1", "battle theme");
const level_2 = new Slide("level 2", "nebula");
const level_3 = new Slide("level 3", "boss theme");
const level_4 = new Slide("level 4", "epilogue");

const slides = [title_slide, level_1, level_2, level_3, level_4];

module.exports = slides;
