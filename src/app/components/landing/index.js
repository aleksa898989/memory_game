import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startGame } from "app/redux/actions/actions";
import { useState } from "react";

const Landing = () => {
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState("");
  const usernameArray = [
    { name: "Pera", id: 1 },
    { name: "Mika", id: 2 },
    { name: "Zika", id: 3 },
  ];

  return (
    <>
      <div>
        <h1>Hello! Let me test your memory?</h1>
        <select
          onChange={(e) => {
            setSelectedUser(e.target.value);
          }}
        >
          {usernameArray.map((user) => {
            return (
              <option value={user.name} key={user.id}>
                {user.name}
              </option>
            );
          })}
        </select>
        <Link
          to={{
            pathname: `/memory-game`,
            state: {
              selectedUser: selectedUser,
            },
          }}
        >
          <h6
            onClick={() => {
              dispatch(startGame(5));
            }}
          >
            Play!
          </h6>
        </Link>
      </div>
    </>
  );
};

export default Landing;
