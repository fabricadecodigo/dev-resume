export class Resume {
  public name: string;
  public shortDescription: string;
  public mail: string;
  public about: string[];
  public social: SocialMedia;
  public specialties: Specialty[];

  constructor() {
    this.name = 'Felipe Franco';
    this.shortDescription = 'Full stack web developer';
    this.mail = 'feliperfranco@gmail.com';

    this.about = [];
    this.about.push('Olá, meu nome é Felipe, sou graduado em Sistemas de Informação e MBA em Gerência de Projetos de TI.');
    this.about.push('Eu sou um Full Stack Web Developer com experiência em todos os aspectos de desenvolvimento de software, ' +
      'incluindo analise de requisitos, design, desenvolvimento e suporte a produção.');
    this.about.push('Atualmente trabalho como desenvolvedor na Thomson Reuters, uma das maiores empresas do mundo.');
    this.about.push('E sou criador de um blog sobre desenvolvimento de software, o' +
      '<a href="http://www.fabricadecodigo.com" target="_blank">Fábrica de Código</a>');

    this.social = new SocialMedia();
    this.social.facebook = 'https://www.facebook.com/fabricadecodigo';
    this.social.github = 'https://github.com/fabricadecodigo';
    this.social.googlePlus = '';
    this.social.linkedin = 'https://www.linkedin.com/in/feliperfranco/';
    this.social.twitter = '';
    this.social.youtube = 'https://www.youtube.com/channel/UCXepHP9GmUtF73xtEIa9RWA';
    this.specialties = [];

    // Specialites
    this.specialties.push(new Specialty('Front-end', 'first', [
      new Skill('JavaScript', 80),
      new Skill('HTML 5', 99),
      new Skill('CSS', 90),
      new Skill('ReactJS', 10),
      new Skill('Angular 1', 90),
      new Skill('Angular 2', 50)
    ]));

    this.specialties.push(new Specialty('Back-end', 'second', [
      new Skill('C#', 99),
      new Skill('PHP', 30),
      new Skill('Java', 30),
      new Skill('ASP NET MVC', 99),
      new Skill('ASP NET Web Api', 99),
      new Skill('Node', 30),
      new Skill('Firebase', 50)
    ]));

    this.specialties.push(new Specialty('Mobile', 'third', [
      new Skill('Android', 20),
      new Skill('Apache Cordova', 90),
      new Skill('Ionic Framework', 99)
    ]));

    this.specialties.push(new Specialty('Database', 'first', [
      new Skill('SQL Server', 80),
      new Skill('Oracle', 30)
    ]));

    this.specialties.push(new Specialty('DevOps', 'second', [
      new Skill('Vagrant', 10),
      new Skill('Docker', 10),
      new Skill('Windows Azure', 20)
    ]));

    this.specialties.push(new Specialty('Metodologias', 'third', [
      new Skill('Scrum', 90),
      new Skill('Kanban', 90)
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
