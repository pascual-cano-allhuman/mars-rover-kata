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

describe("Move commands", () => {
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
});
