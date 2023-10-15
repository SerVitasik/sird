import {MongoClient} from "mongodb";

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect("mongodb+srv://websitesird:MLwMcizyvDRWs28F@cluster0.ribwhse.mongodb.net/?retryWrites=true&w=majority");
        const db = client.db();

        const newsCollection = db.collection('news');

        const result = await newsCollection.insertOne(data);
        console.log(result);
        client.close();
        res.status(201).json({message: 'News inserted'})
    }
}