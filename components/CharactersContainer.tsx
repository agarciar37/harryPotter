import { FunctionComponent } from "preact";
import CharacterCard from "./CharacterCard.tsx";

type Character = {
  name: string;
  image: string;
  house: string;
  id: string;
};

type Props = {
  characters: Character[];
};

const CharactersContaniner: FunctionComponent<Props> = (props) => {
    const characters = props.characters;

    return (
        <div class="CharactersContainer">
            {characters.map((character) => (
                <CharacterCard character={character} />
            ))}
        </div>
    )
}

export default CharactersContaniner;