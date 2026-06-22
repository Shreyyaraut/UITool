import type { UIComponent } from "../types";

import ButtonComponent from "./UI/ButtonComponent";
import CardComponent from "./UI/CardComponent";
import HeadingComponent from "./UI/HeadingComponent";
import InputComponent from "./UI/InputComponent";
import ParagraphComponent from "./UI/ParagraphComponent";
import TextareaComponent from "./UI/TextareaComponent";
import SideMenuComponent from "./UI/SideMenuComponent";
import TopTabsComponent from "./UI/TopTabsComponent";
import BottomTabsComponent from "./UI/BottomTabsComponent";
import TextFieldComponent from "./UI/TextFieldComponent";
import EmailFieldComponent from "./UI/EmailFieldComponent";
import PasswordFieldComponent from "./UI/PasswordFieldComponent";
import SearchFieldComponent from "./UI/SearchFieldComponent";
import VerificationFieldComponent from "./UI/VerificationFieldComponent";
import DobFieldComponent from "./UI/DobFieldComponent";
import OtpFieldComponent from "./UI/OtpFieldComponent";
import BioFieldComponent from "./UI/BioFieldComponent";
import CreditCardFieldComponent from "./UI/CreditCardFieldComponent";
import CvvFieldComponent from "./UI/CvvFieldComponent";
import PhoneNumberFieldComponent from "./UI/PhoneNumberFieldComponent";
import CheckboxComponent from "./UI/CheckboxComponent";
import RadioButtonComponent from "./UI/RadioButtonComponent";
import CardRadioComponent from "./UI/CardRadioComponent";
import CustomRadioComponent from "./UI/CustomRadioComponent";
import DropdownComponent from "./UI/DropdownComponent";
import DropdownListComponent from "./UI/DropdownListComponent";
import DropdownList2Component from "./UI/DropdownList2Component";
import AccordionComponent from "./UI/AccordionComponent";
import ImageSliderComponent from "./UI/ImageSliderComponent";
import AppImageComponent from "./UI/AppImageComponent";
import SnackBarComponent from "./UI/SnackBarComponent";
import ToggleButtonComponent from "./UI/ToggleButtonComponent";
import InformationCardComponent from "./UI/InformationCardComponent";
import ChipTagComponent from "./UI/ChipTagComponent";
import MultiSelectChipComponent from "./UI/MultiSelectChipComponent";
import VerticalStepperComponent from "./UI/VerticalStepperComponent";
import HorizontalStepperComponent from "./UI/HorizontalStepperComponent";
import StepProgressComponent from "./UI/StepProgressComponent";
import FileUploadComponent from "./UI/FileUploadComponent";
import GalleryUploadComponent from "./UI/GalleryUploadComponent";
import CustomCameraComponent from "./UI/CustomCameraComponent";
import ActionSheetComponent from "./UI/ActionSheetComponent";
import ActionSheetImageComponent from "./UI/ActionSheetImageComponent";
import SelectionActionSheetComponent from "./UI/SelectionActionSheetComponent";
import SelectionIconButtonComponent from "./UI/SelectionIconButtonComponent";
import AccordionSkeletonComponent from "./UI/AccordionSkeletonComponent";
import ImageSliderSkeletonComponent from "./UI/ImageSliderSkeletonComponent";
import StepperSkeletonComponent from "./UI/StepperSkeletonComponent";
import BiometricComponent from "./UI/BiometricComponent";
import BiometricErrorComponent from "./UI/BiometricErrorComponent";
import ContactsComponent from "./UI/ContactsComponent";
import ContactsErrorComponent from "./UI/ContactsErrorComponent";
import LocationComponent from "./UI/LocationComponent";
import LanguageComponent from "./UI/LanguageComponent";
import DateNumberFormattingComponent from "./UI/DateNumberFormattingComponent";
import DeviceInfoComponent from "./UI/DeviceInfoComponent";
import DeviceConfigurationComponent from "./UI/DeviceConfigurationComponent";
import NavigationComponent from "./UI/NavigationComponent";
import NotificationComponent from "./UI/Notificationcomponent";
import ToggleComponent from "./UI/ToggleComponent";
import SwitchButtonComponent from "./UI/SwitchButtonComponent";
import HeaderComponent from "./UI/HeaderComponent";
import ReadOnlyFormComponent from "./UI/ReadOnlyFormComponent";
import TransactionComponent from "./UI/TransactionComponent";
import TransactionSuccessfulComponent from "./UI/TransactionSuccessfulComponent";
import PassbookComponent from "./UI/PassbookComponent";
import FundTransferComponent from "./UI/FundTransferComponent";
import TransactionSuccessStatusComponent from "./UI/TransactionSuccessStatusComponent";
import TransactionFailedStatusComponent from "./UI/TransactionFailedStatusComponent";
import TransactionDetailsComponent from "./UI/TransactionDetailsComponent";
import MyTransactionsComponent from "./UI/MyTransactionsComponent";
import PhonebookComponent from "./UI/PhonebookComponent";
import PhonebookAccessComponent from "./UI/PhonebookAccessComponent";
import MultiSelectCardsComponent from "./UI/MultiSelectCardsComponent";
import IconWithCardComponent from "./UI/IconWithCardComponent";
import ScannerComponent from "./UI/ScannerComponent";
import BackButtonComponent from "./UI/BackButtonComponent";
import FaceIdComponent from "./UI/FaceIdComponent";

interface Props {
    item: UIComponent;
}

export default function RenderComponent({ item }: Props) {
    switch (item.type) {
        case "button":
            return <ButtonComponent item={item} />;

        case "card":
            return (
                <CardComponent label={item.label}>
                    {item.children?.map((child) => (
                        <RenderComponent
                            key={child.id}
                            item={child}
                        />
                    ))}
                </CardComponent>
            );

        case "input":
            return <InputComponent label={item.label} />;

        case "textarea":
            return <TextareaComponent label={item.label} />;

        case "heading":
            return <HeadingComponent item={item} />;

        case "paragraph":
            return <ParagraphComponent label={item.label} />;

        case "sideMenu":
            return <SideMenuComponent />;

        case "topTabs":
            return <TopTabsComponent />;

        case "bottomTabs":
            return <BottomTabsComponent />;

        case "textField":
            return <TextFieldComponent item={item} />;

        case "emailField":
            return <EmailFieldComponent item={item} />;

        case "passwordField":
            return <PasswordFieldComponent item={item} />;

        case "searchField":
            return <SearchFieldComponent />;

        case "verificationField":
            return <VerificationFieldComponent item={item} />;

        case "dobField":
            return <DobFieldComponent item={item} />;

        case "otpField":
            return <OtpFieldComponent item={item} />;

        case "bioField":
            return <BioFieldComponent item={item} />;

        case "creditCardField":
            return <CreditCardFieldComponent item={item} />;

        case "cvvField":
            return <CvvFieldComponent item={item} />;

        case "phoneNumberField":
            return <PhoneNumberFieldComponent item={item} />;

        case "checkbox":
            return <CheckboxComponent item={item} />;

        case "radioButton":
            return <RadioButtonComponent item={item} />;

        case "cardRadio":
            return <CardRadioComponent item={item} />;

        case "customRadio":
            return <CustomRadioComponent item={item} />;

        case "dropdown":
            return <DropdownComponent item={item} />;

        case "dropdownList":
            return <DropdownListComponent />;

        case "dropdownList2":
            return <DropdownList2Component />;

        case "accordion":
            return <AccordionComponent item={item} />;

        case "imageSlider":
            return <ImageSliderComponent item={item} />;

        case "appImage":
            return <AppImageComponent item={item} />;

        case "snackBar":
            return <SnackBarComponent item={item} />;

        case "toggleButton":
            return <ToggleButtonComponent item={item} />;

        case "informationCard":
            return <InformationCardComponent item={item} />;

        case "chipTag":
            return <ChipTagComponent item={item} />;

        case "multiSelectChip":
            return <MultiSelectChipComponent item={item} />;

        case "verticalStepper":
            return <VerticalStepperComponent />;

        case "horizontalStepper":
            return <HorizontalStepperComponent />;

        case "stepProgress":
            return <StepProgressComponent />;

        case "fileUpload":
            return <FileUploadComponent item={item} />;

        case "galleryUpload":
            return <GalleryUploadComponent item={item} />;

        case "customCamera":
            return <CustomCameraComponent item={item} />;

        case "actionSheet":
            return <ActionSheetComponent />;

        case "actionSheetImage":
            return <ActionSheetImageComponent />;

        case "selectionActionSheet":
            return <SelectionActionSheetComponent />;

        case "selectionIconButton":
            return <SelectionIconButtonComponent item={item} />;

        case "accordionSkeleton":
            return (
                <AccordionSkeletonComponent
                    item={item}
                />
            );

        case "imageSliderSkeleton":
            return (
                <ImageSliderSkeletonComponent
                    item={item}
                />
            );

        case "stepperSkeleton":
            return (
                <StepperSkeletonComponent
                    item={item}
                />
            );

        case "biometric":
            return <BiometricComponent />;

        case "biometricError":
            return <BiometricErrorComponent />;

        case "contacts":
            return <ContactsComponent />;

        case "contactsError":
            return <ContactsErrorComponent />;

        case "location":
            return <LocationComponent />;

        case "language":
            return <LanguageComponent />;

        case "dateNumberFormatting":
            return <DateNumberFormattingComponent />;

        case "deviceInfo":
            return <DeviceInfoComponent />;

        case "deviceConfiguration":
            return <DeviceConfigurationComponent />;

        case "navigation":
            return <NavigationComponent />;

        case "notification":
            return <NotificationComponent />;

        case "toggle":
            return <ToggleComponent item={item} />;    

        case "switchButton":
            return <SwitchButtonComponent item={item} />;

        case "header":
            return <HeaderComponent />;

        case "readOnlyForm":
            return <ReadOnlyFormComponent />;

        case "transaction":
            return <TransactionComponent />;

        case "transactionSuccessful":
            return <TransactionSuccessfulComponent />;

        case "passbook":
            return <PassbookComponent />;

        case "fundTransfer":
            return <FundTransferComponent />;

        case "transactionSuccessStatus":
            return <TransactionSuccessStatusComponent />;
            
        case "transactionFailedStatus":
            return <TransactionFailedStatusComponent />;    

        case "transactionDetails":
            return <TransactionDetailsComponent />;    

        case "myTransactions":
            return <MyTransactionsComponent item={item} />;

        case "phonebook":
            return <PhonebookComponent />;

        case "phonebookAccess":
            return <PhonebookAccessComponent />;    

        case "multiSelectCards":
            return <MultiSelectCardsComponent />;

        case "iconWithCard":
            return <IconWithCardComponent item={item} />
            
        case "scanner":
            return <ScannerComponent />;

        case "backButton":
            return <BackButtonComponent />;    

        case "faceId":
            return <FaceIdComponent />;    

        default:
            return null;
    }
}