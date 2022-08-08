var faker = recquire('faker')

function generateWorkers() {
    var workers = []

    for(var id = 0; id < 10; id++) {
        var firstName = faker.name.firstName();
        var lastName = faker.name.lastName();
        var email = faker.internet.email();

        workers.push({
            "id": id,
            "first_name": firstName,
            "last_name": lastName,
            "email": email
        })
    }


    return {"workers": workers }
}

module.exports = generateWorkers