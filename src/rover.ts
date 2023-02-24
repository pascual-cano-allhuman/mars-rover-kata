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

export const getRoverFinalPosition = (position: Position, direction: Direction, commands: Command[]): Position => {
	let currentPosition = position;
	let currentDirection = direction;
	commands.forEach(command => {
		currentPosition = move(currentPosition, direction, command);
	});
	return currentPosition;
};

export const move = (currentPosition: Position, direction: Direction, command: Command) => {
	const { x, y } = currentPosition;
	switch (direction) {
		case Direction.north:
			currentPosition = { x, y: y + 1 } as Position;
			break;
		case Direction.south:
			currentPosition = { x, y: y - 1 } as Position;
			break;
	}
	return currentPosition;
};
