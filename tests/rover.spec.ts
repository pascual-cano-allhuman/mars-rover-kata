import { getRoverFinalPosition, Position, Direction, Command } from "../src/rover";
const Rover = require("../src/rover");

describe("Rover Kata tests", () => {
	const position = { x: 1, y: 1 } as Position;
	const direction = Direction.north;

	it("goes to 1,2 when moving north from 1,1", () => {
		const commands = [Command.forward];
		const newPosition = getRoverFinalPosition(position, direction, commands);
		expect(newPosition).toEqual({ x: 1, y: 2 });
	});

	it("makes use of moveForwardOrBackward for move commands", () => {
		const jestSpy = jest.spyOn(Rover, "moveForwardOrBackward");
		const commands = [Command.forward, Command.backward];
		getRoverFinalPosition(position, direction, commands);
		expect(jestSpy).toHaveBeenCalledTimes(2);
	});
});
