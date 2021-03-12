const { models } = require('../configs/database');

//List customer 
async function listar() {
    const result = await models.Customer.findAll();
    if (!result) {
        return { status: 404, response: 'NO se encontraron registros' }
    }
    return { status: 200, response: result }
}

//customer list by id
async function listByID(id) {
    let result = await models.Customer.findByPk(id);
    if (!result) {
        return { status: 404, response: 'NO se encontro el cliente con id: ' + id }
    }
    return { status: 200, response: result }
}

//Create customer
async function add(body) {
    try {
        await models.Customer.create(body);
        return { status: 201, response: 'customer created successfully' }
    } catch (error) {
        return { status: 400, response: 'No fue posible crear el cliente' }
    }
}

//Update customer
async function updateCustomer(body) {
    try {
        if (!body.id) {
            return { status: 400, response: "No se especifico el id del cliente" }
        }

        const cli = await models.Customer.findOne({ where: { id: body.id } });

        if (!cli) {
            return { status: 400, response: "No existe un cliente de id " + body.id }
        }

        await models.Customer.update({ name: body.name, city: body.city }, {
            where: {
                id: body.id
            }
        });
        
        return { status: 202, response: 'Cliente actualizado correctamente' }

    } catch (error) {
        return { status: 500, response: "No fue posible actualizar el cliente con id" + body.id }
    }
}

//Delete customer
async function deleteCustomer(id) {
    let result;
    try {
        result = await models.Customer.destroy({
            where: {
                id
            }
        });

        if (!result) {
            return { status: 404, response: 'NO se encontro el cliente con id: ' + id }
        }
        return { status: 201, response: 'Cliente eliminado' }
    } catch (error) {
        return { status: 404, response: 'No fue posible crear el cliente' }
    }
}

module.exports = {
    listar,
    add,
    listByID,
    updateCustomer,
    deleteCustomer
}