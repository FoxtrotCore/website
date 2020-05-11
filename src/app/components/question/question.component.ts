import { Component, Input, Renderer2, ViewChild, OnInit } from '@angular/core';

function sleep(delay: number) { return new Promise( resolve => setTimeout(resolve, delay) ); }

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {
  collapse: Boolean;
  @Input() question: String;
  @Input() short_answer: String;
  @Input() long_answer: String;

  constructor(private renderer: Renderer2) {}

  @ViewChild('parent', { static: false }) parent;
  ngOnInit(): void {}
  ngAfterViewInit(){ this.toggle_collapse(true); }

  toggle_collapse(mode: Boolean = null) {
    if(mode == null) this.collapse = !this.collapse;
    else this.collapse = mode;

    var animate = {
      'true': ['collapse', 'none', '+'],
      'false': ['expand', 'inline-block', "X"]
    }[this.collapse.toString()];

    var button = this.parent.nativeElement.querySelector('button');
    var content = this.parent.nativeElement.querySelector('.answers');
    this.renderer.setStyle(content, 'animation-play-state', 'running');
    this.renderer.setStyle(content, 'animation-name', animate[0]);
    button.innerText = animate[2];
    if(this.collapse) {
      (async () => {
        await sleep(100);
        this.renderer.setStyle(content, 'display', animate[1]);
      })();
    }
    else this.renderer.setStyle(content, 'display', animate[1]);
  }
}
