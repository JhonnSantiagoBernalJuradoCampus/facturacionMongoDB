export const validatePermisos = (requiredPermission) => async (req, res, next) => {
    const permisos = req.data.payload.role.permisos;
    console.log(permisos);
    if (permisos.includes("*")){
        next();
    }else if (!permisos.includes(requiredPermission)){
        res.status(401).send({status:401, message:"No tienes permiso para acceder"});
    }else{
            next()
        }
    };