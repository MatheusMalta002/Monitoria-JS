class Livro {
  constructor(id, title, description, author) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.author = author;
  }
}

class Biblioteca {
  constructor() {
    this.books = [];
  }

  addLivro(livro_info) {
    const livro = new Livro(livro_info.id, livro_info.title, livro_info.description, livro_info.author);
    this.books.push(livro);
    return livro;
  }

  obterTodosLivros() {
    return this.books;
  }

  remover_livro_porId(id) {
    this.books = this.books.filter(livro => livro.id !== id);
  }

  obter_livro_porId(id) {
    return this.books.find(livro => livro.id === id);
  }

  atualizar_porId(id, info) {
    const livro = this.obter_livro_porId(id);
    if (livro) {
      Object.assign(livro, info);
    }
    return livro;
  }
}


const bilbioteca = new Biblioteca();

const book1 = bilbioteca.addLivro({
  id: '696969',
  title: 'Como mentir com Estatística',
  description: 'Seja mestre em mentir.',
  author: 'Pirão de Castro'
});


const todosLivros = bilbioteca.obterTodosLivros();

console.log(todosLivros);


// Atualizando informações
bilbioteca.atualizar_porId(book1.id, { title: 'Novo Título', description: 'Nova descrição' });

bilbioteca.obter_livro_porId('696969')

// livro atualizado
const updatedBook = bilbioteca.obter_livro_porId(book1.id);

console.log(updatedBook);

const bolsonaro = 

` 
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ 
⣿⣿⣿⣿⣿⣿⡿⠟⠉⠁⠄⠄⠄⠄⠉⠉⠙⠻⣿⣿⣿⣿⣿⣿⣿⣿ 
⣿⣿⣿⣿⣿⡿⠄⠄⣀⣤⣦⣶⣦⣦⣤⣤⣠⣀⠄⠹⣿⣿⣿⣿⣿⣿ 
⣿⣿⣿⣿⠟⠁⠄⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠄⠹⣿⣿⣿⣿⣿ 
⣿⣿⣿⡏⠄⢂⠄⠄⠸⠻⠿⠿⣿⣿⣿⣿⠿⠟⢿⡿⡀⣿⣿⣿⣿⣿ 
⣿⣿⣿⡇⠄⠈⠄⠄⠄⠄⠄⠄⠄⢹⣇⣀⣄⣘⣹⣇⣇⣿⣿⣿⣿⣿ 
⣿⣿⣿⡇⠄⠄⠄⠰⠄⣀⡀⣤⡀⢨⣿⣾⣧⣷⣿⣿⣬⣿⣿⣿⣿⣿ 
⣿⣿⣿⣿⠄⠄⠄⠄⠄⠘⣿⡟⠄⢀⣩⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ 
⣿⣿⣿⣿⡇⠄⠄⠄⠄⠰⣏⠄⠈⢨⣍⣉⣛⣽⣿⣿⣿⣿⣿⣿⣿⣿ 
⣿⣿⣿⣿⣿⣶⡀⠄⠄⠄⠛⢀⢄⢰⣽⣿⣿⣿⣿⢟⣿⣿⣿⣿⣿⣿ 
⣿⣿⣿⣿⣿⣿⣷⠄⠄⠄⠄⠄⠄⠈⢃⡙⢛⡻⣻⣿⣿⣿⣿⣿⣿⣿ 
⣿⣿⣿⣿⣿⣿⠏⠄⠄⠄⠄⠄⠄⠄⢠⣶⣶⣾⣿⡿⣿⣿⣿⣿⣿⣿ 
⣿⣿⣿⠿⠛⠁⠄⠄⢺⣶⣦⡀⠄⠄⢰⣻⢿⣿⣿⡇⠈⠻⣿⣿⣿⣿ 
⠉⠁⠄⠄⠄⠄⠄⠄⠄⠻⣿⣿⡷⠆⠄⢓⢿⣿⣿⡇⠄⠄⠄⠄⠉⠙ 
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢻⠏⠄⠄⠐⠄⣄⠹⣿⡇⠄⠄⠄⠄⠄⠄ 
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢷⣤⡠⠄⢸⣿⣿⣮⠄⠄⠄⠄⠄⠄⠄ 
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠘⣯⠄⠄⠈⢿⣿⣿⠄⠄⠄.
`

console.log(bolsonaro)