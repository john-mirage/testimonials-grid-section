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
  const section = fragment.querySelector(".section");
  const image = fragment.querySelector(".section__avatar");
  const name = fragment.querySelector(".section__name");
  const title = fragment.querySelector(".section__title");
  const content = fragment.querySelector(".section__content");
  section.classList.add(`section--${testimonial.firstName}`);
  image.setAttribute("src", testimonial.avatar);
  image.setAttribute("alt", testimonial.avatarAlt);
  name.textContent = testimonial.fullName;
  title.textContent = testimonial.title;
  content.textContent = testimonial.content;
  grid.appendChild(fragment);
});
