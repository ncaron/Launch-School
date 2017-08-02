var todoItems = [
  {id: 1, title: 'Homework'},
  {id: 2, title: 'Shopping'},
  {id: 3, title: 'Calling Mom'},
  {id: 4, title: 'Coffee with John'}
];

var App = {
  todos: todoItems,
  cacheTemplates: function() {
    var todoTemplateID = $('#todo-template');
    var promptTemplateID = $('#prompt-template');

    this.todoTemplate = Handlebars.compile(todoTemplateID.html());
    this.promptTemplate = Handlebars.compile(promptTemplateID.html());

    todoTemplateID.remove();
    promptTemplateID.remove();
  },
  renderTodos: function() {
    $('#todos').append(this.todoTemplate({todo:this.todos}));
  },
  deleteTodo: function() {
    $('[data-id=' + this.todoID + ']').remove();
  },
  renderPrompt: function() {
    $(document.body).append(this.promptTemplate);
  },
  showPrompt: function() {
    $('#delete-prompt').show();
    $('#overlay').show();
  },
  hidePrompt: function() {
    $('#delete-prompt').hide();
    $('#overlay').hide();
  },
  bindPrompt: function() {
    var self = this;

    $('#overlay').off().on('click', function(e) {
      self.hidePrompt();
    });

    $('.buttons').off().on('click', 'a', function(e) {
      e.preventDefault();

      if ($(this).attr('id') === 'yes') {
        self.deleteTodo();
      }

      self.hidePrompt();
    });
  },
  init: function() {
    var self = this;

    self.cacheTemplates();
    self.renderTodos();
    self.renderPrompt();
    self.hidePrompt();

    $('#todos').on('click', '.delete', function(e) {
      self.todoID = $(this).closest('li').attr('data-id');

      self.showPrompt();
      self.bindPrompt();
    });
  }
}

App.init();