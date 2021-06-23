import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startGame } from "app/redux/actions/actions";
import { useState } from "react";
import useMediaQuery from "react-use-media-query-hook";
import { usernameArray } from "./usernameArray";

const Landing = () => {
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState(usernameArray[0]?.name);
  const isMobile = useMediaQuery("(max-width: 400px)");
  return (
    <>
      <div className="landing-page-wrapper">
        <h1>Hello! Shall we test your memory?</h1>
        <h2>Select your character</h2>
        <div className="select-wrapper">
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
        </div>
        <Link
          onClick={() => {
            // start game with number of cards depending on screen size
            dispatch(startGame(isMobile ? 5 : 10));
          }}
          to={{
            pathname: `/memory-game`,
            state: {
              selectedUser: selectedUser,
            },
          }}
        >
          <h1>Play!</h1>
        </Link>
      </div>
    </>
  );
};

export default Landing;
