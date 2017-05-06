/*
Read and understand the code below. Why will it log debugging?

function debugIt() {
  var status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();
*/

// It will log debugging because the function logger has access to the outer variables.

function debugIt() {
  var status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();