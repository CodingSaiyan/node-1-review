const cars = [
    {
        make: 'Subaru',
        model: 'Outback',
        id: 1
    },
    {
        make: 'BMW',
        model: 'M3',
        id: 2
    },
    {
        make: 'Honda',
        model: 'Civic',
        id: 3
    }
]

let id = 4;
//module.exports is the same as export in React
module.exports = {
    getCars(req, res) {
        res.status(200).send(cars)
    },
    addCar(req, res) {
        let {make, model} = req.body 
        let car = {
            id,
            make,
            model
        }
        cars.push(car)
        id++;
        res.status(200).send(cars)
    },
    editCar(req, res) {
        let {id} = req.params 
        let {make, model} = req.body 
        for(let i = 0; i < cars.length; i++) {
            if(cars[i].id === Number(id)) {
                cars[i] = {
                    id: cars[i].id,
                    make: make || cars[i].make,
                    model: model || cars[i].model
                }
            }
        }
        res.status(200).send(cars)
    },
    deleteCar(req, res) {
        let {id} = req.params 
        for(let i = 0; i < cars.length; i++) {
            if(cars[i].id === Number(id)) {
                cars.splice(i, 1)
            }
        }
        res.status(200).send(cars)
    }
}