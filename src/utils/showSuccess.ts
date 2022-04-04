import { message } from "antd";

const showSuccess = (successMessage: string) => {
  message.success(successMessage);
};

export default showSuccess;