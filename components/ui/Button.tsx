import React from "react";
import {
  Text,
  TouchableOpacity,
  ActivityIndicator,
  GestureResponderEvent,
  View,
} from "react-native";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type Size = "sm" | "md" | "lg" | "icon";

interface ButtonProps {
  label?: string;
  onPress: (event: GestureResponderEvent) => void;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
}

const getVariantStyles = (variant: Variant): string => {
  switch (variant) {
    case "primary":
      return "bg-blue-600 text-white";
    case "secondary":
      return "bg-gray-200 text-white";
    case "outline":
      return "border border-gray-400 bg-transparent text-black";
    case "ghost":
      return "bg-transparent text-black";
    case "danger":
      return "bg-red-600 text-white";
    default:
      return "bg-blue-600 text-white";
  }
};

const getSizeStyles = (size: Size): string => {
  switch (size) {
    case "sm":
      return "px-3 py-1 text-sm h-9";
    case "md":
      return "px-4 py-2 text-base h-11";
    case "lg":
      return "px-5 py-3 text-lg h-14";
    case "icon":
      return "h-10 w-10 items-center justify-center";
    default:
      return "px-4 py-2 text-base h-11";
  }
};

const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  disabled = false,
  icon,
}) => {
  const variantStyles = getVariantStyles(variant);
  const sizeStyles = getSizeStyles(size);

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      className={`rounded-lg flex-row items-center justify-center h-12 ${variantStyles} ${sizeStyles} ${
        fullWidth ? "w-full" : "w-auto"
      } ${disabled ? "opacity-50" : ""}`}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <>
          {icon && <View className="mr-2">{icon}</View>}
          {label && <Text className="font-semibold">{label}</Text>}
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;
