import { Request, Response } from 'express';

import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';

export default {

    async index(req: Request, res: Response){
        const orphanageRepository = getRepository(Orphanage);

        const orphanages = await orphanageRepository.find();

        return res.json(orphanages)
    },

    async show(req: Request, res: Response){
        const { id } = req.params;
        
        const orphanageRepository = getRepository(Orphanage);

        const orphanage = await orphanageRepository.findOneOrFail(id);

        return res.json(orphanage)
    },

    async create(req: Request, res: Response){
        console.log(req.files)

        const {
            name, 
            latitude, 
            longitude, 
            about, 
            instructions, 
            openingHours, 
            openOnWeekends
        } = req.body;
    
        const orphanageRepository = getRepository(Orphanage);
    
        const requestImages = req.files as Express.Multer.File[];

        const images = requestImages.map(image => {
            return { path: image.filename}
        })

        const orphanage = orphanageRepository.create({
            name, 
            latitude, 
            longitude, 
            about, 
            instructions, 
            openingHours, 
            openOnWeekends,
            // images
        });
    
        await orphanageRepository.save(orphanage).catch((e) => console.log(e));
    
        return res.status(201).json(orphanage);
    }
}