import Testimonial from "@interfaces/testimonial";
import WebTestimonialInterface from "@interfaces/web-testimonial";

class WebTestimonialList extends HTMLDivElement {
  _testimonials: Testimonial[] | false;
  initialCall: boolean;

  constructor() {
    super();
    this._testimonials = false;
    this.initialCall = true;
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