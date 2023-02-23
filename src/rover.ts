export enum Direction {
	north = "north",
	south = "south",
	east = "east",
	west = "west"
}

export enum Command {
	forward = "forward",
	backward = "backward",
	right = "right",
	left = "left"
}

export type Position = {
	x: 0 | 1 | 2 | 3 | 4;
	y: 0 | 1 | 2 | 3 | 4;
};

const OBSTACLE_COORDS = [
	[0, 0, 1, 0, 0],
	[1, 0, 0, 0, 1],
	[1, 0, 0, 1, 0],
	[0, 0, 0, 0, 1],
	[0, 1, 0, 1, 0]
];

export const isThereObstacle = (position: Position): boolean => {
	return OBSTACLE_COORDS[position.x][position.y] === 1;
};

export const getRoverFinalPosition = (position: Position, direction: Direction, commands: Command[]): Position | null => {
	let currentPosition = position;
	let currentDirection = direction;
	commands.forEach(command => {
		switch (command) {
			case Command.forward:
			case Command.backward:
				currentPosition = moveForwardOrBackward(currentPosition, currentDirection, command);
				break;
		}
	});
	return currentPosition;
};

export const moveForwardOrBackward = (position: Position, direction: Direction, command: Command): Position => {
	const actualDirection = command === Command.forward ? direction : getOppositeDirection(direction);
	const { x, y } = position;
	switch (actualDirection) {
		case Direction.north:
			return { x, y: y + 1 } as Position;
		case Direction.south:
			return { x, y: y - 1 } as Position;
		case Direction.west:
			return { x: x - 1, y } as Position;
		case Direction.east:
			return { x: x + 1, y } as Position;
		default:
			return position;
	}
};

const getOppositeDirection = (direction: Direction): Direction => {
	switch (direction) {
		case Direction.north:
			return Direction.south;
		case Direction.south:
			return Direction.north;
		case Direction.west:
			return Direction.east;
		case Direction.east:
			return Direction.west;
		default:
			return direction;
	}
};
