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
    var contextmenuTemplateID = $('#contextmenu-template');
    var promptTemplateID = $('#prompt-template');

    this.todoTemplate = Handlebars.compile(todoTemplateID.html());
    this.contextmenuTemplate = Handlebars.compile(contextmenuTemplateID.html());
    this.promptTemplate = Handlebars.compile(promptTemplateID.html());

    todoTemplateID.remove();
    contextmenuTemplateID.remove();
    promptTemplateID.remove();
  },
  renderTodos: function() {
    $('#todos').append(this.todoTemplate({todo:this.todos}));
  },
  deleteTodo: function() {
    $('[data-id=' + this.todoID + ']').remove();
  },
  renderContextmenu: function() {
    $(document.body).append(this.contextmenuTemplate);
  },
  hideContextmenu: function() {
    $('#contextmenu').hide();
  },
  showContextMenu: function(top, left) {
    $('#contextmenu').css({
      top: top,
      left: left
    }).fadeIn(100);
  },
  renderPrompt: function() {
    $(document.body).append(this.promptTemplate);
  },
  showPrompt: function() {
    $('#delete-prompt').fadeIn(100);
    $('#overlay').fadeIn(100);
  },
  hidePrompt: function() {
    $('#delete-prompt').hide();
    $('#overlay').hide();
  },
  bindTodos: function() {
    var self = this;

    $('#todos').on('contextmenu', 'li', function(e) {
      e.preventDefault();

      self.todoID = $(this).attr('data-id');

      var top = e.pageY;
      var left = e.pageX;

      self.showContextMenu(top, left);
    });
  },
  bindContextMenu: function() {
    var self = this;

    $('#contextmenu').off().on('click', 'li', function(e) {
      if ($(this).attr('id') === 'delete') {
        self.showPrompt();
        self.bindPrompt();
      }
    });
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
    self.bindTodos();
    self.renderContextmenu();
    self.hideContextmenu();
    self.bindContextMenu();
    self.renderPrompt();
    self.hidePrompt();

    $(document).on('click', function(e) {
      self.hideContextmenu();
    });
  }
}

App.init();