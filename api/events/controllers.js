

const Event = require("../../db/models/Event")




exports.fetchEvents = async (req, res) => {
    const eventArray = await Event.find({numOfSeats:{$gt:21}}).exec();
    res.json(eventArray);
  };
  // exports.searchByNameEvents = async (req, res) => {
  //   const eventArray = await Event.find({}).select("name");
  //   res.json(eventArray);
  // };

  // exports.fullyBookedEvents = async (req, res) => {
  //   const eventArray = await Event.find({}).select("numOfSeats = 20");
  //   res.json(eventArray);
  // };


  exports.postEvents = async (req,res) =>{
    try{
      const newEvent = await Event.create(req.body)
      res.status(201);
      res.json(newEvent)
    }
    catch(error)
    {
      res.status(500).json({message:error.message})
    }
  };

  exports.deleteEvents = async (req,res) =>{
     try{ 
     const {eventId} = req.params;
      const foundEvent = await Event.findByIdAndDelete({_id: eventId})
      if(foundEvent){
         
          res.status(204).end();
          res.json(newArray)

      }else{
        res.status(404).end();
      }
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

    exports.updateEvents = async(req,res) =>{

        try {
            const {eventId} = req.params;
            console.log(eventId);
            const event = await Event.findByIdAndUpdate({_id:eventId},req.body,{new:true ,runValidators: true}, )
            
            if (event) res.json(event)
            else res.status(404).json({message:"not found"})
            
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    }




  