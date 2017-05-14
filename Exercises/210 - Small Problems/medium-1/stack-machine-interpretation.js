/*
A stack is a list of values that grows and shrinks dynamically. A stack may be implemented as an Array that just uses the Array.prototype.push and Array.prototype.pop methods.

A stack-and-register programming language is a language that uses a stack of values. Each operation in the language operates on a register, which can be thought of as the current value. The register is not part of the stack. Operations that require two values pop the topmost item from the stack (that is, the operation removes the most recently pushed value from the stack), perform the operation using the popped value and the register value, and then store the result back in the register.

Consider a MULT operation in a stack-and-register language. It multiplies the stack value with the register value, removes the value from the stack, and then stores the result back in the register. Thus, if we start with a stack of 3 6 4 (where 4 is the topmost item in the stack), and a register value of 7, then the MULT operation will transform things to 3 6 on the stack (the 4 is removed), and the result of the multiplication, 28, is left in the register. If we do another MULT at this point, then the stack is transformed to 3, and the register is left with the value 168.

Write a function that implements a miniature stack-and-register-based programming language that has the following commands:

n Place a value n in the "register". Do not modify the stack.

PUSH Push the register value on to the stack. Leave the value in the register.

ADD Pops a value from the stack and adds it to the register value, storing the result in the register.

SUB Pops a value from the stack and subtracts it from the register value, storing the result in the register.

MULT Pops a value from the stack and multiplies it by the register value, storing the result in the register.

DIV Pops a value from the stack and divides it into the register value, storing the integer result in the register.

MOD Pops a value from the stack and divides it into the register value, storing the integer remainder of the division in the register.

POP Remove the topmost item from the stack and place in register.

PRINT Print the register value.

All operations are integer operations (which is only important with DIV and MOD).

Programs will be supplied to your language function via a string argument. Your program may assume that all programs are correct programs; that is, they won't do anything like try to pop a non-existent value from the stack, and they won't contain unknown tokens.

Initialize the stack and register [] and 0 respectively.

Examples:

minilang('PRINT')
// 0

minilang('5 PUSH 3 MULT PRINT')
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT')
// 5
// 3
// 8

minilang('5 PUSH POP PRINT')
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT')
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT ')
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT ')
// 12

minilang('-3 PUSH 5 SUB PRINT')
// 8

minilang('6 PUSH')
// (nothing printed; no PRINT commands)
*/

// Start with register 0.
// Start with stack [].
// Split the commands into an array of commands.
// Loop through the commands array.
// Have a switch statement for the operations decribed in the problem.
// When a number is read, assign it to register.
// Floor the results of DIV and MOD

var COMMAND_LIST = [
  'PUSH',
  'ADD',
  'SUB',
  'MULT',
  'DIV',
  'MOD',
  'POP',
  'PRINT'
]

function minilang(commands) {
  commands = commands.split(' ').map(function(command) {
    return command.toUpperCase();
  });

  var invalidCommands = [];

  commands.forEach(function(command) {
    if (COMMAND_LIST.indexOf(command) === -1 && /[^\-0-9]/.test(command)) {
      invalidCommands.push(command);
    }
  });

  if (invalidCommands.length !== 0) {
    console.log('INVALID COMMANDS: ' + invalidCommands);
    return;
  }

  var register = 0;
  var stack = [];
  var i;
  
  for (i = 0; i < commands.length; i += 1) {
    if (stack.length === 0 && COMMAND_LIST.slice(1, -1).indexOf(commands[i]) >= 0) {
      console.log('ERROR: NOTHING IN STACK!');
      return;
    }

    switch (commands[i]) {
      case 'PUSH':
        stack.push(register);
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'DIV':
        register = Math.floor(register / stack.pop());
        break;
      case 'MOD':
        register = Math.floor(register % stack.pop());
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'PRINT':
        console.log(register);
        break;
      default:
        register = parseInt(commands[i], 10);
    }
  }
}

minilang('PRINT');
minilang('5 PUSH 3 MULT PRINT');
minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
minilang('5 PUSH POP PRINT');
minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
minilang('3 PUSH PUSH 7 DIV MULT PRINT ');
minilang('4 PUSH PUSH 7 MOD MULT PRINT ');
minilang('-3 PUSH 5 SUB PRINT');
minilang('-3 push 5 SuB PRINT');
minilang('6 PUSH');
minilang('6 test');
minilang('6 PUSH PINT TEST');
minilang('6 PUSH MULT ADD ADD POP DIV PRINT');