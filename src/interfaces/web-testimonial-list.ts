import Testimonial from "@interfaces/testimonial";

export default interface WebTestimonialListInterface extends HTMLDivElement {
  _testimonials: Testimonial[] | false;
  testimonials: Testimonial[];
}