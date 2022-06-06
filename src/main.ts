import './main.css';
import data from "@data/data";
import WebTestimonialList from "@components/web-testimonial-list";
import WebTestimonial from "@components/web-testimonial";
import WebTestimonialListInterface from "@interfaces/web-testimonial-list";

customElements.define("web-testimonial-list", WebTestimonialList, { extends: "div" });
customElements.define("web-testimonial", WebTestimonial, { extends: "article" });


const mainElement = <HTMLElement>document.getElementById("main");
const webTestimonialListComment = document.createComment(" Testimonial list ");
const webTestimonialList = <WebTestimonialListInterface>document.createElement("div", { is: "web-testimonial-list" });
webTestimonialList.testimonials = data;
mainElement.append(webTestimonialListComment, webTestimonialList);