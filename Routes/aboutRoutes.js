// Importing Modules & Methods

const express = require('express');
const router = express.Router();


// Defining routes for /about

router.get('/', (req,res)=> {
    res.status(200).send(`ABOUT PAGE`)
})

// router.get('/:id',(req,res) => {
//     res.status(200).send(`Please find below user details of user ID : ${req.params.id}`)
// })


router.get('/:id',(req,res) => {
    

    let index =0;

    for(let i=0; i< Object.keys(req.body).length; i++){
        if ('"' + req.params.id +  '"' === JSON.stringify(req.body[i].name)) {
            index = i;
        }    
    }

   if (index != 0) {
        res.status(200).send(`Please find below user details of username : ${req.params.id}
        ${JSON.stringify(req.body[index])}`);
    }else{
        res.status(200).send(`Mentioned user not found!`);
    }


    // setTimeout(() => {
    //     for(let i=0; i< Object.keys(req.body).length; i++){
    //         if ('"' + req.params.id +  '"' === JSON.stringify(req.body[i].name)) {
    //             res.status(200).send(`Please find below user details of username : ${req.params.id}
    //             ${JSON.stringify(req.body[i])}`)
    //         }
    //     }
    // }, 0);




    // for(let i=0; i< Object.keys(req.body).length; i++){
    //     if ('"' + req.params.id +  '"' === JSON.stringify(req.body[i].name)) {
    //         res.status(200).send(`Please find below user details of username : ${req.params.id}
    //         ${JSON.stringify(req.body[i])}`)
    //     }
    //     else{
    //         res.status(200).send(`Mentioned user not found!`);
    //     }
    // }

})




// Exporting Routes

module.exports = router;