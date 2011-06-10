spreadsheet = [[0,1,2],[0,1,2]];
function addColumn() {
  for (i in spreadsheet) { 
    row_length = i.length;
    spreadsheet[i][row_length + 2] = '';
    };
};
