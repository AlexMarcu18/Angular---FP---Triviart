import {Question} from '../../models/Question';

export class QuestionsMock {
  public static questions: Array<Question> =
    [{
      description: "Cine este cel mai mare pictor roman?",
      correctAnswers: ["Nicolae Tonitza"],
      wrongAnswers: ["Nicolae Grigorescu", "Camil Ressu", "Stefan Luchian"]
    }, {
      description: "Cea mai cunoscuta lucrare a lui Da vinci?",
      correctAnswers: ["Gioconda"],
      wrongAnswers: ["Omul vitruvian", "Cina cea de taina", "Salvator Mundi"]
    }, {
      description: "Cine a pictat pictura noapte instelata?",
      correctAnswers: ["van gogh"],
      wrongAnswers: ["da vinci", "michelangelo", "sandro boticelli"]
    }, {
      description: "cine e supranumita micuta picasso?",
      correctAnswers: ["alexandra nechita"],
      wrongAnswers: ["Lavinia Fontana", "Sofonisba Anguissola", "Artemisia Gentilleschi"]
    }, {
      description: "ce pictor celebru si-a taiat o ureche?",
      correctAnswers: ["van gogh"],
      wrongAnswers: ["da vinci", "gustav klimt", "picasso"]
    }, {
      description: "cine a pictat tabloul intitulat - tipatul -?",
      correctAnswers: ["Edvard munch"],
      wrongAnswers: ["camil ressu", "salvador dali", "stefan luchian"]
    }, {
      description: "Q1",
      correctAnswers: ["a1"],
      wrongAnswers: ["a2", "a3", "a4"]
    }];
}
