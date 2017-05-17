export class Resume {
  public name: string;
  public shortDescription: string;
  public mail: string;
  public about: string[];
  public social: SocialMedia;
  public specialties: Specialty[];

  constructor() {
    this.name = 'Fábrica de Código';
    this.shortDescription = 'Um blog sobre programação';
    this.mail = 'contato@fabricadecodigo.com';

    this.about = [];
    this.about.push('Olá, meu nome é Felipe e sou criador desse projeto em Angular.');
    this.about.push('Esse projeto é para você programador para criar um currículo online para colocar todos os seus skills.');
    this.about.push('Você pode incluir infomações das suas redes sociais.');
    this.about.push('Abaixo você vai ver um exemplo de como são exibidas as especilidades e cada skill em uma especialidade.');
    this.about.push('E por fim tem um formulario de contato que utiliza o ' +
      '<a href="https://formspree.io/" target="_blank">https://formspree.io/</a> para enviar e-mail para você.');
    this.about.push('Para mais conteúdos como esse, acesse o blog ' +
      '<a href="http://www.fabricadecodigo.com" target="_blank">Fábrica de Código</a>');

    this.social = new SocialMedia();
    this.social.facebook = 'https://www.facebook.com/fabricadecodigo';
    this.social.github = 'https://github.com/fabricadecodigo';
    this.social.googlePlus = 'https://plus.google.com/u/0/100131878169391547528';
    this.social.linkedin = 'https://www.linkedin.com/in/feliperfranco/';
    this.social.twitter = 'https://twitter.com/feliperfranco';
    this.social.youtube = 'https://www.youtube.com/channel/UCXepHP9GmUtF73xtEIa9RWA';
    this.specialties = [];

    // Specialites
    this.specialties.push(new Specialty('Front-end', 'first', [
      new Skill('JavaScript', 10),
      new Skill('HTML 5', 20),
      new Skill('CSS', 30),
      new Skill('Vue', 40),
      new Skill('ReactJS', 50),
      new Skill('Angular', 60)
    ]));

    this.specialties.push(new Specialty('Back-end', 'second', [
      new Skill('C#', 10),
      new Skill('PHP', 20),
      new Skill('Java', 40),
      new Skill('ASP NET', 50),
      new Skill('Node', 60)
    ]));

    this.specialties.push(new Specialty('Mobile', 'third', [
      new Skill('Android', 10),
      new Skill('iOS', 20),
      new Skill('Apache Cordova', 30),
      new Skill('Ionic Framework', 40),
      new Skill('Phonegap', 50)
    ]));

    this.specialties.push(new Specialty('Database', 'first', [
      new Skill('SQL Server', 10),
      new Skill('Oracle', 20),
      new Skill('PostgreSQL', 30),
      new Skill('MongoDB', 40)
    ]));

    this.specialties.push(new Specialty('DevOps', 'second', [
      new Skill('Vagrant', 10),
      new Skill('Docker', 20),
      new Skill('Windows Azure', 30),
      new Skill('Amazon Web Services Cloud', 40)
    ]));

    this.specialties.push(new Specialty('Metodologias', 'third', [
      new Skill('Scrum', 10),
      new Skill('Kanban', 20)
    ]));
  }
}

export class SocialMedia {
  public facebook: string;
  public googlePlus: string;
  public twitter: string;
  public linkedin: string;
  public github: string;
  public youtube: string;
}

export class Specialty {
  public name: string;
  public cssClass: string;
  public skills: Skill[];

  constructor(name: string, cssClass: string, skills: Skill[]) {
    this.name = name;
    this.cssClass = cssClass;
    this.skills = skills;
  }
}

export class Skill {
  public name: string;
  public level: number;

  constructor(name: string, level: number) {
    this.name = name;
    this.level = level;
  }
}
