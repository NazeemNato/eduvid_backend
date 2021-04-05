const express = require("express");
const data = require("../data/video_data.json")

const route = express.Router();

const findVideo = (id) => {
    let videos = data.videos;
    for (let i in videos) {
        let video = videos[i];
        if (video.id.toString() === id) {
            return video;
        }
    }
    return null;
}

route.get('/all', (_, res) => {
    try {
        res.status(200).send(data);
    } catch (e) {
        res.status(400).send({error: e})
    }
})
route.get('/video/:id', (req, res) => {
    const { id } = req.params;
    try {
        let video = findVideo(id);
        if(!video){
            throw  Error('Invalid video id');
        }
        res.status(200).send(video)
    } catch (_) {
        res.status(400).send({error:"Invalid video id"})
    }
})

module.exports = route;