import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";;
import { useRef, useState, useEffect } from "react";
import html2canvas from "html2canvas";
import "./App.css";

import MobileCanvas from "./components/MobileCanvas";
import ComponentSidebar from "./components/ComponentSidebar";
import HeadingSelectModal from "./components/HeadingSelectModal";
import ButtonSelectModal from "./components/ButtonSelectModal";
import TextFieldSelectModal from "./components/TextFieldSelectModal";
import EmailFieldSelectModal from "./components/EmailFieldSelectModal";
import PasswordFieldSelectModal from "./components/PasswordFieldSelectModal";
import SearchFieldSelectModal from "./components/SearchFieldSelectModal";
import VerificationFieldSelectModal from "./components/VerificationFieldSelectModal";
import DobFieldSelectModal from "./components/DobFieldSelectModal";
import OtpFieldSelectModal from "./components/OtpFieldSelectModal";
import BioFieldSelectModal from "./components/BioFieldSelectModal";
import CreditCardFieldSelectModal from "./components/CreditCardFieldSelectModal";
import CvvFieldSelectModal from "./components/CvvFieldSelectModal";
import PhoneNumberFieldSelectModal from "./components/PhoneNumberFieldSelectModal";
import CheckboxSelectModal from "./components/CheckboxSelectModal";
import RadioButtonSelectModal from "./components/RadioButtonSelectModal";
import CardRadioSelectModal from "./components/CardRadioSelectModal";
import CustomRadioSelectModal from "./components/CustomRadioSelectModal";
import DropdownSelectModal from "./components/DropdownSelectModal";
import DropdownListSelectModal from "./components/DropdownListSelectModal";
import DropdownList2SelectModal from "./components/DropdownList2SelectModal";
import AccordionSelectModal from "./components/AccordionSelectModal";
import ImageSliderSelectModal from "./components/ImageSliderSelectModal";
import AppImageSelectModal from "./components/AppImageSelectModal";
import SnackBarSelectModal from "./components/SnackBarSelectModal";
import ToggleButtonSelectModal from "./components/ToggleButtonSelectModal";
import InformationCardSelectModal from "./components/InformationCardSelectModal";
import ChipTagSelectModal from "./components/ChipTagSelectModal";
import MultiSelectChipSelectModal from "./components/MultiSelectChipSelectModal";
import VerticalStepperSelectModal from "./components/VerticalStepperSelectModal";
import HorizontalStepperSelectModal from "./components/HorizontalStepperSelectModal";
import StepProgressSelectModal from "./components/StepProgressSelectModal";
import FileUploadSelectModal from "./components/FileUploadSelectModal";
import GalleryUploadSelectModal from "./components/GalleryUploadSelectModal";
import CustomCameraSelectModal from "./components/CustomCameraSelectModal";
import ActionSheetSelectModal from "./components/ActionSheetSelectModal";
import ActionSheetImageSelectModal from "./components/ActionSheetImageSelectModal";
import SelectionActionSheetSelectModal from "./components/SelectionActionSheetSelectModal";
import SelectionIconButtonSelectModal from "./components/SelectionIconButtonSelectModal";
import TopTabsSelectModal from "./components/TopTabsSelectModal";
import BottomTabsSelectModal from "./components/BottomTabsSelectModal";
import AccordionSkeletonSelectModal from "./components/AccordionSkeletonSelectModal";
import ImageSliderSkeletonSelectModal from "./components/ImageSliderSkeletonSelectModal";
import StepperSkeletonSelectModal from "./components/StepperSkeletonSelectModal";
import BiometricSelectModal from "./components/BiometricSelectModal";
import BiometricErrorSelectModal from "./components/BiometricErrorSelectModal";
import ContactsSelectModal from "./components/ContactsSelectModal";
import ContactsErrorSelectModal from "./components/ContactsErrorSelectModal";
import LocationSelectModal from "./components/LocationSelectModal";
import LanguageSelectModal from "./components/LanguageSelectModal";
import DateNumberFormattingSelectModal from "./components/DateNumberFormattingSelectModal";
import DeviceInfoSelectModal from "./components/DeviceInfoSelectModal";
import DeviceConfigurationSelectModal from "./components/DeviceConfigurationSelectModal";
import NavigationSelectModal from "./components/NavigationSelectModal";
import InputFieldSelectModal from "./components/InputFieldSelectModal";
// import PageSidebar from "./components/PageSidebar";
import PagePanel from "./components/PagePanel";
import GeneratedPage from "./components/GeneratedPage";


import type {
  UIComponent,
  ComponentType,
  HeadingLevel,
} from "./types";

interface SavedPage {
  pageId: string;
  pageName: string;
  route: string;
  components: UIComponent[];
  createdAt: string;
}

const LOCAL_STORAGE_KEY = "mobile-ui-components";

const headingOptions: {
  label: string;
  headingLevel: HeadingLevel;
}[] = [
  {
    label: "Display Text",
    headingLevel: "display",
  },
  {
    label: "Headline Text",
    headingLevel: "headline",
  },
  {
    label: "Title Text",
    headingLevel: "title",
  },
  {
    label: "Subtitle Text",
    headingLevel: "subtitle",
  },
  {
    label: "Body Text",
    headingLevel: "body",
  },
  {
    label: "Caption Text",
    headingLevel: "caption",
  },
  {
    label: "Overline Text",
    headingLevel: "overline",
  },
];

const buttonOptions: {
  label: string;
  buttonVariant: UIComponent["buttonVariant"];
}[] = [
    {
      label: "Primary",
      buttonVariant: "primary",
    },
    {
      label: "Secondary",
      buttonVariant: "secondary",
    },
    {
      label: "Outlined",
      buttonVariant: "outlined",
    },
    {
      label: "Disabled",
      buttonVariant: "disabled",
    },
    {
      label: "Loading",
      buttonVariant: "loading",
    },
    {
      label: "Text Primary",
      buttonVariant: "textPrimary",
    },
    {
      label: "Text Secondary",
      buttonVariant: "textSecondary",
    },
  ];

const textFieldOptions: {
  label: string;
  textFieldVariant: UIComponent["textFieldVariant"];
}[] = [
    {
      label: "First name",
      textFieldVariant: "placeholder",
    },
    {
      label: "",
      textFieldVariant: "emptyFocused",
    },
    {
      label: "Pra",
      textFieldVariant: "filledFocused",
    },
    {
      label: "Pranav",
      textFieldVariant: "filled",
    },
  ];

const emailFieldOptions: {
  label: string;
  emailFieldVariant: UIComponent["emailFieldVariant"];
}[] = [
    // {
    //   label: "",
    //   emailFieldVariant: "default",
    // },
    // {
    //   label: "",
    //   emailFieldVariant: "focused",
    // },
    {
      label: "shreya@example.com",
      emailFieldVariant: "filled",
    },
    // {
    //   label: "",
    //   emailFieldVariant: "error",
    // },
  ];

const passwordFieldOptions: {
  label: string;
  passwordFieldVariant:
  UIComponent["passwordFieldVariant"];
}[] = [
    {
      label: "",
      passwordFieldVariant: "default",
    },
    // {
    //   label: "",
    //   passwordFieldVariant: "focused",
    // },
    // {
    //   label: "12345678",
    //   passwordFieldVariant: "filled",
    // },
    // {
    //   label: "",
    //   passwordFieldVariant: "error",
    // },
  ];

const searchFieldOptions = [
  {
    label: "Search",
  },
];

const verificationFieldOptions = [
  {
    label: "Verification Code",
    placeholder: "Verification Code",
  },
];

const dobFieldOptions = [
  {
    label: "Date of Birth",
    placeholder: "DD/MM/YYYY",
  },
];

const otpFieldOptions = [
  {
    label: "Enter OTP",
  },
];

const bioFieldOptions = [
  {
    label: "First name",
    placeholder: "Bio",
  },
];

const creditCardFieldOptions = [
  {
    label: "Credit Card",
    placeholder: "1234 1234 1234 1234",
  },
];

const cvvFieldOptions = [
  {
    label: "CVC / CVV",
    placeholder: "123",
  },
];

const phoneNumberFieldOptions = [
  {
    label: "Phone Number",
    placeholder: "Phone Number",
  },
];

const checkboxOptions: {
  label: string;
  checkboxVariant: UIComponent["checkboxVariant"];
}[] = [
    {
      label: "Accept Terms",
      checkboxVariant: "unchecked",
    },
    {
      label: "Accept Terms",
      checkboxVariant: "checked",
    },
  ];

const radioButtonOptions: {
  label: string;
  radioVariant: UIComponent["radioVariant"];
}[] = [
    {
      label: "Male",
      radioVariant: "male",
    },
    {
      label: "Female",
      radioVariant: "female",
    },
  ];

const cardRadioOptions: {
  label: string;
  cardRadioVariant:
  UIComponent["cardRadioVariant"];
}[] = [
    {
      label: "Bank Name",
      cardRadioVariant: "unchecked",
    },
    {
      label: "Bank Name",
      cardRadioVariant: "checked",
    },
  ];

const customRadioOptions = [
  {
    label: "Person",
    customRadioActive: 0,
  },
  {
    label: "Person",
    customRadioActive: 1,
  },
  {
    label: "Person",
    customRadioActive: 2,
  },
];

const dropdownOptions: {
  label: string;
  dropdownVariant: UIComponent["dropdownVariant"];
}[] = [
    {
      label: "Select",
      dropdownVariant: "default",
    },
    {
      label: "Disabled",
      dropdownVariant: "disabled",
    },
  ];

const dropdownListOptions = [
  {
    label: "Dropdown List",
  },
];

const dropdownList2Options = [
  {
    label: "Dropdown List 2",
  },
];

const accordionOptions: {
  label: string;
  accordionVariant: UIComponent["accordionVariant"];
}[] = [
    {
      label: "Closed Accordion",
      accordionVariant: "closed",
    },
    {
      label: "Open Accordion",
      accordionVariant: "open",
    },
  ];

const imageSliderOptions: {
  label: string;
  imageSliderVariant:
  UIComponent["imageSliderVariant"];
}[] = [
    {
      label: "Image Slider",
      imageSliderVariant: "square",
    },
    {
      label: "Rounded Image Slider",
      imageSliderVariant: "rounded",
    },
  ];

const appImageOptions: {
  label: string;
  appImageVariant: UIComponent["appImageVariant"];
}[] = [
    {
      label: "Square Image",
      appImageVariant: "square",
    },
    {
      label: "Rounded Image",
      appImageVariant: "rounded",
    },
    {
      label: "Circular Image",
      appImageVariant: "circular",
    },
  ];

const snackBarOptions: {
  label: string;
  snackBarVariant: UIComponent["snackBarVariant"];
}[] = [
    {
      label: "Information",
      snackBarVariant: "information",
    },
    {
      label: "Success",
      snackBarVariant: "success",
    },
    {
      label: "Error",
      snackBarVariant: "error",
    },
    {
      label: "Warning",
      snackBarVariant: "warning",
    },
  ];

const toggleButtonOptions: {
  label: string;
  toggleVariant: UIComponent["toggleVariant"];
}[] = [
    {
      label: "Two Left Selected",
      toggleVariant: "twoLeft",
    },
    {
      label: "Two Right Selected",
      toggleVariant: "twoRight",
    },
    {
      label: "Three Left Selected",
      toggleVariant: "threeLeft",
    },
    {
      label: "Three Center Selected",
      toggleVariant: "threeCenter",
    },
    {
      label: "Three Right Selected",
      toggleVariant: "threeRight",
    },
    {
      label: "Three Full Selected",
      toggleVariant: "threeFull",
    },
  ];

const informationCardOptions: {
  label: string;
  informationCardVariant:
  UIComponent["informationCardVariant"];
}[] = [
    {
      label: "Information",
      informationCardVariant: "titleOnly",
    },
    {
      label: "Information",
      informationCardVariant: "withMessage",
    },
  ];

const chipTagOptions: {
  label: string;
  chipVariant: UIComponent["chipVariant"];
}[] = [
    { label: "Default", chipVariant: "default" },
    { label: "Disabled", chipVariant: "disabled" },
    { label: "Filled", chipVariant: "filled" },
    { label: "Information", chipVariant: "information" },
    { label: "Success", chipVariant: "success" },
    { label: "Error", chipVariant: "error" },
    { label: "Warning", chipVariant: "warning" },
  ];

const multiSelectChipOptions: {
  label: string;
  multiSelectChipVariant:
  UIComponent["multiSelectChipVariant"];
}[] = [
    {
      label: "Default",
      multiSelectChipVariant: "default",
    },
    {
      label: "Selected",
      multiSelectChipVariant: "selected",
    },
  ];

const verticalStepperOptions = [
  {
    label: "Vertical Stepper",
  },
];

const horizontalStepperOptions = [
  {
    label: "Horizontal Stepper",
  },
];

const stepProgressOptions = [
  {
    label: "Step Progress Bar",
  },
];

const fileUploadOptions: {
  label: string;
  fileUploadVariant:
  UIComponent["fileUploadVariant"];
}[] = [
    {
      label: "Choose File",
      fileUploadVariant: "default",
    },
    {
      label: "Choose File",
      fileUploadVariant: "dashed",
    },
  ];

const galleryUploadOptions: {
  label: string;
  galleryUploadVariant:
  UIComponent["galleryUploadVariant"];
}[] = [
    {
      label: "Choose from Gallery",
      galleryUploadVariant: "default",
    },
    {
      label: "Choose from Gallery",
      galleryUploadVariant: "dashed",
    },
    {
      label: "Choose from Gallery",
      galleryUploadVariant: "active",
    },
    {
      label: "Choose from Gallery",
      galleryUploadVariant: "activeDashed",
    },
  ];

const customCameraOptions: {
  label: string;
  customCameraVariant:
  UIComponent["customCameraVariant"];
}[] = [
    {
      label: "Take Selfie",
      customCameraVariant: "selfie",
    },
    {
      label: "Scan Document",
      customCameraVariant: "document",
    },
  ];

const actionSheetOptions = [
  {
    label: "Action Sheet",
  },
];

const actionSheetImageOptions = [
  {
    label: "Action Sheet with Image",
  },
];

const selectionActionSheetOptions = [
  {
    label: "Selection Action Sheet",
  },
];

const selectionIconButtonOptions: {
  label: string;
  selectionIconButtonVariant:
  UIComponent["selectionIconButtonVariant"];
}[] = [
    {
      label: "Default",
      selectionIconButtonVariant: "default",
    },
    {
      label: "Selected",
      selectionIconButtonVariant: "selected",
    },
    {
      label: "Disabled",
      selectionIconButtonVariant: "disabled",
    },
    {
      label: "Sizes",
      selectionIconButtonVariant: "sizes",
    },
  ];

const topTabsOptions = [
  {
    label: "Top Tabs",
  },
];

const bottomTabsOptions = [
  {
    label: "Bottom Tabs",
  },
];

const accordionSkeletonOptions: {
  label: string;
  variant: "light" | "dark";
}[] = [
    {
      label: "Light Accordion Skeleton",
      variant: "light",
    },
    {
      label: "Dark Accordion Skeleton",
      variant: "dark",
    },
  ];

const deviceConfigurationOptions = [
  {
    label: "Device Configuration",
  },
];

const imageSliderSkeletonOptions: {
  label: string;
  imageSliderSkeletonVariant:
  UIComponent["imageSliderSkeletonVariant"];
}[] = [
    {
      label: "Light Image Slider Skeleton",
      imageSliderSkeletonVariant: "light",
    },
    {
      label: "Dark Image Slider Skeleton",
      imageSliderSkeletonVariant: "dark",
    },
  ];

const stepperSkeletonOptions: {
  label: string;
  stepperSkeletonVariant:
  UIComponent["stepperSkeletonVariant"];
}[] = [
    {
      label: "Light Stepper Skeleton",
      stepperSkeletonVariant: "light",
    },
    {
      label: "Dark Stepper Skeleton",
      stepperSkeletonVariant: "dark",
    },
  ];

const biometricOptions = [
  {
    label: "Biometric",
  },
];

const biometricErrorOptions = [
  {
    label: "Biometric Error",
  },
];

const contactsOptions = [
  {
    label: "Contacts",
  },
];

const contactsErrorOptions = [
  {
    label: "Contacts Error",
  },
];

const locationOptions = [
  {
    label: "Location",
  },
];

const languageOptions = [
  {
    label: "Language",
  },
];

const dateNumberFormattingOptions = [
  {
    label: "Date & Number Formatting",
  },
];

const deviceInfoOptions = [
  {
    label: "Device Info",
  },
];

const navigationOptions = [
  {
    label: "Navigation",
  },
];

const inputFieldOptions: {
  label: string;
  type: ComponentType;
}[] = [
    { label: "Text Field", type: "textField" },
    { label: "Email Field", type: "emailField" },
    { label: "Password Field", type: "passwordField" },
    { label: "Search Field", type: "searchField" },
    { label: "Verification Field", type: "verificationField" },
    { label: "DOB Field", type: "dobField" },
    { label: "OTP Field", type: "otpField" },
    { label: "Bio Field", type: "bioField" },
    { label: "Credit Card Field", type: "creditCardField" },
    { label: "CVV Field", type: "cvvField" },
    { label: "Phone Number Field", type: "phoneNumberField" },
  ];

export default function App() {
  const [search, setSearch] =
    useState("");

  const mobileRef =
    useRef<HTMLDivElement>(null);

  const [components, setComponents] =
  useState<UIComponent[]>(() => {
    const savedData =
      localStorage.getItem(LOCAL_STORAGE_KEY);

    if (!savedData) return [];

    try {
      const parsedData =
        JSON.parse(savedData);

      console.log(
        "Loaded from LocalStorage:",
        parsedData
      );

      return parsedData;
    } catch (error) {
      console.error(
        "LocalStorage parse error:",
        error
      );

      return [];
    }
  });

//   useEffect(() => {
//   localStorage.setItem(
//     LOCAL_STORAGE_KEY,
//     JSON.stringify(components)
//   );

//   console.log("Saved Components:", components);

//   console.table(
//     components.map((item) => ({
//       id: item.id,
//       type: item.type,
//       label: item.label,
//       width: item.width,
//       height: item.height,
//     }))
//   );
// }, [components]);

  const [selectedId, setSelectedId] =
    useState<string | null>(null);

  const [pages, setPages] =
  useState<SavedPage[]>(() => {
    const savedPages =
      localStorage.getItem("mobile-pages");

    return savedPages
      ? JSON.parse(savedPages)
      : [];
  });

const [currentPageId, setCurrentPageId] =
  useState<string | null>(null);

// const [sidebarOpen, setSidebarOpen] =
//   useState(false);  

const location = useLocation();

const isBuilderRoute =
  location.pathname === "/";

  const [showHeadingModal, setShowHeadingModal] =
    useState(false);

  const [showButtonModal, setShowButtonModal] =
    useState(false);

  const [showTextFieldModal, setShowTextFieldModal] =
    useState(false);

  const [showEmailFieldModal, setShowEmailFieldModal] =
    useState(false);

  const [showPasswordFieldModal, setShowPasswordFieldModal] =
    useState(false);

  const [showSearchFieldModal, setShowSearchFieldModal] =
    useState(false);

  const [
    showVerificationFieldModal,
    setShowVerificationFieldModal,
  ] = useState(false);

  const [showDobFieldModal, setShowDobFieldModal] =
    useState(false);

  const [showOtpFieldModal, setShowOtpFieldModal] =
    useState(false);

  const [showBioFieldModal, setShowBioFieldModal] =
    useState(false);

  const [
    showCreditCardFieldModal,
    setShowCreditCardFieldModal,
  ] = useState(false);

  const [showCvvFieldModal, setShowCvvFieldModal] =
    useState(false);

  const [
    showPhoneNumberFieldModal,
    setShowPhoneNumberFieldModal,
  ] = useState(false);

  const [showCheckboxModal, setShowCheckboxModal] =
    useState(false);

  const [showRadioButtonModal, setShowRadioButtonModal] =
    useState(false);

  const [showCardRadioModal, setShowCardRadioModal] =
    useState(false);

  const [showCustomRadioModal, setShowCustomRadioModal] =
    useState(false);

  const [showDropdownModal, setShowDropdownModal] =
    useState(false);

  const [
    showDropdownListModal,
    setShowDropdownListModal,
  ] = useState(false);

  const [
    showDropdownList2Modal,
    setShowDropdownList2Modal,
  ] = useState(false);

  const [showAccordionModal, setShowAccordionModal] =
    useState(false);

  const [showImageSliderModal, setShowImageSliderModal] =
    useState(false);

  const [showAppImageModal, setShowAppImageModal] =
    useState(false);

  const [showSnackBarModal, setShowSnackBarModal] =
    useState(false);

  const [showToggleButtonModal, setShowToggleButtonModal] =
    useState(false);

  const [
    showInformationCardModal,
    setShowInformationCardModal,
  ] = useState(false);

  const [showChipTagModal, setShowChipTagModal] =
    useState(false);

  const [
    showMultiSelectChipModal,
    setShowMultiSelectChipModal,
  ] = useState(false);

  const [
    showVerticalStepperModal,
    setShowVerticalStepperModal,
  ] = useState(false);

  const [
    showHorizontalStepperModal,
    setShowHorizontalStepperModal,
  ] = useState(false);

  const [
    showStepProgressModal,
    setShowStepProgressModal,
  ] = useState(false);

  const [showFileUploadModal, setShowFileUploadModal] =
    useState(false);

  const [
    showGalleryUploadModal,
    setShowGalleryUploadModal,
  ] = useState(false);

  const [
    showCustomCameraModal,
    setShowCustomCameraModal,
  ] = useState(false);

  const [showActionSheetModal, setShowActionSheetModal] =
    useState(false);

  const [
    showActionSheetImageModal,
    setShowActionSheetImageModal,
  ] = useState(false);

  const [
    showSelectionActionSheetModal,
    setShowSelectionActionSheetModal,
  ] = useState(false);

  const [
    showSelectionIconButtonModal,
    setShowSelectionIconButtonModal,
  ] = useState(false);

  const [showTopTabsModal, setShowTopTabsModal] =
    useState(false);

  const [showBottomTabsModal, setShowBottomTabsModal] =
    useState(false);

  const [
    showAccordionSkeletonModal,
    setShowAccordionSkeletonModal,
  ] = useState(false);

  const [
    showImageSliderSkeletonModal,
    setShowImageSliderSkeletonModal,
  ] = useState(false);

  const [
    showStepperSkeletonModal,
    setShowStepperSkeletonModal,
  ] = useState(false);

  const [showBiometricModal, setShowBiometricModal] =
    useState(false);

  const [
    showBiometricErrorModal,
    setShowBiometricErrorModal,
  ] = useState(false);

  const [showContactsModal, setShowContactsModal] =
    useState(false);

  const [
    showContactsErrorModal,
    setShowContactsErrorModal,
  ] = useState(false);

  const [showLocationModal, setShowLocationModal] =
    useState(false);

  const [showLanguageModal, setShowLanguageModal] =
    useState(false);

  const [
    showDateNumberFormattingModal,
    setShowDateNumberFormattingModal,
  ] = useState(false);

  const [showDeviceInfoModal, setShowDeviceInfoModal] =
    useState(false);

  const [
    showDeviceConfigurationModal,
    setShowDeviceConfigurationModal,
  ] = useState(false);

  const [showNavigationModal, setShowNavigationModal] =
    useState(false);

  const [showInputFieldModal, setShowInputFieldModal] =
    useState(false);


useEffect(() => {
  localStorage.setItem(
    "mobile-ui-components",
    JSON.stringify(components)
  );
}, [components]);

useEffect(() => {
  localStorage.setItem(
    "mobile-pages",
    JSON.stringify(pages)
  );

  console.clear();

  console.log("PAGES JSON");

  console.log(
    JSON.stringify(pages, null, 2)
  );

  // console.log("================================");
}, [pages]);

useEffect(() => {
  const savedPages =
    localStorage.getItem("mobile-pages");

  if (savedPages) {
    setPages(JSON.parse(savedPages));
  }
}, []);

  const downloadPng = async () => {
    if (!mobileRef.current) return;

    setSelectedId(null);

    setTimeout(async () => {
      if (!mobileRef.current) return;

      const canvas = await html2canvas(
        mobileRef.current,
        {
          scale: 3,
          backgroundColor: "#ffffff",
        }
      );

      const link =
        document.createElement("a");

      link.download =
        "mobile-ui.png";

      link.href =
        canvas.toDataURL("image/png");

      link.click();
    }, 100);
  };

  const getDefaultSize = (
    type: ComponentType
  ) => {
    switch (type) {
      case "button":
        return { width: 220, height: 45 };

      case "card":
        return { width: 220, height: 120 };

      case "input":
        return { width: 220, height: 45 };

      case "textarea":
        return { width: 220, height: 90 };

      case "heading":
        return { width: 220, height: 45 };

      case "paragraph":
        return { width: 230, height: 70 };

      default:
        return { width: 150, height: 50 };
    }
  };

  const addItemsToCanvas = (
    newItems: UIComponent[]
  ) => {
    setComponents((prev) => {
      const selectedComponent = prev.find(
        (item) => item.id === selectedId
      );

      if (
        selectedComponent &&
        selectedComponent.type === "card"
      ) {
        return prev.map((item) =>
          item.id === selectedId
            ? {
              ...item,
              children: [
                ...(item.children || []),
                ...newItems,
              ],
            }
            : item
        );
      }

      return [...prev, ...newItems];
    });
  };

  const addComponent = (
    type: ComponentType,
    label: string
  ) => {
    if (type === "heading") {
      setShowHeadingModal(true);
      return;
    }

    if (type === "button") {
      setShowButtonModal(true);
      return;
    }

    if (type === "textField") {
      setShowTextFieldModal(true);
      return;
    }

    if (type === "emailField") {
      setShowEmailFieldModal(true);
      return;
    }

    if (type === "passwordField") {
      setShowPasswordFieldModal(true);
      return;
    }

    if (type === "searchField") {
      setShowSearchFieldModal(true);
      return;
    }

    if (type === "verificationField") {
      setShowVerificationFieldModal(true);
      return;
    }

    if (type === "dobField") {
      setShowDobFieldModal(true);
      return;
    }

    if (type === "otpField") {
      setShowOtpFieldModal(true);
      return;
    }

    if (type === "bioField") {
      setShowBioFieldModal(true);
      return;
    }

    if (type === "creditCardField") {
      setShowCreditCardFieldModal(true);
      return;
    }

    if (type === "cvvField") {
      setShowCvvFieldModal(true);
      return;
    }

    if (type === "phoneNumberField") {
      setShowPhoneNumberFieldModal(true);
      return;
    }

    if (type === "checkbox") {
      setShowCheckboxModal(true);
      return;
    }

    if (type === "radioButton") {
      setShowRadioButtonModal(true);
      return;
    }

    if (type === "cardRadio") {
      setShowCardRadioModal(true);
      return;
    }

    if (type === "customRadio") {
      setShowCustomRadioModal(true);
      return;
    }

    if (type === "dropdown") {
      setShowDropdownModal(true);
      return;
    }

    if (type === "dropdownList") {
      setShowDropdownListModal(true);
      return;
    }

    if (type === "dropdownList2") {
      setShowDropdownList2Modal(true);
      return;
    }

    if (type === "accordion") {
      setShowAccordionModal(true);
      return;
    }

    if (type === "imageSlider") {
      setShowImageSliderModal(true);
      return;
    }

    if (type === "appImage") {
      setShowAppImageModal(true);
      return;
    }

    if (type === "snackBar") {
      setShowSnackBarModal(true);
      return;
    }

    if (type === "toggleButton") {
      setShowToggleButtonModal(true);
      return;
    }

    if (type === "informationCard") {
      setShowInformationCardModal(true);
      return;
    }

    if (type === "chipTag") {
      setShowChipTagModal(true);
      return;
    }

    if (type === "multiSelectChip") {
      setShowMultiSelectChipModal(true);
      return;
    }

    if (type === "verticalStepper") {
      setShowVerticalStepperModal(true);
      return;
    }

    if (type === "horizontalStepper") {
      setShowHorizontalStepperModal(true);
      return;
    }

    if (type === "stepProgress") {
      setShowStepProgressModal(true);
      return;
    }

    if (type === "fileUpload") {
      setShowFileUploadModal(true);
      return;
    }

    if (type === "galleryUpload") {
      setShowGalleryUploadModal(true);
      return;
    }

    if (type === "customCamera") {
      setShowCustomCameraModal(true);
      return;
    }

    if (type === "actionSheet") {
      setShowActionSheetModal(true);
      return;
    }

    if (type === "actionSheetImage") {
      setShowActionSheetImageModal(true);
      return;
    }

    if (type === "selectionActionSheet") {
      setShowSelectionActionSheetModal(true);
      return;
    }

    if (type === "selectionIconButton") {
      setShowSelectionIconButtonModal(true);
      return;
    }

    if (type === "topTabs") {
      setShowTopTabsModal(true);
      return;
    }

    if (type === "bottomTabs") {
      setShowBottomTabsModal(true);
      return;
    }

    if (type === "accordionSkeleton") {
      setShowAccordionSkeletonModal(true);
      return;
    }

    if (type === "imageSliderSkeleton") {
      setShowImageSliderSkeletonModal(true);
      return;
    }

    if (type === "stepperSkeleton") {
      setShowStepperSkeletonModal(true);
      return;
    }

    if (type === "biometric") {
      setShowBiometricModal(true);
      return;
    }

    if (type === "biometricError") {
      setShowBiometricErrorModal(true);
      return;
    }

    if (type === "contacts") {
      setShowContactsModal(true);
      return;
    }

    if (type === "contactsError") {
      setShowContactsErrorModal(true);
      return;
    }

    if (type === "location") {
      setShowLocationModal(true);
      return;
    }

    if (type === "language") {
      setShowLanguageModal(true);
      return;
    }

    if (type === "dateNumberFormatting") {
      setShowDateNumberFormattingModal(true);
      return;
    }

    if (type === "deviceInfo") {
      setShowDeviceInfoModal(true);
      return;
    }

    if (type === "deviceConfiguration") {
      setShowDeviceConfigurationModal(true);
      return;
    }

    if (type === "navigation") {
      setShowNavigationModal(true);
      return;
    }

    if (type === "inputField") {
      setShowInputFieldModal(true);
      return;
    }


    const size = getDefaultSize(type);

    const newComponent: UIComponent = {
      id: crypto.randomUUID(),
      type,
      label,
      x: 40,
      y: 40 + components.length * 20,
      width: size.width,
      height: size.height,
      children: [],
    };

    addItemsToCanvas([newComponent]);
  };

  const addSelectedHeadings = (
    selectedHeadings: {
      label: string;
      headingLevel: HeadingLevel;
    }[]
  ) => {
    const headingComponents: UIComponent[] =
      selectedHeadings.map((heading, index) => ({
        id: crypto.randomUUID(),
        type: "heading",
        label: heading.label,
        headingLevel: heading.headingLevel,
        x: 40,
        y: 40 + index * 45,
        width: 220,
        height: 45,
        children: [],
      }));

    addItemsToCanvas(headingComponents);

    setShowHeadingModal(false);
  };

  const addSelectedButtons = (
    selectedButtons: {
      label: string;
      buttonVariant: UIComponent["buttonVariant"];
    }[]
  ) => {
    const buttonComponents: UIComponent[] =
      selectedButtons.map((button, index) => ({
        id: crypto.randomUUID(),
        type: "button",
        label: button.label,
        buttonVariant: button.buttonVariant,
        x: 40,
        y: 40 + index * 55,
        width: 220,
        height: 45,
        children: [],
      }));

    addItemsToCanvas(buttonComponents);

    setShowButtonModal(false);
  };

  const addSelectedTextFields = (
    selectedTextFields: {
      label: string;
      textFieldVariant: UIComponent["textFieldVariant"];
    }[]
  ) => {
    const textFieldComponents: UIComponent[] =
      selectedTextFields.map((field, index) => ({
        id: crypto.randomUUID(),
        type: "textField",
        label: field.label,
        textFieldVariant: field.textFieldVariant,
        x: 40,
        y: 40 + index * 75,
        width: 220,
        height: 70,
        children: [],
      }));

    addItemsToCanvas(textFieldComponents);

    setShowTextFieldModal(false);
  };

  const addSelectedEmailFields = (
    selectedEmailFields: {
      label: string;
      emailFieldVariant: UIComponent["emailFieldVariant"];
    }[]
  ) => {
    const emailFieldComponents: UIComponent[] =
      selectedEmailFields.map((field, index) => ({
        id: crypto.randomUUID(),
        type: "emailField",
        label: field.label,
        emailFieldVariant: field.emailFieldVariant,
        x: 40,
        y: 40 + index * 78,
        width: 220,
        height: 72,
        children: [],
      }));

    addItemsToCanvas(emailFieldComponents);

    setShowEmailFieldModal(false);
  };

  const addSelectedPasswordFields = (
    selectedPasswordFields: {
      label: string;
      passwordFieldVariant:
      UIComponent["passwordFieldVariant"];
    }[]
  ) => {
    const passwordFieldComponents: UIComponent[] =
      selectedPasswordFields.map((field, index) => ({
        id: crypto.randomUUID(),
        type: "passwordField",
        label: field.label,
        passwordFieldVariant:
          field.passwordFieldVariant,
        x: 40,
        y: 40 + index * 78,
        width: 220,
        height: 72,
        children: [],
      }));

    addItemsToCanvas(passwordFieldComponents);

    setShowPasswordFieldModal(false);
  };

  const addSelectedSearchFields = (
    selectedSearchFields: { label: string }[]
  ) => {
    const searchFieldComponents: UIComponent[] =
      selectedSearchFields.map((field, index) => ({
        id: crypto.randomUUID(),
        type: "searchField",
        label: field.label,
        x: 40,
        y: 40 + index * 60,
        width: 220,
        height: 45,
        children: [],
      }));

    addItemsToCanvas(searchFieldComponents);
    setShowSearchFieldModal(false);
  };

  const addSelectedVerificationFields = (
    selectedVerificationFields: {
      label: string;
      placeholder: string;
    }[]
  ) => {
    const verificationFieldComponents: UIComponent[] =
      selectedVerificationFields.map((field, index) => ({
        id: crypto.randomUUID(),
        type: "verificationField",
        label: field.label,
        placeholder: field.placeholder,
        x: 40,
        y: 40 + index * 70,
        width: 220,
        height: 65,
        children: [],
      }));

    addItemsToCanvas(verificationFieldComponents);
    setShowVerificationFieldModal(false);
  };

  const addSelectedDobFields = (
    selectedDobFields: {
      label: string;
      placeholder: string;
    }[]
  ) => {
    const dobFieldComponents: UIComponent[] =
      selectedDobFields.map((field, index) => ({
        id: crypto.randomUUID(),
        type: "dobField",
        label: field.label,
        placeholder: field.placeholder,
        x: 40,
        y: 40 + index * 70,
        width: 220,
        height: 65,
        children: [],
      }));

    addItemsToCanvas(dobFieldComponents);
    setShowDobFieldModal(false);
  };


  const addSelectedOtpFields = (
    selectedOtpFields: {
      label: string;
    }[]
  ) => {
    const otpFieldComponents: UIComponent[] =
      selectedOtpFields.map((field, index) => ({
        id: crypto.randomUUID(),
        type: "otpField",
        label: field.label,
        x: 40,
        y: 40 + index * 80,
        width: 220,
        height: 70,
        children: [],
      }));

    addItemsToCanvas(otpFieldComponents);
    setShowOtpFieldModal(false);
  };

  const addSelectedBioFields = (
    selectedBioFields: {
      label: string;
      placeholder: string;
    }[]
  ) => {
    const bioFieldComponents: UIComponent[] =
      selectedBioFields.map((field, index) => ({
        id: crypto.randomUUID(),
        type: "bioField",
        label: field.label,
        placeholder: field.placeholder,
        x: 40,
        y: 40 + index * 130,
        width: 220,
        height: 120,
        children: [],
      }));

    addItemsToCanvas(bioFieldComponents);
    setShowBioFieldModal(false);
  };

  const addSelectedCreditCardFields = (
    selectedCreditCardFields: {
      label: string;
      placeholder: string;
    }[]
  ) => {
    const creditCardFieldComponents: UIComponent[] =
      selectedCreditCardFields.map((field, index) => ({
        id: crypto.randomUUID(),
        type: "creditCardField",
        label: field.label,
        placeholder: field.placeholder,
        x: 40,
        y: 40 + index * 70,
        width: 220,
        height: 65,
        children: [],
      }));

    addItemsToCanvas(creditCardFieldComponents);
    setShowCreditCardFieldModal(false);
  };

  const addSelectedCvvFields = (
    selectedCvvFields: {
      label: string;
      placeholder: string;
    }[]
  ) => {
    const cvvFieldComponents: UIComponent[] =
      selectedCvvFields.map((field, index) => ({
        id: crypto.randomUUID(),
        type: "cvvField",
        label: field.label,
        placeholder: field.placeholder,
        x: 40,
        y: 40 + index * 70,
        width: 220,
        height: 65,
        children: [],
      }));

    addItemsToCanvas(cvvFieldComponents);
    setShowCvvFieldModal(false);
  };

  const addSelectedPhoneNumberFields = (
    selectedPhoneNumberFields: {
      label: string;
      placeholder: string;
    }[]
  ) => {
    const phoneNumberFieldComponents: UIComponent[] =
      selectedPhoneNumberFields.map((field, index) => ({
        id: crypto.randomUUID(),
        type: "phoneNumberField",
        label: field.label,
        placeholder: field.placeholder,
        x: 40,
        y: 40 + index * 75,
        width: 220,
        height: 70,
        children: [],
      }));

    addItemsToCanvas(phoneNumberFieldComponents);
    setShowPhoneNumberFieldModal(false);
  };

  const addSelectedCheckboxes = (
    selectedCheckboxes: {
      label: string;
      checkboxVariant:
      UIComponent["checkboxVariant"];
    }[]
  ) => {
    const checkboxComponents: UIComponent[] =
      selectedCheckboxes.map((box, index) => ({
        id: crypto.randomUUID(),
        type: "checkbox",
        label: box.label,
        checkboxVariant: box.checkboxVariant,
        x: 40,
        y: 40 + index * 42,
        width: 220,
        height: 32,
        children: [],
      }));

    addItemsToCanvas(checkboxComponents);
    setShowCheckboxModal(false);
  };

  const addSelectedRadioButtons = (
    selectedRadioButtons: {
      label: string;
      radioVariant: UIComponent["radioVariant"];
    }[]
  ) => {
    const radioComponents: UIComponent[] =
      selectedRadioButtons.map((radio, index) => ({
        id: crypto.randomUUID(),
        type: "radioButton",
        label: radio.label,
        radioVariant: radio.radioVariant,
        x: 40,
        y: 40 + index * 70,
        width: 220,
        height: 70,
        children: [],
      }));

    addItemsToCanvas(radioComponents);
    setShowRadioButtonModal(false);
  };

  const addSelectedCardRadios = (
    selectedCardRadios: {
      label: string;
      cardRadioVariant:
      UIComponent["cardRadioVariant"];
    }[]
  ) => {
    const cardRadioComponents: UIComponent[] =
      selectedCardRadios.map((radio, index) => ({
        id: crypto.randomUUID(),
        type: "cardRadio",
        label: radio.label,
        cardRadioVariant:
          radio.cardRadioVariant,
        x: 40,
        y: 40 + index * 85,
        width: 220,
        height: 75,
        children: [],
      }));

    addItemsToCanvas(cardRadioComponents);
    setShowCardRadioModal(false);
  };


  const addSelectedCustomRadios = (
    selectedCustomRadios: {
      label: string;
      customRadioActive: number;
    }[]
  ) => {
    const customRadioComponents: UIComponent[] =
      selectedCustomRadios.map((radio, index) => ({
        id: crypto.randomUUID(),
        type: "customRadio",
        label: radio.label,
        customRadioActive: radio.customRadioActive,
        x: 40,
        y: 40 + index * 85,
        width: 220,
        height: 75,
        children: [],
      }));

    addItemsToCanvas(customRadioComponents);
    setShowCustomRadioModal(false);
  };

  const addSelectedDropdowns = (
    selectedDropdowns: {
      label: string;
      dropdownVariant:
      UIComponent["dropdownVariant"];
    }[]
  ) => {
    const dropdownComponents: UIComponent[] =
      selectedDropdowns.map((drop, index) => ({
        id: crypto.randomUUID(),
        type: "dropdown",
        label: drop.label,
        dropdownVariant: drop.dropdownVariant,
        x: 40,
        y: 40 + index * 70,
        width: 220,
        height: 45,
        children: [],
      }));

    addItemsToCanvas(dropdownComponents);
    setShowDropdownModal(false);
  };

  const addSelectedDropdownLists = (
    selectedDropdownLists: {
      label: string;
    }[]
  ) => {
    const dropdownListComponents: UIComponent[] =
      selectedDropdownLists.map((list) => ({
        id: crypto.randomUUID(),
        type: "dropdownList",
        label: list.label,
        x: 0,
        y: 0,
        width: 220,
        height: 420,
        children: [],
      }));

    addItemsToCanvas(dropdownListComponents);
    setShowDropdownListModal(false);
  };

  const addSelectedDropdownList2 = (
    selectedDropdownList2: {
      label: string;
    }[]
  ) => {
    const dropdownList2Components: UIComponent[] =
      selectedDropdownList2.map((list, index) => ({
        id: crypto.randomUUID(),
        type: "dropdownList2",
        label: list.label,
        x: 40,
        y: 40 + index * 300,
        width: 220,
        height: 520,
        children: [],
      }));

    addItemsToCanvas(dropdownList2Components);
    setShowDropdownList2Modal(false);
  };

  const addSelectedAccordions = (
    selectedAccordions: {
      label: string;
      accordionVariant: UIComponent["accordionVariant"];
    }[]
  ) => {
    const accordionComponents: UIComponent[] =
      selectedAccordions.map((accordion, index) => ({
        id: crypto.randomUUID(),
        type: "accordion",
        label: accordion.label,
        accordionVariant: accordion.accordionVariant,
        x: 40,
        y: 40 + index * 130,
        width: 220,
        height:
          accordion.accordionVariant === "open"
            ? 150
            : 45,
        children: [],
      }));

    addItemsToCanvas(accordionComponents);
    setShowAccordionModal(false);
  };

  const addSelectedImageSliders = (
    selectedImageSliders: {
      label: string;
      imageSliderVariant:
      UIComponent["imageSliderVariant"];
    }[]
  ) => {
    const imageSliderComponents: UIComponent[] =
      selectedImageSliders.map((slider, index) => ({
        id: crypto.randomUUID(),
        type: "imageSlider",
        label: slider.label,
        imageSliderVariant:
          slider.imageSliderVariant,
        x: 40,
        y: 40 + index * 180,
        width: 220,
        height: 155,
        children: [],
      }));

    addItemsToCanvas(imageSliderComponents);
    setShowImageSliderModal(false);
  };

  const addSelectedAppImages = (
    selectedAppImages: {
      label: string;
      appImageVariant: UIComponent["appImageVariant"];
    }[]
  ) => {
    const appImageComponents: UIComponent[] =
      selectedAppImages.map((image, index) => ({
        id: crypto.randomUUID(),
        type: "appImage",
        label: image.label,
        appImageVariant: image.appImageVariant,
        x: 40,
        y: 40 + index * 100,
        width: 220,
        height: 90,
        children: [],
      }));

    addItemsToCanvas(appImageComponents);
    setShowAppImageModal(false);
  };

  const addSelectedSnackBars = (
    selectedSnackBars: {
      label: string;
      snackBarVariant: UIComponent["snackBarVariant"];
    }[]
  ) => {
    const snackBarComponents: UIComponent[] =
      selectedSnackBars.map((bar, index) => ({
        id: crypto.randomUUID(),
        type: "snackBar",
        label: bar.label,
        snackBarVariant: bar.snackBarVariant,
        x: 40,
        y: 40 + index * 90,
        width: 220,
        height: 75,
        children: [],
      }));

    addItemsToCanvas(snackBarComponents);
    setShowSnackBarModal(false);
  };

  const addSelectedToggleButtons = (
    selectedToggleButtons: {
      label: string;
      toggleVariant: UIComponent["toggleVariant"];
    }[]
  ) => {
    const toggleComponents: UIComponent[] =
      selectedToggleButtons.map((toggle, index) => ({
        id: crypto.randomUUID(),
        type: "toggleButton",
        label: toggle.label,
        toggleVariant: toggle.toggleVariant,
        x: 40,
        y: 40 + index * 70,
        width: 220,
        height: 48,
        children: [],
      }));

    addItemsToCanvas(toggleComponents);
    setShowToggleButtonModal(false);
  };

  const addSelectedInformationCards = (
    selectedInfoCards: {
      label: string;
      informationCardVariant:
      UIComponent["informationCardVariant"];
    }[]
  ) => {
    const infoCardComponents: UIComponent[] =
      selectedInfoCards.map((card, index) => ({
        id: crypto.randomUUID(),
        type: "informationCard",
        label: card.label,
        informationCardVariant:
          card.informationCardVariant,
        x: 40,
        y: 40 + index * 90,
        width: 220,
        height:
          card.informationCardVariant ===
            "withMessage"
            ? 70
            : 45,
        children: [],
      }));

    addItemsToCanvas(infoCardComponents);
    setShowInformationCardModal(false);
  };

  const addSelectedChipTags = (
    selectedChipTags: {
      label: string;
      chipVariant: UIComponent["chipVariant"];
    }[]
  ) => {
    const chipComponents: UIComponent[] =
      selectedChipTags.map((chip, index) => ({
        id: crypto.randomUUID(),
        type: "chipTag",
        label: chip.label,
        chipVariant: chip.chipVariant,
        x: 40,
        y: 40 + index * 45,
        width: 120,
        height: 36,
        children: [],
      }));

    addItemsToCanvas(chipComponents);
    setShowChipTagModal(false);
  };

  const addSelectedMultiSelectChips = (
    selectedChips: {
      label: string;
      multiSelectChipVariant:
      UIComponent["multiSelectChipVariant"];
    }[]
  ) => {
    const chipComponents: UIComponent[] =
      selectedChips.map((chip, index) => ({
        id: crypto.randomUUID(),
        type: "multiSelectChip",
        label: chip.label,
        multiSelectChipVariant:
          chip.multiSelectChipVariant,
        x: 40,
        y: 40 + index * 55,
        width: 220,
        height: 42,
        children: [],
      }));

    addItemsToCanvas(chipComponents);
    setShowMultiSelectChipModal(false);
  };

  const addSelectedVerticalSteppers = (
    selectedVerticalSteppers: {
      label: string;
    }[]
  ) => {
    const stepperComponents: UIComponent[] =
      selectedVerticalSteppers.map((stepper, index) => ({
        id: crypto.randomUUID(),
        type: "verticalStepper",
        label: stepper.label,
        x: 40,
        y: 40 + index * 240,
        width: 220,
        height: 230,
        children: [],
      }));

    addItemsToCanvas(stepperComponents);
    setShowVerticalStepperModal(false);
  };

  const addSelectedHorizontalSteppers = (
    selectedHorizontalSteppers: {
      label: string;
    }[]
  ) => {
    const stepperComponents: UIComponent[] =
      selectedHorizontalSteppers.map((stepper, index) => ({
        id: crypto.randomUUID(),
        type: "horizontalStepper",
        label: stepper.label,
        x: 40,
        y: 40 + index * 90,
        width: 220,
        height: 80,
        children: [],
      }));

    addItemsToCanvas(stepperComponents);
    setShowHorizontalStepperModal(false);
  };

  const addSelectedStepProgress = (
    selectedStepProgress: {
      label: string;
    }[]
  ) => {
    const progressComponents: UIComponent[] =
      selectedStepProgress.map((progress, index) => ({
        id: crypto.randomUUID(),
        type: "stepProgress",
        label: progress.label,
        x: 40,
        y: 40 + index * 95,
        width: 220,
        height: 90,
        children: [],
      }));

    addItemsToCanvas(progressComponents);
    setShowStepProgressModal(false);
  };

  const addSelectedFileUploads = (
    selectedFileUploads: {
      label: string;
      fileUploadVariant:
      UIComponent["fileUploadVariant"];
    }[]
  ) => {
    const fileUploadComponents: UIComponent[] =
      selectedFileUploads.map((file, index) => ({
        id: crypto.randomUUID(),
        type: "fileUpload",
        label: file.label,
        fileUploadVariant: file.fileUploadVariant,
        x: 40,
        y: 40 + index * 70,
        width: 220,
        height: 50,
        children: [],
      }));

    addItemsToCanvas(fileUploadComponents);
    setShowFileUploadModal(false);
  };

  const addSelectedGalleryUploads = (
    selectedGalleryUploads: {
      label: string;
      galleryUploadVariant:
      UIComponent["galleryUploadVariant"];
    }[]
  ) => {
    const galleryUploadComponents: UIComponent[] =
      selectedGalleryUploads.map((upload, index) => ({
        id: crypto.randomUUID(),
        type: "galleryUpload",
        label: upload.label,
        galleryUploadVariant:
          upload.galleryUploadVariant,
        x: 40,
        y: 40 + index * 72,
        width: 220,
        height: 50,
        children: [],
      }));

    addItemsToCanvas(galleryUploadComponents);
    setShowGalleryUploadModal(false);
  };

  const addSelectedCustomCameras = (
    selectedCustomCameras: {
      label: string;
      customCameraVariant:
      UIComponent["customCameraVariant"];
    }[]
  ) => {
    const customCameraComponents: UIComponent[] =
      selectedCustomCameras.map((camera, index) => ({
        id: crypto.randomUUID(),
        type: "customCamera",
        label: camera.label,
        customCameraVariant:
          camera.customCameraVariant,
        x: 40,
        y: 40 + index * 65,
        width: 220,
        height: 48,
        children: [],
      }));

    addItemsToCanvas(customCameraComponents);
    setShowCustomCameraModal(false);
  };

  const addSelectedActionSheets = (
    selectedActionSheets: {
      label: string;
    }[]
  ) => {
    const actionSheetComponents: UIComponent[] =
      selectedActionSheets.map((sheet) => ({
        id: crypto.randomUUID(),
        type: "actionSheet",
        label: sheet.label,
        x: 0,
        y: 0,
        width: 220,
        height: 420,
        children: [],
      }));

    addItemsToCanvas(actionSheetComponents);
    setShowActionSheetModal(false);
  };

  const addSelectedActionSheetImages = (
    selectedActionSheetImages: {
      label: string;
    }[]
  ) => {
    const sheetComponents: UIComponent[] =
      selectedActionSheetImages.map((sheet) => ({
        id: crypto.randomUUID(),
        type: "actionSheetImage",
        label: sheet.label,
        x: 0,
        y: 0,
        width: 220,
        height: 420,
        children: [],
      }));

    addItemsToCanvas(sheetComponents);
    setShowActionSheetImageModal(false);
  };

  const addSelectedSelectionActionSheets = (
    selectedSheets: {
      label: string;
    }[]
  ) => {
    const sheetComponents: UIComponent[] =
      selectedSheets.map((sheet) => ({
        id: crypto.randomUUID(),
        type: "selectionActionSheet",
        label: sheet.label,
        x: 0,
        y: 0,
        width: 220,
        height: 420,
        children: [],
      }));

    addItemsToCanvas(sheetComponents);
    setShowSelectionActionSheetModal(false);
  };

  const addSelectedSelectionIconButtons = (
    selectedIconButtons: {
      label: string;
      selectionIconButtonVariant:
      UIComponent["selectionIconButtonVariant"];
    }[]
  ) => {
    const iconComponents: UIComponent[] =
      selectedIconButtons.map((icon, index) => ({
        id: crypto.randomUUID(),
        type: "selectionIconButton",
        label: icon.label,
        selectionIconButtonVariant:
          icon.selectionIconButtonVariant,
        x: 40,
        y: 40 + index * 80,
        width: 220,
        height: 70,
        children: [],
      }));

    addItemsToCanvas(iconComponents);
    setShowSelectionIconButtonModal(false);
  };

  const addSelectedTopTabs = (
    selectedTopTabs: {
      label: string;
    }[]
  ) => {
    const tabComponents: UIComponent[] =
      selectedTopTabs.map((tab, index) => ({
        id: crypto.randomUUID(),
        type: "topTabs",
        label: tab.label,
        x: 40,
        y: 40 + index * 360,
        width: 220,
        height: 340,
        children: [],
      }));

    addItemsToCanvas(tabComponents);
    setShowTopTabsModal(false);
  };

  const addSelectedBottomTabs = (
    selectedBottomTabs: {
      label: string;
    }[]
  ) => {
    const tabComponents: UIComponent[] =
      selectedBottomTabs.map((tab, index) => ({
        id: crypto.randomUUID(),
        type: "bottomTabs",
        label: tab.label,
        x: 40,
        y: 40 + index * 430,
        width: 220,
        height: 430,
        children: [],
      }));

    addItemsToCanvas(tabComponents);
    setShowBottomTabsModal(false);
  };

  const addSelectedAccordionSkeletons = (
    selectedSkeletons: {
      label: string;
      variant: "light" | "dark";
    }[]
  ) => {
    const skeletonComponents: UIComponent[] =
      selectedSkeletons.map(
        (skeleton, index) => ({
          id: crypto.randomUUID(),
          type: "accordionSkeleton",
          label: skeleton.label,
          skeletonVariant:
            skeleton.variant,
          x: 40,
          y: 40 + index * 120,
          width: 220,
          height: 110,
          children: [],
        })
      );

    addItemsToCanvas(skeletonComponents);

    setShowAccordionSkeletonModal(false);
  };

  const addSelectedImageSliderSkeletons = (
    selectedSkeletons: {
      label: string;
      imageSliderSkeletonVariant:
      UIComponent["imageSliderSkeletonVariant"];
    }[]
  ) => {
    const skeletonComponents: UIComponent[] =
      selectedSkeletons.map((skeleton, index) => ({
        id: crypto.randomUUID(),
        type: "imageSliderSkeleton",
        label: skeleton.label,
        imageSliderSkeletonVariant:
          skeleton.imageSliderSkeletonVariant,
        x: 40,
        y: 40 + index * 180,
        width: 220,
        height: 160,
        children: [],
      }));

    addItemsToCanvas(skeletonComponents);
    setShowImageSliderSkeletonModal(false);
  };

  const addSelectedStepperSkeletons = (
    selectedSkeletons: {
      label: string;
      stepperSkeletonVariant:
      UIComponent["stepperSkeletonVariant"];
    }[]
  ) => {
    const skeletonComponents: UIComponent[] =
      selectedSkeletons.map((skeleton, index) => ({
        id: crypto.randomUUID(),
        type: "stepperSkeleton",
        label: skeleton.label,
        stepperSkeletonVariant:
          skeleton.stepperSkeletonVariant,
        x: 40,
        y: 40 + index * 105,
        width: 220,
        height: 90,
        children: [],
      }));

    addItemsToCanvas(skeletonComponents);
    setShowStepperSkeletonModal(false);
  };

  const addSelectedBiometrics = (
    selectedBiometrics: {
      label: string;
    }[]
  ) => {
    const biometricComponents: UIComponent[] =
      selectedBiometrics.map((bio) => ({
        id: crypto.randomUUID(),
        type: "biometric",
        label: bio.label,
        x: 0,
        y: 0,
        width: 220,
        height: 420,
        children: [],
      }));

    addItemsToCanvas(biometricComponents);
    setShowBiometricModal(false);
  };

  const addSelectedBiometricErrors = (
    selectedBiometricErrors: {
      label: string;
    }[]
  ) => {
    const biometricErrorComponents: UIComponent[] =
      selectedBiometricErrors.map((bio) => ({
        id: crypto.randomUUID(),
        type: "biometricError",
        label: bio.label,
        x: 0,
        y: 0,
        width: 220,
        height: 520,
        children: [],
      }));

    addItemsToCanvas(biometricErrorComponents);
    setShowBiometricErrorModal(false);
  };

  const addSelectedContacts = (
    selectedContacts: {
      label: string;
    }[]
  ) => {
    const contactComponents: UIComponent[] =
      selectedContacts.map((contact) => ({
        id: crypto.randomUUID(),
        type: "contacts",
        label: contact.label,
        x: 0,
        y: 0,
        width: 220,
        height: 540,
        children: [],
      }));

    addItemsToCanvas(contactComponents);
    setShowContactsModal(false);
  };

  const addSelectedContactsError = (
    selectedContactsError: {
      label: string;
    }[]
  ) => {
    const errorComponents: UIComponent[] =
      selectedContactsError.map((contact) => ({
        id: crypto.randomUUID(),
        type: "contactsError",
        label: contact.label,
        x: 0,
        y: 0,
        width: 220,
        height: 540,
        children: [],
      }));

    addItemsToCanvas(errorComponents);
    setShowContactsErrorModal(false);
  };

  const addSelectedLocations = (
    selectedLocations: {
      label: string;
    }[]
  ) => {
    const locationComponents: UIComponent[] =
      selectedLocations.map((location) => ({
        id: crypto.randomUUID(),
        type: "location",
        label: location.label,
        x: 0,
        y: 0,
        width: 220,
        height: 540,
        children: [],
      }));

    addItemsToCanvas(locationComponents);
    setShowLocationModal(false);
  };

  const addSelectedLanguages = (
    selectedLanguages: {
      label: string;
    }[]
  ) => {
    const languageComponents: UIComponent[] =
      selectedLanguages.map((language) => ({
        id: crypto.randomUUID(),
        type: "language",
        label: language.label,
        x: 0,
        y: 0,
        width: 220,
        height: 420,
        children: [],
      }));

    addItemsToCanvas(languageComponents);
    setShowLanguageModal(false);
  };

  const addSelectedDateNumberFormatting = (
    selectedItems: {
      label: string;
    }[]
  ) => {
    const dateNumberComponents: UIComponent[] =
      selectedItems.map((item) => ({
        id: crypto.randomUUID(),
        type: "dateNumberFormatting",
        label: item.label,
        x: 0,
        y: 0,
        width: 220,
        height: 520,
        children: [],
      }));

    addItemsToCanvas(dateNumberComponents);
    setShowDateNumberFormattingModal(false);
  };

  const addSelectedDeviceInfo = (
    selectedDeviceInfo: {
      label: string;
    }[]
  ) => {
    const deviceInfoComponents: UIComponent[] =
      selectedDeviceInfo.map((item, index) => ({
        id: crypto.randomUUID(),
        type: "deviceInfo",
        label: item.label,
        x: 40,
        y: 40 + index * 90,
        width: 220,
        height: 70,
        children: [],
      }));

    addItemsToCanvas(deviceInfoComponents);
    setShowDeviceInfoModal(false);
  };

  const addSelectedDeviceConfigurations = (
    selectedItems: {
      label: string;
    }[]
  ) => {
    const configComponents: UIComponent[] =
      selectedItems.map((item) => ({
        id: crypto.randomUUID(),
        type: "deviceConfiguration",
        label: item.label,
        x: 0,
        y: 0,
        width: 220,
        height: 560,
        children: [],
      }));

    addItemsToCanvas(configComponents);
    setShowDeviceConfigurationModal(false);
  };

  const addSelectedNavigation = (
    selectedNavigation: {
      label: string;
    }[]
  ) => {
    const navigationComponents: UIComponent[] =
      selectedNavigation.map((nav) => ({
        id: crypto.randomUUID(),
        type: "navigation",
        label: nav.label,
        x: 0,
        y: 0,
        width: 220,
        height: 520,
        children: [],
      }));

    addItemsToCanvas(navigationComponents);
    setShowNavigationModal(false);
  };

  const addSelectedInputFields = (
    selectedFields: {
      label: string;
      type: ComponentType;
    }[]
  ) => {
    const inputComponents: UIComponent[] =
      selectedFields.map((field, index) => {
        const size = getDefaultSize(field.type);

        return {
          id: crypto.randomUUID(),
          type: field.type,
          label: field.label,
          x: 40,
          y: 40 + index * 75,
          width: size.width,
          height: size.height,
          children: [],
        };
      });

    addItemsToCanvas(inputComponents);
    setShowInputFieldModal(false);
  };

  const deleteComponent = (id: string) => {
    setComponents((prev) =>
      prev.filter((item) => item.id !== id)
    );

    if (selectedId === id) {
      setSelectedId(null);
    }
  };

  const editComponent = (id: string) => {
    const current = components.find(
      (item) => item.id === id
    );

    if (!current) return;

    const updated = prompt(
      "Edit component text",
      current.label
    );

    if (updated && updated.trim() !== "") {
      setComponents((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
              ...item,
              label: updated,
            }
            : item
        )
      );
    }
  };

  // const updatePosition = (
  //   id: string,
  //   x: number,
  //   y: number
  // ) => {
  //   setComponents((prev) =>
  //     prev.map((item) =>
  //       item.id === id
  //         ? { ...item, x, y }
  //         : item
  //     )
  //   );
  // };

  // const updateSize = (
  //   id: string,
  //   width: number,
  //   height: number,
  //   x: number,
  //   y: number
  // ) => {
  //   setComponents((prev) =>
  //     prev.map((item) =>
  //       item.id === id
  //         ? {
  //           ...item,
  //           width,
  //           height,
  //           x,
  //           y,
  //         }
  //         : item
  //     )
  //   );
  // };

//   const saveCurrentPage = () => {
//   const pageName =
//     prompt("Enter Page Name");

//   if (!pageName) return;

//   const newPage = {
//     id: crypto.randomUUID(),
//     name: pageName,
//     components,
//     createdAt:
//       new Date().toISOString(),
//   };

//   setPages((prev) => [
//     ...prev,
//     newPage,
//   ]);
// };

const loadPage = (pageId: string) => {
  const page = pages.find(
  (item) => item.pageId === pageId
);

  if (!page) return;

  setComponents(page.components);
 setCurrentPageId(page.pageId);
  setSelectedId(null);
  // setSidebarOpen(false);

  console.log("Loaded Page:", page);
};

const deletePage = (pageId: string) => {
  setPages((prev) => {
    const updatedPages = prev.filter(
      (page) => page.pageId !== pageId
    );

    localStorage.setItem(
      "mobile-pages",
      JSON.stringify(updatedPages)
    );

    return updatedPages;
  });

  if (currentPageId === pageId) {
    setCurrentPageId(null);
    setComponents([]);
  }

  console.log("Deleted Page:", pageId);
};

const createNewPage = () => {
  const pageName = prompt("Enter Page Name");

  if (!pageName) return;

  const route =
    "/" +
    pageName
      .toLowerCase()
      .replace(/\s+/g, "-");

  const newPage: SavedPage = {
    pageId: crypto.randomUUID(),
    pageName,
    route,
    components: [],
    createdAt: new Date().toISOString(),
  };

  setPages((prev) => [...prev, newPage]);
  setCurrentPageId(newPage.pageId);
  setComponents([]);
};

const [saveMessage, setSaveMessage] =
  useState(false);

const saveCurrentPage = () => {
  if (!currentPageId) {
    alert("Please create or select a page first");
    return;
  }

  setPages((prev) =>
    prev.map((page) =>
      page.pageId === currentPageId
        ? {
            ...page,
            components: JSON.parse(
              JSON.stringify(components)
            ),
          }
        : page
    )
  );

  setSaveMessage(true);

  setTimeout(() => {
    setSaveMessage(false);
  }, 2000);
};

  return (
  <>
    {saveMessage && (
  <div className="save-success-toast">
    Saved Successfully
  </div>
)} 

    {isBuilderRoute && (
      <div className="builder-page">
        <PagePanel
          pages={pages}
          currentPageId={currentPageId}
          onNewPage={createNewPage}
          onSavePage={saveCurrentPage}
          onSelectPage={loadPage}
          onDeletePage={deletePage}
        />

        <MobileCanvas
          ref={mobileRef}
          components={components}
          deleteComponent={deleteComponent}
          editComponent={editComponent}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />

        <ComponentSidebar
          search={search}
          setSearch={setSearch}
          addComponent={addComponent}
          downloadPng={downloadPng}
        />
      </div>
    )}

    <Routes>
      {pages.map((page) => (
        <Route
          key={page.pageId}
          path={page.route}
          element={
            <GeneratedPage page={page} />
          }
        />
      ))}

      <Route
        path="/"
        element={null}
      />
    </Routes>

    {isBuilderRoute && (
      <>
        {/* keep all your modals here */}
        {showHeadingModal && (
        <HeadingSelectModal
          headingOptions={headingOptions}
          onClose={() =>
            setShowHeadingModal(false)
          }
          onAdd={addSelectedHeadings}
        />
      )}

      {showButtonModal && (
        <ButtonSelectModal
          buttonOptions={buttonOptions}
          onClose={() =>
            setShowButtonModal(false)
          }
          onAdd={addSelectedButtons}
        />
      )}

      {showTextFieldModal && (
        <TextFieldSelectModal
          textFieldOptions={textFieldOptions}
          onClose={() => setShowTextFieldModal(false)}
          onAdd={addSelectedTextFields}
        />
      )}

      {showEmailFieldModal && (
        <EmailFieldSelectModal
          emailFieldOptions={emailFieldOptions}
          onClose={() => setShowEmailFieldModal(false)}
          onAdd={addSelectedEmailFields}
        />
      )}

      {showPasswordFieldModal && (
        <PasswordFieldSelectModal
          passwordFieldOptions={passwordFieldOptions}
          onClose={() =>
            setShowPasswordFieldModal(false)
          }
          onAdd={addSelectedPasswordFields}
        />
      )}

      {showSearchFieldModal && (
        <SearchFieldSelectModal
          searchFieldOptions={searchFieldOptions}
          onClose={() => setShowSearchFieldModal(false)}
          onAdd={addSelectedSearchFields}
        />
      )}


      {showVerificationFieldModal && (
        <VerificationFieldSelectModal
          verificationFieldOptions={
            verificationFieldOptions
          }
          onClose={() =>
            setShowVerificationFieldModal(false)
          }
          onAdd={addSelectedVerificationFields}
        />
      )}

      {showDobFieldModal && (
        <DobFieldSelectModal
          dobFieldOptions={dobFieldOptions}
          onClose={() =>
            setShowDobFieldModal(false)
          }
          onAdd={addSelectedDobFields}
        />
      )}

      {showOtpFieldModal && (
        <OtpFieldSelectModal
          otpFieldOptions={otpFieldOptions}
          onClose={() => setShowOtpFieldModal(false)}
          onAdd={addSelectedOtpFields}
        />
      )}

      {showBioFieldModal && (
        <BioFieldSelectModal
          bioFieldOptions={bioFieldOptions}
          onClose={() =>
            setShowBioFieldModal(false)
          }
          onAdd={addSelectedBioFields}
        />
      )}

      {showCreditCardFieldModal && (
        <CreditCardFieldSelectModal
          creditCardFieldOptions={
            creditCardFieldOptions
          }
          onClose={() =>
            setShowCreditCardFieldModal(false)
          }
          onAdd={addSelectedCreditCardFields}
        />
      )}

      {showCvvFieldModal && (
        <CvvFieldSelectModal
          cvvFieldOptions={cvvFieldOptions}
          onClose={() =>
            setShowCvvFieldModal(false)
          }
          onAdd={addSelectedCvvFields}
        />
      )}

      {showPhoneNumberFieldModal && (
        <PhoneNumberFieldSelectModal
          phoneNumberFieldOptions={
            phoneNumberFieldOptions
          }
          onClose={() =>
            setShowPhoneNumberFieldModal(false)
          }
          onAdd={addSelectedPhoneNumberFields}
        />
      )}

      {showCheckboxModal && (
        <CheckboxSelectModal
          checkboxOptions={checkboxOptions}
          onClose={() => setShowCheckboxModal(false)}
          onAdd={addSelectedCheckboxes}
        />
      )}

      {showRadioButtonModal && (
        <RadioButtonSelectModal
          radioButtonOptions={radioButtonOptions}
          onClose={() => setShowRadioButtonModal(false)}
          onAdd={addSelectedRadioButtons}
        />
      )}

      {showCardRadioModal && (
        <CardRadioSelectModal
          cardRadioOptions={cardRadioOptions}
          onClose={() =>
            setShowCardRadioModal(false)
          }
          onAdd={addSelectedCardRadios}
        />
      )}

      {showCustomRadioModal && (
        <CustomRadioSelectModal
          customRadioOptions={customRadioOptions}
          onClose={() => setShowCustomRadioModal(false)}
          onAdd={addSelectedCustomRadios}
        />
      )}

      {showDropdownModal && (
        <DropdownSelectModal
          dropdownOptions={dropdownOptions}
          onClose={() => setShowDropdownModal(false)}
          onAdd={addSelectedDropdowns}
        />
      )}

      {showDropdownListModal && (
        <DropdownListSelectModal
          dropdownListOptions={dropdownListOptions}
          onClose={() =>
            setShowDropdownListModal(false)
          }
          onAdd={addSelectedDropdownLists}
        />
      )}

      {showDropdownList2Modal && (
        <DropdownList2SelectModal
          dropdownList2Options={dropdownList2Options}
          onClose={() =>
            setShowDropdownList2Modal(false)
          }
          onAdd={addSelectedDropdownList2}
        />
      )}

      {showAccordionModal && (
        <AccordionSelectModal
          accordionOptions={accordionOptions}
          onClose={() => setShowAccordionModal(false)}
          onAdd={addSelectedAccordions}
        />
      )}

      {showImageSliderModal && (
        <ImageSliderSelectModal
          imageSliderOptions={imageSliderOptions}
          onClose={() =>
            setShowImageSliderModal(false)
          }
          onAdd={addSelectedImageSliders}
        />
      )}

      {showAppImageModal && (
        <AppImageSelectModal
          appImageOptions={appImageOptions}
          onClose={() => setShowAppImageModal(false)}
          onAdd={addSelectedAppImages}
        />
      )}

      {showSnackBarModal && (
        <SnackBarSelectModal
          snackBarOptions={snackBarOptions}
          onClose={() => setShowSnackBarModal(false)}
          onAdd={addSelectedSnackBars}
        />
      )}

      {showToggleButtonModal && (
        <ToggleButtonSelectModal
          toggleButtonOptions={toggleButtonOptions}
          onClose={() =>
            setShowToggleButtonModal(false)
          }
          onAdd={addSelectedToggleButtons}
        />
      )}

      {showInformationCardModal && (
        <InformationCardSelectModal
          informationCardOptions={
            informationCardOptions
          }
          onClose={() =>
            setShowInformationCardModal(false)
          }
          onAdd={addSelectedInformationCards}
        />
      )}

      {showChipTagModal && (
        <ChipTagSelectModal
          chipTagOptions={chipTagOptions}
          onClose={() => setShowChipTagModal(false)}
          onAdd={addSelectedChipTags}
        />
      )}

      {showMultiSelectChipModal && (
        <MultiSelectChipSelectModal
          multiSelectChipOptions={
            multiSelectChipOptions
          }
          onClose={() =>
            setShowMultiSelectChipModal(false)
          }
          onAdd={addSelectedMultiSelectChips}
        />
      )}

      {showVerticalStepperModal && (
        <VerticalStepperSelectModal
          verticalStepperOptions={verticalStepperOptions}
          onClose={() =>
            setShowVerticalStepperModal(false)
          }
          onAdd={addSelectedVerticalSteppers}
        />
      )}

      {showHorizontalStepperModal && (
        <HorizontalStepperSelectModal
          horizontalStepperOptions={
            horizontalStepperOptions
          }
          onClose={() =>
            setShowHorizontalStepperModal(false)
          }
          onAdd={addSelectedHorizontalSteppers}
        />
      )}

      {showStepProgressModal && (
        <StepProgressSelectModal
          stepProgressOptions={stepProgressOptions}
          onClose={() => setShowStepProgressModal(false)}
          onAdd={addSelectedStepProgress}
        />
      )}

      {showFileUploadModal && (
        <FileUploadSelectModal
          fileUploadOptions={fileUploadOptions}
          onClose={() => setShowFileUploadModal(false)}
          onAdd={addSelectedFileUploads}
        />
      )}

      {showGalleryUploadModal && (
        <GalleryUploadSelectModal
          galleryUploadOptions={galleryUploadOptions}
          onClose={() =>
            setShowGalleryUploadModal(false)
          }
          onAdd={addSelectedGalleryUploads}
        />
      )}

      {showCustomCameraModal && (
        <CustomCameraSelectModal
          customCameraOptions={customCameraOptions}
          onClose={() =>
            setShowCustomCameraModal(false)
          }
          onAdd={addSelectedCustomCameras}
        />
      )}

      {showActionSheetModal && (
        <ActionSheetSelectModal
          actionSheetOptions={actionSheetOptions}
          onClose={() =>
            setShowActionSheetModal(false)
          }
          onAdd={addSelectedActionSheets}
        />
      )}

      {showActionSheetImageModal && (
        <ActionSheetImageSelectModal
          actionSheetImageOptions={
            actionSheetImageOptions
          }
          onClose={() =>
            setShowActionSheetImageModal(false)
          }
          onAdd={addSelectedActionSheetImages}
        />
      )}

      {showSelectionActionSheetModal && (
        <SelectionActionSheetSelectModal
          selectionActionSheetOptions={
            selectionActionSheetOptions
          }
          onClose={() =>
            setShowSelectionActionSheetModal(false)
          }
          onAdd={addSelectedSelectionActionSheets}
        />
      )}

      {showSelectionIconButtonModal && (
        <SelectionIconButtonSelectModal
          selectionIconButtonOptions={
            selectionIconButtonOptions
          }
          onClose={() =>
            setShowSelectionIconButtonModal(false)
          }
          onAdd={addSelectedSelectionIconButtons}
        />
      )}

      {showTopTabsModal && (
        <TopTabsSelectModal
          topTabsOptions={topTabsOptions}
          onClose={() => setShowTopTabsModal(false)}
          onAdd={addSelectedTopTabs}
        />
      )}

      {showBottomTabsModal && (
        <BottomTabsSelectModal
          bottomTabsOptions={bottomTabsOptions}
          onClose={() => setShowBottomTabsModal(false)}
          onAdd={addSelectedBottomTabs}
        />
      )}

      {showAccordionSkeletonModal && (
        <AccordionSkeletonSelectModal
          accordionSkeletonOptions={
            accordionSkeletonOptions
          }
          onClose={() =>
            setShowAccordionSkeletonModal(false)
          }
          onAdd={addSelectedAccordionSkeletons}
        />
      )}

      {showImageSliderSkeletonModal && (
        <ImageSliderSkeletonSelectModal
          imageSliderSkeletonOptions={
            imageSliderSkeletonOptions
          }
          onClose={() =>
            setShowImageSliderSkeletonModal(false)
          }
          onAdd={addSelectedImageSliderSkeletons}
        />
      )}

      {showStepperSkeletonModal && (
        <StepperSkeletonSelectModal
          stepperSkeletonOptions={
            stepperSkeletonOptions
          }
          onClose={() =>
            setShowStepperSkeletonModal(false)
          }
          onAdd={addSelectedStepperSkeletons}
        />
      )}

      {showBiometricModal && (
        <BiometricSelectModal
          biometricOptions={biometricOptions}
          onClose={() =>
            setShowBiometricModal(false)
          }
          onAdd={addSelectedBiometrics}
        />
      )}

      {showBiometricErrorModal && (
        <BiometricErrorSelectModal
          biometricErrorOptions={biometricErrorOptions}
          onClose={() =>
            setShowBiometricErrorModal(false)
          }
          onAdd={addSelectedBiometricErrors}
        />
      )}

      {showContactsModal && (
        <ContactsSelectModal
          contactsOptions={contactsOptions}
          onClose={() => setShowContactsModal(false)}
          onAdd={addSelectedContacts}
        />
      )}

      {showContactsErrorModal && (
        <ContactsErrorSelectModal
          contactsErrorOptions={contactsErrorOptions}
          onClose={() =>
            setShowContactsErrorModal(false)
          }
          onAdd={addSelectedContactsError}
        />
      )}

      {showLocationModal && (
        <LocationSelectModal
          locationOptions={locationOptions}
          onClose={() => setShowLocationModal(false)}
          onAdd={addSelectedLocations}
        />
      )}

      {showLanguageModal && (
        <LanguageSelectModal
          languageOptions={languageOptions}
          onClose={() => setShowLanguageModal(false)}
          onAdd={addSelectedLanguages}
        />
      )}

      {showDateNumberFormattingModal && (
        <DateNumberFormattingSelectModal
          dateNumberFormattingOptions={
            dateNumberFormattingOptions
          }
          onClose={() =>
            setShowDateNumberFormattingModal(false)
          }
          onAdd={addSelectedDateNumberFormatting}
        />
      )}

      {showDeviceInfoModal && (
        <DeviceInfoSelectModal
          deviceInfoOptions={deviceInfoOptions}
          onClose={() => setShowDeviceInfoModal(false)}
          onAdd={addSelectedDeviceInfo}
        />
      )}

      {showDeviceConfigurationModal && (
        <DeviceConfigurationSelectModal
          deviceConfigurationOptions={
            deviceConfigurationOptions
          }
          onClose={() =>
            setShowDeviceConfigurationModal(false)
          }
          onAdd={addSelectedDeviceConfigurations}
        />
      )}

      {showNavigationModal && (
        <NavigationSelectModal
          navigationOptions={navigationOptions}
          onClose={() => setShowNavigationModal(false)}
          onAdd={addSelectedNavigation}
        />
      )}

      {showInputFieldModal && (
        <InputFieldSelectModal
          inputFieldOptions={inputFieldOptions}
          onClose={() => setShowInputFieldModal(false)}
          onAdd={addSelectedInputFields}
        />
      )}
      </>
    )}
  </>
);
}