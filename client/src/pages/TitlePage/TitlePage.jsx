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
    console.log(res.status);
  };

  const updateTreeNode = async (id, inputValue) => {
    const res = await axios.post(
      `https://test.vmarmysh.com/api.user.tree.node.rename?treeName=${treeName}&nodeId=${id}&newNodeName=${inputValue}`
    );
    console.log(res.status);
  };

  const deleteTreeNode = async (id) => {
    const res = await axios.post(
      `https://test.vmarmysh.com/api.user.tree.node.delete?treeName=${treeName}&nodeId=${id}`
    );
    console.log(res.status);
  };

  useEffect(() => {
    getAllTree();
  }, []);

  const renderChildren = (children) => {
    if (children.length === 0 || !children) {
      return null;
    }

    return (
      <ul>
        {children.map((el) => (
          <li key={el.id}>
            <span>
              {el.name}
              <div className={style.modalWrapper}>
                <ModalCreate sendRequest={createTreeNode} id={el.id} />
                <ModalUpdate sendRequest={updateTreeNode} id={el.id} />
                <ModalDelete sendRequest={deleteTreeNode} name={el.name} id={el.id} />
              </div>
            </span>
            {renderChildren(el.children)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={style.main}>
      <div className={style.titleWrapper}>
        <h1>{treeName}</h1>
        <div className={style.modalWrapper}>
          <ModalCreate sendRequest={createTreeNode} id={id} />
        </div>
      </div>
      {renderChildren(children)}
    </div>
  );
};

export default TitlePage;
