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

describe("Forward movement commands", () => {
	const position = { x: 1, y: 1 } as Position;

	it("goes to 1,2 when moving north from 1,1", () => {
		const newPosition = moveForwardOrBackward(position, Direction.north, Command.forward);
		expect(newPosition).toEqual({ x: 1, y: 2 });
	});

	it("goes to 1,0 when moving south from 1,1", () => {
		const newPosition = moveForwardOrBackward(position, Direction.south, Command.forward);
		expect(newPosition).toEqual({ x: 1, y: 0 });
	});

	it("goes to 0,1 when moving west from 1,1", () => {
		const newPosition = moveForwardOrBackward(position, Direction.west, Command.forward);
		expect(newPosition).toEqual({ x: 0, y: 1 });
	});

	it("goes to 2,1 when moving west from 1,1", () => {
		const newPosition = moveForwardOrBackward(position, Direction.east, Command.forward);
		expect(newPosition).toEqual({ x: 2, y: 1 });
	});

	it("goes to 1,3 when moving east from 1,2", () => {
		const position = { x: 1, y: 2 } as Position;
		const newPosition = moveForwardOrBackward(position, Direction.north, Command.forward);
		expect(newPosition).toEqual({ x: 1, y: 3 });
	});
});

describe("Backward movement commands", () => {
	const position = { x: 1, y: 1 } as Position;

	it("goes to 1,0 when heading north from 1,1", () => {
		const newPosition = moveForwardOrBackward(position, Direction.north, Command.backward);
		expect(newPosition).toEqual({ x: 1, y: 0 });
	});

	it("goes to 1,2 when heading south from 1,1", () => {
		const newPosition = moveForwardOrBackward(position, Direction.south, Command.backward);
		expect(newPosition).toEqual({ x: 1, y: 2 });
	});

	it("goes to 2,1 when heading west from 1,1", () => {
		const newPosition = moveForwardOrBackward(position, Direction.west, Command.backward);
		expect(newPosition).toEqual({ x: 2, y: 1 });
	});

	it("goes to 0,1 when heading east from 1,1", () => {
		const newPosition = moveForwardOrBackward(position, Direction.east, Command.backward);
		expect(newPosition).toEqual({ x: 0, y: 1 });
	});
});

describe("Cross map limits movements", () => {
	it("goes to 0,0 when moving north from 0,4", () => {
		const position = { x: 0, y: 4 } as Position;
		const newPosition = moveForwardOrBackward(position, Direction.north, Command.forward);
		expect(newPosition).toEqual({ x: 0, y: 0 });
	});

	it("goes to 0,4 when moving south from 0,0", () => {
		const position = { x: 0, y: 0 } as Position;
		const newPosition = moveForwardOrBackward(position, Direction.south, Command.forward);
		expect(newPosition).toEqual({ x: 0, y: 4 });
	});

	it("goes to 4,0 when moving west from 0,0", () => {
		const position = { x: 0, y: 0 } as Position;
		const newPosition = moveForwardOrBackward(position, Direction.west, Command.forward);
		expect(newPosition).toEqual({ x: 4, y: 0 });
	});

	it("goes to 0,0 when moving east from 1,1", () => {
		const position = { x: 4, y: 0 } as Position;
		const newPosition = moveForwardOrBackward(position, Direction.east, Command.forward);
		expect(newPosition).toEqual({ x: 0, y: 0 });
	});
});
