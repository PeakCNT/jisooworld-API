const cloudinary = require("cloudinary").v2;
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

let imgUrl = [];

exports.createContent = async () => {
  await cloudinary.search
    .expression(
      "folder:Jisooworld/gallery" // add your folder
    )
    .max_results(100)
    .execute()
    .then((result) => (imgUrl = result.resources.map((el) => el.url)));

  const content = Array(imgUrl.length)
    .fill(0)
    .map((el, i) => {
      return {
        id: i + 1,
        name: `Jisoo${i + 1}`,
        content: "Hello There I'm a Photo",
        like: Math.trunc(Math.random() * 100000) + 1,
      };
    });

  for (const index in content) {
    content[index].img = imgUrl[index];
  }

  return content;
};

// const content = Array(imgUrl.length)
//   .fill(0)
//   .map((el, i) => {
//     return {
//       id: i + 1,
//       name: `Jisoo${i + 1}`,
//       content: "Testing",
//       like: Math.trunc(Math.random() * 100000) + 1,
//     };
//   });

// for (const index in content) {
//   content[index].img = imgUrl[index];
// }

// console.log(content);
