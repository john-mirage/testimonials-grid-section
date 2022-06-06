import Testimonial from "@interfaces/testimonial";

export default interface WebTestimonialInterface extends HTMLElement {
  _testimonial: Testimonial | false;
  _testimonialIndex: string | false;
  testimonial: Testimonial;
  testimonialIndex: string;
}