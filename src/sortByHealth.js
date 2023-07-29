export default function sortByHealth(playerList) {
  return playerList.sort((a, b) => b.health - a.health);
}
