export type ComponentType =
  | "button"
  | "card"
  | "input"
  | "textarea"
  | "heading"
  | "paragraph"
  | "sideMenu"
  | "topTabs"
  | "bottomTabs"
  | "inputField"
  | "textField"
  | "emailField"
  | "passwordField"
  | "searchField"
  | "verificationField"
  | "dobField"
  | "otpField"
  | "bioField"
  | "creditCardField"
  | "cvvField"
  | "phoneNumberField"
  | "checkbox"
  | "radioButton"
  | "cardRadio"
  | "customRadio"
  | "dropdown"
  | "dropdownList"
  | "dropdownList2"
  | "accordion"
  | "imageSlider"
  | "appImage"
  | "snackBar"
  | "toggleButton"
  | "informationCard"
  | "chipTag"
  | "multiSelectChip"
  | "verticalStepper"
  | "horizontalStepper"
  | "stepProgress"
  | "fileUpload"
  | "galleryUpload"
  | "customCamera"
  | "actionSheet"
  | "actionSheetImage"
  | "selectionActionSheet"
  | "selectionIconButton"
  | "accordionSkeleton"
  | "imageSliderSkeleton"
  | "stepperSkeleton"
  | "biometric"
  | "biometricError"
  | "contacts"
  | "contactsError"
  | "location"
  | "language"
  | "dateNumberFormatting"
  | "deviceInfo"
  | "deviceConfiguration"
  | "navigation"
  

// export interface UIComponent {
//     id: string;
//     type: ComponentType;
//     label: string;
//     x: number;
//     y: number;
//     width: number;
//     height: number;
//     children?: UIComponent[];
// }   

export interface UIComponent {
  id: string;
  type: ComponentType;
  label: string;

  buttonVariant?:
  | "primary"
  | "secondary"
  | "outlined"
  | "disabled"
  | "loading"
  | "textPrimary"
  | "textSecondary";

  textFieldVariant?:
  | "placeholder"
  | "emptyFocused"
  | "filledFocused"
  | "filled";

  emailFieldVariant?:
  | "default"
  | "focused"
  | "filled"
  | "error";

  passwordFieldVariant?:
  | "default"
  | "focused"
  | "filled"
  | "error";

  checkboxVariant?: "unchecked" | "checked";

  radioVariant?: "male" | "female";

  cardRadioVariant?: "unchecked" | "checked";

  customRadioActive?: number;

  dropdownVariant?: "default" | "disabled";

  accordionVariant?: "closed" | "open";

  imageSliderVariant?: "square" | "rounded";

  appImageVariant?: "square" | "rounded" | "circular";

  snackBarVariant?:
  | "information"
  | "success"
  | "error"
  | "warning";

  toggleVariant?:
  | "twoLeft"
  | "twoRight"
  | "threeLeft"
  | "threeCenter"
  | "threeRight"
  | "threeFull";

  informationCardVariant?: "titleOnly" | "withMessage";

  chipVariant?:
  | "default"
  | "disabled"
  | "filled"
  | "information"
  | "success"
  | "error"
  | "warning";

  multiSelectChipVariant?: "default" | "selected";

  fileUploadVariant?: "default" | "dashed";

  galleryUploadVariant?:
  | "default"
  | "dashed"
  | "active"
  | "activeDashed";

  customCameraVariant?: "selfie" | "document";

  selectionIconButtonVariant?:
  | "default"
  | "selected"
  | "disabled"
  | "sizes";

  skeletonVariant?: "light" | "dark";

  imageSliderSkeletonVariant?: "light" | "dark";

  stepperSkeletonVariant?: "light" | "dark";

  children?: UIComponent[];

  x: number;
  y: number;
  width: number;
  height: number;
}