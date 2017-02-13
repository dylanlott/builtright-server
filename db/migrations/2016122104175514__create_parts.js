'use strict';

const Nodal = require('nodal');

class CreateParts extends Nodal.Migration {

    constructor(db) {
        super(db);
        this.id = 2016122104175514;
    }

    up() {

        return [this.createTable("parts", [
                {
                    "name": "name",
                    "type": "string"
                }, {
                    "name": "description",
                    "type": "text"
                }, {
                    "name": "id",
                    "type": "int",
                    "properties": {
                        "nullable":false,
                        "primary_key":true,
                        "auto_increment":true
                    }
                }, {
                    "name": "price",
                    "type": "float"
                }, {
                    "name": "url",
                    "type": "string"
                }, {
                    "name": "brand",
                    "type": "string"
                }, {
                    "name": "model",
                    "type": "string"
                }, {
                    "name": "option",
                    "type": "string"
                }, {
                    "name": "user_id",
                    "type": "int"
                }, {
                    "name": "rating",
                    "type": "float"
                }, {
                    "name": "build_id",
                    "type": "int"
                }, {
                    "name": "for_sale",
                    "type": "boolean"
                }, {
                    "name": "sale_price",
                    "type": "float"
                }, {
                    "name": "misc",
                    "type": "json"
                }
            ])];

    }

    down() {

        return [this.dropTable("parts")];

    }

}

module.exports = CreateParts;
