'use strict';

const Nodal = require('nodal');

class CreateUsers extends Nodal.Migration {

    constructor(db) {
        super(db);
        this.id = 2016122104112908;
    }

    up() {

        return [this.createTable("users", [
                {
                    "name": "email",
                    "type": "string",
                    "properties": {
                        "unique": true
                    }
                }, {
                    "name": "password",
                    "type": "string"
                }, {
                    "name": "username",
                    "type": "string",
                    "properties": {
                      "unique": true
                    }
                }, {
                    "name": "display_image",
                    "type": "string"
                }, {
                    "name": "access_level",
                    "type": "int"
                }, {
                    "name": "admin",
                    "type": "boolean"
                }
            ])];

    }

    down() {

        return [this.dropTable("users")];

    }

}

module.exports = CreateUsers;
