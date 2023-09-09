// import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group } from "@mantine/core";

const ModalDelete = ({ sendRequest, id }) => {
  const [opened, { open, close }] = useDisclosure(false);

  const deleteNode = () => {
    sendRequest(id);
    close();
  };

  return (
    <>
      <Modal opened={opened} onClose={close} centered title={"Delete"}>
        <div style={{ display: "flex", gap: "2%", justifyContent: "flex-end", marginTop: "5%" }}>
          <Button onClick={close}>Cancel</Button>
          <Button onClick={deleteNode}>Delete</Button>
        </div>
      </Modal>

      <Group>
        <Button onClick={open} radius="xl" compact>
          -
        </Button>
      </Group>
    </>
  );
};

export default ModalDelete;
