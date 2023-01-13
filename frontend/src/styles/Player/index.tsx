import styled from 'styled-components';

export const Layout = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  position: absolute;
  inset: 50%;
  transform: translateY(-50%);
  transform: translateX(-50%);
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const Button = styled.button`
  background: var(--color-primary);
  color: var(--color-secondary);
  font-size: 1.5rem;
  text-transform: uppercase;
  border: 0.5rem solid var(--border-color);
  width: 20rem;
  height: 6rem;
  cursor: pointer;

  &:hover {
    font-weight: 700;
  }
`;

export const Container = styled.div`
  border-block: 3rem solid var(--border-color);
  border-inline: 0.1rem solid var(--border-color);
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  width: 60rem;
  height: 60rem;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

export const Content = styled.div`
  background: var(--color-primary);
  border-radius: 1rem;
  width: 35.7rem;
  height: 10rem;
  display: flex;
  padding: 2.8rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.8rem;
  box-sizing: border-box;

  &.full {
    width: 26.6rem;
    height: 49.8rem;
    padding: 3.8rem;
  }

  &.default {
    height: 26.6rem;
  }

  &.short {
    height: 19.9rem;
  }

  &:hover {
    box-shadow: 0.1rem 0.1rem 0.5rem var(--color-secondary);
  }
`;

export const InfoArea = styled.div`
  width: 30rem;
  height: 8.4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2.8rem;
`;

export const Image = styled.img``;

export const InfoMusic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 18.7rem;
  height: 5.2rem;

  &.full {
    width: 18.9rem;
    align-self: stretch;
  }
`;

export const Title = styled.span`
  font-size: 2.4rem;
  font-weight: 700;
`;

export const Singer = styled.span`
  font-size: 1.9rem;
  opacity: 0.7;
`;

export const Controls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  cursor: pointer;
`;

export const Prev = styled.img`
  &:hover {
    transform: scale(0.8);
  }
`;

export const Play = styled.img`
  &:hover {
    transform: scale(0.8);
  }
`;

export const Next = styled.img`
  &:hover {
    transform: scale(0.8);
  }
`;

export const TrackTime = styled.div``;

export const Progress = styled.div`
  position: relative;

  &::before {
    content: '';
    background: var(--progress-music-color);
    border-radius: 1rem;
    width: 100%;
    height: 0.6rem;
    display: block;
    position: absolute;
    opacity: 0.3;
  }

  &::after {
    content: '';
    background: var(--progress-music-color);
    border-radius: 1rem;
    width: 80%;
    height: 0.6rem;
    display: block;
    position: absolute;
    opacity: 0.8;
  }
`;

export const Time = styled.div`
  height: 2.3rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  align-self: stretch;
  justify-content: space-between;
  gap: 1rem;

  &.full {
    width: 18.9rem;
  }

  &.default {
    width: 30rem;
  }
`;

export const CurrentTime = styled.div`
  font-size: 1.4rem;
  opacity: 0.7;
`;

export const RemainTime = styled.div`
  font-size: 1.4rem;
  opacity: 0.7;
`;