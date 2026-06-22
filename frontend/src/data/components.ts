import type { ComponentType } from "../types";

export interface ComponentOption {
  type: ComponentType;
  label: string;
}

export interface ComponentGroup {
  category: string;
  options: ComponentOption[];
}

export const componentGroups: ComponentGroup[] = [
  {
    category: "Basic Components",
    options: [
      { type: "heading", label: "Heading" },
      { type: "button", label: "Button" },
      { type: "inputField", label: "Input Field" },
    ],
  },
  {
    category: "Selection Controls",
    options: [
      { type: "checkbox", label: "Check Box" },
      { type: "radioButton", label: "Radio Button" },
      { type: "cardRadio", label: "Card Radio" },
      { type: "customRadio", label: "Custom Radio" },
      { type: "toggle", label: "Toggle" },
      { type: "toggleButton", label: "Toggle Button" },
      { type: "switchButton", label: "Switch Button" },
    ],
  },
  {
    category: "Dropdowns & Forms",
    options: [
      { type: "dropdown", label: "Dropdown" },
      { type: "dropdownList", label: "Dropdown List" },
      { type: "dropdownList2", label: "Dropdown List 2" },
      { type: "readOnlyForm", label: "Read Only Form" },
    ],
  },
  {
    category: "Media & Upload",
    options: [
      { type: "accordion", label: "Accordion" },
      { type: "imageSlider", label: "Image Slider" },
      { type: "appImage", label: "App Image" },
      { type: "fileUpload", label: "File Upload" },
      { type: "galleryUpload", label: "Gallery Upload" },
      { type: "customCamera", label: "Custom Camera" },
      { type: "scanner", label: "Scanner" },
    ],
  },
  {
    category: "Navigation",
    options: [
      { type: "navigation", label: "Navigation" },
      { type: "topTabs", label: "Top Tabs" },
      { type: "bottomTabs", label: "Bottom Tabs" },
      { type: "header", label: "Header" },
      { type: "backButton", label: "Back Button" },
    ],
  },
  {
    category: "Transaction",
    options: [
      { type: "transaction", label: "Transaction" },
      { type: "transactionSuccessful", label: "Transaction Successful" },
      { type: "passbook", label: "Passbook" },
      { type: "fundTransfer", label: "Fund Transfer" },
      { type: "transactionSuccessStatus", label: "Transaction Success Status" },
      { type: "transactionFailedStatus", label: "Transaction Failed Status" },
      { type: "transactionDetails", label: "Transaction Details" },
    ],
  },
  {
    category: "Device & Access",
    options: [
      { type: "contacts", label: "Contacts" },
      { type: "contactsError", label: "Contacts Error" },
      { type: "phonebook", label: "Phonebook" },
      { type: "phonebookAccess", label: "Phonebook Access" },
      { type: "location", label: "Location" },
      { type: "language", label: "Language" },
      { type: "dateNumberFormatting", label: "Date & Number Formatting" },
      { type: "deviceInfo", label: "Device Info" },
      { type: "deviceConfiguration", label: "Device Configuration" },
    ],
  },
  {
    category: "Security",
    options: [
      { type: "biometric", label: "Biometric" },
      { type: "faceId", label: "Face ID" },
      { type: "biometricError", label: "Biometric Error" },
    ],
  },
  {
    category: "Feedback",
    options: [
      { type: "snackBar", label: "Snack Bar" },
      { type: "notification", label: "Notification" },
    ],
  },
  {
    category: "Skeletons",
    options: [
      { type: "accordionSkeleton", label: "Accordion Skeleton" },
      { type: "imageSliderSkeleton", label: "Image Slider Skeleton" },
      { type: "stepperSkeleton", label: "Stepper Skeleton" },
    ],
  },
];