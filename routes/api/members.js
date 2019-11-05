const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const members = require('../../Members');
const { getAll, addMember, deleteMembersById } = require('../../demo_db.js');

// Gets All Members
router.get('/', (req, res) => {
    res.json(members)
});


//Get Single Member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
 
    if(found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}`});
    }
});

// Create Member
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        address: req.body.address,
    }

    if (!newMember.name || !newMember.address) {
        return res.status(400).json({ msg: 'Please include a name and a address' });
    }

    addMember(newMember.name, newMember.address)
    res.status(200)
    res.redirect("/")
});

// Update Member
router.put('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found) {
        const updMember = req.body;
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)) {
                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email : member.email;
                member.age = updMember.age ? updMember.age : member.age;

                res.json({ msg: 'Member updated', member});
            }
        });
    } else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}`});
    }
});

// Delete Member
router.delete('/:id', (req, res, id) => {
    deleteMembersById(req.params.id).then((response)=> {
        //test comment
        if (response.affectedRows > 0){
            res.sendStatus(200);
        } else {
            res.sendStatus(400);
        }
    })
});

module.exports = router;