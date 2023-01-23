import { createPost } from "../../../lib/posts";
import { format } from 'date-fns';

export default async function handler (req, res) {
    const { id, title, content} = req.body;

    try {
        await createPost({id, title, content, date: `'${format(new Date(), 'yyyy-MM-dd')}'`})
        res.status(200).json({ message : 'create success' })
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message : `create failed ${e.message}` })
    }
}