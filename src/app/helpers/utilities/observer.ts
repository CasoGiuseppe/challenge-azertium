const config = {
  root: document.querySelector("#main"),
  rootMargin: "0px",
  threshold: 0.1,
};

export class Observe {
  public create(params: any): void {
    const { element, action } = params;
    const observer = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting) {
        action();
        observer.unobserve(entry[0].target);
      }
    }, config);

    observer.observe(element);
  }
}
