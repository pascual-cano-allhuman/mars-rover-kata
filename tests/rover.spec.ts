import { getRoverFinalPosition, Position, Direction, Command } from "../src/rover";

describe("Rover Kata tests", () => {
	it("goes to 1,2 when moving north from 1,1", () => {
		const position = { x: 1, y: 1 } as Position;
		const direction = Direction.north;
		const commands = [Command.forward];
		const newPosition = getRoverFinalPosition(position, direction, commands);
		expect(newPosition).toEqual({ x: 1, y: 2 });
	});
});
