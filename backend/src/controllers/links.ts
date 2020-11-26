import {Request, Response} from 'express';
import {Link} from '../model/link';
import linksRepository from '../model/linksRepository';
//const links : Link[] = [];
//let proxId = 1;

function generateCode(){
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVXYWZabcdefghijklmnopqrstuvxywz0123456789';
    for(let i=0; i < 5; i++){
        text += possible.charAt(Math.floor(Math.random() * possible.length));        
    }
    return text;
}

async function postLink(req: Request, res: Response){
    const link = req.body as Link;
//  link.id = proxId++;
    link.code = generateCode();
    link.hits = 0;
//    links.push(link); //Adiciona o link no array Links
    const result = await linksRepository.add(link);    
    if(!result.id) return res.sendStatus(400); //quando deu erro na inserção do banco retorna o erro 400    
    
    link.id = result.id;
    
    res.status(201).json(link); //processa e devolve o link
}

async function getLink(req: Request, res: Response){
    /*const code = req.params.code as string;
    const link = links.find(item => item.code === code);
    if(!link){
        res.sendStatus(404);
    }else{
        res.json(link);
    }*/
    const code = req.params.code as string;
    const link = await linksRepository.findByCode(code);

    if(!link){
        res.sendStatus(404);
    }else{
        res.json(link);
    }
}

async function hitLink(req: Request, res: Response){
    /*const code = req.params.code as string;
    const index = links.findIndex(item => item.code === code);

    if(index === -1)
        res.sendStatus(404);
    else{
        links[index].hits!++;
        res.json(links[index]);
    }
*/
    const code = req.params.code as string;
    const link = await linksRepository.hit(code);

    if(!link)
        res.sendStatus(404);
    else{        
        res.json(link);
    }
}

export default {
    postLink,
    getLink,
    hitLink
}