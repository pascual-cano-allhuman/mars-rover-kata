import * as Rover from "../src/rover";
import { Command, Direction, getRoverFinalPosition, move, Position } from "../src/rover";

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

describe("Move commands", () => {
	const position = { x: 1, y: 1 } as Position;
	it("goes to 1,2 when moving forward north from 1,1", () => {
		const newPosition = move(position, Direction.north, Command.forward);
		expect(newPosition).toEqual({ x: 1, y: 2 });
	});
	it("goes to 1,0 when moving forward south from 1,1", () => {
		const newPosition = move(position, Direction.south, Command.forward);
		expect(newPosition).toEqual({ x: 1, y: 0 });
	});
	it("goes to 2,1 when moving forward east from 1,1", () => {
		const newPosition = move(position, Direction.east, Command.forward);
		expect(newPosition).toEqual({ x: 2, y: 1 });
	});
	it("goes to 0,1 when moving forward west from 1,1", () => {
		const newPosition = move(position, Direction.west, Command.forward);
		expect(newPosition).toEqual({ x: 0, y: 1 });
	});

	it("goes to 1,0 when moving backward to north from position 1,1", () => {
		const newPosition = move(position, Direction.north, Command.backward);
		expect(newPosition).toEqual({ x: 1, y: 0 });
	});

	it.skip("goes to 1,2 when moving backward to south from 1,1", () => {
		const newPosition = move(position, Direction.south, Command.backward);
		expect(newPosition).toEqual({ x: 1, y: 2 });
	});
});
