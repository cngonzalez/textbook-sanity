import {
  cyan, purple, gray, yellow, green, magenta, blue,
} from '@sanity/color';

const colorMapping = {
  Introduction: magenta,
  'Reading Workshop': cyan,
  'Reading-Writing Bridge': purple,
  'Writing Workshop': blue,
  'Weekly Launch': green,
  'Unit Theme': yellow,
};

export default function getSectionColor(doc) {
  if (!doc || !doc.unitSection) {
    return cyan;
  }

  return colorMapping[doc.unitSection] ?? cyan;
}
