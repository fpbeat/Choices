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

  scrollToChildElement(element: HTMLElement, animatedScroll: boolean): void {
    if (!element) {
      return;
    }

    const scrollBehavior = animatedScroll ? 'smooth' : 'auto';

    element.scrollIntoView({block: 'nearest', behavior: scrollBehavior});
  }
}
