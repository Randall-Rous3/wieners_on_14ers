const { Router } = require("express")
const router = Router()
const controllers = require("../controllers/index")

router.get("/", (req, res) => res.send("This is root!"))

router.get('/mountains',controllers.getAllMountains)
router.post('/mountains', controllers.createMountain)
router.put('/mountains/update/:id', controllers.updateMount)
router.get('/mountains/:id', controllers.getMountById)
router.delete('/mountains/:id', controllers.deleteMount)
router.get('/dogs', controllers.getAllDogs)
router.post('/dogs',controllers.createDog)
router.delete('/dogs/:id',controllers.deleteDog)
router.get('/dogs/:id',controllers.getDogById)
router.put('/listDog',controllers.addDogToMount)
router.put('/dogs/:id', controllers.updateDog)


module.exports = router;