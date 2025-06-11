import { FunctionalComponent } from "preact";

type Props = {
  character: {
    name: string;
    house: string;
    image: string;
  };
};

const CharacterCard: FunctionalComponent<Props> = ({ character }) => {
  const { name, house, image } = character;

  return (
    <div class="CharacterCard">
      <img src={image} alt={name} class="w-full h-48 object-cover rounded mb-2" />
      <h2 class="text-xl font-semibold">{name}</h2>
      <p class="text-gray-600">{house}</p>
    </div>
  );
};

export default CharacterCard;
