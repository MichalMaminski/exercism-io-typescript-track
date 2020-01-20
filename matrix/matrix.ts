class Matrix {
    rows: number[][] = [];
    columns: number[][] = [];
    constructor(matrixText: string) {
        matrixText.split('\n').forEach((row, rowIndex) => {
            row.split(' ').forEach( (valueText, colIndex) => {
                let value = Number(valueText);
                if(!this.rows[rowIndex]) {
                    this.rows[rowIndex] = [];
                }
                this.rows[rowIndex].push(value);

                if(!this.columns[colIndex])
                {
                    this.columns[colIndex] = [];
                }
                this.columns[colIndex].push(value);
            })
        });

    }
}

export default Matrix
