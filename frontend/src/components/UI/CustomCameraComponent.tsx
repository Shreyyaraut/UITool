import {
    FiUserCheck,
    FiCamera,
} from "react-icons/fi";
import type { UIComponent } from "../../types";

interface Props {
    item: UIComponent;
}

export default function CustomCameraComponent({
    item,
}: Props) {
    const variant =
        item.customCameraVariant || "selfie";

    return (
        <div className="custom-camera-box">
            {variant === "document" ? (
                <FiCamera />
            ) : (
                <FiUserCheck />
            )}

            <span>
                {variant === "document"
                    ? "Scan Document"
                    : "Take Selfie"}
            </span>
        </div>
    );
}