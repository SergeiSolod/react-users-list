import { FC, useEffect, useState } from "react";
import { useSelectorHook } from "modules/UserList/hooks/useSelectorHook";
import { useActions } from "modules/UserList/hooks/useActions";
import { filterUsers } from "modules/UserList/hooks/useFilter";
import Input from "kit/input/Input";
import UserBlock from "modules/UserList/components/userBlock/UserBlock";
import Modal from "kit/modal/Modal";
import Preloader from "kit/preloader/Preloader";
import Button from "kit/button/Button";
import Message from "kit/message/Message";
import "./UserPage.scss";

const UserPage: FC = () => {
  const { users, error, loading, info } = useSelectorHook(
    (state) => state.user,
  );

  const [searchText, setSearchText] = useState("");
  const [userList, setUserList] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalId, setModalId] = useState(0);

  const { fetchUsers, deleteUser, resetUsers, closeInfo } = useActions();

  const openModal = (id: number) => {
    setModal(true);
    setModalId(id);
  };

  const closeModal = () => {
    setModal(false);
  };

  // deleting a user
  const deleteUserModal = () => {
    deleteUser(modalId);
    setModal(false);
  };

  // delay when entering text in the search bar
  useEffect(() => {
    const Debouce = setTimeout(() => {
      // filtering the desired users through a hook
      const filteredUsers = filterUsers(searchText, users);
      setUserList(filteredUsers);
    }, 300);

    return () => clearTimeout(Debouce);
  }, [searchText]);

  // request to the server during initialization
  useEffect(() => {
    fetchUsers();
  }, []);

  // check if users are loaded
  useEffect(() => {
    setUserList(users);
  }, [users]);

  return (
    <div className={"user-page-wrapper"}>
      <div className={"user-page-content"}>
        <Preloader loading={loading} />

        <Message
          id="message"
          isError={true}
          show={error}
          title={error}
          onAccept={closeInfo}
        />

        <Message
          id="message"
          isError={false}
          show={info}
          title={info}
          onAccept={closeInfo}
        />

        <Modal
          id="delete"
          title={"Are you sure?"}
          buttonTextOk={"Delete"}
          buttonTextCancel={"Cancel"}
          show={modal}
          onAccept={deleteUserModal}
          onCancel={closeModal}
        />

        <div className={"user-page-input-wrapper"}>
          <Input
            id="searchText"
            value={searchText}
            label="Search"
            length={50}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSearchText(e);
            }}
            description="Find user"
          />
        </div>

        <div>
          {userList.map((user) => (
            <UserBlock key={user.id} user={user} openModal={openModal} />
          ))}
          <div className={"user-page-reset-wrapper"}>
            <Button
              onClick={resetUsers}
              description={"Click to reset user list"}
            >
              Reset
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
