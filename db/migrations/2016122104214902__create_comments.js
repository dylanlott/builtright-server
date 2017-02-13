'use strict';

const Nodal = require('nodal');

class CreateComments extends Nodal.Migration {

    constructor(db) {
        super(db);
        this.id = 2016122104214902;
    }

    up() {

        return [this.createTable("comments", [
                {
                    "name": "body",
                    "type": "text"
                }, {
                    "name": "hidden",
                    "type": "boolean"
                }, {
                    "name": "user_id",
                    "type": "int"
                }, {
                    "name": "status",
                    "type": "string"
                }, {
                    "name": "votes",
                    "type": "int"
                }, {
                    "name": "flagged",
                    "type": "boolean"
                },
                {
                    "name": "build_id",
                    "type": "int"
                },
                {
                    "name": "post_id",
                    "type": "int"
                },
                {
                    "name": "part_id",
                    "type": "int"
                }
            ])];

    }

    down() {

        return [this.dropTable("comments")];

    }

}

module.exports = CreateComments;
