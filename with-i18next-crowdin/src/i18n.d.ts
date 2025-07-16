// eslint-disable-next-line no-restricted-imports
import resources from "./i18n";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: typeof resources;
  }
}
