
let set1 = [3, 1, 7, 9];
let set2 = [2, 4, 1, 9, 3];

function sumOfDistElements(set1, set2) {

    // initialise the Elements
  let sum = 0;

  // Add elements from set1 that is not not in set2
  for (let x = 0; x < set1.length; x++) {
      if (!set2.includes(set1[x])) {
          sum += set1[x];
      }
  }

  // Add elements from set2 that is not not in set1
  for (let y = 0; y < set2.length; y++) {
      if (!set1.includes(set2[y])) {
          sum += set2[y];
      }
    }
    


  return sum;
}



let sum= sumOfDistElements(set1, set2);
