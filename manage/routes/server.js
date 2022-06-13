import {Router} from "express";
import {cv, map, timer} from '../controllers/server.js'

const router = Router();

router.get('/', cv);
router.get('/map', map);
router.get('/timer', timer)

export default router;