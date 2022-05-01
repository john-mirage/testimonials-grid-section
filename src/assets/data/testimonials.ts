import danielClifford from "@assets/images/image-daniel.jpg";
import jonathanWalters from "@assets/images/image-jonathan.jpg";
import jeanetteHarmon from "@assets/images/image-jeanette.jpg";
import patrickAbrams from "@assets/images/image-patrick.jpg";
import kiraWhittle from "@assets/images/image-kira.jpg";

const testimonials = [
  {
    name: "Daniel Clifford",
    avatar: danielClifford,
    avatarAlt: "Daniel Clifford profile picture",
    title: "I received a job offer mid-course, and the subjects i learned were current, if not more so, in the company i joined. I honesly feel i got every penny's worth.",
    content: "I was an EMT for many years before i joined the bootcamp. I've been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free into course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, i've successfully switched careers, working as a Software Engineer at a VR startup.",
    sectionClasses: ["bg-moderate-violet", "md:col-span-2", "xl:order-1"]
  },
  {
    name: "Jonathan Walters",
    avatar: jonathanWalters,
    avatarAlt: "Jonathan Walters profile picture",
    title: "The team was very supportive and kept me motivated",
    content: "I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments i've made in myself.",
    sectionClasses: ["bg-very-dark-grayish-blue", "xl:order-2"]
  },
  {
    name: "Jeanette Harmon",
    avatar: jeanetteHarmon,
    avatarAlt: "Jeanette Harmon profile picture",
    title: "An overall wonderful and rewarding experience",
    content: "Thank you for the wonderful experience! I now have a job i really enjoy, and make a good living while doing something i love.",
    sectionClasses: ["bg-white", "xl:order-4"]
  },
  {
    name: "Patrick Abrams",
    avatar: patrickAbrams,
    avatarAlt: "Patrick Abrams profile picture",
    title: "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
    content: "The staff seem genuinely concerned about my progress which i find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.",
    sectionClasses: ["bg-very-dark-blackish-blue", "md:col-span-2", "xl:order-5"]
  },
  {
    name: "Kira Whittle",
    avatar: kiraWhittle,
    avatarAlt: "Kira Whittle profile picture",
    title: "Such a life-changing experience. Highly recommended!",
    content: "Before joining the bootcamp, i've never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who an only say wonderful things about the program. the entire curriculum and staff did not disappoint. They were very hands-on and i never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, i've often referred to it during interviews as an example of my development experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!",
    sectionClasses: ["bg-white", "md:col-span-2", "xl:order-3", "xl:row-span-2", "xl:col-span-1"]
  }
];

export default testimonials;