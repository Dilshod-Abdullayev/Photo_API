import React from "react";
import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function ThemeBtn() {
  return (
    <Button
      type="primary"
      shape="round"
      icon={<DownloadOutlined />}
    >
      Download
    </Button>
  );
}
