function DNAStrand(dna){
    let symbols = {A:'T',T:'A',G:'C',C:'G'};
    return dna.replace(/[A-Z]/g, el => symbols[el])
}