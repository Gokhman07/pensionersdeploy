const Router = require("express").Router;
const islogin = require("../middleware/index").islogin;
const Pensioners = require("../models/pensioners");

const router = Router();
const jwt = require('jsonwebtoken')
const moment = require("moment")

router.get("/names_list", async (req, res) => {
  const names = await Pensioners.findAll({
    attributes: ['username'],
  });
  res.send(names);


});

router.post("/new_user", async (req, res) => {
  const { username, password} = req.body;
  console.log(req.body)
  const newuser = await Pensioners.create({ "username": username,
    "password":password });
  res.send(newuser);
});
const ok = (data = {}) => ({status: 200, messsage: "OK", data})
const error = (status = 500, message = 'Request Error', data = {}) => ({status, message, data})

router.get('/auth', (req, res) => {
  if (!req.cookies.data){
    res.json(error(404,'No cookie'));
    return
  }
  res.json(ok(req.cookies.data))
})

router.get("/:username/:password", async (req, res) => {
  const exchange = await Pensioners.findOne({
    attributes: ['id'],
    where: {
      username: req.params.username,
      password: req.params.password
    }
  });
  const jwtconfig = {
    login:req.params.username,
    password:req.params.password,
    date: moment().format('YYYYMMDDhhmmss')
  }
  const token = jwt.sign(jwtconfig, 'shhhhh')
  if(exchange) {
    res.cookie('data', {username:req.params.username,id : exchange.dataValues.id,token})
    console.log(exchange)
    res.send({status: 200,data : {token,
        login: req.params.username,id : exchange.dataValues.id}});
  }
  else{
    res.json({
    message : 'Doesnt`t exist',
    status : 404
  })
  }

  await Pensioners.update(
      {
        token: token,
      },
      {
        where: {
          username: req.params.username,
        },
      }
  );

});
router.put("/logout", async (req, res) => {

  const { username } = req.body;
  console.log(username)
  clearCookie('data')
  const newauthor = await Pensioners.update(
      {
        token: '',
      },
      {
        where: {
          username: username,
        },
      }
  );

  res.send(newauthor);
});

router.delete("/delete/:id", islogin, async (req, res) => {
  const { id } = req.params;
  const deletepensioner = await Author.destroy({
    where: {
      id: id,
    },
  });
  res.send(id);
});


router.post("/new_pensioner", islogin, async (req, res) => {
  const { name, type_id, fund_id, description} = req.body;
  console.log(req.body)
  const newpensioner = await Pensioners.create({ "name": name,
    "lastname":lastname, "username":username, "password": password,
    "passport_number": passport_number,"marital_id": marital_id,"marital_id": marital_id,
    "id_empl_status": id_empl_status,"occupation": occupation, "belong_comp":belong_comp,
    "company":company,"birth_date":birth_date,"card_number":card_number,"group_id":group_id,
    "couple_id":couple_id});
  res.send(newpensioner);
});
// git@github.com:gearonix/pensioners-app.git
module.exports = router;
