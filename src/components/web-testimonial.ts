import Testimonial from "@interfaces/testimonial";

class WebTestimonial extends HTMLElement {
  _testimonial: Testimonial | false;
  initialCall: boolean;
  fragment: DocumentFragment;
  avatarElement: HTMLImageElement;
  usernameElement: HTMLHeadingElement;
  statusElement: HTMLParagraphElement;
  titleElement: HTMLHeadingElement;
  descriptionElement: HTMLSpanElement;

  constructor() {
    super();
    this._testimonial = false;
    this.initialCall = true;
    const template = <HTMLTemplateElement>document.getElementById("template-testimonial");
    this.fragment = <DocumentFragment>template.content.cloneNode(true);
    this.avatarElement = <HTMLImageElement>this.fragment.querySelector('[data-name="avatar"]');
    this.usernameElement = <HTMLHeadingElement>this.fragment.querySelector('[data-name="username"]');
    this.statusElement = <HTMLParagraphElement>this.fragment.querySelector('[data-name="status"]');
    this.titleElement = <HTMLHeadingElement>this.fragment.querySelector('[data-name="title"]');
    this.descriptionElement = <HTMLSpanElement>this.fragment.querySelector('[data-name="description"]');
  }

  get testimonial() {
    if (this._testimonial) {
      return this._testimonial;
    } else {
      throw new Error("The testimonial is not defined");
    }
  }

  set testimonial(testimonial: Testimonial) {
    this._testimonial = testimonial;
  }

  connectedCallback() {
    if (this.initialCall) {
      this.avatarElement.setAttribute("src", this.testimonial.avatar);
      this.avatarElement.setAttribute("alt", this.testimonial.fullName);
      this.avatarElement.setAttribute("aria-hidden", "true");
      this.usernameElement.setAttribute("id", `testimonial-username-${this.testimonial.id}`);
      this.usernameElement.textContent = this.testimonial.fullName;
      this.statusElement.setAttribute("id", `testimonial-status-${this.testimonial.id}`);
      this.titleElement.textContent = this.testimonial.title;
      this.titleElement.setAttribute("id", `testimonial-title-${this.testimonial.id}`);
      this.descriptionElement.textContent = this.testimonial.content;
      this.descriptionElement.setAttribute("id", `testimonial-description-${this.testimonial.id}`)
      this.classList.add("testimonial", `testimonial--${this.testimonial.firstName}`);
      this.setAttribute("tabindex", "0");
      this.setAttribute("aria-posinset", this.testimonial.id);
      this.setAttribute("aria-labelledby", `testimonial-username-${this.testimonial.id}`);
      this.setAttribute("aria-describedby", `testimonial-status-${this.testimonial.id} testimonial-title-${this.testimonial.id} testimonial-description-${this.testimonial.id}`);
      this.setAttribute("aria-setsize", "5");
      this.append(this.fragment);
      this.initialCall = false;
    }
  }
}

export default WebTestimonial;