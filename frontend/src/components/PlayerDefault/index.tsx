import { ConvertSecondsToMinutes } from '../../utils/Functions';
import { PlayerProps } from '../../types/Player';
import * as Styles from '../../styles/Player';

export function PlayerDefault(props: PlayerProps) {
  const currentTime = props.music.musicInfo.time.current;
  const remainTime = props.music.musicInfo.time.remain;
  const totalTime = currentTime + remainTime;

  return (
    <Styles.Content className={props.className}>
      <Styles.InfoArea>
        <Styles.Image src={props.music.musicInfo.image} />

        <Styles.InfoMusic>
          <Styles.Title>{props.music.musicInfo.title}</Styles.Title>

          <Styles.Singer>{props.music.musicInfo.singer}</Styles.Singer>
        </Styles.InfoMusic>
      </Styles.InfoArea>

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
        <Styles.Progress
          current={currentTime}
          total={totalTime}
        />
        <Styles.Time className={props.className}>
          <Styles.CurrentTime>
            {ConvertSecondsToMinutes(props.music.musicInfo.time.current)}
          </Styles.CurrentTime>

          <Styles.RemainTime>
            {ConvertSecondsToMinutes(props.music.musicInfo.time.remain)}
          </Styles.RemainTime>
        </Styles.Time>
      </Styles.TrackTime>
    </Styles.Content>
  );
};