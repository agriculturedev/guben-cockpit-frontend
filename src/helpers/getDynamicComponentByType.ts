import { DynamicTypes } from "@/enums/DynamicTypes";

import GenericButton from "@/components/Generic/GenericButton.vue";

export const getComponentByType = (type: string) => {
  switch (type) {
    case DynamicTypes.GenericButton:
      return GenericButton;
    default:
      throw new Error(`Unknown component type: ${type}`);
  }
};
