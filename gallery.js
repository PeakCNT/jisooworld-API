exports.imgUrl = [
  "http://res.cloudinary.com/dlqpq9wxh/image/upload/v1645700011/Jisooworld/Screencard/snowdrop1.jpg",
  "http://res.cloudinary.com/dlqpq9wxh/image/upload/v1645699571/Jisooworld/Screencard/theshow.jpg",
  "http://res.cloudinary.com/dlqpq9wxh/image/upload/v1645699315/Jisooworld/Screencard/Diormuse.jpg",
  "http://res.cloudinary.com/dlqpq9wxh/image/upload/v1645698864/Jisooworld/Screencard/Worldtour.jpg",
  "http://res.cloudinary.com/dlqpq9wxh/image/upload/v1645698742/Jisooworld/Screencard/jisoo.jpg",
  "http://res.cloudinary.com/dlqpq9wxh/image/upload/v1645698337/Jisooworld/Screencard/Kid%20jisoo.jpg",
];

exports.content = Array(6)
  .fill(0)
  .map((el, i) => {
    return {
      id: i + 1,
      name: `Jisoo${i + 1}`,
      content: "Testing",
      like: Math.trunc(Math.random() * 100000) + 1,
    };
  });
