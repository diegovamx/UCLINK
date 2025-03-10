import Message from '../models/Messages';

export const sendMessage = async (req, res) =>{
    try {
        const {content, receiverID} = req.body

        const newMessage = await Message.create({

        })
        
    } catch (error) {

    }
};

