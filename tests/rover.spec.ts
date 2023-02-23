import { getRoverFinalPosition, Position, Direction, Command, moveForwardOrBackward } from "../src/rover";
const Rover = require("../src/rover");

describe("Sequence of commands", () => {
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

describe("Movement commands", () => {
	const position = { x: 1, y: 1 } as Position;

	it("goes to 1,2 when moving north from 1,1", () => {
		const newPosition = moveForwardOrBackward(position, Direction.north, Command.forward);
		expect(newPosition).toEqual({ x: 1, y: 2 });
	});

	it("goes to 1,0 when moving south from 1,1", () => {
		const newPosition = moveForwardOrBackward(position, Direction.south, Command.forward);
		expect(newPosition).toEqual({ x: 1, y: 0 });
	});
});
