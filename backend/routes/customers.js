var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {

  res.send([
   
      {
        'id': 1,
        'name': "김유신",
        'birthday': "20000314",
        'job': "식물학",
        'img': "https://placeimg.com/50/50/1132",
      },
      {
        'id': 2,
        'name': "홍길동",
        'birthday': "20000314",
        'job': "식물학",
        'img': "https://placeimg.com/50/50/155",
      },
      {
        'id': 3,
        'name': "허창호",
        'birthday': "20000314",
        'job': "식물학",
        'img': "https://placeimg.com/50/50/11132",
      },
      {
        'id': 4,
        'name': "이백신",
        'birthday': "20000314",
        'job': "식물학",
        'img': "https://placeimg.com/50/50/122",
      },
      {
        'id': 5,
        'name': "홍류라",
        'birthday': "20000314",
        'job': "식물학",
        'img': "https://placeimg.com/50/50/32",
      },
      {
        'id': 6,
        'name': "손진신",
        'birthday': "20000314",
        'job': "식물학",
        'img': "https://placeimg.com/50/50/12",
      },
      {
        'id': 7,
        'name': "김여신",
        'birthday': "20000314",
        'job': "식물학",
        'img': "https://placeimg.com/50/50/112",
      },
      {
        'id': 8,
        'name': "김태신",
        'birthday': "20000314",
        'job': "GIS",
        'img': "https://placeimg.com/50/50/132",
      },
      

  ]);

});

module.exports = router;
