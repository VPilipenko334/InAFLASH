  const randomPic = new Array();

  randomPic[0] = "https://inaflash-seeds.s3.amazonaws.com/bride.jpg";
  // randomPic[1] = "./random_pics/beach.jpg";
  // randomPic[2] = "./random_pics/bride.jpg";
  // randomPic[3] = "./random_pics/castle.jpg";
  // randomPic[4] = "./random_pics/child.jpg";
  // randomPic[5] = "./random_pics/cloud.jpg";
  // randomPic[6] = "./random_pics/grey.jpg";
  // randomPic[7] = "./random_pics/fairy.jpg";
  // randomPic[8] = "./random_pics/house.jpg";
  // randomPic[9] = "./random_pics/mushrooms.jpg";
  // randomPic[10] = "./random_pics/ocean.jpg";
  // randomPic[11] = "./random_pics/painting.jpg";
  // randomPic[12] = "./random_pics/purple_trees.jpg";
  // randomPic[13] = "./random_pics/sea.jpg";
  // randomPic[14] = "./random_pics/ski.jpg";
  // randomPic[15] = "./random_pics/water.jpg";


  const getRandomNumber = (max) => Math.floor(Math.random() * max);

  export const getRandomImage = () => {
    document.getElementById('random-photo').innerHTML = '<img src="' + randomPic[getRandomNumber(randomPic.length)] + '" />';
  } 


