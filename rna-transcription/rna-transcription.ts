class Transcriptor {
    
    dnaToRnaNucleotidsMap: {[nucleotid: string]: string} = {
        "G": "C",
        "C": "G",
        "T": "A",
        "A": "U"
    };

    toRna(dna: string): string {
        let rna = ""; 
        [...dna].forEach(c => {
            if(!this.dnaToRnaNucleotidsMap[c]) {
                throw "Invalid input DNA.";
            }
            rna +=this.dnaToRnaNucleotidsMap[c];
        });

        return rna;
    }
}

export default Transcriptor