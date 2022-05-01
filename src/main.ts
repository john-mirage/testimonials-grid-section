import '@assets/styles/style.css';
import testimonials from '@assets/data/testimonials';

interface Testimonial {
  fullName: string;
  firstName: string;
  avatar: string;
  avatarAlt: string;
  title: string;
  content: string;
}

const grid = document.querySelector("#grid") as HTMLElement;
const template = document.querySelector("#template") as HTMLTemplateElement;

testimonials.forEach((testimonial: Testimonial) => {
  const fragment = template.content.cloneNode(true) as HTMLElement;
  const section = fragment.querySelector(".section") as HTMLElement;
  const image = fragment.querySelector(".section__avatar") as HTMLImageElement;
  const name = fragment.querySelector(".section__name") as HTMLHeadingElement;
  const title = fragment.querySelector(".section__title") as HTMLHeadingElement;
  const content = fragment.querySelector(".section__content") as HTMLSpanElement;
  section.classList.add(`section--${testimonial.firstName}`);
  image.setAttribute("src", testimonial.avatar);
  image.setAttribute("alt", testimonial.avatarAlt);
  name.textContent = testimonial.fullName;
  title.textContent = testimonial.title;
  content.textContent = testimonial.content;
  const comment = document.createComment(testimonial.fullName);
  grid.appendChild(comment);
  grid.appendChild(fragment);
});
