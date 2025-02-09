import React from "react";
import { friends } from "./f";
import { FaCircle } from "react-icons/fa";

const FriendsList = () => {
  return (
    <ul className="friend-list">
      {/* <!-- Довільна кіл-сть FriendListItem --> */}
      {friends.map((friend, i) => {
        let avatarSRC = friend.avatar;
        let nameText = friend.name;
        let online = friend.isOnline;

        return (
          <li className="item" key={i}>
            <span className="status">
              {online ? <FaCircle style={{color: "#49b04c"}}/> : <FaCircle style={{color: "#fe5053"}}/>}
            </span>
            <img className="avatar" src={avatarSRC} alt="User avatar" width="48" />
            <p className="name">{nameText}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default FriendsList;
