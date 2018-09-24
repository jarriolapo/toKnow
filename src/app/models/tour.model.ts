export class Tour {
    id: number
    fk_idguia: number
    titulo: string
    categoria:string
    duracion:string
    pais: string
    ciudad:string
    des_corta:string
    des_larga: string
    hitos:string
    precio:number
    min_personas:number
    max_personas:number
    opiniones01:string
    opiniones02:string
    opiniones03:string
    encuentro:string
    direccion:string
    consejos:string
    idioma:string
    hora:string
    dias:string
    temporada:string
    fotos:string
    

    constructor(values) {
        this.id = values.id
        this.fk_idguia = values.fk_idguia
        this.titulo = values.titulo
        this.categoria = values.categoria
        this.duracion = values.duracion
        this.pais = values.pais
        this.ciudad = values.ciudad
        this.des_corta = values.des_corta
        this.des_larga = values.des_larga
        this.hitos = values.hitos
        this.precio = values.precio
        this.min_personas = values.min_personas
        this.max_personas = values.max_personas
        this.opiniones01 = values.opiniones01
        this.opiniones02 = values.opiniones02
        this.opiniones03 = values.opiniones03
        this.encuentro = values.encuentro
        this.direccion = values.direccion
        this.consejos = values.consejos
        this.idioma = values.idioma
        this.hora = values.hora
        this.dias = values.dias
        this.temporada = values.temporada
        this.fotos = values.fotos        
        }
}