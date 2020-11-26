import linkModel, {ILinkModel} from './linkModel';
import {Link} from './link';
import { findConfigFile } from 'typescript';

function findByCode(code: string){
    return linkModel.findOne<ILinkModel>({where: {code}}); //realiza uma select no banco
}

function add(link: Link){
    return linkModel.create<ILinkModel>(link); //create gera o insert sql no banco graçcas ao sequelize
}


async function hit(code: string){ //async deve ser usando na função por estarmos aguardando o tempo de execução da função findByCode (async = await sync)
    const link = await findByCode(code); //await aguarda o tempo de execução da função depois que processar ir até o banco e voltar ela vai continuar
    if(!link) return null;
    
    link.hits!++; //acrescenta um no hit antigo
    await link.save(); //realizar um update no banco
    return link;
}

export default {
    findByCode,
    add,
    hit
}
