# Lobos
#### _Slider_
Projeto final do curso de TypeScript da Origamid.

![](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)  ![](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
<img src="https://pbs.twimg.com/media/EtZYf1FWYAMmtHj.jpg" height="28px" alt="firebase"/>

## Descrição
O projeto foi desenvolvido usando [TypeScript](https://www.typescriptlang.org/) e compilado para **JavaScript** utilizando o [Vite](https://vitejs.dev/).

Cada slide é criado por uma classe *Slide*, que possui vários métodos e propriedades com tipagem feita pelo TypeScript, então durante todo o desenvolvimento do projeto, o TypeScript demandou que todos os dados recebessem os valores conforme o tipo declarado.

Também foi desenvolvida uma classe *Timeout*, que usa o mesmo tipo do método nativo *setTimeout* do JavaScript, em complemento com outros três métodos criados para resetar, pausar e continuar o tempo de exibição do slide.

Todas as interações de click nos slides foram feitas com *Event Listeners* do tipo *Pointer Event* e as estilizações foram feitas com CSS puro. Vale ressaltar que foram utilizados duas propriedades que eu ainda não conhecia:
- "*style.animationDuration*" usado no DOM para definir a duração de animações CSS;
- "*animation-play-state: paused;*" usado em algum seletor CSS, para pausar a execução de uma animação. Após a remoção desse seletor CSS, a animação continua sua execução.

<img src="./src/assets/animation.gif" alt="gif"/>

## Instruções
O slider mostra três imagens e um vídeo. Para mostrar o slide anterior, basta clicar dentro da área esquerda da imagem e para mostrar o slide seguinte, basta clicar dentro da área direita da imagem.

O tempo de visualização de cada imagem é de três segundos e é possível acompanhar esse tempo pela *thumb* de cada slide. Caso um vídeo seja mostrado no slide, o tempo de exibição desse slide será exatamente o tempo de duração do vídeo.

É possível pausar o tempo de visualização de cada slide, segurando o clique do mouse (*pointerdown*) sobre a imagem. Assim que o clique é solto (*pointerup*), o slide retoma o tempo de visualização deesde quando foi pausado.

É possível verificar o conteúdo estudado durante o curso, selecionando o histórico de [commits].

> Caso você seja um desenvolvedor, use as instruções abaixo para instalar as dependências e sugerir alterações para a aplicação.

Primeiramente, você pode fazer a instalação do *TypeScript* globalmente, basta abrir o terminal de sua preferência e digitar o comando:
```sh
npm install -g typescript
```
Após a instalação do *TypeScript*, você pode simplesmente abrir o seu editor de código (ex.: VSCode) e clonar este repositório.
```sh
git clone https://github.com/PedroPaivaDev/study-origamid-typescript
```
Após clonar o projeto deste repositório, dentro do diretório do projeto você deve usar o comando `npm install` em um terminal, para gerar a pasta **node_modules**.
```sh
npm install
```
Para fazer o *TypeScript* observar as alterações feitas nos arquivos em formato ".ts", abra o seu terminal e digite o comando especificando os caminhos dos arquivos desde a raiz do projeto:
```sh
tsc nomeDoArquivo.js
```
Ou se preferir, use o comando `npm run dev` do *Vite*, para que a compilação seja feita de forma automática e a aplicação possa ser visualizada na porta [localhost:5173](http://localhost:5173). Desse modo, a página irá recarregar a cada alteração feita no código e mostrará eventuais erros no console.
```sh
npm run dev
```

## Desenvolvimento do Curso

A parte que mais me surpreendeu do curso, foi na [aula 610](https://github.com/PedroPaivaDev/study-origamid-typescript/commit/311a0e4be4a6defba42fc37d6952a482c47f244c) quando o professor recriou a função "*countBy()*" do [JQuery](https://jquery.com/) e usou em conjunto com o "*Object.entries( )*" e o método de array "*sort()*", para selecionar o dia da semana que mais ocorreram vendas, segundo os dados de uma API fornecida pelo professor.
O curso foi dividio em três partes, que podem ser vistas nas *branchs* do projeto e nos deploys abaixo:

| Parte | Conteúdo desenvolvido |
| ------ | ------ |
| [Fundamentos do TypeScript](https://study-origamid-typescript-git-classes-pedropaivadev.vercel.app/) | Essa *branch* foi criada para armazenar os testes feitos durantes as aulas, para fixação das palavras chaves de uso exclusivo do TypeScript, como por exemplo: *interface*, *type*, *implements*, *extends*, *private*, *protected*, *readonly*, *public*, *declare*, etc. |
| [Desafio: Manipulação de Dados](https://study-origamid-typescript-git-datamanipulation-pedropaivadev.vercel.app/) | O professor forneceu uma API, para que fosse feita uma busca com o método *fetch*, os dados fossem mostrados em uma tabela e algumas estatísticas sobre os dados. Eu consegui concluir o desafio quase todo, só ficou faltando fazer a tipagem das chaves de um objeto, que eu percorri para mostrar os dados em tela. Durante a resolução, eu fiz algumas adaptações no código, pois o professor resolveu determinada tarefa de forma mais otimizada, mas em outros momentos eu mantive o meu código, pois se mostrou mais otimizado, como foi o caso da linha 41 do arquivo *Estatisticas.ts*. |
| [Projeto Final](https://study-origamid-typescript-git-slideproject-pedropaivadev.vercel.app/) | O slider foi feito utilizando classes e as melhores práticas do TypeScript. |

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[commits]: <https://github.com/PedroPaivaDev/study-origamid-typescript/commits/main>