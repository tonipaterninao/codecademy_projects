// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Create P. aequor objects
function pAequorFactory(specimenNum, dna) {
  return {
    specimenNum,
    dna,
    mutate () {
      // select one base randomly
      const dnaIndex = Math.floor(Math.random() * 15);
      const base = this.dna[dnaIndex];

      // select one mutation randomly
      let mutation;
      do {
        mutation = returnRandBase();
      } while (mutation === base);

      // mutate the selected DNA base
      this.dna[dnaIndex] = mutation;
      
    },
    compareDNA (pAquor) {
      // compare each position
      let identical = 0;
      for (let i = 0 ; i < this.dna.length ; i++) {
        const thisBase = this.dna[i];
        const otherBase= pAquor.dna[i];
        if (thisBase === otherBase) { identical++; }
      }

      // // Show the two sequences
      // console.log(`${this.dna}`);
      // console.log(`${pAquor.dna}`);

      // compute percentage of identity (keep only two decimals)
      const identity = identical * 100 / this.dna.length;
      console.log(`Specimens ${this.specimenNum} and ${pAquor.specimenNum} have ${identity.toFixed(2)}% DNA in common.`);
      return identity;
    },

    willLikelySurvive () {
      // compute the number of GC
      const gcCount = this.dna.filter(base => base === 'G' || base === 'C');
      // compute the percentage of GC
      const gcPerc = gcCount.length * 100 / this.dna.length;

      return (gcPerc >= 60);
    },

    identify() {
      console.log(`Num. ${this.specimenNum}. Genome: ${this.dna.join('')}`)
    },

    complementStrand () {
      const complement = this.dna.map(base => {
        switch(base){
          case 'A': return 'T';
          case 'T': return 'A';
          case 'C': return 'G';
          case 'G': return 'C';
        }
      });
      return complement;
    }
      
  };
}

// Create a P. aequor specimen
const paequor1 = pAequorFactory(001, mockUpStrand());
const paequor2 = pAequorFactory(002, mockUpStrand());
paequor1.compareDNA(paequor2);

// Create 30 P. aequor objects that are likely to survive
const strongPaequor = [];
let numGenerator = 3
while (strongPaequor.length < 30) {
  let paequor = pAequorFactory(numGenerator, mockUpStrand());
  if (paequor.willLikelySurvive()) {
    strongPaequor.push(paequor); 
  } 
  numGenerator++
}

// console.log(`List of strong P. aequor specimens:`);
strongPaequor.forEach(paequor => paequor.identify());

// Find the two closest specimens

// identity matrix
let idMatrix = [];
for (let i = 0 ; i < strongPaequor.length ; i++){
  // The comparisons of paequor i against paequor j
  let matrixLine = [];
  let firstPaequor = strongPaequor[i];
  for (let j = 0 ; j < strongPaequor.length ; j++){
    if (i < j) {
      let secondPaequor = strongPaequor[j];
      matrixLine.push(firstPaequor.compareDNA(secondPaequor));
    } else {
      // ignore self comparison and inverse comparison
      matrixLine.push(0);
    }
  }
  idMatrix.push(matrixLine);
}

// Flatten the identity matrix
const idMatrixFlat = idMatrix.reduce((acc, val) => acc.concat(val), []);

/** 
 * Find the index of maximum identity
 * use ... notation to unpack the array for the max function
 * */ 
const maxId = Math.max(...idMatrixFlat);
const maxIndex = idMatrixFlat.findIndex(id => id === maxId);


// Convert index to our matrix coordinates
// First ffind the row
const row = Math.floor(maxIndex / strongPaequor.length);
// Now find the column
const col = maxIndex % strongPaequor.length;

// The pair of most similar specimens
console.log(`\nThe most similar pair of specimens:`)
strongPaequor[row].compareDNA(strongPaequor[col]);

// mutate the dna
console.log(`\nSimulate a mutation on specimen ${paequor1.specimenNum}:`)
console.log(`${paequor1.dna.join('')} (original)`)
paequor1.mutate()
console.log(`${paequor1.dna.join('')} (after mutation)`)




