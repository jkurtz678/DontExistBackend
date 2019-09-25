const Slide = require('../api/models/slide.js');

const Layouts = {
    INTRO: 'intro',
    CONTENT_1: 'content_1',
    CONTENT_2: 'content_2',
    CREDITS: 'credits'
}

const intro_slide = new Slide( Layouts.INTRO, "Intro" );

const title_slide = new Slide(
    Layouts.CONTENT_1,
    "Propulsion", 
    "description for game...",
    "momentsgone.mp3", 
    "moment's gone", 
    "Harrison Kurtz"
);

const level_1 = new Slide(
    Layouts.CONTENT_2,
    "level 1", 
    "battle theme", 
    "sleep.mp3",
    "sleep",
    "Harrison Kurtz"
);
const level_2 = new Slide(
    Layouts.CONTENT_1,
    "level 2",
    "nebula",
    "offbalance.mp3",
    "off balance", 
    "Jackson Kurtz"
);

const level_3 = new Slide(
    Layouts.CONTENT_2,
    "level 3",
    "boss theme",
    "frominside.mp3",
    "from inside",
    "Harrison Kurtz"
);

const credits = new Slide(Layouts.CREDITS, "credits");

const slides = [intro_slide, title_slide, level_1, level_2, level_3, credits];

module.exports = slides;
