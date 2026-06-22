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
  | "notification"
  | "toggle"
  | "switchButton"
  | "header"
  | "readOnlyForm"
  | "transaction"
  | "transactionSuccessful"
  | "passbook"
  | "fundTransfer"
  | "transactionSuccessStatus"
  | "transactionFailedStatus"
  | "transactionDetails"
  | "myTransactions"
  | "phonebook"
  | "phonebookAccess"
  | "multiSelectCards"
  | "iconWithCard"
  | "scanner"
  | "backButton"
  | "faceId";

export type HeadingLevel =
  | "display"
  | "headline"
  | "title"
  | "subtitle"
  | "body"
  | "caption"
  | "overline";

export interface UIComponent {
  id: string;
  type: ComponentType;
  label: string;

  headingLevel?: HeadingLevel;

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

  toggleSize?: "large" | "small";

  switchButtonVariant?: "on" | "off";

  transactionVariant?:
    | "pin"
    | "pinError"
    | "upi"
    | "upiError";

  myTransactionsVariant?: "list" | "expanded";

  phonebookVariant?: "sendMoney" | "access";

  iconWithCardVariant?: "filled" | "outlined";

  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  borderRadius?: number;

  description?: string;
  placeholder?: string;

  tabs?: string[];
  bottomTabs?: string[];

  children?: UIComponent[];

  x: number;
  y: number;
  width: number;
  height: number;
}

export interface SavedPage {
  pageId: string;
  pageName: string;
  route: string;
  components: UIComponent[];
  createdAt: string;
}