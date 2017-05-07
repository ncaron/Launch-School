/*
At the end of each term, faculty members need to prepare a class record summary for students based on the weighted
scores of exams and exercises. In this exercise, we will prepare one such summary from some provided student records.

Exams and Exercises

Grading areas include exams and exercises, with the following weights:

Grading Area  Weight
Exam  65%
Exercises 35%

Each term has four exams, and several exercises. Every exam has a fixed maximum score of 100, while exercises have
varied maximum score values and counts. The total maximum point value for all exercises in any term is always 100,
regardless of how many exercises the students had to complete. For example, a term may have five exercises with possible
score maximums of [30, 20, 10, 20, 20] while another term may have three exercises with possible score maximums of
[20, 30, 50].

To determine a student's grade, we first determine the student's average score from the four exams, then sum all the
exercise scores. We then apply the weights to compute the student's final percent grade. Finally, we determine the
letter equivalent grade from the student's percent grade we just computed.

Percent Grade Letter Equivalent
93 - 100  A
85 - 92 B
77 - 84 C
69 - 76 D
60 - 68 E
0 - 59  F

For example, let's assume a term with three exercises with maximum scores of [20, 30, 50]. A student got
[90, 80, 95, 70] on her four exams, and [20, 15, 40] on her exercises. To determine her final grade, we follow
these steps:

Compute the student's average exam score: (90 + 80 + 95 + 71) / 4 = 84
Compute the student's total exercise score: 20 + 15 + 40 = 75
Apply weights to determine the final percent grade: 84 * .65 + 75 * .35 = 80.85
Round the percent grade to the nearest integer: 81
Lookup the letter grade in the table above: C
Combine the percent grade and letter grade: "81 (C)"

Source Data and Class Record Summary Format

We store the student data in an object that looks like this:

var studentScores = {
  student1: {
    id: <idNumber>,
    scores: {
      exams: [],
      exercises: []
    },
  },
  student2: {
    id: <idNumber>,
    scores: {
      exams: [],
      exercises: []
    },
  },
  student3: {
    id: <idNumber>,
    scores: {
      exams: [],
      exercises: []
    },
  },
  studentN: {
    id: <idNumber>,
    scores: {
      exams: [],
      exercises: []
    },
  },
};

The output class record summary should look like this:

{
  studentGrades: [ '93 (A)', '81 (C)', '86 (B)', '100 (A)', '69 (D)' ],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 }
  ],
}

Round the exam averages to one digit after the decimal point.

Function Requirements

Given this information, implement a function that takes a studentScores object and returns a class record summary object.

You can use the following code to test your implementation:

var studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  // ...
};

generateClassRecordSummary(studentScores);

// returns:

{
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
}
*/

function generateClassRecordSummary(scores) {
  var scoreData = Object.keys(scores).map(function(student) {
    return scores[student].scores;
  });

  var examData = scoreData.map(function(score) {
    return score.exams;
  });

  return {
    studentGrades: scoreData.map(function(scoreObj) {
      return getStudentScore(scoreObj);
    }),
    exams: getExamScores(examData)
  }
};

function getStudentScore(scoreObj) {
  var exerciseScore = sum(scoreObj.exercises);
  var examScore = sum(scoreObj.exams) / 4;
  var total = applyWeights(exerciseScore, examScore);

  return String(total) + ' (' + getLetter(total) + ')';
}

function sum(scores) {
  return scores.reduce(function(sum, score) {
    return sum + score;
  });
}

function applyWeights(exerciseScore, examScore) {
  return Math.round((exerciseScore * 0.35) + (examScore * 0.65));
}

function getLetter(score) {
  if (score >= 93) {
    return 'A';
  } else if (score >= 85) {
    return 'B';
  } else if (score >= 77) {
    return 'C';
  } else if (score >= 69) {
    return 'D';
  } else if (score >= 60) {
    return 'E';
  } else {
    return 'F';
  }
}

function getExamScores(examData) {
  var exams = transpose(examData);

  return exams.map(function(examScores) {
    return {
      average: getExamAverage(examScores),
      minimum: getExamMinimum(examScores),
      maximum: getExamMaximum(examScores)
    }
  });
}

function transpose(examData) {
  var exams = [];
  var inner = [];
  var i;
  var j;

  for (i = 0; i < 4; i += 1) {
    inner = [];
    for (j = 0; j < examData.length; j += 1) {
      inner.push(examData[j][i]);
    }
    exams.push(inner);
  }

  return exams;
}

function getExamAverage(exams) {
  return sum(exams) / exams.length;
}

function getExamMinimum(exams) {
  return exams.reduce(function(min, score) {
    return min <= score ? min : score;
  })
}

function getExamMaximum(exams) {
  return exams.reduce(function(max, score) {
    return max >= score ? max : score;
  })
}

var studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

console.log(generateClassRecordSummary(studentScores));