// import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group, Input } from "@mantine/core";

const ModalWindow = ({ titleText, sendCreationRequest, setInputValue, setVisibility }) => {
  const [opened, { open, close }] = useDisclosure(false);

  const handleClick = () => {
    sendCreationRequest();
    close();
    setVisibility(false);
  };

  return (
    <>
      <Modal opened={opened} onClose={close} centered title={titleText}>
        <Input placeholder="Node Name" onChange={(e) => setInputValue(e.target.value)} />

        <div style={{ display: "flex", gap: "2%", justifyContent: "flex-end", marginTop: "5%" }}>
          <Button onClick={close}>Cancel</Button>
          <Button onClick={handleClick}>Add</Button>
        </div>
      </Modal>

      <Group>
        <Button onClick={open} radius="xl" compact>
          +
        </Button>
      </Group>
    </>
  );
};

export default ModalWindow;
