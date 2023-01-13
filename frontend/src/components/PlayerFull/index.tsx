import { PlayerProps } from '../../types/Player';
import * as Styles from '../../styles/Player';

export function PlayerFull(props: PlayerProps) {
  return (
    <Styles.Content className={props.className}>
      <Styles.Image src={props.music.musicInfo.image} />

      <Styles.InfoMusic className={props.className}>
        <Styles.Title>{props.music.musicInfo.title}</Styles.Title>

        <Styles.Singer>{props.music.musicInfo.singer}</Styles.Singer>
      </Styles.InfoMusic>

      <Styles.Controls>
        <Styles.Prev
          src={props.music.musicInfo.controls[0].prev}
          title={props.music.musicInfo.controls[0].title}
        />

        <Styles.Play
          src={props.music.musicInfo.controls[1].play}
          title={props.music.musicInfo.controls[1].title}
        />

        <Styles.Next
          src={props.music.musicInfo.controls[2].next}
          title={props.music.musicInfo.controls[2].title}
        />
      </Styles.Controls>

      <Styles.TrackTime>
        <Styles.Progress />
        <Styles.Time className={props.className}>
          <Styles.CurrentTime>
            {props.music.musicInfo.time.current}
          </Styles.CurrentTime>

          <Styles.RemainTime>
            {props.music.musicInfo.time.remain}
          </Styles.RemainTime>
        </Styles.Time>
      </Styles.TrackTime>
    </Styles.Content>
  );
};