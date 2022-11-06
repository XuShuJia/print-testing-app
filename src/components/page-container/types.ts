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
  showBorder: {
    type: Boolean,
    default: false,
  },
  bodyPadding: {
    type: Boolean,
    default: true,
  },
  pageClass: {
    type: String as PropType<string | string[]>,
    default: "",
  },
  headerClass: {
    type: String as PropType<string | string[]>,
    default: "",
  },
  bodyClass: {
    type: String as PropType<string | string[]>,
    default: "",
  },
};

export type IPageContainerProps = Readonly<ExtractPropTypes<typeof PageContainerProps>>;
