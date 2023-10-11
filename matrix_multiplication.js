var matrix1 = [
    [1, 2, 3],
    [4, 5, 6]
];

var matrix2 = [
    [7, 8],
    [9, 10],
    [11, 12]
];

var row1 = matrix1.length;
var col1 = matrix1[0].length; 
var row2 = matrix2.length;
var col2 = matrix2[0].length;

if(col1 !== row2)
    console.log("Multiplication is not valid!");
else {
    var matrixRes = new Array(row1);
    for(var i = 0; i < row1; i++)
    {
        matrixRes[i] = new Array(col2);
        for(var j = 0; j < col2; j++)
        {
            matrixRes[i][j] = 0;
        }

    }
}


for(var i = 0; i < row1; i++)
{
    for(var j = 0; j < col2; j++)
    {
        for(var k = 0; k <col1; k++)
        {
            matrixRes[i][j] += matrix1[i][k] * matrix2[k][j];
        }
    }
}

for(var i = 0; i < row1; i++)
{
    console.log(matrixRes[i]);
}
