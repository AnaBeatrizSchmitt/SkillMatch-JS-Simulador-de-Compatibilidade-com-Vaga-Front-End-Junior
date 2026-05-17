/*----------------------------------------CLASSES----------------------------------------*/

class Candidato {
    nome = ''
    idade = 0
    area = ''
    experienciaMeses = ''
    email = ''
    habilidades = []

    constructor(nome, idade, area, experienciaMeses, email, habilidades) {
        this.nome = nome
        this.idade = idade
        this.area = area
        this.experienciaMeses = experienciaMeses
        this.email = email
        this.habilidades = habilidades
    }

    apresentacaoCandidato() {
        console.log(`CANTIDATO\nNome: ${this.nome}\nIdade:${this.idade}\nÁrea: ${this.area}\nMeses de experiência: ${this.experienciaMeses}\nEmail: ${this.email}\nHabilidades: ${this.habilidades.join(', ')}`)
    }
}

class Vaga {
    id = 0
    empresa = ''
    cargo = ''
    salario = 0.0
    modalidade = ''
    requisitos = []

    constructor(id, empresa, cargo, salario, modalidade, requisitos) {
        this.id = id
        this.empresa = empresa
        this.cargo = cargo
        this.salario = salario
        this.modalidade = modalidade
        this.requisitos = requisitos
    }

    resumoVaga() {
        console.log(`VAGA\nId da vaga: ${this.id}\nEmpresa:${this.empresa}\nCargo: ${this.cargo}\nSalário: ${this.salario}\nModalidade: ${this.modalidade}\nRequisitos: ${this.requisitos.join(', ')}`)
    }
}

class VagaCandidato extends Vaga {
    candidato = ''
    habilidadesCandidato = []
    constructor(id, empresa, cargo, salario, modalidade, requisitos, habilidadesCandidato) {
        super(id, empresa, cargo, salario, modalidade, requisitos)
        this.habilidadesCandidato = habilidadesCandidato
    }

    nivelCompatibilidade() {
        const habilidadesComum = this.requisitos.filter(req =>
            this.habilidadesCandidato.includes(req)
        );
        return ((habilidadesComum.length / this.requisitos.length) * 100).toFixed(2);
    }
}

/*----------------------------------------INSTÂNCIAS----------------------------------------*/

const vagas = []
const candidato = new Candidato("Ana Beatriz Schmitt", 29, "Front-End", 12, "anab3.schmitt@gmail.com", ["Lógica de Programação", "CSS", "HTML", "JavaScript", "POO"]);

const primeiraVaga = new Vaga(1, "Soluções Web", "Desenvolvedor Front-End Júnior", 3200, "Remoto", ["CSS", "HTML", "JavaScript", "POO", "Arrays"])
const segundaVaga = new Vaga(2, "Big Tecnology", "Estágiario JavaScript", 1300, "Presencial", ["JavaScript", "Lógica de Programação", "POO"])
const terceiraVaga = new Vaga(3, "New Tech", "Suporte Técnico Internacional", 4500, "Remoto", ["Inglês Fluente", "Kanban", "Lógica de Programação"])
const quartaVaga = new Vaga(4, "Soluções Web", "Desenvolvedor JavaScript Júnior", 3600, "Híbrido", ["GitHub", "Lógica de Programação", "Inglês Fluente", "Kanban"])
const quintaVaga = new Vaga(5, "Code Generation", "Estágiario Web", 1400, "Presencial", ["CSS", "HTML", "Arrays", "GitHub"])
vagas.push(primeiraVaga)
vagas.push(segundaVaga)
vagas.push(terceiraVaga)
vagas.push(quartaVaga)
vagas.push(quintaVaga)

const vagasCandidato = vagas.map(vaga =>
    new VagaCandidato(
        vaga.id, vaga.empresa, vaga.cargo,
        vaga.salario, vaga.modalidade, vaga.requisitos, candidato.habilidades
    )
);

/*----------------------------------------FUNÇÕES----------------------------------------*/

const  classificacaoCompatibilidade(percentual) => {
    if (percentual >= 80 && percentual <= 100) {
        return 'Alta compatibilidade'
    } else if (percentual >= 50 && percentual <= 79) {
        return 'Média compatibilidade'
    } else if (percentual >= 0 && percentual <= 49) {
        return 'Baixa compatibilidade'
    }
}

function resumoCompatibilidade() {
    vagasCandidato.forEach(vaga => {
        console.log('-------------------')
        console.log(``)
        console.log('-------------------')
    });
}

