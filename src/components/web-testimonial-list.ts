import Testimonial from "@interfaces/testimonial";
import WebTestimonialInterface from "@interfaces/web-testimonial";

class WebTestimonialList extends HTMLElement {
  _testimonials: Testimonial[] | false;
  initialCall: boolean;
  titleElement: HTMLHeadingElement;

  constructor() {
    super();
    this._testimonials = false;
    this.initialCall = true;
    this.titleElement = document.createElement("h2");
    this.titleElement.classList.add("testimonial-list__title");
    this.titleElement.setAttribute("id", "testimonial-list-title");
    this.titleElement.textContent = "Testimonial list";
  }

  get testimonials(): Testimonial[] {
    if (this._testimonials) {
      return this._testimonials;
    } else {
      throw new Error("The testimonials are not defined");
    }
  }

  set testimonials(testimonials: Testimonial[]) {
    this._testimonials = testimonials;
    this.displayTestimonials();
  }

  connectedCallback() {
    if (this.initialCall) {
      this.classList.add("testimonial-list");
      this.setAttribute("aria-labelledby", "testimonial-list-title");
      this.prepend(this.titleElement);
      this.initialCall = false;
    }
  }

  displayTestimonials() {
    this.innerHTML = "";
    this.testimonials.forEach((testimonial) => {
      const testimonialElement = this.createTestimonialElement(testimonial);
      this.append(testimonialElement);
    });
  }

  createTestimonialElement(testimonial: Testimonial) {
    const testimonialElement = <WebTestimonialInterface>document.createElement("article", { is: "web-testimonial" });
    testimonialElement.testimonial = testimonial;
    return testimonialElement;
  }
}

export default WebTestimonialList;