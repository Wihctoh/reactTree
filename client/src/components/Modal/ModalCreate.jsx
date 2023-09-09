// import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group, Input } from "@mantine/core";
import { useState } from "react";

const ModalCreate = ({ sendRequest, id }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [inpValue, setInpValue] = useState("");

  const createNode = () => {
    sendRequest(id, inpValue);
    close();
  };

  return (
    <>
      <Modal opened={opened} onClose={close} centered title={"Add"}>
        <Input placeholder="Node Name" onChange={(e) => setInpValue(e.target.value)} />

        <div style={{ display: "flex", gap: "2%", justifyContent: "flex-end", marginTop: "5%" }}>
          <Button onClick={close}>Cancel</Button>
          <Button onClick={createNode}>Add</Button>
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

export default ModalCreate;
