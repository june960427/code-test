// # 백준 큐2

function processCommands(commands) {
  const queue = [];
  const results = [];

  commands.forEach((command) => {
    const [cmd, value] = command.split(" ");

    switch (cmd) {
      case "push":
        queue.push(Number(value));
        break;
      case "pop":
        results.push(queue.length ? queue.shift() : -1);
        break;
      case "size":
        results.push(queue.length);
        break;
      case "empty":
        results.push(queue.length === 0 ? 1 : 0);
        break;
      case "front":
        results.push(queue.length ? queue[0] : -1);
        break;
      case "back":
        results.push(queue.length ? queue[queue.length - 1] : -1);
        break;
    }
  });

  return results.join("\n");
}

// # 다리를 지나는 트럭

function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let bridge_queue = [];
  let total_weight_on_bridge = 0;

  while (truck_weights.length > 0 || bridge_queue.length > 0) {
    time++;

    if (bridge_queue.length > 0 && bridge_queue[0].time === time) {
      const truck = bridge_queue.shift();
      total_weight_on_bridge -= truck.weight;
    }

    if (
      truck_weights.length > 0 &&
      total_weight_on_bridge + truck_weights[0] <= weight
    ) {
      const next_truck_weight = truck_weights.shift();
      bridge_queue.push({
        weight: next_truck_weight,
        time: time + bridge_length,
      });
      total_weight_on_bridge += next_truck_weight;
    }
  }

  return time;
}
