import { useState, FormEvent, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PlayerTable } from "./PlayerTable";
import axios from "./../utils/axios";

type PropsType = {
  isLoading: Function;
};

interface Player {
  name: string;
  guild: string;
  alliance: string;
  pvpFame: number;
  ratio: number;
  id: string;
}

export function Search(props: PropsType) {
  const navigate = useNavigate();

  const { name } = useParams<{ name: string }>();

  const [players, setPlayers] = useState<Player[]>([]);
  const [showError, setShowError] = useState(false);
  const [searchName, setSearchName] = useState("");

  const handleForm = (event: FormEvent) => {
    event.preventDefault();
    setShowError(false);
    if (searchName) {
      navigate(`/name/${searchName}`);
      parseData(searchName);
    }
  };

  const parseData = async (name: string) => {
    try {
      props.isLoading(true);
      const response = await axios.get(`/name/${name}`);

      response.data.length != 0
        ? setPlayers(response.data)
        : setShowError(true);
    } catch (error) {
      console.log(error);
    } finally {
      props.isLoading(false);
    }
  };

  useEffect(() => {
    if (name) {
      parseData(name);
      setSearchName(name)
    } else {
      navigate('/')
    }
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <form className="w-full flex justify-center" onSubmit={handleForm}>
        <input
          type="text"
          className="w-full md:w-[45%] h-9 pl-4 text-gray-700"
          placeholder="TYPE AN USERNAME TO SEARCH"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button
          type="submit"
          className="w-[15%] md:w-[5%] h-9 bg-orange-500 text-[1.3rem]"
        >
          GO!
        </button>
      </form>
      <div>
        {showError && (
          <p className="mt-2 text-orange-500 text-[1.3rem]">
            NO PLAYERS WHERE FOUND WITH THIS USERNAME, TRY AGAIN!
          </p>
        )}
      </div>
      {players.length != 0 && <PlayerTable players={players} />}
    </div>
  );
}
