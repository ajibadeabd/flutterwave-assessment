 import response from '../utility/response.js'
 import CustomError from '../utility/customError.js'

export default   function(app){
    app.use((req, res, next) => {
        throw new CustomError("Invalid request", 400)
    })
    app.use((error, req, res, next) => {
       switch (true) {
            case error instanceof CustomError :
                res.status(error.status).json(response( error.message,'error', error.data))
                break;
                case error instanceof SyntaxError && error.status===400 && "body" in error:
                    error.message='Invalid JSON payload passed.'
                    res.status(error.status).json(response( error.message,'error', error.data))
                    break;
           
            default:
               res.status(500).json(response(error.message,'error', null))
               break;
       }
    })
}