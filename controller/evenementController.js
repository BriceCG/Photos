let express = require('express')
const router = express.Router()

const Evenement = require('../Models/Evenement')

router.get('',(req,res)=>{
    
})
router.post('/new',async(req,res)=>{
    const {titre,type} = req.body;
    console.log(req.body)
    if(!titre || !type){
        return res.send({message:"Titre ou type non present"});
    }
    let newEvenement = new Evenement({
        titre:titre,
        type:type
    });
    var saveEvenement = await newEvenement.save();
    if(saveEvenement){
        return res.send({message:'Evenement sauvegardee'});
    }
    else {
        res.send({message:"Erreur de sauvegarde"})
    }
})

module.exports = router;