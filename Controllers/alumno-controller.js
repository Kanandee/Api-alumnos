const {Alumno,Nacionalidad} = require("../models.js");
const AlumnoController = {};

AlumnoController.getAll= async (req,res) => {
  try {
      const data= await Alumno.findAll(
         {
            include: { model: Nacionalidad, as: "id_nacionality_nacionalidad"}
         }
      );
      res.json(data)
  }catch (error){
   res.status(500).send({
      message:"Some error ocurred whiñe retrieving user"
   })
  }
};


AlumnoController.getById = async (req,res)=>{
   const id = req.params.id;
   const data = await Alumno.findByPk(id)
   res.json(data);
}

AlumnoController.getByName = async(req,res) =>{
   const name = req.params.name

   const data = await Alumno.findAll({
      where: {name:`${name}`},
      include : { model: Nacionalidad, as: "id_nacionality_nacionalidad"},
   });
   if(data.length > 0){
      res.json(data);
   }res.status(404).send({
      message:'Cannot fond user with name=${name}',
   });
   }
   
   
module.exports = AlumnoController;
