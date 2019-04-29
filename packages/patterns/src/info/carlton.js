export default {
  name: "carlton",
  design: ["Anneke Caramin", "Joost De Cock"],
  code: "Joost De Cock",
  department: "menswear",
  type: "pattern",
  difficulty: 5,
  tags: ["top", "coat", "cosplay"],
  parts: [
    "back",
    "belt",
    "bentBack",
    "bentBase",
    "bentFront",
    "bentSleeve",
    "bentTopSleeve",
    "bentUnderSleeve",
    "chestPocketBag",
    "chestPocketWelt",
    "collar",
    "collarstand",
    "cuffFacing",
    "front",
    "innerPocketBag",
    "innerPocketTab",
    "innerPocketWelt",
    "pocket",
    "pocketFlap",
    "pocketLining",
    "tail",
    "topSleeve",
    "underCollar",
    "underSleeve"
  ],
  optionGroups: {
    fit: [
      "acrossBackFactor",
      "armholeDepthFactor",
      "bicepsEase",
      "chestEase",
      "cuffEase",
      "shoulderEase",
      "sleeveBend",
      "sleeveLengthBonus",
      "waistEase",
      "seatEase"
    ],
    advanced: [
      "backNeckCutout",
      "frontArmholeDeeper",
      "frontOverlap",
      "lapelReduction",
      "shoulderSlopeReduction",
      "sleevecapHeight",
      "sleevecapEase"
    ],
    pockets: [
      "pocketPlacementHorizontal",
      "pocketPlacementVertical",
      "pocketWidth",
      "pocketHeight",
      "pocketRadius",
      "pocketFlapRadius",
      "chestPocketHeight",
      "chestPocketWidth",
      "chestPocketPlacement",
      "chestPocketAngle",
      "innerPocketPlacement",
      "innerPocketWidth",
      "innerPocketDepth",
      "innerPocketWeltHeight"
    ],
    style: ["beltWidth", "buttonSpacingHorizontal", "cuffLength", "length"],
    collar: ["collarHeight", "collarSpread", "collarFlare"]
  }
};