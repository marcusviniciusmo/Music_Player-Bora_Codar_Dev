export interface PlayerMocks {
  musicInfo: {
    image: string;
    title: string;
    singer: string;
    controls: [
      {
        prev: string;
        title: string;
      },
      {
        play: string;
        title: string;
      },
      {
        next: string
        title: string;
      }
    ],
    time: {
      current: number;
      remain: number;
    }
  }
};

export interface PlayerProps {
  className: string;
  music: PlayerMocks;
};