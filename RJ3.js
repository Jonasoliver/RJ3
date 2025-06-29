class PessoaCliente {
    #docId
    constructor(nomeCompleto, docId, localResidencia){
        this.nomeCompleto = nomeCompleto
        this.localResidencia = localResidencia
        this.contatos = []
        this.#docId = docId

        Object.defineProperty(this, 'detalhesCliente', {
            get: function(){                
                let detalhesContatos = ''
                this.contatos.forEach(function(contato){
                    detalhesContatos += contato.detalhesContato + '\n'
                })

                return 'Nome: ' + this.nomeCompleto +
                this.localResidencia.detalhesEndereco +
                '\n' + detalhesContatos
            }
        })
    }

    #detalhesClienteAlto(detalhesAlto){
        return detalhesAlto.toUpperCase()
    }

    mostrarDetalhesClienteAlto(){
        let contatosAlto = ''
        this.contatos.forEach(contato => {
            contatosAlto += this.#detalhesClienteAlto(contato.detalhesContato) + '\n'
        })

        return 'Nome: ' + this.#detalhesClienteAlto(this.nomeCompleto) +
        this.#detalhesClienteAlto(this.localResidencia.detalhesEndereco) +
        '\n' + contatosAlto    
    }

    #detalhesClienteBaixo(detalhesBaixo){
        return detalhesBaixo.toLowerCase()
    }

    mostrarDetalhesClienteBaixo(){
        let contatosBaixo = ''
        this.contatos.forEach(contato => {
            contatosBaixo += this.#detalhesClienteBaixo(contato.detalhesContato) + '\n'
        })

        return 'Nome: ' + this.#detalhesClienteBaixo(this.nomeCompleto) +
        this.#detalhesClienteBaixo(this.localResidencia.detalhesEndereco) +
        '\n' + contatosBaixo    
    }

    get obterDocId (){
        return this.#docId
    }
}

class Contato {
    constructor(ddd, numero){
        this.ddd = ddd
        this.numero = numero

        Object.defineProperty(this, 'detalhesContato', {
            get: function(){
                return 'DDD: ' + this.ddd + ' Número: ' + this.numero
            }
        })
    }

    #detalhesContatoAlto(detalhesAlto){
        return detalhesAlto.toUpperCase()
    }

    mostrarDetalhesContatoAlto(){
        return 'DDD: ' + this.#detalhesContatoAlto(this.ddd) + ' Número: ' + this.#detalhesContatoAlto(this.numero)
    }

    #detalhesContatoBaixo(detalhesBaixo){
        return detalhesBaixo.toLowerCase()
    }

    mostrarDetalhesContatoBaixo(){
        return 'DDD: ' + this.#detalhesContatoBaixo(this.ddd) + ' Número: ' + this.#detalhesContatoBaixo(this.numero)
    }
}

class LocalResidencia {
    constructor(estado, cidade, logradouro, numero) {
        this.estado = estado
        this.cidade = cidade
        this.logradouro = logradouro
        this.numero = numero

        Object.defineProperty(this, 'detalhesEndereco', {
            get: function(){
                return '\nEstado: ' + this.estado +
                ' Cidade: ' + this.cidade +
                ' Logradouro: ' + this.logradouro + 
                ' Número: ' + this.numero
            }
        })
    }

    #detalhesEnderecoAlto(detalhesAlto){
        return detalhesAlto.toUpperCase()
    }

    mostrarDetalhesEnderecoAlto(){
        return 'Estado: ' + this.#detalhesEnderecoAlto(this.estado) +
        ' Cidade: ' + this.#detalhesEnderecoAlto(this.cidade) +
        ' Logradouro: ' + this.#detalhesEnderecoAlto(this.logradouro) + 
        ' Número: ' + this.#detalhesEnderecoAlto(this.numero)
    }

    #detalhesEnderecoBaixo(detalhesBaixo){
        return detalhesBaixo.toLowerCase()
    }

    mostrarDetalhesEnderecoBaixo(){
        return 'Estado: ' + this.#detalhesEnderecoBaixo(this.estado) +
        ' Cidade: ' + this.#detalhesEnderecoBaixo(this.cidade) +
        ' Logradouro: ' + this.#detalhesEnderecoBaixo(this.logradouro) + 
        ' Número: ' + this.#detalhesEnderecoBaixo(this.numero)
    }
}

class Negocio {
    #registroNacional
    constructor(razaoPrincipal, nomeComercial, registroNacional, localNegocio){
        this.localNegocio = localNegocio
        this.nomeComercial = nomeComercial
        this.razaoPrincipal = razaoPrincipal
        this.#registroNacional = registroNacional
        this.pessoasClientes = []
        this.contatos = []

        Object.defineProperty(this, 'detalhesNegocio', {
            get: function(){
                let detalhesContatos = ''
                this.contatos.forEach(function(contato){
                    detalhesContatos += contato.detalhesContato + '\n'
                })

                let detalhesClientes = ''
                this.pessoasClientes.forEach(function(cliente){
                    detalhesClientes += cliente.detalhesCliente + '\n'
                })
                
                return 'Razão Principal: ' + this.razaoPrincipal +
                '\nNome Comercial: ' + this.nomeComercial +
                '\n' + detalhesContatos +
                '--------------\n' + detalhesClientes 
            }
        })
    }

    #detalhesNegocioAlto(detalhesAlto){
        return detalhesAlto.toUpperCase()
    }

    mostrarDetalhesNegocioAlto(){
        let contatosAlto = ''
        this.contatos.forEach(function(contato){
            contatosAlto += this.#detalhesNegocioAlto(contato.detalhesContato) + '\n'
        }, this) 
    
        let clientesAlto = ''
        this.pessoasClientes.forEach(function(cliente){
            clientesAlto += this.#detalhesNegocioAlto(cliente.detalhesCliente) + '\n'
        }, this)
    
        return 'Razão Principal: ' + this.#detalhesNegocioAlto(this.razaoPrincipal) +
        '\nNome Comercial: ' + this.#detalhesNegocioAlto(this.nomeComercial) +
        this.#detalhesNegocioAlto(this.localNegocio.detalhesEndereco) +
        '\n' + contatosAlto + 
        '--------------\n' + clientesAlto;
    }

    #detalhesNegocioBaixo(detalhesBaixo){
        return detalhesBaixo.toLowerCase()
    }

    mostrarDetalhesNegocioBaixo(){
        let contatosBaixo = ''
        this.contatos.forEach(function(contato){
            contatosBaixo += this.#detalhesNegocioBaixo(contato.detalhesContato) + '\n'
        }, this)
    
        let clientesBaixo = ''
        this.pessoasClientes.forEach(function(cliente){
            clientesBaixo += this.#detalhesNegocioBaixo(cliente.detalhesCliente) + '\n'
        }, this)
    
        return 'Razão Principal: ' + this.#detalhesNegocioBaixo(this.razaoPrincipal) +
        '\nNome Comercial: ' + this.#detalhesNegocioBaixo(this.nomeComercial) +
        this.#detalhesNegocioBaixo(this.localNegocio.detalhesEndereco) +
        '\n' + contatosBaixo + 
        '--------------\n' + clientesBaixo;
    }   
}


let localNegocio = new LocalResidencia("Paraná", "Curitiba", "Rua das Startups", 1001)
let contatoNegocio1 = new Contato(41, "9000-1234")
let contatoNegocio2 = new Contato(41, "8000-5678")
let negocio = new Negocio("Inovações Digitais", "InovaTec", "99887766000155", localNegocio)
negocio.contatos.push(contatoNegocio1, contatoNegocio2)

let localCliente1 = new LocalResidencia("Paraná", "Curitiba", "Avenida Central", 200)
let contatoCliente1_1 = new Contato(41, "1111-2222")
let contatoCliente1_2 = new Contato(41, "3333-4444")
let pessoaCliente1 = new PessoaCliente("Bruno Lima", "111.222.333-44", localCliente1)
pessoaCliente1.contatos.push(contatoCliente1_1, contatoCliente1_2)

let localCliente2 = new LocalResidencia("Londrina", "Paraná", "Rua das Palmeiras", 300)
let contatoCliente2_1 = new Contato(43, "5555-6666")
let contatoCliente2_2 = new Contato(43, "7777-8888")
let pessoaCliente2 = new PessoaCliente("Fernanda Souza", "555.666.777-88", localCliente2)
pessoaCliente2.contatos.push(contatoCliente2_1, contatoCliente2_2)

let localCliente3 = new LocalResidencia("Maringá", "Paraná", "Rua do Progresso", 400)
let contatoCliente3_1 = new Contato(44, "9999-0000")
let contatoCliente3_2 = new Contato(44, "2222-3333")
let pessoaCliente3 = new PessoaCliente("Gabriel Torres", "999.000.111-22", localCliente3)
pessoaCliente3.contatos.push(contatoCliente3_1, contatoCliente3_2)

let localCliente4 = new LocalResidencia("Ponta Grossa", "Paraná", "Rua das Araucárias", 500)
let contatoCliente4_1 = new Contato(42, "4444-5555")
let contatoCliente4_2 = new Contato(42, "6666-7777")
let pessoaCliente4 = new PessoaCliente("Juliana Alves", "222.333.444-55", localCliente4)
pessoaCliente4.contatos.push(contatoCliente4_1, contatoCliente4_2)

let localCliente5 = new LocalResidencia("Foz do Iguaçu", "Paraná", "Rua das Cataratas", 600)
let contatoCliente5_1 = new Contato(45, "8888-9999")
let contatoCliente5_2 = new Contato(45, "0000-1111")
let pessoaCliente5 = new PessoaCliente("Ricardo Mendes", "333.444.555-66", localCliente5)
pessoaCliente5.contatos.push(contatoCliente5_1, contatoCliente5_2)

negocio.pessoasClientes = [pessoaCliente1, pessoaCliente2, pessoaCliente3, pessoaCliente4, pessoaCliente5]

//Imprime detalhes do negócio
console.log(negocio.detalhesNegocio)

//Imprime detalhes do negócio em caixa alta
console.log(negocio.mostrarDetalhesNegocioAlto())

//Imprime detalhes do negócio em caixa baixa
console.log(negocio.mostrarDetalhesNegocioBaixo())
