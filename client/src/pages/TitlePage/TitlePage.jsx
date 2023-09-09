import { useState, useEffect } from "react";
import axios from "axios";
// import style from "./TitlePage.module.scss";
import ModalWindow from "../../components/Modal/ModalWindow";

// { parentNodeId: "", nodeName: "" }
const TitlePage = () => {
  const [visibility, setVisibility] = useState(false);
  const [children, setChildren] = useState([]);
  const [treeTitle, setTreeTitle] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [id, setId] = useState("");

  const treeName = "MyTree";

  const getAllTree = async () => {
    const res = await axios.post(
      `https://test.vmarmysh.com/api.user.tree.get?treeName=${treeName}`
    );
    setTreeTitle(res.data.name);
    setId(res.data.id);
    setChildren(res.data.children);

    console.log(res.data);
  };

  const createTreeNode = async () => {
    const res = await axios.post(
      `https://test.vmarmysh.com/api.user.tree.node.create?treeName=${treeName}&parentNodeId=${id}&nodeName=${inputValue}`
    );
    console.log(res.status);
  };

  const deleteTreeNode = async () => {
    const res = await axios.post(
      `https://test.vmarmysh.com/api.user.tree.node.delete?treeName=${treeName}&nodeId=${parentNodeId}`
    );
    console.log(res.status);
  };

  useEffect(() => {
    getAllTree();
  }, [visibility]);

  return (
    <>
      <ul style={{ maxWidth: "800px", margin: "auto" }}>
        <li
          style={{ display: "flex", alignItems: "center", gap: "1%" }}
          onClick={() => (visibility ? setVisibility(false) : setVisibility(true))}
        >
          {treeTitle}
          <ModalWindow
            titleText={"Add"}
            type={"createNodeElement"}
            sendCreationRequest={createTreeNode}
            setInputValue={setInputValue}
            setVisibility={setVisibility}
          />
        </li>

        {visibility && (
          <ul>
            {children.map((el, index) => (
              <li key={index}>{el.name}</li>
            ))}
          </ul>
        )}
      </ul>
    </>
  );
};

export default TitlePage;
