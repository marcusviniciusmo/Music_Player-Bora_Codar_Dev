import { PlayerFull } from "../PlayerFull";
import { PlayerDefault } from "../PlayerDefault";
import { PlayerShort } from "../PlayerShort";

export function Player() {
  return (
    <>
      <h1>PLAYER Component</h1>

      <PlayerFull/>

      <PlayerDefault />

      <PlayerShort />
    </>
  );
};