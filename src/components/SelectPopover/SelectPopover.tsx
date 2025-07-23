import React, { ReactNode, useState } from "react";
import { Popover, List } from "antd";
import styles from "./SelectPopover.module.scss";


interface Option {
  label: string | ReactNode;
  value: string | number;
}

interface SelectPopoverProps {
  label: string | ReactNode;
  options: Option[];
  onSelect?: (value: Option) => void;
}

export const SelectPopover: React.FC<SelectPopoverProps> = ({
  label,
  options,
  onSelect,
}) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (option: Option) => {
    onSelect?.(option);
    setOpen(false);
  };

  const content = (
    <List
      size="small"
      dataSource={options}
      renderItem={(item) => (
        <List.Item
          style={{ cursor: "pointer" }}
          onClick={() => handleSelect(item)}
        >
          {item.label}
        </List.Item>
      )}
    />
  );

  return (
    <Popover
      content={content}
      trigger="click"
      open={open}
      onOpenChange={(val) => setOpen(val)}
      placement="bottomLeft"
    >
      <div className={styles.labelPopover}>{label}</div>
    </Popover>
  );
};
