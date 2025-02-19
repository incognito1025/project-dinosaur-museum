/*
  Do not change the lines below. If you'd like to run code from this file, you may use the `exampleDinosaurData` and `exampleRoomData` variables below to gain access to each data set. This data is pulled from the relevant files in the `data/` directory.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.
*/
const exampleDinosaurData = require("../data/dinosaurs");
const exampleRoomData = require("../data/rooms");
// Do not change the lines above.

/**
 * getRoomByDinosaurName()
 * ---------------------
 * Return the name of the room where the given dinosaur can be found. If the dinosaur does not exist in the `dinosaurs` list or cannot be found in any room, return an error message that says so.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {Object[]} rooms - An array of room objects. See the `data/rooms.js` file for an example of the input.
 * @param {string} dinosaurName - The name of the dinosaur.
 * @returns {string} The name of the room where the dinosaur can be found. Alternatively, an error message.
 *
 * EXAMPLE:
 *  getRoomByDinosaurName(dinosaurs, rooms, "Tyrannosaurus");
 *  //> "Roberts Room"
 *
 * Raz's solution: 
 * function getRoomByDinosaurName(dinosaurs, rooms, dinosaurName) {
 * 1. find the dino by its name
 * const dino = dinosaurs.find(dinosaur => dinosaur.name === dinosaurName)
 * 2. find the room that has the dino in the dinosaur array
 * const myRoom = rooms.find(room => room.dinosaurs.includes(dino.dinosaurId));
 * 
 * if (!myRoom) return `
 * return myRoom.name `Dinosaur with name '${dinosaurId}' cannot be found.
 * }
 * 
 * EXAMPLE:
 *  getRoomByDinosaurName(dinosaurs, rooms, "Pterodactyl");
 *  //> "Dinosaur with name 'Pterodactyl' cannot be found."
 */ // Had help with this function. Didn't complete by myself.


function getRoomByDinosaurName(dinosaurs, rooms, dinosaurName) {
  for (let i = 0; i < dinosaurs.length; i++) {
  if (dinosaurs[i].name === dinosaurName) {
    for (let j = 0; j < rooms.length; j++) {
      if (rooms[j].dinosaurs.includes(dinosaurs[i].dinosaurId)) {
        return rooms[j].name;
      }
    }
    return `Dinosaur with name '${dinosaurName}' cannot be found in any rooms.`;
  }
}
return `Dinosaur with name '${dinosaurName}' cannot be found.`;
};
  


/**
 * getConnectedRoomNamesById()
 * ---------------------
 * Returns an array of strings, where each string is the name of a room connected to the given room. If a room ID cannot be found, an error message is returned.
 *
 * @param {Object[]} rooms - An array of room objects. See the `data/rooms.js` file for an example of the input.
 * @param {string} id - A unique room identifier.
 * @returns {string|string[]} An array of room names, or an error message.
 *
 * EXAMPLE:
 *  getConnectedRoomNamesById(rooms, "aIA6tevTne");
 *  //> ["Ticket Center"]
 *
 * EXAMPLE:
 *  getConnectedRoomNamesById(rooms, "A6QaYdyKra");
 *  //> [
      "Entrance Room",
      "Coat Check Room",
      "Ellis Family Hall",
      "Kit Hopkins Education Wing"
    ]
Raz solution:
function functionName(rooms, id) {
  const myRoom = rooms.find(room => room.roomId === id);

  if (!myRoom) return `Room with ID of '${id}' could not be found.`;

  const filteredRooms = rooms.filter(room => myRoom.connectsTi.includes(room.roomId.map(room => room.name);

  myRoom.connectsTo

}

 */
//Had help with this function.  Didn't solve by myself.
function getConnectedRoomNamesById(rooms, id) {
  for (let i = 0; i < rooms.length; i++) {
    if (rooms[i].roomId === id) {
      const connectedRoomNames = [];
      for (let j = 0; j < rooms[i].connectsTo.length; j++) {
        const connectedRoom = rooms.find((r) => r.roomId === rooms[i].connectsTo[j]);
        if (connectedRoom) {
          connectedRoomNames.push(connectedRoom.name);
        } else {
          return `Room with ID of '${rooms[i].connectsTo[j]}' could not be found.`;
        }
      }
      return connectedRoomNames;
    }
  }
  return `Room with ID of '${id}' could not be found.`;
}

module.exports = {
  getRoomByDinosaurName,
  getConnectedRoomNamesById,
};
