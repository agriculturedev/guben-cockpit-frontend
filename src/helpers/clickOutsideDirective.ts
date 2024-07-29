import { DirectiveBinding } from "vue";

let clicked_event: any = (e: any) => {
  return null;
};

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    clicked_event = (e: Event) => {
      if (!(el === e.target || el.contains(e.target as Node))) {
        // Invoke the provided method
        binding.value(event);
      }
    };
    document.addEventListener("click", clicked_event);
  },
  unmounted(el: any) {
    // Remove the event listener when the bound element is unmounted
    document.removeEventListener("click", clicked_event);
  },
};
