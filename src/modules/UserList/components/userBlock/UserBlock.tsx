import { FC, useState } from "react";
import { IUserBlock } from "modules/UserList/types/user";
import Accordion from "kit/accordion/Accordion";
import Button from "kit/button/Button";
import "./UserBlock.scss";

const UserBlock: FC<IUserBlock> = (props) => {
  const { user, openModal = () => {} } = props;

  const [selectedId, setSelectedId] = useState(null);

  // needed to open the accordion
  const handleSelectedId = (id: number) => {
    if (id === selectedId) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
    }
  };

  return (
    <div className={"user-block-wrapper"} key={user.id}>
      <div className={"user-block-accordion-wrapper"}>
        <Accordion
          id={user.id}
          selectedId={selectedId}
          handleSelectedId={handleSelectedId}
          title={
            "Name: " +
            user.name +
            "; Username: " +
            user.username +
            "; Email: " +
            user.email
          }
          text={
            "Address: " +
            user.address.city +
            " " +
            user.address.street +
            "; Company: " +
            user.company.name
          }
          color={"#0f0f0f0"}
          isRoot={false}
          hasChildren={false}
          key={user.id}
        />
      </div>
      <div className={"user-block-button-wrapper"}>
        <Button
          onClick={() => {
            openModal(user.id);
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default UserBlock;
