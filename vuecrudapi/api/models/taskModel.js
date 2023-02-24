const mongoose = require('mongoose');
const { Schema } = mongoose;
const formStructure = new Schema(
  {
    mainForm: [
      {
        title: String,
        subForm: [
          {
            title: String,
            currentAction: String,
            selected: String,
            options: Array,
            height: Number,
            moderate: Number,
            low: Number,
            aic: Number,
          }
        ]
      }
    ]
  }
);

mongoose.model('FormDefault', formStructure);

// const formModel = mongoose.model('FormDefault', formStructure);

// const formVal = new formModel(
//   {
//     mainForm: [{
//       title: 'องค์กรแสดงถึงความยึดมั่นในคุณค่าของความซื่อตรง (Integrity) และจริยธรรม',
//       subForm: [{
//         title: "คณะกรรมการและผู้บริหารกำหนดแนวทาง และมีการปฏิบัติที่อยู่บนหลักความซื่อตรงและการรักษาจรรยาบรรณในการดำเนินงานที่ครอบคลุมถึง • การปฏิบัติหน้าที่ประจำวันและการตัดสินใจในเรื่องต่างๆ • การปฏิบัติต่อคู่ค้า ลูกค้า และบุคคลภายนอก",
//         currentAction: null,
//         selected: 'Board of Directors',
//         options: ['Board of Directors', 'Management', 'Operation'],
//         height: 1,
//         moderate: 0,
//         low: 0,
//         aic: 0,
//       }]
//     },
//     ]
//   }
// )

// const itemMock1 = [
//   {
//     title: 'maintitleMock1111',
//     subForm: [
//       {
//         title: 'subtitleMock222',
//         currentAction: 'description Mock',
//         selected: 'Management',
//         options: ['Board of Directors', 'Management', 'Operation'],
//         height: 0,
//         moderate: 0,
//         low: 1,
//         aic: 0,
//       }
//     ]
//   }
// ]

// formModel.findOneAndUpdate({}, { $push: { mainForm: itemMock1 } }, { new: true }, (err, doc) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(doc);
//   }
// })

// formVal.save((error) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log('Form saved to database');
//   }
// });

// const datafromvue =
//   [{
//     title: "DataFormVue",
//     subForm: [{
//       title: "คณะกรรมการและผู้บริหารกำหนดแนวทาง และมีการปฏิบัติที่อยู่บนหลักความซื่อตรงและการรักษาจรรยาบรรณในการดำเนินงานที่ครอบคลุมถึง",
//       list: [
//         "•การปฏิบัติหน้าที่ประจำวันและการตัดสินใจในเรื่องต่างๆ",
//         "aadsmfklasmd;fkasd"
//       ]
//     }]
//   },
//   {
//     title: "DataFormVue2",
//     subForm: [{
//       title: "คณะกรรมการและผู้บริหารกำหนดแนวทาง และมีการปฏิบัติที่อยู่บนหลักความซื่อตรงและการรักษาจรรยาบรรณในการดำเนินงานที่ครอบคลุมถึง",
//       list: [
//         "•การปฏิบัติหน้าที่ประจำวันและการตัดสินใจในเรื่องต่างๆ",
//         "aadsmfklasmd;fkasd"
//       ]
//     }]
//   }]

// formVal.Form.push(datafromvue);

// formVal.Form[0].subForm[0].list[1] = "test update"


// formVal.findOne({ _id: '63e9ffb533d15e33eaec2ba5' }, (error, formVal) => {
//   if (error) {
//     console.error(error);
//   }
//   else {
//     datafromvue.forEach(element => {

//       formVal.Form.push(element);
//     });
//   }
// });


// module.exports = mongoose.model('Form1', taskSchema1);