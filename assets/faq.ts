import { FaqQuestion } from '../app/models/FaqQuestion';

export var raw_questions: FaqQuestion[] = [
  {
    question: "Where can I find your video-based work?",
    short_answer: "Nowhere public.",
    long_answer: "Right now there is no way to **publicly** view our remaster of Code Lyoko because we quickly run into issues of copyright law/infringement. This especially considering Mediatoon is trying to maintain [a few official outlets](https://www.youtube.com/channel/UCn9zTBZVl6lu72s-6fXttZg) for CL viewing. Suffice it to say, they probably wouldn't be too happy with us trying to compete with them with easily higher quality work. We're also the first group, _(as far as we know)_ , to upscale CL in its entirety to **1440p** , so it's fairly easy to trace any of our remasters back to us. Getting into legal fisticuffs with Mediatoon is the last thing we're looking for."
  },
  {
    question: "Where can I find your subtitle-based work?",
    short_answer: "On our [subtitles](/subtitles) page",
    long_answer: "We made the original transcripts via some simple typography rules via our [transcription guide](https://foxtrotfanatics.page.link/guide), formatted them to a pre **Aegisub** -form via our [Script Eater Bot](https://github.com/FoxtrotCore/script-eater), and then exported them from Aegisub as .ASS files. We also took the time to convert them to .STI files for YouTube compatibility. All is available via the subtitles link above."
  },
  {
    question: "Can you upload your work to Pirates-Bay/MegaUpload/etc. or provide it to me privately?",
    short_answer: "No.",
    long_answer: "At the beginning of this project, we set some standards. One of the first was that we are not a piracy gig. We're not looking to replace the official release. _([Which you should probably support](https://www.youtube.com/channel/UCn9zTBZVl6lu72s-6fXttZg) if you want to incentivize Mediatoon to bring back CL)_. We're just quality snobs looking to make some good software and enjoy a good show along the way. Like we said in the question above, it's easy to trace our remastered work back to us, and we're not looking to get in trouble, legal or otherwise."
  },
  {
    question: "Are you going to host any more CL-Community-Rewatches?",
    short_answer: "No. But [Project Eradication](https://www.twitch.tv/projecteradication) is doing them again.",
    long_answer: "We've been doing the community rewatches for two straight years, and it was a blast. **However**, rewatches are hard to schedule, especially when trying to take into account both European and American time zones and the viewership levels don't warrant the time and effort it takes for us to do them. **But** all hope is not lost, if you're looking to hang out with other CL fans and watch the show, [Project Eradication](https://www.twitch.tv/projecteradication) has been doing weekly rewatches over on their Twitch channel. Feel free to bug them in their [Discord](https://discord.gg/e3EGwQA) for schedule info and additional details."
  },
  {
    question: "Are you going to upscale CL: Evolution?",
    short_answer: "No.",
    long_answer: "Evolution is already in HD, so upscaling it wouldn't do much good. On top of that, Evolution is a live-action series, which makes upscaling it, not impossible but an absolute pain in the \\_\\_\\_. More research on better edge-finders operating on non-animated images would need to be done in order to *properly* upscale CL:E. FTU is not currently outfitted to handle such a task and we're not currently in a position to commit to that level of R&D. You are absolutely welcome to take a shot at it for yourself because we've since made [Foxtrot Upscaler](https://github.com/FoxtrotCore/FoxTrotUpscaler) open-source under **GPL 3.0**, you're welcome to use it *as is* or modify it to your own liking."
  },
  {
    question: "Are you going to maintain Foxtrot Upscaler?",
    short_answer: "[FTU](https://github.com/FoxtrotCore/FoxTrotUpscaler) will only receive critical bug fixes or security patches from time to time.",
    long_answer: "FTU was made with a specific architecture in mind to get around some of the limitations we had back in 2017, (when we were actively developing and using it). We've already added all the features we wanted in order to overcome those limitations and achieve a fully remastered CL. Adding new features or trying to adapt it to support linux would be difficult without simultaneously rewriting a lot of the underlying code. **However**, that doesn't mean we're done making software! On our backlog, we have plans to make **FTUv2** which will be a total rewrite of the upscaler and will aim to fix many of the baked-in problems we had with FTU and perhaps even introduce a few new features. Now is not the time to outline all the fixes and features but we'll be sure to announce it [@foxtrotfanatics](https://twitter.com/foxtrotfanatics) when we're ready to get started. Be sure to drop us a follow over there so you can be in-the-know when we start."
  }
];
