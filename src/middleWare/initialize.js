import express  from 'express';
import cors  from 'cors';
import helmet  from 'helmet';
import logger  from 'morgan';
import indexRouter from "../routes/index.js"
import path from "path"
import { fileURLToPath } from "url";
var corsOption = {
    origin: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    exposedHeaders: ["x-auth-token"],
  };


export default function(app){
    app.use(cors(corsOption));
    app.use(helmet());
    app.use(logger('dev'));
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    app.use(express.json());
    app.use(express.urlencoded({extended:false}));
    app.use('/', indexRouter);
    app.use(express.static(path.join(__dirname, 'public')));
    // //   res.sendFile(path.join(__dirname,'../../public/index.html'))
    //   res.sendFile(path.join(__dirname,'../../publics/index.html'))
    //   })
    app.use('/api/v1', indexRouter);

}
