  export default class List {
  element: HTMLElement;

  scrollPos: number;

  height: number;

  constructor({ element }: { element: HTMLElement }) {
    this.element = element;
    this.scrollPos = this.element.scrollTop;
    this.height = this.element.offsetHeight;
  }

  clear(): void {
    this.element.innerHTML = '';
  }

  append(node: Element | DocumentFragment): void {
    this.element.appendChild(node);
  }

  getChild(selector: string): HTMLElement | null {
    return this.element.querySelector(selector);
  }

  hasChildren(): boolean {
    return this.element.hasChildNodes();
  }

  scrollToTop(): void {
    this.element.scrollTop = 0;
  }

  scrollToChildElement(element: HTMLElement, direction: 1 | 0 | -1, animatedScroll: boolean): void {
    if (!element) {
      return;
    }

    if (direction === 0) {
      this.element.scrollTop = element.offsetTop - (this.element.offsetHeight / 2) + (element.offsetHeight / 2);

      return;
    }

    element.scrollIntoView({block: 'nearest', behavior: animatedScroll ? 'smooth' : 'auto'});
  }
}
