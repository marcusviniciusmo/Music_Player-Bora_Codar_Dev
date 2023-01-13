import { useState } from "react";
import ImageFull from '../../assets/imageFull.png';
import ImageDefault from '../../assets/imageDefault.png';
import ImageShort from '../../assets/imageShort.png';
import ArrowPrev from '../../assets/arrowPrev.png';
import Play from '../../assets/play.png';
import ArrowNext from '../../assets/arrowNext.png';
import { PlayerFull } from "../PlayerFull";
import { PlayerDefault } from "../PlayerDefault";
import { PlayerShort } from "../PlayerShort";
import { Container } from "../../styles/Player";
import { PlayerMocks } from "../../types/Player";

export function Player() {
  const [idPlayer, setIdPlayer] = useState<string>('default');
  const [imageMusic, setImageMusic] = useState<string>(ImageDefault);

  const music: PlayerMocks = {
    musicInfo: {
      image: imageMusic,
      title: 'Acorda Devinho',
      singer: 'Banda Rocketseat',
      controls: [
        {
          prev: ArrowPrev,
          title: 'Previous'
        },
        {
          play: Play,
          title: 'Play',
        },
        {
          next: ArrowNext,
          title: 'Next'
        }
      ],
      time: {
        current: '03:20',
        remain: '00:12'
      }
    }
  };

  const showPlayer = (e: any) => {
    const id = e.target.value;

    setIdPlayer(id);
    setImageOfMusic(id);
  };

  const setImageOfMusic = (id: string) => {
    switch (id) {
      case 'full':
        setImageMusic(ImageFull);
        break;
      case 'default':
        setImageMusic(ImageDefault);
        break;
      case 'short':
        setImageMusic(ImageShort);
        break;
    };
  };

  return (
    <>
      <button value='full' onClick={showPlayer}>full version</button>
      <button value='default' onClick={showPlayer}>default version</button>
      <button value='short' onClick={showPlayer}>short version</button>

      <Container>
        {
          idPlayer === 'full' &&
          <PlayerFull className={idPlayer} music={music} />
        }
        {
          idPlayer === 'default' &&
          <PlayerDefault className={idPlayer} music={music} />
        }
        {
          idPlayer === 'short' &&
          <PlayerShort className={idPlayer} music={music} />
        }
      </Container>
    </>
  );
};