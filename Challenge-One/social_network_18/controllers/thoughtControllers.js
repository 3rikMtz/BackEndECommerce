const { Thought, User } = require('../models'); 


module.exports = {
    //GET all thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find(); 
            res.json(thoughts); 
        } catch (err) {
            res.status(500).json(err); 
        }
    }, 
    //POST a new thought
    async createThought(req, res) {
        try {
            //retrieves the user information based on the user id in the reques body
            const user = await User.findOne({ _id: req.body.userId }); 

            //if user not foun, return an error
            if (!user) {
                return res.status(404).json( {message: 'User not found'} ); 
            }
            const thought = new Thought({
                thoughtText: req.body.thoughtText,
                username: user.username, 
            }); 

            await thought.save(); 

            //add the thought to the isers thoughts array
            user.thoughts.push(thought._id); 

            //save the updated user
            await user.save(); 

            res.json(thought); 
        } catch (err) {
            res.status(500).json(err); 
        }
    },
    //get a single thought by ID
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId })
            .select('-_V'); 

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' }); 
            }
            res.json(thought);  
        } catch (err) {
            res.status(500).json(err); 
        }
    },
    //update a thought
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body},
                { runValidators: true, new: true }
            ); 

            if (!thought) {
                res.status(404).json({ message: 'No thought with this ID' }); 
            }
            res.json(thought); 
        } catch (err) {
            res.status(500).json(err); 
        }
    },
    //delete thought by ID
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId }); 

            if (!thought) {
                res.status(404).json({ message: 'No thought with that ID'}); 
            }
            res.json({ message: 'Thought deleted succesfully' }); 
        } catch {
            res.status(500).json(err); 
        }
    },
    //create a reaction 
    async createReation(req, res) {
        try {
            const thoughtData = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body }},
                { runValidators: true },
                { new: true },                
            );
            if (!thoughtData) {
                return res.status(404).json({ message: 'No thought with that ID'}); 
            }
            res.json(thoughtData); 
        } catch (err) {
        console.log(err); 
        res.status(500).json(err); 
        }
    },
    //delete reaction by id
    async deleteReaction(req, res) {
        try {
            const { thoughtId, reactionId } = req.params; 

          const thoughtData = await Thought.findOneAndUpdate(
            { _id: thoughtId },
            { $pull: { reactions: { reactionId: reactionId } } },
            { new: true }
          );
      
          if (!thoughtData) {
            return res.status(404).json({ message: 'No thought or reaction with that ID' });
          }
      
          res.json({ message: 'Reaction deleted successfully' });
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
    },  
}; 
