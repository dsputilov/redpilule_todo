$.Controller.register('todoApp', {
	init: function(self) {
		$.G.modelMerge({ todos: [] });
		self.$myTodo = $("@todoTemplate")
			.logicSet(self)
			.modelSet({ newTodo:'', filter:{} })
			.appendTo(document.body);
	},
	todoAdd: function (self) {
		$.G.model.todos.push({
			text:		self.$myTodo.model.newTodo,
			status:		false
		});
		self.$myTodo.model.newTodo = '';
	},
	todoRemove: function(self, id) {
		$.G.modelDelete('todos.'+id);
	}
});

$.Controller.register('todo_all', {
	start: function(self) {
		$.Router('todoApp').$myTodo.model.filter = {};
	}
});
$.Controller.register('todo_active', {
	start: function(self) {
		$.Router('todoApp').$myTodo.model.filter = {status: false};
	}
});
$.Controller.register('todo_completed', {
	start: function(self) {
		$.Router('todoApp').$myTodo.model.filter = {status: true};
	}
});