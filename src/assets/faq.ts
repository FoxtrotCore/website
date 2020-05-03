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
    question: "Can you upload your work to Pirates-Bay/MegaUpload/etc.?",
    short_answer: "No.",
    long_answer: "At the beginning of this project, we set some standards. One of the first was that we are not a piracy gig. We're not looking to replace the official release. _(Which[you should probably support](https://www.youtube.com/channel/UCn9zTBZVl6lu72s-6fXttZg) if you want to incentivize Mediatoon to bring back CL)_. We're just quality snobs looking to make some good software and enjoy a good show along the way. Like we said in the question above, it's easy to trace our remastered work back to us, and we're not looking to get in trouble, legal or otherwise."
  },
  {
    question: "Are you going to host any more CL-Community-Rewatches?",
    short_answer: "No.",
    long_answer: "We've been doing the community rewatches for two straight years, and it was a blast. **However** , rewatches are hard to schedule, especially when trying to take into account both European and American time zones and the viewership levels don't warrant the time and effort it takes for us to do them."
  },
  {
    question: "Can I organize a CL community rewatches?",
    short_answer: "You absolutely can.",
    long_answer: "While FTF itself will not be hosting such events anymore, we'd be more than happy to try and sponsor your event and do our best to give you the resources needed to hold it. What resources we can offer are dependant on what it is you're looking to do, so it would be best to contact us privately and work out what is reasonable. At the minimum, we can offer subtitles as well as some basic setup/configs for [CyTube](https://cytu.be/), a YouTube synchronizing platform we used to use for our own rewatches. We can also offer some tips/tricks from scheduling/modding from our two years of experience. _(Do note that this doesn't inherently include access to our remasters of the show, for most people/groups, we will not provide this)_."
  },
  {
    question: "Are you going to upscale anything else? Like CL: Evolution?",
    short_answer: "No.",
    long_answer: "Evolution is already in HD, so upscaling it wouldn't do much good. On top of that, Evolution is a live-action series, which makes upscaling it, not impossible but an absolute pain in the ___. Lots more research on better edge-finders for non-animated images would need to be done and FTU is not currently outfitted to handle such a task. You are absolutely welcome to take a shot at it for yourself because we've since made our [Upscaler](https://github.com/FoxtrotCore/FoxTrotUpscaler) open-source under **GPL 3.0** , so you're welcome to use it, _as is_ , or modify it to work with something like CL: Evolution, if +1080p live-action and crapily written story arcs is your thing. _:P_"
  }
];
