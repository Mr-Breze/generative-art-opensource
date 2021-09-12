const fs = require("fs");
const width = 3000;
const height = 3000;
const dir = __dirname;
const description = "Mr. Breze's Balloon Collection";
const baseImageUri = "https://hashlips/nft";
const startEditionFrom = 1;
const endEditionAt = 10;
const editionSize = 10;
const raceWeights = [
  {
    value: "balloon",
    from: 1,
    to: editionSize,
  },
];

const races = {
  balloon: {
    name: "Balloon",
    layers: [
      {
        name: "Backgrounds",
        elements: [
          {
            id: 0,
            name: "Dark Blue",
            path: `${dir}/Backgrounds/darkblue.png`,
            weight: 500, //20%
          },
          {
            id: 1,
            name: "Dark Grey",
            path: `${dir}/Backgrounds/darkgrey.png`,
            weight: 400, //20%
          },
          {
            id: 2,
            name: "Light Blue",
            path: `${dir}/Backgrounds/lightblue.png`,
            weight: 300, //20%
          },
          {
            id: 3,
            name: "Light Grey",
            path: `${dir}/Backgrounds/lightgrey.png`,
            weight: 200, //10%
          },
          {
            id: 4,
            name: "Pink",
            path: `${dir}/Backgrounds/pink.png`,
            weight: 150, //10%
          },
          {
            id: 5,
            name: "Purple",
            path: `${dir}/Backgrounds/purple.png`,
            weight: 100, //6%
          },
          {
            id: 6,
            name: "Green",
            path: `${dir}/Backgrounds/green.png`,
            weight: 70, //6%
          },
          {
            id: 7,
            name: "Orange",
            path: `${dir}/Backgrounds/orange.png`,
            weight: 40, //3%
          },
          {
            id: 8,
            name: "Red",
            path: `${dir}/Backgrounds/red.png`,
            weight: 25, //3%
          },
          {
            id: 9,
            name: "Golden",
            path: `${dir}/Backgrounds/golden.png`,
            weight: 10, //2%
          },
        ],
      
        name: "Body",
        elements: [
          {
            id: 0,
            name: "Light Grey",
            path: `${dir}/body/lightgrey balloon.png`,
            weight: 500, //20
          },
          {
            id: 1,
            name: "Beige",
            path: `${dir}/body/beige balloon.png`,
            weight: 400, //20%
          },
          {
            id: 2,
            name: "Dark Grey",
            path: `${dir}/body/darkgrey balloon.png`,
            weight: 300, //10%
          },
          {
            id: 3,
            name: "Dark Blue",
            path: `${dir}/body/darkblue balloon.png`,
            weight: 250, //10%
          },
          {
            id: 4,
            name: "Dark Green",
            path: `${dir}body/darkgreen balloon.png`,
            weight: 200, //10%
          },
          {
            id: 5,
            name: "Light Green",
            path: `${dir}/body/lightgreen balloon.png`,
            weight: 150, //10%
          },
          {
            id: 6,
            name: "Pink",
            path: `${dir}/body/pink balloon.png`,
            weight: 100, //6%
          },
          {
            id: 7,
            name: "Purple",
            path: `${dir}/body/purple balloon.png`,
            weight: 70, //6%
          },
          {
            id: 8,
            name: "Red",
            path: `${dir}/body/red balloon.png`,
            weight: 40, //6%
          },
          {
            id: 9,
            name: "Royal",
            path: `${dir}/body/royal balloon.png`,
            weight: 10, //2%
          },
        ],

        name: "Eyes",
        elements: [
          {
            id: 0,
            name: "Angry Brown",
            path: `${dir}/Eyes/angry brown.png`,
            weight: 500, //4%
          },
          {
            id: 1,
            name: "Angry Lightbrown",
            path: `${dir}/Eyes/angry lightbrown.png`,
            weight: 480, //4%
          },
          {
            id: 2,
            name: "AYFR Brown",
            path: `${dir}/Eyes/ayfr brown.png`,
            weight: 460, //4%
          },
          {
            id: 3,
            name: "AYFR Lightbrown",
            path: `${dir}/Eyes/ayfr lightbrown.png`,
            weight: 440, //4%
          },
          {
            id: 4,
            name: "Dizzy Brown",
            path: `${dir}/Eyes/dizzy brown.png`,
            weight: 420, //4%
          },
          {
            id: 5,
            name: "Dizzy Lightbrown",
            path: `${dir}/Eyes/dizzy lightbrown.png`,
            weight: 400, //4%
          },
          {
            id: 6,
            name: "Excited Brown",
            path: `${dir}/Eyes/excited brown.png`,
            weight: 380, //4%
          },
          {
            id: 7,
            name: "Excited Lightbrown",
            path: `${dir}/Eyes/excited lightbrown.png`,
            weight: 360, //4%
          },
          {
            id: 8,
            name: "Sleepy Brown",
            path: `${dir}/Eyes/sleepy brown.png`,
            weight: 340, //4%
          },
          {
            id: 9,
            name: "Sleepy Lightbrown",
            path: `${dir}/Eyes/sleepy lightbrown.png`,
            weight: 320, //4%
          },
          {
            id: 10,
            name: "Surprised Brown",
            path: `${dir}/Eyes/surprised brown.png`,
            weight: 300, //4%
          },
          {
            id: 11,
            name: "Surprised Lightbrown",
            path: `${dir}/Eyes/surprised lightbrown.png`,
            weight: 280, //4%
          },
          {
            id: 12,
            name: "Angry Blue",
            path: `${dir}/Eyes/angry blue.png`,
            weight: 260, //3%
          },
          {
            id: 13,
            name: "AYFR Blue",
            path: `${dir}/Eyes/ayfr blue.png`,
            weight: 245, //3%
          },
          {
            id: 14,
            name: "Dizzy Blue",
            path: `${dir}/Eyes/dizzy blue.png`,
            weight: 230, //3%
          },
          {
            id: 15,
            name: "Excited Blue",
            path: `${dir}/Eyes/excited blue.png`,
            weight: 215, //3%
          },
          {
            id: 16,
            name: "Sleepy Blue",
            path: `${dir}/Eyes/sleepy blue.png`,
            weight: 200, //3%
          },
          {
            id: 17,
            name: "Surprised Blue",
            path: `${dir}/Eyes/surprised blue.png`,
            weight: 185, //3%
          },
          {
          id: 18,
          name: "Angry Green",
          path: `${dir}/Eyes/angry green.png`,
          weight: 170, //3%
          },
          {
            id: 19,
            name: "AYFR Green",
            path: `${dir}/Eyes/ayfr green.png`,
            weight: 155, //3%
          },
          {
            id: 20,
            name: "Dizzy Green",
            path: `${dir}/Eyes/dizzy green.png`,
            weight: 140, //3%
          },
          {
            id: 21,
            name: "Excited Green",
            path: `${dir}/Eyes/excited green.png`,
            weight: 125, //3%
          },
          {
            id: 22,
            name: "Sleepy Green",
            path: `${dir}/Eyes/sleepy green.png`,
            weight: 110, //3%
          },
          {
            id: 23,
            name: "Surprised Green",
            path: `${dir}/Eyes/surprised green.png`,
            weight: 95, //3%
          },
          {
          id: 24,
          name: "Angry Silver-Blue",
          path: `${dir}/Eyes/angry silverblue.png`,
          weight: 80, //2%
          },
          {
          id: 25,
          name: "AYFR Silver-Blue",
          path: `${dir}/Eyes/ayfr silverblue.png`,
          weight: 70, //2%
          }, 
          {
          id: 26,
          name: "Dizzy Silver-Blue",
          path: `${dir}/Eyes/dizzy silverblue.png`,
          weight: 60, //2%
          },
          {
          id: 27,
          name: "Excited Silver-Blue",
          path: `${dir}/Eyes/excited silverblue.png`,
          weight: 50, //2%
          },
          {
          id: 28,
          name: "Sleepy Silver-Blue",
          path: `${dir}/Eyes/sleepy silverblue.png`,
          weight: 40, //2%
          },
          {
          id: 29,
          name: "Surprised Silver-Blue",
          path: `${dir}/Eyes/surprised silverblue.png`,
          weight: 30, //2%
          },
          {
            id: 30,
            name: "Round Glasses",
            path: `${dir}/Eyes/round glasses.png`,
            weight: 20, //1%
          },
          {
            id: 31,
            name: "Square Glasses",
            path: `${dir}/Eyes/square glasses.png`,
            weight: 15, //1%
          },
          {
            id: 32,
            name: "Solana Glasses",
            path: `${dir}/Eyes/solglasses.png`,
            weight: 10, //1%
          },
          {
            id: 33,
            name: "AYFR Golden",
            path: `${dir}/Eyes/ayfr golden.png`,
            weight: 5, //1%
          },
        ],
        
        name: "Top",
        elements: [
          {
        id: 0,
        name: "Golden Crown",
        path: `${dir}/top/golden crown.png`,
        weight: 500, //2%
          },
        ],

        position: { x: 0, y: 0 },
        size: { width: width, height: height },
  }     
    ],
  },
};

module.exports = {
  width,
  height,
  description,
  baseImageUri,
  editionSize,
  startEditionFrom,
  endEditionAt,
  races,
  raceWeights,
};
