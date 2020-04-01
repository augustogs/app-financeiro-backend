exports.up = function(knex) {
    return knex.schema.createTable('expenses', function(table) {
        table.increments();     
        table.string('local').notNullable();
        table.string('description').notNullable();
        table.string('value').notNullable();
        table.string('user_email').notNullable();

        table.foreign('user_email').references('email').inTable('users');
    }); 
};

exports.down = function(knex) {
    return knex.schema.dropTable('expenses');
};
