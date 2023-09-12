// import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group } from "@mantine/core";
import { AiFillDelete } from "react-icons/ai";

const ModalDelete = ({ sendRequest, id, name }) => {
  const [opened, { open, close }] = useDisclosure(false);

  const deleteNode = () => {
    sendRequest(id);
    close();
  };

  return (
    <>
      <Modal opened={opened} onClose={close} centered title={"Delete"}>
        <p>Do you want to delete: {name}?</p>

        <div style={{ display: "flex", gap: "2%", justifyContent: "flex-end", marginTop: "5%" }}>
          <Button onClick={close}>Cancel</Button>
          <Button onClick={deleteNode}>Delete</Button>
        </div>
      </Modal>

      <Group>
        <AiFillDelete onClick={open} size={"30px"} />
      </Group>
    </>
  );
};

export default ModalDelete;
