// Є об'єкт який характеризує автомобіль
//         вивести на консоль :
//          - виробника
//          - тип двигуна
//          - об'єм двигуна
//          - тип трансміссіі
//
//         let legacy = {
//           type: 'sedan',
//           manufaturer: 'subaru',
//           model: 'legacy',
//           engine: {
//             type: 'ej',
//             series: 204,
//             volume: 2,
//             horsePower: 164
//           },
//           transmission: {
//             type: '4eat'
//           },
//           year: 2007,
//           vinCode: 'bl5lasd123lxcz',
//           color: 'silver'
//         }


let legacy = {
    type: 'sedan',
    manufaturer: 'subaru',
    model: 'legacy',
    engine: {
            type: 'ej',
            series: 204,
            volume: 2,
            horsePower: 164
        },
    transmission: {
            type: '4eat'
        },
    year: 2007,
    vinCode: 'bl5lasd123lxcz',
    color: 'silver'
};

console.log(legacy.manufaturer, legacy.engine.type, legacy.engine.volume, legacy.transmission.type);