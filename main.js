const { menu } = require("./menu")
const { register } = require("./register")
const { list_all } = require("./list_all")
const { list_id } = require("./list_id")
const { edit } = require("./edit")
const { remove } = require("./delete")
const { avarege } = require("./avarege")

function main() {
    while (true) {
        choice = parseInt(menu())
        switch (choice) {
            case 1:
                register()
                break
            case 2:
                list_all()
                break
            case 3:
                list_id()
                break
            case 4:
                edit()
                break
            case 5:
                remove()
                break
            case 6:
                avarege()
                break
        }
    }
}


main()