import type { PropType, ExtractPropTypes } from "vue";

export const CardContainerProps = {
  title: {
    type: String,
    default: "",
  },
  titleClass: {
    type: String as PropType<string | string[]>,
    default: "",
  },
  cardClass: {
    type: String as PropType<string | string[]>,
    default: "",
  },
};
export type ICardContainerProps = Readonly<ExtractPropTypes<typeof CardContainerProps>>;
