import Botao from '../Botao'
import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa'

const Formulario = () => {

    const times = [
        'Arquiteto de Redes',
        'Ciência de Dados',
        'Computação em Nuvem',
        'Desenvolvedor Mobile',
        'Engenharia de Software',
        'Gestão de Tecnologia da Informação',
        'Jogos Digitais',
        'Programador Web',
        'Robótica',
        'Segurança da Informação'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form fio submetido')
    }
 
    return (
        <section className="formulario">
            <form onSubmit = {aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador </h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite seu endereço da imagem" />
                <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
                <Botao texto="Criar Card"/>
            </form>
        </section>
    )

}
export default Formulario