import { Command, Position, Direction } from "../src/rover";

export const initialPosition = { x: 0, y: 0 } as Position;

export const initialDirection = Direction.north;

export const route = [
	Command.forward,
	Command.right,
	Command.forward,
	Command.right,
	Command.forward,
	Command.left,
	Command.left,
	Command.forward,
	Command.forward,
	Command.right,
	Command.backward,
	Command.backward,
	Command.left,
	Command.forward,
	Command.left,
	Command.forward
];
