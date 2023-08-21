import React from "react";

const ChatBar = (props) => {
  const [state, setState] = React.useState([
    { id: 1, image: "/images/female1.jpg", name: "Ava" },
    { id: 2, image: "/images/male1.jpg", name: "Liam" },
    { id: 3, image: "/images/female3.jpg", name: "Emma" },
    { id: 4, image: "/images/male3.jpg", name: "Max" },
    { id: 5, image: "/images/male2.jpg", name: "Owen" },
    { id: 6, image: "/images/male6.jpg", name: "Cole" },
    { id: 6, image: "/images/female5.jpg", name: "Ruby" },
    { id: 7, image: "/images/male5.jpg", name: "Evan" },
    { id: 8, image: "/images/female4.jpg", name: "Zoe" },
    { id: 9, image: "/images/male4.jpg", name: "Finn" },
    { id: 10, image: "/images/female2.jpg", name: "Lily" },
  ]);
  const openChat = (user) => {
    props.openChat(user);
  };
  return (
    <div className="chatBar">
      {state.map((user) => (
        <div
          className="chatBar__list"
          key={user.id}
          onClick={() => openChat(user)}
        >
          <div className="chatBar__list-img">
            <img src={user.image} alt="user" />
            <span className="status"></span>
          </div>
          <div className="chatBar__list-name">{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatBar;
