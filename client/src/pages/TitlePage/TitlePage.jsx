import style from "./TitlePage.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalCreate from "../../components/Modal/ModalCreate";
import ModalDelete from "../../components/Modal/ModalDelete";
import ModalUpdate from "../../components/Modal/ModalUpdate";

const TitlePage = () => {
  const treeName = "MyTree";

  const [children, setChildren] = useState([]);
  const [id, setId] = useState("");
  const [update, setUpdate] = useState(false);

  const getAllTree = async () => {
    const res = await axios.post(
      `https://test.vmarmysh.com/api.user.tree.get?treeName=${treeName}`
    );
    setId(res.data.id);
    setChildren(res.data.children);

    console.log(res.data);
  };

  const createTreeNode = async (id, inputValue) => {
    const res = await axios.post(
      `https://test.vmarmysh.com/api.user.tree.node.create?treeName=${treeName}&parentNodeId=${id}&nodeName=${inputValue}`
    );
    setUpdate(!update);
    console.log(res.status);
  };

  const updateTreeNode = async (id, inputValue) => {
    const res = await axios.post(
      `https://test.vmarmysh.com/api.user.tree.node.rename?treeName=${treeName}&nodeId=${id}&newNodeName=${inputValue}`
    );
    setUpdate(!update);
    console.log(res.status);
  };

  const deleteTreeNode = async (id) => {
    const res = await axios.post(
      `https://test.vmarmysh.com/api.user.tree.node.delete?treeName=${treeName}&nodeId=${id}`
    );
    setUpdate(!update);
    console.log(res.status);
  };

  useEffect(() => {
    getAllTree();
  }, [update]);

  const TreeNode = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
      setIsOpen(!isOpen);
    };

    const renderChildren = () => {
      if (!data.children || data.children.length === 0) {
        return null;
      }

      return (
        <ul>
          {data.children.map((el) => (
            <li key={el.id}>
              <div className={style.modalWrapper}>
                <ModalCreate sendRequest={createTreeNode} id={el.id} />
                <ModalUpdate sendRequest={updateTreeNode} id={el.id} />
                <ModalDelete sendRequest={deleteTreeNode} id={el.id} name={el.name} />
              </div>

              <TreeNode data={el} />
            </li>
          ))}
        </ul>
      );
    };

    return (
      <div>
        <div onClick={toggleOpen}>
          {isOpen ? "▼" : "▶"} {data.name}
        </div>

        {isOpen && renderChildren()}
      </div>
    );
  };
  function titleNodeElements(node) {
    return (
      <div key={node.id}>
        <div className={style.modalWrapper}>
          <ModalCreate sendRequest={createTreeNode} id={node.id} />
          <ModalUpdate sendRequest={updateTreeNode} id={node.id} />
          <ModalDelete sendRequest={deleteTreeNode} id={node.id} name={node.name} />
        </div>

        <TreeNode data={node} />
      </div>
    );
  }

  return (
    <div className={style.main}>
      <div className={style.titleWrapper}>
        <h1 onClick={() => setUpdate(!update)}>{treeName}</h1>

        <ModalCreate sendRequest={createTreeNode} id={id} />
      </div>

      {update && children.map((node) => titleNodeElements(node))}
    </div>
  );
};

export default TitlePage;
