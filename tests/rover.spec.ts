import { getRoverFinalPosition, move, Position, Direction, Command } from "../src/rover";
import * as Rover from "../src/rover";

describe("Sequence of commands", () => {
	it("goes to 1,2 when moving north once from 1,1", () => {
		const position = { x: 1, y: 1 } as Position;
		const direction = Direction.north;
		const commands = [Command.forward];
		const newPosition = getRoverFinalPosition(position, direction, commands);
		expect(newPosition).toEqual({ x: 1, y: 2 });
	});
	it("goes to 1,0 when moving south once from 1,1", () => {
		const position = { x: 1, y: 1 } as Position;
		const direction = Direction.south;
		const commands = [Command.forward];
		const newPosition = getRoverFinalPosition(position, direction, commands);
		expect(newPosition).toEqual({ x: 1, y: 0 });
	});
	it("goes to 1,3 when moving north twice from 1,1", () => {
		const position = { x: 1, y: 1 } as Position;
		const direction = Direction.north;
		const commands = [Command.forward, Command.forward];
		const newPosition = getRoverFinalPosition(position, direction, commands);
		expect(newPosition).toEqual({ x: 1, y: 3 });
	});
	it("check that move has been called", () => {
		const jestSpy = jest.spyOn(Rover, "move");
		const position = { x: 1, y: 1 } as Position;
		const direction = Direction.north;
		const commands = [Command.forward, Command.forward];
		getRoverFinalPosition(position, direction, commands);
		expect(jestSpy).toHaveBeenCalledTimes(2);
	});
});

describe("Moving forward", () => {
	const position = { x: 1, y: 1 } as Position;
	it("goes to 1,2 when moving north from 1,1", () => {
		const direction = Direction.north;
		const newPosition = move(position, direction, Command.forward);
		expect(newPosition).toEqual({ x: 1, y: 2 });
	});
	it("goes to 1,0 when moving south from 1,1", () => {
		const direction = Direction.south;
		const newPosition = move(position, direction, Command.forward);
		expect(newPosition).toEqual({ x: 1, y: 0 });
	});
	it("goes to 2,1 when moving east from 1,1", () => {
		const direction = Direction.east;
		const newPosition = move(position, direction, Command.forward);
		expect(newPosition).toEqual({ x: 2, y: 1 });
	});
	it("goes to 0,1 when moving west from 1,1", () => {
		const direction = Direction.west;
		const newPosition = move(position, direction, Command.forward);
		expect(newPosition).toEqual({ x: 0, y: 1 });
	});
});

describe("Moving backward", () => {
	const position = { x: 1, y: 1 } as Position;
	it("goes to 1,0 when moving north from 1,1", () => {
		const direction = Direction.north;
		const newPosition = move(position, direction, Command.backward);
		expect(newPosition).toEqual({ x: 1, y: 0 });
	});
	it("goes to 1,2 when moving south from 1,1", () => {
		const direction = Direction.south;
		const newPosition = move(position, direction, Command.backward);
		expect(newPosition).toEqual({ x: 1, y: 2 });
	});
	it("goes to 0,1 when moving east from 1,1", () => {
		const direction = Direction.east;
		const newPosition = move(position, direction, Command.backward);
		expect(newPosition).toEqual({ x: 0, y: 1 });
	});
	it("goes to 2,1 when moving west from 1,1", () => {
		const direction = Direction.west;
		const newPosition = move(position, direction, Command.backward);
		expect(newPosition).toEqual({ x: 2, y: 1 });
	});
});

describe("Moving off the limits of the map", () => {
	it("goes to 0,0 when moving north from 0,4", () => {
		const position = { x: 0, y: 4 } as Position;
		const newPosition = move(position, Direction.north, Command.forward);
		expect(newPosition).toEqual({ x: 0, y: 0 });
	});
	it("goes to 0,4 when moving south from 0,0", () => {
		const position = { x: 0, y: 0 } as Position;
		const newPosition = move(position, Direction.south, Command.forward);
		expect(newPosition).toEqual({ x: 0, y: 4 });
	});
	it("goes to 0,0 when moving east from 4,0", () => {
		const position = { x: 4, y: 0 } as Position;
		const newPosition = move(position, Direction.east, Command.forward);
		expect(newPosition).toEqual({ x: 0, y: 0 });
	});
	it("goes to 4,0 when moving west from 0,0", () => {
		const position = { x: 0, y: 0 } as Position;
		const newPosition = move(position, Direction.west, Command.forward);
		expect(newPosition).toEqual({ x: 4, y: 0 });
	});
});
