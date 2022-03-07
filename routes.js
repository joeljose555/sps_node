import Express  from 'express'
const router    =   Express.Router()
import CTRL from './src/controllers.js'

router.get('/',CTRL.index)
router.get('/about-us',CTRL.aboutUS)
router.get('/products',CTRL.products)
router.get('/services',CTRL.services)
router.get('/contact-us',CTRL.contactUs)

export default router