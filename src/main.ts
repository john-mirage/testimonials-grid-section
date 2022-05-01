import '@assets/styles/style.css';
import testimonials from '@assets/data/testimonials';

interface Testimonial {
  name: string,
  avatar: string,
  avatarAlt: string,
  title: string,
  content: string,
  sectionClasses: string[]
}

const grid = document.querySelector("#grid") as HTMLElement;
const template = document.querySelector("#template") as HTMLTemplateElement;

testimonials.forEach((testimonial: Testimonial) => {
  const fragment = template.content.cloneNode(true) as HTMLElement;
  const section = fragment.querySelector(".testimonial-section");
  section.classList.add(...testimonial.sectionClasses);
  const image = fragment.querySelector(".testimonial-image");
  const name = fragment.querySelector(".testimonial-name");
  const title = fragment.querySelector(".testimonial-title");
  const content = fragment.querySelector(".testimonial-content");
  image.setAttribute("src", testimonial.avatar);
  image.setAttribute("alt", testimonial.avatarAlt);
  name.textContent = testimonial.name;
  title.textContent = testimonial.title;
  content.textContent = testimonial.content;
  grid.appendChild(fragment);
});
