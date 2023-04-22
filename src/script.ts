const body = $('body');
console.log(body)
body.addClass('ativo');

console.log(_.intersection([1, 2, 3, 5, 6], [2, 3, 1, 9]));

declare const Vimeo: any; //eu não quero definir os tipos de um plugin de terceiros, então eu posso usar o 'any'
const iframe = document.getElementById('vimeo');
const player = new Vimeo.Player(iframe);

console.log(player);