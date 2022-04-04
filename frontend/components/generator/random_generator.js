const randomPic = new Array();

randomPic[0] = "https://inaflash-seeds.s3.amazonaws.com/bride.jpg";
randomPic[1] = "https://inaflash-seeds.s3.amazonaws.com/background.jpg";
randomPic[2] = "https://inaflash-seeds.s3.amazonaws.com/bride.jpg";
randomPic[3] = "https://inaflash-seeds.s3.amazonaws.com/castle.jpg";
randomPic[4] = "https://inaflash-seeds.s3.amazonaws.com/child.jpg";
randomPic[5] = "https://inaflash-seeds.s3.amazonaws.com/cloud.jpg";
randomPic[6] = "https://inaflash-seeds.s3.amazonaws.com/grey.jpg";
randomPic[7] = "https://inaflash-seeds.s3.amazonaws.com/fairy.jpg";
randomPic[8] = "https://inaflash-seeds.s3.amazonaws.com/house.jpg";
randomPic[9] = "https://inaflash-seeds.s3.amazonaws.com/mushrooms.jpg";
randomPic[10] = "https://inaflash-seeds.s3.amazonaws.com/ocean.jpg";
randomPic[11] = "https://inaflash-seeds.s3.amazonaws.com/painting.jpg";
randomPic[12] = "https://inaflash-seeds.s3.amazonaws.com/purple_trees.jpg";
randomPic[13] = "https://inaflash-seeds.s3.amazonaws.com/sea.jpg";
randomPic[14] = "https://inaflash-seeds.s3.amazonaws.com/ski.jpg";
randomPic[15] = "https://inaflash-seeds.s3.amazonaws.com/water.jpg";


const getRandomNumber = (max) => Math.floor(Math.random() * max);

export const getRandomImage = () => {
  document.getElementById('random-photo').innerHTML = '<img src="' + randomPic[getRandomNumber(randomPic.length)] + '" />';
}


