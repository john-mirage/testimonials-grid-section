import Testimonial from "@interfaces/testimonial";

export default interface WebTestimonialListInterface extends HTMLElement {
  _testimonials: Testimonial[] | false;
  testimonials: Testimonial[];
}