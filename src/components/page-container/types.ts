import { type PropType, type ExtractPropTypes } from "vue";

export const PageContainerProps = {
  showBackButton: {
    type: Boolean,
    default: false,
  },
  showTitle: {
    type: Boolean,
    default: false,
  },
  border: {
    type: Boolean,
    default: false,
  },
};

export type IPageContainerProps = Readonly<ExtractPropTypes<typeof PageContainerProps>>;
