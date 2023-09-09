import { useState, useEffect } from "react";
import axios from "axios";
import style from "./TitlePage.module.scss";
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
    setChildren(res.data.children);
    setTreeTitle(res.data.name);
    setId(res.data.id);

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
      <div className={style.TitleWrapper}>
        <div className={style.wrapper}>
          <p onClick={() => (visibility ? setVisibility(false) : setVisibility(true))}>
            {treeTitle}
          </p>
          <ModalWindow
            titleText={"Add"}
            type={"createNodeElement"}
            sendCreationRequest={createTreeNode}
            setInputValue={setInputValue}
            setVisibility={setVisibility}
          />
        </div>

        {visibility && (
          <div className={style.TitleWrapperElements}>
            {children.map((el, index) => (
              <p key={index}>{el.name}</p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default TitlePage;
