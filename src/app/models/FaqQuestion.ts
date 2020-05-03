export class FaqQuestion {
  question: string;
  short_answer: string;
  long_answer: string;

  constructor(q: FaqQuestion) {
    this.question = q.question;
    this.short_answer = q.short_answer;
    this.long_answer = q. long_answer;
  }
}
