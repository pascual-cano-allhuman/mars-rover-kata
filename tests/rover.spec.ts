import { getRoverFinalPosition, Position, Direction, Command } from "../src/rover";

describe("Rover Kata tests", () => {
	it("Dummy test", () => {
		const position = { x: 0, y: 0 } as Position;
		const direction = Direction.north;
		const commands = [Command.forward];
		const newPosition = getRoverFinalPosition(position, direction, commands);
		expect(true).toBe(true);
	});
});
