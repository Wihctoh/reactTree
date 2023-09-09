// import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group, Input } from "@mantine/core";
import { useState } from "react";

const ModalUpdate = ({ sendRequest, id }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [inpValue, setInpValue] = useState("");

  const updateNode = () => {
    sendRequest(id, inpValue);
    close();
  };

  return (
    <>
      <Modal opened={opened} onClose={close} centered title={"Update"}>
        <Input placeholder="Node Name" onChange={(e) => setInpValue(e.target.value)} />

        <div style={{ display: "flex", gap: "2%", justifyContent: "flex-end", marginTop: "5%" }}>
          <Button onClick={close}>Cancel</Button>
          <Button onClick={updateNode}>Rename</Button>
        </div>
      </Modal>

      <Group>
        <Button onClick={open} radius="xl" compact>
          rename
        </Button>
      </Group>
    </>
  );
};

export default ModalUpdate;
