import React, { Component } from 'react';
import './estilo.css';
import './index.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            texoFrase: ''
        };

        this.quebraBiscoito = this.quebraBiscoito.bind(this);

        this.frases = [
            'A adversidade é um espelho que reflete o verdadeiro eu.',
            'A maior de todas as torres começa no solo.',
            'Não compense na ira o que lhe falta na razão.',
            'Quem olha para fora sonha; quem olha para dentro acorda.',
            'Todas as coisas são difíceis antes de se tornarem fáceis.',
            'Nós somos o que pensamos.',
            'A maior barreira para o sucesso é o medo do fracasso.',
            'A vida trará coisas boas se tiveres paciência.',
            'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
            'Defeitos e virtudes são apenas dois lados da mesma moeda.',
            'A maior de todas as torres começa no solo.',
            'Não há que ser forte. Há que ser flexível.',
            'Gente todo dia arruma os cabelos, por que não o coração?',
            'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
            'A juventude não é uma época da vida, é um estado de espírito.',
            'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
            'Dê toda a atenção para a formação dos teus filhos, sobretudo por exemplos de tua própria vida.',
            'Siga os bons e aprenda com eles.',
            'Não importa o tamanho da montanha, ela não pode tapar o sol.',
            'O bom-senso vai mais longe do que muito conhecimento.',
            'Quem quer colher rosas deve suportar os espinhos.',
            'São os nossos amigos que nos ensinam as mais valiosas lições.',
            'Uma iniciativa mal-sucedida não significa o final de tudo. Sempre existe uma nova oportunidade.',
            'Aquele que se importa com o sentimento dos outros, não é um tolo.',
            'Uma bela flor é incompleta sem suas folhas.',
            'Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.',
            'Sem o fogo do entusiasmo, não há o calor da vitória.',
            'Não há melhor negócio que a vida. A gente há obtém a troco de nada.',
            'O riso é a menor distância entre duas pessoas.',
            'Você é jovem apenas uma vez. Depois precisa inventar outra desculpa.',
            'É mais fácil conseguir o perdão do que a permissão.',
            'Os defeitos são mais fortes quando o amor é fraco.',
            'Amizade e Amor são coisas que podem virar uma só num piscar de olhos.',
            'Surpreender e ser surpreendido é o segredo do amor.',
            'Faça pequenas coisas agora e maiores coisas lhe serão confiadas cada dia.',
            'Todo mundo é capaz de denominar uma dor, exceto quem a sente.',
            'A paciência na adversidade é o sinal de um coração sensível.',
            'A sorte favorece a mente bem preparada.',
            'Sua visão se tornará clara apenas quando você puder olhar dentro de seu coração.',
            'Quem olha para fora sonha; quem olha para dentro acorda.',
            'As pessoas se esquecerão do que você disse e do que você fez… mas nunca se esquecerão de como você as fez sentir.',
            'Todas as coisas são difíceis antes de se tornarem fáceis.',
            'Você pode encontrar a si mesmo fazendo ou dizendo coisas que você nunca imaginou possíveis.',
            'Se você se sente só é porque construiu muros ao invés de pontes.',
            'Vencer é 90 por cento suor e 40 por cento técnica.',
            'O amor está mais próximo do que você imagina.',
            'A vida coloca em nossa frente opções.',
            'Você é do tamanho do seu sonho.',
            'Pare de procurar eternamente; a felicidade está bem ao seu lado.',
            'Conhecimento é a única virtude e ignorância é o único vício.',
            'O nosso primeiro e último amor é… o amor-próprio.',
            'Deixe de lado as preocupações e seja feliz.',
            'A vontade das pessoas é a melhor das leis.',
            'Nós somos o que pensamos.',
            'A maior barreira para o sucesso é o medo do fracasso.',
            'O pessimista vê a dificuldade em cada oportunidade; O otimista vê a oportunidade em cada dificuldade.',
            'Muitas das grandes realizações do mundo foram feitas por homens cansados e desanimados que continuaram trabalhando.',
            'O insucesso é apenas uma oportunidade para recomeçar de novo com mais inteligência.',
            'O futuro pertence àqueles que acreditam na beleza de seus sonhos.',
            'Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.',
            'O verdadeiro homem mede a sua força, quando se defronta com o obstáculo.',
            'Você precisa fazer aquilo que pensa que não é capaz de fazer.',
            'Quem quer vencer um obstáculo deve armar-se da força do leão e da prudência da serpente.',
            'A adversidade desperta em nós capacidades que, em circunstâncias favoráveis, teriam ficado adormecidas.',
            'A vida é para quem topa qualquer parada. Não para quem pára em qualquer topada.',
            'Motivação não é sinônimo de transformação, mas um passo em sua direção.',
            'O que empobrece o ser humano, não é a falta de dinheiro, mais sim, a falta de fé,motivação e criatividade.',
        ];
    }

    quebraBiscoito(){
        let state = this.state;
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        state.texoFrase = '" ' + this.frases[numeroAleatorio] + ' "';
        this.setState(state);
    }
    
    render(){
        return(              
           <div className="container">
            <h3 className="texto"> Seja Bem-vindo(a) ao Biscoito da Sorte </h3>
           <img src={require('./assets/biscoito.png')} className="img" />
           <Botao nome="Abrir biscoito " acaoBtn={this.quebraBiscoito} />
           <h3 className="textoFrase"> {this.state.texoFrase} </h3>
           </div>     
        );
        
    }
}


class Botao extends Component{
    render(){
        return (
            <div>
                <button onClick = {this.props.acaoBtn}className="botao"> {this.props.nome } </button>
            </div>
        );
    };
}

export default App;