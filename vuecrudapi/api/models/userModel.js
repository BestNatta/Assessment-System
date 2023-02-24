const mongoose = require('mongoose');
const { Schema } = mongoose;
const formUserSchema = new Schema(
    {
        company_name: {
            type: String,
            require: true
        },
        chapter1: {
            type: String,
            require: true
        },
        description1: {
            type: String
        },
        chapter2: {
            type: String,
            require: true
        },
        description2: {
            type: String
        },

        mainForm: [
            {
                title: String,
                subForm: [
                    {
                        title: String,
                        selected: String,
                        operation: String,
                        heightValue: Number,
                        moderateValue: Number,
                        lowValue: Number,
                        aicValue: Number,
                    }
                ]
            }
        ]
    }
);
mongoose.model('Formuser', formUserSchema)