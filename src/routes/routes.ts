import { Router } from 'express'
import multer from 'multer'

import uploadConfig from './../config/upload'
import OrphanageController from './../controllers/OrphanagesControllers'

const router = Router()
const upload = multer(uploadConfig)

router.get('/orphanages', OrphanageController.index)
router.get('/orphanage/:id', OrphanageController.show)
router.post('/orphanage', upload.array('images'), OrphanageController.create)

export default router