/*
    Event Routes
    /api/events
*/



const {Router} = require('express');
const router = Router();
const {check} = require('express-validator');
const {isDate} = require('../helpers/isDate')
const {validarCampos} = require('../middlewares/validar-campos')
const { getEventos, eliminarEvento, actualizarEvento, crearEvento } = require("../controllers/events");
const { validarJWT } = require("../middlewares/validar-jwt");


//todas tienen que pasar por la validacon del JWT   

router.use(validarJWT)

// obtener eventos 
router.get(
    '/',
    getEventos);


//crear un nuevo evento

router.post(
    '/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalizacion es obligatoria').custom(isDate),
        validarCampos
    ],
    crearEvento);

// Actualizar evento

router.put(
    '/:id' ,
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatoria').custom( isDate ),
        check('end','Fecha de finalización es obligatoria').custom( isDate ),
        validarCampos
    ],
    actualizarEvento);


// Borrar evento

router.delete('/:id',eliminarEvento);

module.exports = router;