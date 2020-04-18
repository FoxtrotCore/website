import { Component, OnInit, Inject } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.css']
})
export class OurWorkComponent implements OnInit {
    upscale_project: Array<string>;
    transcription_project: Array<string>;
    audio_lang: Array<string>;
    subtitle_lang: Array<string>;

    constructor(@Inject(AppComponent) private parent: AppComponent) {
      this.parent.page_title = "Our Work";
      this.parent.banner_title = "What We've Done";
      this.parent.updatePage();

      this.upscale_project = [
        "Finding high quality source (PAL 576i 25 FPS 4:3 Aspect)",
        "Developing the FoxTrot Upscaler and the Foxtrot ReporterBot",
        "Upscaling source (PAL 1440p 25 FPS 4:3 Aspect)",
        "Muxing the audio and subtitles with the completed renders"
      ];

      this.transcription_project = [
        "Recording spoken dialogue and sound effects",
        "Creating colored outlines per character",
        "Producing text-bases and aegisub-based convertable subtitle files",
        "Producing YouTube-compatible SMI subtitle files"
      ];

      this.audio_lang = [
        "English",
        "French",
        "Spanish",
        "Finnish"
      ];

      this.subtitle_lang = [ "English" ];
    }

    ngOnInit(): void {}
}
